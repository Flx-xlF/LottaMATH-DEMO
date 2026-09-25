/**
 * Custom On-Screen Math Keyboard for LottaMATH
 * Touch-optimized for iPad Safari (no system keyboard triggers, live KaTeX preview display, >=48px touch targets).
 */

import { renderMath } from './mathRenderer.js';

export function renderMathKeyboard(container, options = {}) {
  if (!container) return null;

  const {
    onSubmit = () => {},
    onChange = () => {},
    placeholder = 'Tippe deine Lösung ein...',
    initialValue = '',
  } = options;

  let currentValue = String(initialValue || '');
  let submitCallback = onSubmit;

  // Build DOM Structure
  const wrapper = document.createElement('div');
  wrapper.className = 'math-keyboard';

  wrapper.innerHTML = `
    <div class="math-keyboard__display-card glass-card">
      <div class="math-keyboard__display-preview" id="math-kb-preview"></div>
      <div class="math-keyboard__placeholder" id="math-kb-placeholder">${placeholder}</div>
    </div>
    <div class="math-keyboard__keys">
      <!-- Row 1: Numbers -->
      <div class="math-keyboard__row">
        <button type="button" class="math-keyboard__key" data-key="1">1</button>
        <button type="button" class="math-keyboard__key" data-key="2">2</button>
        <button type="button" class="math-keyboard__key" data-key="3">3</button>
        <button type="button" class="math-keyboard__key" data-key="4">4</button>
        <button type="button" class="math-keyboard__key" data-key="5">5</button>
        <button type="button" class="math-keyboard__key" data-key="6">6</button>
        <button type="button" class="math-keyboard__key" data-key="7">7</button>
        <button type="button" class="math-keyboard__key" data-key="8">8</button>
        <button type="button" class="math-keyboard__key" data-key="9">9</button>
        <button type="button" class="math-keyboard__key" data-key="0">0</button>
      </div>

      <!-- Row 2: Variables & Powers & Backspace -->
      <div class="math-keyboard__row">
        <button type="button" class="math-keyboard__key math-keyboard__key--var" data-key="x">x</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--var" data-key="y">y</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--var" data-key="a">a</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--var" data-key="b">b</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--power" data-key="²">²</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--power" data-key="³">³</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--action" id="kb-btn-backspace" data-key="backspace">⌫</button>
      </div>

      <!-- Row 3: Operators & Parentheses -->
      <div class="math-keyboard__row">
        <button type="button" class="math-keyboard__key math-keyboard__key--op" data-key="+">+</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--op" data-key="-">−</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--op" data-key="·">·</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--op" data-key="/">/</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--op" data-key=",">,</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--op" data-key="(">(</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--op" data-key=")">)</button>
        <button type="button" class="math-keyboard__key math-keyboard__key--action" id="kb-btn-clear" data-key="clear">C</button>
      </div>

      <!-- Row 4: Submit Button -->
      <div class="math-keyboard__row">
        <button type="button" class="math-keyboard__key math-keyboard__key--submit btn btn--primary" id="kb-btn-submit" data-key="submit">
          <span>Prüfen ✓</span>
        </button>
      </div>
    </div>
  `;

  container.appendChild(wrapper);

  const previewEl = wrapper.querySelector('#math-kb-preview');
  const placeholderEl = wrapper.querySelector('#math-kb-placeholder');
  const submitBtn = wrapper.querySelector('#kb-btn-submit');
  const clearBtn = wrapper.querySelector('#kb-btn-clear');
  const backspaceBtn = wrapper.querySelector('#kb-btn-backspace');

  function updateDisplay() {
    const isEmpty = !currentValue || currentValue.trim().length === 0;
    if (submitBtn) submitBtn.disabled = isEmpty;
    if (clearBtn) clearBtn.disabled = !currentValue;
    if (backspaceBtn) backspaceBtn.disabled = !currentValue;

    if (!currentValue) {
      previewEl.innerHTML = '';
      placeholderEl.style.display = 'block';
    } else {
      placeholderEl.style.display = 'none';
      // Format LaTeX representation for preview
      const latex = currentValue
        .replace(/·/g, ' \\cdot ')
        .replace(/\*/g, ' \\cdot ')
        .replace(/,/g, '{,}')
        .replace(/²/g, '^2')
        .replace(/³/g, '^3');
      renderMath(previewEl, latex, { displayMode: false });
    }
    onChange(currentValue);
  }

  function handleKeyPress(key) {
    if (key === 'backspace') {
      if (currentValue.length > 0) {
        currentValue = currentValue.slice(0, -1);
        updateDisplay();
      }
    } else if (key === 'clear') {
      currentValue = '';
      updateDisplay();
    } else if (key === 'submit') {
      if (submitCallback && currentValue.trim()) {
        submitCallback(currentValue.trim());
      }
    } else {
      currentValue += key;
      updateDisplay();
    }
  }

  function onKeyClick(e) {
    const btn = e.target.closest('button[data-key]');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    // Haptic visual feedback
    btn.classList.add('math-keyboard__key--active');
    setTimeout(() => btn.classList.remove('math-keyboard__key--active'), 100);

    const key = btn.getAttribute('data-key');
    handleKeyPress(key);
  }

  function handlePhysicalKeyDown(e) {
    // Ignore if typing inside input/textarea if any exist
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable)) {
      return;
    }

    const key = e.key;

    if (key >= '0' && key <= '9') {
      e.preventDefault();
      handleKeyPress(key);
    } else if (key === 'x' || key === 'X') {
      e.preventDefault();
      handleKeyPress('x');
    } else if (key === 'y' || key === 'Y') {
      e.preventDefault();
      handleKeyPress('y');
    } else if (key === 'a' || key === 'A') {
      e.preventDefault();
      handleKeyPress('a');
    } else if (key === 'b' || key === 'B') {
      e.preventDefault();
      handleKeyPress('b');
    } else if (key === '+' || key === '-' || key === '/' || key === '(' || key === ')') {
      e.preventDefault();
      handleKeyPress(key);
    } else if (key === '*') {
      e.preventDefault();
      handleKeyPress('·');
    } else if (key === ',' || key === '.') {
      e.preventDefault();
      handleKeyPress(',');
    } else if (key === 'Backspace') {
      e.preventDefault();
      handleKeyPress('backspace');
    } else if (key === 'Escape' || key === 'Delete') {
      e.preventDefault();
      handleKeyPress('clear');
    } else if (key === 'Enter') {
      e.preventDefault();
      handleKeyPress('submit');
    }
  }

  wrapper.addEventListener('click', onKeyClick);
  window.addEventListener('keydown', handlePhysicalKeyDown);
  updateDisplay();

  return {
    getValue: () => currentValue,
    setValue: (val) => {
      currentValue = String(val || '');
      updateDisplay();
    },
    onSubmit: (fn) => {
      submitCallback = fn;
    },
    destroy: () => {
      window.removeEventListener('keydown', handlePhysicalKeyDown);
      wrapper.removeEventListener('click', onKeyClick);
      wrapper.remove();
    },
  };
}
