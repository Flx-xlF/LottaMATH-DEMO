/**
 * Animated Visuals Component for LottaMATH
 * High-quality SVG animations orchestrated with Anime.js for Chapter Intros (Worlds 4, 5, etc.)
 * Provides geometric proofs, spatial transformations, and KaTeX math overlays.
 */

import { createTimeline } from 'animejs';
import { renderMathInText } from './mathRenderer.js';

/**
 * Main dispatcher for animated SVG visuals
 * @param {HTMLElement} container
 * @param {Object} config - { type: 'animated-svg', animationId: string, title?: string, summary?: string }
 * @returns {{ destroy: () => void }} Lifecycle cleanup controller
 */
export function renderAnimatedVisual(container, config) {
  if (!container || !config) return { destroy: () => {} };

  container.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'animated-visual-wrapper glass-panel flex-col align-center';

  if (config.title) {
    const titleEl = document.createElement('div');
    titleEl.className = 'animated-visual-title text-center';
    renderMathInText(titleEl, config.title);
    wrapper.appendChild(titleEl);
  }

  const stageEl = document.createElement('div');
  stageEl.className = 'animated-visual-stage';
  wrapper.appendChild(stageEl);

  const formulaEl = document.createElement('div');
  formulaEl.className = 'animated-visual-formula text-center';
  if (config.summary) {
    renderMathInText(formulaEl, config.summary);
  }
  wrapper.appendChild(formulaEl);

  container.appendChild(wrapper);

  let activeAnimation = null;

  switch (config.animationId) {
    case 'binom-expansion':
      activeAnimation = initBinomExpansion(stageEl, formulaEl, config);
      break;
    case 'binom-diff-squares':
      activeAnimation = initBinomDiffSquares(stageEl, formulaEl, config);
      break;
    case 'binom-subtraction':
      activeAnimation = initBinomSubtraction(stageEl, formulaEl, config);
      break;
    case 'parallelogram-shear':
      activeAnimation = initParallelogramShear(stageEl, formulaEl, config);
      break;
    case 'triangle-split':
      activeAnimation = initTriangleSplit(stageEl, formulaEl, config);
      break;
    case 'l-shape-split':
      activeAnimation = initLShapeSplit(stageEl, formulaEl, config);
      break;
    default:
      console.warn(`[renderAnimatedVisual] Unknown animationId: ${config.animationId}`);
      break;
  }

  return {
    destroy: () => {
      if (activeAnimation && typeof activeAnimation.destroy === 'function') {
        activeAnimation.destroy();
      }
      wrapper.remove();
    },
  };
}

