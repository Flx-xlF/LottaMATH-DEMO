/**
 * Multiple Choice Interaction Component for LottaMATH
 * Large touch buttons (2x2 grid), KaTeX rendering for math formulas, instant feedback animation.
 * Supports visual options and object-based choices.
 */

import { renderMathInText } from './mathRenderer.js';
import { renderVisualModel } from './visualMath.js';

export function renderMultipleChoice(container, options = {}) {
  if (!container) return null;

  const {
    options: choiceOptions = [],
    correctAnswer = '',
    onAnswer = () => {},
  } = options;

  let isAnswered = false;

  const wrapper = document.createElement('div');
  wrapper.className = 'mc-grid';

  choiceOptions.forEach((choice, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'mc-btn glass-card glass-card--interactive';
    btn.setAttribute('data-choice-idx', index);

    const labelSpan = document.createElement('span');
    labelSpan.className = 'mc-btn__label';
    labelSpan.textContent = `${String.fromCharCode(65 + index)}`; // A, B, C, D

    const contentSpan = document.createElement('span');
    contentSpan.className = 'mc-btn__content';

    const isObj = typeof choice === 'object' && choice !== null;
    const choiceText = isObj ? (choice.text || '') : String(choice);

    if (isObj && choice.visual) {
      renderVisualModel(contentSpan, choice.visual);
    } else if (choiceText.includes('$')) {
      renderMathInText(contentSpan, choiceText);
    } else {
      // Check if pure math-like string without multi-letter words
      const words = choiceText.match(/[a-zA-ZäöüÄÖÜß]{3,}/g) || [];
      const hasMathChars = /[0-9xya-z²³⁴⁵+\-·*\/=()^]/.test(choiceText);
      if (words.length === 0 && hasMathChars) {
        renderMathInText(contentSpan, `$${choiceText}$`);
      } else {
        renderMathInText(contentSpan, choiceText);
      }
    }

    btn.appendChild(labelSpan);
    btn.appendChild(contentSpan);
    wrapper.appendChild(btn);
  });

  container.appendChild(wrapper);

  function getChoiceValue(choice) {
    if (typeof choice === 'object' && choice !== null) {
      return choice.value || choice.text || choice.id || '';
    }
    return String(choice);
  }

  function handleSelection(e) {
    const btn = e.target.closest('.mc-btn');
    if (!btn || isAnswered) return;

    isAnswered = true;
    const selectedIdx = Number(btn.getAttribute('data-choice-idx'));
    const selectedChoice = choiceOptions[selectedIdx];
    const selectedVal = getChoiceValue(selectedChoice);

    const isCorrect = String(selectedVal).trim() === String(correctAnswer).trim();

    // Visual feedback
    if (isCorrect) {
      btn.classList.add('mc-btn--correct');
    } else {
      btn.classList.add('mc-btn--wrong');
      // Highlight the correct one
      const allBtns = wrapper.querySelectorAll('.mc-btn');
      choiceOptions.forEach((opt, idx) => {
        if (String(getChoiceValue(opt)).trim() === String(correctAnswer).trim() && allBtns[idx]) {
          allBtns[idx].classList.add('mc-btn--should-have-been');
        }
      });
    }

    // Callback after brief recognition delay (450ms on wrong to let shake animation finish)
    setTimeout(() => {
      onAnswer(selectedVal, isCorrect);
    }, isCorrect ? 900 : 450);
  }

  wrapper.addEventListener('click', handleSelection);

  return {
    destroy: () => {
      wrapper.removeEventListener('click', handleSelection);
      wrapper.remove();
    },
  };
}
