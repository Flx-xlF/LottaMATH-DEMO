/**
 * Tutorial / Concept Explanation Screen for LottaMATH
 * Visual explanation cards before starting a level for clear pedagogical understanding.
 * Enhanced with Glassmorphic Area Models and Algebra Tiles.
 */

import { renderMathInText, renderMath } from '../components/mathRenderer.js';
import { renderVisualModel } from '../components/visualMath.js';

const TUTORIAL_CONTENT = {
  '1-1': {
    title: 'Was ist ein Term?',
    emoji: '🌊',
    body: 'Ein **Term** ist ein mathematischer Rechenausdruck. Er kann aus Zahlen, Rechenzeichen und Variablen (Buchstaben) bestehen.',
    latexExample: '3x + 5',
    breakdown: [
      { label: 'Koeffizient (Vorfaktor)', value: '3', desc: 'Wird mit der Variable multipliziert' },
      { label: 'Variable (Unbekannte)', value: 'x', desc: 'Steht für eine beliebige Zahl' },
      { label: 'Konstante', value: '5', desc: 'Feste Zahl ohne Variable' },
    ],
    visual: {
      type: 'algebra-tiles',
      title: 'Term $3x + 5$ als Kacheln',
      groups: [
        { label: '3x (3 Variablen-Streifen)', type: 'x', count: 3, sign: '+' },
        { label: '5 (5 Einer-Kacheln)', type: 'unit', count: 5, sign: '+' },
      ],
      summary: '$3x + 5$: Besteht aus 3 Variablen-Kacheln und 5 Einer-Kacheln.',
    },
    rule: 'Wichtig: Ein Term hat KEIN Gleichheitszeichen! ($3x + 5 = 11$ wäre eine Gleichung).',
  },
  '1-3': {
    title: 'Gleichartige Terme',
    emoji: '🌊',
    body: 'Terme heissen **gleichartig**, wenn sie dieselben Variablen mit denselben Exponenten (Hochzahlen) haben.',
    latexExample: '4x + 3x = 7x \\quad \\text{aber} \\quad 4x + 3y \\text{ bleibt } 4x + 3y',
    breakdown: [
      { label: 'Gleichartig', value: '4x und 3x', desc: 'Können zu 7x zusammengefasst werden' },
      { label: 'NICHT gleichartig', value: '3a und 3a²', desc: 'a und a² haben verschiedene Potenzen!' },
    ],
    visual: {
      type: 'algebra-tiles',
      title: 'Gleichartige Kacheln zusammenzählen: $4x + 3x$',
      groups: [
        { label: '4x', type: 'x', count: 4, sign: '+' },
        { label: '3x', type: 'x', count: 3, sign: '+' },
      ],
      summary: 'Gleiche Kachelform $\\to$ Vorfaktoren addieren ($4 + 3 = 7x$).',
    },
    rule: '💡 80/20-Pareto-Tipp: Sortiere Terme immer zuerst nach Variablen ($x$ zu $x$, $y$ zu $y$) – dieser einfache Schritt verhindert 80% aller typischen Leichtsinnsfehler!',
  },
  '2-1': {
    title: 'Das Distributivgesetz',
    emoji: '🔥',
    body: 'Beim **Ausmultiplizieren** wird der Faktor vor der Klammer mit JEDEM Glied in der Klammer multipliziert.',
    latexExample: 'a \\cdot (b + c) = a \\cdot b + a \\cdot c',
    breakdown: [
      { label: 'Beispiel', value: '3(x + 4)', desc: 'Rechne 3 · x und 3 · 4' },
      { label: 'Ergebnis', value: '3x + 12', desc: 'Die Klammer ist vollständig aufgelöst!' },
    ],
    visual: {
      type: 'area-model',
      title: 'Flächenmodell: $3 \\cdot (x + 4)$',
      cols: ['x', '4'],
      rows: ['3'],
      cells: [
        [{ label: '3x', sublabel: '3 · x', color: 'hsl(180, 75%, 48%)' }, { label: '12', sublabel: '3 · 4', color: 'hsl(35, 95%, 55%)' }],
      ],
      summary: 'Gesamtfläche: $3(x + 4) = 3x + 12$',
    },
    rule: '💡 Häufigste Falle: Vergiss nicht, auch die zweite Zahl in der Klammer zu multiplizieren ($3 \\cdot 4 = 12$)!',
  },
  '2-3': {
    title: 'Achtung: Minusklammern!',
    emoji: '⚠️',
    body: 'Ein **Minus vor der Klammer** ist die häufigste Fehlerquelle in Prüfungen. Es dreht ALLE Vorzeichen in der Klammer um!',
    latexExample: '-(a - b) = -a + b \\quad \\text{und} \\quad 10 - (2x - 4) = 10 - 2x + 4 = 14 - 2x',
    breakdown: [
      { label: 'Aus Plus wird Minus', value: '-(x + 3) → -x - 3', desc: 'Beide Glieder werden negativ' },
      { label: 'Minus mal Minus gibt Plus!', value: '-(x - 5) → -x + 5', desc: 'Aus -5 wird +5!' },
    ],
    rule: '💡 80/20-Prüfungsfokus: Minusklammern drehen ALLE Vorzeichen um – wer dieses Muster beherrscht, sichert sich 80% der schwierigsten Prüfungspunkte!',
  },
  '3-1': {
    title: 'Gemeinsame Faktoren ausklammern',
    emoji: '🌿',
    body: '**Ausklammern (Faktorisieren)** ist die Umkehrung des Ausmultiplizierens: Wir verwandeln eine Summe in ein Produkt.',
    latexExample: 'ab + ac = a(b + c)',
    breakdown: [
      { label: 'Schritt 1: Teiler finden', value: '6x + 9', desc: 'Der grösste Teiler von 6 und 9 ist 3' },
      { label: 'Schritt 2: Vor die Klammer', value: '3(2x + 3)', desc: 'Probe: 3 · 2x = 6x und 3 · 3 = 9 ✓' },
    ],
    visual: {
      type: 'area-model',
      title: 'Flächenaufteilung rückwärts: Höhe $3$ ausklammern',
      cols: ['2x', '3'],
      rows: ['3'],
      cells: [
        [{ label: '6x', color: 'hsl(150, 65%, 48%)' }, { label: '9', color: 'hsl(35, 95%, 55%)' }],
      ],
      summary: '$6x + 9 = 3 \\cdot (2x + 3)$',
    },
    rule: '💡 Goldene Regel: Wenn ein Glied ganz ausgeklammert wird, bleibt immer 1 stehen ($7a + 7 = 7(a + 1)$)!',
  },
  '4-1': {
    title: '1. Binomische Formel',
    emoji: '🌸',
    body: 'Die **Plus-Formel**: Das Quadrat einer Summe ergibt vier Teilflächen, wovon zwei gleich sind.',
    latexExample: '(a + b)^2 = a^2 + 2ab + b^2',
    breakdown: [
      { label: 'Erstes Quadrat', value: 'a²', desc: 'Grosses Quadrat' },
      { label: 'Doppeltes Produkt', value: '2ab', desc: 'Zwei Rechtecke der Fläche ab (NIE vergessen!)' },
      { label: 'Zweites Quadrat', value: 'b²', desc: 'Kleines Quadrat in der Ecke' },
    ],
    visual: {
      type: 'area-model',
      title: '1. Binom: Quadrat $(a + b)^2$',
      cols: ['a', 'b'],
      rows: ['a', 'b'],
      cells: [
        [{ label: 'a^2', color: 'hsl(180, 75%, 48%)' }, { label: 'ab', color: 'hsl(335, 80%, 60%)' }],
        [{ label: 'ab', color: 'hsl(335, 80%, 60%)' }, { label: 'b^2', color: 'hsl(35, 95%, 55%)' }],
      ],
      summary: '$(a + b)^2 = a^2 + 2ab + b^2$ (Vier Teilflächen)',
    },
    rule: '💡 80/20-Erfolgsregel: Vergiss beim Binom $(a+b)^2$ nie das doppelte Mittelglied $2ab$ – genau hier entstehen 80% aller Punkteverluste!',
  },
  '4-2': {
    title: '2. Binomische Formel',
    emoji: '🌸',
    body: 'Die **Minus-Formel**: Das Minus steht NUR beim doppelten Produkt in der Mitte!',
    latexExample: '(a - b)^2 = a^2 - 2ab + b^2',
    breakdown: [
      { label: 'Minus in der Mitte', value: '-2ab', desc: 'Minuszeichen nur hier' },
      { label: 'Plus am Ende!', value: '+b²', desc: '(-b) · (-b) = +b² ist immer positiv!' },
    ],
    rule: 'Beispiel: $(x - 4)^2 = x^2 - 8x + 16$.',
  },
  '4-3': {
    title: '3. Binomische Formel',
    emoji: '🌸',
    body: 'Die **Plus-Minus-Formel**: Hier fällt das Mittelglied komplett weg!',
    latexExample: '(a + b)(a - b) = a^2 - b^2',
    breakdown: [
      { label: 'Kein Mittelglied', value: 'a² - b²', desc: '+ab und -ab heben sich auf' },
      { label: 'Beispiel', value: '(x + 5)(x - 5)', desc: 'Ergibt x² - 25' },
    ],
    visual: {
      type: 'area-model',
      title: '3. Binom: $(a + b)(a - b)$',
      cols: ['a', 'b'],
      rows: ['a', '-b'],
      cells: [
        [{ label: 'a^2', color: 'hsl(180, 75%, 48%)' }, { label: '+ab', color: 'hsl(150, 65%, 48%)' }],
        [{ label: '-ab', color: 'hsl(355, 80%, 60%)' }, { label: '-b^2', color: 'hsl(355, 80%, 60%)' }],
      ],
      summary: '$+ab$ und $-ab$ heben sich auf $\\to a^2 - b^2$',
    },
    rule: 'Super für Kopfrechnen: $49 \\cdot 51 = (50 - 1)(50 + 1) = 2500 - 1 = 2499$!',
  },
  // =========================================================================
  // Welt 5: Formeln & Berechnen
  // =========================================================================
  '5-1': {
    title: 'Das Parallelogramm',
    emoji: '📐',
    body: 'Ein **Parallelogramm** hat denselben Flächeninhalt wie ein Rechteck mit gleicher Grundseite $g$ und senkrechter Höhe $h$.',
    latexExample: 'A = g \\cdot h',
    breakdown: [
      { label: 'Grundseite (g)', value: 'g', desc: 'Beliebige Basisseite der Figur' },
      { label: 'Senkrechte Höhe (h)', value: 'h', desc: 'Muss senkrecht (90°) auf der Grundseite stehen!' },
    ],
    rule: '💡 80/20-Pareto-Tipp: Multipliziere NIEMALS zwei Nachbarseiten miteinander ($a \\cdot b$ ist falsch!) – nimm immer die Grundseite mal die senkrechte Höhe $h$!',
  },
  '5-2': {
    title: 'Das Dreieck & 3 Höhen',
    emoji: '📐',
    body: 'Jedes Dreieck ist genau die **Hälfte eines Parallelogramms** mit gleicher Grundseite und Höhe.',
    latexExample: 'A = \\frac{g \\cdot h}{2} = \\frac{a \\cdot h_a}{2} = \\frac{b \\cdot h_b}{2} = \\frac{c \\cdot h_c}{2}',
    breakdown: [
      { label: '3 Möglichkeiten', value: 'a·ha / b·hb / c·hc', desc: 'Jede Seite hat ihre eigene Höhe' },
      { label: 'Immer durch 2!', value: ': 2', desc: 'Dreiecke sind halbe Vierecke' },
    ],
    rule: '💡 80/20-Erfolgsregel: Vergiss beim Dreieck nie das Teilen durch 2 – das ist der häufigste Leichtsinnsfehler in Prüfungen!',
  },
  '5-3': {
    title: 'Das Trapez & die Mittellinie',
    emoji: '📐',
    body: 'Ein **Trapez** hat zwei parallele Seiten $a$ und $c$. Die Fläche berechnet sich über die Mittellinie $m = \\frac{a + c}{2}$ multipliziert mit der Höhe $h$.',
    latexExample: 'A = \\frac{a + c}{2} \\cdot h = m \\cdot h',
    breakdown: [
      { label: 'Mittelwert der Seiten', value: 'm = (a + c) / 2', desc: 'Durchschnitt der beiden parallelen Seiten' },
      { label: 'Mit Höhe multiplizieren', value: '· h', desc: 'Senkrechter Abstand zwischen a und c' },
    ],
    rule: '💡 Formel-Tipp: $A = m \\cdot h$ – bilde erst den Mittelwert der parallelen Seiten, dann mal die Höhe!',
  },
  '5-4': {
    title: 'Drachen & Rhombus',
    emoji: '🪁',
    body: 'Beim **Drachenviereck** und **Rhombus** (Raute) stehen die Diagonalen $e$ und $f$ senkrecht aufeinander. Sie füllen genau die Hälfte des umschriebenen Rechtecks aus.',
    latexExample: 'A = \\frac{e \\cdot f}{2}',
    breakdown: [
      { label: '1. Diagonale (e)', value: 'e', desc: 'Verbindet die gegenüberliegenden Ecken' },
      { label: '2. Diagonale (f)', value: 'f', desc: 'Steht senkrecht auf e' },
    ],
    rule: '💡 Rhombus-Spezial: Beim Rhombus funktionieren ZWEI Formeln: $A = \\frac{e \\cdot f}{2}$ UND $A = a \\cdot h_a$!',
  },
  // =========================================================================
  // Welt 6: Umformen & Koordinaten
  // =========================================================================
  '6-1': {
    title: 'Umkehrformeln: Dreieck & Parallelogramm',
    emoji: '📍',
    body: 'Wenn die Fläche $A$ gegeben ist und du eine Seite oder Höhe suchst, musst du die **Formel nach der Unbekannten umstellen**.',
    latexExample: 'h = \\frac{2A}{g} \\quad \\text{(Dreieck)} \\qquad h = \\frac{A}{g} \\quad \\text{(Parallelogramm)}',
    breakdown: [
      { label: 'Dreieck umkehren', value: 'h = 2A / g', desc: 'Erst Fläche verdoppeln, dann teilen' },
      { label: 'Parallelogramm umkehren', value: 'h = A / g', desc: 'Direkt Fläche durch Grundseite' },
    ],
    rule: '💡 80/20-Regel: Verdopple beim Dreieck IMMER zuerst die Fläche ($2A$), bevor du durch die gegebene Seite teilst!',
  },
  '6-2': {
    title: 'Umkehrformeln: Trapez',
    emoji: '📍',
    body: 'Um beim Trapez eine fehlende Seite $c$ oder die Höhe $h$ zu finden, wird die Gleichung schrittweise aufgelöst.',
    latexExample: 'h = \\frac{2A}{a + c} \\qquad c = \\frac{2A}{h} - a',
    breakdown: [
      { label: 'Höhe suchen', value: 'h = 2A / (a + c)', desc: 'Doppelte Fläche durch Summe der Seiten' },
      { label: 'Seite suchen', value: 'c = (2A / h) - a', desc: 'Erst teilen, dann Seite a abziehen' },
    ],
    rule: '💡 Prüfungs-Tipp: Bei $c = \\frac{2A}{h} - a$ erst dividieren, dann am Ende subtrahieren!',
  },
  '6-4': {
    title: 'Achtung: Einheitenfallen!',
    emoji: '⚠️',
    body: 'Vor dem Einsetzen in die Formel müssen **ALLE Längen in dieselbe Einheit** (z.B. alles in $\\text{cm}$) umgerechnet werden!',
    latexExample: '1\\text{ dm} = 10\\text{ cm} \\implies 1\\text{ dm}^2 = 100\\text{ cm}^2',
    breakdown: [
      { label: 'Längen-Faktor', value: '1 dm = 10 cm', desc: 'Schrittweite ist 10' },
      { label: 'Flächen-Faktor', value: '1 dm² = 100 cm²', desc: 'Schrittweite bei Flächen ist 100!' },
    ],
    rule: '💡 80/20-Pareto-Tipp: Bei Flächeneinheiten ist der Umrechnungsfaktor immer $100$ ($1\\text{ m}^2 = 100\\text{ dm}^2 = 10\\text{ }000\\text{ cm}^2$)!',
  },
  // =========================================================================
  // Welt 7: Zusammengesetzte Flächen
  // =========================================================================
  '7-1': {
    title: 'Additive Zerlegung (L-Formen)',
    emoji: '🧩',
    body: 'Komplexe Grundrisse teilst du mit **Hilfslinien in bekannte Rechtecke und Dreiecke** auf und addierst die Teilflächen.',
    latexExample: 'A_{\\text{ges}} = A_1 + A_2 + A_3',
    breakdown: [
      { label: 'Schritt 1: Zerschneiden', value: 'A1 und A2', desc: 'In einfache Teilfiguren aufteilen' },
      { label: 'Schritt 2: Addieren', value: 'A_ges = A1 + A2', desc: 'Summe der Flächen berechnen' },
    ],
    rule: '💡 Tipp: Zeichne Hilfslinien immer sauber ein und beschrifte jede Teilfläche einzeln!',
  },
  '7-2': {
    title: 'Subtraktive Ergänzung (Restflächen)',
    emoji: '✂️',
    body: 'Statt viele kleine Stücke zu addieren, berechnest du das **grosse umschriebene Rechteck** und ziehst fehlende Ecken oder Löcher ab.',
    latexExample: 'A_{\\text{Rest}} = A_{\\text{Rahmen}} - A_{\\text{Ausschnitt}}',
    breakdown: [
      { label: 'Gesamtrahmen', value: 'A_Rahmen', desc: 'Grosses Rechteck um die Figur' },
      { label: 'Abzug', value: '- A_Ecke', desc: 'Fehlende Dreiecke oder Aussparungen abziehen' },
    ],
    rule: '💡 Effizienz-Trick: Bei Figuren mit abgeschrägten Ecken sparst du mit der Subtraktion viel Rechenzeit!',
  },
  // =========================================================================
  // Welt 8: Reale Sachaufgaben
  // =========================================================================
  '8-1': {
    title: 'Sachaufgaben: Grundstücke & Preise',
    emoji: '🏗️',
    body: 'In Sachaufgaben werden Flächen mit **Quadratmeterpreisen**, Materialkosten oder Stundenansätzen verknüpft.',
    latexExample: '\\text{Gesamtkosten} = \\text{Fläche in m}^2 \\cdot \\text{Preis pro m}^2',
    breakdown: [
      { label: 'Schritt 1: Fläche', value: 'A in m²', desc: 'Zuerst die geometrische Fläche ermitteln' },
      { label: 'Schritt 2: Kosten', value: 'A · CHF/m²', desc: 'Mit dem Preis pro Quadratmeter multiplizieren' },
    ],
    rule: '💡 Suki sagt: Lies den Text zweimal: Welche Fläche wird gekauft? Welche Einheit hat der Preis?',
  },
  '8-3': {
    title: 'Dächer decken & Verschnitt',
    emoji: '🏡',
    body: 'Beim Dachdecken oder Bodenlegen muss man für Kanten und Schnitte einen **Verschnittzuschlag** (z.B. $+20\\%$) dazurechnen.',
    latexExample: '\\text{Ziegel} = \\text{Fläche} \\cdot \\text{Ziegel/m}^2 \\cdot 1{,}20',
    breakdown: [
      { label: 'Netto-Bedarf', value: 'Fläche · Stück/m²', desc: 'Reine Fläche ohne Verschnitt' },
      { label: '+20% Zuschlag', value: '· 1,20', desc: 'Faktor 1,20 für 20% Verschnitt' },
    ],
    rule: '💡 80/20-Prüfungsfokus: Ein Verschnitt von $+20\\%$ bedeutet Multiplikation mit $1{,}20$ – Runde das Endergebnis bei Stückzahlen immer auf ganze Ziegel auf!',
  },
};