// --------------------------------------------------------------------------
// 1. Binomische Formel: (a + b)² = a² + 2ab + b²
// --------------------------------------------------------------------------
function initBinomExpansion(stage, formulaEl, config) {
  stage.innerHTML = `
    <svg viewBox="0 0 380 290" class="animated-visual-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradients -->
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#fb7185" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.25"/>
        </linearGradient>
      </defs>

      <!-- Dimension Guides & Brackets (Top & Left) -->
      <g id="binom-dimensions" style="opacity: 0;">
        <!-- Top 'a' -->
        <line x1="85" y1="28" x2="225" y2="28" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="85" y1="23" x2="85" y2="33" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="225" y1="23" x2="225" y2="33" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="155" y="22" fill="#06b6d4" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">a</text>

        <!-- Top 'b' -->
        <line x1="225" y1="28" x2="285" y2="28" stroke="#f43f5e" stroke-width="1.5"/>
        <line x1="285" y1="23" x2="285" y2="33" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="255" y="22" fill="#f43f5e" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">b</text>

        <!-- Left 'a' -->
        <line x1="68" y1="40" x2="68" y2="180" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="63" y1="40" x2="73" y2="40" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="63" y1="180" x2="73" y2="180" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="58" y="115" fill="#06b6d4" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="end">a</text>

        <!-- Left 'b' -->
        <line x1="68" y1="180" x2="68" y2="240" stroke="#f43f5e" stroke-width="1.5"/>
        <line x1="63" y1="240" x2="73" y2="240" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="58" y="215" fill="#f43f5e" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="end">b</text>

        <!-- Outer Bounding Outline (a + b) -->
        <rect x="85" y="40" width="200" height="200" fill="none" stroke="rgba(255, 255, 255, 0.25)" stroke-width="2" stroke-dasharray="6 4" rx="4"/>
      </g>

      <!-- 1. Blue Square a² -->
      <g id="binom-square-a" style="opacity: 0; transform-origin: 85px 40px;">
        <rect x="85" y="40" width="140" height="140" fill="url(#blueGrad)" stroke="#06b6d4" stroke-width="2.5" rx="4"/>
        <text x="155" y="117" fill="#38bdf8" font-size="20" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">a²</text>
      </g>

      <!-- 2. Pink Rect ab (Right) -->
      <g id="binom-rect-ab-right" style="opacity: 0; transform-origin: 225px 40px;">
        <rect x="225" y="40" width="60" height="140" fill="url(#pinkGrad)" stroke="#f43f5e" stroke-width="2.5" rx="4"/>
        <text x="255" y="117" fill="#fb7185" font-size="16" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">ab</text>
      </g>

      <!-- 3. Pink Rect ab (Bottom) -->
      <g id="binom-rect-ab-bottom" style="opacity: 0; transform-origin: 85px 180px;">
        <rect x="85" y="180" width="140" height="60" fill="url(#pinkGrad)" stroke="#f43f5e" stroke-width="2.5" rx="4"/>
        <text x="155" y="217" fill="#fb7185" font-size="16" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">ab</text>
      </g>

      <!-- 4. Orange Square b² (Corner) -->
      <g id="binom-square-b" style="opacity: 0; transform-origin: 255px 210px;">
        <rect x="225" y="180" width="60" height="60" fill="url(#orangeGrad)" stroke="#f59e0b" stroke-width="2.5" rx="4"/>
        <text x="255" y="217" fill="#fbbf24" font-size="16" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">b²</text>
      </g>

      <!-- Total Area Summary Badge -->
      <g id="binom-summary-badge" style="opacity: 0;">
        <rect x="75" y="255" width="230" height="28" rx="14" fill="rgba(15, 23, 42, 0.75)" stroke="rgba(255, 255, 255, 0.2)"/>
        <text x="190" y="274" fill="#f8fafc" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">
          Gesamtfläche = a² + 2ab + b²
        </text>
      </g>
    </svg>
  `;

  const squareA = stage.querySelector('#binom-square-a');
  const rectRight = stage.querySelector('#binom-rect-ab-right');
  const rectBottom = stage.querySelector('#binom-rect-ab-bottom');
  const squareB = stage.querySelector('#binom-square-b');
  const dimensions = stage.querySelector('#binom-dimensions');
  const badge = stage.querySelector('#binom-summary-badge');

  const tl = createTimeline({
    loop: true,
    loopDelay: 3500,
    defaults: {
      ease: 'outQuad',
    },
  });

  tl
    // Step 1: Blue square a² appears
    .add(squareA, { opacity: [0, 1], scale: [0.85, 1], duration: 700 }, 200)
    // Step 2: Right rectangle ab slides/fades in
    .add(rectRight, { opacity: [0, 1], scaleX: [0, 1], duration: 600 }, 900)
    // Step 3: Bottom rectangle ab slides/fades in
    .add(rectBottom, { opacity: [0, 1], scaleY: [0, 1], duration: 600 }, 1500)
    // Step 4: Corner square b² pops in
    .add(squareB, { opacity: [0, 1], scale: [0.3, 1], duration: 550, ease: 'outBack' }, 2100)
    // Step 5: Dimensions & outline bracket appear
    .add(dimensions, { opacity: [0, 1], duration: 600 }, 2650)
    // Step 6: Bottom badge & formula highlight
    .add(badge, { opacity: [0, 1], scale: [0.9, 1], duration: 500 }, 3200)
    .add(formulaEl, { opacity: [0.4, 1], duration: 500 }, 3200);

  return {
    destroy: () => {
      tl.cancel();
    },
  };
}

