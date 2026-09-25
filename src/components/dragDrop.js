/**
 * Drag and Drop Interactions for LottaMATH
 * Powered by SortableJS with touch-first configuration for iPad Safari.
 */

import Sortable from 'sortablejs';
import { renderMathInText } from './mathRenderer.js';

/**
 * GROUPING: Drag items from a top pool into categorized drop buckets
 */
export function renderDragGroup(container, options = {}) {
  if (!container) return null;

  const {
    items = [],
    groups = [],
    onComplete = () => {},
  } = options;

  const wrapper = document.createElement('div');
  wrapper.className = 'drag-group';

  // 1. Top item pool
  const poolCard = document.createElement('div');
  poolCard.className = 'drag-group__pool-card glass-card';
  poolCard.innerHTML = `
    <div class="drag-group__pool-title">📦 Wähle die Bausteine aus und ziehe sie in die passenden Felder:</div>
    <div class="drag-group__pool" id="drag-group-pool"></div>
  `;
  wrapper.appendChild(poolCard);

  const poolEl = poolCard.querySelector('#drag-group-pool');

  // Populate pool items
  items.forEach((itemText, idx) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'drag-item';
    itemEl.setAttribute('data-item-id', idx);
    itemEl.setAttribute('data-item-text', itemText);

    const handleSpan = document.createElement('span');
    handleSpan.className = 'drag-item__handle';
    handleSpan.textContent = '⠿';

    const textSpan = document.createElement('span');
    textSpan.className = 'drag-item__text';
    const words = itemText.match(/[a-zA-ZäöüÄÖÜß]{3,}/g) || [];
    const isPureMath = words.length === 0 && /[0-9xya-z²³⁴⁵+\-·*\/=()^]/.test(itemText) && !/[=<>]{2,}/.test(itemText);
    renderMathInText(textSpan, itemText.includes('$') ? itemText : (isPureMath ? `$${itemText}$` : itemText));

    itemEl.appendChild(handleSpan);
    itemEl.appendChild(textSpan);
    poolEl.appendChild(itemEl);
  });

  // 2. Target Group Zones
  const zonesGrid = document.createElement('div');
  zonesGrid.className = 'drag-group__zones-grid';

  const zoneSortables = [];

  groups.forEach((g) => {
    const zoneCol = document.createElement('div');
    zoneCol.className = 'drag-group__zone-col glass-card';
    zoneCol.style.borderColor = g.color || 'var(--color-border)';

    const zoneHeader = document.createElement('div');
    zoneHeader.className = 'drag-group__zone-header';
    zoneHeader.style.background = g.color || 'var(--color-primary)';
    zoneHeader.style.color = '#fff';
    renderMathInText(zoneHeader, g.label);

    const zoneBody = document.createElement('div');
    zoneBody.className = 'drag-group__zone-body';
    zoneBody.setAttribute('data-group-id', g.id);

    zoneCol.appendChild(zoneHeader);
    zoneCol.appendChild(zoneBody);
    zonesGrid.appendChild(zoneCol);
  });

  wrapper.appendChild(zonesGrid);

  // 3. Confirm Submit Button
  const submitRow = document.createElement('div');
  submitRow.className = 'drag-group__submit-row';
  submitRow.innerHTML = `
    <button type="button" class="btn btn--primary btn--full" id="drag-group-submit" disabled>
      Zuordnung prüfen ✓
    </button>
  `;
  wrapper.appendChild(submitRow);

  container.appendChild(wrapper);

  const submitBtn = wrapper.querySelector('#drag-group-submit');

  function checkAllPlaced() {
    const poolRemaining = poolEl.children.length;
    submitBtn.disabled = poolRemaining > 0;
    if (poolRemaining === 0) {
      submitBtn.classList.add('btn--pulse');
    } else {
      submitBtn.classList.remove('btn--pulse');
    }
  }

  // SortableJS initialization
  const sortableConfig = {
    group: 'lottamath-drag-group',
    animation: 180,
    forceFallback: true,
    fallbackTolerance: 3,
    touchStartThreshold: 3,
    delay: 50,
    delayOnTouchOnly: true,
    ghostClass: 'drag-item--ghost',
    chosenClass: 'drag-item--chosen',
    dragClass: 'drag-item--dragging',
    onEnd: checkAllPlaced,
  };

  const poolSortable = new Sortable(poolEl, sortableConfig);
  zoneSortables.push(poolSortable);

  const zoneBodies = wrapper.querySelectorAll('.drag-group__zone-body');
  zoneBodies.forEach((zb) => {
    const s = new Sortable(zb, sortableConfig);
    zoneSortables.push(s);
  });

  function getResult() {
    const result = {};
    groups.forEach((g) => {
      const zb = wrapper.querySelector(`.drag-group__zone-body[data-group-id="${g.id}"]`);
      if (zb) {
        const itemsInGroup = Array.from(zb.children).map((el) => el.getAttribute('data-item-text'));
        result[g.id] = itemsInGroup;
      } else {
        result[g.id] = [];
      }
    });
    return result;
  }

  function onSubmit() {
    const res = getResult();
    onComplete(res);
  }

  submitBtn.addEventListener('click', onSubmit);

  return {
    getResult,
    destroy: () => {
      submitBtn.removeEventListener('click', onSubmit);
      zoneSortables.forEach((s) => s.destroy());
      wrapper.remove();
    },
  };
}