export function renderTutorial(container, levelId, callbacks = {}) {
  if (!container) return null;

  const {
    onStart = () => {},
    onSkip = () => {},
  } = callbacks;

  const data = TUTORIAL_CONTENT[levelId] || {
    title: 'Wichtige Grundlagen',
    emoji: '💡',
    body: 'Erinnere dich an die Rechengesetze und gehe Schritt für Schritt vor.',
    latexExample: '',
    breakdown: [],
    rule: 'Löse die Aufgaben in deinem eigenen Tempo. Tipps kosten dich keine Sterne!',
  };

  const screenEl = document.createElement('div');
  screenEl.className = 'screen tutorial-screen flex-col flex-center';

  screenEl.innerHTML = `
    <div class="tutorial-card glass-card flex-col gap-md" style="max-width: 660px; width: 100%;">
      <div class="tutorial-card__header flex-row gap-sm">
        <span style="font-size: 2.2rem;">${data.emoji}</span>
        <div>
          <h2>${data.title}</h2>
          <span class="text-muted">Konzept-Übersicht</span>
        </div>
      </div>

      <div class="tutorial-card__body flex-col gap-sm">
        <p class="tutorial-card__text" id="tutorial-body-text"></p>
        
        ${
          data.latexExample
            ? `<div class="math-display" id="tutorial-math-display"></div>`
            : ''
        }

        <!-- Visual Slot if visual model present -->
        ${
          data.visual
            ? `<div id="tutorial-visual-slot" class="tutorial-card__visual"></div>`
            : ''
        }

        ${
          data.breakdown && data.breakdown.length > 0
            ? `<div class="tutorial-card__breakdown flex-col gap-xs" id="tutorial-breakdown-container"></div>`
            : ''
        }

        <div class="tutorial-card__rule flex-row gap-sm">
          <span>💡</span>
          <span id="tutorial-rule-text"></span>
        </div>
      </div>

      <div class="tutorial-card__actions flex-row flex-between" style="margin-top: 1rem;">
        <button type="button" class="btn btn--ghost" id="tutorial-skip-btn">Überspringen</button>
        <button type="button" class="btn btn--primary" id="tutorial-start-btn">Los geht's! 🚀</button>
      </div>
    </div>
  `;

  container.appendChild(screenEl);

  const bodyTextEl = screenEl.querySelector('#tutorial-body-text');
  renderMathInText(bodyTextEl, data.body);

  const ruleTextEl = screenEl.querySelector('#tutorial-rule-text');
  if (ruleTextEl) {
    renderMathInText(ruleTextEl, data.rule);
  }

  const breakdownContainer = screenEl.querySelector('#tutorial-breakdown-container');
  if (breakdownContainer && Array.isArray(data.breakdown)) {
    data.breakdown.forEach((b) => {
      const itemEl = document.createElement('div');
      itemEl.className = 'tutorial-breakdown-item flex-between';

      const labelSpan = document.createElement('span');
      labelSpan.className = 'tutorial-breakdown-label';
      renderMathInText(labelSpan, `**${b.label}:** ${b.desc}`);

      const valSpan = document.createElement('span');
      valSpan.className = 'tutorial-breakdown-val';
      const isFormula = /[0-9xya-z²³⁴⁵+\-·*\/=()^]/.test(b.value) && (b.value.match(/[a-zA-ZäöüÄÖÜß]{3,}/g) || []).length === 0;
      renderMathInText(valSpan, b.value.includes('$') ? b.value : (isFormula ? `$${b.value}$` : b.value));

      itemEl.appendChild(labelSpan);
      itemEl.appendChild(valSpan);
      breakdownContainer.appendChild(itemEl);
    });
  }

  if (data.latexExample) {
    const mathEl = screenEl.querySelector('#tutorial-math-display');
    renderMath(mathEl, data.latexExample, { displayMode: true });
  }

  if (data.visual) {
    const visualSlot = screenEl.querySelector('#tutorial-visual-slot');
    renderVisualModel(visualSlot, data.visual);
  }

  const startBtn = screenEl.querySelector('#tutorial-start-btn');
  const skipBtn = screenEl.querySelector('#tutorial-skip-btn');

  startBtn.addEventListener('click', onStart);
  skipBtn.addEventListener('click', onSkip);

  return {
    destroy: () => {
      startBtn.removeEventListener('click', onStart);
      skipBtn.removeEventListener('click', onSkip);
      screenEl.remove();
    },
  };
}
