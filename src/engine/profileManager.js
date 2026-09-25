import {
  registerProfile as registerSyncProfile,
  getSyncToken,
  hasSyncToken,
  clearProfileSync,
  deleteServerProfile,
  getRecoveryCode,
  queuePendingDelete,
  processPendingDeletes,
  updateServerProfile,
} from './syncService.js';

const PROFILES_KEY = 'lottamath_profiles';
const ACTIVE_PROFILE_KEY = 'lottamath_active_profile';
const MAX_PROFILES = 8;

/** Curated avatar emoji pool */
export const AVATAR_OPTIONS = [
  '🦊', '🐱', '🦄', '🐬', '🦋', '🐼', '🌟', '🚀',
  '🎨', '🌈', '🐝', '🦉', '🍀', '🔮', '🎯', '🐾',
];

/**
 * Get all stored profiles
 * @returns {Array<{id: string, nickname: string, avatar: string, createdAt: string}>}
 */

/**
 * Seeds initial demo profiles (Lotta & Nico) for interactive portfolio exploration.
 */
export function seedDemoData() {
  const today = new Date().toISOString().split("T")[0];
  const demoProfiles = [
    {
      id: "demo-lotta",
      nickname: "Lotta",
      avatar: "🐱",
      createdAt: new Date().toISOString(),
    },
    {
      id: "demo-nico",
      nickname: "Nico",
      avatar: "🦊",
      createdAt: new Date().toISOString(),
    },
  ];
  localStorage.setItem(PROFILES_KEY, JSON.stringify(demoProfiles));

  // Seed Lotta: Level 4, 680 XP, 5-day streak, Worlds 1-2 done, 2 mistakes in vault
  const lottaState = {
    generation: 1,
    totalXP: 680,
    levels: {
      "1-1": { stars: 3, bestScore: 100, attempts: 2, completed: true },
      "1-2": { stars: 3, bestScore: 100, attempts: 1, completed: true },
      "1-3": { stars: 3, bestScore: 90, attempts: 2, completed: true },
      "1-4": { stars: 3, bestScore: 100, attempts: 1, completed: true },
      "1-5": { stars: 3, bestScore: 95, attempts: 3, completed: true },
      "2-1": { stars: 3, bestScore: 100, attempts: 1, completed: true },
      "2-2": { stars: 2, bestScore: 80, attempts: 2, completed: true },
      "2-3": { stars: 3, bestScore: 90, attempts: 1, completed: true },
      "2-4": { stars: 2, bestScore: 75, attempts: 2, completed: true },
      "2-5": { stars: 3, bestScore: 90, attempts: 2, completed: true },
      "3-1": { stars: 2, bestScore: 70, attempts: 1, completed: true },
      "3-2": { stars: 0, bestScore: 0, attempts: 0, completed: false },
    },
    streak: { current: 5, best: 5, lastActiveDate: today },
    achievements: ["first_star", "first_boss", "streak_3", "streak_7", "math_speedster"],
    theme: "dark",
    examHistory: [
      {
        date: new Date(Date.now() - 86400000).toISOString(),
        score: 90,
        grade: 5.5,
        duration: 820,
      }
    ],
    seenIntros: ["1", "2", "3"],
    mistakeVault: ["w1_fi_102", "w2_mc_101"],
    resolvedMistakes: ["w1_mc_101"],
    mistakeTimestamps: {
      w1_fi_102: Date.now() - 3600000,
      w2_mc_101: Date.now() - 1800000,
    },
  };
  localStorage.setItem("lottamath_profile_demo-lotta_state", JSON.stringify(lottaState));

  // Seed Nico: Level 2, 140 XP
  const nicoState = {
    generation: 1,
    totalXP: 140,
    levels: {
      "1-1": { stars: 3, bestScore: 100, attempts: 1, completed: true },
      "1-2": { stars: 2, bestScore: 80, attempts: 2, completed: true },
      "1-3": { stars: 1, bestScore: 60, attempts: 1, completed: true },
    },
    streak: { current: 2, best: 2, lastActiveDate: today },
    achievements: ["first_star"],
    theme: "dark",
    examHistory: [],
    seenIntros: ["1"],
    mistakeVault: ["w1_fi_101"],
    resolvedMistakes: [],
    mistakeTimestamps: {
      w1_fi_101: Date.now() - 7200000,
    },
  };
  localStorage.setItem("lottamath_profile_demo-nico_state", JSON.stringify(nicoState));
}