// --------------------------------------------------------------------------
// 2. Parallelogramm-Scherung: A = g · h (World 5, Example 1)
// --------------------------------------------------------------------------
function initParallelogramShear(stage, formulaEl, config) {
  // Parallelogram geometry:
  // Base g = 160, Height h = 90, Slant dx = 60
  // Left apex at (120, 45), bottom left at (60, 135)
  // Cut line at x=120 drops vertically from (120, 45) to (120, 135)
  // Left Triangle T1: (60, 135) -> (120, 135) -> (120, 45)
  // Trapezoid T2: (120, 45) -> (280, 45) -> (220, 135) -> (120, 135)
  // When T1 translates by dx = +160:
  // (60, 135)+160 = (220, 135)
  // (120, 135)+160 = (280, 135)
  // (120, 45)+160 = (280, 45)
  // Forms a perfect rectangle from (120, 45) to (280, 135)! Width = 160, Height = 90.

  stage.innerHTML = `
    <svg viewBox="0 0 380 230" class="animated-visual-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="paraGradMain" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#059669" stop-opacity="0.15"/>
        </linearGradient>
        <linearGradient id="paraGradCut" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.2"/>
        </linearGradient>
      </defs>

      <!-- Background Grid Indicator -->
      <g stroke="rgba(255, 255, 255, 0.05)" stroke-width="1">
        <line x1="40" y1="45" x2="340" y2="45"/>
        <line x1="40" y1="90" x2="340" y2="90"/>
        <line x1="40" y1="135" x2="340" y2="135"/>
        <line x1="120" y1="30" x2="120" y2="170"/>
        <line x1="280" y1="30" x2="280" y2="170"/>
      </g>

      <!-- Trapezoid Rest Part (T2) -->
      <polygon id="para-body" points="120,45 280,45 220,135 120,135" 
        fill="url(#paraGradMain)" stroke="#10b981" stroke-width="2.5"/>

      <!-- Moving Left Triangle (T1) -->
      <g id="para-cut-triangle">
        <polygon points="60,135 120,135 120,45" 
          fill="url(#paraGradCut)" stroke="#3b82f6" stroke-width="2.5"/>
        <!-- Interior label -->
        <text x="100" y="110" fill="#93c5fd" font-size="12" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">✂️ Cut</text>
      </g>

      <!-- Snapped Rectangle Ghost/Outline -->
      <rect id="para-snap-outline" x="120" y="45" width="160" height="90" rx="3"
        fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6 4" style="opacity: 0;"/>

      <!-- Vertical Height ha Guideline -->
      <g id="para-height-guide">
        <line x1="120" y1="45" x2="120" y2="135" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 3"/>
        <!-- Right angle square -->
        <rect x="120" y="123" width="12" height="12" fill="none" stroke="#ef4444" stroke-width="1.5"/>
        <circle cx="126" cy="129" r="1.5" fill="#ef4444"/>
        <text x="135" y="95" fill="#ef4444" font-size="13" font-weight="700" font-family="Outfit, sans-serif">h</text>
      </g>

      <!-- Base Dimension g -->
      <g id="para-base-dim">
        <line x1="60" y1="155" x2="220" y2="155" stroke="#10b981" stroke-width="2"/>
        <line x1="60" y1="150" x2="60" y2="160" stroke="#10b981" stroke-width="2"/>
        <line x1="220" y1="150" x2="220" y2="160" stroke="#10b981" stroke-width="2"/>
        <text id="para-base-text" x="140" y="173" fill="#10b981" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">Grundseite g</text>
      </g>

      <!-- Result Banner -->
      <g id="para-result-banner" style="opacity: 0;">
        <rect x="70" y="190" width="240" height="30" rx="15" fill="rgba(15, 23, 42, 0.85)" stroke="#10b981" stroke-width="1.5"/>
        <text x="190" y="210" fill="#34d399" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">
          Rechteckfläche = g · h
        </text>
      </g>
    </svg>
  `;

  const cutTriangle = stage.querySelector('#para-cut-triangle');
  const snapOutline = stage.querySelector('#para-snap-outline');
  const resultBanner = stage.querySelector('#para-result-banner');
  const baseDim = stage.querySelector('#para-base-dim');

  const tl = createTimeline({
    loop: true,
    loopDelay: 3500,
    defaults: {
      ease: 'easeInOutQuad',
    },
  });

  tl
    // Initial hold on parallelogram
    .add(cutTriangle, { translateX: 0, duration: 800 }, 0)
    // Triangle slides smoothly +160px across to form rectangle
    .add(cutTriangle, { translateX: 160, duration: 1400 }, 1000)
    // Base dimension shifts to show rectangle width
    .add(baseDim, { translateX: 60, duration: 1200 }, 1100)
    // Snap outline illuminates the resulting rectangle
    .add(snapOutline, { opacity: [0, 1], duration: 450 }, 2400)
    // Banner and formula pulse
    .add(resultBanner, { opacity: [0, 1], scale: [0.92, 1], duration: 500 }, 2700)
    .add(formulaEl, { opacity: [0.4, 1], duration: 500 }, 2700);

  return {
    destroy: () => {
      tl.cancel();
    },
  };
}

