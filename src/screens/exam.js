/**
 * Exam Mode Screen for LottaMATH
 * 20-question, 20-minute timed Sekundarschule Niveau P (Baselland) exam simulation with Swiss grading & detailed error breakdown.
 */

import { getExamQuestions } from '../engine/questionEngine.js';
import { addExamResult } from '../engine/gameState.js';
import { renderQuiz } from './quiz.js';
import { renderMathInText } from '../components/mathRenderer.js';
import { launchConfetti } from '../components/confetti.js';

export function renderExam(container, gameState, callbacks = {}) {
  if (!container) return null;

  const {
    onComplete = () => {},
    onQuit = () => {},
  } = callbacks;

  let activeSubScreen = null;
  let currentGameState = gameState;

  const screenEl = document.createElement('div');
  screenEl.className = 'screen exam-screen flex-col flex-center';
  container.appendChild(screenEl);

  let selectedTopic = 'all';

  function showIntro() {
    screenEl.innerHTML = `
      <div class="exam-intro-card glass-card flex-col gap-md text-center" style="max-width: 580px; padding: 2.5rem 2rem;">
        <div style="font-size: 3.5rem;">🎯</div>
        <h2 class="text-gradient" style="font-size: 2rem;">Prüfungssimulation</h2>
        <p class="text-muted" style="font-size: 1.05rem;">
          Bist du bereit für deine Prüfungssimulation? Wähle dein Prüfungs-Thema und teste dein Wissen unter realen Bedingungen.
        </p>

        <div class="flex-col gap-xs text-left" style="margin: 0.5rem 0;">
          <label style="font-size: 0.9rem; font-weight: 700; color: var(--color-text);">Themenbereich wählen:</label>
          <select id="exam-topic-select" class="form-input" style="padding: 10px; border-radius: var(--radius-sm); font-size: 1rem; cursor: pointer;">
            <option value="flaechen" ${selectedTopic === 'flaechen' ? 'selected' : ''}>📐 Flächeninhalt ebener Figuren (Neu!)</option>
            <option value="terme" ${selectedTopic === 'terme' ? 'selected' : ''}>🌊 Terme & Termumformungen</option>
            <option value="all" ${selectedTopic === 'all' ? 'selected' : ''}>🌟 Gesamter Stoff (Alle Themen gemischt)</option>
          </select>
        </div>

        <div class="exam-intro__specs glass-card flex-col gap-sm text-left" style="padding: 1.2rem; margin: 0.5rem 0;">
          <div class="flex-row gap-sm">
            <span>⏱️</span>
            <span><b>Zeit:</b> 20 Minuten Countdown</span>
          </div>
          <div class="flex-row gap-sm">
            <span>📝</span>
            <span><b>Umfang:</b> 20 ausgewogene Fragen aus dem gewählten Stoff</span>
          </div>
          <div class="flex-row gap-sm">
            <span>🇨🇭</span>
            <span><b>Bewertung:</b> Schweizer Notenskala (1.0 bis 6.0, Note 4.0 = Genügend)</span>
          </div>
        </div>

        <div class="exam-intro__actions flex-row flex-between" style="margin-top: 1rem;">
          <button type="button" class="btn btn--ghost" id="exam-intro-back-btn">← Zurück</button>
          <button type="button" class="btn btn--primary" id="exam-intro-start-btn">Prüfung starten 🚀</button>
        </div>
      </div>
    `;

    const topicSelect = screenEl.querySelector('#exam-topic-select');
    if (topicSelect) {
      topicSelect.addEventListener('change', (e) => {
        selectedTopic = e.target.value;
      });
    }

    const backBtn = screenEl.querySelector('#exam-intro-back-btn');
    const startBtn = screenEl.querySelector('#exam-intro-start-btn');

    backBtn.addEventListener('click', onQuit);
    startBtn.addEventListener('click', startExamSession);
  }

  function startExamSession() {
    screenEl.innerHTML = '';
    const examQuestions = getExamQuestions(20, selectedTopic);

    activeSubScreen = renderQuiz(
      screenEl,
      {
        gameState: currentGameState,
        questions: examQuestions,
        worldId: 1,
        levelId: 'exam',
        isBoss: false,
        timeLimit: 1200, // 20 minutes in seconds
      },
      {
        onComplete: (sessionData) => {
          showExamResults(sessionData);
        },
        onQuit: () => {
          showIntro();
        },
      }
    );
  }

  function showExamResults(sessionData) {
    if (activeSubScreen && activeSubScreen.destroy) {
      activeSubScreen.destroy();
      activeSubScreen = null;
    }
    screenEl.innerHTML = '';

    const { totalCorrect = 0, totalQuestions = 20, percentage = 0, duration = 0, answers = [] } = sessionData;

    // Record Exam Result into GameState and compute Swiss Grade
    const examRes = addExamResult(currentGameState, percentage, duration);
    currentGameState = examRes.state;
    const grade = examRes.grade;

    if (grade >= 4.5) {
      setTimeout(() => {
        launchConfetti({ particleCount: grade >= 5.0 ? 100 : 60 });
      }, 200);
    }

    let gradeClass = 'exam-grade--fail';
    let gradeLabel = 'Noch nicht genügend — weiter üben!';

    if (grade >= 5.5) {
      gradeClass = 'exam-grade--great';
      gradeLabel = 'Hervorragend! Echte Sek P Spitzenleistung! 👑';
    } else if (grade >= 5.0) {
      gradeClass = 'exam-grade--great';
      gradeLabel = 'Sehr gut! Du beherrschst den Stoff sicher! 🚀';
    } else if (grade >= 4.5) {
      gradeClass = 'exam-grade--pass';
      gradeLabel = 'Genügend — Ziel erreicht! 🎯';
    } else if (grade >= 4.0) {
      gradeClass = 'exam-grade--warning';
      gradeLabel = 'Knapp genügend — mit gezieltem Training schaffst du 4.5+!';
    }

    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const formattedDuration = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    const wrongAnswers = answers.filter((a) => !a.correct);

    screenEl.innerHTML = `
      <div class="exam-results-card glass-card flex-col gap-lg" style="width: 100%; max-width: 720px; padding: 2rem;">
        <div class="exam-results__header text-center flex-col flex-center gap-xs">
          <span class="exam-results__badge">Prüfungs-Ergebnis</span>
          <div class="exam-results__grade-box ${gradeClass}">
            <span class="exam-results__grade-num">${grade.toFixed(2)}</span>
            <span class="exam-results__grade-sub">Note</span>
          </div>
          <p class="exam-results__grade-label font-bold">${gradeLabel}</p>
        </div>

        <div class="exam-results__summary-grid flex-row flex-between gap-md text-center">
          <div class="glass-card flex-col flex-center flex-1" style="padding: 1rem;">
            <span style="font-size: 1.4rem; font-weight: 700;">${totalCorrect} / ${totalQuestions}</span>
            <span class="text-muted" style="font-size: 0.85rem;">Punkte (${percentage}%)</span>
          </div>
          <div class="glass-card flex-col flex-center flex-1" style="padding: 1rem;">
            <span style="font-size: 1.4rem; font-weight: 700;">${formattedDuration}</span>
            <span class="text-muted" style="font-size: 0.85rem;">Benötigte Zeit</span>
          </div>
        </div>

        ${
          wrongAnswers.length > 0
            ? `
          <div class="exam-results__mistakes-box flex-col gap-sm">
            <h3 style="font-size: 1.1rem; margin-bottom: 0.5rem;">🔍 Analyse deiner Fehler (${wrongAnswers.length}):</h3>
            <div class="exam-mistakes-list flex-col gap-sm" id="exam-mistakes-container"></div>
          </div>
        `
            : `
          <div class="glass-card text-center" style="padding: 1.5rem; background: var(--color-success-bg);">
            <span style="font-size: 1.8rem;">🎉</span>
            <p><b>Unglaublich! 100% fehlerfrei gelöst!</b></p>
          </div>
        `
        }

        <div class="exam-results__actions flex-row flex-between" style="margin-top: 1rem;">
          <button type="button" class="btn btn--secondary" id="exam-retry-btn">🔄 Neue Prüfung</button>
          <button type="button" class="btn btn--primary" id="exam-home-btn">🏠 Zurück zur Übersicht</button>
        </div>
      </div>
    `;

    // Render mistake cards with math rendering
    if (wrongAnswers.length > 0) {
      const mistakesContainer = screenEl.querySelector('#exam-mistakes-container');
      wrongAnswers.forEach((item, idx) => {
        const row = document.createElement('div');
        row.className = 'exam-mistake-card glass-card flex-col gap-xs';
        
        const promptEl = document.createElement('div');
        promptEl.className = 'text-muted';
        promptEl.style.fontSize = '0.85rem';
        renderMathInText(promptEl, `Aufgabe ${idx + 1}: ${item.prompt}`);
        row.appendChild(promptEl);

        const answersRow = document.createElement('div');
        answersRow.className = 'flex-between';
        answersRow.style.fontSize = '0.95rem';

        const userCol = document.createElement('span');
        userCol.style.color = 'var(--color-error)';
        userCol.innerHTML = 'Deine Eingabe: <strong></strong>';
        const userStrong = userCol.querySelector('strong');
        renderMathInText(userStrong, item.userAnswer);

        const correctCol = document.createElement('span');
        correctCol.style.color = 'var(--color-success)';
        correctCol.innerHTML = 'Richtig: <strong></strong>';
        const correctStrong = correctCol.querySelector('strong');
        renderMathInText(correctStrong, item.correctAnswer);

        answersRow.appendChild(userCol);
        answersRow.appendChild(correctCol);
        row.appendChild(answersRow);

        mistakesContainer.appendChild(row);
      });
    }

    const retryBtn = screenEl.querySelector('#exam-retry-btn');
    const homeBtn = screenEl.querySelector('#exam-home-btn');

    retryBtn.addEventListener('click', startExamSession);
    homeBtn.addEventListener('click', () => {
      onComplete(examRes);
      onQuit();
    });
  }

  showIntro();

  return {
    destroy: () => {
      if (activeSubScreen && activeSubScreen.destroy) {
        activeSubScreen.destroy();
      }
      screenEl.remove();
    },
  };
}
