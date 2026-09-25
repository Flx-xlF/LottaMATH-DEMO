# LottaMATH Content Schema & Developer Guide

This document defines the strict architecture, data schemas, and pedagogical principles required when adding or maintaining topics, worlds, levels, questions, and tutorials in **LottaMATH**.

---

# PART I: CONTENT STRATEGY & PEDAGOGY

## 0. The User Persona: Lotta (13, 2. Sekundarstufe, Niveau P)
*Every single design decision, question, text, and SVG in LottaMATH is built specifically for Lotta.*

- **Age & Academic Context:** 13 years old, 2. Sekundarstufe, Niveau P (Basel-Landschaft / Swiss Lehrplan 21). High academic performance expectations, preparing for Gymnasium/FMS.
- **The Core Frustration (Effort vs. Return Mismatch):** Lotta invests heavy effort and long study hours into math, yet test grades fall short of her expectations. This mismatch triggers math anxiety, self-doubt, and fear of failure.
- **Learning Style (Visual & Spatial First):** Lotta is an intensely visual learner. Dense symbolic algebra (e.g. $(a+b)^2 = a^2 + 2ab + b^2$) looks arbitrary to her until she sees it physically as a split rectangle or animated folding model. Animations and geometric sketches turn abstract rules into tangible intuition.
- **The "Why do I care?" Need (Real-World Relevance):** Lotta disengages if math feels detached from reality. Every mathematical concept must immediately answer *"Where does this matter in my life?"* through real-world hooks (gaming XP, phone plans, shopping sales, architecture, fair sharing).
- **Cognitive Load & Mental Math:** Multi-digit arithmetic and tedious manual calculation exhaust her working memory and lead to careless slips. LottaMATH strictly guarantees friendly numbers so 100% of her cognitive focus is reserved for conceptual mastery and structure recognition.

---

## 1. Core Pedagogical Principles & Vocabulary
*These principles form the foundation of LottaMATH's learning experience.*

1. **Visual Learning First:** Emphasize intuitive mental models (**Rechteckmodell / Area Models**, **Kachelmodell / Algebra Tiles**) before abstract algebraic notation.
2. **The 80/20 Pareto Principle:** Focus on the **20% core patterns** (e.g., area expansion, minus brackets, middle term $2ab$ in binomials) that yield **80% of exam points**, reducing cognitive overwhelm and test anxiety for Lotta.
3. **Empathetic Mascot (Suki):** Suki the cat provides emotional safety, normalizes learning from mistakes, and provides relatable real-world context. Suki's messages support **`{name}` interpolation** to directly address the active student profile (e.g., `"Toll gemacht, {name}!"`).
4. **Fehler-Schmiede (Mistake Vault):** A remediation system where incorrectly answered questions are stored for later practice. Mastery awards +15 XP.
5. **Math Vocabulary Standards (Baselland Niveau P):**
   To ensure consistency with the official *Lehrplan 21* curriculum, strictly adhere to the following terminology:
   - **Term**: Mathematical expressions (e.g., $3x + 5$).
   - **Variable**: Letter placeholders (e.g., $x, y, a$).
   - **Koeffizient / Vorfaktor**: The number multiplying a variable (e.g., the 7 in $7a$).
   - **Konstante**: A fixed number without a variable.
   - **Gleichartige Terme zusammenfassen**: Collecting like terms (e.g., $3x + 2x = 5x$).
   - **Ausmultiplizieren**: Expanding brackets (using the *Distributivgesetz*).
   - **Ausklammern (Faktorisieren)**: Factoring out common terms. Always introduce *Faktorisieren* for formal contexts.
   - **Minusklammer**: Bracket preceded by a minus sign.
   - **Algebrasteine / Kacheln**: Used in visual area models (Termplättchen).
   - **Binomische Formeln**: Standard terminology for binomial expansions.

---

## 2. The 6 Golden Rules of Question Creation
> [!IMPORTANT]
> **To ensure 100% quality and consistency, every single question added to LottaMATH MUST adhere to these 6 Golden Rules.**

### 🥇 Rule 1: Question Uniqueness & Diversity (No Clones)
Never create identical or near-identical questions in the same world (e.g., merely changing variable $x$ to $y$ or $5$ to $6$). Every question must target a distinct algebraic pattern, operation order, or geometric configuration.

