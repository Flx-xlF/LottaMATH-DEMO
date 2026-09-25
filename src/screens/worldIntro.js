/**
 * World Real-World Introduction Screen for LottaMATH
 * Interactive card explaining the real-life applications of the world's algebraic concepts
 * with step-by-step mathematical breakdowns, visual models, and Suki tips.
 */

import { renderCatMascot } from '../components/catMascot.js';
import { getRandomMessage } from '../data/catMessages.js';
import { renderMathInText } from '../components/mathRenderer.js';
import { renderVisualModel } from '../components/visualMath.js';

export function renderWorldIntro(container, world, callbacks = {}) {
  if (!container || !world) return null;

  const {
    playerName = 'du',
    onContinue = () => {},
    onBack = null,
  } = callbacks;

  const introData = world.realWorldIntro || {
    headline: `Wozu brauchen wir ${world.name}?`,
    examples: [
      {
        icon: '💡',
        title: 'Mathematik im Alltag',
        scenario: 'Algebra hilft dir, knifflige Zusammenhänge schnell und strukturiert zu erfassen.',
      },
    ],
  };

  const screenEl = document.createElement('div');
  screenEl.className = 'screen world-intro-screen flex-col flex-center';

  let currentTabIdx = 0;
  const examples = introData.examples || [];

  screenEl.innerHTML = `
    <div class="world-intro-card glass-card flex-col gap-lg" style="max-width: 680px; width: 100%; border-top: 4px solid ${world.colorPrimary};">
      
      <!-- Top Bar with Back Button & World Tag -->
      <div class="world-intro__header-bar flex-row flex-between" style="width: 100%; min-height: 38px;">
        ${onBack ? `
          <button type="button" class="btn btn--secondary" id="world-intro-back-btn" style="font-size: 0.85rem; padding: 0.35rem 0.75rem; flex-shrink: 0;" title="Zurück zur Level-Übersicht">
            ← Zurück
          </button>
        ` : '<div></div>'}
        <span class="world-intro__world-tag" style="color: ${world.colorPrimary}; font-weight: 700; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; text-align: right;">
          ${world.emoji} Welt ${world.id}: ${world.name}
        </span>
      </div>

      <!-- Suki Mascot Slot -->
      <div id="world-intro-cat-slot" style="display: flex; justify-content: center;"></div>

      <!-- Headline -->
      <div class="text-center" style="width: 100%;">
        <h2 class="text-gradient" style="font-size: 1.75rem; margin-top: 0; margin-bottom: 0.25rem; line-height: 1.25;">
          ${introData.headline}
        </h2>
      </div>

      <!-- Tabs Navigation (if multiple examples) -->
      ${examples.length > 1 ? `
        <div class="world-intro__tabs flex-row flex-center gap-xs">
          ${examples.map((ex, idx) => `
            <button type="button" class="world-intro__tab-btn ${idx === 0 ? 'active' : ''}" data-tab-idx="${idx}">
              <span class="tab-icon">${ex.icon}</span>
              <span class="tab-title">${ex.title.split('(')[0].trim()}</span>
            </button>
          `).join('')}
        </div>
      ` : ''}

      <!-- Example Detail Container -->
      <div id="world-intro-example-container" class="world-intro__example-container">
        <!-- Rendered dynamically -->
      </div>

      <!-- Action Navigation -->
      <div class="world-intro__actions flex-between" style="margin-top: 0.5rem; gap: 1rem; width: 100%;">
        <button type="button" class="btn btn--secondary" id="world-intro-prev-tab" style="visibility: hidden;">
          ← Vorheriges
        </button>
        <button type="button" class="btn btn--primary" id="world-intro-continue-btn" style="min-width: 220px; font-size: 1.05rem;">
          ${examples.length > 1 ? 'Weiter 🐾' : "Verstanden — los geht's! 🐾"}
        </button>
      </div>
    </div>
  `;

  container.appendChild(screenEl);

  // Mount Suki Mascot in Thinking Mood
  const catSlot = screenEl.querySelector('#world-intro-cat-slot');
  const sukiWidget = renderCatMascot(catSlot, {
    mood: 'thinking',
    message: getRandomMessage('thinking', playerName),
    position: 'inline',
  });

  const exampleContainer = screenEl.querySelector('#world-intro-example-container');
  const continueBtn = screenEl.querySelector('#world-intro-continue-btn');
  const prevBtn = screenEl.querySelector('#world-intro-prev-tab');
  const tabBtns = screenEl.querySelectorAll('.world-intro__tab-btn');

  let currentVisualInstance = null;
  function cleanupVisual() {
    if (currentVisualInstance && typeof currentVisualInstance.destroy === 'function') {
      try {
        currentVisualInstance.destroy();
      } catch (err) {
        console.warn('Error destroying visual instance:', err);
      }
      currentVisualInstance = null;
    }
  }

  function renderCurrentExample(idx) {
    cleanupVisual();
    currentTabIdx = idx;
    const ex = examples[idx];
    if (!ex) return;

    // Update Tabs active state
    tabBtns.forEach((btn, bIdx) => {
      btn.classList.toggle('active', bIdx === idx);
    });

    // Update prev/next button text
    if (prevBtn) {
      prevBtn.style.visibility = idx > 0 ? 'visible' : 'hidden';
    }

    if (continueBtn) {
      if (idx === examples.length - 1) {
        continueBtn.textContent = "Verstanden — los geht's! 🐾";
      } else {
        continueBtn.textContent = 'Nächstes Beispiel →';
      }
    }

    exampleContainer.innerHTML = '';

    const card = document.createElement('div');
    card.className = 'world-intro__example-detail glass-panel flex-col gap-md';

    // Header with Icon and Title
    const header = document.createElement('div');
    header.className = 'flex-row gap-sm align-center';
    header.innerHTML = `
      <span class="world-intro__example-icon">${ex.icon}</span>
      <div>
        <h3 class="world-intro__example-title">${ex.title}</h3>
      </div>
    `;
    card.appendChild(header);

    // Scenario / Context Text
    const scenarioText = ex.scenario || ex.text || '';
    if (scenarioText) {
      const scenarioEl = document.createElement('p');
      scenarioEl.className = 'world-intro__scenario text-muted';
      renderMathInText(scenarioEl, scenarioText);
      card.appendChild(scenarioEl);
    }

    // Visual Model (if present)
    if (ex.visual) {
      const visualSlot = document.createElement('div');
      visualSlot.className = 'world-intro__visual-slot';
      currentVisualInstance = renderVisualModel(visualSlot, ex.visual);
      card.appendChild(visualSlot);
    }

    // Step-by-Step Breakdown (if present)
    if (ex.mathBreakdown && Array.isArray(ex.mathBreakdown)) {
      const breakdownEl = document.createElement('div');
      breakdownEl.className = 'world-intro__breakdown flex-col gap-sm';

      ex.mathBreakdown.forEach((stepItem, sIdx) => {
        const stepRow = document.createElement('div');
        stepRow.className = 'world-intro__step flex-row gap-sm align-center';

        const stepNum = document.createElement('div');
        stepNum.className = 'world-intro__step-num';
        stepNum.textContent = `${sIdx + 1}`;

        const stepBody = document.createElement('div');
        stepBody.className = 'world-intro__step-body flex-1';

        const stepTitle = document.createElement('div');
        stepTitle.className = 'world-intro__step-title';
        stepTitle.textContent = stepItem.step;
        stepBody.appendChild(stepTitle);

        const stepDetail = document.createElement('div');
        stepDetail.className = 'world-intro__step-detail text-muted';
        renderMathInText(stepDetail, stepItem.detail);
        stepBody.appendChild(stepDetail);

        stepRow.appendChild(stepNum);
        stepRow.appendChild(stepBody);

        if (stepItem.math) {
          const stepMath = document.createElement('div');
          stepMath.className = 'world-intro__step-math';
          renderMathInText(stepMath, stepItem.math.startsWith('$') ? stepItem.math : `$${stepItem.math}$`);
          stepRow.appendChild(stepMath);
        }

        breakdownEl.appendChild(stepRow);
      });

      card.appendChild(breakdownEl);
    }

    // Suki Comment / Tip Bubble (if present)
    if (ex.sukiComment) {
      const tipBox = document.createElement('div');
      tipBox.className = 'world-intro__suki-tip flex-row gap-sm align-center';
      
      const tipIcon = document.createElement('span');
      tipIcon.className = 'suki-tip-icon';
      tipIcon.textContent = '🐾';

      const tipText = document.createElement('div');
      tipText.className = 'suki-tip-text';
      
      const strongLabel = document.createElement('strong');
      strongLabel.textContent = 'Suki meint: ';
      tipText.appendChild(strongLabel);

      const commentSpan = document.createElement('span');
      renderMathInText(commentSpan, ex.sukiComment);
      tipText.appendChild(commentSpan);

      tipBox.appendChild(tipIcon);
      tipBox.appendChild(tipText);
      card.appendChild(tipBox);
    }

    exampleContainer.appendChild(card);
  }

  // Initial render
  renderCurrentExample(0);

  // Tab button click listeners
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = Number(btn.getAttribute('data-tab-idx'));
      renderCurrentExample(idx);
    });
  });

  // Prev / Next button actions
  function handleContinue() {
    if (currentTabIdx < examples.length - 1) {
      renderCurrentExample(currentTabIdx + 1);
    } else {
      onContinue();
    }
  }

  function handlePrev() {
    if (currentTabIdx > 0) {
      renderCurrentExample(currentTabIdx - 1);
    }
  }

  continueBtn.addEventListener('click', handleContinue);
  if (prevBtn) {
    prevBtn.addEventListener('click', handlePrev);
  }

  const introBackBtn = screenEl.querySelector('#world-intro-back-btn');
  if (introBackBtn && onBack) {
    introBackBtn.addEventListener('click', onBack);
  }

  return {
    destroy: () => {
      cleanupVisual();
      continueBtn.removeEventListener('click', handleContinue);
      if (prevBtn) prevBtn.removeEventListener('click', handlePrev);
      if (introBackBtn && onBack) introBackBtn.removeEventListener('click', onBack);
      if (sukiWidget && sukiWidget.destroy) sukiWidget.destroy();
      screenEl.remove();
    },
  };
}
