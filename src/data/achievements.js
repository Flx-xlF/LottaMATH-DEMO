/**
 * Achievements definitions & evaluation logic for LottaMATH
 */

export const ACHIEVEMENTS = [
  {
    id: 'first_step',
    name: 'Erste Schritte',
    description: 'Schliesse dein allererstes Level ab.',
    icon: '👣',
  },
  {
    id: 'perfect_level',
    name: 'Ohne Fehler!',
    description: 'Erreiche 3 Sterne in einem Level.',
    icon: '💎',
  },
  {
    id: 'streak_3',
    name: '3-Tage-Streak',
    description: 'Übe an 3 Tagen hintereinander.',
    icon: '🔥',
  },
  {
    id: 'streak_7',
    name: 'Wochenkriegerin',
    description: 'Eine ganze Woche jeden Tag Mathe geübt!',
    icon: '⚡',
  },
  {
    id: 'streak_14',
    name: 'Unaufhaltsam',
    description: '14 Tage am Stück — echte Meisterleistung!',
    icon: '🌟',
  },
  {
    id: 'world1_done',
    name: 'Terme-Grundlagen ✓',
    description: 'Alle Level und den Boss in Welt 1 abgeschlossen.',
    icon: '🌊',
  },
  {
    id: 'world2_done',
    name: 'Ausmultiplizierer ✓',
    description: 'Alle Level und den Boss in Welt 2 abgeschlossen.',
    icon: '🔥',
  },
  {
    id: 'world3_done',
    name: 'Ausklammer-Profi ✓',
    description: 'Alle Level und den Boss in Welt 3 abgeschlossen.',
    icon: '🌿',
  },
  {
    id: 'world4_done',
    name: 'Binom-Meisterin ✓',
    description: 'Alle Level und den Boss in Welt 4 abgeschlossen.',
    icon: '🌸',
  },
  {
    id: 'boss_slayer',
    name: 'Boss-Bezwingerin',
    description: 'Besiege deinen ersten Boss-Gegner.',
    icon: '🏆',
  },
  {
    id: 'all_bosses',
    name: 'Unbesiegbar',
    description: 'Besiege alle 4 Bosse und meistere die Terme!',
    icon: '👑',
  },
  {
    id: 'exam_ready',
    name: 'Prüfungsbereit',
    description: 'Schliesse den Prüfungsmodus zum ersten Mal ab.',
    icon: '🎯',
  },
  {
    id: 'exam_45',
    name: 'Genügend! 🎯',
    description: 'Erreiche mindestens Note 4.5 im Prüfungsmodus.',
    icon: '✅',
  },
  {
    id: 'exam_5',
    name: 'Sehr gut! 🚀',
    description: 'Erreiche mindestens Note 5.0 im Prüfungsmodus.',
    icon: '🚀',
  },
  {
    id: 'xp_500',
    name: '500 XP',
    description: 'Sammle 500 Erfahrungspunkte.',
    icon: '⭐',
  },
  {
    id: 'xp_2000',
    name: '2000 XP',
    description: 'Sammle 2000 Erfahrungspunkte — Mathe-Star!',
    icon: '💫',
  },
];

/**
 * Checks game state against all achievement rules and returns newly unlocked IDs
 * @param {Object} state - Current GameState
 * @returns {Array<Object>} Array of newly unlocked achievement definitions
 */
export function checkAchievements(state) {
  if (!state) return [];
  const currentUnlocked = new Set(state.achievements || []);
  const newlyUnlocked = [];

  const completedLevelsCount = Object.values(state.levels || {}).filter((l) => l.completed).length;
  const threeStarLevelsCount = Object.values(state.levels || {}).filter((l) => l.stars === 3).length;
  const streakDays = (state.streak && state.streak.current) || 0;
  const totalXP = state.totalXP || 0;

  const isWorld1Complete = state.levels && state.levels['1-5'] && state.levels['1-5'].completed;
  const isWorld2Complete = state.levels && state.levels['2-5'] && state.levels['2-5'].completed;
  const isWorld3Complete = state.levels && state.levels['3-5'] && state.levels['3-5'].completed;
  const isWorld4Complete = state.levels && state.levels['4-5'] && state.levels['4-5'].completed;

  const bossCount = [isWorld1Complete, isWorld2Complete, isWorld3Complete, isWorld4Complete].filter(Boolean).length;

  const examHistory = state.examHistory || [];
  const hasCompletedExam = examHistory.length > 0;
  const bestGrade = examHistory.length > 0 ? Math.max(...examHistory.map((e) => e.grade)) : 0;

  const conditions = {
    first_step: completedLevelsCount >= 1,
    perfect_level: threeStarLevelsCount >= 1,
    streak_3: streakDays >= 3,
    streak_7: streakDays >= 7,
    streak_14: streakDays >= 14,
    world1_done: isWorld1Complete,
    world2_done: isWorld2Complete,
    world3_done: isWorld3Complete,
    world4_done: isWorld4Complete,
    boss_slayer: bossCount >= 1,
    all_bosses: bossCount >= 4,
    exam_ready: hasCompletedExam,
    exam_45: bestGrade >= 4.5,
    exam_5: bestGrade >= 5.0,
    xp_500: totalXP >= 500,
    xp_2000: totalXP >= 2000,
  };

  for (const ach of ACHIEVEMENTS) {
    if (!currentUnlocked.has(ach.id) && conditions[ach.id]) {
      newlyUnlocked.push(ach);
    }
  }

  return newlyUnlocked;
}
