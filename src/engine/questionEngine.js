/**
 * Question Selection & Validation Engine for LottaMATH
 * Handles dynamic question filtering, random sampling, algebraic expression normalization,
 * answer validation, and session scoring.
 */

import { WORLD1_QUESTIONS } from '../data/questions/world1.js';
import { WORLD2_QUESTIONS } from '../data/questions/world2.js';
import { WORLD3_QUESTIONS } from '../data/questions/world3.js';
import { WORLD4_QUESTIONS } from '../data/questions/world4.js';
import { WORLD5_QUESTIONS } from '../data/questions/world5.js';
import { WORLD6_QUESTIONS } from '../data/questions/world6.js';
import { WORLD7_QUESTIONS } from '../data/questions/world7.js';
import { WORLD8_QUESTIONS } from '../data/questions/world8.js';
import { EXAM_QUESTIONS_FLAECHEN, EXAM_QUESTIONS_TERME } from '../data/questions/examPool.js';
import { getLevel } from '../data/worlds.js';

const ALL_QUESTIONS_MAP = {
  1: WORLD1_QUESTIONS,
  2: WORLD2_QUESTIONS,
  3: WORLD3_QUESTIONS,
  4: WORLD4_QUESTIONS,
  5: WORLD5_QUESTIONS,
  6: WORLD6_QUESTIONS,
  7: WORLD7_QUESTIONS,
  8: WORLD8_QUESTIONS,
};

/**
 * Shuffles an array randomly using Fisher-Yates
 * @param {Array} arr 
 * @returns {Array} Shuffled copy
 */
export function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Retrieves and prepares questions for a specific level session
 * @param {number} worldId 
 * @param {number} levelNum 
 * @param {number} requestedCount 
 * @returns {Array<Object>} Questions ready for quiz
 */
export function getQuestionsForLevel(worldId, levelNum, requestedCount) {
  const wid = Number(worldId);
  const lnum = Number(levelNum);
  const worldBank = ALL_QUESTIONS_MAP[wid] || [];
  const levelDef = getLevel(wid, lnum);

  const levelId = `${wid}-${lnum}`;
  let pool = worldBank.filter((q) => q.levelId === levelId);

  // If boss level (level 5), allow drawing from all levels of this world
  if (levelDef && levelDef.isBoss) {
    pool = worldBank;
  }

  // Filter by allowed types if specified
  if (levelDef && levelDef.allowedTypes && !levelDef.allowedTypes.includes('all')) {
    const typeFiltered = pool.filter((q) => levelDef.allowedTypes.includes(q.type));
    if (typeFiltered.length >= (requestedCount || levelDef.questionsPerSession)) {
      pool = typeFiltered;
    }
  }

  const count = requestedCount || (levelDef ? levelDef.questionsPerSession : 5);
  const shuffledPool = shuffle(pool);
  const selected = shuffledPool.slice(0, Math.min(count, shuffledPool.length));

  // For multiple-choice questions, shuffle options while preserving the correct one
  // For drag-group questions, shuffle items so they are not rendered in pre-sorted order
  return selected.map((q) => {
    if (q.type === 'multiple-choice' && q.interaction && Array.isArray(q.interaction.options)) {
      return {
        ...q,
        interaction: {
          ...q.interaction,
          options: shuffle(q.interaction.options),
        },
      };
    }
    if (q.type === 'drag-group' && q.interaction && Array.isArray(q.interaction.items)) {
      return {
        ...q,
        interaction: {
          ...q.interaction,
          items: shuffle(q.interaction.items),
        },
      };
    }
    return q;
  });
}

/**
 * Selects balanced questions across worlds for Exam Simulation Mode
 * @param {number} count (default 20)
 * @param {string|null} topicId (e.g. 'terme', 'flaechen', or null for all)
 * @returns {Array<Object>}
 */
