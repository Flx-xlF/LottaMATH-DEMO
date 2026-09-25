/**
 * Visual Math Component for LottaMATH
 * Renders Glassmorphic Area Models (Flächenmodelle) and Algebra Tiles (Algebrasteine).
 * Optimized for iPad touch, dark/light themes, and clear visual-algebra mapping.
 */

import { renderMath, renderMathInText } from './mathRenderer.js';
import { renderAnimatedVisual } from './animatedVisuals.js';

/**
 * Unified Dispatcher: Renders any visual model based on config type
 * @param {HTMLElement} container
 * @param {Object} config - { type: 'area-model' | 'algebra-tiles' | 'animated-svg' | 'custom-svg', ... }
 * @returns {{ destroy?: () => void }}
 */
export function renderVisualModel(container, config) {
  if (!container || !config) return { destroy: () => {} };
  container.innerHTML = '';

  if (config.type === 'animated-svg') {
    return renderAnimatedVisual(container, config);
  } else if (config.type === 'area-model' || config.model === 'area') {
    renderAreaModel(container, config);
    return { destroy: () => {} };
  } else if (config.type === 'algebra-tiles' || config.model === 'tiles') {
    renderAlgebraTiles(container, config);
    return { destroy: () => {} };
  } else if (config.type === 'custom-svg') {
    container.innerHTML = config.svg || '';
    return { destroy: () => {} };
  }
  return { destroy: () => {} };
}

/**
 * Renders a Glassmorphic Area Model (Flächenmodell)
 * Used for Distributive Law, Double Parentheses, and Binomial Formulas.
 * 
 * @param {HTMLElement} container 
 * @param {Object} options
 * @param {string} [options.title] - Optional title/formula above model
 * @param {Array<{label: string, color?: string}>|Array<string>} options.cols - Column headers/lengths (e.g. ['a', 'b'] or ['x', '3'])
 * @param {Array<{label: string, color?: string}>|Array<string>} options.rows - Row headers/lengths (e.g. ['a', 'b'] or ['2'])
 * @param {Array<Array<{label: string, sublabel?: string, color?: string, highlight?: boolean}>>|Array<Array<string>>} options.cells - Grid cell contents
 * @param {string} [options.summary] - Bottom takeaway formula e.g. "$(a+b)^2 = a^2 + 2ab + b^2$"
 */
export function renderAreaModel(container, options = {}) {
  if (!container) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'visual-model visual-area-model glass-panel';

  if (options.title) {
    const titleEl = document.createElement('div');
    titleEl.className = 'visual-model-title';
    renderMathInText(titleEl, options.title);
    wrapper.appendChild(titleEl);
  }

  // Normalize cols and rows
  const cols = (options.cols || ['a', 'b']).map(c => typeof c === 'string' ? { label: c } : c);
  const rows = (options.rows || ['a', 'b']).map(r => typeof r === 'string' ? { label: r } : r);
  const cells = options.cells || [
    [{ label: 'a^2' }, { label: 'ab' }],
    [{ label: 'ab' }, { label: 'b^2' }]
  ];

  const gridContainer = document.createElement('div');
  gridContainer.className = 'area-model-grid-container';

  // The grid layout: Top-left empty corner, Column headers on top, Row headers on left, Cells in center
  const grid = document.createElement('div');
  grid.className = 'area-model-grid';
  grid.style.gridTemplateColumns = `auto ${cols.map(() => '1fr').join(' ')}`;
  grid.style.gridTemplateRows = `auto ${rows.map(() => '1fr').join(' ')}`;

  // 1. Top-Left Corner (Empty / Dimensions icon)
  const corner = document.createElement('div');
  corner.className = 'area-grid-corner';
  corner.innerHTML = '<span class="area-corner-icon">×</span>';
  grid.appendChild(corner);

  // 2. Top Column Headers (Widths)
  cols.forEach((col, cIdx) => {
    const colHeader = document.createElement('div');
    colHeader.className = `area-grid-col-header area-header-color-${(cIdx % 4) + 1}`;
    const span = document.createElement('span');
    span.className = 'area-header-label';
    renderMathInText(span, col.label.startsWith('$') ? col.label : `$${col.label}$`);
    colHeader.appendChild(span);
    grid.appendChild(colHeader);
  });

  // 3. Rows and Cells
  rows.forEach((row, rIdx) => {
    // Row Header (Height)
    const rowHeader = document.createElement('div');
    rowHeader.className = `area-grid-row-header area-header-color-${(rIdx % 4) + 1}`;
    const span = document.createElement('span');
    span.className = 'area-header-label';
    renderMathInText(span, row.label.startsWith('$') ? row.label : `$${row.label}$`);
    rowHeader.appendChild(span);
    grid.appendChild(rowHeader);

    // Cells in this row
    cols.forEach((_, cIdx) => {
      const cellData = cells[rIdx] && cells[rIdx][cIdx] ? cells[rIdx][cIdx] : { label: '' };
      const cellObj = typeof cellData === 'string' ? { label: cellData } : cellData;

      const cell = document.createElement('div');
      cell.className = `area-grid-cell area-cell-r${rIdx}-c${cIdx}`;
      if (cellObj.highlight) cell.classList.add('area-cell-highlight');
      if (cellObj.color) cell.style.setProperty('--cell-accent', cellObj.color);

      const cellContent = document.createElement('div');
      cellContent.className = 'area-cell-content';

      const labelSpan = document.createElement('div');
      labelSpan.className = 'area-cell-math';
      renderMathInText(labelSpan, cellObj.label.startsWith('$') ? cellObj.label : `$${cellObj.label}$`);
      cellContent.appendChild(labelSpan);

      if (cellObj.sublabel) {
        const sub = document.createElement('div');
        sub.className = 'area-cell-sublabel';
        sub.textContent = cellObj.sublabel;
        cellContent.appendChild(sub);
      }

      cell.appendChild(cellContent);
      grid.appendChild(cell);
    });
  });

  gridContainer.appendChild(grid);
  wrapper.appendChild(gridContainer);

  // Summary / Bottom formula
  if (options.summary) {
    const summaryEl = document.createElement('div');
    summaryEl.className = 'visual-model-summary';
    renderMathInText(summaryEl, options.summary);
    wrapper.appendChild(summaryEl);
  }

  container.appendChild(wrapper);
}

