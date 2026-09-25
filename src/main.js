/**
 * LottaMATH — Main Application Controller & Router
 * Manages hash-based routing, screen lifecycle, game state updates, PWA registration,
 * Classroom Password Gate, and Multi-User Profiles.
 */

import './index.css';
import 'katex/dist/katex.min.css';

import {
  initGameState,
  updateStreak,
  toggleTheme,
  updateLevelProgress,
  addXP,
  saveGameState,
  hasSeenIntro,
  markIntroSeen,
  syncOnLoad,
} from './engine/gameState.js';

import { getQuestionsForLevel, getQuestionsByIds, scoreSession } from './engine/questionEngine.js';
import { getLevel, getWorld } from './data/worlds.js';

import { renderAuthGate } from './components/authGate.js';
import { renderProfilePicker } from './components/profilePicker.js';
import {
  cleanupLegacyStorage,
  setActiveProfile,
  getActiveProfile,
} from './engine/profileManager.js';
import {
  onSyncStatusChange,
  registerProfile as registerSyncProfile,
  hasSyncToken,
  processPendingDeletes,
} from './engine/syncService.js';

import { renderDashboard } from './screens/dashboard.js';
import { renderWorldIntro } from './screens/worldIntro.js';
import { renderLevelSelect } from './screens/levelSelect.js';
import { renderTutorial } from './screens/tutorial.js';
import { renderQuiz } from './screens/quiz.js';
import { renderResults } from './screens/results.js';
import { renderExam } from './screens/exam.js';
import { registerServiceWorker, triggerUpdateIfAvailable } from './engine/updateManager.js';

import {
  verifySubscription,
  isPremium,
  getCheckoutUrl,
  getPortalUrl,
  handleSubscriptionCallback,
  setLicenseKey,
} from './engine/subscriptionManager.js';
import { renderUpgrade } from './screens/upgrade.js';
import { renderSubscriptionSuccess } from './screens/subscriptionSuccess.js';

// Classroom Password Gate bypassed in Demo Mode

// Capture Chromium beforeinstallprompt event for custom install UI
window.deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent browser's default mini-infobar on mobile
  e.preventDefault();
  // Stash event for trigger via custom UI
  window.deferredPrompt = e;
  // Dispatch custom event in case dashboard or UI wants to react immediately
  window.dispatchEvent(new CustomEvent('pwa-install-available'));
});

window.addEventListener('appinstalled', () => {
  window.deferredPrompt = null;
  console.log('LottaMATH PWA was successfully installed');
});

// PWA Installation Reminder cooldown (3 days in milliseconds)
const PWA_REMINDER_COOLDOWN_MS = 3 * 24 * 60 * 60 * 1000;

/**
 * Determines whether the PWA install reminder should be shown.
 * Checks if running outside standalone mode and respects the 3-day cooldown.
 * @returns {boolean}
 */
function shouldShowPwaReminder() {
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches
    || window.navigator.standalone === true;
  if (isStandalone) return false;

  try {
    const lastDismissed = localStorage.getItem('lottamath_pwa_last_dismissed');
    if (!lastDismissed) return true;
    const dismissedTime = parseInt(lastDismissed, 10);
    if (isNaN(dismissedTime)) return true;
    return Date.now() - dismissedTime > PWA_REMINDER_COOLDOWN_MS;
  } catch {
    return false;
  }
}

/**
 * Renders the cross-browser PWA installation reminder banner.
 * Supports native install prompt on Chromium/Android, manual instructions on iOS/Safari,
 * and a bookmark/install suggestion fallback for other browsers.
 * @param {HTMLElement} container
 * @returns {HTMLElement|null}
 */