// --------------------------------------------------------------------------
// 3. Dreieck als halbes Rechteck: A = (g · h) / 2 (World 5, Example 2)
// --------------------------------------------------------------------------
function initTriangleSplit(stage, formulaEl, config) {
  // Rectangle: Width g = 180, Height h = 95
  // Top-left at (100, 45), bottom-right at (280, 140)
  // Diagonal cut from (100, 140) to (280, 45)
  // Bottom Triangle: (100, 140) -> (280, 140) -> (280, 45)
  // Top Triangle: (100, 140) -> (100, 45) -> (280, 45)

  stage.innerHTML = `
    <svg viewBox="0 0 380 230" class="animated-visual-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="triMainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="triTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#64748b" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#475569" stop-opacity="0.15"/>
        </linearGradient>
      </defs>

      <!-- Full Rectangle Bounding Box Guide -->
      <rect id="tri-full-rect" x="100" y="45" width="180" height="95" rx="3"
        fill="none" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5" stroke-dasharray="4 3"/>

      <!-- Target Bottom Triangle (The Fensterscheibe) -->
      <g id="tri-bottom">
        <polygon points="100,140 280,140 280,45" 
          fill="url(#triMainGrad)" stroke="#06b6d4" stroke-width="2.5"/>
        <text id="tri-bottom-label" x="220" y="115" fill="#38bdf8" font-size="14" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">
          Dreieck: A = (g·h)/2
        </text>
      </g>

      <!-- Top Triangle (Separating half) -->
      <g id="tri-top" style="transform-origin: 190px 92px;">
        <polygon points="100,140 100,45 280,45" 
          fill="url(#triTopGrad)" stroke="#64748b" stroke-width="2"/>
        <text id="tri-top-label" x="160" y="75" fill="#94a3b8" font-size="12" font-weight="600" font-family="Outfit, sans-serif" text-anchor="middle">
          2. Hälfte (Verschnitt)
        </text>
      </g>

      <!-- Diagonal Laser / Cut Line -->
      <line id="tri-cut-line" x1="100" y1="140" x2="280" y2="45" 
        stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="6 3" style="opacity: 0;"/>

      <!-- Scissor Icon -->
      <text id="tri-cut-icon" x="90" y="145" font-size="16" style="opacity: 0;">✂️</text>

      <!-- Dimensions -->
      <!-- Ground base g -->
      <g id="tri-dim-g">
        <line x1="100" y1="158" x2="280" y2="158" stroke="#06b6d4" stroke-width="2"/>
        <line x1="100" y1="153" x2="100" y2="163" stroke="#06b6d4" stroke-width="2"/>
        <line x1="280" y1="153" x2="280" y2="163" stroke="#06b6d4" stroke-width="2"/>
        <text x="190" y="175" fill="#06b6d4" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">
          g = 2.50 m
        </text>
      </g>

      <!-- Height h -->
      <g id="tri-dim-h">
        <line x1="295" y1="45" x2="295" y2="140" stroke="#3b82f6" stroke-width="2"/>
        <line x1="290" y1="45" x2="300" y2="45" stroke="#3b82f6" stroke-width="2"/>
        <line x1="290" y1="140" x2="300" y2="140" stroke="#3b82f6" stroke-width="2"/>
        <text x="306" y="97" fill="#3b82f6" font-size="13" font-weight="700" font-family="Outfit, sans-serif">
          h = 3.00 m
        </text>
      </g>

      <!-- Result Takeaway Banner -->
      <g id="tri-banner" style="opacity: 0;">
        <rect x="75" y="190" width="230" height="30" rx="15" fill="rgba(15, 23, 42, 0.85)" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="190" y="210" fill="#38bdf8" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">
          Genau 1/2 der Rechteckfläche!
        </text>
      </g>
    </svg>
  `;

  const topTri = stage.querySelector('#tri-top');
  const bottomTri = stage.querySelector('#tri-bottom');
  const cutLine = stage.querySelector('#tri-cut-line');
  const cutIcon = stage.querySelector('#tri-cut-icon');
  const banner = stage.querySelector('#tri-banner');

  const tl = createTimeline({
    loop: true,
    loopDelay: 3500,
    defaults: {
      ease: 'easeInOutQuad',
    },
  });

  tl
    // Hold together as whole rectangle
    .add(cutLine, { opacity: [0, 1], duration: 400 }, 500)
    .add(cutIcon, { opacity: [0, 1], translateX: [0, 180], translateY: [0, -95], duration: 800 }, 500)
    // Top triangle separates by shifting up and left, fades to 0.3 opacity
    .add(topTri, { translateX: -16, translateY: -12, opacity: [1, 0.3], duration: 1100 }, 1400)
    // Bottom triangle scales up slightly and glows
    .add(bottomTri, { scale: [1, 1.03], duration: 600, ease: 'outBack' }, 2200)
    // Banner appears
    .add(banner, { opacity: [0, 1], scale: [0.92, 1], duration: 500 }, 2600)
    .add(formulaEl, { opacity: [0.4, 1], duration: 500 }, 2600);

  return {
    destroy: () => {
      tl.cancel();
    },
  };
}

