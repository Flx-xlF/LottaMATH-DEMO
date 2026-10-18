/**
 * Sync Service for LottaMATH
 * 
 * Handles cross-device synchronization with cyon.ch PHP/MariaDB backend.
 * Local-first architecture: localStorage is immediate, REST API syncs in background.
 * Uses a monotonic merge algorithm to ensure no progress is ever lost.
 */

const API_BASE = './api';

/**
 * Standalone mock for demo environment on GitHub Pages (no PHP/MariaDB required).
 */
async function mockFetch(url, options = {}) {
  let body = {};
  try {
    body = JSON.parse(options.body || "{}");
  } catch {}

  const action = body.action;
  let data = { success: true };

  if (action === "register") {
    const token = "demo-sync-" + body.profile_id;
    const code = getRecoveryCode(body.profile_id) || ensureLocalRecoveryCode(body.profile_id);
    data = { success: true, sync_token: token, recovery_code: code, profile_id: body.profile_id };
  } else if (action === "push") {
    data = { success: true, state: body.state, state_version: (body.state_version || 0) + 1 };
  } else if (action === "pull") {
    const profiles = JSON.parse(localStorage.getItem("lottamath_profiles") || "[]");
    const token = (options.headers && options.headers["X-Sync-Token"]) || "";
    const profileId = token.replace("demo-sync-", "");
    const match = profiles.find((p) => p.id === profileId);
    const raw = profileId ? localStorage.getItem("lottamath_profile_" + profileId + "_state") : null;
    data = {
      success: true,
      profile: match ? { profile_id: match.id, nickname: match.nickname, avatar: match.avatar, recovery_code: getRecoveryCode(match.id) } : null,
      state: raw ? JSON.parse(raw) : null,
      state_version: 1,
    };
  } else if (action === "lookup") {
    const code = (body.recovery_code || "").trim().toUpperCase();
    const profiles = JSON.parse(localStorage.getItem("lottamath_profiles") || "[]");
    const match = profiles.find((p) => {
      const stored = localStorage.getItem("lottamath_recovery_code_" + p.id);
      return stored && stored.trim().toUpperCase() === code;
    });
    if (match) {
      const raw = localStorage.getItem("lottamath_profile_" + match.id + "_state");
      data = {
        success: true,
        sync_token: "demo-sync-" + match.id,
        recovery_code: code,
        profile: {
          profile_id: match.id,
          nickname: match.nickname,
          avatar: match.avatar,
          recovery_code: code,
        },
        state: raw ? JSON.parse(raw) : null,
        state_version: 1,
      };
    } else {
      return { ok: false, status: 404, json: async () => ({ error: "Code nicht gefunden" }) };
    }
  } else if (action === "update_profile") {
    data = { success: true };
  } else if (action === "delete") {
    data = { success: true };
  }

  return {
    ok: true,
    status: 200,
    json: async () => data,
  };
}

const SYNC_DEBOUNCE_MS = 2000;
const SYNC_TOKEN_PREFIX = 'lottamath_sync_token_';
const SYNC_VERSION_PREFIX = 'lottamath_sync_version_';
const RECOVERY_CODE_PREFIX = 'lottamath_recovery_code_';
const PENDING_DELETES_KEY = 'lottamath_pending_deletes';

// Sync status state
let _syncStatus = 'idle'; // 'idle' | 'syncing' | 'synced' | 'offline' | 'error' | 'unregistered'
const _statusListeners = new Set();

const _pushTimers = {};

/**
 * Retrieves the stored sync token for a profile from localStorage.
 * @param {string} profileId
 * @returns {string|null}
 */
export function getSyncToken(profileId) {
  if (!profileId) return null;
  try {
    return localStorage.getItem(SYNC_TOKEN_PREFIX + profileId);
  } catch (e) {
    console.warn('Unable to read sync token:', e);
    return null;
  }
}

/**
 * Saves a sync token for a profile to localStorage.
 * @param {string} profileId
 * @param {string} token
 */
export function setSyncToken(profileId, token) {
  if (!profileId) return;
  try {
    if (token) {
      localStorage.setItem(SYNC_TOKEN_PREFIX + profileId, token.trim());
    } else {
      localStorage.removeItem(SYNC_TOKEN_PREFIX + profileId);
    }
  } catch (e) {
    console.warn('Unable to save sync token:', e);
  }
}

