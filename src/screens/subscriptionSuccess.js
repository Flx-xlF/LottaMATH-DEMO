/**
 * Subscription Success Screen Component for LottaMATH
 * Displays celebration feedback upon returning from a successful Stripe Checkout.
 */

import { launchConfetti } from '../components/confetti.js';

export function renderSubscriptionSuccess(container, callbacks = {}) {
  if (!container) return null;

  const {
    onContinue = () => {},
  } = callbacks;

  const screenEl = document.createElement('div');
  screenEl.className = 'screen success-screen flex-col flex-center gap-lg text-center';

  screenEl.innerHTML = `
    <div class="success-screen__card glass-card flex-col flex-center gap-md" style="max-width: 540px; padding: 2.5rem 2rem;">
      <div style="font-size: 4rem; animation: bounce 1s infinite alternate;">🎉</div>
      <h1 class="text-gradient" style="font-size: 2.2rem; margin-bottom: 0.2rem;">
        Willkommen im Premium!
      </h1>
      <p class="text-muted" style="font-size: 1.05rem; line-height: 1.6;">
        Deine Zahlung war erfolgreich. Alle Mathe-Welten, der Prüfungsmodus und die Fehler-Schmiede sind jetzt freigeschaltet!
      </p>

      <div style="margin: 1.5rem 0 0.5rem; width: 100%;">
        <button type="button" class="btn btn--primary btn--full btn--upgrade" id="success-continue-btn" style="min-height: 50px; font-size: 1.1rem; font-weight: 700;">
          Los geht's! 🚀
        </button>
      </div>
    </div>
  `;

  container.appendChild(screenEl);

  // Trigger celebration confetti
  try {
    launchConfetti();
  } catch (e) {
    /* ignore if canvas unavailable */
  }

  const continueBtn = screenEl.querySelector('#success-continue-btn');
  const handleContinue = () => onContinue();

  continueBtn.addEventListener('click', handleContinue);

  return {
    destroy: () => {
      continueBtn.removeEventListener('click', handleContinue);
      screenEl.remove();
    },
  };
}