### 🥇 Rule 2: Mental Math Standard (Kopfrechenbare Zahlen)
All calculations must be effortlessly solvable mentally by a 13-year-old student without a calculator or scratchpad. 
- Use round, friendly numbers (e.g., multiples of 10, clean divisions like $300 / 10 = 30$, clean products like $20 \cdot 15 = 300$).
- **Clean Integers & Halves:** Results and intermediate values must be clean integers or simple halves ($0.5$).
- **Even Products & Sums:** For formulas involving division by 2 (Triangles, Rhombuses), the numerator product must be even. For Trapezoids, the $(a+c)$ sum must always result in an even number to guarantee a clean division.
- **Multi-Step & Averages Rule:** For multi-step formulas (such as Trapezoids $A = \frac{a+c}{2} \cdot h$ or Parallelograms $A = g \cdot h$), ensure intermediate values are round and simple (e.g. $a + c = 12 + 8 = 20 \implies m = 10 \implies 10 \cdot 5 = 50$). Avoid large two-digit calculations that trigger mental arithmetic exhaustion. Focus cognitive load entirely on conceptual mastery.
- **Inverse Formula Doubling & Divisions:** When solving inverse formulas (e.g. $c = \frac{2A}{h} - a$, $g = \frac{2A}{h}$, $f = \frac{2A}{e}$), doubling the area ($2A$) and dividing by the known dimension ($h, g, e$) must produce elementary divisions within the 1x1 table or multiples of 10. Multi-digit divisions like $128 : 8$ or numbers with bulky remainders are strictly forbidden. Intermediate dividends must not exceed 100 unless they are clean multiples of 10 (e.g., $200 : 20 = 10$).
- **No Blind Textbook Copying:** Never copy textbook exercise numbers verbatim without verifying that every intermediate calculation is effortless mental arithmetic for a 13-year-old student without a scratchpad. Adapt numbers when necessary!

### 🥇 Rule 3: The 3-Tier Hint Ladder
Every question must have exactly 3 progressive hints. There are no penalties for exploration.
1. **Level 1 (`💡 Tipp:` or `💡 Suki sagt:`):** Conceptual orienting prompt or reassuring guidance.
2. **Level 2 (`🔑 Hinweis:` or `{ text, visual }`):** Methodological rule or interactive visual diagram.
   - **Animated Hints:** To prevent cognitive overload during active problem-solving, never use `type: 'animated-svg'` as the default visual for a question. Instead, embed them here as a Level 2 or 3 hint triggered on-demand.
3. **Level 3 (`✅ Lösung:`):** Explicit step-by-step resolution.
*Also required: A `commonMistake` string explaining the typical cognitive trap so Lotta understands *why* an error happens.*

### 🥇 Rule 4: Visual Scaffolding & Story Continuity
- **Mandatory Real-World Intro Visuals:** Every single chapter introduction scenario (`realWorldIntro.scenarios[i]`) **MUST** contain an accompanying visual representation (`visual: { type: 'area-model' | 'algebra-tiles' | 'custom-svg' | 'animated-svg' }`). Pure text descriptions without visual scaffolding are prohibited—Lotta cannot internalize mathematical models from text walls alone.
- **Story Questions:** In early levels (e.g. Levels X-1 / X-2), include at least 1-2 multiple-choice or fill-in questions directly grounded in the world's real-life intro narrative (gaming XP, shopping discounts, wall area painting, fair profit splits). This anchors algebraic notation in familiar context.
- **Mandatory Geometry Sketches:** Any question involving geometric shapes, area/perimeter formulas, shearings/decompositions, coordinate geometry, or composite real-world tasks (e.g. wall facades, roofs, terraces) **MUST include an appropriate visual representation (`visual: { type: 'custom-svg' }`)**. 
- **Geometric & Coordinate Integrity:** All points, coordinates, side lengths, and angles provided in the text or sketch must be mathematically consistent. A geometric shape defined by coordinate points must actually form a valid shape with the stated properties (e.g., lengths and distances must match the grid).
- **Variable Visibility & Anti-Spoiler (Calculation Tasks):** For calculation problems, every known variable from the formula ($g$, $h$, $a$) and the unknown target ($?$) must have visible dimension indicators (lines, arrows, high-contrast labels) in the sketch. NEVER print the calculated solution into the sketch or the prompt text. If asking for a specific variable (e.g., Grundseite $g$), label it as $g = ?$ in the sketch. Use `Fläche = ?` or dimension labels.
- **Formula Identification Anti-Spoiler (Matching / Classification Tasks):** In questions where students must identify, match, or assign formulas to geometric shapes (e.g., `drag-group` or `multiple-choice` matching formulas to shapes), sketches **MUST NOT** include the formula's variable letter annotations ($a, c, h, e, f, g$). Showing $a, c, h$ on a trapezoid or $e, f$ on a kite reduces the problem to mindless letter matching rather than conceptual geometry. In such tasks, display only clean geometric shapes with structural lines (e.g., dashed heights or diagonals) and figure names.

