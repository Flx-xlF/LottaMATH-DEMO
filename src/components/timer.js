/**
 * Countdown Timer Component for LottaMATH
 * Visual SVG countdown ring, digital display, color transitions at urgency thresholds.
 */

export function renderTimer(container, options = {}) {
  if (!container) return null;

  const {
    duration = 60, // Total seconds
    onTick = () => {},
    onComplete = () => {},
    showMinutes = true,
  } = options;

  let remaining = duration;
  let intervalId = null;
  let isRunning = false;

  const radius = 24;
  const circumference = 2 * Math.PI * radius;

  const wrapper = document.createElement('div');
  wrapper.className = 'timer-widget';

  wrapper.innerHTML = `
    <div class="timer-widget__ring-container">
      <svg class="timer-widget__svg" width="60" height="60" viewBox="0 0 60 60">
        <circle class="timer-widget__bg-circle" cx="30" cy="30" r="${radius}" />
        <circle class="timer-widget__progress-circle" cx="30" cy="30" r="${radius}" 
          stroke-dasharray="${circumference}" 
          stroke-dashoffset="0" />
      </svg>
      <div class="timer-widget__text" id="timer-display"></div>
    </div>
  `;

  container.appendChild(wrapper);

  const displayEl = wrapper.querySelector('#timer-display');
  const progressCircle = wrapper.querySelector('.timer-widget__progress-circle');

  function formatTime(secs) {
    if (!showMinutes) return `${secs}s`;
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  }

  function updateVisuals() {
    displayEl.textContent = formatTime(remaining);

    const ratio = Math.max(remaining / duration, 0);
    const offset = circumference * (1 - ratio);
    progressCircle.style.strokeDashoffset = offset;

    // Color thresholds
    if (ratio > 0.5) {
      progressCircle.style.stroke = 'var(--color-success)';
      wrapper.classList.remove('timer-widget--warning', 'timer-widget--danger');
    } else if (ratio > 0.2) {
      progressCircle.style.stroke = 'var(--color-warning)';
      wrapper.classList.add('timer-widget--warning');
      wrapper.classList.remove('timer-widget--danger');
    } else {
      progressCircle.style.stroke = 'var(--color-error)';
      wrapper.classList.add('timer-widget--danger');
    }
  }

  function tick() {
    if (remaining > 0) {
      remaining -= 1;
      updateVisuals();
      onTick(remaining);
      if (remaining === 0) {
        stop();
        onComplete();
      }
    }
  }

  function start() {
    if (isRunning) return;
    isRunning = true;
    updateVisuals();
    intervalId = setInterval(tick, 1000);
  }

  function stop() {
    if (!isRunning) return;
    isRunning = false;
    if (intervalId) clearInterval(intervalId);
  }

  updateVisuals();

  return {
    start,
    stop,
    getRemaining: () => remaining,
    destroy: () => {
      stop();
      wrapper.remove();
    },
  };
}