export function getExamQuestions(count = 20, topicId = null) {
  let pool = [];

  if (topicId === 'terme') {
    pool = [...EXAM_QUESTIONS_TERME];
  } else if (topicId === 'flaechen') {
    pool = [...EXAM_QUESTIONS_FLAECHEN];
  } else {
    // Topic 'all': Balanced 50/50 mix of Terme and Flächen
    const half = Math.floor(count / 2);
    const shuffledTerme = shuffle(EXAM_QUESTIONS_TERME).slice(0, half);
    const shuffledFlaechen = shuffle(EXAM_QUESTIONS_FLAECHEN).slice(0, count - half);
    pool = [...shuffledTerme, ...shuffledFlaechen];
  }

  const selected = shuffle(pool).slice(0, count);

  return selected.map((q) => {
    if (q.type === 'multiple-choice' && q.interaction && Array.isArray(q.interaction.options)) {
      return {
        ...q,
        interaction: {
          ...q.interaction,
          options: shuffle(q.interaction.options),
        },
      };
    }
    if (q.type === 'drag-group' && q.interaction && Array.isArray(q.interaction.items)) {
      return {
        ...q,
        interaction: {
          ...q.interaction,
          items: shuffle(q.interaction.items),
        },
      };
    }
    return q;
  });
}

/**
 * Finds a question by its unique ID across all worlds and the exam pool
 * @param {string} questionId 
 * @returns {Object|null}
 */
export function getQuestionById(questionId) {
  if (questionId && questionId.startsWith('exam_')) {
    const foundExam = [...EXAM_QUESTIONS_FLAECHEN, ...EXAM_QUESTIONS_TERME].find((q) => q.id === questionId);
    if (foundExam) return foundExam;
  }

  for (const wid of Object.keys(ALL_QUESTIONS_MAP)) {
    const found = (ALL_QUESTIONS_MAP[wid] || []).find((q) => q.id === questionId);
    if (found) return found;
  }
  return null;
}

/**
 * Retrieves a list of questions by an array of question IDs (e.g. for mistake vault)
 * @param {Array<string>} ids 
 * @returns {Array<Object>}
 */
export function getQuestionsByIds(ids = []) {
  const list = [];
  ids.forEach((id) => {
    const q = getQuestionById(id);
    if (q) {
      if (q.type === 'multiple-choice' && q.interaction && Array.isArray(q.interaction.options)) {
        list.push({
          ...q,
          interaction: {
            ...q.interaction,
            options: shuffle(q.interaction.options),
          },
        });
      } else {
        list.push(q);
      }
    }
  });
  return list;
}

/**
 * Normalizes an algebraic expression for robust string matching
 * Examples: "3 + 2x" -> "2x+3", "x^2 + 4x" -> "x²+4x", "6*(x+2)" -> "6(x+2)"
 * @param {string} expr 
 * @returns {string}
 */
export function normalizeExpression(expr) {
  if (typeof expr !== 'string') return '';

  let s = expr
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '') // remove all whitespace
    .replace(/(\d+),(\d+)/g, '$1.$2') // normalize decimal comma to dot (e.g. 0,8 -> 0.8)
    .replace(/[·*×]/g, '') // strip multiplication signs for standard algebraic terms (e.g. 3*x -> 3x)
    .replace(/\^2/g, '²') // standardize powers
    .replace(/\^3/g, '³')
    .replace(/[−–—]/g, '-'); // standardize unicode minus

  // If simple sum/difference of terms without parentheses:
  if (!s.includes('(') && !s.includes(')')) {
    const formatted = (s.startsWith('+') || s.startsWith('-') ? s : '+' + s);
    const parts = formatted.match(/[+-][^+-]+/g);
    if (parts && parts.length > 1) {
      parts.sort((a, b) => {
        const varA = a.replace(/^[+-]\d*/, '');
        const varB = b.replace(/^[+-]\d*/, '');
        const isNumA = varA === '';
        const isNumB = varB === '';
        if (isNumA && !isNumB) return 1;
        if (!isNumA && isNumB) return -1;
        return a.localeCompare(b);
      });
      let result = parts.join('');
      if (result.startsWith('+')) result = result.substring(1);
      return result;
    }
  }

  return s;
}

/**
 * Validates a user's answer against a question
 * @param {Object} question 
 * @param {*} userAnswer 
 * @returns {Object} { correct: boolean, feedback: string }
 */