### 🥇 Rule 5: Dummy Text Integrity (Fill-in)
For `fill-in` questions, the `interaction.placeholder` must **NEVER** reveal the question's solution and must **NEVER** be identical to `correctAnswer`! Always provide a generic, structurally similar example from a different problem (e.g., `z.B. 3x`, `z.B. 4(x + 1)`, `z.B. 25`).

### 🥇 Rule 6: Interaction Randomization & Anti-Spoiler Order Integrity
- **Mandatory Pre-Scrambling in Data:** In question data files (`world*.js`, `examPool.js`), `interaction.items` and `options` must **NEVER** be authored in the order of their correct solution or in 1:1 alignment with target categories/groups (`groups`).
- **Engine-Level Dynamic Shuffling:** All interactive question types presenting choices or pool items (`multiple-choice`, `drag-group`, `drag-order`) must be dynamically shuffled via Fisher-Yates when session or exam questions are generated (`questionEngine.js`).
- **UI-Level Collision Safeguard:** The quiz renderer (`quiz.js`) must defensively verify that the rendered item order does not coincidentally match the solved order 1:1. If a 1:1 alignment with group targets is detected, items must be swapped before rendering to prevent trivial drag-and-drop solutions.

---

## 3. Formatting & KaTeX Standards
> [!IMPORTANT]
> **Textbook-Quality Typography (Zero ASCII Fallback / KaTeX Mandatory).** Every mathematical expression, variable, formula, power, fraction, and physical unit must be formatted using LaTeX (`$ ... $` for inline, `$$ ... $$` for display). 

### Prohibited vs. Required Formats (Mitigation Matrix)

| ❌ Prohibited (ASCII / Plain Text) | ✅ Required (LaTeX in `$ ... $`) | Why? |
| :--- | :--- | :--- |
| `A = (g · h) / 2` | `$A = \frac{g \cdot h}{2}$` | Clean fraction bar eliminates cognitive clutter from nested brackets. |
| `A = ((a + c) / 2) · h` | `$A = \frac{a + c}{2} \cdot h$` | Mirrors the exact textbook formula taught in Sekundarschule Niveau P. |
| `g = (2 · A) / h` | `$g = \frac{2 \cdot A}{h}$` | Instant visual distinction between numerator and denominator. |
| `h = (2 · A) / (a + c)` | `$h = \frac{2 \cdot A}{a + c}$` | Prevents parentheses confusion in inverse formulas. |
| `A = 15 · 8 = 120 cm²` | `$A = 15 \cdot 8 = 120\text{ cm}^2$` | Formats exponents and units cleanly; ensures high-contrast math fonts. |
| `h_a = 8 cm` | `$h_a = 8\text{ cm}$` | Subscripts render legibly below the baseline without underscores. |
| `y/2 + 10` | `$\frac{y}{2} + 10$` | Eliminates ambiguity between integer division and fraction expressions. |
| `(50 - 1)(50 + 1) = 50² - 1² = 2499` | `$(50 - 1)(50 + 1) = 50^2 - 1^2 = 2499$` | Consistent typography for multi-step calculations. |
| `Kosten = 400 · 0,75 · 100 = 30 000 Fr.` | `$\text{Kosten} = 400 \cdot 0{,}75 \cdot 100 = 30\,000\text{ Fr.}$` | Formats Swiss decimals with comma braces and thousand spacing. |
| `*` or `·` (outside math mode) | `\cdot` (inside math mode) | Always use `\cdot` inside math mode for multiplication. |

*Note: When multiple-choice options test formulas, wrap the entire equation in `$ ... $` (e.g. `'$A = g \cdot h$'`).*

---

# PART II: TECHNICAL JSON SCHEMAS

## 4. World Definition Schema (`src/data/worlds.js`)

Each world object in `WORLDS` must provide metadata, a real-world scenario introduction with step-by-step math breakdowns, and level definitions.