function renderPwaReminderBanner(container) {
  if (!shouldShowPwaReminder()) return null;

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const banner = document.createElement('div');
  banner.className = 'pwa-hint-banner glass-card';
  banner.id = 'pwa-reminder-banner';

  const renderContent = () => {
    if (window.deferredPrompt) {
      banner.innerHTML = `
        <span class="pwa-hint-banner__icon">📲</span>
        <span class="pwa-hint-banner__text">App installieren für Vollbild & automatischen Schutz vor Datenverlust:</span>
        <button type="button" class="btn btn--primary pwa-hint-banner__install-btn" id="pwa-install-btn">Installieren 🚀</button>
        <button type="button" class="pwa-hint-banner__dismiss-btn" title="Später erinnern" id="pwa-hint-dismiss">✕</button>
      `;

      const installBtn = banner.querySelector('#pwa-install-btn');
      if (installBtn) {
        installBtn.addEventListener('click', async () => {
          if (!window.deferredPrompt) return;
          try {
            await window.deferredPrompt.prompt();
            const { outcome } = await window.deferredPrompt.userChoice;
            if (outcome === 'accepted') {
              window.deferredPrompt = null;
              banner.remove();
            } else {
              banner.remove();
              try {
                localStorage.setItem('lottamath_pwa_last_dismissed', String(Date.now()));
              } catch {}
            }
          } catch (err) {
            console.warn('PWA install prompt error:', err);
          }
        });
      }
    } else if (isSafari) {
      const isIOS = /iPad|iPhone|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      if (isIOS) {
        banner.innerHTML = `
          <span class="pwa-hint-banner__icon">📲</span>
          <span class="pwa-hint-banner__text">Speichere die App: Tippe auf <strong>Teilen ⎋</strong> und dann auf <strong>«Zum Home-Bildschirm»</strong>.</span>
          <button type="button" class="pwa-hint-banner__dismiss-btn" title="Später erinnern" id="pwa-hint-dismiss">✕</button>
        `;
      } else {
        banner.innerHTML = `
          <span class="pwa-hint-banner__icon">💻</span>
          <span class="pwa-hint-banner__text">Speichere die App: Klicke auf <strong>Teilen ⎋</strong> und dann auf <strong>«Zum Dock hinzufügen»</strong>.</span>
          <button type="button" class="pwa-hint-banner__dismiss-btn" title="Später erinnern" id="pwa-hint-dismiss">✕</button>
        `;
      }
    } else {
      banner.innerHTML = `
        <span class="pwa-hint-banner__icon">📌</span>
        <span class="pwa-hint-banner__text">Tipp: Installiere die App oder setze ein Lesezeichen, um deinen Fortschritt dauerhaft zu sichern.</span>
        <button type="button" class="pwa-hint-banner__dismiss-btn" title="Später erinnern" id="pwa-hint-dismiss">✕</button>
      `;
    }

    const dismissBtn = banner.querySelector('#pwa-hint-dismiss');
    if (dismissBtn) {
      dismissBtn.addEventListener('click', () => {
        banner.remove();
        try {
          localStorage.setItem('lottamath_pwa_last_dismissed', String(Date.now()));
        } catch {}
      });
    }
  };

  renderContent();
  container.appendChild(banner);

  // If deferredPrompt arrives after initial render, dynamically upgrade banner to show Install button
  const onInstallAvailable = () => {
    if (document.body.contains(banner)) {
      renderContent();
    }
  };
  window.addEventListener('pwa-install-available', onInstallAvailable, { once: true });

  return banner;
}

class LottaMathApp {
  constructor() {
    this.appContainer = document.getElementById('app');
    this.gameState = null;
    this.activeProfile = null;
    this.subscriptionStatus = null;
    this.currentScreen = null;
    this.lastSessionResult = null;
    this.lastLevelInfo = null;
    this._hashHandler = null;
    this._syncUnsubscribe = null;

    this.init();
  }

  init() {
    // 1. Clean up any legacy single-user keys so profiles start clean
    cleanupLegacyStorage();

    // 2. Process any pending server profile deletions (GDPR compliance)
    processPendingDeletes().catch(() => {});
    window.addEventListener('online', () => processPendingDeletes().catch(() => {}));

    // 3. Register Service Worker for Offline / PWA capability
    registerServiceWorker();

    // 4. In Demo Mode, launch directly to Profile Picker
    this.showProfilePicker();
  }

  showProfilePicker() {
    this.teardownCurrentScreen();
    this.appContainer.innerHTML = '';
    this.activeProfile = null;
    this.gameState = null;

    if (this._hashHandler) {
      window.removeEventListener('hashchange', this._hashHandler);
      this._hashHandler = null;
    }
    window.location.hash = '#';

    renderProfilePicker(this.appContainer, {
      onProfileSelected: async (profile) => {
        setActiveProfile(profile.id);
        this.activeProfile = profile;

        // Initialize game state from the selected profile's namespace
        this.gameState = initGameState();

        // Pull and merge cross-device progress from cyon.ch sync backend
        try {
          this.gameState = await syncOnLoad();
        } catch (e) {
          console.warn('Sync on load failed, falling back to local state:', e);
        }

        this.gameState = updateStreak(this.gameState);
        document.documentElement.setAttribute('data-theme', this.gameState.theme || 'dark');

        // Ensure profile is registered with sync server if not already
        if (!hasSyncToken(profile.id)) {
          registerSyncProfile(profile.id, profile.nickname, profile.avatar).catch(() => {});
        }

        // Check subscription status asynchronously
        try {
          this.subscriptionStatus = await verifySubscription();
        } catch (e) {
          console.warn('Subscription check error:', e);
        }

        this.setupRouter();
      },
    });
  }

