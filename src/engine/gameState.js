/**
 * Game State Manager for LottaMATH
 * Handles persistence (localStorage), XP calculation, streak tracking, level unlocking, and exam grading.
 */

import { checkAchievements } from '../data/achievements.js';
import { getTopicForWorld } from '../data/topics.js';

import { getActiveProfileId, getStateKey } from './profileManager.js';
import { debouncedPush, pullState, mergeStates } from './syncService.js';

/**
 * Returns the storage key for the currently active profile.
 * Active profile must be selected before accessing storage.
 */
function getStorageKey() {
  const profileId = getActiveProfileId();
  if (!profileId) {
    throw new Error('No active profile selected. Cannot determine storage key.');
  }
  return getStateKey(profileId);
}

export const XP_LEVELS = [
  { level: 1, minXP: 0, title: 'Anfänger:in' },
  { level: 2, minXP: 100, title: 'Entdecker:in' },
  { level: 3, minXP: 250, title: 'Terme-Kenner:in' },
  { level: 4, minXP: 500, title: 'Algebra-Talent' },
  { level: 5, minXP: 1000, title: 'Rechen-Meister:in' },
  { level: 6, minXP: 2000, title: 'Mathe-König:in' },
];

/**
 * Returns default initial state
 */
export function getDefaultState() {
  return {
    generation: 1,
    totalXP: 0,
    levels: {
      '1-1': { stars: 0, bestScore: 0, attempts: 0, completed: false },
    },
    streak: {
      current: 0,
      best: 0,
      lastActiveDate: null,
    },
    achievements: [],
    theme: 'dark',
    examHistory: [],
    seenIntros: [],
    mistakeVault: [],
    resolvedMistakes: [],
    mistakeTimestamps: {},
  };
}

/**
 * Checks if user has already seen the real-world introduction for a world
 * @param {Object} state 
 * @param {number|string} worldId 
 * @returns {boolean}
 */
export function hasSeenIntro(state, worldId) {
  return (state && state.seenIntros ? state.seenIntros : []).includes(String(worldId));
}

/**
 * Marks a real-world intro as seen and persists state
 * @param {Object} state 
 * @param {number|string} worldId 
 * @returns {Object} Updated state
 */
export function markIntroSeen(state, worldId) {
  const seen = [...((state && state.seenIntros) || [])];
  const id = String(worldId);
  if (!seen.includes(id)) {
    seen.push(id);
  }
  const newState = { ...state, seenIntros: seen };
  saveGameState(newState);
  return newState;
}

/**
 * Records an incorrectly answered question into the mistake vault
 * @param {Object} state 
 * @param {string} questionId 
 * @returns {Object} Updated state
 */
export function recordMistake(state, questionId) {
  if (!questionId || !state) return state;
  let currentVault = Array.isArray(state.mistakeVault) ? [...state.mistakeVault] : [];
  if (!currentVault.includes(questionId)) {
    currentVault.push(questionId);
  }
  // Cap mistake vault at max 100 entries
  if (currentVault.length > 100) {
    currentVault = currentVault.slice(currentVault.length - 100);
  }
  state.mistakeVault = currentVault;
  // If previously marked as resolved, un-resolve it so it resurfaces
  if (Array.isArray(state.resolvedMistakes)) {
    state.resolvedMistakes = state.resolvedMistakes.filter((id) => id !== questionId);
  }
  if (!state.mistakeTimestamps || typeof state.mistakeTimestamps !== 'object' || Array.isArray(state.mistakeTimestamps)) {
    state.mistakeTimestamps = {};
  }
  state.mistakeTimestamps[questionId] = Date.now();
  saveGameState(state);
  return state;
}

/**
 * Resolves/removes a mastered question from the mistake vault and marks it tombstoned
 * @param {Object} state 
 * @param {string} questionId 
 * @returns {Object} Updated state
 */