```javascript
{
  id: 1,                          // World number (1, 2, 3, ...)
  topicId: 'terme',               // Topic grouping ID
  name: 'Terme Basics',           // World display title
  emoji: '🌊',                    // World icon
  colorPrimary: 'hsl(180, 75%, 48%)',
  colorSecondary: 'hsl(190, 80%, 35%)',
  description: 'Lerne, was Terme sind, und fasse gleichartige Terme sicher zusammen.',
  realWorldIntro: {
    headline: 'Wozu brauche ich Terme im Alltag?',
    examples: [
      {
        icon: '🎮',
        title: 'Gaming & Highscores (Minecraft / Roblox)',
        scenario: 'Wie berechnen Videospiele deine Punktzahl und XP am Ende einer Quest?',
        mathBreakdown: [
          {
            step: 'Level-Punkte',
            detail: 'Für jedes geschaffte Level ($L$) erhältst du 100 Punkte.',
            math: '100L',
          },
          {
            step: 'Bonus-Smaragde',
            detail: 'Für jeden gesammelten Smaragd ($s$) gibt es 50 Extra-Punkte.',
            math: '50s',
          },
          {
            step: 'Gesamter Score-Term',
            detail: 'Deine Punktzahl lässt sich als kompakter Term berechnen:',
            math: '100L + 50s',
          },
        ],
        sukiComment: 'Weil Level $L$ und Smaragde $s$ verschieden sind, darfst du sie nicht zu $150Ls$ zusammenrechnen!',
        visual: {                 // MANDATORY: Visual model object for Lotta (cannot be null)
          type: 'custom-svg',
          viewBox: '0 0 320 120',
          svg: '<svg>...</svg>',
        },
      },
    ],
  },
  levels: [
    {
      id: '1-1',
      name: 'Was ist ein Term?',
      description: 'Bausteine der Algebra',
      icon: '🧩',
      difficulty: 1,
    },
    // ... more levels (typically 4-5 levels per world)
  ],
}
```

---

## 5. Question Bank Schema (`src/data/questions/worldX.js`)

Every question must have:
- `id`: Unique string (e.g. `'w1_mc_001'`, `'w2_fi_101'`, `'w3_dg_205'`). **Note:** Dedicated exam questions use a distinct prefix and bypass the world hierarchy (e.g., `'exam_fl_01'`, `'exam_tm_15'`).
- `levelId`: Target level ID (e.g. `'1-1'`, `'2-3'`). Or `'exam'` for exam pool questions.
- `type`: One of `'multiple-choice'`, `'fill-in'`, `'drag-group'`, `'drag-order'`, `'step-builder'`.
- `difficulty`: `1` (Introduction / Visual), `2` (Core Practice), or `3` (Challenge / Multi-step).
- `prompt`: German task description.
- `promptLatex`: LaTeX formula to highlight (or empty string `''`).
- `visualPrompt` / `visual`: *(Optional or Required for Geometry)* Visual model object (Area Model, Algebra Tiles, or Custom SVG Sketches) rendered above the question.
- `hints`: Array of exactly 3 progressive hints (`💡 Tipp / 💡 Suki sagt` $\rightarrow$ `🔑 Hinweis` $\rightarrow$ `✅ Lösung`).
- `commonMistake`: String explaining the common pitfall.
- `correctAnswer`: Exact solution value (string, array, or object depending on type).
- `acceptedAnswers`: Array of accepted equivalent input variants.

### A. Multiple Choice (`type: 'multiple-choice'`)

```javascript
{
  id: 'w2_mc_001',
  levelId: '2-1',
  type: 'multiple-choice',
  difficulty: 1,
  prompt: 'Was besagt das Distributivgesetz für $a \\cdot (b + c)$?',
  promptLatex: 'a \\cdot (b + c)',
  interaction: {
    options: [
      '$a \\cdot b + a \\cdot c$',
      '$a \\cdot b + c$',
      '$a + b + c$',
      '$a \\cdot b \\cdot c$',
    ],
  },
  correctAnswer: '$a \\cdot b + a \\cdot c$',
  acceptedAnswers: ['$a \\cdot b + a \\cdot c$'],
  hints: [
    '💡 Tipp: Der Faktor a vor der Klammer wird mit JEDEM Glied in der Klammer multipliziert.',
    '🔑 Hinweis: Man multipliziert a mit b und a mit c.',
    '✅ Lösung: $a \\cdot b + a \\cdot c$.',
  ],
  commonMistake: 'Faktor nur mit dem ersten Summanden multipliziert ($ab + c$).',
}
```