  setupRouter() {
    if (this._hashHandler) {
      window.removeEventListener('hashchange', this._hashHandler);
    }
    this._hashHandler = () => this.handleRoute();
    window.addEventListener('hashchange', this._hashHandler);

    // Initial route resolve
    if (!window.location.hash || window.location.hash === '#') {
      window.location.hash = '#/';
    } else {
      this.handleRoute();
    }
  }

  navigate(route) {
    window.location.hash = route;
  }

  teardownCurrentScreen() {
    if (typeof this._syncUnsubscribe === 'function') {
      this._syncUnsubscribe();
      this._syncUnsubscribe = null;
    }

    if (this.currentScreen && typeof this.currentScreen.destroy === 'function') {
      try {
        this.currentScreen.destroy();
      } catch (err) {
        console.warn('Error destroying screen:', err);
      }
      this.currentScreen = null;
    }
    this.appContainer.innerHTML = '';
  }

  async handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const cleanHash = hash.split('?')[0]; // strip query part for route matching
    const parts = cleanHash.split('/').filter(Boolean);
    const route = parts[0] || '';

    this.teardownCurrentScreen();

    // Route: #/upgrade
    if (route === 'upgrade') {
      this.currentScreen = renderUpgrade(this.appContainer, {
        onSelectPlan: async (plan) => {
          try {
            const url = await getCheckoutUrl(plan);
            window.location.href = url;
          } catch (err) {
            alert('Bezahlvorgang konnte nicht gestartet werden: ' + err.message);
          }
        },
        onBack: () => this.navigate('#/'),
      });
      return;
    }

    // Route: #/subscription-success
    if (route === 'subscription-success') {
      await handleSubscriptionCallback();
      this.subscriptionStatus = await verifySubscription(true);

      this.currentScreen = renderSubscriptionSuccess(this.appContainer, {
        onContinue: () => this.navigate('#/'),
      });
      return;
    }

    // Route: #/ (Dashboard)
    if (route === '' || route === 'dashboard') {
      // Trigger any waiting background updates when user returns to Dashboard
      triggerUpdateIfAvailable();

      this.currentScreen = renderDashboard(this.appContainer, this.gameState, {
        activeProfile: this.activeProfile,
        subscriptionStatus: this.subscriptionStatus,
        onWorldSelect: (worldId) => this.navigate(`#/world/${worldId}`),
        onExamMode: () => this.navigate('#/exam'),
        onVaultMode: () => this.navigate('#/vault'),
        onUpgrade: () => this.navigate('#/upgrade'),
        onManageSubscription: async () => {
          try {
            const url = await getPortalUrl();
            window.open(url, '_blank');
          } catch (err) {
            alert('Kundenportal konnte nicht geöffnet werden: ' + err.message);
          }
        },
        onThemeToggle: () => {
          this.gameState = toggleTheme(this.gameState);
        },
        onSwitchProfile: () => {
          this.showProfilePicker();
        },
      });

      // Mount reactive sync status indicator into header
      const actionsContainer = this.appContainer.querySelector('.dashboard__actions');
      if (actionsContainer) {
        const indicator = document.createElement('div');
        indicator.className = 'sync-indicator';
        indicator.id = 'sync-status-indicator';
        indicator.setAttribute('role', 'status');

        const updateIndicatorUI = (status) => {
          indicator.className = 'sync-indicator';
          if (status === 'synced') {
            indicator.classList.add('sync-indicator--synced');
            indicator.innerHTML = '✅';
            indicator.title = 'Fortschritt synchronisiert (Cyon Cloud)';
          } else if (status === 'syncing') {
            indicator.classList.add('sync-indicator--syncing');
            indicator.innerHTML = '<span>🔄</span>';
            indicator.title = 'Synchronisiere mit Cyon Cloud...';
          } else if (status === 'offline') {
            indicator.classList.add('sync-indicator--offline');
            indicator.innerHTML = '📴';
            indicator.title = 'Offline-Modus — Fortschritt wird lokal gespeichert und später synchronisiert';
          } else if (status === 'unregistered') {
            indicator.classList.add('sync-indicator--error');
            indicator.innerHTML = '⚠️';
            indicator.title = 'Profil noch nicht registriert — Sync nicht aktiv. Internetverbindung prüfen.';
          } else if (status === 'error') {
            indicator.classList.add('sync-indicator--error');
            indicator.innerHTML = '⚠️';
            indicator.title = 'Sync-Fehler — bitte prüfe deine Verbindung';
          } else {
            indicator.innerHTML = '☁️';
            indicator.title = 'Demo-Modus — Fortschritt wird lokal im Browser gesichert';
          }
        };

        const profileBtn = actionsContainer.querySelector('#profile-menu-btn') || actionsContainer.querySelector('#profile-switch-btn');
        if (profileBtn) {
          actionsContainer.insertBefore(indicator, profileBtn);
        } else {
          actionsContainer.appendChild(indicator);
        }

        this._syncUnsubscribe = onSyncStatusChange(updateIndicatorUI);
      }

      // PWA installation reminder with cross-browser support & 3-day cooldown
      renderPwaReminderBanner(this.appContainer);

      return;
    }

