/**
 * Results Screen Component for LottaMATH
 * Celebratory screen showing Suki mascot, stars earned, score, XP breakdown, newly unlocked achievements, and next actions.
 */

import { launchConfetti } from '../components/confetti.js';
import { renderCatMascot } from '../components/catMascot.js';
import { getRandomMessage } from '../data/catMessages.js';

export function renderResults(container, sessionResult = {}, levelInfo = {}, callbacks = {}) {
  if (!container) return null;

  const {
    onRetry = () => {},
    onNext = () => {},
    onHome = () => {},
  } = callbacks;

  const {
    totalCorrect = 0,
    totalQuestions = 5,
    percentage = 0,
    xpEarned = 0,
    starsEarned = 0,
    newlyUnlockedAchievements = [],
    isBoss = false,
    playerName = 'du',
  } = sessionResult;

  const screenEl = document.createElement('div');
  screenEl.className = 'screen results-screen flex-col flex-center text-center gap-lg';

  // Determine Title & Encouraging Message
  let messageTitle = 'Übung beendet!';
  let messageSub = 'Weiter so — mit jedem Schritt wirst du sicherer!';
  let sukiMood = 'happy';
  let sukiMsg = getRandomMessage('encouragement', playerName);

  if (starsEarned === 3) {
    messageTitle = isBoss ? '🏆 BOSS BESIEGT!' : 'Perfekt gelöst! ⭐⭐⭐';
    messageSub = 'Hervorragend! Du beherrschst dieses Thema wie eine echte Meisterin!';
    sukiMood = 'celebrating';
    sukiMsg = getRandomMessage('celebration', playerName);
  } else if (starsEarned >= 1) {
    messageTitle = starsEarned === 2 ? 'Super gemacht! ⭐⭐' : 'Gut gemacht! ⭐';
    messageSub = starsEarned === 2 ? 'Starke Leistung! Fast fehlerfrei.' : 'Du hast das Level bestanden! Mit etwas mehr Übung schaffst du 3 Sterne.';
    sukiMood = 'happy';
    sukiMsg = getRandomMessage('correct', playerName);
  } else {
    sukiMood = 'encouraging';
    sukiMsg = getRandomMessage('encouragement', playerName);
  }

  // Trigger celebration confetti for 2+ stars or Boss defeat
  if (starsEarned >= 2 || isBoss) {
    setTimeout(() => {
      launchConfetti({ particleCount: starsEarned === 3 ? 90 : 50 });
    }, 200);
  }

  let starsHtml = '';
  for (let s = 1; s <= 3; s++) {
    starsHtml += `<span class="results__star ${s <= starsEarned ? 'results__star--earned' : ''}">⭐</span>`;
  }

  screenEl.innerHTML = `
    <div class="results-card glass-card flex-col gap-md">
      <!-- Suki Mascot Slot -->
      <div id="results-suki-slot" style="display: flex; justify-content: center; margin-bottom: 0.25rem;"></div>

      <div class="results__stars-row flex-center gap-sm">
        ${starsHtml}
      </div>

      <h2 class="text-gradient results__title">${messageTitle}</h2>
      <p class="text-muted results__subtitle">${messageSub}</p>

      <div class="results__stats-grid flex-row flex-center gap-lg">
        <div class="results__stat-box glass-card flex-col flex-center">
          <span class="results__stat-num">${totalCorrect}/${totalQuestions}</span>
          <span class="results__stat-lbl text-muted">Richtig (${percentage}%)</span>
        </div>
        <div class="results__stat-box glass-card flex-col flex-center">
          <span class="results__stat-num" style="color: var(--color-xp);">+${xpEarned} XP</span>
          <span class="results__stat-lbl text-muted">Erfahrung</span>
        </div>
      </div>

      ${
        newlyUnlockedAchievements.length > 0
          ? `
        <div class="results__achievements-box glass-card flex-col gap-xs">
          <div class="results__ach-heading">🏆 Neue Auszeichnung!</div>
          ${newlyUnlockedAchievements
            .map(
              (ach) => `
            <div class="results__ach-item flex-row gap-sm flex-center">
              <span style="font-size: 1.4rem;">${ach.icon}</span>
              <span><b>${ach.name}</b> — ${ach.description}</span>
            </div>
          `
            )
            .join('')}
        </div>
      `
          : ''
      }

      <div class="results__actions-row">
        <button type="button" class="btn btn--secondary" id="results-retry-btn">
          🔄 Nochmal
        </button>
        <button type="button" class="btn btn--primary" id="results-next-btn">
          Weiter ➡️
        </button>
        <button type="button" class="btn btn--ghost" id="results-home-btn">
          🏠 Übersicht
        </button>
      </div>
    </div>
  `;

  container.appendChild(screenEl);

  // Mount Suki Mascot
  const sukiSlot = screenEl.querySelector('#results-suki-slot');
  const sukiWidget = renderCatMascot(sukiSlot, {
    mood: sukiMood,
    message: sukiMsg,
    position: 'inline',
  });

  const retryBtn = screenEl.querySelector('#results-retry-btn');
  const nextBtn = screenEl.querySelector('#results-next-btn');
  const homeBtn = screenEl.querySelector('#results-home-btn');

  retryBtn.addEventListener('click', onRetry);
  nextBtn.addEventListener('click', onNext);
  homeBtn.addEventListener('click', onHome);

  return {
    destroy: () => {
      retryBtn.removeEventListener('click', onRetry);
      nextBtn.removeEventListener('click', onNext);
      homeBtn.removeEventListener('click', onHome);
      if (sukiWidget && sukiWidget.destroy) sukiWidget.destroy();
      screenEl.remove();
    },
  };
}