// --------------------------------------------------------------------------
// 4. 3. Binomische Formel: a² - b² = (a - b)(a + b) (World 4, Example 2)
// --------------------------------------------------------------------------
function initBinomDiffSquares(stage, formulaEl, config) {
  stage.innerHTML = `
    <svg viewBox="0 0 380 270" class="animated-visual-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="diffBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="diffPurple" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#6366f1" stop-opacity="0.25"/>
        </linearGradient>
        <linearGradient id="diffCut" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#e11d48" stop-opacity="0.3"/>
        </linearGradient>
      </defs>

      <!-- Dimension Guides (a = 50) -->
      <g id="diff-dims-initial">
        <line x1="60" y1="22" x2="200" y2="22" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="60" y1="17" x2="60" y2="27" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="200" y1="17" x2="200" y2="27" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="130" y="16" fill="#06b6d4" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">a = 50</text>

        <line x1="48" y1="35" x2="48" y2="175" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="43" y1="35" x2="53" y2="35" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="43" y1="175" x2="53" y2="175" stroke="#06b6d4" stroke-width="1.5"/>
        <text x="40" y="110" fill="#06b6d4" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="end">a = 50</text>
      </g>

      <!-- Main Piece (Top rect: x=60, y=35, width=140, height=105) -->
      <g id="diff-top-rect">
        <rect x="60" y="35" width="140" height="105" fill="url(#diffBlue)" stroke="#06b6d4" stroke-width="2.5" rx="3"/>
        <text x="130" y="95" fill="#38bdf8" font-size="16" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">50 · 49</text>
      </g>

      <!-- Movable Strip (Bottom rect: x=60, y=140, width=105, height=35) -->
      <g id="diff-strip" style="transform-origin: 60px 140px;">
        <rect x="60" y="140" width="105" height="35" fill="url(#diffPurple)" stroke="#8b5cf6" stroke-width="2.5" rx="3"/>
        <text id="diff-strip-text" x="112" y="163" fill="#c084fc" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">1 · 49</text>
      </g>

      <!-- Cut Corner b²: x=165, y=140, width=35, height=35 -->
      <g id="diff-corner-b" style="transform-origin: 182px 157px;">
        <rect x="165" y="140" width="35" height="35" fill="url(#diffCut)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3" rx="3"/>
        <text x="182" y="162" fill="#fb7185" font-size="12" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">−1²</text>
      </g>

      <!-- Dimensions (Final: width 51, height 49) -->
      <g id="diff-dims-final" style="opacity: 0;">
        <line x1="60" y1="22" x2="235" y2="22" stroke="#10b981" stroke-width="2"/>
        <line x1="60" y1="16" x2="60" y2="28" stroke="#10b981" stroke-width="2"/>
        <line x1="235" y1="16" x2="235" y2="28" stroke="#10b981" stroke-width="2"/>
        <text x="147" y="15" fill="#10b981" font-size="13" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">(50 + 1) = 51</text>

        <line x1="48" y1="35" x2="48" y2="140" stroke="#f59e0b" stroke-width="2"/>
        <line x1="43" y1="35" x2="53" y2="35" stroke="#f59e0b" stroke-width="2"/>
        <line x1="43" y1="140" x2="53" y2="140" stroke="#f59e0b" stroke-width="2"/>
        <text x="40" y="92" fill="#f59e0b" font-size="13" font-weight="800" font-family="Outfit, sans-serif" text-anchor="end">(50 − 1) = 49</text>
      </g>

      <!-- Summary Badge -->
      <g id="diff-banner" style="opacity: 0;">
        <rect x="55" y="225" width="270" height="30" rx="15" fill="rgba(15, 23, 42, 0.85)" stroke="rgba(255, 255, 255, 0.2)"/>
        <text x="190" y="245" fill="#f8fafc" font-size="13" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">
          49 · 51 = 50² − 1² = 2499
        </text>
      </g>
    </svg>
  `;

  const cornerB = stage.querySelector('#diff-corner-b');
  const strip = stage.querySelector('#diff-strip');
  const dimsInit = stage.querySelector('#diff-dims-initial');
  const dimsFinal = stage.querySelector('#diff-dims-final');
  const banner = stage.querySelector('#diff-banner');

  const tl = createTimeline({
    loop: true,
    loopDelay: 3500,
    defaults: {
      ease: 'easeInOutQuad',
    },
  });

  tl
    // Corner -b² flashes and disappears
    .add(cornerB, { scale: [1, 1.25, 0], opacity: [1, 1, 0], duration: 800 }, 900)
    // Strip transforms: moves to the right of the main piece
    .add(strip, { translateX: 140, translateY: -105, duration: 1100 }, 1800)
    // Switch dimensions from initial 50x50 to 51x49
    .add(dimsInit, { opacity: [1, 0], duration: 400 }, 2100)
    .add(dimsFinal, { opacity: [0, 1], duration: 600 }, 2500)
    // Formula banner
    .add(banner, { opacity: [0, 1], scale: [0.92, 1], duration: 500 }, 2900)
    .add(formulaEl, { opacity: [0.4, 1], duration: 500 }, 2900);

  return {
    destroy: () => {
      tl.cancel();
    },
  };
}

