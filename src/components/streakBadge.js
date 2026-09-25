/**
 * Streak Badge Component for LottaMATH
 * Daily habit streak counter with fire pulse animation and milestone highlights.
 */

export function renderStreakBadge(container, options = {}) {
  if (!container) return null;

  const { current = 0, best = 0 } = options;

  const wrapper = document.createElement('div');
  wrapper.className = 'streak-badge glass-card';

  function update(streakCurrent, streakBest) {
    const dayLabel = streakCurrent === 1 ? 'Tag' : 'Tage';
    if (streakCurrent > 0) {
      wrapper.innerHTML = `
        <span class="streak-badge__fire">🔥</span>
        <span class="streak-badge__count">${streakCurrent} ${dayLabel}</span>
        ${streakCurrent >= streakBest && streakCurrent > 1 ? '<span class="streak-badge__record">Rekord!</span>' : ''}
      `;
      wrapper.classList.add('streak-badge--active');
    } else {
      wrapper.innerHTML = `
        <span class="streak-badge__fire" style="opacity: 0.6;">🔥</span>
        <span class="streak-badge__count text-muted">0 Tage</span>
      `;
      wrapper.classList.remove('streak-badge--active');
    }
  }

  update(current, best);
  container.appendChild(wrapper);

  return {
    update,
    destroy: () => {
      wrapper.remove();
    },
  };
}