export function validateAnswer(question, userAnswer) {
  if (!question || userAnswer === undefined || userAnswer === null) {
    return { correct: false, feedback: 'Keine Antwort eingegeben.' };
  }

  // 1. Multiple Choice
  if (question.type === 'multiple-choice') {
    const isCorrect = String(userAnswer).trim() === String(question.correctAnswer).trim();
    return {
      correct: isCorrect,
      feedback: isCorrect ? 'Richtig! 🎉' : 'Nicht ganz richtig.',
    };
  }

  // 2. Fill-in (Math Expressions)
  if (question.type === 'fill-in') {
    const rawUser = String(userAnswer).trim();
    const normUser = normalizeExpression(rawUser);
    const normCorrect = normalizeExpression(question.correctAnswer);

    // Direct match against correctAnswer
    if (normUser === normCorrect) {
      return { correct: true, feedback: 'Perfekt gelöst! ⭐' };
    }

    // Check all accepted alternate forms
    const accepted = (question.acceptedAnswers || []).map(normalizeExpression);
    if (accepted.includes(normUser)) {
      return { correct: true, feedback: 'Richtig! Ausgezeichnet! ⭐' };
    }

    return {
      correct: false,
      feedback: `Nicht ganz. Die richtige Antwort ist: ${question.correctAnswer}`,
    };
  }

  // 3. Drag Group
  if (question.type === 'drag-group') {
    // userAnswer format: { [groupId]: string[] }
    const expected = question.correctAnswer || {};
    let allGroupsMatch = true;

    for (const [groupId, expectedItems] of Object.entries(expected)) {
      const userItems = (userAnswer[groupId] || []).map((s) => String(s).trim());
      const expNorm = expectedItems.map((s) => String(s).trim()).sort();
      const userNorm = [...userItems].sort();

      if (expNorm.length !== userNorm.length || !expNorm.every((val, idx) => val === userNorm[idx])) {
        allGroupsMatch = false;
        break;
      }
    }

    return {
      correct: allGroupsMatch,
      feedback: allGroupsMatch ? 'Alle Gruppen perfekt zugeordnet! 🎯' : 'Einige Elemente gehören in andere Gruppen.',
    };
  }

  // 4. Drag Order
  if (question.type === 'drag-order') {
    // userAnswer format: string[]
    const expected = question.correctAnswer || [];
    const isCorrect =
      Array.isArray(userAnswer) &&
      userAnswer.length === expected.length &&
      userAnswer.every((item, idx) => String(item).trim() === String(expected[idx]).trim());

    return {
      correct: isCorrect,
      feedback: isCorrect ? 'Reihenfolge genau richtig! 🚀' : 'Die Reihenfolge stimmt noch nicht ganz.',
    };
  }

  // 5. Step Builder
  if (question.type === 'step-builder') {
    // Validate final answer of step builder
    const normUser = normalizeExpression(String(userAnswer));
    const normCorrect = normalizeExpression(question.correctAnswer);
    const accepted = (question.acceptedAnswers || []).map(normalizeExpression);

    const isCorrect = normUser === normCorrect || accepted.includes(normUser);
    return {
      correct: isCorrect,
      feedback: isCorrect ? 'Schritt für Schritt gemeistert! 💎' : `Richtiges Endergebnis: ${question.correctAnswer}`,
    };
  }

  return { correct: false, feedback: 'Unbekannter Fragetyp.' };
}

/**
 * Scores a completed session
 * @param {Array<Object>} results - Array of { correct: boolean, hintsUsed: number, timeSpent: number }
 * @returns {Object} { total, correctCount, percentage, xpEarned, allCorrect }
 */
export function scoreSession(results = []) {
  const total = results.length;
  if (total === 0) return { total: 0, correctCount: 0, percentage: 0, xpEarned: 0, allCorrect: false };

  let correctCount = 0;
  let xpEarned = 0;

  for (const r of results) {
    if (r.correct) {
      correctCount += 1;
      // 10 XP without hint, 5 XP with hint
      const xp = (r.hintsUsed || 0) > 0 ? 5 : 10;
      xpEarned += xp;
    }
  }

  const percentage = Math.round((correctCount / total) * 100);
  const allCorrect = correctCount === total;

  return {
    total,
    correctCount,
    percentage,
    xpEarned,
    allCorrect,
  };
}