export function resolveMistake(state, questionId) {
  if (!questionId || !state) return state;
  const currentVault = Array.isArray(state.mistakeVault) ? [...state.mistakeVault] : [];
  state.mistakeVault = currentVault.filter((id) => id !== questionId);

  let currentResolved = Array.isArray(state.resolvedMistakes) ? [...state.resolvedMistakes] : [];
  if (!currentResolved.includes(questionId)) {
    currentResolved.push(questionId);
  }
  if (currentResolved.length > 200) {
    currentResolved = currentResolved.slice(currentResolved.length - 200);
  }
  state.resolvedMistakes = currentResolved;

  if (!state.mistakeTimestamps || typeof state.mistakeTimestamps !== 'object' || Array.isArray(state.mistakeTimestamps)) {
    state.mistakeTimestamps = {};
  }
  state.mistakeTimestamps[questionId] = Date.now();

  saveGameState(state);
  return state;
}

/**
 * Gets the number of open mistakes in the vault
 * @param {Object} state 
 * @returns {number}
 */
export function getMistakeCount(state) {
  return Array.isArray(state && state.mistakeVault) ? state.mistakeVault.length : 0;
}

/**
 * Loads game state from localStorage or initializes default
 * @returns {Object} GameState
 */
export function initGameState() {
  try {
    const saved = localStorage.getItem(getStorageKey());
    if (!saved) {
      const initial = getDefaultState();
      saveGameState(initial);
      return initial;
    }
    const parsed = JSON.parse(saved);
    // Ensure all necessary keys exist (schema migration safe)
    const state = {
      ...getDefaultState(),
      ...parsed,
      generation: Number(parsed.generation) || 1,
      levels: { ...getDefaultState().levels, ...(parsed.levels || {}) },
      streak: { ...getDefaultState().streak, ...(parsed.streak || {}) },
      achievements: parsed.achievements || [],
      examHistory: parsed.examHistory || [],
      mistakeVault: Array.isArray(parsed.mistakeVault) ? parsed.mistakeVault.slice(0, 100) : [],
      resolvedMistakes: Array.isArray(parsed.resolvedMistakes) ? parsed.resolvedMistakes.slice(0, 200) : [],
      mistakeTimestamps: (parsed.mistakeTimestamps && typeof parsed.mistakeTimestamps === 'object' && !Array.isArray(parsed.mistakeTimestamps))
        ? parsed.mistakeTimestamps
        : {},
    };
    return state;
  } catch (err) {
    console.error('Failed to load game state, initializing default:', err);
    return getDefaultState();
  }
}

/**
 * Persists game state to localStorage and queues debounced background sync
 * @param {Object} state 
 */
export function saveGameState(state) {
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(state));
    const profileId = getActiveProfileId();
    if (profileId) {
      debouncedPush(profileId, state);
    }
  } catch (err) {
    console.error('Failed to save game state to localStorage:', err);
  }
}

/**
 * Pulls latest state from sync server and merges with local state.
 * Called after profile selection to hydrate cross-device progress.
 * @returns {Promise<Object>} Merged game state
 */
export async function syncOnLoad() {
  const profileId = getActiveProfileId();
  if (!profileId) return initGameState();

  const localState = initGameState();

  try {
    const serverData = await pullState(profileId);
    if (serverData && serverData.state) {
      const merged = mergeStates(localState, serverData.state);
      saveGameState(merged);
      return merged;
    }
  } catch (err) {
    console.warn('Sync on load failed, using local state:', err);
  }

  return localState;
}

/**
 * Calculates current XP level details
 * @param {number} totalXP 
 * @returns {Object} { level, currentXP, nextLevelXP, progress, title }
 */