### B. Fill-In (`type: 'fill-in'`)

> [!NOTE]
> **Decimal Normalization:** The `questionEngine` automatically normalizes decimal dots (`.`) and commas (`,`) during validation. You do not need to provide permutations of dots and commas in the `acceptedAnswers` array.

```javascript
{
  id: 'w2_fi_101',
  levelId: '2-2',
  type: 'fill-in',
  difficulty: 1,
  prompt: 'Multipliziere die Klammer aus:',
  promptLatex: '5(x + 2)',
  interaction: {
    placeholder: 'z.B. 3x + 6', // Generic format example — NEVER the solution!
  },
  correctAnswer: '5x + 10',
  acceptedAnswers: [
    '5x + 10',
    '10 + 5x',
    '5x+10',
    '10+5x',
  ],
  hints: [
    '💡 Tipp: Rechne $5 \\cdot x$ und $5 \\cdot 2$.',
    '🔑 Hinweis: $5 \\cdot x = 5x$ und $5 \\cdot 2 = 10$.',
    '✅ Lösung: $5x + 10$.',
  ],
  commonMistake: '$5 \\cdot 2$ vergessen und $5x + 2$ geschrieben.',
}
```

### C. Drag-Group Categorization (`type: 'drag-group'`)
> [!IMPORTANT]
> **MANDATORY PRE-SCRAMBLING & ANTI-SPOILER:** The `interaction.items` array must **NEVER** be authored in the 1:1 order of the `groups` or their solutions. It must always be pre-scrambled in the data file. In addition, when groups represent geometric figures or formulas, sketches must never label the exact variables being tested.

```javascript
{
  id: 'w1_dg_006',
  levelId: '1-1',
  type: 'drag-group',
  difficulty: 1,
  prompt: 'Ordne die Bestandteile des Terms $4a - 3b + 8$ zu:',
  promptLatex: '4a - 3b + 8',
  interaction: {
    items: ['4', 'a', '-3', 'b', '8'],
    groups: [
      { id: 'coeff', label: 'Koeffizienten', color: 'hsl(180, 75%, 48%)' },
      { id: 'var', label: 'Variablen', color: 'hsl(265, 85%, 66%)' },
      { id: 'const', label: 'Konstanten', color: 'hsl(35, 95%, 55%)' },
    ],
  },
  correctAnswer: {
    coeff: ['4', '-3'],
    var: ['a', 'b'],
    const: ['8'],
  },
  acceptedAnswers: [],
  hints: [
    '💡 Tipp: Achte bei -3 auf das Vorzeichen des Koeffizienten.',
    '🔑 Hinweis: Variablen sind die Buchstaben a und b.',
    '✅ Lösung: 4 und -3 sind Koeffizienten, a und b Variablen, 8 die Konstante.',
  ],
  commonMistake: 'Minuszeichen beim Koeffizienten -3 vergessen.',
}
```

### D. Drag-Order Step Sequencing (`type: 'drag-order'`)
> [!IMPORTANT]
> **MANDATORY PRE-SCRAMBLING:** The `interaction.items` array must **NEVER** be authored in the already-solved order (`correctOrder`). It must always be pre-scrambled in the code.

```javascript
{
  id: 'w2_do_005',
  levelId: '2-1',
  type: 'drag-order',
  difficulty: 1,
  prompt: 'Bringe die Schritte zum Ausmultiplizieren von $4 \\cdot (x + 3)$ in die richtige Reihenfolge:',
  promptLatex: '4 \\cdot (x + 3)',
  interaction: {
    items: [
      '$4 \\cdot x + 4 \\cdot 3$ (Klammer auflösen)',
      '$4x + 12$ (Ausrechnen)',
      '$4 \\cdot (x + 3)$ (Ausgangsterm)',
    ],
    correctOrder: [
      '$4 \\cdot (x + 3)$ (Ausgangsterm)',
      '$4 \\cdot x + 4 \\cdot 3$ (Klammer auflösen)',
      '$4x + 12$ (Ausrechnen)',
    ],
  },
  correctAnswer: [
    '$4 \\cdot (x + 3)$ (Ausgangsterm)',
    '$4 \\cdot x + 4 \\cdot 3$ (Klammer auflösen)',
    '$4x + 12$ (Ausrechnen)',
  ],
  acceptedAnswers: [],
  hints: [
    '💡 Tipp: Start beim Ausgangsterm, dann Zwischenschritt, dann Endergebnis.',
    '🔑 Hinweis: Zuerst distributive Multiplikation ansetzen, dann Produkte ausrechnen.',
    '✅ Lösung: 1. Ausgangsterm → 2. 4·x + 4·3 → 3. 4x + 12.',
  ],
  commonMistake: 'Endergebnis vor den Zwischenschritt gezogen.',
}
```

