/**
 * Animated XP Counter Component for LottaMATH
 * Displays current XP, Level title, level progress bar, and floating "+10 XP" celebrations.
 */

import { getXPLevel } from '../engine/gameState.js';

export function renderXPCounter(container, options = {}) {
  if (!container) return null;

  const { initialXP = 0 } = options;
  let displayedXP = initialXP;

  const wrapper = document.createElement('div');
  wrapper.className = 'xp-counter glass-card';

  function updateDOM(xp) {
    const levelInfo = getXPLevel(xp);
    wrapper.innerHTML = `
      <div class="xp-counter__header flex-between">
        <span class="xp-counter__badge">Stufe ${levelInfo.level} · ${levelInfo.title}</span>
        <span class="xp-counter__value">⭐ ${xp} XP</span>
      </div>
      <div class="xp-counter__bar-track">
        <div class="xp-counter__bar-fill" style="width: ${Math.round(levelInfo.progress * 100)}%;"></div>
      </div>
    `;
  }

  updateDOM(displayedXP);
  container.appendChild(wrapper);

  function animateXP(targetXP) {
    const startXP = displayedXP;
    const diff = targetXP - startXP;
    if (diff === 0) return;

    // Show floating "+XP" tag
    const floatEl = document.createElement('div');
    floatEl.className = 'xp-float-tag';
    floatEl.textContent = `+${diff} XP!`;
    wrapper.appendChild(floatEl);
    setTimeout(() => floatEl.remove(), 1200);

    const startTime = performance.now();
    const duration = 600;

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      displayedXP = Math.round(startXP + diff * progress);
      updateDOM(displayedXP);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        displayedXP = targetXP;
        updateDOM(displayedXP);
      }
    }

    requestAnimationFrame(step);
  }

  return {
    setXP: (newXP) => {
      animateXP(newXP);
    },
    destroy: () => {
      wrapper.remove();
    },
  };
}
