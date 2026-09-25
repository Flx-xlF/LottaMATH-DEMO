/**
 * Question Bank: World 6 (Umformen & Koordinaten)
 * Topic: Flächeninhalt ebener Figuren
 * Focus: Formelumstellung (Umkehraufgaben), Koordinatensystem & Einheitenumrechnung
 * Aligned with 'Mathematik Sekundarstufe I' (S. 180, 182, 184, 186, 189, 194, 195)
 */

export const WORLD6_QUESTIONS = [
  // =========================================================================
  // Level 6-1: Umkehrformeln: Dreieck & Parallelogramm (S. 182 Nr. 9, S. 189 Nr. 9)
  // =========================================================================
  {
    id: 'w6_mc_101',
    levelId: '6-1',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie lautet die umgeformte Formel zur Berechnung der Grundseite $g$ eines Dreiecks, wenn der Flächeninhalt $A$ und die Höhe $h$ bekannt sind?',
    promptLatex: 'A = \\frac{g \\cdot h}{2} \\implies g = ?',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Triangle -->
        <polygon points="50,115 270,115 170,35" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2.5"/>
        <!-- Height h -->
        <line x1="170" y1="35" x2="170" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="180" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">Höhe h bekannt</text>
        <!-- Area A -->
        <text x="115" y="80" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">Fläche A bekannt</text>
        <!-- Target g = ? -->
        <text x="160" y="135" fill="#38bdf8" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundseite g = ?</text>
      </svg>`,
    },
    interaction: {
      options: [
        '$g = \\frac{2 \\cdot A}{h}$',
        '$g = \\frac{A}{h}$',
        '$g = \\frac{A \\cdot h}{2}$',
        '$g = 2 \\cdot A - h$',
      ],
    },
    correctAnswer: '$g = \\frac{2 \\cdot A}{h}$',
    acceptedAnswers: ['$g = \\frac{2 \\cdot A}{h}$'],
    hints: [
      '💡 Suki sagt: Löse Schritt für Schritt: Multipliziere zuerst beide Seiten mit 2, um den Bruch loszuwerden ($2A = g \\cdot h$).',
      '🔑 Hinweis: Teile nun durch die Höhe $h$, damit $g$ alleine steht.',
      '✅ Lösung: $g = \\frac{2A}{h}$.',
    ],
    commonMistake: 'Das Multiplizieren mit 2 vergessen und $g = \\frac{A}{h}$ gerechnet (wie beim Parallelogramm).',
  },
  {
    id: 'w6_fi_102',
    levelId: '6-1',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Musteraufgabe aus dem Buch: Ein Dreieck hat den Flächeninhalt $A = 150\\text{ m}^2$ und die Höhe $h_c = 10\\text{ m}$. Berechne die zugehörige Grundseite $c$ in Metern:',
    promptLatex: 'A = 150\\text{ m}^2, \\quad h_c = 10\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,115 270,115 150,30" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="2.5"/>
        <line x1="150" y1="30" x2="150" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="150" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="160" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">h_c = 10 m</text>
        <text x="110" y="85" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">A = 150 m²</text>
        <line x1="50" y1="126" x2="270" y2="126" stroke="#3b82f6" stroke-width="1.5"/>
        <polygon points="50,126 58,123 58,129" fill="#3b82f6"/>
        <polygon points="270,126 262,123 262,129" fill="#3b82f6"/>
        <text x="160" y="139" fill="#3b82f6" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 15',
    },
    correctAnswer: '30',
    acceptedAnswers: ['30', '30 m', '30m'],
    hints: [
      '💡 Tipp: Formel: $c = \\frac{2A}{h_c}$.',
      '🔑 Hinweis: Rechne $2 \\cdot 150 = 300$. Jetzt teilen: $300 : 10 = 30$.',
      '✅ Lösung: Die Grundseite $c$ ist $30\\text{ m}$ lang.',
    ],
    commonMistake: 'Fläche nicht verdoppelt und $150 : 10 = 15$ herausbekommen.',
  },
  {
    id: 'w6_fi_103',
    levelId: '6-1',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Ein Parallelogramm hat einen Flächeninhalt von $A = 240\\text{ m}^2$ und eine Höhe von $h = 12\\text{ m}$. Berechne die Grundseite $g$ in Metern:',
    promptLatex: 'A = 240\\text{ m}^2, \\quad h = 12\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,110 250,110 290,40 90,40" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2.5"/>
        <line x1="90" y1="40" x2="90" y2="110" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="90" y="100" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="78" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 12 m</text>
        <text x="175" y="75" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = 240 m²</text>
        <line x1="50" y1="120" x2="250" y2="120" stroke="#10b981" stroke-width="1.5"/>
        <polygon points="50,120 58,117 58,123" fill="#10b981"/>
        <polygon points="250,120 242,117 242,123" fill="#10b981"/>
        <text x="150" y="133" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 15',
    },
    correctAnswer: '20',
    acceptedAnswers: ['20', '20 m', '20m'],
    hints: [
      '💡 Tipp: Beim Parallelogramm gilt $A = g \\cdot h \\implies g = \\frac{A}{h}$.',
      '🔑 Hinweis: Rechne $240 : 12 = 20$.',
      '✅ Lösung: $g = 20\\text{ m}$.',
    ],
    commonMistake: 'Fälschlicherweise verdoppelt ($g = \\frac{2A}{h}$), was nur beim Dreieck gilt.',
  },
  {
    id: 'w6_fi_104',
    levelId: '6-1',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Ein Dreieck $ABC$ hat die Seite $a = 20\\text{ cm}$ und die Fläche $A = 400\\text{ cm}^2$. Berechne die zugehörige Höhe $h_a$ in Zentimetern:',
    promptLatex: 'a = 20\\text{ cm}, \\quad A = 400\\text{ cm}^2',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,115 270,115 180,30" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" stroke-width="2.5"/>
        <line x1="180" y1="30" x2="180" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="180" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="190" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">h_a = ?</text>
        <text x="115" y="85" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">A = 400 cm²</text>
        <line x1="50" y1="126" x2="270" y2="126" stroke="#6366f1" stroke-width="1.5"/>
        <polygon points="50,126 58,123 58,129" fill="#6366f1"/>
        <polygon points="270,126 262,123 262,129" fill="#6366f1"/>
        <text x="160" y="139" fill="#6366f1" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 20 cm</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 25',
    },
    correctAnswer: '40',
    acceptedAnswers: ['40', '40 cm', '40cm'],
    hints: [
      '💡 Tipp: Formel: $h_a = \\frac{2A}{a}$.',
      '🔑 Hinweis: $2 \\cdot 400 = 800$. Rechne $800 : 20 = 40$.',
      '✅ Lösung: $h_a = 40\\text{ cm}$.',
    ],
    commonMistake: 'Fläche nicht verdoppelt und $400 : 20 = 20$ erhalten.',
  },

  // =========================================================================
  // Level 6-2: Umkehrformeln: Trapez & Drachen (S. 189 Nr. 10, S. 195 Nr. 6)
  // =========================================================================
  {
    id: 'w6_mc_201',
    levelId: '6-2',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie lautet die umgeformte Formel zur Berechnung der Höhe $h$ eines Trapezes aus $A$, $a$ und $c$?',
    promptLatex: 'A = \\frac{a + c}{2} \\cdot h \\implies h = ?',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,115 270,115 210,35 110,35" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2.5"/>
        <line x1="110" y1="35" x2="110" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="96" y="78" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = ?</text>
        <text x="160" y="25" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c bekannt</text>
        <text x="160" y="135" fill="#f59e0b" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a bekannt</text>
        <text x="175" y="78" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A bekannt</text>
      </svg>`,
    },
    interaction: {
      options: [
        '$h = \\frac{2 \\cdot A}{a + c}$',
        '$h = \\frac{A}{a + c}$',
        '$h = \\frac{a + c}{2 \\cdot A}$',
        '$h = 2 \\cdot A - (a + c)$',
      ],
    },
    correctAnswer: '$h = \\frac{2 \\cdot A}{a + c}$',
    acceptedAnswers: ['$h = \\frac{2 \\cdot A}{a + c}$'],
    hints: [
      '💡 Suki sagt: Zuerst mit 2 multiplizieren ($2A = (a + c) \\cdot h$), dann durch die Summe $(a + c)$ dividieren.',
      '🔑 Hinweis: Die Summe der beiden parallelen Seiten muss im Nenner stehen.',
      '✅ Lösung: $h = \\frac{2A}{a + c}$.',
    ],
    commonMistake: 'Klammer $(a + c)$ im Nenner vergessen oder nicht mit 2 multipliziert.',
  },
  {
    id: 'w6_fi_202',
    levelId: '6-2',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Der Flächeninhalt eines Trapezes beträgt $A = 50\\text{ cm}^2$. Die Seite $a$ ist $12\\text{ cm}$ lang und die Seite $c$ misst $8\\text{ cm}$. Berechne die Höhe $h$ in Zentimetern:',
    promptLatex: 'A = 50\\text{ cm}^2, \\quad a = 12\\text{ cm}, \\quad c = 8\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,115 270,115 215,35 105,35" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2.5"/>
        <line x1="105" y1="35" x2="105" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="105" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="90" y="78" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = ?</text>
        <text x="160" y="25" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = 8 cm</text>
        <text x="160" y="78" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = 50 cm²</text>
        <line x1="50" y1="124" x2="270" y2="124" stroke="#38bdf8" stroke-width="1.5"/>
        <polygon points="50,124 58,121 58,127" fill="#38bdf8"/>
        <polygon points="270,124 262,121 262,127" fill="#38bdf8"/>
        <text x="160" y="137" fill="#38bdf8" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 12 cm</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 4',
    },
    correctAnswer: '5',
    acceptedAnswers: ['5', '5 cm', '5cm'],
    hints: [
      '💡 Tipp: Berechne zuerst die Summe der Grundseiten: $a + c = 12 + 8 = 20\\text{ cm}$.',
      '🔑 Hinweis: Verdopple die Fläche: $2 \\cdot 50 = 100$. Teile durch 20: $100 : 20 = 5$.',
      '✅ Lösung: Die Höhe beträgt $h = 5\\text{ cm}$.',
    ],
    commonMistake: 'Fläche nicht verdoppelt und $50 : 20 = 2{,}5$ berechnet.',
  },
  {
    id: 'w6_fi_203',
    levelId: '6-2',
    type: 'fill-in',
    difficulty: 3,
    prompt: 'Ein Trapez hat die Fläche $A = 30\\text{ m}^2$, die Seite $a = 7\\text{ m}$ und die Höhe $h = 6\\text{ m}$. Berechne die parallele Seite $c$ in Metern:',
    promptLatex: 'A = 30\\text{ m}^2, \\quad a = 7\\text{ m}, \\quad h = 6\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="70,115 230,115 270,35 70,35" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" stroke-width="2.5"/>
        <line x1="70" y1="35" x2="70" y2="115" stroke="#f43f5e" stroke-width="2"/>
        <rect x="70" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="58" y="78" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 6 m</text>
        <text x="170" y="25" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = ?</text>
        <text x="150" y="78" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = 30 m²</text>
        <line x1="70" y1="124" x2="230" y2="124" stroke="#a855f7" stroke-width="1.5"/>
        <polygon points="70,124 78,121 78,127" fill="#a855f7"/>
        <polygon points="230,124 222,121 222,127" fill="#a855f7"/>
        <text x="150" y="137" fill="#a855f7" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 7 m</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 4',
    },
    correctAnswer: '3',
    acceptedAnswers: ['3', '3 m', '3m'],
    hints: [
      '💡 Tipp: Formel nach $c$ auflösen: $c = \\frac{2A}{h} - a$.',
      '🔑 Hinweis: $2 \\cdot 30 = 60$. $60 : 6 = 10$. Jetzt die Seite $a$ subtrahieren: $10 - 7 = 3$.',
      '✅ Lösung: Die Seite $c$ ist $3\\text{ m}$ lang.',
    ],
    commonMistake: 'Am Ende die Seite $a$ addiert statt subtrahiert ($10 + 7 = 17$).',
  },
  {
    id: 'w6_fi_204',
    levelId: '6-2',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Ein Drachenviereck hat den Flächeninhalt $A = 40\\text{ cm}^2$ und die Diagonale $e = 10\\text{ cm}$. Berechne die zweite Diagonale $f$ in Zentimetern:',
    promptLatex: 'A = 40\\text{ cm}^2, \\quad e = 10\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="170,15 250,55 170,130 90,55" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" stroke-width="2.5"/>
        <line x1="90" y1="55" x2="250" y2="55" stroke="#3b82f6" stroke-width="2"/>
        <text x="210" y="47" fill="#3b82f6" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">e = 10 cm</text>
        <line x1="170" y1="15" x2="170" y2="130" stroke="#f43f5e" stroke-width="2"/>
        <text x="178" y="98" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">f = ?</text>
        <rect x="170" y="55" width="8" height="8" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="125" y="90" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = 40 cm²</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 6',
    },
    correctAnswer: '8',
    acceptedAnswers: ['8', '8 cm', '8cm'],
    hints: [
      '💡 Tipp: Formel für Drachen: $A = \\frac{e \\cdot f}{2} \\implies f = \\frac{2A}{e}$.',
      '🔑 Hinweis: $2 \\cdot 40 = 80$. Teile durch 10: $80 : 10 = 8$.',
      '✅ Lösung: Die Diagonale $f$ beträgt $8\\text{ cm}$.',
    ],
    commonMistake: 'Fläche nicht verdoppelt und $40 : 10 = 4$ angegeben.',
  },

  // =========================================================================
  // Level 6-3: Figuren im Koordinatensystem (S. 180 Nr. 7, 8, S. 194 Nr. 3)
  // =========================================================================
  {
    id: 'w6_mc_301',
    levelId: '6-3',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Ein Parallelogramm hat im Koordinatensystem die Eckpunkte $A(-3|-3)$, $B(0|-4)$, $C(0|-1)$ und $D(-3|0)$. Die vertikale Grundseite $BC$ liegt auf der y-Achse. Wie lang ist die Grundseite $g$ und der horizontale Abstand (Höhe $h$)?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 180" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Coordinate Grid -->
        <defs>
          <pattern id="grid301" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="var(--color-border, #334155)" stroke-width="0.8"/>
          </pattern>
        </defs>
        <rect x="20" y="10" width="300" height="160" fill="url(#grid301)" opacity="0.6"/>

        <!-- Axes: Origin (0,0) at (245, 60) -->
        <!-- x-axis (y = 0) -->
        <line x1="20" y1="60" x2="320" y2="60" stroke="var(--color-text-muted, #94a3b8)" stroke-width="1.5"/>
        <text x="315" y="52" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif">x</text>
        <!-- y-axis (x = 0) -->
        <line x1="245" y1="10" x2="245" y2="170" stroke="var(--color-text-muted, #94a3b8)" stroke-width="1.5"/>
        <text x="252" y="22" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif">y</text>

        <!-- Parallelogram: A(-3|-3)->(170,135), B(0|-4)->(245,160), C(0|-1)->(245,85), D(-3|0)->(170,60) -->
        <polygon points="170,135 245,160 245,85 170,60" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2.5"/>

        <!-- Points -->
        <circle cx="170" cy="135" r="3" fill="#6366f1"/>
        <text x="162" y="145" fill="var(--color-text, #f8fafc)" font-size="10" font-family="Outfit, sans-serif" text-anchor="end">A(-3|-3)</text>
        <circle cx="245" cy="160" r="3" fill="#6366f1"/>
        <text x="252" y="165" fill="var(--color-text, #f8fafc)" font-size="10" font-family="Outfit, sans-serif">B(0|-4)</text>
        <circle cx="245" cy="85" r="3" fill="#10b981"/>
        <text x="252" y="90" fill="#10b981" font-size="10" font-weight="bold" font-family="Outfit, sans-serif">C(0|-1)</text>
        <circle cx="170" cy="60" r="3" fill="#10b981"/>
        <text x="162" y="55" fill="#10b981" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">D(-3|0)</text>

        <!-- Measures: g and h (No spoiler values) -->
        <!-- Vertical Base g along y-axis -->
        <line x1="250" y1="85" x2="250" y2="160" stroke="#10b981" stroke-width="3"/>
        <text x="258" y="125" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">g = ?</text>

        <!-- Horizontal Height h -->
        <line x1="170" y1="45" x2="245" y2="45" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3 3"/>
        <line x1="170" y1="40" x2="170" y2="50" stroke="#f43f5e" stroke-width="1.5"/>
        <line x1="245" y1="40" x2="245" y2="50" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="207" y="38" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">h = ?</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Grundseite $g = 3\\text{ cm}$, Höhe $h = 3\\text{ cm}$',
        'Grundseite $g = 4\\text{ cm}$, Höhe $h = 2\\text{ cm}$',
        'Grundseite $g = 2\\text{ cm}$, Höhe $h = 3\\text{ cm}$',
        'Grundseite $g = 1\\text{ cm}$, Höhe $h = 6\\text{ cm}$',
      ],
    },
    correctAnswer: 'Grundseite $g = 3\\text{ cm}$, Höhe $h = 3\\text{ cm}$',
    acceptedAnswers: ['Grundseite $g = 3\\text{ cm}$, Höhe $h = 3\\text{ cm}$'],
    hints: [
      '💡 Tipp: Die Grundseite $BC$ liegt auf der y-Achse und geht von $y = -4$ bis $y = -1$. Das ist ein Abstand von $-1 - (-4) = 3\\text{ cm}$.',
      '🔑 Hinweis: Die Punkte $A$ und $D$ haben $x = -3$, die Punkte $B$ und $C$ haben $x = 0$. Der waagerechte Abstand (Höhe) ist $0 - (-3) = 3\\text{ cm}$.',
      '✅ Lösung: Grundseite $g = 3\\text{ cm}$, Höhe $h = 3\\text{ cm}$.',
    ],
    commonMistake: 'Abstand bei negativen Koordinaten falsch subtrahiert.',
  },
  {
    id: 'w6_fi_302',
    levelId: '6-3',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Berechne den Flächeninhalt des Dreiecks mit den Eckpunkten $A(-8|-1)$, $B(0|-1)$ und $C(-5|4)$ im Koordinatensystem (Einheit $1\\text{ cm}$) in $\\text{cm}^2$:',
    promptLatex: 'A(-8|-1), \\quad B(0|-1), \\quad C(-5|4)',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 180" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Coordinate Grid -->
        <defs>
          <pattern id="grid302" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M 25 0 L 0 0 0 25" fill="none" stroke="var(--color-border, #334155)" stroke-width="0.8"/>
          </pattern>
        </defs>
        <rect x="25" y="5" width="290" height="165" fill="url(#grid302)" opacity="0.6"/>

        <!-- Axes: Origin (0,0) at (280, 110) -->
        <!-- x-axis (y = 0) -->
        <line x1="25" y1="110" x2="320" y2="110" stroke="var(--color-text-muted, #94a3b8)" stroke-width="1.5"/>
        <text x="315" y="103" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif">x</text>
        <!-- y-axis (x = 0) -->
        <line x1="280" y1="5" x2="280" y2="170" stroke="var(--color-text-muted, #94a3b8)" stroke-width="1.5"/>
        <text x="287" y="18" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif">y</text>

        <!-- Triangle ABC: A(80, 135), B(280, 135), C(155, 10) -->
        <polygon points="80,135 280,135 155,10" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" stroke-width="2.5"/>

        <!-- Height line h from C(155,10) to (155, 135) -->
        <line x1="155" y1="10" x2="155" y2="135" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3 3"/>
        <rect x="155" y="125" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <circle cx="160" cy="130" r="1.5" fill="#f43f5e"/>
        <text x="162" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">h = 5 cm</text>

        <!-- Vertices labels -->
        <circle cx="80" cy="135" r="3.5" fill="#06b6d4"/>
        <text x="75" y="152" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">A(-8|-1)</text>

        <circle cx="280" cy="135" r="3.5" fill="#06b6d4"/>
        <text x="285" y="152" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">B(0|-1)</text>

        <circle cx="155" cy="10" r="3.5" fill="#06b6d4"/>
        <text x="155" y="2" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">C(-5|4)</text>

        <!-- Base label -->
        <text x="180" y="152" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Grundseite g = 8 cm</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 18',
    },
    correctAnswer: '20',
    acceptedAnswers: ['20', '20 cm²', '20cm²'],
    hints: [
      '💡 Suki sagt: Die Punkte $A$ und $B$ liegen auf derselben horizontalen Linie $y = -1$. Grundseite $g = 0 - (-8) = 8\\text{ cm}$.',
      '🔑 Hinweis: Die Höhe ist der senkrechte Abstand von der Grundlinie ($y = -1$) zur Spitze $C$ ($y = 4$): $h = 4 - (-1) = 5\\text{ cm}$. Jetzt rechnen: $A = \\frac{8 \\cdot 5}{2} = 20$.',
      '✅ Lösung: Der Flächeninhalt beträgt $20\\text{ cm}^2$.',
    ],
    commonMistake: 'Höhe falsch abgelesen oder das Teilen durch 2 vergessen ($40$).',
  },
  {
    id: 'w6_dg_303',
    levelId: '6-3',
    type: 'drag-group',
    difficulty: 2,
    prompt: 'Ordne die im Koordinatensystem gegebenen Figuren ihrer korrekten Form zu:',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 110" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Card 1: Rechteck -->
        <g transform="translate(15, 10)">
          <rect x="0" y="15" width="85" height="45" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="2"/>
          <text x="42" y="75" fill="#3b82f6" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Rechteck</text>
          <text x="42" y="90" fill="var(--color-text-muted, #94a3b8)" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Breite ≠ Höhe</text>
        </g>

        <!-- Card 2: Quadrat -->
        <g transform="translate(130, 10)">
          <rect x="15" y="10" width="55" height="55" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2"/>
          <text x="42" y="75" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Quadrat</text>
          <text x="42" y="90" fill="var(--color-text-muted, #94a3b8)" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Breite = Höhe</text>
        </g>

        <!-- Card 3: Parallelogramm -->
        <g transform="translate(240, 10)">
          <polygon points="10,60 70,60 85,15 25,15" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2"/>
          <text x="47" y="75" fill="#f59e0b" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Parallelogramm</text>
          <text x="47" y="90" fill="var(--color-text-muted, #94a3b8)" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">schräge Kanten</text>
        </g>
      </svg>`,
    },
    interaction: {
      items: [
        'A(-8|5), B(-3|5), C(-3|7), D(-8|7)',
        'A(2|4), B(5|4), C(5|7), D(2|7)',
        'A(-9|-5), B(-3|-5), C(0|-2), D(-6|-2)',
        'A(-5|-1), B(-5|-4), C(-8|3), D(-8|0)',
      ],
      groups: [
        { id: 'rect', label: 'Rechteck', color: 'hsl(210, 85%, 52%)' },
        { id: 'square', label: 'Quadrat', color: 'hsl(160, 75%, 42%)' },
        { id: 'para', label: 'Parallelogramm', color: 'hsl(35, 95%, 50%)' },
      ],
    },
    correctAnswer: {
      rect: ['A(-8|5), B(-3|5), C(-3|7), D(-8|7)'],
      square: ['A(2|4), B(5|4), C(5|7), D(2|7)'],
      para: ['A(-9|-5), B(-3|-5), C(0|-2), D(-6|-2)', 'A(-5|-1), B(-5|-4), C(-8|3), D(-8|0)'],
    },
    acceptedAnswers: [],
    hints: [
      '💡 Tipp: Überprüfe die Seitenlängen: Bei $A(2|4)$ bis $B(5|4)$ ist die Breite 3 und die Höhe $(7-4) = 3$ (also Quadrat).',
      '🔑 Hinweis: Bei $A(-8|5)$ bis $B(-3|5)$ ist die Breite 5 und die Höhe 2 (Rechteck).',
      '✅ Lösung: Seitenlängen und Winkel genau prüfen.',
    ],
    commonMistake: 'Quadrat und Rechteck nicht anhand gleicher Seitenlängen unterschieden.',
  },

  // =========================================================================
  // Level 6-4: Einheiten umrechnen (S. 180 Nr. 9, S. 184 Nr. 8, S. 195 Nr. 5)
  // =========================================================================
  {
    id: 'w6_fi_401',
    levelId: '6-4',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Berechne den Flächeninhalt des Dreiecks mit $g = 40\\text{ cm}$ und $h = 50\\text{ cm}$. Gib das Ergebnis in $\\text{cm}^2$ an:',
    promptLatex: 'g = 40\\text{ cm}, \\quad h = 50\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,115 270,115 190,30" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="2.5"/>
        <line x1="190" y1="30" x2="190" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="190" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="200" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">h = 50 cm</text>
        <line x1="50" y1="126" x2="270" y2="126" stroke="#3b82f6" stroke-width="1.5"/>
        <polygon points="50,126 58,123 58,129" fill="#3b82f6"/>
        <polygon points="270,126 262,123 262,129" fill="#3b82f6"/>
        <text x="160" y="139" fill="#3b82f6" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 40 cm</text>
        <text x="110" y="85" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">A = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 800',
    },
    correctAnswer: '1000',
    acceptedAnswers: ['1000', '1000 cm²', '1000cm²', '1000 cm^2'],
    hints: [
      '💡 Tipp: Formel $A = \\frac{g \\cdot h}{2}$.',
      '🔑 Hinweis: Kürze $40 : 2 = 20$. Rechne $20 \\cdot 50 = 1000$.',
      '✅ Lösung: $A = 1000\\text{ cm}^2$ (bzw. $10\\text{ dm}^2$).',
    ],
    commonMistake: 'Halbieren vergessen und $2000$ erhalten.',
  },
  {
    id: 'w6_fi_402',
    levelId: '6-4',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Einheitenfalle! Ein Dreieck hat die Fläche $A = 12\\text{ dm}^2$ und die Höhe $h = 60\\text{ cm}$. Berechne die Grundseite $g$ in Zentimetern:',
    promptLatex: 'A = 12\\text{ dm}^2, \\quad h = 60\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,115 270,115 160,30" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2.5"/>
        <line x1="160" y1="30" x2="160" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="160" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="170" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">h = 60 cm</text>
        <text x="105" y="85" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">A = 12 dm²</text>
        <text x="105" y="100" fill="#f59e0b" font-size="10" font-family="Outfit, sans-serif">(Einheiten angleichen!)</text>
        <line x1="50" y1="126" x2="270" y2="126" stroke="#f59e0b" stroke-width="1.5"/>
        <polygon points="50,126 58,123 58,129" fill="#f59e0b"/>
        <polygon points="270,126 262,123 262,129" fill="#f59e0b"/>
        <text x="160" y="139" fill="#f59e0b" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = ? (in cm)</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 25',
    },
    correctAnswer: '40',
    acceptedAnswers: ['40', '40 cm', '40cm'],
    hints: [
      '💡 Suki sagt: Achtung Einheiten! Rechne zuerst die Fläche in $\\text{cm}^2$ um: $1\\text{ dm}^2 = 100\\text{ cm}^2$, also $12\\text{ dm}^2 = 1200\\text{ cm}^2$.',
      '🔑 Hinweis: Formel: $g = \\frac{2A}{h} = \\frac{2 \\cdot 1200}{60} = \\frac{2400}{60} = 40\\text{ cm}$.',
      '✅ Lösung: Die Grundseite beträgt $40\\text{ cm}$.',
    ],
    commonMistake: 'Flächenumrechnung mit Faktor 10 statt 100 gemacht.',
  },
  {
    id: 'w6_fi_403',
    levelId: '6-4',
    type: 'fill-in',
    difficulty: 3,
    prompt: 'Ein Trapez hat die Seiten $a = 24\\text{ cm}$, $c = 1{,}6\\text{ dm}$ und die Höhe $h = 0{,}4\\text{ m}$. Berechne seinen Flächeninhalt in $\\text{cm}^2$:',
    promptLatex: 'a = 24\\text{ cm}, \\quad c = 1{,}6\\text{ dm}, \\quad h = 0{,}4\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="40,115 280,115 220,35 100,35" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" stroke-width="2.5"/>
        <line x1="100" y1="35" x2="100" y2="115" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <rect x="100" y="105" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="88" y="78" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 0,4 m</text>
        <text x="160" y="25" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = 1,6 dm</text>
        <line x1="40" y1="124" x2="280" y2="124" stroke="#a855f7" stroke-width="1.5"/>
        <polygon points="40,124 48,121 48,127" fill="#a855f7"/>
        <polygon points="280,124 272,121 272,127" fill="#a855f7"/>
        <text x="160" y="137" fill="#a855f7" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 24 cm</text>
        <text x="175" y="78" fill="var(--color-text-muted, #94a3b8)" font-size="12" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">A = ? (in cm²)</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 600',
    },
    correctAnswer: '800',
    acceptedAnswers: ['800', '800 cm²', '800cm²', '800 cm^2'],
    hints: [
      '💡 Tipp: Rechne alle Längen in Zentimeter um: $a = 24\\text{ cm}$, $c = 16\\text{ cm}$, $h = 40\\text{ cm}$.',
      '🔑 Hinweis: $a + c = 24 + 16 = 40\\text{ cm}$. Mittelwert: $\\frac{40}{2} = 20\\text{ cm}$. Jetzt multiplizieren: $20 \\cdot 40 = 800$.',
      '✅ Lösung: $A = 800\\text{ cm}^2$.',
    ],
    commonMistake: 'Verschiedene Einheiten direkt ohne Umrechnung multipliziert.',
  },

  // =========================================================================
  // Level 6-5: Boss: Algebra- & Gitter-Profi (S. 189 Nr. 8, S. 195 Nr. 4)
  // =========================================================================
  {
    id: 'w6_fi_501',
    levelId: '6-5',
    type: 'fill-in',
    difficulty: 3,
    prompt: 'Gleichsetzungsaufgabe: Ein $80\\text{ m}$ langes Rechteck hat denselben Flächeninhalt wie ein Trapez mit $a = 100\\text{ m}$, $c = 60\\text{ m}$ und $h = 50\\text{ m}$. Berechne die Breite des Rechtecks in Metern:',
    promptLatex: 'l = 80\\text{ m}, \\quad A_{\\text{Rechteck}} = A_{\\text{Trapez}}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Left: Rectangle (l = 80m, b = ?) -->
        <g transform="translate(15, 20)">
          <rect x="0" y="15" width="120" height="65" fill="rgba(59, 130, 246, 0.18)" stroke="#3b82f6" stroke-width="2"/>
          <text x="60" y="8" fill="#3b82f6" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">l = 80 m</text>
          <text x="-8" y="52" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">b = ?</text>
          <text x="60" y="52" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A₁</text>
        </g>

        <!-- Center: Equals sign -->
        <text x="165" y="65" fill="#f59e0b" font-size="28" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">=</text>

        <!-- Right: Trapezoid (a = 100m, c = 60m, h = 50m) -->
        <g transform="translate(195, 20)">
          <polygon points="10,80 130,80 100,15 40,15" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" stroke-width="2"/>
          <text x="70" y="8" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = 60 m</text>
          <text x="70" y="98" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 100 m</text>
          <line x1="40" y1="15" x2="40" y2="80" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
          <text x="36" y="50" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 50 m</text>
          <text x="85" y="54" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A₂</text>
        </g>

        <!-- Bottom formula hint (no spoiler) -->
        <text x="175" y="125" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Flächengleiche Figuren: A₁ = A₂</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 35',
    },
    correctAnswer: '50',
    acceptedAnswers: ['50', '50 m', '50m'],
    hints: [
      '💡 Suki sagt: Berechne zuerst die Trapezfläche: $A = \\frac{100 + 60}{2} \\cdot 50 = 80 \\cdot 50 = 4000\\text{ m}^2$.',
      '🔑 Hinweis: Da das Rechteck dieselbe Fläche hat ($A = l \\cdot b = 4000$), teile die Fläche durch die Länge: $b = 4000 : 80 = 50$.',
      '✅ Lösung: Die Breite des Rechtecks beträgt $50\\text{ m}$.',
    ],
    commonMistake: 'Trapezfläche falsch berechnet oder durch falsche Seite geteilt.',
  },
  {
    id: 'w6_fi_502',
    levelId: '6-5',
    type: 'fill-in',
    difficulty: 3,
    prompt: 'Bestimme die Seitenlänge $s$ eines Quadrats in Zentimetern, das denselben Flächeninhalt hat wie ein Dreieck mit $g = 20\\text{ cm}$ und $h = 10\\text{ cm}$:',
    promptLatex: 'g = 20\\text{ cm}, \\quad h = 10\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Triangle -->
        <g transform="translate(20, 15)">
          <polygon points="0,95 120,95 80,15" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2"/>
          <line x1="80" y1="15" x2="80" y2="95" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
          <text x="84" y="55" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif">h = 10 cm</text>
          <text x="60" y="110" fill="#38bdf8" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 20 cm</text>
        </g>
        <text x="175" y="65" fill="#f59e0b" font-size="24" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">=</text>
        <!-- Square -->
        <g transform="translate(215, 25)">
          <rect x="0" y="0" width="80" height="80" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2"/>
          <text x="40" y="-8" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">s = ?</text>
          <text x="-12" y="45" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">s</text>
          <text x="40" y="45" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = s²</text>
        </g>
        <text x="175" y="130" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Gleicher Flächeninhalt: A_Dreieck = A_Quadrat</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 14',
    },
    correctAnswer: '10',
    acceptedAnswers: ['10', '10 cm', '10cm'],
    hints: [
      '💡 Tipp: Dreiecksfläche berechnen: $A = \\frac{20 \\cdot 10}{2} = \\frac{200}{2} = 100\\text{ cm}^2$.',
      '🔑 Hinweis: Quadratfläche $A = s^2 = 100$. Ziehe die Quadratwurzel: $s = \\sqrt{100} = 10\\text{ cm}$.',
      '✅ Lösung: Die Seitenlänge des Quadrats beträgt $10\\text{ cm}$.',
    ],
    commonMistake: 'Wurzelziehen vergessen oder durch 4 geteilt ($100 : 4$).',
  },
  {
    id: 'w6_mc_503',
    levelId: '6-5',
    type: 'multiple-choice',
    difficulty: 3,
    prompt: 'Ein Rechteck hat den Flächeninhalt $A = 4800\\text{ m}^2$ und eine Breite von $b = 60\\text{ m}$. Wie gross ist sein Umfang $U$?',
    promptLatex: 'A = 4800\\text{ m}^2, \\quad b = 60\\text{ m}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 360 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="220" height="80" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" stroke-width="2.5"/>
        <text x="185" y="60" fill="var(--color-text, #f8fafc)" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = 4800 m²</text>
        <text x="185" y="80" fill="#f59e0b" font-size="11" font-style="italic" font-family="Outfit, sans-serif" text-anchor="middle">Länge l = ? → Umfang U = ?</text>
        <text x="63" y="70" fill="#6366f1" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">b = 60 m</text>
      </svg>`,
    },
    interaction: {
      options: [
        '$U = 280\\text{ m}$',
        '$U = 140\\text{ m}$',
        '$U = 80\\text{ m}$',
        '$U = 320\\text{ m}$',
      ],
    },
    correctAnswer: '$U = 280\\text{ m}$',
    acceptedAnswers: ['$U = 280\\text{ m}$'],
    hints: [
      '💡 Tipp: Berechne zuerst die Länge des Rechtecks: $a = 4800 : 60 = 80\\text{ m}$.',
      '🔑 Hinweis: Formel für den Umfang: $U = 2 \\cdot (a + b) = 2 \\cdot (80 + 60) = 2 \\cdot 140 = 280\\text{ m}$.',
      '✅ Lösung: $U = 280\\text{ m}$.',
    ],
    commonMistake: 'Nur die Summe $a + b = 140\\text{ m}$ angegeben und das Verdoppeln für den gesamten Umfang vergessen.',
  },
];