### E. Step-Builder Guided Solving (`type: 'step-builder'`)

```javascript
{
  id: 'w2_sb_001',
  levelId: '2-4',
  type: 'step-builder',
  difficulty: 3,
  prompt: 'Führe die Termumformung Schritt für Schritt durch:',
  promptLatex: '3(2x + 4) - 5x',
  interaction: {
    steps: [
      {
        prompt: 'Schritt 1: Multipliziere die Klammer $3(2x + 4)$ aus.',
        correctAnswer: '6x + 12',
        hint: 'Rechne $3 \\cdot 2x + 3 \\cdot 4 = 6x + 12$',
      },
      {
        prompt: 'Schritt 2: Fasse den gesamten Term $6x + 12 - 5x$ zusammen.',
        correctAnswer: 'x + 12',
        hint: 'Rechne $6x - 5x = x$, die $+12$ bleibt stehen.',
      },
    ],
  },
  correctAnswer: 'x + 12', // Final step solution
  acceptedAnswers: ['x + 12', '12 + x', 'x+12', '12+x'],
  hints: [
    '💡 Tipp: Löse zuerst die Klammer mit dem Distributivgesetz auf.',
    '🔑 Hinweis: Fasse danach die x-Glieder zusammen ($6x - 5x$).',
    '✅ Lösung: 1. Schritt: $6x + 12$, 2. Schritt: $x + 12$.',
  ],
  commonMistake: 'Klammer nur teilweise ausmultipliziert oder x-Glieder falsch subtrahiert.',
}
```

---

## 6. Visual Math Models Schema (`src/components/visualMath.js`)

Supported visual types:

### Area Model (`type: 'area-model'`)
```javascript
{
  type: 'area-model',
  title: 'Flächenmodell: $3 \\cdot (x + 4)$',
  cols: ['x', '4'],
  rows: ['3'],
  cells: [
    [
      { label: '3x', sublabel: '3 · x', color: 'hsl(180, 75%, 48%)' },
      { label: '12', sublabel: '3 · 4', color: 'hsl(35, 95%, 55%)' },
    ],
  ],
  summary: 'Gesamtfläche: $3(x + 4) = 3x + 12$',
}
```

### Algebra Tiles (`type: 'algebra-tiles'`)
```javascript
{
  type: 'algebra-tiles',
  title: 'Term $3x + 5$ als Kacheln',
  groups: [
    { label: '3x', type: 'x', count: 3, sign: '+' },
    { label: '5', type: 'unit', count: 5, sign: '+' },
  ],
  summary: '$3x + 5$: 3 Variablen-Kacheln und 5 Einer-Kacheln.',
}
```

### Custom SVG Sketches (`type: 'custom-svg'`)
Used for geometric sketches (Skizzen), dissections, coordinate graphs, and real-world diagrams.

```javascript
{
  type: 'custom-svg',
  svg: `<svg viewBox="0 0 350 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
    <!-- Parallelogram base -->
    <polygon points="50,115 230,115 280,35 100,35" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" stroke-width="2.5"/>

    <!-- Height line ha -->
    <line x1="100" y1="35" x2="100" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
    <rect x="100" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
    <circle cx="105" cy="110" r="1.5" fill="#f43f5e"/>

    <!-- Labels -->
    <text x="140" y="133" fill="#6366f1" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundseite a = 15 cm</text>
    <text x="62" y="70" fill="#f59e0b" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" transform="rotate(-57 62 70)">b = 10 cm</text>
    <text x="106" y="80" fill="#f43f5e" font-size="13" font-weight="bold" font-family="Outfit, sans-serif">hₐ = 8 cm</text>
  </svg>`,
}
```
**SVG Standards & Design Principles:**
1. **Responsive Viewport & Text Overflow:** Always provide an adequate `viewBox="0 0 W H"` with `style="max-width: 100%; height: auto; display: block; margin: 0 auto;"`. Ensure all text labels are completely visible inside the `viewBox`—especially rotated text—and prevent overlapping between text and shapes. Expand the `viewBox` rather than clipping text.
2. **Glassmorphic Palette:** Main Shapes in Hues like `#6366f1` (Indigo), `#10b981` (Emerald), `#f59e0b` (Amber), `#f43f5e` (Rose). Fills should be semi-transparent `rgba(..., 0.15)`.
3. **Typography:** Use `font-family="Outfit, sans-serif"` and high-contrast colors. Use `text-anchor="middle"` or `text-anchor="end"`.
4. **Geometric Cues:** Include right-angle markers (`<rect>` + `<circle>`) for heights.