    // Route: #/vault (Fehler-Schmiede / Mistake Vault Practice)
    if (route === 'vault') {
      const mistakeIds = (this.gameState && this.gameState.mistakeVault) || [];
      const questions = getQuestionsByIds(mistakeIds);

      if (questions.length === 0) {
        this.navigate('#/');
        return;
      }

      this.currentScreen = renderQuiz(
        this.appContainer,
        {
          gameState: this.gameState,
          questions,
          worldId: 1,
          levelId: 'vault',
          isBoss: false,
          timeLimit: 0,
          playerName: this.activeProfile ? this.activeProfile.nickname : 'du',
        },
        {
          onComplete: (sessionData) => {
            const scored = scoreSession(sessionData.answers);
            const xpBonus = sessionData.totalCorrect * 15;
            const xpResult = addXP(this.gameState, scored.xpEarned + xpBonus);
            this.gameState = xpResult.state;

            this.lastSessionResult = {
              ...sessionData,
              xpEarned: scored.xpEarned + xpBonus,
              starsEarned: sessionData.percentage >= 80 ? 3 : (sessionData.percentage >= 50 ? 2 : 1),
              isNewUnlock: false,
            };

            this.lastLevelInfo = {
              worldId: 'vault',
              levelId: 'vault',
              levelNum: 1,
              levelDef: { name: 'Fehler-Schmiede', icon: '🛠️' },
            };

            this.navigate('#/results');
          },
          onQuit: () => this.navigate('#/'),
        }
      );
      return;
    }

    // Route: #/world-intro/:id (Replay Core Principles & Visual Intro)
    if (route === 'world-intro' && parts[1]) {
      const worldId = Number(parts[1]);
      const world = getWorld(worldId);
      if (world && world.realWorldIntro) {
        this.currentScreen = renderWorldIntro(this.appContainer, world, {
          playerName: this.activeProfile ? this.activeProfile.nickname : 'du',
          onContinue: () => {
            this.gameState = markIntroSeen(this.gameState, worldId);
            this.navigate(`#/world/${worldId}`);
          },
          onBack: () => {
            this.navigate(`#/world/${worldId}`);
          },
        });
        return;
      }
      this.navigate(`#/world/${worldId}`);
      return;
    }

    // Route: #/world/:id (Level Select or World Intro)
    if (route === 'world' && parts[1]) {
      const worldId = Number(parts[1]);
      const world = getWorld(worldId);

      // Show real-world intro on first visit to this world
      if (world && world.realWorldIntro && !hasSeenIntro(this.gameState, worldId)) {
        this.currentScreen = renderWorldIntro(this.appContainer, world, {
          playerName: this.activeProfile ? this.activeProfile.nickname : 'du',
          onContinue: () => {
            this.gameState = markIntroSeen(this.gameState, worldId);
            this.handleRoute(); // Re-render to show Level Select
          },
        });
        return;
      }

      this.currentScreen = renderLevelSelect(this.appContainer, worldId, this.gameState, {
        subscriptionStatus: this.subscriptionStatus,
        onUpgrade: () => this.navigate('#/upgrade'),
        onReplayIntro: () => this.navigate(`#/world-intro/${worldId}`),
        onLevelSelect: (levelId, levelDef) => {
          // If first attempt, show tutorial; otherwise jump into quiz
          const attempts = (this.gameState.levels && this.gameState.levels[levelId] && this.gameState.levels[levelId].attempts) || 0;
          if (attempts === 0 && !levelDef.isBoss) {
            this.navigate(`#/tutorial/${worldId}/${levelId}`);
          } else {
            this.navigate(`#/quiz/${worldId}/${levelId}`);
          }
        },
        onBack: () => this.navigate('#/'),
      });
      return;
    }

