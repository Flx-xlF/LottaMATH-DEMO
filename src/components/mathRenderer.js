/**
 * KaTeX Math Renderer Component for LottaMATH
 * Renders LaTeX formulas and inline math formatted between $...$ and $$...$$ delimiters,
 * with full Markdown support (bold, italic) and LaTeX symbol sanitization.
 */

import katex from 'katex';

/**
 * Sanitizes and normalizes LaTeX strings for KaTeX compatibility
 * (Unicode superscripts, multiplication dots, unicode minuses, etc.)
 * @param {string} rawLatex
 * @returns {string}
 */
export function sanitizeLatex(rawLatex = '') {
  return String(rawLatex)
    .replace(/[²]/g, '^2')
    .replace(/[³]/g, '^3')
    .replace(/[⁴]/g, '^4')
    .replace(/[⁵]/g, '^5')
    .replace(/[·*]/g, ' \\cdot ')
    .replace(/[×]/g, ' \\times ')
    .replace(/[−–—]/g, '-')
    .trim();
}

/**
 * Renders a single LaTeX math expression into a container element
 * @param {HTMLElement} container 
 * @param {string} latex 
 * @param {Object} options - { displayMode: boolean }
 */
export function renderMath(container, latex = '', options = {}) {
  if (!container) return;
  const cleanLatex = sanitizeLatex(latex);
  if (!cleanLatex) {
    container.innerHTML = '';
    return;
  }

  try {
    katex.render(cleanLatex, container, {
      displayMode: options.displayMode !== undefined ? options.displayMode : false,
      throwOnError: false,
      output: 'html',
    });
  } catch (err) {
    console.warn('KaTeX render error:', err);
    container.textContent = cleanLatex;
  }
}

/**
 * Parses markdown inline formatting (bold, italic, code) into a parent DOM node
 * @param {HTMLElement} parent 
 * @param {string} text 
 */
function parseMarkdownFormatting(parent, text = '') {
  if (!text) return;

  // Regex matches: **bold**, *italic*, `code`
  const mdRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
  const parts = text.split(mdRegex);

  for (const part of parts) {
    if (!part) continue;

    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      const strong = document.createElement('strong');
      renderMathInText(strong, part.slice(2, -2));
      parent.appendChild(strong);
    } else if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      const em = document.createElement('em');
      renderMathInText(em, part.slice(1, -1));
      parent.appendChild(em);
    } else if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      const code = document.createElement('code');
      code.textContent = part.slice(1, -1);
      parent.appendChild(code);
    } else {
      parent.appendChild(document.createTextNode(part));
    }
  }
}

/**
 * Parses mixed text containing inline LaTeX ($...$ / $$...$$) and Markdown,
 * rendering math with KaTeX and formatting tags into DOM elements.
 * @param {HTMLElement} container 
 * @param {string} text 
 */
export function renderMathInText(container, text = '') {
  if (!container) return;
  container.innerHTML = '';

  const cleanText = String(text);
  if (!cleanText.includes('$')) {
    parseMarkdownFormatting(container, cleanText);
    return;
  }

  // Split by $$...$$ and $...$ delimiters
  const segments = cleanText.split(/(\$\$[^$]+\$\$|\$[^$]+\$)/g);

  for (const seg of segments) {
    if (!seg) continue;

    if (seg.startsWith('$$') && seg.endsWith('$$') && seg.length > 4) {
      const mathSpan = document.createElement('span');
      mathSpan.className = 'math-display-inline';
      const latex = seg.slice(2, -2);
      renderMath(mathSpan, latex, { displayMode: true });
      container.appendChild(mathSpan);
    } else if (seg.startsWith('$') && seg.endsWith('$') && seg.length > 2) {
      const mathSpan = document.createElement('span');
      mathSpan.className = 'math-inline';
      const latex = seg.slice(1, -1);
      renderMath(mathSpan, latex, { displayMode: false });
      container.appendChild(mathSpan);
    } else {
      parseMarkdownFormatting(container, seg);
    }
  }
}