// --------------------------------------------------------------------------
// 5. Zusammengesetzte Flächen: L-Form Zerlegung (World 7, Example 1)
// --------------------------------------------------------------------------
function initLShapeSplit(stage, formulaEl, config) {
  stage.innerHTML = `
    <svg viewBox="0 0 380 250" class="animated-visual-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lshapeR1Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="lshapeR2Grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.2"/>
        </linearGradient>
      </defs>

      <!-- Rectangle 1 (R1 - Left piece) -->
      <g id="lshape-r1" style="transform-origin: 110px 100px;">
        <rect x="60" y="30" width="100" height="140" rx="3" fill="url(#lshapeR1Grad)" stroke="#06b6d4" stroke-width="2.5"/>
        <text id="lshape-r1-label" x="110" y="85" fill="#38bdf8" font-size="15" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">
          R₁
        </text>
        <text id="lshape-r1-sub" x="110" y="108" fill="#bae6fd" font-size="12" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle" style="opacity: 0;">
          12,96 m²
        </text>
        <!-- R1 dimension indicators -->
        <text x="50" y="105" fill="#06b6d4" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">3,6 m</text>
        <text x="110" y="22" fill="#06b6d4" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">3,6 m</text>
      </g>

      <!-- Rectangle 2 (R2 - Right piece) -->
      <g id="lshape-r2" style="transform-origin: 220px 130px;">
        <rect x="160" y="90" width="120" height="80" rx="3" fill="url(#lshapeR2Grad)" stroke="#f59e0b" stroke-width="2.5"/>
        <text id="lshape-r2-label" x="220" y="125" fill="#fbbf24" font-size="15" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">
          R₂
        </text>
        <text id="lshape-r2-sub" x="220" y="148" fill="#fde68a" font-size="12" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle" style="opacity: 0;">
          14,40 m²
        </text>
        <!-- R2 dimension indicators -->
        <text x="220" y="186" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">6,0 m</text>
        <text x="290" y="135" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="start">2,4 m</text>
      </g>

      <!-- Vertical Cut Line with Scissor -->
      <g id="lshape-cut" style="opacity: 0;">
        <line x1="160" y1="30" x2="160" y2="170" stroke="#f43f5e" stroke-width="2.5" stroke-dasharray="5 3"/>
        <text x="165" y="55" font-size="16">✂️</text>
        <text x="165" y="75" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif">Schnitt</text>
      </g>

      <!-- Plus sign between pieces after separation -->
      <g id="lshape-plus" style="opacity: 0;">
        <circle cx="160" cy="130" r="14" fill="rgba(15, 23, 42, 0.9)" stroke="#10b981" stroke-width="2"/>
        <text x="160" y="136" fill="#10b981" font-size="18" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">+</text>
      </g>

      <!-- Result Banner -->
      <g id="lshape-banner" style="opacity: 0;">
        <rect x="35" y="205" width="310" height="34" rx="17" fill="rgba(15, 23, 42, 0.9)" stroke="#10b981" stroke-width="1.5"/>
        <text x="190" y="227" fill="#f8fafc" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">
          A_ges = <tspan fill="#38bdf8">12,96</tspan> + <tspan fill="#fbbf24">14,40</tspan> = <tspan fill="#34d399">27,36 m²</tspan> 🧩
        </text>
      </g>
    </svg>
  `;

  const r1 = stage.querySelector('#lshape-r1');
  const r2 = stage.querySelector('#lshape-r2');
  const r1Sub = stage.querySelector('#lshape-r1-sub');
  const r2Sub = stage.querySelector('#lshape-r2-sub');
  const cut = stage.querySelector('#lshape-cut');
  const plus = stage.querySelector('#lshape-plus');
  const banner = stage.querySelector('#lshape-banner');

  const tl = createTimeline({
    loop: true,
    loopDelay: 3500,
    defaults: {
      ease: 'easeInOutQuad',
    },
  });

  tl
    // 1. Scissor cut line appears
    .add(cut, { opacity: [0, 1], duration: 500 }, 800)
    // 2. Cut disappears and pieces gently slide apart
    .add(cut, { opacity: [1, 0], duration: 300 }, 1800)
    .add(r1, { translateX: -16, duration: 900 }, 1900)
    .add(r2, { translateX: 16, duration: 900 }, 1900)
    // 3. Plus sign appears in between
    .add(plus, { opacity: [0, 1], scale: [0.5, 1], duration: 500 }, 2500)
    // 4. Area values fade in on R1 and R2
    .add(r1Sub, { opacity: [0, 1], duration: 500 }, 2800)
    .add(r2Sub, { opacity: [0, 1], duration: 500 }, 2800)
    // 5. Total calculation banner appears
    .add(banner, { opacity: [0, 1], scale: [0.92, 1], duration: 600 }, 3200)
    .add(formulaEl, { opacity: [0.4, 1], duration: 600 }, 3200);

  return {
    destroy: () => {
      tl.cancel();
    },
  };
}

