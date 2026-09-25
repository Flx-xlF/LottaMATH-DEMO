/**
 * Level Selection Screen Component for LottaMATH
 * Displays levels inside a specific world, star ratings, boss challenge, and lock states.
 */

import { getWorld } from '../data/worlds.js';
import { isLevelUnlocked } from '../engine/gameState.js';
import { isPremium } from '../engine/subscriptionManager.js';

export function renderLevelSelect(container, worldId, gameState, callbacks = {}) {
  if (!container) return null;

  const {
    subscriptionStatus = null,
    onLevelSelect = () => {},
    onUpgrade = () => {},
    onReplayIntro = () => {},
    onBack = () => {},
  } = callbacks;

  const userIsPremium = isPremium(subscriptionStatus);
  const worldRequiresPremium = (Number(worldId) >= 2) && !userIsPremium;

  const world = getWorld(worldId);
  if (!world) {
    onBack();
    return null;
  }

  const screenEl = document.createElement('div');
  screenEl.className = 'screen level-select-screen flex-col gap-lg';

  // 1. World Header Bar
  const headerBar = document.createElement('div');
  headerBar.className = 'level-select__header';
  headerBar.innerHTML = `
    <button type="button" class="btn btn--secondary flex-row gap-xs" id="level-back-btn" aria-label="Zurück zur Weltübersicht">
      <span>←</span><span class="level-back-text"> Zurück</span>
    </button>
    <div class="level-select__world-title flex-row gap-sm">
      <span style="font-size: 1.8rem; flex-shrink: 0;">${world.emoji}</span>
      <div>
        <h2 class="level-select__world-name">${world.name}</h2>
        <span class="text-muted" style="font-size: 0.85rem;">Welt ${world.id}</span>
      </div>
    </div>
    <div class="level-select__placeholder"></div>
  `;
  screenEl.appendChild(headerBar);

  // 2. World Description Card
  const descCard = document.createElement('div');
  descCard.className = 'level-select__desc-card glass-card flex-between align-center gap-md flex-wrap';
  descCard.style.borderLeft = `4px solid ${world.colorPrimary}`;
  descCard.innerHTML = `
    <div class="level-select__desc-text" style="flex: 1 1 200px; min-width: 0;">
      <p style="margin: 0;">${world.description}</p>
    </div>
    ${world.realWorldIntro ? `
      <button type="button" class="btn btn--secondary flex-row align-center gap-xs" id="replay-intro-btn" title="Kernprinzipien & visuelle Einführung nochmals ansehen" style="flex-shrink: 0; padding: 0.5rem 0.9rem; font-size: 0.9rem; border-color: ${world.colorPrimary}88;">
        <span style="font-size: 1.1rem;">🎬</span>
        <span>Kernprinzipien</span>
      </button>
    ` : ''}
  `;
  screenEl.appendChild(descCard);

  // 3. Level Cards List
  const levelsContainer = document.createElement('div');
  levelsContainer.className = 'level-select__list flex-col gap-md';

  world.levels.forEach((lvl, idx) => {
    const levelNum = idx + 1;
    const unlocked = isLevelUnlocked(gameState, world.id, levelNum) && !worldRequiresPremium;
    const prog = gameState.levels && gameState.levels[lvl.id];
    const stars = prog ? prog.stars || 0 : 0;
    const bestScore = prog ? prog.bestScore || 0 : 0;

    const card = document.createElement('div');
    card.className = `level-card glass-card ${
      lvl.isBoss ? 'level-card--boss' : ''
    } ${unlocked ? 'glass-card--interactive' : 'level-card--locked'}`;

    let starsDisplay = '';
    for (let s = 1; s <= 3; s++) {
      starsDisplay += s <= stars ? '⭐' : '☆';
    }

    card.innerHTML = `
      <div class="level-card__left flex-row gap-md">
        <div class="level-card__num ${lvl.isBoss ? 'level-card__num--boss' : ''}">
          ${lvl.isBoss ? '🏆' : levelNum}
        </div>
        <div class="level-card__info">
          <div class="level-card__title-row flex-row gap-sm">
            <h3 class="level-card__name">${lvl.name}</h3>
            ${lvl.isBoss ? '<span class="level-card__boss-tag">BOSS</span>' : ''}
          </div>
          <p class="level-card__desc text-muted">${lvl.description}</p>
        </div>
      </div>
      <div class="level-card__right flex-col flex-center">
        ${
          worldRequiresPremium
            ? `<span class="level-card__lock" style="color: var(--color-warning, #ffab00);">⭐ Premium</span>`
            : (unlocked
                ? `
                  <div class="level-card__stars">${starsDisplay}</div>
                  ${bestScore > 0 ? `<div class="level-card__score text-muted">${bestScore}%</div>` : ''}
                `
                : `<span class="level-card__lock">🔒 Gesperrt</span>`)
        }
      </div>
    `;

    if (worldRequiresPremium) {
      card.addEventListener('click', () => onUpgrade());
    } else if (unlocked) {
      card.addEventListener('click', () => onLevelSelect(lvl.id, lvl));
    }

    levelsContainer.appendChild(card);
  });

  screenEl.appendChild(levelsContainer);
  container.appendChild(screenEl);

  const backBtn = headerBar.querySelector('#level-back-btn');
  backBtn.addEventListener('click', onBack);

  const replayIntroBtn = descCard.querySelector('#replay-intro-btn');
  const handleReplayClick = () => onReplayIntro();
  if (replayIntroBtn) {
    replayIntroBtn.addEventListener('click', handleReplayClick);
  }

  return {
    destroy: () => {
      backBtn.removeEventListener('click', onBack);
      if (replayIntroBtn) {
        replayIntroBtn.removeEventListener('click', handleReplayClick);
      }
      screenEl.remove();
    },
  };
}