/**
 * Checks whether a profile has a registered sync token.
 * @param {string} profileId
 * @returns {boolean}
 */
export function hasSyncToken(profileId) {
  return Boolean(getSyncToken(profileId));
}

/**
 * Gets the current state version for a profile.
 * @param {string} profileId
 * @returns {number}
 */
export function getSyncVersion(profileId) {
  if (!profileId) return 0;
  try {
    const val = localStorage.getItem(SYNC_VERSION_PREFIX + profileId);
    return val ? parseInt(val, 10) || 0 : 0;
  } catch {
    return 0;
  }
}

/**
 * Sets the current state version for a profile.
 * @param {string} profileId
 * @param {number} version
 */
export function setSyncVersion(profileId, version) {
  if (!profileId) return;
  try {
    localStorage.setItem(SYNC_VERSION_PREFIX + profileId, String(version || 0));
  } catch (e) {
    console.warn('Unable to save sync version:', e);
  }
}

/**
 * Clears sync data for a deleted profile.
 * @param {string} profileId
 */
export function clearProfileSync(profileId) {
  if (!profileId) return;
  if (_pushTimers[profileId]) {
    clearTimeout(_pushTimers[profileId]);
    delete _pushTimers[profileId];
  }
  try {
    localStorage.removeItem(SYNC_TOKEN_PREFIX + profileId);
    localStorage.removeItem(SYNC_VERSION_PREFIX + profileId);
    localStorage.removeItem(RECOVERY_CODE_PREFIX + profileId);
  } catch (e) {
    /* ignore */
  }
}

export const RECOVERY_ALPHABET = 'ABCDEFGHJKMNPQRTUVWXYZ2346789';

/**
 * Generates an 8-character human-friendly sync/recovery code (XXXX-XXXX).
 * Uses unambiguous uppercase letters and digits.
 * @returns {string}
 */
export function generateClientRecoveryCode() {
  const getRandomChar = () => {
    if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
      const arr = new Uint32Array(1);
      crypto.getRandomValues(arr);
      return RECOVERY_ALPHABET[arr[0] % RECOVERY_ALPHABET.length];
    }
    return RECOVERY_ALPHABET[Math.floor(Math.random() * RECOVERY_ALPHABET.length)];
  };

  let p1 = '';
  let p2 = '';
  for (let i = 0; i < 4; i++) p1 += getRandomChar();
  for (let i = 0; i < 4; i++) p2 += getRandomChar();
  return `${p1}-${p2}`;
}

/**
 * Ensures an 8-character recovery code exists locally for a profile.
 * If missing, generates and saves one immediately.
 * @param {string} profileId
 * @returns {string}
 */
export function ensureLocalRecoveryCode(profileId) {
  if (!profileId) return '';
  let code = getRecoveryCode(profileId);
  if (!code || !/^[A-Z2-9]{4}-[A-Z2-9]{4}$/.test(code)) {
    code = generateClientRecoveryCode();
    setRecoveryCode(profileId, code);
  }
  return code;
}

/**
 * Gets the stored recovery code for a profile.
 * @param {string} profileId
 * @returns {string|null}
 */
export function getRecoveryCode(profileId) {
  if (!profileId) return null;
  try {
    return localStorage.getItem(RECOVERY_CODE_PREFIX + profileId);
  } catch {
    return null;
  }
}

/**
 * Sets the recovery code for a profile.
 * @param {string} profileId
 * @param {string} code
 */
export function setRecoveryCode(profileId, code) {
  if (!profileId) return;
  try {
    if (code) {
      localStorage.setItem(RECOVERY_CODE_PREFIX + profileId, code);
    } else {
      localStorage.removeItem(RECOVERY_CODE_PREFIX + profileId);
    }
  } catch (e) {
    console.warn('Unable to save recovery code:', e);
  }
}

/**
 * Gets the current global sync status.
 * @returns {'idle'|'syncing'|'synced'|'offline'|'error'|'unregistered'}
 */
export function getSyncStatus() {
  return _syncStatus;
}

/**
 * Subscribes to sync status changes.
 * @param {(status: 'idle'|'syncing'|'synced'|'offline'|'error'|'unregistered') => void} callback
 * @returns {() => void} Unsubscribe function
 */
