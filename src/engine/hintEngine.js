/**
 * Hint & Explanation Engine for LottaMATH
 * Provides progressive hints (Tipp 1 -> Tipp 2 -> Lösung), common mistake callouts,
 * and solution breakdown generators.
 */

/**
 * Returns a progressive hint for a question
 * @param {Object} question 
 * @param {number} hintIndex (0, 1, or 2)
 * @returns {Object} { text: string, hintIndex: number, isLastHint: boolean, isSolution: boolean }
 */
export function getHint(question, hintIndex = 0) {
  if (!question || !Array.isArray(question.hints) || question.hints.length === 0) {
    return {
      text: 'Kein Tipp für diese Aufgabe verfügbar.',
      hintIndex: 0,
      isLastHint: true,
      isSolution: false,
    };
  }

  const clampedIndex = Math.min(Math.max(Number(hintIndex) || 0, 0), question.hints.length - 1);
  const rawHint = question.hints[clampedIndex];
  const text = typeof rawHint === 'string' ? rawHint : (rawHint.text || '');
  const visual = (typeof rawHint === 'object' && rawHint.visual) ? rawHint.visual : null;
  const isLastHint = clampedIndex >= question.hints.length - 1;
  const isSolution = clampedIndex === question.hints.length - 1;

  return {
    text,
    visual,
    hintIndex: clampedIndex,
    isLastHint,
    isSolution,
  };
}

/**
 * Returns a friendly explanation of the typical pitfall for this problem
 * @param {Object} question 
 * @returns {string|null}
 */
export function getCommonMistake(question) {
  if (!question || !question.commonMistake) return null;
  return `💡 Häufige Falle: ${question.commonMistake}`;
}

/**
 * Generates formatted step-by-step solution steps
 * @param {Object} question 
 * @returns {Array<string>}
 */
export function generateSolutionSteps(question) {
  if (!question) return [];

  // If question has step-builder interaction, return its built-in steps
  if (question.type === 'step-builder' && question.interaction && Array.isArray(question.interaction.steps)) {
    return question.interaction.steps.map((s, idx) => `Schritt ${idx + 1}: ${s.prompt} → ${s.correctAnswer}`);
  }

  // Otherwise return formatted hints as progressive steps
  if (Array.isArray(question.hints) && question.hints.length > 0) {
    return question.hints;
  }

  return [`Lösung: ${question.correctAnswer}`];
}
