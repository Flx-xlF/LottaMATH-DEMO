/**
 * Suki the Cat Mascot Component for LottaMATH
 * Fully self-contained inline SVG cartoon cat with animated speech bubble and mood states.
 */

import { renderMathInText } from './mathRenderer.js';

export function renderCatMascot(container, options = {}) {
  if (!container) return null;

  const {
    mood = 'happy',        // 'happy' | 'excited' | 'thinking' | 'encouraging' | 'celebrating'
    message = '',          // Speech bubble text
    position = 'inline',   // 'inline' | 'corner'
    autoHide = 0,          // Auto-hide timeout in ms (0 = persist)
  } = options;

  let currentMood = mood;
  let autoHideTimer = null;

  const wrapper = document.createElement('div');
  wrapper.className = `cat-mascot cat-mascot--${position} cat-mascot--mood-${currentMood}`;

  // Helper to generate eyes SVG markup based on mood
  function getEyesMarkup(m) {
    if (m === 'celebrating') {
      // Happy closed curved eyes (^^)
      return `
        <path d="M 32 38 Q 38 32 44 38" fill="none" stroke="#2e1065" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 56 38 Q 62 32 68 38" fill="none" stroke="#2e1065" stroke-width="2.5" stroke-linecap="round" />
      `;
    }
    if (m === 'encouraging') {
      // Soft gentle curved eyes
      return `
        <path d="M 32 36 Q 38 30 44 36" fill="none" stroke="#2e1065" stroke-width="2.5" stroke-linecap="round" />
        <path d="M 56 36 Q 62 30 68 36" fill="none" stroke="#2e1065" stroke-width="2.5" stroke-linecap="round" />
      `;
    }
    if (m === 'excited') {
      // Big sparkling anime eyes with star glints
      return `
        <ellipse cx="38" cy="36" rx="6.5" ry="7.5" fill="#2e1065" />
        <ellipse cx="62" cy="36" rx="6.5" ry="7.5" fill="#2e1065" />
        <circle cx="36" cy="33" r="2.5" fill="#ffffff" />
        <circle cx="60" cy="33" r="2.5" fill="#ffffff" />
        <circle cx="40" cy="38" r="1.2" fill="#ffffff" />
        <circle cx="64" cy="38" r="1.2" fill="#ffffff" />
      `;
    }
    if (m === 'thinking') {
      // One eye curious, one slightly squinted
      return `
        <ellipse cx="38" cy="35" rx="6" ry="6.5" fill="#2e1065" />
        <circle cx="36.5" cy="33" r="2" fill="#ffffff" />
        <path d="M 57 37 Q 62 33 67 36" fill="none" stroke="#2e1065" stroke-width="2.5" stroke-linecap="round" />
      `;
    }
    // Default 'happy'
    return `
      <ellipse cx="38" cy="36" rx="5.5" ry="6.5" fill="#2e1065" />
      <ellipse cx="62" cy="36" rx="5.5" ry="6.5" fill="#2e1065" />
      <circle cx="36" cy="34" r="2" fill="#ffffff" />
      <circle cx="60" cy="34" r="2" fill="#ffffff" />
    `;
  }

  function getSvgMarkup(m) {
    return `
      <svg class="cat-mascot__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-label="Suki die Katze">
        <defs>
          <linearGradient id="sukiBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#c4b5fd" />
            <stop offset="60%" stop-color="#a78bfa" />
            <stop offset="100%" stop-color="#8b5cf6" />
          </linearGradient>
          <linearGradient id="sukiEarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#f472b6" />
            <stop offset="100%" stop-color="#fb7185" />
          </linearGradient>
          <filter id="sukiShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="3" stdDeviation="2.5" flood-color="rgba(0,0,0,0.25)" />
          </filter>
        </defs>

        <!-- Tail with gentle sway -->
        <path class="cat-mascot__tail" d="M 72 75 Q 92 68 86 50 Q 82 40 76 46" fill="none" stroke="#8b5cf6" stroke-width="6" stroke-linecap="round" />

        <!-- Body Group -->
        <g filter="url(#sukiShadow)">
          <!-- Main Body -->
          <path d="M 28 85 C 24 65 30 52 50 52 C 70 52 76 65 72 85 C 70 92 30 92 28 85 Z" fill="url(#sukiBodyGrad)" />
          
          <!-- White Chest/Belly Patch -->
          <ellipse cx="50" cy="74" rx="13" ry="11" fill="#ffffff" opacity="0.9" />

          <!-- Left Ear -->
          <path d="M 26 35 Q 22 12 38 22 Z" fill="url(#sukiBodyGrad)" />
          <path d="M 28 32 Q 26 18 36 24 Z" fill="url(#sukiEarGrad)" opacity="0.8" />

          <!-- Right Ear -->
          <path d="M 74 35 Q 78 12 62 22 Z" fill="url(#sukiBodyGrad)" />
          <path d="M 72 32 Q 74 18 64 24 Z" fill="url(#sukiEarGrad)" opacity="0.8" />

          <!-- Head -->
          <ellipse cx="50" cy="40" rx="26" ry="22" fill="url(#sukiBodyGrad)" />

          <!-- Cheeks Blush -->
          <circle cx="28" cy="44" r="5" fill="#f472b6" opacity="0.45" />
          <circle cx="72" cy="44" r="5" fill="#f472b6" opacity="0.45" />

          <!-- Eyes (Dynamic) -->
          <g class="cat-mascot__eyes-slot">
            ${getEyesMarkup(m)}
          </g>

          <!-- Cute Little Nose -->
          <polygon points="50,43 47,40 53,40" fill="#f43f5e" />

          <!-- Mouth -->
          <path d="M 46 45 Q 50 48 50 45 Q 50 48 54 45" fill="none" stroke="#2e1065" stroke-width="1.8" stroke-linecap="round" />

          <!-- Whiskers -->
          <line x1="20" y1="42" x2="10" y2="40" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.9" />
          <line x1="20" y1="46" x2="9" y2="47" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.9" />
          <line x1="80" y1="42" x2="90" y2="40" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.9" />
          <line x1="80" y1="46" x2="91" y2="47" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" opacity="0.9" />

          <!-- Paws -->
          <ellipse cx="40" cy="85" rx="5.5" ry="3.5" fill="#ffffff" />
          <ellipse cx="60" cy="85" rx="5.5" ry="3.5" fill="#ffffff" />
        </g>
      </svg>
    `;
  }

  // Render Cat + Speech Bubble Structure
  function updateDOM(msg, m) {
    wrapper.innerHTML = `
      <div class="cat-mascot__avatar-wrap">
        ${getSvgMarkup(m)}
      </div>
      ${
        msg
          ? `
        <div class="cat-mascot__bubble">
          <span class="cat-mascot__bubble-text" id="cat-bubble-text"></span>
        </div>
      `
          : ''
      }
    `;

    if (msg) {
      const bubbleEl = wrapper.querySelector('#cat-bubble-text');
      if (bubbleEl) {
        renderMathInText(bubbleEl, msg);
      }
    }
  }

  updateDOM(message, currentMood);
  container.appendChild(wrapper);

  // Setup auto-hide if requested
  if (autoHide > 0) {
    autoHideTimer = setTimeout(() => {
      wrapper.classList.add('cat-mascot--hiding');
      setTimeout(() => {
        wrapper.remove();
      }, 350);
    }, autoHide);
  }

  return {
    destroy: () => {
      if (autoHideTimer) {
        clearTimeout(autoHideTimer);
        autoHideTimer = null;
      }
      wrapper.remove();
    },
    updateMood: (newMood) => {
      currentMood = newMood;
      wrapper.className = `cat-mascot cat-mascot--${position} cat-mascot--mood-${currentMood}`;
      const eyesSlot = wrapper.querySelector('.cat-mascot__eyes-slot');
      if (eyesSlot) {
        eyesSlot.innerHTML = getEyesMarkup(newMood);
      }
    },
    say: (newMessage, newMood = null) => {
      if (newMood) currentMood = newMood;
      updateDOM(newMessage, currentMood);
    },
  };
}