export function onSyncStatusChange(callback) {
  if (typeof callback === 'function') {
    _statusListeners.add(callback);
    callback(_syncStatus);
  }
  return () => {
    _statusListeners.delete(callback);
  };
}

/**
 * Updates the internal sync status and notifies all listeners.
 * @param {'idle'|'syncing'|'synced'|'offline'|'error'|'unregistered'} newStatus
 */
function _setStatus(newStatus) {
  if (_syncStatus !== newStatus) {
    _syncStatus = newStatus;
    _statusListeners.forEach((fn) => {
      try {
        fn(_syncStatus);
      } catch (e) {
        console.warn('Sync status listener error:', e);
      }
    });
  }
}

/**
 * Helper to fetch local profile data to avoid circular dependencies with profileManager.
 */
function _getLocalProfileData(profileId) {
  try {
    const profiles = JSON.parse(localStorage.getItem('lottamath_profiles') || '[]');
    return profiles.find(p => p.id === profileId) || null;
  } catch {
    return null;
  }
}

/**
 * Ensures a profile is registered with the sync server.
 * If no sync token exists locally, it attempts a lazy background registration.
 */
// In-flight registration promise cache to prevent concurrent registration race conditions
const _regPromises = new Map();
let _pendingPush = null;

export async function ensureRegistered(profileId) {
  let token = getSyncToken(profileId);
  if (token) return token;

  const profile = _getLocalProfileData(profileId);
  if (!profile) return null;

  _setStatus('syncing');
  token = await registerProfile(profile.id, profile.nickname, profile.avatar);
  if (!token) {
    _setStatus(typeof navigator !== 'undefined' && navigator.onLine === false ? 'offline' : 'unregistered');
  }
  return token;
}

/**
 * Registers a new profile with the sync server to obtain a sync_token.
 * Idempotent: returns existing token if already registered, deduplicates concurrent requests.
 * @param {string} profileId
 * @param {string} nickname
 * @param {string} avatar
 * @returns {Promise<string|null>} The generated sync_token or null on failure
 */
export async function registerProfile(profileId, nickname, avatar) {
  if (!profileId || !nickname || !avatar) return null;

  const existingToken = getSyncToken(profileId);
  if (existingToken) return existingToken;

  if (_regPromises.has(profileId)) {
    return _regPromises.get(profileId);
  }

  const localRecoveryCode = ensureLocalRecoveryCode(profileId);

  const p = (async () => {
    try {
      const response = await mockFetch(`${API_BASE}/sync.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          action: 'register',
          profile_id: profileId,
          nickname,
          avatar,
          recovery_code: localRecoveryCode,
        }),
      });

      if (!response.ok) {
        console.warn('Sync registration returned non-ok status:', response.status);
        return null;
      }

      const data = await response.json();
      if (data && data.success && data.sync_token) {
        setSyncToken(profileId, data.sync_token);
        if (data.recovery_code) {
          setRecoveryCode(profileId, data.recovery_code);
        }
        return data.sync_token;
      }
    } catch (err) {
      console.warn('Sync registration network error (offline?):', err);
    }
    return null;
  })();

  _regPromises.set(profileId, p);
  try {
    return await p;
  } finally {
    _regPromises.delete(profileId);
  }
}

/**
 * Pushes the current game state to the server.
 * @param {string} profileId
 * @param {Object} gameState
 * @param {boolean} [retryOn401=true]
 * @returns {Promise<{success: boolean, state?: Object, state_version?: number}>}
 */
export async function pushState(profileId, gameState, retryOn401 = true) {
  if (!gameState) {
    return { success: false };
  }

  const syncToken = await ensureRegistered(profileId);
  if (!syncToken) {
    _pendingPush = { profileId, gameState };
    return { success: false };
  }

  _setStatus('syncing');

  try {
    const currentVersion = getSyncVersion(profileId);

    const response = await mockFetch(`${API_BASE}/sync.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        action: 'push',
        sync_token: syncToken,
        state: gameState,
        state_version: currentVersion,
      }),
    });

    if (!response.ok) {
      if (response.status === 401 && retryOn401) {
        // Stale token recovery: clear invalid token and retry once
        setSyncToken(profileId, null);
        return pushState(profileId, gameState, false);
      }
      if (response.status === 401 || response.status === 400) {
        _setStatus('error');
      } else {
        _pendingPush = { profileId, gameState };
        _setStatus('offline');
      }
      return { success: false };
    }

    const data = await response.json();
    if (data && data.success) {
      if (data.state_version) {
        setSyncVersion(profileId, data.state_version);
      }
      if (data.recovery_code) {
        setRecoveryCode(profileId, data.recovery_code);
      }
      _pendingPush = null;
      _setStatus('synced');
      return data;
    }

    _setStatus('error');
    return { success: false };
  } catch (err) {
    console.warn('Sync push network error:', err);
    _pendingPush = { profileId, gameState };
    _setStatus('offline');
    return { success: false };
  }
}