// --------------------------------------------------------------------------
// 6. 2. Binomische Formel: (a − b)² = a² − 2ab + b²
// --------------------------------------------------------------------------
function initBinomSubtraction(stage, formulaEl, config) {
  stage.innerHTML = `
    <svg viewBox="0 0 380 270" class="animated-visual-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="subMainA2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.15"/>
        </linearGradient>
        <linearGradient id="subTargetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#059669" stop-opacity="0.3"/>
        </linearGradient>
        <linearGradient id="subStripGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f43f5e" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#e11d48" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="subCornerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.4"/>
        </linearGradient>
      </defs>

      <!-- Dimension Lines (Outer a x a) -->
      <g id="sub-dims-outer">
        <line x1="75" y1="18" x2="255" y2="18" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="75" y1="13" x2="75" y2="23" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="255" y1="13" x2="255" y2="23" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="165" y="14" fill="#38bdf8" font-size="12" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">Gesamtlänge a</text>

        <line x1="65" y1="25" x2="65" y2="205" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="60" y1="25" x2="70" y2="25" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="60" y1="205" x2="70" y2="205" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="56" y="120" fill="#38bdf8" font-size="12" font-weight="700" font-family="Outfit, sans-serif" text-anchor="end">a</text>
      </g>

      <!-- Base Square a² (Outer Boundary) -->
      <rect id="sub-base-square" x="75" y="25" width="180" height="180" rx="4"
        fill="url(#subMainA2)" stroke="#38bdf8" stroke-width="2"/>
      <text id="sub-a2-label" x="165" y="115" fill="#bae6fd" font-size="16" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">
        Fläche a²
      </text>

      <!-- Strip 1: Vertical Right Strip (b * a) : x=205, y=25, w=50, h=180 -->
      <g id="sub-strip-v" style="opacity: 0;">
        <rect x="205" y="25" width="50" height="180" rx="3" fill="url(#subStripGrad)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="230" y="105" fill="#fda4af" font-size="13" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">−ab</text>
      </g>

      <!-- Strip 2: Horizontal Bottom Strip (a * b) : x=75, y=155, w=180, h=50 -->
      <g id="sub-strip-h" style="opacity: 0;">
        <rect x="75" y="155" width="180" height="50" rx="3" fill="url(#subStripGrad)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="140" y="185" fill="#fda4af" font-size="13" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">−ab</text>
      </g>

      <!-- Corner b² Overlap (Bottom Right) : x=205, y=155, w=50, h=50 -->
      <g id="sub-corner-b2" style="opacity: 0;">
        <rect x="205" y="155" width="50" height="50" rx="3" fill="url(#subCornerGrad)" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="230" y="184" fill="#fef3c7" font-size="14" font-weight="900" font-family="Outfit, sans-serif" text-anchor="middle">+b²</text>
      </g>

      <!-- Target Square (a - b)² (Top Left) : x=75, y=25, w=130, h=130 -->
      <g id="sub-target-square" style="opacity: 0;">
        <rect x="75" y="25" width="130" height="130" rx="4" fill="url(#subTargetGrad)" stroke="#10b981" stroke-width="3"/>
        <text x="140" y="85" fill="#a7f3d0" font-size="16" font-weight="900" font-family="Outfit, sans-serif" text-anchor="middle">
          (a − b)²
        </text>
        <text x="140" y="105" fill="#6ee7b7" font-size="11" font-weight="700" font-family="Outfit, sans-serif" text-anchor="middle">
          Restfläche
        </text>
      </g>

      <!-- Overlay Explanation Badge -->
      <g id="sub-overlap-badge" style="opacity: 0;">
        <rect x="25" y="215" width="330" height="42" rx="8" fill="rgba(15, 23, 42, 0.92)" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="190" y="233" fill="#fbbf24" font-size="12" font-weight="800" font-family="Outfit, sans-serif" text-anchor="middle">
          ⚠️ Ecke b² wurde doppelt abgezogen!
        </text>
        <text x="190" y="249" fill="#f8fafc" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">
          Ausgleich nötig: <tspan fill="#f43f5e">a² − 2ab</tspan> <tspan fill="#fbbf24" font-weight="bold">+ b²</tspan>
        </text>
      </g>
    </svg>
  `;

  const a2Label = stage.querySelector('#sub-a2-label');
  const stripV = stage.querySelector('#sub-strip-v');
  const stripH = stage.querySelector('#sub-strip-h');
  const cornerB2 = stage.querySelector('#sub-corner-b2');
  const targetSq = stage.querySelector('#sub-target-square');
  const badge = stage.querySelector('#sub-overlap-badge');

  const tl = createTimeline({
    loop: true,
    loopDelay: 3500,
    defaults: {
      ease: 'easeInOutQuad',
    },
  });

  tl
    // 1. First strip (-ab) highlights and subtracts
    .add(stripV, { opacity: [0, 1], duration: 600 }, 900)
    // 2. Second strip (-ab) highlights and subtracts
    .add(stripH, { opacity: [0, 1], duration: 600 }, 1700)
    .add(a2Label, { opacity: [1, 0], duration: 400 }, 1900)
    // 3. Corner b² was subtracted twice -> flashes +b² back in!
    .add(cornerB2, { opacity: [0, 1], scale: [0.6, 1.15, 1], duration: 800 }, 2500)
    .add(badge, { opacity: [0, 1], scale: [0.94, 1], duration: 600 }, 2800)
    // 4. Target square (a - b)² glows in emerald green
    .add(targetSq, { opacity: [0, 1], duration: 700 }, 3400)
    .add(formulaEl, { opacity: [0.4, 1], duration: 600 }, 3400);

  return {
    destroy: () => {
      tl.cancel();
    },
  };
}



