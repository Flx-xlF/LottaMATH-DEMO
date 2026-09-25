/**
 * Progress Bar Components for LottaMATH
 * Supports linear progress bars and circular SVG progress rings.
 */

export function renderProgressBar(container, options = {}) {
  if (!container) return null;

  const {
    value = 0, // 0 to 1
    color = 'var(--color-primary)',
    label = '',
    height = '10px',
  } = options;

  const wrapper = document.createElement('div');
  wrapper.className = 'progress-bar-container';

  wrapper.innerHTML = `
    ${label ? `<div class="progress-bar-label">${label}</div>` : ''}
    <div class="progress-bar-track" style="height: ${height};">
      <div class="progress-bar-fill" style="width: ${Math.round(value * 100)}%; background: ${color};"></div>
    </div>
  `;

  container.appendChild(wrapper);

  const fillEl = wrapper.querySelector('.progress-bar-fill');

  return {
    update: (newValue) => {
      const pct = Math.min(Math.max(Math.round(newValue * 100), 0), 100);
      fillEl.style.width = `${pct}%`;
    },
    destroy: () => {
      wrapper.remove();
    },
  };
}

export function renderProgressRing(container, options = {}) {
  if (!container) return null;

  const {
    value = 0, // 0 to 1
    size = 64,
    strokeWidth = 6,
    color = 'var(--color-primary)',
    label = '',
  } = options;

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(Math.max(value, 0), 1));

  const wrapper = document.createElement('div');
  wrapper.className = 'progress-ring-container';
  wrapper.style.width = `${size}px`;
  wrapper.style.height = `${size}px`;

  wrapper.innerHTML = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="progress-ring-svg">
      <circle class="progress-ring-bg" 
        cx="${size / 2}" cy="${size / 2}" r="${radius}" 
        stroke-width="${strokeWidth}" />
      <circle class="progress-ring-circle" 
        cx="${size / 2}" cy="${size / 2}" r="${radius}" 
        stroke-width="${strokeWidth}" 
        stroke="${color}"
        stroke-dasharray="${circumference}" 
        stroke-dashoffset="${offset}" />
    </svg>
    <div class="progress-ring-content">${label || `${Math.round(value * 100)}%`}</div>
  `;

  container.appendChild(wrapper);

  const circleEl = wrapper.querySelector('.progress-ring-circle');
  const contentEl = wrapper.querySelector('.progress-ring-content');

  return {
    update: (newValue, newLabel) => {
      const clamped = Math.min(Math.max(newValue, 0), 1);
      const newOffset = circumference * (1 - clamped);
      circleEl.style.strokeDashoffset = newOffset;
      if (newLabel !== undefined) {
        contentEl.textContent = newLabel;
      } else {
        contentEl.textContent = `${Math.round(clamped * 100)}%`;
      }
    },
    destroy: () => {
      wrapper.remove();
    },
  };
}