/**
 * Schedules a debounced sync push (2 seconds) to avoid spamming the backend.
 * @param {string} profileId
 * @param {Object} gameState
 */
export function debouncedPush(profileId, gameState) {
  if (!profileId || !gameState) return;

  if (_pushTimers[profileId]) {
    clearTimeout(_pushTimers[profileId]);
  }

  _pushTimers[profileId] = setTimeout(() => {
    delete _pushTimers[profileId];
    pushState(profileId, gameState);
  }, SYNC_DEBOUNCE_MS);
}

/**
 * Pulls the latest game state for a profile from the server.
 * @param {string} profileId
 * @param {boolean} [retryOn401=true]
 * @returns {Promise<{state: Object, state_version: number, profile: Object}|null>}
 */
export async function pullState(profileId, retryOn401 = true) {
  const syncToken = await ensureRegistered(profileId);
  if (!syncToken) return null;

  _setStatus('syncing');

  try {
    const response = await mockFetch(`${API_BASE}/sync.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        action: 'pull',
        sync_token: syncToken,
      }),
    });

    if (!response.ok) {
      if (response.status === 401 && retryOn401) {
        // Stale token recovery: clear invalid token and retry once
        setSyncToken(profileId, null);
        return pullState(profileId, false);
      }
      if (response.status === 401) {
        _setStatus('error');
      } else {
        _setStatus('offline');
      }
      return null;
    }

    const data = await response.json();
    if (data && data.success && data.state) {
      if (data.state_version) {
        setSyncVersion(profileId, data.state_version);
      }
      if (data.profile && data.profile.recovery_code) {
        setRecoveryCode(profileId, data.profile.recovery_code);
      }
      _setStatus('synced');
      return data;
    }

    _setStatus('error');
    return null;
  } catch (err) {
    console.warn('Sync pull network error:', err);
    _setStatus('offline');
    return null;
  }
}

/**
 * Triggers an immediate full bidirectional sync for a profile.
 * Ensures registration, pulls latest server state, merges with local, and pushes back.
 * @param {string} profileId
 * @returns {Promise<{success: boolean, status: string, error?: string}>}
 */
export async function syncNow(profileId) {
  if (!profileId) {
    return { success: false, status: 'no_profile' };
  }

  _setStatus('syncing');

  try {
    const token = await ensureRegistered(profileId);
    if (!token) {
      const isOff = typeof navigator !== 'undefined' && navigator.onLine === false;
      _setStatus(isOff ? 'offline' : 'unregistered');
      return {
        success: false,
        status: isOff ? 'offline' : 'unregistered',
        error: isOff ? 'Keine Internetverbindung' : 'Server-Registrierung fehlgeschlagen',
      };
    }

    const pulled = await pullState(profileId);
    const stateKey = 'lottamath_state_' + profileId;
    let localState = null;
    try {
      const raw = localStorage.getItem(stateKey);
      if (raw) localState = JSON.parse(raw);
    } catch {
      /* ignore */
    }

    if (pulled && pulled.state) {
      const merged = mergeStates(localState, pulled.state);
      localStorage.setItem(stateKey, JSON.stringify(merged));
      await pushState(profileId, merged);
      _setStatus('synced');
      return { success: true, status: 'synced' };
    } else if (localState) {
      await pushState(profileId, localState);
      _setStatus('synced');
      return { success: true, status: 'synced' };
    }

    _setStatus('synced');
    return { success: true, status: 'synced' };
  } catch (err) {
    console.warn('syncNow failed:', err);
    _setStatus('error');
    return { success: false, status: 'error', error: err.message };
  }
}

/**
 * Flushes any pending background sync when device wakes up or reconnects
 */
export async function flushPendingSync() {
  if (_pendingPush && _pendingPush.profileId && _pendingPush.gameState) {
    const { profileId, gameState } = _pendingPush;
    await pushState(profileId, gameState);
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => {
    flushPendingSync().catch(() => {});
  });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      flushPendingSync().catch(() => {});
    }
  });
}

/**
 * Links a profile from another device using a Sync-Code (sync_token).
 * @param {string} syncToken
 * @returns {Promise<{state: Object, state_version: number, profile: {profile_id: string, nickname: string, avatar: string, recovery_code?: string}}|null>}
 */
export async function linkProfile(syncToken) {
  if (!syncToken) return null;

  const response = await mockFetch(`${API_BASE}/sync.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      action: 'link',
      sync_token: syncToken.trim(),
    }),
  });

  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || `Verbindungsfehler (${response.status})`);
  }

  const data = await response.json();
  if (data && data.success && data.profile) {
    if (data.profile.recovery_code) {
      setRecoveryCode(data.profile.profile_id, data.profile.recovery_code);
    }
    return data;
  }

  return null;
}