### Animated Intro Sequences (`type: 'animated-svg'`)
For world intro sequences (`realWorldIntro`), any geometric proofs, area derivations, or spatial transformations **must use animated SVG sequences** powered by Anime.js.

```javascript
{
  type: 'animated-svg',
  animationId: 'binom-expansion', // 'binom-expansion' | 'parallelogram-shear' | 'triangle-split'
  title: '1. Binomische Formel: $(a + b)^2$',
  summary: '$(a + b)^2 = a^2 + 2ab + b^2$',
}
```
**Standards for Animated Sequences:**
1. **Auto-Looping & Digest Pacing:** Animations must auto-loop with a dedicated digest pause of at least **3.5 to 4 seconds** (`loopDelay: 3500`) at the end of each cycle.
2. **Component Modularity:** Every animation must be cleanly encapsulated in an isolated factory function within `src/components/animatedVisuals.js`.
3. **Graceful Lifecycle Management:** Every animation factory must return a `{ destroy: () => void }` controller that calls `timeline.cancel()`.

---

## 7. Tutorial Cards Schema (`src/screens/tutorial.js`)

Tutorial cards display before starting level practice. Every tutorial rule should highlight an **80/20 Pareto exam tip**.

```javascript
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
}
```

---

# PART III: ENGINE & ARCHITECTURE

## 8. Exam Simulation Mode (`#/exam`)
The timed exam simulation mirrors real Sekundarschule Niveau P (Baselland) exam conditions:
1. **Dedicated Exam Bank (`src/data/questions/examPool.js`):** To prevent rote recall of previously solved questions and ensure all tasks strictly fit the 60-second time limit, exams draw from a dedicated pool of 50 fresh, heavily curated questions (25 for Flächeninhalt, 25 for Terme). The exam engine (`questionEngine.js`) dynamically samples 20 questions based on the selected topic (`'flaechen'`, `'terme'`, or `'all'`).
2. **Timer:** 20-minute countdown (1200 seconds).
3. **Swiss Grading Scale (Noten 1.0 bis 6.0):** $\text{Note} = \frac{\text{Score}}{100} \cdot 5 + 1$, rounded to the nearest quarter grade ($0{,}25$). Target benchmark: $\ge 4.0$ = Genügend (Pass), $\ge 5.0$ = Sehr gut.

## 9. Multi-User Architecture, Sync & Security
1. **Classroom Password Gate (`authGate.js`):** A client-side SHA-256 password gate protects the initial load.
2. **Profile Isolation (`profileManager.js`):** The app supports multiple students sharing a single iPad. All progress is strictly isolated into namespaced `localStorage` keys (e.g., `lottamath_profile_<id>_state`).
3. **Zero Transfer Policy:** New profiles always start completely fresh. No legacy progress is inherited to ensure fair and accurate learning metrics.
4. **Cross-Device Sync (`api/sync.php`):** Progress is backed up using a robust PHP/MariaDB sync service. Every profile uses a 32-char hex sync token and a 9-char human-readable recovery code (`XXXX-XXXX`) to link devices without requiring PII.
5. **Stripe Subscriptions (`api/checkout.php` & `webhook.php`):** Premium access is gated by Stripe subscriptions. A strict zero-PII schema maps `license_key` directly to the `stripe_customer` without retaining sensitive data on our server.
6. **Issue Reporting (`public/report.php`):** The "Aufgabe melden" feature is handled on the backend via an asynchronous Discord Webhook. When a student flags a question, an embed is dispatched immediately to the teacher's dedicated Discord channel.
7. **Safari ITP Mitigation:** A dismissible banner prompts regular Safari users to "Add to Home Screen" for reliable `localStorage` persistence, avoiding the 7-day ITP eviction risk.