/**
 * Renders Glassmorphic Algebra Tiles (Algebrasteine)
 * Used for Combining Like Terms (World 1) and Negative Signs.
 * 
 * @param {HTMLElement} container 
 * @param {Object} options
 * @param {string} [options.title] - Title/Expression
 * @param {Array<{type: 'x2'|'x'|'unit', sign: '+'|'-', count: number, label?: string}>} options.groups - Groups of tiles
 * @param {string} [options.summary] - Simplification result e.g. "$3x - 2x = 1x$"
 */
export function renderAlgebraTiles(container, options = {}) {
  if (!container) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'visual-model visual-tiles-model glass-panel';

  if (options.title) {
    const titleEl = document.createElement('div');
    titleEl.className = 'visual-model-title';
    renderMathInText(titleEl, options.title);
    wrapper.appendChild(titleEl);
  }

  const board = document.createElement('div');
  board.className = 'tiles-board';

  const groups = options.groups || [];

  groups.forEach((grp, gIdx) => {
    const groupEl = document.createElement('div');
    groupEl.className = `tiles-group tiles-group-${grp.sign === '-' ? 'negative' : 'positive'}`;

    if (grp.label) {
      const groupLabel = document.createElement('div');
      groupLabel.className = 'tiles-group-label';
      renderMathInText(groupLabel, grp.label.startsWith('$') ? grp.label : `$${grp.label}$`);
      groupEl.appendChild(groupLabel);
    }

    const tilesContainer = document.createElement('div');
    tilesContainer.className = 'tiles-container';

    const count = Math.min(Math.max(grp.count || 1, 1), 12); // Guard max 12
    const tileType = grp.type || 'x'; // 'x2', 'x', 'unit'
    const sign = grp.sign || '+';

    for (let i = 0; i < count; i++) {
      const tile = document.createElement('div');
      tile.className = `algebra-tile tile-${tileType} tile-${sign === '-' ? 'neg' : 'pos'}`;
      tile.title = `${sign}${tileType === 'unit' ? '1' : tileType}`;

      const tileInner = document.createElement('span');
      tileInner.className = 'tile-label';
      let mathText = '';
      if (tileType === 'x2') mathText = sign === '-' ? '$-x^2$' : '$x^2$';
      else if (tileType === 'x') mathText = sign === '-' ? '$-x$' : '$x$';
      else mathText = sign === '-' ? '$-1$' : '$+1$';

      renderMathInText(tileInner, mathText);
      tile.appendChild(tileInner);
      tilesContainer.appendChild(tile);
    }

    groupEl.appendChild(tilesContainer);
    board.appendChild(groupEl);

    // If not last group, add visual operator
    if (gIdx < groups.length - 1 && !grp.hideOperator) {
      const op = document.createElement('div');
      op.className = 'tiles-operator';
      op.textContent = groups[gIdx + 1].sign === '-' ? '' : '+';
      board.appendChild(op);
    }
  });

  wrapper.appendChild(board);

  if (options.summary) {
    const summaryEl = document.createElement('div');
    summaryEl.className = 'visual-model-summary';
    renderMathInText(summaryEl, options.summary);
    wrapper.appendChild(summaryEl);
  }

  container.appendChild(wrapper);
}