/**
 * Looks up a profile by its human-friendly recovery code (XXXX-XXXX).
 * @param {string} recoveryCode
 * @returns {Promise<{sync_token: string, state: Object, state_version: number, profile: Object}|null>}
 */
export async function lookupByRecoveryCode(recoveryCode) {
  if (!recoveryCode) return null;

  const cleanCode = recoveryCode.trim().toUpperCase();
  const response = await mockFetch(`${API_BASE}/sync.php`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      action: 'lookup',
      recovery_code: cleanCode,
    }),
  });

  if (!response.ok) {
    if (response.status === 404) return null;
    const errorBody = await response.json().catch(() => ({}));
    throw new Error(errorBody.error || `Verbindungsfehler (${response.status})`);
  }

  const data = await response.json();
  if (data && data.success && data.profile) {
    if (data.profile.recovery_code) {
      setRecoveryCode(data.profile.profile_id, data.profile.recovery_code);
    } else {
      setRecoveryCode(data.profile.profile_id, cleanCode);
    }
    return data;
  }
  return null;
}

/**
 * Deletes a profile from the sync server directly by sync token (GDPR wipe).
 * @param {string} syncToken
 * @returns {Promise<boolean>}
 */
export async function deleteServerProfileByToken(syncToken) {
  if (!syncToken) return false;

  try {
    const response = await mockFetch(`${API_BASE}/sync.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        action: 'delete',
        sync_token: syncToken,
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Updates a profile's nickname/avatar on the sync server.
 * @param {string} syncToken
 * @param {string} nickname
 * @param {string} [avatar]
 * @returns {Promise<boolean>}
 */
export async function updateServerProfile(syncToken, nickname, avatar) {
  if (!syncToken || !nickname) return false;

  try {
    const payload = {
      action: 'update_profile',
      sync_token: syncToken,
      nickname,
    };
    if (avatar) payload.avatar = avatar;

    const response = await mockFetch(`${API_BASE}/sync.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response.ok;
  } catch {
    return false;
  }
}

/**
 * Queues a sync token for server deletion (persisted in localStorage).
 * @param {string} syncToken
 */
export function queuePendingDelete(syncToken) {
  if (!syncToken) return;
  try {
    const raw = localStorage.getItem(PENDING_DELETES_KEY);
    const list = raw ? JSON.parse(raw) : [];
    if (!list.includes(syncToken)) {
      list.push(syncToken);
      localStorage.setItem(PENDING_DELETES_KEY, JSON.stringify(list));
    }
  } catch (e) {
    console.warn('Unable to queue pending delete:', e);
  }
}

/**
 * Flushes all pending server profile deletions.
 * Safe to call repeatedly; removes successfully deleted tokens from queue.
 * @returns {Promise<void>}
 */
export async function processPendingDeletes() {
  try {
    const raw = localStorage.getItem(PENDING_DELETES_KEY);
    if (!raw) return;
    const list = JSON.parse(raw);
    if (!Array.isArray(list) || list.length === 0) return;

    const remaining = [];
    for (const token of list) {
      const ok = await deleteServerProfileByToken(token);
      if (!ok) {
        remaining.push(token);
      }
    }

    if (remaining.length > 0) {
      localStorage.setItem(PENDING_DELETES_KEY, JSON.stringify(remaining));
    } else {
      localStorage.removeItem(PENDING_DELETES_KEY);
    }
  } catch (e) {
    console.warn('Error processing pending deletes:', e);
  }
}

/**
 * Deletes a profile from the sync server (GDPR wipe).
 * @param {string} profileId
 * @returns {Promise<boolean>}
 */
export async function deleteServerProfile(profileId) {
  const syncToken = getSyncToken(profileId);
  if (!syncToken) return false;
  return deleteServerProfileByToken(syncToken);
}

/**
 * Pure function to merge local state and server state without data loss.
 * Monotonically combines progress metrics (XP, stars, streaks, achievements).
 * @param {Object} localState
 * @param {Object} serverState
 * @returns {Object} Merged game state
 */
export function mergeStates(localState, serverState) {
  if (!localState && !serverState) return null;
  if (!localState) return { ...serverState };
  if (!serverState) return { ...localState };

  // 0. Generation Epoch check: If one state is from a newer reset generation, it completely takes precedence
  const lGen = Number(localState.generation) || 1;
  const sGen = Number(serverState.generation) || 1;
  if (lGen > sGen) {
    return { ...localState };
  }
  if (sGen > lGen) {
    return { ...serverState };
  }
  const generation = lGen;

  // 1. Total XP: Monotonic max
  const totalXP = Math.max(localState.totalXP || 0, serverState.totalXP || 0);

  // 2. Levels: Union with max values
  const allLevelKeys = Array.from(new Set([
    ...Object.keys(localState.levels || {}),
    ...Object.keys(serverState.levels || {}),
  ]));

  const mergedLevels = {};
  for (const lvlKey of allLevelKeys) {
    const lProg = (localState.levels && localState.levels[lvlKey]) || {};
    const sProg = (serverState.levels && serverState.levels[lvlKey]) || {};

    const stars = Math.max(lProg.stars || 0, sProg.stars || 0);
    const bestScore = Math.max(lProg.bestScore || 0, sProg.bestScore || 0);
    const attempts = Math.max(lProg.attempts || 0, sProg.attempts || 0);
    const completed = Boolean(lProg.completed || sProg.completed || stars >= 1);

    mergedLevels[lvlKey] = {
      stars,
      bestScore,
      attempts,
      completed,
    };
  }

  if (!mergedLevels['1-1']) {
    mergedLevels['1-1'] = { stars: 0, bestScore: 0, attempts: 0, completed: false };
  }

  // 3. Streak
  const lStreak = localState.streak || {};
  const sStreak = serverState.streak || {};
  const lDate = lStreak.lastActiveDate || null;
  const sDate = sStreak.lastActiveDate || null;

  const bestStreak = Math.max(lStreak.best || 0, sStreak.best || 0);
  let currentStreak = 0;
  let lastActiveDate = null;

  if (lDate && sDate) {
    if (lDate > sDate) {
      lastActiveDate = lDate;
      currentStreak = lStreak.current || 0;
    } else if (sDate > lDate) {
      lastActiveDate = sDate;
      currentStreak = sStreak.current || 0;
    } else {
      lastActiveDate = lDate;
      currentStreak = Math.max(lStreak.current || 0, sStreak.current || 0);
    }
  } else if (lDate) {
    lastActiveDate = lDate;
    currentStreak = lStreak.current || 0;
  } else if (sDate) {
    lastActiveDate = sDate;
    currentStreak = sStreak.current || 0;
  }

  const mergedStreak = {
    current: currentStreak,
    best: Math.max(bestStreak, currentStreak),
    lastActiveDate,
  };

  // 4. Achievements: Unique union
  const lAch = Array.isArray(localState.achievements) ? localState.achievements : [];
  const sAch = Array.isArray(serverState.achievements) ? serverState.achievements : [];
  const mergedAchievements = Array.from(new Set([...lAch, ...sAch]));

  // 5. Seen Intros: Unique union
  const lIntros = Array.isArray(localState.seenIntros) ? localState.seenIntros.map(String) : [];
  const sIntros = Array.isArray(serverState.seenIntros) ? serverState.seenIntros.map(String) : [];
  const mergedSeenIntros = Array.from(new Set([...lIntros, ...sIntros]));

  // 6. Mistake Vault & Resolved Mistakes: Time-based reconciliation with tombstone fallback
  const lVault = new Set(Array.isArray(localState.mistakeVault) ? localState.mistakeVault : []);
  const sVault = new Set(Array.isArray(serverState.mistakeVault) ? serverState.mistakeVault : []);
  const lResolved = new Set(Array.isArray(localState.resolvedMistakes) ? localState.resolvedMistakes : []);
  const sResolved = new Set(Array.isArray(serverState.resolvedMistakes) ? serverState.resolvedMistakes : []);

  const lTimestamps = (localState.mistakeTimestamps && typeof localState.mistakeTimestamps === 'object' && !Array.isArray(localState.mistakeTimestamps))
    ? localState.mistakeTimestamps
    : {};
  const sTimestamps = (serverState.mistakeTimestamps && typeof serverState.mistakeTimestamps === 'object' && !Array.isArray(serverState.mistakeTimestamps))
    ? serverState.mistakeTimestamps
    : {};

  const allMistakeIds = Array.from(new Set([
    ...lVault,
    ...sVault,
    ...lResolved,
    ...sResolved,
  ]));

  const mergedVaultSet = new Set();
  const mergedResolvedSet = new Set();
  const mergedTimestamps = {};

  for (const id of allMistakeIds) {
    const inLVault = lVault.has(id);
    const inSVault = sVault.has(id);
    const inLResolved = lResolved.has(id);
    const inSResolved = sResolved.has(id);

    const lTs = Number(lTimestamps[id]) || 0;
    const sTs = Number(sTimestamps[id]) || 0;
    const maxTs = Math.max(lTs, sTs);
    if (maxTs > 0) {
      mergedTimestamps[id] = maxTs;
    }

    const localStatus = inLVault ? 'vault' : (inLResolved ? 'resolved' : null);
    const serverStatus = inSVault ? 'vault' : (inSResolved ? 'resolved' : null);

    if (localStatus && !serverStatus) {
      if (localStatus === 'vault') mergedVaultSet.add(id);
      else mergedResolvedSet.add(id);
    } else if (serverStatus && !localStatus) {
      if (serverStatus === 'vault') mergedVaultSet.add(id);
      else mergedResolvedSet.add(id);
    } else if (localStatus === serverStatus) {
      if (localStatus === 'vault') mergedVaultSet.add(id);
      else if (localStatus === 'resolved') mergedResolvedSet.add(id);
    } else {
      // Conflict between vault and resolved
      if (lTs > sTs) {
        if (localStatus === 'vault') mergedVaultSet.add(id);
        else mergedResolvedSet.add(id);
      } else if (sTs > lTs) {
        if (serverStatus === 'vault') mergedVaultSet.add(id);
        else mergedResolvedSet.add(id);
      } else {
        // Equal or missing timestamps: tombstone (resolved) wins for backward compatibility
        mergedResolvedSet.add(id);
      }
    }
  }

  const mergedResolved = Array.from(mergedResolvedSet).slice(0, 200);
  const resolvedSet = new Set(mergedResolved);
  const mergedVault = Array.from(mergedVaultSet)
    .filter((id) => !resolvedSet.has(id))
    .slice(0, 100);

  // 7. Exam History: Union deduplicated by date, sorted desc, capped at 50
  const lExams = Array.isArray(localState.examHistory) ? localState.examHistory : [];
  const sExams = Array.isArray(serverState.examHistory) ? serverState.examHistory : [];
  const examMap = new Map();
  [...lExams, ...sExams].forEach((entry) => {
    if (entry && entry.date) {
      examMap.set(entry.date, entry);
    }
  });
  const mergedExamHistory = Array.from(examMap.values())
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
    .slice(0, 50);

  // 8. Theme: Local preference wins
  const theme = localState.theme || serverState.theme || 'dark';

  // 9. Active Subject: Local preference wins
  const activeSubject = localState.activeSubject || serverState.activeSubject || 'mathe';

  return {
    generation,
    totalXP,
    activeSubject,
    levels: mergedLevels,
    streak: mergedStreak,
    achievements: mergedAchievements,
    seenIntros: mergedSeenIntros,
    mistakeVault: mergedVault,
    resolvedMistakes: mergedResolved,
    mistakeTimestamps: mergedTimestamps,
    examHistory: mergedExamHistory,
    theme,
  };
}