/**
 * ORDERING: Drag items into a sequenced vertical list
 */
export function renderDragOrder(container, options = {}) {
  if (!container) return null;

  const {
    items = [],
    onComplete = () => {},
  } = options;

  const wrapper = document.createElement('div');
  wrapper.className = 'drag-order';

  wrapper.innerHTML = `
    <div class="drag-order__instructions text-muted text-center" style="margin-bottom: 1rem;">
      👆 Bringe die Rechenschritte durch Ziehen in die richtige Reihenfolge:
    </div>
    <div class="drag-order__list" id="drag-order-list"></div>
    <div class="drag-order__submit-row" style="margin-top: 1.5rem;">
      <button type="button" class="btn btn--primary btn--full" id="drag-order-submit">
        Reihenfolge prüfen ✓
      </button>
    </div>
  `;

  const listEl = wrapper.querySelector('#drag-order-list');

  items.forEach((itemText) => {
    const row = document.createElement('div');
    row.className = 'drag-order__item glass-card';
    row.setAttribute('data-item-text', itemText);

    const handleSpan = document.createElement('span');
    handleSpan.className = 'drag-item__handle';
    handleSpan.textContent = '⠿';

    const textSpan = document.createElement('span');
    textSpan.className = 'drag-order__text';
    const words = itemText.match(/[a-zA-ZäöüÄÖÜß]{3,}/g) || [];
    const isPureMath = words.length === 0 && /[0-9xya-z²³⁴⁵+\-·*\/=()^]/.test(itemText) && !/[=<>]{2,}/.test(itemText);
    renderMathInText(textSpan, itemText.includes('$') ? itemText : (isPureMath ? `$${itemText}$` : itemText));

    row.appendChild(handleSpan);
    row.appendChild(textSpan);
    listEl.appendChild(row);
  });

  container.appendChild(wrapper);

  const sortable = new Sortable(listEl, {
    animation: 200,
    forceFallback: true,
    fallbackTolerance: 3,
    touchStartThreshold: 3,
    delay: 50,
    delayOnTouchOnly: true,
    ghostClass: 'drag-item--ghost',
  });

  const submitBtn = wrapper.querySelector('#drag-order-submit');

  function getResult() {
    return Array.from(listEl.children).map((el) => el.getAttribute('data-item-text'));
  }

  function onSubmit() {
    const res = getResult();
    onComplete(res);
  }

  submitBtn.addEventListener('click', onSubmit);

  return {
    getResult,
    destroy: () => {
      submitBtn.removeEventListener('click', onSubmit);
      sortable.destroy();
      wrapper.remove();
    },
  };
}