    // Route: #/tutorial/:wid/:lid
    if (route === 'tutorial' && parts[1] && parts[2]) {
      const worldId = Number(parts[1]);
      const levelId = parts[2];
      this.currentScreen = renderTutorial(this.appContainer, levelId, {
        onStart: () => this.navigate(`#/quiz/${worldId}/${levelId}`),
        onSkip: () => this.navigate(`#/quiz/${worldId}/${levelId}`),
      });
      return;
    }

    // Route: #/quiz/:wid/:lid
    if (route === 'quiz' && parts[1] && parts[2]) {
      const worldId = Number(parts[1]);
      const levelId = parts[2];
      const levelNum = Number(levelId.split('-')[1]) || 1;
      const levelDef = getLevel(worldId, levelNum);

      const questions = getQuestionsForLevel(worldId, levelNum, levelDef ? levelDef.questionsPerSession : 5);

      this.currentScreen = renderQuiz(
        this.appContainer,
        {
          gameState: this.gameState,
          questions,
          worldId,
          levelId,
          isBoss: Boolean(levelDef && levelDef.isBoss),
          timeLimit: levelDef ? levelDef.timeLimit : 0,
          playerName: this.activeProfile ? this.activeProfile.nickname : 'du',
        },
        {
          onComplete: (sessionData) => {
            // Process results through game engine
            const scored = scoreSession(sessionData.answers);
            const progResult = updateLevelProgress(
              this.gameState,
              levelId,
              sessionData.totalCorrect,
              sessionData.totalQuestions
            );
            this.gameState = progResult.state;

            // Add XP
            const xpResult = addXP(this.gameState, scored.xpEarned);
            this.gameState = xpResult.state;

            this.lastSessionResult = {
              ...sessionData,
              xpEarned: scored.xpEarned,
              starsEarned: progResult.starsEarned,
              newBest: progResult.newBest,
              newlyUnlockedAchievements: progResult.newlyUnlockedAchievements,
              leveledUp: xpResult.leveledUp,
            };
            this.lastLevelInfo = { worldId, levelId, levelNum, levelDef };

            this.navigate('#/results');
          },
          onQuit: () => {
            this.navigate(`#/world/${worldId}`);
          },
        }
      );
      return;
    }

    // Route: #/results
    if (route === 'results' && this.lastSessionResult) {
      this.currentScreen = renderResults(
        this.appContainer,
        { ...this.lastSessionResult, playerName: this.activeProfile ? this.activeProfile.nickname : 'du' },
        this.lastLevelInfo,
        {
          onRetry: () => {
            if (this.lastLevelInfo && this.lastLevelInfo.worldId === 'vault') {
              this.navigate('#/vault');
            } else if (this.lastLevelInfo) {
              this.navigate(`#/quiz/${this.lastLevelInfo.worldId}/${this.lastLevelInfo.levelId}`);
            } else {
              this.navigate('#/');
            }
          },
          onNext: () => {
            if (this.lastLevelInfo && this.lastLevelInfo.worldId === 'vault') {
              this.navigate('#/');
              return;
            }
            if (this.lastLevelInfo) {
              const nextLevelNum = this.lastLevelInfo.levelNum + 1;
              if (nextLevelNum <= 5) {
                const nextLevelId = `${this.lastLevelInfo.worldId}-${nextLevelNum}`;
                this.navigate(`#/quiz/${this.lastLevelInfo.worldId}/${nextLevelId}`);
                return;
              }
            }
            this.navigate('#/');
          },
          onHome: () => this.navigate('#/'),
        }
      );
      return;
    }

    // Route: #/exam (Prüfungsmodus)
    if (route === 'exam') {
      this.currentScreen = renderExam(this.appContainer, this.gameState, {
        onComplete: (examResult) => {
          this.gameState = examResult && examResult.state ? { ...examResult.state } : this.gameState;
          saveGameState(this.gameState);
        },
        onQuit: () => this.navigate('#/'),
      });
      return;
    }

    // Fallback: Dashboard
    this.navigate('#/');
  }
}

// Bootstrap Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  new LottaMathApp();
});
