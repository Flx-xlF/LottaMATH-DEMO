/**
 * Question Bank: World 5 (Formeln & Berechnen)
 * Topic: Flächeninhalt ebener Figuren
 * Aligned with 'Mathematik Sekundarstufe I' (Parallelogramm, Dreieck, Trapez, Drachen & Rhombus)
 */

export const WORLD5_QUESTIONS = [
  // =========================================================================
  // Level 5-1: Das Parallelogramm (A = g · h)
  // =========================================================================
  {
    id: 'w5_mc_101',
    levelId: '5-1',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie lautet die allgemeine Formel für den Flächeninhalt eines Parallelogramms?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Grid/Guideline -->
        <line x1="20" y1="115" x2="320" y2="115" stroke="var(--color-border, #475569)" stroke-dasharray="3 3" stroke-width="1"/>
        <!-- Moved triangle (ghost at right side) -->
        <polygon points="220,115 260,115 260,35" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" stroke-width="2" stroke-dasharray="4 3"/>
        <!-- Arrow indicating transfer -->
        <path d="M 65 30 Q 160 5 250 30" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrowhead)"/>
        <!-- Main Parallelogram body -->
        <polygon points="60,115 220,115 260,35 100,35" fill="rgba(99, 102, 241, 0.18)" stroke="#6366f1" stroke-width="2.5"/>
        <!-- Cut-off triangle at left -->
        <polygon points="60,115 100,115 100,35" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <!-- Height line h -->
        <line x1="100" y1="35" x2="100" y2="115" stroke="#f43f5e" stroke-width="2"/>
        <!-- Right angle symbol -->
        <rect x="100" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="105" cy="110" r="1.5" fill="#f43f5e"/>
        <!-- Labels -->
        <text x="108" y="78" fill="#f43f5e" font-size="14" font-weight="bold" font-family="Outfit, sans-serif">h</text>
        <text x="155" y="133" fill="var(--color-text, #f8fafc)" font-size="14" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundseite g</text>
        <text x="160" y="20" fill="#f59e0b" font-size="12" font-family="Outfit, sans-serif" text-anchor="middle">Dreieck umsetzen = Rechteck!</text>
        <defs>
          <marker id="arrowhead" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <polygon points="0 0, 7 3.5, 0 7" fill="#f59e0b"/>
          </marker>
        </defs>
      </svg>`,
    },
    interaction: {
      options: ['$A = g \\cdot h$', '$A = \\frac{g \\cdot h}{2}$', '$A = 2 \\cdot (g + h)$', '$A = g + h$'],
    },
    correctAnswer: '$A = g \\cdot h$',
    acceptedAnswers: ['$A = g \\cdot h$'],
    hints: [
      '💡 Tipp: Schneidet man an einer Seite ein rechtwinkliges Dreieck ab und setzt es an der anderen Seite an, entsteht ein flächengleiches Rechteck.',
      {
        text: '🔑 Visuelle Scherung: Sieh dir in der Animation an, wie das abgeschnittene Dreieck das Parallelogramm zu einem Rechteck $g \\cdot h$ ergänzt:',
        visual: {
          type: 'animated-svg',
          animationId: 'parallelogram-shear',
          title: 'Parallelogramm-Scherung zu Rechteck',
          summary: 'A = g \\cdot h',
        },
      },
      '✅ Lösung: $A = g \\cdot h$.',
    ],
    commonMistake: 'Durch 2 geteilt (Verwechslung mit dem Dreieck: $A = \\frac{g \\cdot h}{2}$).',
  },
  {
    id: 'w5_mc_102',
    levelId: '5-1',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Story: Jonas schaut sich das rechteckige und das verschobene Baugrundstück an. Beide haben eine Strassenfront von $40\\text{ m}$ und eine Tiefe (senkrechte Höhe) von $25\\text{ m}$. Was gilt für die Flächeninhalte?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 360 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Ground/Street line -->
        <line x1="15" y1="110" x2="345" y2="110" stroke="var(--color-border, #64748b)" stroke-width="2"/>
        <text x="180" y="132" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Strassenfront (Grundlinie: 40 m)</text>

        <!-- Plot 1: Rectangle -->
        <rect x="30" y="35" width="110" height="75" fill="rgba(59, 130, 246, 0.18)" stroke="#3b82f6" stroke-width="2"/>
        <text x="85" y="65" fill="#3b82f6" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundstück A</text>
        <text x="85" y="82" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Rechteck: 40 m × 25 m</text>
        <text x="85" y="102" fill="#3b82f6" font-size="11" font-weight="bold" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A = ?</text>

        <!-- Plot 2: Parallelogram -->
        <polygon points="195,110 305,110 335,35 225,35" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" stroke-width="2"/>
        <!-- Height line on parallelogram -->
        <line x1="225" y1="35" x2="225" y2="110" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
        <rect x="225" y="102" width="8" height="8" fill="none" stroke="#f43f5e" stroke-width="1"/>
        <text x="232" y="75" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif">h = 25 m</text>

        <text x="270" y="65" fill="#10b981" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundstück B</text>
        <text x="270" y="82" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Parallelogramm (g = 40 m)</text>
        <text x="270" y="102" fill="#10b981" font-size="11" font-weight="bold" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">Fläche B = ?</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Beide Grundstücke haben exakt denselben Flächeninhalt ($1000\\text{ m}^2$).',
        'Das schräge Grundstück ist grösser, weil die Schrägseiten länger sind.',
        'Das schräge Grundstück ist kleiner, weil es schief steht.',
        'Man kann den Flächeninhalt ohne die Schrägseite nicht berechnen.',
      ],
    },
    correctAnswer: 'Beide Grundstücke haben exakt denselben Flächeninhalt ($1000\\text{ m}^2$).',
    acceptedAnswers: ['Beide Grundstücke haben exakt denselben Flächeninhalt ($1000\\text{ m}^2$).'],
    hints: [
      '💡 Suki sagt: Denk an einen Stapel Spielkarten (Scherung) – wenn du ihn seitlich verschiebst, bleibt die Fläche genau gleich!',
      '🔑 Hinweis: Da Grundseite $g = 40\\text{ m}$ und Höhe $h = 25\\text{ m}$ identisch sind, gilt für beide $A = 40 \\cdot 25 = 1000\\text{ m}^2$.',
      '✅ Lösung: Beide Grundstücke haben exakt denselben Flächeninhalt ($1000\\text{ m}^2$).',
    ],
    commonMistake: 'Geglaubt, dass schrägere Figuren automatisch mehr oder weniger Fläche haben.',
  },
  {
    id: 'w5_fi_103',
    levelId: '5-1',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Berechne den Flächeninhalt des Parallelogramms mit der Grundseite $g = 8\\text{ m}$ und der zugehörigen Höhe $h = 4\\text{ m}$:',
    promptLatex: 'g = 8\\text{ m}, \\quad h = 4\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Parallelogram -->
        <polygon points="50,110 250,110 290,40 90,40" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Height line h -->
        <line x1="90" y1="40" x2="90" y2="110" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="90" y="100" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="95" cy="105" r="1.5" fill="#f43f5e"/>
        <text x="78" y="78" fill="#f43f5e" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 4 m</text>
        <!-- Base line g -->
        <line x1="50" y1="120" x2="250" y2="120" stroke="#38bdf8" stroke-width="1.5"/>
        <polygon points="50,120 58,117 58,123" fill="#38bdf8"/>
        <polygon points="250,120 242,117 242,123" fill="#38bdf8"/>
        <text x="150" y="133" fill="#38bdf8" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 8 m</text>
        <!-- Area query -->
        <text x="175" y="78" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 24',
    },
    correctAnswer: '32',
    acceptedAnswers: ['32', '32 m²', '32m²', '32 m^2'],
    hints: [
      '💡 Tipp: Verwende die Formel $A = g \\cdot h$.',
      '🔑 Hinweis: Rechne $8 \\cdot 4 = 32$.',
      '✅ Lösung: Der Flächeninhalt beträgt $32\\text{ m}^2$.',
    ],
    commonMistake: 'Durch 2 geteilt (Dreiecksformel verwendet).',
  },
  {
    id: 'w5_mc_104',
    levelId: '5-1',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Achtung Falle! Ein Parallelogramm hat die Seiten $a = 15\\text{ cm}$, $b = 10\\text{ cm}$ und die zur Seite $a$ senkrechte Höhe $h_a = 8\\text{ cm}$. Welche Rechnung liefert den korrekten Flächeninhalt?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Parallelogram -->
        <polygon points="50,115 230,115 280,35 100,35" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" stroke-width="2.5"/>

        <!-- Height line ha -->
        <line x1="100" y1="35" x2="100" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="100" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="105" cy="110" r="1.5" fill="#f43f5e"/>

        <!-- Labels -->
        <!-- Side a (base) -->
        <text x="140" y="133" fill="#6366f1" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundseite a = 15 cm</text>
        <!-- Slanted side b -->
        <text x="62" y="70" fill="#f59e0b" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" transform="rotate(-57 62 70)">b = 10 cm</text>
        <!-- Height ha -->
        <text x="106" y="80" fill="#f43f5e" font-size="13" font-weight="bold" font-family="Outfit, sans-serif">hₐ = 8 cm</text>
        <!-- Warning note centered -->
        <text x="215" y="22" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">⚠️ b ist schräg, nicht senkrecht!</text>
      </svg>`,
    },
    interaction: {
      options: [
        '$A = 15 \\cdot 8 = 120\\text{ cm}^2$',
        '$A = 15 \\cdot 10 = 150\\text{ cm}^2$',
        '$A = 10 \\cdot 8 = 80\\text{ cm}^2$',
        '$A = \\frac{15 \\cdot 8}{2} = 60\\text{ cm}^2$',
      ],
    },
    correctAnswer: '$A = 15 \\cdot 8 = 120\\text{ cm}^2$',
    acceptedAnswers: ['$A = 15 \\cdot 8 = 120\\text{ cm}^2$'],
    hints: [
      '💡 Suki sagt: Vorsicht Falle! Für die Fläche darfst du NIEMALS zwei Nachbarseiten miteinander multiplizieren!',
      '🔑 Hinweis: Man nimmt immer die Grundseite mal die senkrecht darauf stehende Höhe: $a \\cdot h_a$. Die Seite $b$ wird für den Umfang gebraucht, nicht für die Fläche.',
      '✅ Lösung: $A = 15 \\cdot 8 = 120\\text{ cm}^2$.',
    ],
    commonMistake: 'Wie beim Rechteck einfach $a \\cdot b$ gerechnet ($15 \\cdot 10$).',
  },
  {
    id: 'w5_do_105',
    levelId: '5-1',
    type: 'drag-order',
    difficulty: 2,
    prompt: 'Bringe die Schritte zur Herleitung der Parallelogramm-Fläche in die richtige logische Reihenfolge:',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Parallelogram main body -->
        <polygon points="90,110 230,110 270,40 130,40" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" stroke-width="2"/>
        <!-- Cut-off triangle on left -->
        <polygon points="50,110 90,110 90,40" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3 3"/>
        <!-- Height cut line -->
        <line x1="90" y1="40" x2="90" y2="110" stroke="#f43f5e" stroke-width="2"/>
        <text x="76" y="80" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">h</text>
        <!-- Translated triangle on right -->
        <polygon points="230,110 270,110 270,40" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="2" stroke-dasharray="3 3"/>
        <!-- Top base label -->
        <text x="180" y="32" fill="#6366f1" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Rechteck entsteht: A = g · h</text>
        <!-- Base line g -->
        <text x="160" y="128" fill="#6366f1" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundseite g</text>
      </svg>`,
    },
    interaction: {
      items: [
        'Rechtwinkliges Dreieck an einer Seite abschneiden',
        'Fläche des entstandenen Rechtecks berechnen: $A = g \\cdot h$',
        'Senkrechte Höhe h auf die Grundseite g einzeichnen',
        'Dreieck an der gegenüberliegenden Seite wieder anfügen',
      ],
      correctOrder: [
        'Senkrechte Höhe h auf die Grundseite g einzeichnen',
        'Rechtwinkliges Dreieck an einer Seite abschneiden',
        'Dreieck an der gegenüberliegenden Seite wieder anfügen',
        'Fläche des entstandenen Rechtecks berechnen: $A = g \\cdot h$',
      ],
    },
    correctAnswer: [
      'Senkrechte Höhe h auf die Grundseite g einzeichnen',
      'Rechtwinkliges Dreieck an einer Seite abschneiden',
      'Dreieck an der gegenüberliegenden Seite wieder anfügen',
      'Fläche des entstandenen Rechtecks berechnen: $A = g \\cdot h$',
    ],
    acceptedAnswers: [],
    hints: [
      '💡 Tipp: Die Herleitung verwandelt das schiefe Parallelogramm durch Zerschneiden in ein Rechteck.',
      '🔑 Hinweis: Zuerst wird die Höhe eingezeichnet und das Teildreieck abgeschnitten, dann drüben angefügt.',
      '✅ Lösung: 1. Höhe einzeichnen → 2. Dreieck abschneiden → 3. Drüben anfügen → 4. $A = g \\cdot h$ berechnen.',
    ],
    commonMistake: 'Das Berechnen des fertigen Rechtecks an den Anfang gesetzt.',
  },
  {
    id: 'w5_fi_106',
    levelId: '5-1',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Ein Parallelogramm hat eine Grundseite von $g = 20\\text{ cm}$ und eine Höhe von $h = 15\\text{ cm}$. Berechne seinen Flächeninhalt $A$ in $\\text{cm}^2$:',
    promptLatex: 'g = 20\\text{ cm}, \\quad h = 15\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="40,110 240,110 290,35 90,35" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round"/>
        <line x1="90" y1="35" x2="90" y2="110" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="90" y="100" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="95" cy="105" r="1.5" fill="#f43f5e"/>
        <text x="78" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 15 cm</text>
        <line x1="40" y1="120" x2="240" y2="120" stroke="#10b981" stroke-width="1.5"/>
        <polygon points="40,120 48,117 48,123" fill="#10b981"/>
        <polygon points="240,120 232,117 232,123" fill="#10b981"/>
        <text x="140" y="133" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 20 cm</text>
        <text x="165" y="75" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 250',
    },
    correctAnswer: '300',
    acceptedAnswers: ['300', '300 cm²', '300cm²', '300 cm^2'],
    hints: [
      '💡 Tipp: Formel für das Parallelogramm: $A = g \\cdot h$.',
      '🔑 Hinweis: Rechne $20 \\cdot 15$. (Einfacher Kopfrechentrick: $2 \\cdot 15 = 30$, also $20 \\cdot 15 = 300$).',
      '✅ Lösung: $A = 300\\text{ cm}^2$.',
    ],
    commonMistake: 'Durch 2 geteilt (Dreiecksformel verwendet) oder Kopfrechenfehler.',
  },

  // =========================================================================
  // Level 5-2: Das Dreieck & 3 Höhen (A = (g · h) / 2)
  // =========================================================================
  {
    id: 'w5_mc_201',
    levelId: '5-2',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Warum teilt man bei der Dreiecks-Flächenformel $A = \\frac{g \\cdot h}{2}$ durch 2?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 155" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Parallelogram outline -->
        <polygon points="40,115 220,115 280,35 100,35" fill="none" stroke="var(--color-border, #64748b)" stroke-width="1.5" stroke-dasharray="3 3"/>

        <!-- Triangle 1 (Bottom) -->
        <polygon points="40,115 220,115 100,35" fill="rgba(99, 102, 241, 0.25)" stroke="#6366f1" stroke-width="2.5"/>
        <!-- Triangle 2 (Top - congruent partner) -->
        <polygon points="100,35 280,35 220,115" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="2"/>

        <!-- Diagonal line dividing them -->
        <line x1="100" y1="35" x2="220" y2="115" stroke="#f59e0b" stroke-width="2.5"/>

        <!-- Height line h -->
        <line x1="100" y1="35" x2="100" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="100" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="105" cy="110" r="1.5" fill="#f43f5e"/>

        <!-- Base line g dimension markers -->
        <line x1="40" y1="118" x2="40" y2="132" stroke="#6366f1" stroke-width="1.5"/>
        <line x1="220" y1="118" x2="220" y2="132" stroke="#6366f1" stroke-width="1.5"/>
        <line x1="40" y1="126" x2="220" y2="126" stroke="#6366f1" stroke-width="1.5"/>
        <polygon points="40,126 48,123 48,129" fill="#6366f1"/>
        <polygon points="220,126 212,123 212,129" fill="#6366f1"/>

        <!-- Labels -->
        <text x="130" y="85" fill="#6366f1" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">Dreieck 1</text>
        <text x="195" y="60" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">Dreieck 2</text>
        <text x="90" y="78" fill="#f43f5e" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">Höhe h</text>
        <text x="130" y="145" fill="#6366f1" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundseite g</text>
        <text x="190" y="28" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">gleiche Seite g</text>
        <text x="170" y="14" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">2 Dreiecke = 1 Parallelogramm (g · h)</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Weil jedes Dreieck genau die Hälfte eines Rechtecks oder Parallelogramms mit gleicher Grundseite und Höhe ist.',
        'Weil ein Dreieck immer aus zwei rechtwinkligen Dreiecken besteht.',
        'Weil Dreiecke immer 2 spitze Winkel haben.',
        'Weil die Höhe nur die halbe Strecke misst.',
      ],
    },
    correctAnswer: 'Weil jedes Dreieck genau die Hälfte eines Rechtecks oder Parallelogramms mit gleicher Grundseite und Höhe ist.',
    acceptedAnswers: ['Weil jedes Dreieck genau die Hälfte eines Rechtecks oder Parallelogramms mit gleicher Grundseite und Höhe ist.'],
    hints: [
      '💡 Suki sagt: Verdopple das Dreieck gedanklich und drehe es um – zusammen bilden sie immer ein Parallelogramm mit $A = g \\cdot h$!',
      {
        text: '🔑 Visuelle Herleitung: Sieh dir in der Animation an, wie zwei kongruente Dreiecke ein Parallelogramm bilden ($A = \\frac{g \\cdot h}{2}$):',
        visual: {
          type: 'animated-svg',
          animationId: 'triangle-split',
          title: 'Dreiecksfläche: $A = \\frac{g \\cdot h}{2}$',
          summary: 'A = \\frac{g \\cdot h}{2}',
        },
      },
      '✅ Lösung: Weil jedes Dreieck genau die Hälfte eines umschriebenen Parallelogramms mit gleicher Grundseite und Höhe ist.',
    ],
    commonMistake: 'Die geometrische Verdopplung nicht erkannt.',
  },
  {
    id: 'w5_fi_202',
    levelId: '5-2',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Story (Glaser): Für ein dreieckiges Fenster misst der Glaser eine Grundlinie von $g = 4\\text{ m}$ und eine Höhe von $h = 3\\text{ m}$. Wie gross ist die Glasfläche in $\\text{m}^2$?',
    promptLatex: 'g = 4\\text{ m}, \\quad h = 3\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 160" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Window frame (gable triangle window) -->
        <polygon points="50,120 300,120 175,25" fill="rgba(6, 182, 212, 0.18)" stroke="#06b6d4" stroke-width="2.5" stroke-linejoin="round"/>

        <!-- Glass reflection lines -->
        <line x1="135" y1="55" x2="105" y2="105" stroke="rgba(255, 255, 255, 0.35)" stroke-width="2" stroke-linecap="round"/>
        <line x1="150" y1="60" x2="130" y2="95" stroke="rgba(255, 255, 255, 0.25)" stroke-width="1.5" stroke-linecap="round"/>

        <!-- Height line h = 3 m -->
        <line x1="175" y1="25" x2="175" y2="120" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="175" y="110" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="180" cy="115" r="1.5" fill="#f43f5e"/>
        <text x="187" y="78" fill="#f43f5e" font-size="13" font-weight="bold" font-family="Outfit, sans-serif">h = 3 m</text>

        <!-- Base dimension line g = 4 m -->
        <line x1="50" y1="122" x2="50" y2="142" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="300" y1="122" x2="300" y2="142" stroke="#06b6d4" stroke-width="1.5"/>
        <line x1="50" y1="136" x2="300" y2="136" stroke="#06b6d4" stroke-width="1.5"/>
        <polygon points="50,136 58,133 58,139" fill="#06b6d4"/>
        <polygon points="300,136 292,133 292,139" fill="#06b6d4"/>
        <text x="175" y="153" fill="#06b6d4" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundlinie g = 4 m</text>

        <!-- Window title and area prompt (no spoiler!) -->
        <text x="175" y="16" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Dreieckiges Glasfenster</text>
        <text x="105" y="85" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif">Fläche A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 10',
    },
    correctAnswer: '6',
    acceptedAnswers: ['6', '6 m²', '6m²', '6 m^2'],
    hints: [
      '💡 Tipp: Formel für das Dreieck: $A = \\frac{g \\cdot h}{2}$.',
      '🔑 Hinweis: $4 \\cdot 3 = 12$. Jetzt noch durch 2 teilen: $12 : 2 = 6$.',
      '✅ Lösung: $A = 6\\text{ m}^2$.',
    ],
    commonMistake: 'Das Teilen durch 2 am Ende vergessen ($12$ statt $6$).',
  },
  {
    id: 'w5_mc_203',
    levelId: '5-2',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Ein Dreieck $ABC$ hat drei Seiten $a, b, c$ und drei Höhen $h_a, h_b, h_c$. Welche Gleichung gilt für den Flächeninhalt?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 130" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <style>
          .tri { stroke: var(--color-primary); stroke-width: 2; fill: var(--color-primary-transparent); stroke-linejoin: round; }
          .height { stroke: var(--color-error); stroke-width: 1.5; stroke-dasharray: 4,4; stroke-linecap: round; }
          .text { font-family: Outfit, sans-serif; font-size: 14px; font-weight: 600; fill: var(--color-text); }
          .text-h { fill: var(--color-error); font-style: italic; }
          .base { stroke: var(--color-text); stroke-width: 3; stroke-linecap: round; }
          .sub { font-size: 10px; font-style: normal; }
        </style>
        
        <!-- Dreieck 1 (Grundseite c) -->
        <g transform="translate(10, 20)">
          <path d="M 0 80 L 90 80 L 30 10 Z" class="tri" />
          <line x1="0" y1="80" x2="90" y2="80" class="base" />
          <line x1="30" y1="10" x2="30" y2="80" class="height" />
          <text x="45" y="98" class="text" text-anchor="middle">c</text>
          <text x="25" y="55" class="text text-h" text-anchor="end">h<tspan dy="3" class="sub">c</tspan></text>
        </g>

        <!-- Dreieck 2 (Gleiches Dreieck rotiert, Grundseite a) -->
        <g transform="translate(125, 20)">
          <path d="M 0 80 L 92 80 L 65 20 Z" class="tri" />
          <line x1="0" y1="80" x2="92" y2="80" class="base" />
          <line x1="65" y1="20" x2="65" y2="80" class="height" />
          <text x="46" y="98" class="text" text-anchor="middle">a</text>
          <text x="60" y="55" class="text text-h" text-anchor="end">h<tspan dy="3" class="sub">a</tspan></text>
        </g>

        <!-- Dreieck 3 (Gleiches Dreieck rotiert, Grundseite b) -->
        <g transform="translate(240, 20)">
          <path d="M 0 80 L 76 80 L 20 15 Z" class="tri" />
          <line x1="0" y1="80" x2="76" y2="80" class="base" />
          <line x1="20" y1="15" x2="20" y2="80" class="height" />
          <text x="38" y="98" class="text" text-anchor="middle">b</text>
          <text x="15" y="55" class="text text-h" text-anchor="end">h<tspan dy="3" class="sub">b</tspan></text>
        </g>
      </svg>`
    },
    interaction: {
      options: [
        '$A = \\frac{a \\cdot h_a}{2} = \\frac{b \\cdot h_b}{2} = \\frac{c \\cdot h_c}{2}$',
        '$A = \\frac{a \\cdot h_b}{2}$',
        '$A = (a + b + c) \\cdot h$',
        '$A = \\frac{a \\cdot b \\cdot c}{2}$',
      ],
    },
    correctAnswer: '$A = \\frac{a \\cdot h_a}{2} = \\frac{b \\cdot h_b}{2} = \\frac{c \\cdot h_c}{2}$',
    acceptedAnswers: ['$A = \\frac{a \\cdot h_a}{2} = \\frac{b \\cdot h_b}{2} = \\frac{c \\cdot h_c}{2}$'],
    hints: [
      '💡 Tipp: Du kannst jede der drei Seiten als Grundseite wählen, musst dann aber die genau zugehörige Höhe nehmen.',
      '🔑 Hinweis: Zu Seite $a$ gehört $h_a$, zu Seite $b$ gehört $h_b$, zu Seite $c$ gehört $h_c$. Alle drei Varianten liefern denselben Flächeninhalt!',
      '✅ Lösung: $A = \\frac{a \\cdot h_a}{2} = \\frac{b \\cdot h_b}{2} = \\frac{c \\cdot h_c}{2}$.',
    ],
    commonMistake: 'Falsche Höhe zu einer Seite gewählt (z.B. $a \\cdot h_b$).',
  },
  {
    id: 'w5_fi_204',
    levelId: '5-2',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Berechne den Flächeninhalt des Dreiecks mit $g = 18\\text{ cm}$ und $h = 10\\text{ cm}$ in $\\text{cm}^2$:',
    promptLatex: 'g = 18\\text{ cm}, \\quad h = 10\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Triangle -->
        <polygon points="50,115 270,115 170,30" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Height h = 10 cm -->
        <line x1="170" y1="30" x2="170" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="170" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="175" cy="110" r="1.5" fill="#f43f5e"/>
        <text x="182" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">h = 10 cm</text>
        <!-- Base g = 18 cm -->
        <line x1="50" y1="126" x2="270" y2="126" stroke="#38bdf8" stroke-width="1.5"/>
        <polygon points="50,126 58,123 58,129" fill="#38bdf8"/>
        <polygon points="270,126 262,123 262,129" fill="#38bdf8"/>
        <text x="160" y="139" fill="#38bdf8" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 18 cm</text>
        <!-- Area prompt -->
        <text x="110" y="85" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 45',
    },
    correctAnswer: '90',
    acceptedAnswers: ['90', '90 cm²', '90cm²', '90 cm^2'],
    hints: [
      '💡 Tipp: Rechne $A = \\frac{18 \\cdot 10}{2}$.',
      '🔑 Hinweis: Kürze zuerst $18 : 2 = 9$. Rechne dann $9 \\cdot 10 = 90$.',
      '✅ Lösung: $A = 90\\text{ cm}^2$.',
    ],
    commonMistake: 'Erst multipliziert und dann das Halbieren vergessen ($180$).',
  },
  {
    id: 'w5_mc_205',
    levelId: '5-2',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Drei Dreiecke $ABC_1$, $ABC_2$ und $ABC_3$ haben dieselbe Grundseite $AB$ und ihre Spitzen $C_1, C_2, C_3$ liegen auf einer Parallelen zu $AB$. Was gilt für ihre Flächeninhalte?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 360 150" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Top and Bottom Parallel Lines -->
        <line x1="15" y1="35" x2="345" y2="35" stroke="var(--color-border, #64748b)" stroke-width="1.5" stroke-dasharray="4 3"/>
        <line x1="15" y1="115" x2="345" y2="115" stroke="var(--color-border, #64748b)" stroke-width="1.5" stroke-dasharray="4 3"/>
        
        <!-- Triangle 1 (C1: left) -->
        <polygon points="90,115 190,115 60,35" fill="rgba(6, 182, 212, 0.15)" stroke="#06b6d4" stroke-width="2"/>
        <!-- Triangle 2 (C2: center) -->
        <polygon points="90,115 190,115 140,35" fill="rgba(99, 102, 241, 0.18)" stroke="#6366f1" stroke-width="2"/>
        <!-- Triangle 3 (C3: right) -->
        <polygon points="90,115 190,115 250,35" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2"/>

        <!-- Base AB -->
        <line x1="90" y1="115" x2="190" y2="115" stroke="var(--color-text, #f8fafc)" stroke-width="3.5"/>
        <circle cx="90" cy="115" r="3.5" fill="var(--color-text, #f8fafc)"/>
        <circle cx="190" cy="115" r="3.5" fill="var(--color-text, #f8fafc)"/>
        <text x="85" y="132" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">A</text>
        <text x="195" y="132" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">B</text>
        <text x="140" y="132" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundseite g</text>

        <!-- Points C1, C2, C3 -->
        <circle cx="60" cy="35" r="3.5" fill="#06b6d4"/>
        <text x="60" y="25" fill="#06b6d4" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">C₁</text>

        <circle cx="140" cy="35" r="3.5" fill="#6366f1"/>
        <text x="140" y="25" fill="#6366f1" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">C₂</text>

        <circle cx="250" cy="35" r="3.5" fill="#f59e0b"/>
        <text x="250" y="25" fill="#f59e0b" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">C₃</text>

        <!-- Height measure h -->
        <line x1="310" y1="35" x2="310" y2="115" stroke="#f43f5e" stroke-width="2"/>
        <line x1="305" y1="35" x2="315" y2="35" stroke="#f43f5e" stroke-width="1.5"/>
        <line x1="305" y1="115" x2="315" y2="115" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="322" y="80" fill="#f43f5e" font-size="13" font-weight="bold" font-family="Outfit, sans-serif">h</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Alle drei Dreiecke haben exakt denselben Flächeninhalt.',
        'Das spitzwinkligste Dreieck hat den grössten Flächeninhalt.',
        'Das Dreieck mit den längsten Schenkeln hat den grössten Inhalt.',
        'Die Flächeninhalte sind alle unterschiedlich.',
      ],
    },
    correctAnswer: 'Alle drei Dreiecke haben exakt denselben Flächeninhalt.',
    acceptedAnswers: ['Alle drei Dreiecke haben exakt denselben Flächeninhalt.'],
    hints: [
      '💡 Suki sagt: Alle Spitzen haben denselben senkrechten Abstand zur Grundlinie – also ist die Höhe $h$ bei allen dreien gleich!',
      '🔑 Hinweis: Da $g$ und $h$ bei allen drei Dreiecken identisch sind, ergibt $A = \\frac{g \\cdot h}{2}$ jedes Mal denselben Wert.',
      '✅ Lösung: Alle drei Dreiecke haben exakt denselben Flächeninhalt.',
    ],
    commonMistake: 'Optische Täuschung: geglaubt, schiefe oder breitere Dreiecke hätten mehr Fläche.',
  },

  // =========================================================================
  // Level 5-3: Das Trapez (A = ((a + c) / 2) · h)
  // =========================================================================
  {
    id: 'w5_mc_301',
    levelId: '5-3',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie lautet die Formel für den Flächeninhalt eines Trapezes mit den parallelen Seiten $a$ und $c$ und der Höhe $h$?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Trapezoid body -->
        <polygon points="40,115 280,115 220,35 100,35" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2.5"/>

        <!-- Top parallel side c -->
        <line x1="100" y1="35" x2="220" y2="35" stroke="#10b981" stroke-width="3.5"/>
        <text x="160" y="25" fill="#10b981" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c (obere Seite)</text>

        <!-- Bottom parallel side a -->
        <line x1="40" y1="115" x2="280" y2="115" stroke="#6366f1" stroke-width="3.5"/>
        <text x="160" y="135" fill="#6366f1" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a (Grundseite)</text>

        <!-- Height line h -->
        <line x1="100" y1="35" x2="100" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="100" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="105" cy="110" r="1.5" fill="#f43f5e"/>
        <text x="106" y="80" fill="#f43f5e" font-size="13" font-weight="bold" font-family="Outfit, sans-serif">h</text>

        <!-- Parallel lines hint -->
        <text x="275" y="45" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif">a ∥ c</text>
      </svg>`,
    },
    interaction: {
      options: [
        '$A = \\frac{a + c}{2} \\cdot h$',
        '$A = (a + c) \\cdot h$',
        '$A = \\frac{a \\cdot c \\cdot h}{2}$',
        '$A = a \\cdot h + c \\cdot h$',
      ],
    },
    correctAnswer: '$A = \\frac{a + c}{2} \\cdot h$',
    acceptedAnswers: ['$A = \\frac{a + c}{2} \\cdot h$'],
    hints: [
      '💡 Tipp: Man nimmt den Durchschnitt (Mittelwert) der beiden parallelen Seiten $m = \\frac{a + c}{2}$ und multipliziert ihn mit der Höhe.',
      '🔑 Hinweis: Zwei gleiche Trapeze aneinandergelegt ergeben ein Parallelogramm mit Grundseite $(a + c)$ und Höhe $h$. Ein Trapez ist die Hälfte davon.',
      '✅ Lösung: $A = \\frac{a + c}{2} \\cdot h$.',
    ],
    commonMistake: 'Das Teilen durch 2 vergessen: $(a + c) \\cdot h$ wäre das doppelte Trapez!',
  },
  {
    id: 'w5_fi_302',
    levelId: '5-3',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Story (Terrasse): Eine trapezförmige Terrasse hat die parallelen Seiten $a = 8\\text{ m}$ und $c = 4\\text{ m}$. Die Höhe beträgt $h = 5\\text{ m}$. Wie gross ist die Fläche in $\\text{m}^2$?',
    promptLatex: 'a = 8\\text{ m}, \\quad c = 4\\text{ m}, \\quad h = 5\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Terrace trapezoid -->
        <polygon points="50,115 270,115 210,35 110,35" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Height h = 5 m -->
        <line x1="110" y1="35" x2="110" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="110" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="115" cy="110" r="1.5" fill="#f43f5e"/>
        <text x="96" y="78" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 5 m</text>
        <!-- Top side c = 4 m -->
        <text x="160" y="25" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = 4 m</text>
        <!-- Bottom base a = 8 m -->
        <line x1="50" y1="124" x2="270" y2="124" stroke="#f59e0b" stroke-width="1.5"/>
        <polygon points="50,124 58,121 58,127" fill="#f59e0b"/>
        <polygon points="270,124 262,121 262,127" fill="#f59e0b"/>
        <text x="160" y="137" fill="#f59e0b" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 8 m</text>
        <!-- Area prompt -->
        <text x="175" y="78" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 25',
    },
    correctAnswer: '30',
    acceptedAnswers: ['30', '30 m²', '30m²', '30 m^2'],
    hints: [
      '💡 Tipp: Berechne zuerst den Mittelwert der parallelen Seiten: $\\frac{8 + 4}{2} = 6$.',
      '🔑 Hinweis: Multipliziere nun den Mittelwert mit der Höhe: $6 \\cdot 5 = 30$.',
      '✅ Lösung: $A = 30\\text{ m}^2$.',
    ],
    commonMistake: 'Seiten multipliziert statt addiert: $(8 \\cdot 4) / 2$.',
  },
  {
    id: 'w5_fi_303',
    levelId: '5-3',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Berechne den Flächeninhalt des Trapezes mit $a = 12\\text{ m}$, $c = 8\\text{ m}$ und $h = 5\\text{ m}$ in $\\text{m}^2$:',
    promptLatex: 'a = 12\\text{ m}, \\quad c = 8\\text{ m}, \\quad h = 5\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 150" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Trapezoid -->
        <polygon points="45,115 285,115 245,35 85,35" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round"/>

        <!-- Height line h = 5 m -->
        <line x1="85" y1="35" x2="85" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="85" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="90" cy="110" r="1.5" fill="#f43f5e"/>
        <text x="73" y="78" fill="#f43f5e" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 5 m</text>

        <!-- Top side c = 8 m -->
        <text x="165" y="24" fill="#10b981" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = 8 m</text>

        <!-- Bottom base a = 12 m -->
        <line x1="45" y1="123" x2="45" y2="137" stroke="#6366f1" stroke-width="1.5"/>
        <line x1="285" y1="123" x2="285" y2="137" stroke="#6366f1" stroke-width="1.5"/>
        <line x1="45" y1="131" x2="285" y2="131" stroke="#6366f1" stroke-width="1.5"/>
        <polygon points="45,131 53,128 53,134" fill="#6366f1"/>
        <polygon points="285,131 277,128 277,134" fill="#6366f1"/>
        <text x="165" y="146" fill="#6366f1" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 12 m</text>

        <!-- Area prompt (no spoiler!) -->
        <text x="165" y="78" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 40',
    },
    correctAnswer: '50',
    acceptedAnswers: ['50', '50 m²', '50m²', '50 m^2'],
    hints: [
      '💡 Tipp: Berechne zuerst den Mittelwert der parallelen Seiten: $\\frac{a + c}{2} = \\frac{12 + 8}{2} = \\frac{20}{2} = 10$.',
      '🔑 Hinweis: Multipliziere nun den Mittelwert (Mittellinie $m = 10\\text{ m}$) mit der Höhe: $10 \\cdot 5 = 50$.',
      '✅ Lösung: $A = 50\\text{ m}^2$.',
    ],
    commonMistake: 'Seiten multipliziert statt addiert: $(12 \\cdot 8) / 2$, oder falsche Höhe verwendet.',
  },
  {
    id: 'w5_mc_304',
    levelId: '5-3',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Was versteht man bei einem Trapez unter der "Mittellinie" $m$?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Trapezoid background -->
        <polygon points="40,115 280,115 220,35 100,35" fill="rgba(99, 102, 241, 0.12)" stroke="#6366f1" stroke-width="2"/>

        <!-- Top side c -->
        <line x1="100" y1="35" x2="220" y2="35" stroke="#10b981" stroke-width="2.5"/>
        <text x="160" y="27" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c</text>

        <!-- Bottom side a -->
        <line x1="40" y1="115" x2="280" y2="115" stroke="#6366f1" stroke-width="2.5"/>
        <text x="160" y="133" fill="#6366f1" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a</text>

        <!-- Mittellinie m -->
        <line x1="70" y1="75" x2="250" y2="75" stroke="#f59e0b" stroke-width="3" stroke-dasharray="5 3"/>
        <circle cx="70" cy="75" r="4" fill="#f59e0b"/>
        <circle cx="250" cy="75" r="4" fill="#f59e0b"/>
        <text x="160" y="70" fill="#f59e0b" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Mittellinie m = (a + c) / 2</text>

        <!-- Side note -->
        <text x="160" y="93" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Fläche: A = m · h</text>
      </svg>`,
    },
    interaction: {
      options: [
        '$m = \\frac{a + c}{2}$ (Der Durchschnitt der beiden parallelen Grundseiten)',
        '$m = \\frac{a + b + c + d}{4}$ (Der Durchschnitt aller vier Seiten)',
        '$m = \\frac{h}{2}$ (Die halbe Höhe)',
        '$m = a - c$ (Die Differenz der Grundseiten)',
      ],
    },
    correctAnswer: '$m = \\frac{a + c}{2}$ (Der Durchschnitt der beiden parallelen Grundseiten)',
    acceptedAnswers: ['$m = \\frac{a + c}{2}$ (Der Durchschnitt der beiden parallelen Grundseiten)'],
    hints: [
      '💡 Suki sagt: Die Mittellinie verbindet die Mittelpunkte der Schenkel und ist genau der Mittelwert von $a$ und $c$.',
      '🔑 Hinweis: Deshalb kann man die Trapezformel auch extrem kurz schreiben als: $A = m \\cdot h$.',
      '✅ Lösung: $m = \\frac{a + c}{2}$.',
    ],
    commonMistake: 'Mittellinie mit der Höhe oder dem Durchschnitt aller Seiten verwechselt.',
  },

  // =========================================================================
  // Level 5-4: Drachen & Rhombus (A = (e · f) / 2)
  // =========================================================================
  {
    id: 'w5_mc_401',
    levelId: '5-4',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie berechnet man den Flächeninhalt eines Drachenvierecks oder Rhombus mit den Diagonalen $e$ und $f$?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 150" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Surrounding rectangle (dashed) -->
        <rect x="70" y="20" width="200" height="110" fill="none" stroke="var(--color-border, #64748b)" stroke-width="1.5" stroke-dasharray="4 3"/>

        <!-- Inscribed Kite -->
        <polygon points="170,20 270,60 170,130 70,60" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="2.5"/>

        <!-- Diagonal e (horizontal) -->
        <line x1="70" y1="60" x2="270" y2="60" stroke="#6366f1" stroke-width="2"/>
        <text x="220" y="52" fill="#6366f1" font-size="13" font-weight="bold" font-family="Outfit, sans-serif">e</text>

        <!-- Diagonal f (vertical) -->
        <line x1="170" y1="20" x2="170" y2="130" stroke="#10b981" stroke-width="2"/>
        <text x="178" y="100" fill="#10b981" font-size="13" font-weight="bold" font-family="Outfit, sans-serif">f</text>

        <!-- Right angle symbol -->
        <rect x="170" y="60" width="8" height="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="174" cy="64" r="1" fill="#f59e0b"/>

        <!-- Explanatory text -->
        <text x="170" y="12" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Rechtecksfläche = e · f</text>
        <text x="170" y="145" fill="#a855f7" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Drachenfläche = genau die Hälfte: (e · f) / 2</text>
      </svg>`,
    },
    interaction: {
      options: [
        '$A = \\frac{e \\cdot f}{2}$',
        '$A = e \\cdot f$',
        '$A = 2 \\cdot (e + f)$',
        '$A = e + f$',
      ],
    },
    correctAnswer: '$A = \\frac{e \\cdot f}{2}$',
    acceptedAnswers: ['$A = \\frac{e \\cdot f}{2}$'],
    hints: [
      '💡 Tipp: Die beiden Diagonalen $e$ und $f$ stehen senkrecht aufeinander.',
      '🔑 Hinweis: Zeichnet man um den Drachen ein Rechteck mit den Seiten $e$ und $f$, füllt der Drachen genau die Hälfte des Rechtecks aus.',
      '✅ Lösung: $A = \\frac{e \\cdot f}{2}$.',
    ],
    commonMistake: 'Rechtecksfläche $e \\cdot f$ genommen und das Halbieren vergessen.',
  },
  {
    id: 'w5_fi_402',
    levelId: '5-4',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Story (Drachenbau): Sophie und Niklas bauen einen Drachen mit zwei Holzstäben (Diagonalen) von $e = 100\\text{ cm}$ und $f = 80\\text{ cm}$. Wie viel Papierfläche in $\\text{cm}^2$ deckt der Drachen ab?',
    promptLatex: 'e = 100\\text{ cm}, \\quad f = 80\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 150" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Kite outline -->
        <polygon points="170,15 260,55 170,135 80,55" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="2.5"/>
        <!-- Horizontal diagonal f = 80 cm -->
        <line x1="80" y1="55" x2="260" y2="55" stroke="#3b82f6" stroke-width="2"/>
        <text x="215" y="47" fill="#3b82f6" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">f = 80 cm</text>
        <!-- Vertical diagonal e = 100 cm -->
        <line x1="170" y1="15" x2="170" y2="135" stroke="#10b981" stroke-width="2"/>
        <text x="178" y="100" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">e = 100 cm</text>
        <!-- Right angle mark -->
        <rect x="170" y="55" width="8" height="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <!-- Area prompt -->
        <text x="125" y="95" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">Fläche = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 3200',
    },
    correctAnswer: '4000',
    acceptedAnswers: ['4000', '4000 cm²', '4000cm²', '4000 cm^2'],
    hints: [
      '💡 Tipp: Formel für den Drachen: $A = \\frac{e \\cdot f}{2}$.',
      '🔑 Hinweis: $100 \\cdot 80 = 8000$. Halbiere das Ergebnis: $8000 : 2 = 4000$.',
      '✅ Lösung: $A = 4000\\text{ cm}^2$.',
    ],
    commonMistake: 'Nicht durch 2 geteilt ($8000$).',
  },
  {
    id: 'w5_mc_403',
    levelId: '5-4',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Ein Rhombus (Raute) hat alle 4 Seiten gleich lang ($a = 6\\text{ cm}$) und eine Höhe von $h = 5\\text{ cm}$. Warum kann man seine Fläche AUCH mit $A = a \\cdot h = 30\\text{ cm}^2$ berechnen?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Rhombus as Parallelogram -->
        <polygon points="70,115 210,115 250,35 110,35" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" stroke-width="2.5"/>
        <!-- Height line h = 5 cm -->
        <line x1="110" y1="35" x2="110" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="110" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="115" cy="110" r="1.5" fill="#f43f5e"/>
        <text x="96" y="78" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 5 cm</text>
        <!-- Equal sides a = 6 cm -->
        <text x="140" y="132" fill="#a855f7" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 6 cm</text>
        <text x="180" y="27" fill="#a855f7" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 6 cm</text>
        <text x="242" y="80" fill="#a855f7" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">a = 6 cm</text>
        <!-- Annotation -->
        <text x="175" y="78" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = a · h = ?</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Weil jeder Rhombus auch ein Parallelogramm mit 4 gleich langen Seiten ist.',
        'Das ist ein Zufall, der nur bei Rhomben mit $6\\text{ cm}$ klappt.',
        'Weil man beim Rhombus immer die Höhe quadriert.',
        'Das ist falsch, man darf NUR die Diagonalenformel nutzen.',
      ],
    },
    correctAnswer: 'Weil jeder Rhombus auch ein Parallelogramm mit 4 gleich langen Seiten ist.',
    acceptedAnswers: ['Weil jeder Rhombus auch ein Parallelogramm mit 4 gleich langen Seiten ist.'],
    hints: [
      '💡 Suki sagt: Ein Rhombus ist ein echter Verwandlungskünstler: Er ist gleichzeitig ein Drachen UND ein Parallelogramm!',
      '🔑 Hinweis: Daher funktionieren beide Formeln: $A = \\frac{e \\cdot f}{2}$ UND $A = a \\cdot h_a$. Beide liefern dasselbe Ergebnis.',
      '✅ Lösung: Weil jeder Rhombus auch ein Parallelogramm mit 4 gleich langen Seiten ist.',
    ],
    commonMistake: 'Geglaubt, für den Rhombus gelte ausschliesslich die Diagonalenformel.',
  },
  {
    id: 'w5_fi_404',
    levelId: '5-4',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Ein Drachenviereck hat die Diagonalen $e = 10\\text{ cm}$ und $f = 6\\text{ cm}$. Berechne seinen Flächeninhalt in $\\text{cm}^2$:',
    promptLatex: 'e = 10\\text{ cm}, \\quad f = 6\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Kite outline -->
        <polygon points="170,15 250,55 170,130 90,55" fill="rgba(56, 189, 248, 0.18)" stroke="#38bdf8" stroke-width="2.5"/>
        <!-- Horizontal diagonal f = 6 cm -->
        <line x1="90" y1="55" x2="250" y2="55" stroke="#6366f1" stroke-width="2"/>
        <text x="210" y="47" fill="#6366f1" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">f = 6 cm</text>
        <!-- Vertical diagonal e = 10 cm -->
        <line x1="170" y1="15" x2="170" y2="130" stroke="#10b981" stroke-width="2"/>
        <text x="178" y="98" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">e = 10 cm</text>
        <rect x="170" y="55" width="8" height="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="125" y="90" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 24',
    },
    correctAnswer: '30',
    acceptedAnswers: ['30', '30 cm²', '30cm²', '30 cm^2'],
    hints: [
      '💡 Tipp: Rechne $A = \\frac{10 \\cdot 6}{2}$.',
      '🔑 Hinweis: $10 \\cdot 6 = 60$. Halbiere das Ergebnis: $60 : 2 = 30$.',
      '✅ Lösung: $A = 30\\text{ cm}^2$.',
    ],
    commonMistake: 'Halbieren vergessen ($60$).',
  },

  // =========================================================================
  // Level 5-5: Boss: Formel-Meister (Gemischte Prüfungsaufgaben)
  // =========================================================================
  {
    id: 'w5_dg_501',
    levelId: '5-5',
    type: 'drag-group',
    difficulty: 2,
    prompt: 'Ordne jede Formel der passenden geometrischen Figur zu:',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 400 110" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Parallelogramm -->
        <g transform="translate(10, 15)">
          <polygon points="10,65 65,65 80,20 25,20" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2"/>
          <line x1="25" y1="20" x2="25" y2="65" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2 2"/>
          <text x="47" y="93" fill="var(--color-text, #f8fafc)" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Parallelogramm</text>
        </g>
        <!-- Dreieck -->
        <g transform="translate(110, 15)">
          <polygon points="10,65 80,65 50,15" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2"/>
          <line x1="50" y1="15" x2="50" y2="65" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2 2"/>
          <text x="45" y="93" fill="var(--color-text, #f8fafc)" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Dreieck</text>
        </g>
        <!-- Trapez -->
        <g transform="translate(210, 15)">
          <polygon points="5,65 80,65 65,20 20,20" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2"/>
          <line x1="20" y1="20" x2="20" y2="65" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2 2"/>
          <text x="42" y="93" fill="var(--color-text, #f8fafc)" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Trapez</text>
        </g>
        <!-- Drachen / Rhombus -->
        <g transform="translate(305, 15)">
          <polygon points="42,10 75,42 42,75 10,42" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" stroke-width="2"/>
          <line x1="10" y1="42" x2="75" y2="42" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="2 2"/>
          <line x1="42" y1="10" x2="42" y2="75" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="2 2"/>
          <text x="42" y="93" fill="var(--color-text, #f8fafc)" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Drachen</text>
        </g>
      </svg>`,
    },
    interaction: {
      items: [
        '$A = \\frac{e \\cdot f}{2}$',
        '$A = g \\cdot h$',
        '$A = \\frac{a + c}{2} \\cdot h$',
        '$A = \\frac{g \\cdot h}{2}$',
      ],
      groups: [
        { id: 'para', label: 'Parallelogramm', color: 'hsl(160, 75%, 42%)' },
        { id: 'tria', label: 'Dreieck', color: 'hsl(210, 85%, 52%)' },
        { id: 'trap', label: 'Trapez', color: 'hsl(35, 95%, 50%)' },
        { id: 'kite', label: 'Drachen & Rhombus', color: 'hsl(280, 80%, 55%)' },
      ],
    },
    correctAnswer: {
      para: ['$A = g \\cdot h$'],
      tria: ['$A = \\frac{g \\cdot h}{2}$'],
      trap: ['$A = \\frac{a + c}{2} \\cdot h$'],
      kite: ['$A = \\frac{e \\cdot f}{2}$'],
    },
    acceptedAnswers: [],
    hints: [
      '💡 Tipp: Denk an die charakteristischen Merkmale (z.B. Mittellinie $\\frac{a+c}{2}$ beim Trapez, Diagonalen $e, f$ beim Drachen).',
      '🔑 Hinweis: Parallelogramm ist $g \\cdot h$, Dreieck ist $\\frac{g \\cdot h}{2}$.',
      '✅ Lösung: Parallelogramm: $g \\cdot h$, Dreieck: $\\frac{g \\cdot h}{2}$, Trapez: $\\frac{a+c}{2} \\cdot h$, Drachen/Rhombus: $\\frac{e \\cdot f}{2}$.',
    ],
    commonMistake: 'Dreieck und Parallelogramm oder Trapez und Drachen vertauscht.',
  },
  {
    id: 'w5_fi_502',
    levelId: '5-5',
    type: 'fill-in',
    difficulty: 3,
    prompt: 'Kompetenztest-Aufgabe: Berechne den Flächeninhalt des abgebildeten Trapezes mit $a = 7\\text{ m}$, $c = 3\\text{ m}$ und $h = 4\\text{ m}$ in $\\text{m}^2$:',
    promptLatex: 'a = 7\\text{ m}, \\quad c = 3\\text{ m}, \\quad h = 4\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Trapezoid -->
        <polygon points="40,115 280,115 200,35 120,35" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2.5" stroke-linejoin="round"/>
        <!-- Height line h = 4 m -->
        <line x1="120" y1="35" x2="120" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="120" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="125" cy="110" r="1.5" fill="#f43f5e"/>
        <text x="105" y="78" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 4 m</text>
        <!-- Top side c = 3 m -->
        <text x="160" y="25" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = 3 m</text>
        <!-- Bottom base a = 7 m -->
        <line x1="40" y1="124" x2="280" y2="124" stroke="#10b981" stroke-width="1.5"/>
        <polygon points="40,124 48,121 48,127" fill="#10b981"/>
        <polygon points="280,124 272,121 272,127" fill="#10b981"/>
        <text x="160" y="137" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 7 m</text>
        <!-- Area prompt -->
        <text x="180" y="78" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 18',
    },
    correctAnswer: '20',
    acceptedAnswers: ['20', '20 m²', '20m²', '20 m^2'],
    hints: [
      '💡 Tipp: Addiere zuerst die parallelen Seiten: $a + c = 7 + 3 = 10$.',
      '🔑 Hinweis: Berechne den Mittelwert: $10 : 2 = 5$. Multipliziere mit der Höhe: $5 \\cdot 4 = 20$.',
      '✅ Lösung: $A = 20\\text{ m}^2$.',
    ],
    commonMistake: 'Parallele Seiten nicht halbiert ($10 \\cdot 4 = 40$) oder Rechenfehler.',
  },
  {
    id: 'w5_fi_503',
    levelId: '5-5',
    type: 'fill-in',
    difficulty: 3,
    prompt: 'Ein Rhombus hat die beiden Diagonalen $e = 12{,}5\\text{ dm}$ und $f = 8{,}0\\text{ dm}$. Berechne seinen Flächeninhalt in $\\text{dm}^2$:',
    promptLatex: 'e = 12{,}5\\text{ dm}, \\quad f = 8{,}0\\text{ dm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Rhombus outline -->
        <polygon points="170,15 260,70 170,125 80,70" fill="rgba(99, 102, 241, 0.18)" stroke="#6366f1" stroke-width="2.5"/>
        <!-- Diagonal e = 12.5 dm (horizontal) -->
        <line x1="80" y1="70" x2="260" y2="70" stroke="#3b82f6" stroke-width="2"/>
        <text x="220" y="62" fill="#3b82f6" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">e = 12,5 dm</text>
        <!-- Diagonal f = 8.0 dm (vertical) -->
        <line x1="170" y1="15" x2="170" y2="125" stroke="#10b981" stroke-width="2"/>
        <text x="178" y="105" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">f = 8,0 dm</text>
        <rect x="170" y="70" width="8" height="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="125" y="100" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 40',
    },
    correctAnswer: '50',
    acceptedAnswers: ['50', '50 dm²', '50dm²'],
    hints: [
      '💡 Tipp: Formel: $A = \\frac{e \\cdot f}{2}$.',
      '🔑 Hinweis: $12{,}5 \\cdot 8{,}0 = 100$. Halbiere dies: $100 : 2 = 50$.',
      '✅ Lösung: $A = 50\\text{ dm}^2$.',
    ],
    commonMistake: 'Halbieren vergessen.',
  },
  {
    id: 'w5_mc_504',
    levelId: '5-5',
    type: 'multiple-choice',
    difficulty: 3,
    prompt: 'Welche der folgenden Aussagen ist mathematisch KORREKT?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 150" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Square rotated as Rhombus -->
        <polygon points="170,20 230,75 170,130 110,75" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" stroke-width="2.5"/>

        <!-- Diagonal e (horizontal) -->
        <line x1="110" y1="75" x2="230" y2="75" stroke="#6366f1" stroke-width="2" stroke-dasharray="3 3"/>
        <text x="235" y="79" fill="#6366f1" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">e = s·√2</text>

        <!-- Diagonal f (vertical) -->
        <line x1="170" y1="20" x2="170" y2="130" stroke="#a855f7" stroke-width="2" stroke-dasharray="3 3"/>
        <text x="170" y="14" fill="#a855f7" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">f = s·√2</text>

        <!-- Side s label -->
        <text x="130" y="42" fill="#10b981" font-size="13" font-weight="bold" font-family="Outfit, sans-serif">s</text>
        <text x="198" y="42" fill="#10b981" font-size="13" font-weight="bold" font-family="Outfit, sans-serif">s</text>

        <!-- Comparison formula labels -->
        <text x="60" y="65" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Quadrat:</text>
        <text x="60" y="82" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = s²</text>

        <text x="285" y="105" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Rhombus:</text>
        <text x="285" y="122" fill="#6366f1" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">(e · f)/2 = s²</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Ein Quadrat mit Seitenlänge $s$ hat denselben Flächeninhalt wie ein Rhombus mit Diagonalen $e = s \\cdot \\sqrt{2}$ und $f = s \\cdot \\sqrt{2}$.',
        'Beim Parallelogramm kann man für die Fläche beliebige Nachbarseiten multiplizieren.',
        'Ein Dreieck hat immer nur eine einzige Höhe.',
        'Ein Trapez hat immer 4 gleich lange Seiten.',
      ],
    },
    correctAnswer: 'Ein Quadrat mit Seitenlänge $s$ hat denselben Flächeninhalt wie ein Rhombus mit Diagonalen $e = s \\cdot \\sqrt{2}$ und $f = s \\cdot \\sqrt{2}$.',
    acceptedAnswers: ['Ein Quadrat mit Seitenlänge $s$ hat denselben Flächeninhalt wie ein Rhombus mit Diagonalen $e = s \\cdot \\sqrt{2}$ und $f = s \\cdot \\sqrt{2}$.'],
    hints: [
      '💡 Suki sagt: Ein Quadrat IST ein spezieller Rhombus mit rechten Winkeln!',
      '🔑 Hinweis: Die Fläche des Quadrats ist $s^2$. Als Rhombus mit Diagonalen: $\\frac{(s\\sqrt{2}) \\cdot (s\\sqrt{2})}{2} = \\frac{2s^2}{2} = s^2$.',
      '✅ Lösung: Ein Quadrat ist ein Rhombus mit Diagonalen $s\\sqrt{2}$ und hat dieselbe Fläche $s^2$.',
    ],
    commonMistake: 'Die mathematische Verwandtschaft von Quadrat und Rhombus übersehen.',
  },
];