export function getXPLevel(totalXP = 0) {
  let currentLevelObj = XP_LEVELS[0];
  let nextLevelObj = XP_LEVELS[1];

  for (let i = XP_LEVELS.length - 1; i >= 0; i--) {
    if (totalXP >= XP_LEVELS[i].minXP) {
      currentLevelObj = XP_LEVELS[i];
      nextLevelObj = XP_LEVELS[i + 1] || null;
      break;
    }
  }

  const level = currentLevelObj.level;
  const title = currentLevelObj.title;

  if (!nextLevelObj) {
    return {
      level,
      title,
      currentXP: totalXP,
      nextLevelXP: totalXP,
      progress: 1.0,
      xpIntoCurrentLevel: totalXP - currentLevelObj.minXP,
      xpNeededForNext: 0,
    };
  }

  const range = nextLevelObj.minXP - currentLevelObj.minXP;
  const earnedInRange = totalXP - currentLevelObj.minXP;
  const progress = Math.min(Math.max(earnedInRange / range, 0), 1);

  return {
    level,
    title,
    currentXP: totalXP,
    nextLevelXP: nextLevelObj.minXP,
    progress,
    xpIntoCurrentLevel: earnedInRange,
    xpNeededForNext: nextLevelObj.minXP - totalXP,
  };
}

/**
 * Adds XP to state and returns level-up status
 * @param {Object} state 
 * @param {number} amount 
 * @returns {Object} { state, leveledUp, newLevel, newTitle }
 */
export function addXP(state, amount = 0) {
  if (amount <= 0) return { state, leveledUp: false, newLevel: getXPLevel(state.totalXP).level };

  const prevLevel = getXPLevel(state.totalXP).level;
  const updatedState = {
    ...state,
    totalXP: (state.totalXP || 0) + amount,
  };

  const newLevelInfo = getXPLevel(updatedState.totalXP);
  const leveledUp = newLevelInfo.level > prevLevel;

  saveGameState(updatedState);
  return {
    state: updatedState,
    leveledUp,
    newLevel: newLevelInfo.level,
    newTitle: newLevelInfo.title,
  };
}

/**
 * Records progress for a completed level attempt
 * @param {Object} state 
 * @param {string} levelId (e.g. '1-1')
 * @param {number} correctCount 
 * @param {number} totalQuestions 
 * @returns {Object} { state, starsEarned, newBest, newlyUnlockedAchievements }
 */
export function updateLevelProgress(state, levelId, correctCount, totalQuestions) {
  if (totalQuestions <= 0) return { state, starsEarned: 0, newBest: false, newlyUnlockedAchievements: [] };

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  let stars = 0;
  if (percentage >= 90) stars = 3;
  else if (percentage >= 70) stars = 2;
  else if (percentage >= 50) stars = 1;

  const currentProg = state.levels[levelId] || { stars: 0, bestScore: 0, attempts: 0, completed: false };
  const newBest = percentage > currentProg.bestScore;
  const updatedStars = Math.max(currentProg.stars, stars);
  const completed = currentProg.completed || stars >= 1;

  const updatedLevels = {
    ...state.levels,
    [levelId]: {
      stars: updatedStars,
      bestScore: Math.max(currentProg.bestScore, percentage),
      attempts: currentProg.attempts + 1,
      completed,
    },
  };

  let updatedState = {
    ...state,
    levels: updatedLevels,
  };

  const newlyUnlocked = checkAchievements(updatedState);
  if (newlyUnlocked.length > 0) {
    updatedState.achievements = [...(updatedState.achievements || []), ...newlyUnlocked.map((a) => a.id)];
  }

  saveGameState(updatedState);
  return {
    state: updatedState,
    starsEarned: stars,
    newBest,
    newlyUnlockedAchievements: newlyUnlocked,
  };
}

/**
 * Evaluates streak based on current date
 * @param {Object} state 
 * @returns {Object} Updated GameState
 */
