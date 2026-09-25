/**
 * Classroom Password Auth Gate Component for LottaMATH
 * Provides client-side access control with SHA-256 Web Crypto hashing and localStorage persistence.
 */

const SITE_UNLOCKED_KEY = 'lottamath_site_unlocked';

/**
 * Computes SHA-256 hex hash of a string using Web Crypto API
 * @param {string} text 
 * @returns {Promise<string>}
 */
export async function hashPassword(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Checks if the site has already been unlocked on this device
 * @returns {boolean}
 */
export function isSiteUnlocked() {
  try {
    return localStorage.getItem(SITE_UNLOCKED_KEY) === 'true';
  } catch {
    return false;
  }
}

/**
 * Renders the full-screen password gate or immediately authorizes if already unlocked
 * @param {HTMLElement} container 
 * @param {Object} options - { passwordHash: string, onAuthenticated: Function }
 */
export function renderAuthGate(container, options = {}) {
  if (!container) return null;

  const {
    passwordHash = '',
    onAuthenticated = () => {},
  } = options;

  // 1. Check if already authenticated on this device
  if (isSiteUnlocked()) {
    onAuthenticated();
    return { destroy: () => {} };
  }

  // 2. Render Fullscreen Auth Gate
  const gateEl = document.createElement('div');
  gateEl.className = 'auth-gate flex-col flex-center';

  gateEl.innerHTML = `
    <div class="auth-gate__card glass-card text-center">
      <div class="auth-gate__icon">🔐</div>
      <h1 class="text-gradient" style="font-size: 2.2rem; margin-bottom: 0.4rem;">LottaMATH</h1>
      <p class="text-muted" style="margin-bottom: 1.6rem; font-size: 0.95rem;">
        Willkommen! Gib das Klassen-Passwort ein, um die Mathe-Welt zu betreten:
      </p>

      <form id="auth-gate-form" class="flex-col gap-md">
        <input 
          type="password" 
          id="auth-gate-input" 
          class="auth-gate__input" 
          placeholder="Passwort eingeben..." 
          autocomplete="off" 
          autocapitalize="off" 
          spellcheck="false" 
          required 
        />
        <button type="submit" class="btn btn--primary btn--full" id="auth-gate-submit" style="min-height: 48px; font-size: 1.05rem;">
          Freischalten 🚀
        </button>
      </form>

      <div class="auth-gate__error text-center" id="auth-gate-error" style="display: none;">
        Falsches Passwort! Bitte frage deine Lehrperson oder Lotta. 🔒
      </div>
    </div>
  `;

  container.appendChild(gateEl);

  const form = gateEl.querySelector('#auth-gate-form');
  const input = gateEl.querySelector('#auth-gate-input');
  const errorEl = gateEl.querySelector('#auth-gate-error');
  const card = gateEl.querySelector('.auth-gate__card');

  // Auto-focus input
  setTimeout(() => input.focus(), 150);

  async function handleAuth(e) {
    e.preventDefault();
    const entered = input.value.trim();
    if (!entered) return;

    try {
      const computedHash = await hashPassword(entered);

      if (computedHash === passwordHash || !passwordHash) {
        // Successful authentication
        try {
          localStorage.setItem(SITE_UNLOCKED_KEY, 'true');
        } catch (err) {
          console.warn('LocalStorage save failed:', err);
        }

        card.style.transform = 'scale(0.92)';
        card.style.opacity = '0';
        gateEl.style.opacity = '0';
        setTimeout(() => {
          gateEl.remove();
          onAuthenticated();
        }, 250);
      } else {
        // Wrong password
        errorEl.style.display = 'block';
        card.classList.remove('shake-anim');
        void card.offsetWidth; // trigger reflow for animation restart
        card.classList.add('shake-anim');
        input.value = '';
        input.focus();
      }
    } catch (err) {
      console.error('Password hash verification failed:', err);
    }
  }

  form.addEventListener('submit', handleAuth);

  return {
    destroy: () => {
      form.removeEventListener('submit', handleAuth);
      gateEl.remove();
    },
  };
}
