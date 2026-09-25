/**
 * Quiz Screen Component for LottaMATH
 * Core gameplay loop supporting all 5 interaction formats, timer modes, feedback, and hint ladders.
 */

import { validateAnswer } from '../engine/questionEngine.js';
import { recordMistake, resolveMistake } from '../engine/gameState.js';
import { renderMathInText, renderMath } from '../components/mathRenderer.js';
import { renderMultipleChoice } from '../components/multipleChoice.js';
import { renderMathKeyboard } from '../components/mathKeyboard.js';
import { renderDragGroup, renderDragOrder } from '../components/dragDrop.js';
import { renderTimer } from '../components/timer.js';
import { renderProgressBar } from '../components/progressBar.js';
import { renderHintPanel } from '../components/hintPanel.js';
import { renderCatMascot } from '../components/catMascot.js';
import { getRandomMessage } from '../data/catMessages.js';
import { renderVisualModel } from '../components/visualMath.js';
import { getFriendlyPlayerName } from '../engine/profileManager.js';

export function renderQuiz(container, options = {}, callbacks = {}) {
  if (!container) return null;

  const {
    gameState = null,
    questions = [],
    worldId = 1,
    levelId = '1-1',
    isBoss = false,
    timeLimit = 0,
    playerName = 'du',
  } = options;

  const {
    onComplete = () => {},
    onQuit = () => {},
  } = callbacks;

  if (!questions || questions.length === 0) {
    onQuit();
    return null;
  }

  let currentIndex = 0;
  let sessionResults = [];
  let currentInteraction = null;
  let currentHintWidget = null;
  let timerWidget = null;
  let hintsUsedOnCurrent = 0;
  let startTime = Date.now();

  const totalQuestions = questions.length;

  const screenEl = document.createElement('div');
  screenEl.className = `screen quiz-screen flex-col ${isBoss ? 'quiz-screen--boss' : ''}`;

  // 1. Top Bar
  const topBar = document.createElement('div');
  topBar.className = 'quiz__top-bar flex-between';
  topBar.innerHTML = `
    <div class="flex-row items-center gap-xs">
      <button type="button" class="btn btn--ghost btn--icon" id="quiz-quit-btn" title="Abbrechen">
        ✕
      </button>
      <button type="button" class="btn btn--ghost quiz__report-btn flex-row gap-xs" id="quiz-report-btn" title="Problem melden" style="color: var(--color-text-muted); font-size: 0.85rem; padding: 4px 10px; min-height: 32px; border-radius: var(--radius-full); align-items: center;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-top: -1px;">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
          <line x1="4" y1="22" x2="4" y2="15"></line>
        </svg>
        <span class="quiz__report-text" style="font-weight: 600;">Problem melden</span>
      </button>
    </div>
    <div class="quiz__progress-info flex-col flex-center">
      <span class="quiz__counter" id="quiz-counter">Frage 1 von ${totalQuestions}</span>
    </div>
    <div class="quiz__top-right" id="quiz-timer-slot"></div>
  `;
  screenEl.appendChild(topBar);

  // 2. Linear Progress Bar
  const progressContainer = document.createElement('div');
  progressContainer.className = 'quiz__progress-bar-slot';
  screenEl.appendChild(progressContainer);
  const progressBar = renderProgressBar(progressContainer, {
    value: 0,
    color: isBoss ? 'var(--color-warning)' : 'var(--color-primary)',
    height: '6px',
  });

  // 3. Question Card
  const questionCard = document.createElement('div');
  questionCard.className = 'quiz__question-card glass-card flex-col gap-sm text-center';
  questionCard.innerHTML = `
    <div class="quiz__prompt text-muted" id="quiz-prompt"></div>
    <div class="quiz__visual-slot" id="quiz-visual-slot" style="display: none; width: 100%;"></div>
    <div class="quiz__math-slot math-display" id="quiz-math-display"></div>
  `;
  screenEl.appendChild(questionCard);

  // 4. Interactive Response Area
  const interactionSlot = document.createElement('div');
  interactionSlot.className = 'quiz__interaction-slot';
  screenEl.appendChild(interactionSlot);

  // 5. Feedback Banner
  const feedbackEl = document.createElement('div');
  feedbackEl.className = 'quiz__feedback-banner text-center';
  feedbackEl.style.display = 'none';
  screenEl.appendChild(feedbackEl);

  // 6. Hint Panel Slot
  const hintSlot = document.createElement('div');
  hintSlot.className = 'quiz__hint-slot';
  screenEl.appendChild(hintSlot);

  container.appendChild(screenEl);

  // Initialize Boss Timer if configured
  if (timeLimit > 0) {
    const timerSlot = topBar.querySelector('#quiz-timer-slot');
    timerWidget = renderTimer(timerSlot, {
      duration: timeLimit,
      onComplete: () => {
        finishQuiz();
      },
    });
    timerWidget.start();
  }

  function renderCurrentQuestion() {
    // Clean up previous interaction & hint widgets
    if (currentInteraction && currentInteraction.destroy) currentInteraction.destroy();
    if (currentHintWidget && currentHintWidget.destroy) currentHintWidget.destroy();
    interactionSlot.innerHTML = '';
    hintSlot.innerHTML = '';
    feedbackEl.style.display = 'none';
    hintsUsedOnCurrent = 0;

    const q = questions[currentIndex];
    if (!q) {
      finishQuiz();
      return;
    }

    // Update Top Counters
    topBar.querySelector('#quiz-counter').textContent = `Frage ${currentIndex + 1} von ${totalQuestions}`;
    progressBar.update(currentIndex / totalQuestions);

    // Update Prompt & Math Display
    const promptEl = questionCard.querySelector('#quiz-prompt');
    const mathEl = questionCard.querySelector('#quiz-math-display');
    const visualSlot = questionCard.querySelector('#quiz-visual-slot');

    renderMathInText(promptEl, q.prompt);

    const visualData = q.visualPrompt || q.visual;
    if (visualData) {
      visualSlot.style.display = 'flex';
      visualSlot.style.justifyContent = 'center';
      visualSlot.innerHTML = '';
      renderVisualModel(visualSlot, visualData);
    } else {
      visualSlot.style.display = 'none';
      visualSlot.innerHTML = '';
    }

    if (q.promptLatex) {
      mathEl.style.display = 'flex';
      renderMath(mathEl, q.promptLatex, { displayMode: true });
    } else {
      mathEl.style.display = 'none';
      mathEl.innerHTML = '';
    }

    // Mount Hint Panel
    currentHintWidget = renderHintPanel(hintSlot, {
      question: q,
      onHintUsed: () => {
        hintsUsedOnCurrent += 1;
      },
    });

    // Mount Interactive Component based on type
    if (q.type === 'multiple-choice') {
      currentInteraction = renderMultipleChoice(interactionSlot, {
        options: q.interaction ? q.interaction.options : [],
        correctAnswer: q.correctAnswer,
        onAnswer: (selectedAnswer) => {
          handleAnswerSubmitted(selectedAnswer);
        },
      });
    } else if (q.type === 'fill-in') {
      currentInteraction = renderMathKeyboard(interactionSlot, {
        placeholder: (q.interaction && q.interaction.placeholder) || 'Ausdruck eingeben...',
        onSubmit: (val) => {
          handleAnswerSubmitted(val);
        },
      });
    } else if (q.type === 'drag-group') {
      let items = q.interaction && Array.isArray(q.interaction.items) ? [...q.interaction.items] : [];
      const groups = (q.interaction && q.interaction.groups) || [];
      const correct = q.correctAnswer || {};
      // Shuffle items for the drag pool
      if (items.length > 1) {
        for (let i = items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [items[i], items[j]] = [items[j], items[i]];
        }
        // Defensive safeguard: If items happen to match 1:1 with group order, swap the first two items
        const isIdenticalOrder = groups.length === items.length && groups.every((g, idx) => {
          const expected = correct[g.id];
          return Array.isArray(expected) && expected.length === 1 && String(expected[0]).trim() === String(items[idx]).trim();
        });
        if (isIdenticalOrder && items.length > 1) {
          [items[0], items[1]] = [items[1], items[0]];
        }
      }
      currentInteraction = renderDragGroup(interactionSlot, {
        items,
        groups,
        onComplete: (groupingResult) => {
          handleAnswerSubmitted(groupingResult);
        },
      });
    } else if (q.type === 'drag-order') {
      let items = q.interaction && Array.isArray(q.interaction.items) ? [...q.interaction.items] : [];
      const correct = (q.interaction && q.interaction.correctOrder) || (Array.isArray(q.correctAnswer) ? q.correctAnswer : null);
      // Defensive safeguard: Ensure items are NEVER displayed in the already-solved order!
      if (correct && items.length > 1 && items.every((val, idx) => val === correct[idx])) {
        for (let i = items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [items[i], items[j]] = [items[j], items[i]];
        }
        if (items.every((val, idx) => val === correct[idx])) {
          [items[0], items[1]] = [items[1], items[0]];
        }
      }
      currentInteraction = renderDragOrder(interactionSlot, {
        items,
        onComplete: (orderedList) => {
          handleAnswerSubmitted(orderedList);
        },
      });
    } else if (q.type === 'step-builder') {
      renderStepBuilder(interactionSlot, q);
    }
  }

  function renderStepBuilder(slot, q) {
    const steps = (q.interaction && q.interaction.steps) || [];
    let currentStepIdx = 0;

    const sbWrapper = document.createElement('div');
    sbWrapper.className = 'step-builder flex-col gap-md';

    sbWrapper.innerHTML = `
      <div class="step-builder__prompt-card glass-card">
        <div class="step-builder__step-title text-muted">Schritt ${currentStepIdx + 1} von ${steps.length}</div>
        <div class="step-builder__step-text" id="sb-step-text"></div>
      </div>
      <div id="sb-keyboard-slot"></div>
    `;

    slot.appendChild(sbWrapper);

    const stepTextEl = sbWrapper.querySelector('#sb-step-text');
    const kbSlot = sbWrapper.querySelector('#sb-keyboard-slot');

    function updateStep() {
      const step = steps[currentStepIdx];
      sbWrapper.querySelector('.step-builder__step-title').textContent = `Schritt ${currentStepIdx + 1} von ${steps.length}`;
      renderMathInText(stepTextEl, step.prompt);
    }

    const kb = renderMathKeyboard(kbSlot, {
      placeholder: 'Schritt-Ergebnis eingeben...',
      onSubmit: (val) => {
        const step = steps[currentStepIdx];
        const res = validateAnswer({ type: 'fill-in', correctAnswer: step.correctAnswer, acceptedAnswers: [step.correctAnswer] }, val);
        if (res.correct) {
          currentStepIdx += 1;
          if (currentStepIdx < steps.length) {
            kb.setValue('');
            updateStep();
          } else {
            handleAnswerSubmitted(val);
          }
        } else {
          feedbackEl.style.display = 'block';
          feedbackEl.innerHTML = '';
          feedbackEl.className = 'quiz__feedback-banner quiz__feedback-banner--wrong';
          renderMathInText(feedbackEl, `💡 Tipp für Schritt ${currentStepIdx + 1}: ${step.hint || step.correctAnswer}`);
        }
      },
    });

    updateStep();
    currentInteraction = {
      destroy: () => {
        kb.destroy();
        sbWrapper.remove();
      },
    };
  }

  let cornerSuki = null;
  let continueKeyHandler = null;

  function advanceToNextQuestion() {
    if (continueKeyHandler) {
      window.removeEventListener('keydown', continueKeyHandler);
      continueKeyHandler = null;
    }
    questionCard.classList.remove('quiz__question-card--correct', 'quiz__question-card--wrong');
    currentIndex += 1;
    if (currentIndex < totalQuestions) {
      renderCurrentQuestion();
    } else {
      finishQuiz();
    }
  }

  function handleAnswerSubmitted(userAnswer) {
    const q = questions[currentIndex];
    const validation = validateAnswer(q, userAnswer);

    // Record result
    sessionResults.push({
      questionId: q.id,
      prompt: q.prompt,
      correctAnswer: q.correctAnswer,
      userAnswer: typeof userAnswer === 'object' ? JSON.stringify(userAnswer) : String(userAnswer),
      correct: validation.correct,
      hintsUsed: hintsUsedOnCurrent,
    });

    // Clean up previous corner Suki instance and key listeners
    if (cornerSuki && cornerSuki.destroy) {
      cornerSuki.destroy();
      cornerSuki = null;
    }
    if (continueKeyHandler) {
      window.removeEventListener('keydown', continueKeyHandler);
      continueKeyHandler = null;
    }

    if (validation.correct) {
      // Clear from mistake vault if solved correctly
      if (gameState) resolveMistake(gameState, q.id);

      // Correct answer: Show quick celebration banner and auto-advance
      feedbackEl.style.display = 'block';
      feedbackEl.innerHTML = '';
      feedbackEl.className = 'quiz__feedback-banner quiz__feedback-banner--correct';
      renderMathInText(feedbackEl, validation.feedback);
      questionCard.classList.add('quiz__question-card--correct');

      cornerSuki = renderCatMascot(screenEl, {
        mood: 'excited',
        message: getRandomMessage('correct', playerName),
        position: 'corner',
        autoHide: 1600,
      });

      setTimeout(() => {
        advanceToNextQuestion();
      }, 1100);
    } else {
      // Save into mistake vault for focused practice
      if (gameState) recordMistake(gameState, q.id);

      // Incorrect answer: MANUAL CONTINUE with interactive Lern-Box (no auto-advance!)
      feedbackEl.style.display = 'block';
      feedbackEl.innerHTML = '';
      feedbackEl.className = 'quiz__feedback-banner quiz__feedback-banner--wrong';
      renderMathInText(feedbackEl, validation.feedback);
      questionCard.classList.add('quiz__question-card--wrong');

      cornerSuki = renderCatMascot(screenEl, {
        mood: 'encouraging',
        message: getRandomMessage('wrong', playerName),
        position: 'corner',
        autoHide: 2500,
      });

      // Render Lern-Box right inside the feedback area
      const mistakeBox = document.createElement('div');
      mistakeBox.className = 'quiz__mistake-card glass-card';

      // 1. Header
      const titleEl = document.createElement('div');
      titleEl.className = 'quiz__mistake-title';
      titleEl.innerHTML = `<span>💡</span> <span>Lern-Pause: Aus Fehlern lernen</span>`;
      mistakeBox.appendChild(titleEl);

      // 2. Common Mistake (if present)
      if (q.commonMistake) {
        const trapEl = document.createElement('div');
        trapEl.className = 'quiz__mistake-trap';
        const trapText = `⚠️ **Häufige Falle:** ${q.commonMistake}`;
        renderMathInText(trapEl, trapText);
        mistakeBox.appendChild(trapEl);
      }

      // 3. Step-by-Step / Correct Solution
      const solutionEl = document.createElement('div');
      solutionEl.className = 'quiz__mistake-solution';
      const lastHint = q.hints && q.hints.length > 0 ? q.hints[q.hints.length - 1] : null;
      const hintText = typeof lastHint === 'object' ? lastHint.text : lastHint;
      const formattedCorrect = typeof q.correctAnswer === 'object' ? JSON.stringify(q.correctAnswer) : String(q.correctAnswer);
      const solutionText = hintText || `✅ **Richtige Lösung:** $${formattedCorrect}$`;
      renderMathInText(solutionEl, solutionText);
      mistakeBox.appendChild(solutionEl);

      // 4. Continue Button
      const btnRow = document.createElement('div');
      btnRow.className = 'quiz__mistake-btn-row';
      btnRow.style.marginTop = 'var(--spacing-sm)';
      btnRow.innerHTML = `
        <button type="button" class="btn btn--primary btn--full" id="quiz-continue-btn" style="font-size: 1.05rem;">
          Verstanden, weiter! 🚀
        </button>
      `;
      mistakeBox.appendChild(btnRow);

      feedbackEl.appendChild(mistakeBox);

      // Scroll smoothly into view so Lotta sees it on mobile screens
      setTimeout(() => {
        mistakeBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);

      // Click & Enter handlers
      const continueBtn = btnRow.querySelector('#quiz-continue-btn');
      continueBtn.addEventListener('click', advanceToNextQuestion);

      continueKeyHandler = (e) => {
        if (e.key === 'Enter') {
          advanceToNextQuestion();
        }
      };
      window.addEventListener('keydown', continueKeyHandler);
    }
  }

  function finishQuiz() {
    if (timerWidget) timerWidget.stop();
    if (cornerSuki && cornerSuki.destroy) cornerSuki.destroy();
    progressBar.update(1.0);

    const duration = Math.round((Date.now() - startTime) / 1000);
    const correctCount = sessionResults.filter((r) => r.correct).length;
    const percentage = Math.round((correctCount / totalQuestions) * 100);

    onComplete({
      answers: sessionResults,
      totalCorrect: correctCount,
      totalQuestions,
      percentage,
      duration,
      worldId,
      levelId,
      isBoss,
    });
  }

  function showQuitModal() {
    if (screenEl.querySelector('.quit-modal-overlay')) return;

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'quit-modal-overlay flex-col flex-center';
    modalOverlay.innerHTML = `
      <div class="quit-modal-card glass-card text-center flex-col gap-md">
        <div style="font-size: 2.5rem;">🚪</div>
        <h3 class="text-gradient" style="font-size: 1.4rem;">Runde beenden?</h3>
        <p class="text-muted" style="font-size: 0.95rem; line-height: 1.4;">
          Möchtest du diese Übungsrunde wirklich abbrechen? Dein aktueller Runden-Fortschritt geht dabei verloren.
        </p>
        <div class="quit-modal-actions flex-row gap-md" style="margin-top: 0.5rem;">
          <button type="button" class="btn btn--ghost flex-1" id="quit-modal-confirm" style="color: var(--color-error);">
            Ja, abbrechen
          </button>
          <button type="button" class="btn btn--primary flex-1" id="quit-modal-cancel">
            Weiter üben 💪
          </button>
        </div>
      </div>
    `;

    screenEl.appendChild(modalOverlay);

    const cancelBtn = modalOverlay.querySelector('#quit-modal-cancel');
    const confirmBtn = modalOverlay.querySelector('#quit-modal-confirm');

    cancelBtn.addEventListener('click', () => {
      modalOverlay.remove();
    });

    confirmBtn.addEventListener('click', () => {
      modalOverlay.remove();
      if (timerWidget) timerWidget.stop();
      if (cornerSuki && cornerSuki.destroy) cornerSuki.destroy();
      onQuit();
    });
  }

  function showReportModal() {
    if (screenEl.querySelector('.report-modal-overlay')) return;

    // Pause timer if running
    if (timerWidget && timeLimit > 0) timerWidget.stop();

    const currentQ = questions[currentIndex] || {};
    const questionId = currentQ.id || `${worldId}-${levelId}-q${currentIndex + 1}`;
    const questionText = currentQ.prompt || currentQ.promptLatex || 'Keine Aufgabenstellung';

    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'report-modal-overlay flex-col flex-center';
    modalOverlay.innerHTML = `
      <div class="report-modal-card glass-card flex-col gap-md text-left">
        <div class="flex-between items-center" style="border-bottom: 1px solid var(--color-border); padding-bottom: 0.75rem;">
          <div class="flex-row items-center gap-xs">
            <span style="font-size: 1.4rem;">🚩</span>
            <h3 class="text-gradient" style="font-size: 1.25rem; margin: 0;">Aufgabe melden</h3>
          </div>
          <button type="button" class="btn btn--ghost btn--icon" id="report-modal-close" title="Schliessen" style="min-height: 32px; min-width: 32px; font-size: 1rem;">✕</button>
        </div>

        <p class="text-muted" style="font-size: 0.9rem; line-height: 1.4; margin: 0;">
          Stimmt etwas mit dieser Aufgabe nicht? Sag es uns, damit wir es korrigieren können!
        </p>

        <form id="report-form" class="flex-col gap-sm" style="margin-top: 0.25rem;">
          <label class="text-muted" style="font-size: 0.85rem; font-weight: 600;">Was ist das Problem?</label>
          <div class="report-options-grid flex-col gap-xs">
            <label class="report-option-label">
              <input type="radio" name="reportIssue" value="Tippfehler" checked />
              <span>📝 Tippfehler / Schreibfehler</span>
            </label>
            <label class="report-option-label">
              <input type="radio" name="reportIssue" value="Falsche Lösung" />
              <span>❌ Falsche Lösung als richtig bewertet</span>
            </label>
            <label class="report-option-label">
              <input type="radio" name="reportIssue" value="Unklar / Zu schwer" />
              <span>🤔 Unklar formuliert / Zu schwer</span>
            </label>
            <label class="report-option-label">
              <input type="radio" name="reportIssue" value="Technischer Fehler" />
              <span>⚠️ Technischer Fehler / Anzeige-Bug</span>
            </label>
            <label class="report-option-label">
              <input type="radio" name="reportIssue" value="Etwas anderes" />
              <span>💬 Etwas anderes</span>
            </label>
          </div>

          <label class="text-muted" style="font-size: 0.85rem; font-weight: 600; margin-top: 6px;">Zusätzliche Details (optional):</label>
          <textarea 
            id="report-comments" 
            class="report-modal__textarea" 
            placeholder="Beschreibe kurz, was dir aufgefallen ist..." 
            rows="3"
          ></textarea>

          <div id="report-status-msg" style="display: none; font-size: 0.9rem; margin-top: 6px; font-weight: 600; text-align: center;"></div>

          <div class="report-modal-actions flex-row gap-sm" style="margin-top: 8px;">
            <button type="button" class="btn btn--ghost flex-1" id="report-modal-cancel">
              Abbrechen
            </button>
            <button type="submit" class="btn btn--primary flex-1" id="report-modal-submit">
              Absenden 🚀
            </button>
          </div>
        </form>
      </div>
    `;

    screenEl.appendChild(modalOverlay);

    const closeBtn = modalOverlay.querySelector('#report-modal-close');
    const cancelBtn = modalOverlay.querySelector('#report-modal-cancel');
    const form = modalOverlay.querySelector('#report-form');
    const submitBtn = modalOverlay.querySelector('#report-modal-submit');
    const statusMsg = modalOverlay.querySelector('#report-status-msg');

    function closeModal() {
      modalOverlay.remove();
      if (timerWidget && timeLimit > 0) {
        timerWidget.start();
      }
    }

    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const selectedRadio = form.querySelector('input[name="reportIssue"]:checked');
      const issueType = selectedRadio ? selectedRadio.value : 'Allgemeines Problem';
      const comments = form.querySelector('#report-comments').value.trim();

      submitBtn.disabled = true;
      submitBtn.textContent = 'Wird gesendet...';

      const payload = {
        playerName,
        worldId,
        levelId,
        questionId,
        questionText,
        issueType,
        comments,
      };

      // Demo Mode: Simulate successful reporting without hitting backend
      setTimeout(() => {
        statusMsg.style.display = 'block';
        statusMsg.style.color = 'var(--color-success)';
        const friendlyName = getFriendlyPlayerName(playerName);
        statusMsg.textContent = friendlyName
          ? `Vielen Dank, ${friendlyName}! 🐾 Deine Meldung wurde im Demo-Modus simuliert entgegengenommen.`
          : 'Vielen Dank! 🐾 Deine Meldung wurde im Demo-Modus simuliert entgegengenommen.';

        setTimeout(() => {
          closeModal();
        }, 1600);
      }, 300);
    });
  }

  // Quit & Report button handlers
  const quitBtn = topBar.querySelector('#quiz-quit-btn');
  quitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    showQuitModal();
  });

  const reportBtn = topBar.querySelector('#quiz-report-btn');
  if (reportBtn) {
    reportBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      showReportModal();
    });
  }

  // Start with first question
  renderCurrentQuestion();

  return {
    destroy: () => {
      if (continueKeyHandler) window.removeEventListener('keydown', continueKeyHandler);
      if (timerWidget) timerWidget.destroy();
      if (cornerSuki && cornerSuki.destroy) cornerSuki.destroy();
      if (currentInteraction && currentInteraction.destroy) currentInteraction.destroy();
      if (currentHintWidget && currentHintWidget.destroy) currentHintWidget.destroy();
      screenEl.remove();
    },
  };
}