export function updateStreak(state) {
  const today = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  const streak = { ...(state.streak || { current: 0, best: 0, lastActiveDate: null }) };

  if (!streak.lastActiveDate) {
    streak.current = 1;
    streak.best = 1;
    streak.lastActiveDate = today;
  } else if (streak.lastActiveDate === today) {
    // Same day — do nothing
  } else {
    const lastDate = new Date(streak.lastActiveDate);
    const currentDate = new Date(today);
    const diffTime = currentDate.getTime() - lastDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 3600 * 24));

    if (diffDays === 1) {
      // Consecutive day!
      streak.current += 1;
      streak.best = Math.max(streak.best, streak.current);
      streak.lastActiveDate = today;
    } else if (diffDays > 1) {
      // Streak broken
      streak.current = 1;
      streak.lastActiveDate = today;
    }
  }

  const updatedState = { ...state, streak };
  saveGameState(updatedState);
  return updatedState;
}

/**
 * Checks if a specific world is unlocked
 * World 1 is always unlocked. World N requires World N-1 Boss completed.
 * @param {Object} state 
 * @param {number} worldId 
 * @returns {boolean}
 */
export function isWorldUnlocked(state, worldId) {
  const wid = Number(worldId);
  if (wid === 1) return true;

  const topic = getTopicForWorld(wid);
  if (topic && topic.worldIds[0] === wid) {
    return true;
  }

  const prevBossId = `${wid - 1}-5`;
  return Boolean(state.levels && state.levels[prevBossId] && state.levels[prevBossId].completed);
}

/**
 * Checks if a specific level within a world is unlocked
 * Level X-1 is unlocked if World X is unlocked.
 * Level X-N (N > 1) requires Level X-(N-1) to have at least 1 star.
 * @param {Object} state 
 * @param {number} worldId 
 * @param {number} levelNum 
 * @returns {boolean}
 */
export function isLevelUnlocked(state, worldId, levelNum) {
  const wid = Number(worldId);
  const lnum = Number(levelNum);

  if (!isWorldUnlocked(state, wid)) return false;
  if (lnum === 1) return true;

  const prevLevelId = `${wid}-${lnum - 1}`;
  return Boolean(state.levels && state.levels[prevLevelId] && state.levels[prevLevelId].stars >= 1);
}

/**
 * Records an exam simulation result with Swiss grading scale
 * Grade formula: (score / 100) * 5 + 1, rounded to nearest 0.25 (1.0 to 6.0)
 * @param {Object} state 
 * @param {number} scorePercentage 
 * @param {number} durationSeconds 
 * @returns {Object} { state, grade, newlyUnlockedAchievements }
 */
export function addExamResult(state, scorePercentage, durationSeconds) {
  const rawGrade = (scorePercentage / 100) * 5 + 1;
  // Round to nearest 0.25
  const roundedGrade = Math.min(Math.max(Math.round(rawGrade * 4) / 4, 1.0), 6.0);

  const entry = {
    date: new Date().toISOString(),
    score: scorePercentage,
    grade: roundedGrade,
    duration: durationSeconds,
  };

  const examHistory = [entry, ...(state.examHistory || [])];
  let updatedState = {
    ...state,
    examHistory,
  };

  const newlyUnlocked = checkAchievements(updatedState);
  if (newlyUnlocked.length > 0) {
    updatedState.achievements = [...(updatedState.achievements || []), ...newlyUnlocked.map((a) => a.id)];
  }

  saveGameState(updatedState);
  return {
    state: updatedState,
    grade: roundedGrade,
    newlyUnlockedAchievements: newlyUnlocked,
  };
}

/**
 * Toggles theme between dark and light
 * @param {Object} state 
 * @returns {Object} Updated state
 */
export function toggleTheme(state) {
  const newTheme = state.theme === 'light' ? 'dark' : 'light';
  const updatedState = { ...state, theme: newTheme };
  document.documentElement.setAttribute('data-theme', newTheme);
  saveGameState(updatedState);
  return updatedState;
}

/**
 * Clears all progress (testing or reset)
 * Increments generation to ensure monotonic sync engines respect intentional resets
 * @returns {Object} Fresh initial state
 */
export function resetGameState() {
  const current = initGameState();
  const fresh = {
    ...getDefaultState(),
    generation: (Number(current.generation) || 1) + 1,
  };
  saveGameState(fresh);
  return fresh;
}
