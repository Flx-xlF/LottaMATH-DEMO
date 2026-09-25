/**
 * Progressive Hint Panel Component for LottaMATH
 * Collapsible accordion for step-by-step guidance without penalty on exploration.
 */

import { getHint, getCommonMistake } from '../engine/hintEngine.js';
import { renderMathInText } from './mathRenderer.js';
import { renderVisualModel } from './visualMath.js';

export function renderHintPanel(container, options = {}) {
  if (!container) return null;

  const {
    question = null,
    onHintUsed = () => {},
  } = options;

  let currentHintIndex = 0;
  let hintsRevealed = 0;
  const visualControllers = [];

  const wrapper = document.createElement('div');
  wrapper.className = 'hint-panel';

  wrapper.innerHTML = `
    <div class="hint-panel__toggle-row flex-between">
      <button type="button" class="btn btn--secondary hint-panel__btn" id="hint-toggle-btn">
        <span>💡 Tipp anzeigen</span>
      </button>
      <span class="hint-panel__counter text-muted" id="hint-counter">Tipps: 0/3</span>
    </div>
    <div class="hint-panel__body" id="hint-body" style="display: none;">
      <div class="hint-panel__list" id="hint-list"></div>
      <div class="hint-panel__mistake text-muted" id="hint-mistake" style="display: none;"></div>
    </div>
  `;

  container.appendChild(wrapper);

  const toggleBtn = wrapper.querySelector('#hint-toggle-btn');
  const counterEl = wrapper.querySelector('#hint-counter');
  const bodyEl = wrapper.querySelector('#hint-body');
  const listEl = wrapper.querySelector('#hint-list');
  const mistakeEl = wrapper.querySelector('#hint-mistake');

  const totalHints = (question && question.hints) ? question.hints.length : 3;

  function revealNextHint() {
    if (!question) return;

    bodyEl.style.display = 'block';

    const hintData = getHint(question, currentHintIndex);
    const hintItem = document.createElement('div');
    hintItem.className = 'hint-item glass-card flex-col gap-sm';

    const hintTextEl = document.createElement('div');
    hintTextEl.className = 'hint-item-text';
    renderMathInText(hintTextEl, hintData.text);
    hintItem.appendChild(hintTextEl);

    if (hintData.visual) {
      const visualSlot = document.createElement('div');
      visualSlot.className = 'hint-item-visual';
      const controller = renderVisualModel(visualSlot, hintData.visual);
      if (controller && typeof controller.destroy === 'function') {
        visualControllers.push(controller);
      }
      hintItem.appendChild(visualSlot);
    }

    listEl.appendChild(hintItem);

    hintsRevealed += 1;
    counterEl.textContent = `Tipps: ${hintsRevealed}/${totalHints}`;

    // Common mistake callout on first hint
    if (hintsRevealed === 1 && question.commonMistake) {
      mistakeEl.style.display = 'block';
      mistakeEl.innerHTML = '';
      renderMathInText(mistakeEl, getCommonMistake(question));
    }

    onHintUsed(currentHintIndex);

    currentHintIndex += 1;

    if (currentHintIndex < totalHints) {
      toggleBtn.innerHTML = `<span>🔑 Nächster Tipp (${currentHintIndex + 1}/${totalHints})</span>`;
    } else {
      toggleBtn.innerHTML = `<span>✅ Alle Tipps angezeigt</span>`;
      toggleBtn.disabled = true;
    }
  }

  toggleBtn.addEventListener('click', revealNextHint);

  return {
    showNextHint: revealNextHint,
    getHintsRevealed: () => hintsRevealed,
    destroy: () => {
      toggleBtn.removeEventListener('click', revealNextHint);
      visualControllers.forEach((ctrl) => {
        try {
          ctrl.destroy();
        } catch (e) {
          console.warn('[hintPanel] Error destroying visual controller:', e);
        }
      });
      visualControllers.length = 0;
      wrapper.remove();
    },
  };
}
