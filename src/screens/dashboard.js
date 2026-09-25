/**
 * Dashboard Screen Component for LottaMATH
 * Main hub: Suki greeting, Topic accordions, World progression cards, Exam mode hero, and Achievement shelf.
 */

import { TOPICS } from '../data/topics.js';
import { getWorldsForTopic } from '../data/worlds.js';
import { ACHIEVEMENTS } from '../data/achievements.js';
import { isWorldUnlocked, getMistakeCount } from '../engine/gameState.js';
import { renderXPCounter } from '../components/xpCounter.js';
import { renderStreakBadge } from '../components/streakBadge.js';
import { renderProgressRing } from '../components/progressBar.js';
import { renderCatMascot } from '../components/catMascot.js';
import { getRandomMessage } from '../data/catMessages.js';
import { getActiveProfile, getFriendlyPlayerName } from '../engine/profileManager.js';
import { isPremium } from '../engine/subscriptionManager.js';

/**
 * Simple HTML escape to prevent XSS
 * @param {string} str
 * @returns {string}
 */
function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function renderDashboard(container, gameState, callbacks = {}) {
  if (!container) return null;

  const {
    activeProfile = getActiveProfile(),
    subscriptionStatus = null,
    onWorldSelect = () => {},
    onExamMode = () => {},
    onVaultMode = () => {},
    onUpgrade = () => {},
    onManageSubscription = () => {},
    onThemeToggle = () => {},
    onSwitchProfile = () => {},
  } = callbacks;

  const playerName = activeProfile ? activeProfile.nickname : 'du';
  const userIsPremium = isPremium(subscriptionStatus);
  const isSubscribed = Boolean(subscriptionStatus && subscriptionStatus.valid);

  const screenEl = document.createElement('div');
  screenEl.className = 'screen dashboard-screen flex-col gap-xl';

  // 1. Header Bar
  const headerBar = document.createElement('div');
  headerBar.className = 'dashboard__header flex-between';
  headerBar.innerHTML = `
    <div class="dashboard__brand flex-row gap-sm" style="align-items: center;">
      <span class="dashboard__logo-icon">🌊</span>
      <div class="dashboard__titles">
        <div class="flex-row gap-xs" style="align-items: center;">
          <h1 class="dashboard__title text-gradient">LottaMATH</h1>
          ${isSubscribed ? '<span class="premium-badge">⭐ Premium</span>' : ''}
        </div>
        <div class="dashboard__subtitle text-muted">Sekundarschule Niveau P (Baselland)</div>
      </div>
    </div>
    <div class="dashboard__actions flex-row gap-sm" style="align-items: center; position: relative;">
      <button type="button" class="btn btn--secondary btn--icon" id="profile-menu-btn" title="Konto & Einstellungen" style="font-size: 1.4rem; padding: 0 6px;">
        ${activeProfile ? escapeHtml(activeProfile.avatar) : '👤'}
      </button>
      
      <div class="profile-dropdown-menu glass-card" id="profile-dropdown">
        <div class="dropdown-header">
          <div class="dropdown-name">${activeProfile ? escapeHtml(activeProfile.nickname) : 'Gast'}</div>
          ${isSubscribed ? '<div class="premium-badge">⭐ Premium</div>' : ''}
        </div>
        <div class="dropdown-divider"></div>
        <button type="button" class="dropdown-item" id="dropdown-switch-btn">
          👤 Profil wechseln
        </button>
        <button type="button" class="dropdown-item" id="dropdown-theme-btn">
          ${gameState.theme === 'light' ? '🌙 Dark Mode aktivieren' : '☀️ Light Mode aktivieren'}
        </button>
        <div class="dropdown-divider"></div>
        ${
          !userIsPremium
            ? `<button type="button" class="dropdown-item dropdown-item--premium text-gradient" id="dropdown-upgrade-btn" style="font-weight: 700;">
                ⭐ Premium freischalten
              </button>`
            : (isSubscribed
                ? `<button type="button" class="dropdown-item" id="dropdown-manage-sub-btn">
                    ⚙️ Abo verwalten
                  </button>`
                : '')
        }
      </div>
    </div>
  `;
  screenEl.appendChild(headerBar);

  // 2. Stats Row (XP + Streak)
  const statsRow = document.createElement('div');
  statsRow.className = 'dashboard__stats-row flex-row gap-md';

  const xpContainer = document.createElement('div');
  xpContainer.className = 'dashboard__xp-container';
  statsRow.appendChild(xpContainer);

  const streakContainer = document.createElement('div');
  streakContainer.className = 'dashboard__streak-container';
  statsRow.appendChild(streakContainer);

  screenEl.appendChild(statsRow);

  const xpWidget = renderXPCounter(xpContainer, { initialXP: gameState.totalXP || 0 });
  const streakWidget = renderStreakBadge(streakContainer, {
    current: (gameState.streak && gameState.streak.current) || 0,
    best: (gameState.streak && gameState.streak.best) || 0,
  });

  // 3. Suki Cat Greeting
  const sukiSlot = document.createElement('div');
  sukiSlot.className = 'dashboard__suki-slot';
  screenEl.appendChild(sukiSlot);
  const sukiWidget = renderCatMascot(sukiSlot, {
    mood: 'happy',
    message: getRandomMessage('greeting', playerName),
    position: 'inline',
  });

  // 3.5. Pareto Strategy Card (80/20 Rule for Lotta)
  const paretoCard = document.createElement('div');
  paretoCard.className = 'dashboard__pareto-card glass-card flex-row gap-md';
  paretoCard.style.borderLeft = '4px solid var(--color-warning)';
  paretoCard.style.background = 'var(--color-warning-bg)';
  paretoCard.style.padding = '0.85rem 1.15rem';
  paretoCard.style.borderRadius = 'var(--radius-md, 12px)';
  paretoCard.innerHTML = `
    <div style="font-size: 1.6rem; line-height: 1; flex-shrink: 0;">⚡</div>
    <div class="flex-col gap-xs">
      <div style="font-weight: 700; font-size: 0.95rem; color: var(--color-text);">
        Sukis 80/20-Erfolgsregel (Das Pareto-Prinzip)
      </div>
      <div class="text-muted" style="font-size: 0.85rem; line-height: 1.45;">
        Mit nur <b>20% gezielten Kern-Mustern</b> (Flächenmodelle, Minusklammern & Binome) löst du <b>80% aller Prüfungsaufgaben</b>! Lerne clever & mit Durchblick statt mit Frust. 🐾
      </div>
    </div>
  `;
  screenEl.appendChild(paretoCard);

  // 3.6. Fehler-Schmiede Card (Lottas Mistake Vault)
  const mistakeCount = getMistakeCount(gameState);
  const vaultCard = document.createElement('div');
  vaultCard.className = 'dashboard__vault-card glass-card flex-col gap-sm';
  vaultCard.style.borderLeft = mistakeCount > 0 ? '4px solid var(--color-error)' : '4px solid var(--color-success)';
  vaultCard.style.background = mistakeCount > 0 ? 'rgba(255, 68, 68, 0.06)' : 'rgba(0, 204, 136, 0.06)';
  vaultCard.style.padding = '1rem 1.15rem';
  vaultCard.style.borderRadius = 'var(--radius-md, 12px)';

  if (mistakeCount > 0) {
    vaultCard.innerHTML = `
      <div class="flex-between" style="align-items: center;">
        <div class="flex-row gap-sm" style="align-items: center;">
          <span style="font-size: 1.4rem;">🛠️</span>
          <span style="font-weight: 700; font-size: 1rem; color: var(--color-text);">
            Fehler-Schmiede
          </span>
        </div>
        <span class="badge" style="background: var(--color-error); color: #fff; font-weight: 700; font-size: 0.8rem; padding: 3px 8px; border-radius: 12px;">
          ${mistakeCount} ${mistakeCount === 1 ? 'Knacknuss' : 'Knacknüsse'}
        </span>
      </div>
      <div class="text-muted" style="font-size: 0.85rem; line-height: 1.45;">
        Hier sammeln sich knifflige Aufgaben, die nicht auf Anhieb geklappt haben. Trainiere sie gezielt, um sie endgültig zu meistern!
      </div>
      <button type="button" class="btn btn--primary" id="dashboard-vault-btn" style="margin-top: 0.25rem; font-size: 0.95rem; min-height: 42px;">
        Knacknüsse trainieren 💪
      </button>
    `;
  } else {
    vaultCard.innerHTML = `
      <div class="flex-between" style="align-items: center;">
        <div class="flex-row gap-sm" style="align-items: center;">
          <span style="font-size: 1.4rem;">🌟</span>
          <span style="font-weight: 700; font-size: 1rem; color: var(--color-text);">
            Fehler-Schmiede: Alles gemeistert!
          </span>
        </div>
        <span class="badge" style="background: var(--color-success); color: #fff; font-weight: 700; font-size: 0.8rem; padding: 3px 8px; border-radius: 12px;">
          0 offen ✓
        </span>
      </div>
      <div class="text-muted" style="font-size: 0.85rem; line-height: 1.45;">
        Saubere Arbeit${getFriendlyPlayerName(playerName) ? ', ' + escapeHtml(getFriendlyPlayerName(playerName)) : ''}! Du hast momentan keine offenen Knacknüsse im Speicher. Weiter so! 🐾
      </div>
    `;
  }
  screenEl.appendChild(vaultCard);

  const vaultBtn = vaultCard.querySelector('#dashboard-vault-btn');
  if (vaultBtn) {
    vaultBtn.addEventListener('click', () => {
      if (!userIsPremium) {
        onUpgrade();
      } else {
        onVaultMode();
      }
    });
  }

  // 4. Topic Accordion Section
  const topicsSection = document.createElement('div');
  topicsSection.className = 'dashboard__topics-section flex-col gap-md';
  topicsSection.innerHTML = `<h2 class="dashboard__section-title">Themenbereiche</h2>`;

  TOPICS.forEach((topic, topicIdx) => {
    const topicWorlds = getWorldsForTopic(topic.id);
    const isUnlocked = topic.unlocked;

    // Calculate total levels and completed levels for this topic
    let totalLevels = 0;
    let completedLevels = 0;
    let totalStars = 0;

    topicWorlds.forEach((w) => {
      totalLevels += w.levels.length;
      w.levels.forEach((l) => {
        const prog = gameState.levels && gameState.levels[l.id];
        if (prog) {
          totalStars += prog.stars || 0;
          if (prog.completed) completedLevels += 1;
        }
      });
    });

    const completionPercent = totalLevels > 0 ? Math.round((completedLevels / totalLevels) * 100) : 0;
    const isExpanded = topicIdx === 0 && isUnlocked; // First topic expanded by default

    const topicCard = document.createElement('div');
    topicCard.className = `topic-card glass-card ${isUnlocked ? '' : 'topic-card--locked'} ${
      isExpanded ? 'topic-card--expanded' : ''
    }`;
    topicCard.style.setProperty('--topic-color', topic.colorPrimary);

    // Topic Header
    const topicHeader = document.createElement('div');
    topicHeader.className = 'topic-card__header flex-between';
    topicHeader.innerHTML = `
      <div class="topic-card__header-left flex-row gap-md">
        <span class="topic-card__emoji">${topic.emoji}</span>
        <div class="topic-card__info flex-col">
          <div class="flex-row gap-sm" style="align-items: center;">
            <h3 class="topic-card__title">${topic.name}</h3>
            <span class="topic-card__chapter">${topic.chapter}</span>
          </div>
          ${
            isUnlocked
              ? `<p class="topic-card__desc text-muted">${topic.description}</p>`
              : `<p class="topic-card__teaser">${topic.description}</p>`
          }
        </div>
      </div>
      <div class="topic-card__header-right flex-row gap-md" style="align-items: center;">
        ${
          isUnlocked
            ? `
            <span class="topic-card__progress" style="color: ${topic.colorPrimary};">${completionPercent}%</span>
            <span class="topic-card__chevron">▼</span>
          `
            : `
            <span class="topic-card__lock-badge text-muted">🔒 Demnächst</span>
          `
        }
      </div>
    `;

    topicCard.appendChild(topicHeader);

    // Topic Body (Collapsible World Grid)
    if (isUnlocked && topicWorlds.length > 0) {
      const topicBody = document.createElement('div');
      topicBody.className = 'topic-card__body';

      const worldsGrid = document.createElement('div');
      worldsGrid.className = 'dashboard__worlds-grid';

      topicWorlds.forEach((w) => {
        const worldUnlocked = isWorldUnlocked(gameState, w.id);

        let wStars = 0;
        let wCompleted = 0;
        w.levels.forEach((l) => {
          const prog = gameState.levels && gameState.levels[l.id];
          if (prog) {
            wStars += prog.stars || 0;
            if (prog.completed) wCompleted += 1;
          }
        });

        const maxStars = w.levels.length * 3;
        const progressRatio = w.levels.length > 0 ? wCompleted / w.levels.length : 0;

        const wCard = document.createElement('div');
        wCard.className = `world-card glass-card ${worldUnlocked ? 'glass-card--interactive' : 'world-card--locked'}`;
        wCard.style.setProperty('--world-theme', w.colorPrimary);

        wCard.innerHTML = `
          <div class="world-card__header flex-between">
            <span class="world-card__emoji">${w.emoji}</span>
            <div class="world-card__ring-mount" id="world-ring-${w.id}"></div>
          </div>
          <div class="world-card__body">
            <h4 class="world-card__title" style="font-size: 1.15rem;">${w.name}</h4>
            <p class="world-card__desc text-muted">${w.description}</p>
          </div>
          <div class="world-card__footer flex-between">
            <span class="world-card__stars">⭐ ${wStars} / ${maxStars}</span>
            ${
              worldUnlocked
                ? `<span class="world-card__status" style="color: ${w.colorPrimary}; font-weight: 600;">Öffnen →</span>`
                : `<span class="world-card__lock">🔒 Gesperrt</span>`
            }
          </div>
        `;

        if (worldUnlocked) {
          wCard.addEventListener('click', (e) => {
            e.stopPropagation();
            onWorldSelect(w.id);
          });
        }

        worldsGrid.appendChild(wCard);

        setTimeout(() => {
          const ringMount = wCard.querySelector(`#world-ring-${w.id}`);
          if (ringMount) {
            renderProgressRing(ringMount, {
              value: progressRatio,
              size: 44,
              strokeWidth: 5,
              color: w.colorPrimary,
              label: `${wCompleted}/${w.levels.length}`,
            });
          }
        }, 0);
      });

      topicBody.appendChild(worldsGrid);
      topicCard.appendChild(topicBody);

      // Header click toggles expand/collapse
      topicHeader.addEventListener('click', () => {
        topicCard.classList.toggle('topic-card--expanded');
      });
    }

    topicsSection.appendChild(topicCard);
  });

  screenEl.appendChild(topicsSection);

  // 5. Exam Mode Hero Card
  const examSection = document.createElement('div');
  examSection.className = 'dashboard__exam-section';
  examSection.innerHTML = `
    <div class="exam-hero-card glass-card glass-card--interactive flex-between">
      <div class="exam-hero-card__content">
        <div class="exam-hero-card__badge">${userIsPremium ? '🎯 Simulation' : '🔒 Premium'}</div>
        <h3 class="exam-hero-card__title">Prüfungsmodus</h3>
        <p class="exam-hero-card__desc text-muted">
          20 Prüfungsfragen aus allen Welten · Inklusive Schweizer Notenberechnung (1.0 bis 6.0)
        </p>
      </div>
      <button type="button" class="btn btn--primary exam-hero-card__btn">
        ${userIsPremium ? 'Starten 🚀' : 'Freischalten ⭐'}
      </button>
    </div>
  `;
  examSection.querySelector('.exam-hero-card').addEventListener('click', () => {
    if (!userIsPremium) {
      onUpgrade();
    } else {
      onExamMode();
    }
  });
  screenEl.appendChild(examSection);

  // 6. Achievement Shelf
  const achSection = document.createElement('div');
  achSection.className = 'dashboard__achievements-section flex-col gap-sm';
  achSection.innerHTML = `
    <h3 class="dashboard__section-title" style="font-size: 1.1rem;">Auszeichnungen (${(gameState.achievements || []).length}/${ACHIEVEMENTS.length})</h3>
    <div class="dashboard__achievements-shelf glass-card">
      <div class="achievements-scroll-track" id="achievements-track"></div>
    </div>
  `;

  const achTrack = achSection.querySelector('#achievements-track');
  const unlockedSet = new Set(gameState.achievements || []);

  ACHIEVEMENTS.forEach((ach) => {
    const isUnlocked = unlockedSet.has(ach.id);
    const itemEl = document.createElement('div');
    itemEl.className = `achievement-item ${isUnlocked ? 'achievement-item--unlocked' : 'achievement-item--locked'}`;
    itemEl.title = `${ach.name}: ${ach.description}`;
    itemEl.innerHTML = `
      <div class="achievement-item__icon">${ach.icon}</div>
      <div class="achievement-item__name">${ach.name}</div>
    `;
    achTrack.appendChild(itemEl);
  });

  screenEl.appendChild(achSection);

  // 6. Footer Tagline
  const footerEl = document.createElement('footer');
  footerEl.className = 'dashboard__footer text-center';
  footerEl.style.cssText = 'margin-top: var(--spacing-xl); padding-bottom: var(--spacing-lg); font-size: 0.85rem; color: var(--color-text-muted); opacity: 0.85;';
  footerEl.innerHTML = `
    Built with care (and a bit of madness) by <a href="https://github.com/Flx-xlF" target="_blank" rel="noopener noreferrer" style="color: var(--color-primary); text-decoration: none; font-weight: 600;">schema/f</a>.
  `;
  screenEl.appendChild(footerEl);

  container.appendChild(screenEl);

  // Dropdown UI logic
  const menuBtn = headerBar.querySelector('#profile-menu-btn');
  const dropdown = headerBar.querySelector('#profile-dropdown');
  
  const toggleDropdown = (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('profile-dropdown-menu--open');
  };
  
  const closeDropdown = (e) => {
    if (!dropdown.contains(e.target) && e.target !== menuBtn) {
      dropdown.classList.remove('profile-dropdown-menu--open');
    }
  };

  menuBtn.addEventListener('click', toggleDropdown);
  document.addEventListener('click', closeDropdown);

  // Dropdown Action Listeners
  const switchBtn = dropdown.querySelector('#dropdown-switch-btn');
  switchBtn.addEventListener('click', (e) => {
    dropdown.classList.remove('profile-dropdown-menu--open');
    onSwitchProfile(e);
  });

  const themeBtn = dropdown.querySelector('#dropdown-theme-btn');
  themeBtn.addEventListener('click', (e) => {
    onThemeToggle(e);
    themeBtn.textContent = document.documentElement.getAttribute('data-theme') === 'light' 
      ? '🌙 Dark Mode aktivieren' 
      : '☀️ Light Mode aktivieren';
  });

  const upgradeBtn = dropdown.querySelector('#dropdown-upgrade-btn');
  if (upgradeBtn) {
    upgradeBtn.addEventListener('click', (e) => {
      dropdown.classList.remove('profile-dropdown-menu--open');
      onUpgrade(e);
    });
  }

  const manageSubBtn = dropdown.querySelector('#dropdown-manage-sub-btn');
  if (manageSubBtn) {
    manageSubBtn.addEventListener('click', (e) => {
      dropdown.classList.remove('profile-dropdown-menu--open');
      onManageSubscription(e);
    });
  }

  return {
    destroy: () => {
      menuBtn.removeEventListener('click', toggleDropdown);
      document.removeEventListener('click', closeDropdown);
      if (xpWidget) xpWidget.destroy();
      if (streakWidget) streakWidget.destroy();
      if (sukiWidget) sukiWidget.destroy();
      screenEl.remove();
    },
  };
}
