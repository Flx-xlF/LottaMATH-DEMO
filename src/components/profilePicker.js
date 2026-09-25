/**
 * Profile Picker Component for LottaMATH
 * Full-screen profile selection and creation UI.
 * Replaces the old auth gate as the entry point.
 */

import {
  getProfiles,
  createProfile,
  deleteProfile,
  isProfileLimitReached,
  AVATAR_OPTIONS,
  getProfileSyncToken,
  getProfileRecoveryCode,
  addLinkedProfile,
  updateProfile,
  getStateKey,
} from '../engine/profileManager.js';

import {
  linkProfile,
  setSyncToken,
  setSyncVersion,
  lookupByRecoveryCode,
  setRecoveryCode,
} from '../engine/syncService.js';

/**
 * Renders the full-screen profile picker
 * @param {HTMLElement} container
 * @param {Object} options - { onProfileSelected: (profile) => void }
 * @returns {{ destroy: () => void }}
 */
export function renderProfilePicker(container, options = {}) {
  if (!container) return null;

  const { onProfileSelected = () => {} } = options;

  const pickerEl = document.createElement('div');
  pickerEl.className = 'profile-picker flex-col flex-center';

  let currentView = 'select'; // 'select' or 'create'

  function render() {
    pickerEl.innerHTML = '';

    if (currentView === 'create') {
      renderCreateForm();
    } else {
      renderProfileGrid();
    }
  }

  function renderProfileGrid() {
    const profiles = getProfiles();
    const limitReached = isProfileLimitReached();

    // Compute ordinal suffixes for duplicate names
    const circledNumbers = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧'];
    const nameCounts = {};
    const nameOrdinals = {};

    profiles.forEach((p) => {
      const key = p.nickname.trim().toLowerCase();
      nameCounts[key] = (nameCounts[key] || 0) + 1;
    });

    const nameCounters = {};
    profiles.forEach((p) => {
      const key = p.nickname.trim().toLowerCase();
      if (nameCounts[key] > 1) {
        nameCounters[key] = (nameCounters[key] || 0) + 1;
        nameOrdinals[p.id] = circledNumbers[nameCounters[key] - 1] || `(${nameCounters[key]})`;
      }
    });

    const card = document.createElement('div');
    card.className = 'profile-picker__card glass-card text-center';

    card.innerHTML = `
      <div class="profile-picker__icon">🎮</div>
      <h1 class="text-gradient" style="font-size: 2.2rem; margin-bottom: 0.3rem;">LottaMATH</h1>
      <p class="text-muted" style="margin-bottom: 1.5rem; font-size: 1rem;">
        ${profiles.length > 0 ? 'Wer übt heute?' : 'Erstelle dein Profil, um loszulegen!'}
      </p>
      <div class="profile-picker__grid" id="profile-grid"></div>
      <div class="profile-picker__actions" id="profile-actions">
        <button type="button" class="profile-picker__link-btn" id="link-device-btn">
          🔗 Profil wiederherstellen / Gerät verknüpfen
        </button>
      </div>
      <div class="profile-picker__tagline text-muted" style="margin-top: 1.4rem; font-size: 0.85rem; opacity: 0.85;">
        Built with care (and a bit of madness) by <a href="https://github.com/Flx-xlF" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); text-decoration: none; font-weight: 600;">schema/f</a>.
      </div>
    `;

    pickerEl.appendChild(card);

    const grid = card.querySelector('#profile-grid');

    // Render existing profiles
    profiles.forEach((profile) => {
      const syncToken = getProfileSyncToken(profile.id);
      const recoveryCode = getProfileRecoveryCode(profile.id);
      const displayCode = recoveryCode || (syncToken ? `${syncToken.slice(0, 6)}…` : '☁️ Sync');

      const profileCard = document.createElement('div');
      profileCard.className = 'profile-card glass-card glass-card--interactive';
      profileCard.innerHTML = `
        <div class="profile-card__avatar">${escapeHtml(profile.avatar)}</div>
        <div class="profile-card__name">${escapeHtml(profile.nickname)}${nameOrdinals[profile.id] ? ' ' + nameOrdinals[profile.id] : ''}</div>
        <div class="profile-card__sync-code" title="${syncToken || recoveryCode ? 'Sync-Code anzeigen' : 'Wird beim nächsten Online-Start registriert'}">
          🔑 ${displayCode}
        </div>
      `;

      // Select profile on click
      profileCard.addEventListener('click', (e) => {
        if (e.target.closest('.profile-card__sync-code')) return;
        profileCard.classList.add('profile-card--selected');
        setTimeout(() => {
          onProfileSelected(profile);
        }, 200);
      });

      // Show sync code modal on click
      const syncBadge = profileCard.querySelector('.profile-card__sync-code');
      syncBadge.addEventListener('click', (e) => {
        e.stopPropagation();
        if (syncToken || recoveryCode) {
          showSyncCodeModal(recoveryCode || syncToken, profile.nickname);
        }
      });

      // Long-press detection (mobile: ≥600ms touch)
      let pressTimer = null;
      profileCard.addEventListener('touchstart', (e) => {
        pressTimer = setTimeout(() => {
          e.preventDefault();
          showProfileActionSheet(profile);
        }, 600);
      }, { passive: false });
      profileCard.addEventListener('touchend', () => clearTimeout(pressTimer));
      profileCard.addEventListener('touchmove', () => clearTimeout(pressTimer));

      // Right-click detection (desktop)
      profileCard.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showProfileActionSheet(profile);
      });

      grid.appendChild(profileCard);
    });

    // "+ Neues Profil" card
    if (!limitReached) {
      const newCard = document.createElement('div');
      newCard.className = 'profile-card profile-card--new glass-card glass-card--interactive';
      newCard.innerHTML = `
        <div class="profile-card__avatar">➕</div>
        <div class="profile-card__name">Neues Profil</div>
      `;
      newCard.addEventListener('click', () => {
        currentView = 'create';
        render();
      });
      grid.appendChild(newCard);
    }

    // Touch hint for mobile users
    const touchHint = document.createElement('div');
    touchHint.className = 'profile-picker__touch-hint';
    touchHint.textContent = '💡 Halte ein Profil gedrückt, um es zu verwalten';
    card.querySelector('#profile-grid').after(touchHint);

    // Link device button handler
    const linkBtn = card.querySelector('#link-device-btn');
    if (linkBtn) {
      linkBtn.addEventListener('click', () => {
        showLinkModal();
      });
    }
  }

  function showLinkModal() {
    const overlay = document.createElement('div');
    overlay.className = 'sync-link-overlay flex-col flex-center';

    overlay.innerHTML = `
      <div class="sync-link-modal glass-card text-center flex-col gap-md">
        <div style="font-size: 2.2rem;">🔗</div>
        <h3 class="text-gradient" style="font-size: 1.3rem;">Gerät verknüpfen / Profil wiederherstellen</h3>
        <p class="text-muted" style="font-size: 0.85rem; line-height: 1.45;">
          Gib den <b>Sync-Code</b> (z.B. <code>ABCD-EF78</code>) deines bestehenden Profils ein, um den Fortschritt auf dieses Gerät zu übertragen.
        </p>

        <div class="flex-col gap-sm" style="width: 100%;">
          <input
            type="text"
            id="sync-code-input"
            class="sync-link-input"
            placeholder="Code eingeben (z.B. ABCD-EF78)..."
            autocomplete="off"
            autocapitalize="characters"
            autocorrect="off"
            spellcheck="false"
            maxlength="32"
          />
          <div class="sync-link-status text-muted" id="sync-link-status"></div>
        </div>

        <div class="flex-row gap-sm" style="width: 100%;">
          <button type="button" class="btn btn--secondary" id="sync-link-cancel-btn" style="flex: 1;">
            Abbrechen
          </button>
          <button type="button" class="btn btn--primary" id="sync-link-confirm-btn" style="flex: 1.5;">
            Verknüpfen 🚀
          </button>
        </div>
      </div>
    `;

    pickerEl.appendChild(overlay);

    const input = overlay.querySelector('#sync-code-input');
    const statusEl = overlay.querySelector('#sync-link-status');
    const cancelBtn = overlay.querySelector('#sync-link-cancel-btn');
    const confirmBtn = overlay.querySelector('#sync-link-confirm-btn');

    setTimeout(() => input.focus(), 100);

    cancelBtn.addEventListener('click', () => {
      overlay.remove();
    });

    const handleLink = async () => {
      const rawInput = input.value.trim().toUpperCase();
      if (!rawInput) {
        statusEl.className = 'sync-link-status sync-link-status--error';
        statusEl.textContent = 'Bitte gib einen Code ein.';
        input.focus();
        return;
      }

      confirmBtn.disabled = true;
      confirmBtn.textContent = 'Verknüpfe... ⏳';
      statusEl.className = 'sync-link-status text-muted';
      statusEl.textContent = 'Lade Profildaten vom Server...';

      try {
        let data;
        // Detect format: XXXX-XXXX (recovery code) vs 32-char hex (sync token)
        if (/^[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(rawInput)) {
          data = await lookupByRecoveryCode(rawInput);
        } else {
          data = await linkProfile(rawInput.toLowerCase());
        }

        if (!data || !data.profile) {
          statusEl.className = 'sync-link-status sync-link-status--error';
          statusEl.textContent = 'Code nicht gefunden. Bitte überprüfe die Eingabe.';
          confirmBtn.disabled = false;
          confirmBtn.textContent = 'Verknüpfen 🚀';
          return;
        }

        // Add profile locally
        const linkedProf = addLinkedProfile(
          data.profile.profile_id,
          data.profile.nickname,
          data.profile.avatar
        );

        // Store sync token and version
        const tokenToStore = data.sync_token || (/^[a-f0-9]{32}$/i.test(rawInput) ? rawInput.toLowerCase() : null);
        if (tokenToStore) {
          setSyncToken(data.profile.profile_id, tokenToStore);
        }
        if (data.profile.recovery_code) {
          setRecoveryCode(data.profile.profile_id, data.profile.recovery_code);
        }
        if (data.state_version) {
          setSyncVersion(data.profile.profile_id, data.state_version);
        }

        // Store state locally
        if (data.state) {
          localStorage.setItem(getStateKey(data.profile.profile_id), JSON.stringify(data.state));
        }

        statusEl.className = 'sync-link-status sync-link-status--success';
        statusEl.textContent = `Profil «${data.profile.nickname}» erfolgreich verknüpft! 🎉`;

        setTimeout(() => {
          overlay.remove();
          render();
        }, 900);
      } catch (err) {
        statusEl.className = 'sync-link-status sync-link-status--error';
        statusEl.textContent = err.message || 'Verbindungsfehler. Bitte versuche es später.';
        confirmBtn.disabled = false;
        confirmBtn.textContent = 'Verknüpfen 🚀';
      }
    };

    confirmBtn.addEventListener('click', handleLink);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleLink();
      }
    });
  }

  function renderCreateForm() {
    const card = document.createElement('div');
    card.className = 'profile-picker__card glass-card text-center';

    let selectedAvatar = AVATAR_OPTIONS[0];

    card.innerHTML = `
      <div class="profile-picker__icon">✨</div>
      <h2 class="text-gradient" style="font-size: 1.6rem; margin-bottom: 0.3rem;">Neues Profil</h2>
      <p class="text-muted" style="margin-bottom: 1.2rem; font-size: 0.9rem;">
        Wähle einen Avatar und gib dir einen Namen!
      </p>

      <div class="profile-create-form flex-col gap-md">
        <div class="avatar-picker">
          <div class="avatar-picker__label text-muted" style="font-size: 0.85rem; margin-bottom: 0.5rem;">Avatar wählen:</div>
          <div class="avatar-picker__grid" id="avatar-grid"></div>
        </div>

        <div class="profile-create-form__name-row">
          <input
            type="text"
            id="profile-name-input"
            class="profile-create-form__input"
            placeholder="Dein Name..."
            autocomplete="off"
            autocapitalize="words"
            spellcheck="false"
            maxlength="20"
            required
          />
        </div>

        <div class="profile-create-form__actions flex-row gap-sm">
          <button type="button" class="btn btn--secondary" id="profile-cancel-btn" style="flex: 1;">
            Zurück
          </button>
          <button type="button" class="btn btn--primary" id="profile-create-btn" style="flex: 2;">
            Los geht's! 🚀
          </button>
        </div>
      </div>
    `;

    pickerEl.appendChild(card);

    // Render avatar grid
    const avatarGrid = card.querySelector('#avatar-grid');
    AVATAR_OPTIONS.forEach((emoji, idx) => {
      const avatarBtn = document.createElement('button');
      avatarBtn.type = 'button';
      avatarBtn.className = `avatar-picker__item ${idx === 0 ? 'avatar-picker__item--selected' : ''}`;
      avatarBtn.textContent = emoji;
      avatarBtn.addEventListener('click', () => {
        selectedAvatar = emoji;
        avatarGrid.querySelectorAll('.avatar-picker__item').forEach((el) => el.classList.remove('avatar-picker__item--selected'));
        avatarBtn.classList.add('avatar-picker__item--selected');
      });
      avatarGrid.appendChild(avatarBtn);
    });

    // Input and buttons
    const nameInput = card.querySelector('#profile-name-input');
    const createBtn = card.querySelector('#profile-create-btn');
    const cancelBtn = card.querySelector('#profile-cancel-btn');

    // Duplicate name warning container
    const warningEl = document.createElement('div');
    warningEl.className = 'profile-create-form__duplicate-warning';
    warningEl.style.display = 'none';
    nameInput.parentElement.appendChild(warningEl);

    nameInput.addEventListener('input', () => {
      const typed = nameInput.value.trim().toLowerCase();
      const existing = getProfiles().find(
        (p) => p.nickname.trim().toLowerCase() === typed
      );
      if (typed && existing) {
        warningEl.textContent = `⚠️ Ein Profil mit dem Namen «${existing.nickname}» existiert bereits. Tipp: Wähle einen anderen Namen oder Avatar, damit ihr euch nicht verwechselt!`;
        warningEl.style.display = 'block';
      } else {
        warningEl.style.display = 'none';
      }
    });

    // Auto-focus the name input
    setTimeout(() => nameInput.focus(), 100);

    createBtn.addEventListener('click', () => {
      const name = nameInput.value.trim();
      if (!name) {
        nameInput.classList.add('shake-anim');
        setTimeout(() => nameInput.classList.remove('shake-anim'), 400);
        nameInput.focus();
        return;
      }

      const profile = createProfile(name, selectedAvatar);
      if (profile) {
        onProfileSelected(profile);
      }
    });

    // Allow Enter key to submit
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        createBtn.click();
      }
    });

    cancelBtn.addEventListener('click', () => {
      currentView = 'select';
      render();
    });
  }

  function showProfileActionSheet(profile) {
    const overlay = document.createElement('div');
    overlay.className = 'profile-action-sheet-overlay';

    const sheet = document.createElement('div');
    sheet.className = 'profile-action-sheet';

    sheet.innerHTML = `
      <div class="profile-action-sheet__header">
        <span class="profile-action-sheet__avatar">${escapeHtml(profile.avatar)}</span>
        <span class="profile-action-sheet__name">${escapeHtml(profile.nickname)}</span>
      </div>
      <button type="button" class="profile-action-sheet__action" id="action-rename-profile">
        ✏️ Name bearbeiten
      </button>
      <button type="button" class="profile-action-sheet__action" id="action-delete-profile">
        🗑️ Profil löschen
      </button>
      <button type="button" class="profile-action-sheet__cancel" id="action-cancel">
        Abbrechen
      </button>
    `;

    overlay.appendChild(sheet);
    pickerEl.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.remove();
      }
    });

    sheet.querySelector('#action-cancel').addEventListener('click', () => {
      overlay.remove();
    });

    sheet.querySelector('#action-rename-profile').addEventListener('click', () => {
      overlay.remove();
      showRenameModal(profile);
    });

    sheet.querySelector('#action-delete-profile').addEventListener('click', () => {
      overlay.remove();
      showDeleteConfirm(profile);
    });
  }

  function showRenameModal(profile) {
    const overlay = document.createElement('div');
    overlay.className = 'profile-delete-overlay flex-col flex-center';
    overlay.innerHTML = `
      <div class="profile-delete-card glass-card text-center flex-col gap-md" style="max-width: 420px;">
        <div style="font-size: 2.2rem;">✏️</div>
        <h3 class="text-gradient" style="font-size: 1.3rem;">Name bearbeiten</h3>
        <p class="text-muted" style="font-size: 0.85rem;">
          Wie möchtest du in LottaMATH genannt werden?
        </p>
        <input
          type="text"
          class="delete-confirm-input"
          id="rename-input"
          maxlength="20"
          value="${escapeHtml(profile.nickname)}"
          style="border-color: var(--color-border); color: var(--color-text); text-align: center; font-size: 1.05rem;"
          autocomplete="off"
        />
        <div class="flex-row gap-sm" style="width: 100%; margin-top: 0.4rem;">
          <button type="button" class="btn btn--secondary flex-1" id="rename-cancel-btn">
            Abbrechen
          </button>
          <button type="button" class="btn btn--primary flex-1" id="rename-save-btn">
            Speichern 💾
          </button>
        </div>
      </div>
    `;

    pickerEl.appendChild(overlay);

    const input = overlay.querySelector('#rename-input');
    const cancelBtn = overlay.querySelector('#rename-cancel-btn');
    const saveBtn = overlay.querySelector('#rename-save-btn');

    setTimeout(() => {
      input.focus();
      input.select();
    }, 100);

    cancelBtn.addEventListener('click', () => overlay.remove());

    const handleSave = () => {
      const newName = input.value.trim();
      if (!newName) {
        input.classList.add('shake-anim');
        setTimeout(() => input.classList.remove('shake-anim'), 400);
        return;
      }
      updateProfile(profile.id, newName);
      overlay.remove();
      render();
    };

    saveBtn.addEventListener('click', handleSave);
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSave();
      }
    });
  }

  function showDeleteConfirm(profile) {
    const overlay = document.createElement('div');
    overlay.className = 'profile-delete-overlay flex-col flex-center';

    overlay.innerHTML = `
      <div class="profile-delete-modal glass-card text-center flex-col gap-md">
        <div style="font-size: 2.5rem;">${escapeHtml(profile.avatar)}</div>
        <h3 style="font-size: 1.1rem; color: var(--color-text);">
          Profil «${escapeHtml(profile.nickname)}» endgültig löschen?
        </h3>
        <p class="text-muted" style="font-size: 0.85rem;">
          Der gesamte Fortschritt (XP, Sterne, Streaks) wird unwiderruflich gelöscht — auch auf dem Server. Der Sync-Code wird ungültig.
        </p>
        <div class="flex-col gap-sm" style="width: 100%;">
          <label class="text-muted" style="font-size: 0.8rem; text-align: left;">
            Tippe «<strong>${escapeHtml(profile.nickname)}</strong>» ein, um zu bestätigen:
          </label>
          <input
            type="text"
            class="delete-confirm-input"
            id="delete-confirm-input"
            placeholder="${escapeHtml(profile.nickname)}"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
          />
        </div>
        <div class="flex-row gap-sm" style="width: 100%;">
          <button type="button" class="btn btn--secondary btn--delete-disabled" id="delete-confirm-btn" style="flex: 1; color: var(--color-error); border-color: rgba(239, 68, 68, 0.4);">
            Löschen 🗑️
          </button>
          <button type="button" class="btn btn--primary" id="delete-cancel-btn" style="flex: 1;">
            Abbrechen
          </button>
        </div>
      </div>
    `;

    pickerEl.appendChild(overlay);

    const input = overlay.querySelector('#delete-confirm-input');
    const confirmBtn = overlay.querySelector('#delete-confirm-btn');

    setTimeout(() => input.focus(), 100);

    input.addEventListener('input', () => {
      const matches = input.value.trim().toLowerCase() === profile.nickname.trim().toLowerCase();
      if (matches) {
        confirmBtn.classList.remove('btn--delete-disabled');
      } else {
        confirmBtn.classList.add('btn--delete-disabled');
      }
    });

    overlay.querySelector('#delete-cancel-btn').addEventListener('click', () => {
      overlay.remove();
    });

    confirmBtn.addEventListener('click', async () => {
      if (confirmBtn.classList.contains('btn--delete-disabled')) return;
      await deleteProfile(profile.id);
      overlay.remove();
      render();
    });
  }

  function showSyncCodeModal(code, nickname) {
    const overlay = document.createElement('div');
    overlay.className = 'sync-link-overlay flex-col flex-center';

    overlay.innerHTML = `
      <div class="sync-link-modal glass-card text-center flex-col gap-md">
        <div style="font-size: 2.2rem;">🔑</div>
        <h3 class="text-gradient" style="font-size: 1.3rem;">Sync-Code von ${escapeHtml(nickname)}</h3>
        <p class="text-muted" style="font-size: 0.85rem; line-height: 1.45;">
          Mit diesem Code kannst du dein Profil auf einem anderen Gerät weiterverwenden oder nach einem Geräte-Reset wiederherstellen.
        </p>

        <div class="sync-code-display" style="
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          padding: 0.8rem 1.2rem;
          border-radius: var(--radius-md);
          background: var(--color-surface-elevated);
          border: 2px solid var(--color-accent);
          color: var(--color-text);
          user-select: all;
        ">${escapeHtml(code)}</div>

        <div class="text-muted" style="font-size: 0.8rem; line-height: 1.5; text-align: left;">
          <strong>So geht's:</strong><br>
          1. Öffne LottaMATH auf dem neuen Gerät.<br>
          2. Tippe auf «Profil wiederherstellen».<br>
          3. Gib diesen Code ein.
        </div>

        <div class="flex-row gap-sm" style="width: 100%;">
          <button type="button" class="btn btn--secondary" id="sync-modal-close-btn" style="flex: 1;">
            Schliessen
          </button>
          <button type="button" class="btn btn--primary" id="sync-modal-copy-btn" style="flex: 1.5;">
            Kopieren 📋
          </button>
        </div>
      </div>
    `;

    pickerEl.appendChild(overlay);

    overlay.querySelector('#sync-modal-close-btn').addEventListener('click', () => {
      overlay.remove();
    });

    overlay.querySelector('#sync-modal-copy-btn').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code);
        const btn = overlay.querySelector('#sync-modal-copy-btn');
        btn.textContent = 'Kopiert! ✅';
        setTimeout(() => { btn.textContent = 'Kopieren 📋'; }, 1500);
      } catch {
        prompt('Dein Sync-Code:', code);
      }
    });
  }

  // Initial render
  render();
  container.appendChild(pickerEl);

  return {
    destroy: () => {
      pickerEl.remove();
    },
  };
}

/**
 * Simple HTML escape to prevent XSS in profile names
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