export function getProfiles() {
  try {
    const raw = localStorage.getItem(PROFILES_KEY);
    if (!raw) {
      seedDemoData();
      return JSON.parse(localStorage.getItem(PROFILES_KEY) || "[]");
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

/**
 * Save profiles array to localStorage
 * @param {Array} profiles
 */
function saveProfiles(profiles) {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
}

/**
 * Create a new profile with a clean, independent progress state.
 * No prior progress is transferred or shared.
 * Automatically registers with cross-device sync server.
 * @param {string} nickname
 * @param {string} avatar
 * @returns {Object|null}
 */
export function createProfile(nickname, avatar) {
  const profiles = getProfiles();
  if (profiles.length >= MAX_PROFILES) return null;

  const id = typeof crypto.randomUUID === 'function'
    ? crypto.randomUUID().slice(0, 8)
    : Math.random().toString(36).slice(2, 10);

  const profile = {
    id,
    nickname: nickname.trim().slice(0, 20),
    avatar,
    createdAt: new Date().toISOString(),
  };

  profiles.push(profile);
  saveProfiles(profiles);

  // Ensure any previous or residual state for this ID is clean
  localStorage.removeItem(getStateKey(id));

  // Register with sync server in background (fire-and-forget)
  registerSyncProfile(id, profile.nickname, avatar).catch(() => {
    /* Silently catch — will retry or sync on next interaction */
  });

  return profile;
}

/**
 * Adds an existing profile that was linked from another device.
 * @param {string} id
 * @param {string} nickname
 * @param {string} avatar
 * @returns {Object}
 */
export function addLinkedProfile(id, nickname, avatar) {
  const profiles = getProfiles();
  const existingIdx = profiles.findIndex((p) => p.id === id);

  const profile = {
    id,
    nickname: nickname.trim().slice(0, 20),
    avatar,
    createdAt: new Date().toISOString(),
  };

  if (existingIdx >= 0) {
    profiles[existingIdx] = profile;
  } else {
    profiles.push(profile);
  }

  saveProfiles(profiles);
  return profile;
}

/**
 * Checks if a string is a technical identifier (recovery code, UUID, sync token, placeholder)
 * rather than a friendly human display name.
 * @param {string} name
 * @returns {boolean}
 */
export function isTechnicalId(name) {
  if (!name || typeof name !== 'string') return true;
  const trimmed = name.trim();
  if (!trimmed || trimmed === 'du' || trimmed === 'Gast' || trimmed === 'Unbekannt') return true;
  // Recovery code format: XXXX-XXXX (e.g. HR9C-BC2Z)
  if (/^[A-Z0-9]{4}-[A-Z0-9]{4}$/i.test(trimmed)) return true;
  // Hex profile ID or UUID format: e.g. a1b2c3d4 or 8-4-4-4-12
  if (/^[a-f0-9]{8}(-[a-f0-9]{4}){0,3}$/i.test(trimmed)) return true;
  // 32-char hex sync token
  if (/^[a-f0-9]{32}$/i.test(trimmed)) return true;
  // License key format: LM-XXXX-XXXX-XXXX
  if (/^LM-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/i.test(trimmed)) return true;
  return false;
}

/**
 * Returns a friendly player display name, or null if only a technical ID is available.
 * @param {string} name
 * @returns {string|null}
 */
export function getFriendlyPlayerName(name) {
  return isTechnicalId(name) ? null : name.trim();
}

/**
 * Updates a profile's nickname and/or avatar.
 * @param {string} id
 * @param {string} [nickname]
 * @param {string} [avatar]
 * @returns {Object|null}
 */
export function updateProfile(id, nickname, avatar) {
  const profiles = getProfiles();
  const prof = profiles.find((p) => p.id === id);
  if (!prof) return null;

  if (nickname !== undefined && nickname.trim()) {
    prof.nickname = nickname.trim().slice(0, 20);
  }
  if (avatar !== undefined && avatar) {
    prof.avatar = avatar;
  }

  saveProfiles(profiles);

  // Sync update to server in background if token exists
  const token = getSyncToken(id);
  if (token) {
    updateServerProfile(token, prof.nickname, prof.avatar).catch(() => {});
  }

  return prof;
}

/**
 * Delete a profile and its associated game state and sync tokens.
 * Queues the server deletion so it is guaranteed to complete even if currently offline.
 * @param {string} profileId
 */
export async function deleteProfile(profileId) {
  // Grab the sync token before wiping local records
  const syncToken = getSyncToken(profileId);
  if (syncToken) {
    queuePendingDelete(syncToken);
    processPendingDeletes().catch(() => {});
  }

  const profiles = getProfiles().filter((p) => p.id !== profileId);
  saveProfiles(profiles);
  localStorage.removeItem(getStateKey(profileId));

  // Clear sync data for this profile
  clearProfileSync(profileId);

  // If we just deleted the active profile, clear it
  if (getActiveProfileId() === profileId) {
    localStorage.removeItem(ACTIVE_PROFILE_KEY);
  }
}

/**
 * Gets the sync token for a profile, or null if not yet registered.
 * @param {string} profileId
 * @returns {string|null}
 */
export function getProfileSyncToken(profileId) {
  return getSyncToken(profileId);
}

/**
 * Gets the human-friendly recovery code for a profile.
 * @param {string} profileId
 * @returns {string|null}
 */
export function getProfileRecoveryCode(profileId) {
  return getRecoveryCode(profileId);
}

/**
 * Checks if a profile has been registered for cross-device sync.
 * @param {string} profileId
 * @returns {boolean}
 */
export function isProfileSynced(profileId) {
  return hasSyncToken(profileId);
}

/**
 * Get the localStorage key for a profile's game state
 * @param {string} profileId
 * @returns {string}
 */
export function getStateKey(profileId) {
  return `lottamath_profile_${profileId}_state`;
}

/**
 * Set the active profile
 * @param {string} profileId
 */
export function setActiveProfile(profileId) {
  localStorage.setItem(ACTIVE_PROFILE_KEY, profileId);
}

/**
 * Get the active profile ID (or null)
 * @returns {string|null}
 */
export function getActiveProfileId() {
  return localStorage.getItem(ACTIVE_PROFILE_KEY);
}

/**
 * Get the active profile object (or null)
 * @returns {Object|null}
 */
export function getActiveProfile() {
  const id = getActiveProfileId();
  if (!id) return null;
  return getProfiles().find((p) => p.id === id) || null;
}

/**
 * Check if any profiles exist
 * @returns {boolean}
 */
export function hasProfiles() {
  return getProfiles().length > 0;
}

/**
 * Check if profile limit is reached
 * @returns {boolean}
 */
export function isProfileLimitReached() {
  return getProfiles().length >= MAX_PROFILES;
}

/**
 * Clean up legacy single-user storage keys without transferring data to new profiles.
 */
export function cleanupLegacyStorage() {
  try {
    localStorage.removeItem('lottamath_state');
    sessionStorage.removeItem('lottamath_auth');
  } catch (e) {
    /* ignore */
  }
}
