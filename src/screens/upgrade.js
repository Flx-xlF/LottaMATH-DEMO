/**
 * Upgrade Screen Component for LottaMATH
 * Presents subscription tiers (Monthly CHF 4.90, Yearly CHF 39.00),
 * Swiss payment methods, and initiates checkout.
 */

export function renderUpgrade(container, callbacks = {}) {
  if (!container) return null;

  const {
    onSelectPlan = () => {},
    onBack = () => {},
  } = callbacks;

  const screenEl = document.createElement('div');
  screenEl.className = 'screen upgrade-screen flex-col flex-center gap-lg';

  screenEl.innerHTML = `
    <div class="upgrade-screen__header flex-between" style="width: 100%; max-width: 720px;">
      <button type="button" class="btn btn--secondary flex-row gap-xs" id="upgrade-back-btn">
        <span>← Zurück</span>
      </button>
      <div style="width: 80px;"></div>
    </div>

    <div class="upgrade-screen__hero text-center" style="max-width: 600px;">
      <div style="font-size: 3rem; margin-bottom: 0.5rem;">⭐</div>
      <div style="display: inline-block; margin-bottom: 0.8rem; padding: 6px 16px; border-radius: 9999px; background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #34d399; font-weight: 600; font-size: 0.9rem;">
        ✨ Demo-Modus: Alle Welten 1–8 sind bereits für dich freigeschaltet!
      </div>
      <h1 class="text-gradient" style="font-size: 2.2rem; margin-bottom: 0.5rem;">
        LottaMATH Premium (Vorschau)
      </h1>
      <p class="text-muted" style="font-size: 1.05rem; line-height: 1.5;">
        Schalte alle Welten, den Prüfungsmodus und die Fehler-Schmiede unbegrenzt frei!
      </p>
    </div>

    <!-- Pricing Cards Grid -->
    <div class="pricing-grid flex-row gap-lg" style="width: 100%; max-width: 720px; justify-content: center; flex-wrap: wrap;">
      
      <!-- Monthly Plan -->
      <div class="pricing-card glass-card flex-col flex-between gap-md text-center" style="flex: 1; min-width: 280px; max-width: 340px; padding: 2rem 1.5rem;">
        <div class="flex-col gap-sm">
          <h3 style="font-size: 1.3rem;">Monats-Abo</h3>
          <div class="price-wrap">
            <span class="price text-gradient" style="font-size: 2.4rem; font-weight: 800;">CHF 4.90</span>
            <span class="period text-muted" style="font-size: 0.95rem;"> / Monat</span>
          </div>
          <p class="text-muted" style="font-size: 0.9rem;">
            Maximale Flexibilität, monatlich kündbar.
          </p>
        </div>

        <ul class="pricing-features flex-col gap-xs text-left" style="list-style: none; padding: 0; margin: 1rem 0; font-size: 0.95rem;">
          <li>✨ Alle Mathe-Welten (1–5)</li>
          <li>🎯 Prüfungsmodus & Noten-Check</li>
          <li>🛠️ Fehler-Schmiede & Archiv</li>
          <li>📱 Bis zu 8 Profile pro Gerät</li>
        </ul>

        <button type="button" class="btn btn--secondary btn--full" id="plan-monthly-btn" style="min-height: 48px; font-weight: 600;">
          Demo: Simulation starten
        </button>
      </div>

      <!-- Yearly Plan (Popular) -->
      <div class="pricing-card pricing-card--popular glass-card flex-col flex-between gap-md text-center" style="flex: 1; min-width: 280px; max-width: 340px; padding: 2rem 1.5rem; position: relative;">
        <div class="pricing-badge">
          🌟 Beliebt (Spare 34%)
        </div>

        <div class="flex-col gap-sm">
          <h3 style="font-size: 1.3rem;">Jahres-Abo</h3>
          <div class="price-wrap">
            <span class="price text-gradient" style="font-size: 2.4rem; font-weight: 800;">CHF 39.00</span>
            <span class="period text-muted" style="font-size: 0.95rem;"> / Jahr</span>
          </div>
          <p class="text-muted" style="font-size: 0.9rem;">
            Entspricht nur <strong>CHF 3.25 / Monat</strong>.
          </p>
        </div>

        <ul class="pricing-features flex-col gap-xs text-left" style="list-style: none; padding: 0; margin: 1rem 0; font-size: 0.95rem;">
          <li>✨ Alle Mathe-Welten (1–5)</li>
          <li>🎯 Prüfungsmodus & Noten-Check</li>
          <li>🛠️ Fehler-Schmiede & Archiv</li>
          <li>📱 Bis zu 8 Profile pro Gerät</li>
          <li>🎁 1 ganzes Jahr voller Lernspass</li>
        </ul>

        <button type="button" class="btn btn--primary btn--full btn--upgrade" id="plan-yearly-btn" style="min-height: 48px; font-weight: 700; font-size: 1.05rem;">
          Jetzt Jahres-Abo holen 🚀
        </button>
      </div>

    </div>

    <!-- Supported Payment Methods in Switzerland -->
    <div class="payment-methods glass-card flex-col flex-center gap-xs text-center" style="width: 100%; max-width: 720px; padding: 1rem;">
      <span class="text-muted" style="font-size: 0.85rem; font-weight: 500;">
        Sichere Schweizer Bezahlung über Stripe:
      </span>
      <div class="flex-row gap-md" style="flex-wrap: wrap; justify-content: center; font-size: 0.95rem; margin-top: 0.2rem;">
        <span>📱 <strong>TWINT</strong></span>
        <span>💳 <strong>Kreditkarte / Debitkarte</strong></span>
        <span>🍎 <strong>Apple Pay</strong></span>
        <span>🤖 <strong>Google Pay</strong></span>
      </div>
      <span class="text-muted" style="font-size: 0.75rem; margin-top: 0.3rem;">
        Keine sensiblen Bezahldaten auf unserem Server gespeichert • Jederzeit im Kundenportal kündbar
      </span>
    </div>

    <!-- Promo code hint -->
    <p class="text-muted text-center" style="font-size: 0.85rem; max-width: 720px; margin-top: -0.5rem;">
      🎟️ Hast du einen Gutschein-Code? Gib ihn im nächsten Schritt bei der Bezahlung ein.
    </p>
  `;

  container.appendChild(screenEl);

  const backBtn = screenEl.querySelector('#upgrade-back-btn');
  const monthlyBtn = screenEl.querySelector('#plan-monthly-btn');
  const yearlyBtn = screenEl.querySelector('#plan-yearly-btn');

  const handleBack = () => onBack();
  const handleMonthly = () => onSelectPlan('monthly');
  const handleYearly = () => onSelectPlan('yearly');

  backBtn.addEventListener('click', handleBack);
  monthlyBtn.addEventListener('click', handleMonthly);
  yearlyBtn.addEventListener('click', handleYearly);

  return {
    destroy: () => {
      backBtn.removeEventListener('click', handleBack);
      monthlyBtn.removeEventListener('click', handleMonthly);
      yearlyBtn.removeEventListener('click', handleYearly);
      screenEl.remove();
    },
  };
}
