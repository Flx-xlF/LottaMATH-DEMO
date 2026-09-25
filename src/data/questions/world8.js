/**
 * Question Bank: World 8 (Reale Sachaufgaben)
 * Topic: Flächeninhalt ebener Figuren
 * Focus: Komplexe Textaufgaben, Materialberechnungen, Verschnitt, Prozentabzüge & Kostenangebote
 * Aligned with 'Mathematik Sekundarstufe I' (S. 178, 179, 181, 183, 190, 191, 192, 194, 195)
 */

export const WORLD8_QUESTIONS = [
  // =========================================================================
  // Level 8-1: Grundstücke & Glaserarbeiten (S. 179 Nr. 1, S. 181 Nr. 1, S. 190 Nr. 4)
  // =========================================================================
  {
    id: 'w8_fi_101',
    levelId: '8-1',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Story (Baugrundstück S. 179 Nr. 1): Ein parallelogrammförmiges Baugrundstück hat eine Strassenfront von $g = 40\\text{ m}$ und eine Tiefe von $h = 25\\text{ m}$. Der Quadratmeterpreis beträgt $325\\text{ Fr./m}^2$. Berechne den gesamten Kaufpreis in Franken:',
    promptLatex: 'g = 40\\text{ m}, \\quad h = 25\\text{ m}, \\quad \\text{Preis} = 325\\text{ Fr./m}^2',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,110 250,110 290,35 90,35" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2.5"/>
        <line x1="90" y1="35" x2="90" y2="110" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="78" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 25 m</text>
        <line x1="50" y1="120" x2="250" y2="120" stroke="#10b981" stroke-width="1.5"/>
        <text x="150" y="134" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 40 m (Strassenfront)</text>
        <rect x="125" y="55" width="110" height="30" rx="6" fill="rgba(15, 23, 42, 0.75)" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="180" y="75" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">325 Fr./m²</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 250000',
    },
    correctAnswer: '325000',
    acceptedAnswers: ['325000', "325'000", '325000 Fr.', "325'000 Fr.", '325000 CHF', "325'000 CHF"],
    hints: [
      '💡 Tipp: Berechne zuerst den Flächeninhalt des Grundstücks: $A = 40 \\cdot 25 = 1000\\text{ m}^2$.',
      '🔑 Hinweis: Multipliziere die Fläche mit dem Quadratmeterpreis: $1000 \\cdot 325 = 325\\text{ }000\\text{ Fr.}$',
      '✅ Lösung: Der Kaufpreis beträgt $325\\text{ }000\\text{ Fr.}$',
    ],
    commonMistake: 'Fläche falsch berechnet oder Nullen bei der Multiplikation vergessen.',
  },
  {
    id: 'w8_fi_102',
    levelId: '8-1',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Story (Wärmeschutzglas S. 181 Nr. 1): Ein Glaser schneidet eine dreieckige Fensterscheibe ($g = 2\\text{ m}, h = 4\\text{ m}$) zu. Wärmeschutzglas kostet $250\\text{ Fr.}$ pro $\\text{m}^2$. Berechne die Kosten für das Glas in Franken:',
    promptLatex: 'A = \\frac{2 \\cdot 4}{2} = 4\\text{ m}^2, \\quad 250\\text{ Fr./m}^2',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="80,115 240,115 160,25" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2.5"/>
        <line x1="160" y1="25" x2="160" y2="115" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="170" y="70" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif">h = 4 m</text>
        <text x="160" y="134" fill="#38bdf8" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 2 m</text>
        <rect x="90" y="55" width="60" height="30" rx="6" fill="rgba(15, 23, 42, 0.75)" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="120" y="74" fill="#f59e0b" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">250 Fr./m²</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 750',
    },
    correctAnswer: '1000',
    acceptedAnswers: ['1000', "1'000", '1000 Fr.', "1'000 Fr.", '1000 CHF', "1'000 CHF", '1000.-'],
    hints: [
      '💡 Tipp: Berechne die Dreiecksfläche: $A = \\frac{2 \\cdot 4}{2} = 4\\text{ m}^2$.',
      '🔑 Hinweis: Multipliziere mit dem Quadratmeterpreis: $4 \\cdot 250 = 1000\\text{ Fr.}$',
      '✅ Lösung: Das Wärmeschutzglas kostet $1000\\text{ Fr.}$',
    ],
    commonMistake: 'Die Dreiecksfläche nicht halbiert ($8 \\cdot 250 = 2000$).',
  },
  {
    id: 'w8_fi_103',
    levelId: '8-1',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Aufgabe aus dem Buch (S. 190 Nr. 4): Landwirt Kleinmeier verkauft für einen Strassenbau ein parallelogrammförmiges Wiesenstück ($g = 20\\text{ m}, h = 150\\text{ m}$). Er erhält $20\\text{ Fr.}$ pro $\\text{m}^2$. Wie viel Geld erhält er insgesamt in Franken?',
    promptLatex: 'g = 20\\text{ m}, \\quad h = 150\\text{ m}, \\quad 20\\text{ Fr./m}^2',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,110 230,110 290,35 110,35" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2.5"/>
        <line x1="110" y1="35" x2="110" y2="110" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="96" y="75" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">h = 150 m</text>
        <text x="140" y="128" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 20 m</text>
        <rect x="150" y="55" width="90" height="28" rx="6" fill="rgba(15, 23, 42, 0.75)" stroke="#f59e0b" stroke-width="1.5"/>
        <text x="195" y="73" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">20 Fr./m²</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 45000',
    },
    correctAnswer: '60000',
    acceptedAnswers: ['60000', "60'000", '60000 Fr.', "60'000 Fr.", '60000 CHF', "60'000 CHF"],
    hints: [
      '💡 Tipp: Berechne die Fläche der Parallelogramm-Wiese: $A = 20 \\cdot 150 = 3000\\text{ m}^2$.',
      '🔑 Hinweis: Multipliziere mit dem Preis pro $\\text{m}^2$: $3000 \\cdot 20 = 60\\text{ }000\\text{ Fr.}$',
      '✅ Lösung: Er erhält $60\\text{ }000\\text{ Fr.}$',
    ],
    commonMistake: 'Rechenfehler bei der Multiplikation.',
  },

  // =========================================================================
  // Level 8-2: Terrassen, Böschungen & Strassen (S. 183 Nr. 1, S. 190 Nr. 5)
  // =========================================================================
  {
    id: 'w8_sb_201',
    levelId: '8-2',
    type: 'step-builder',
    difficulty: 2,
    prompt: 'Story (Grundstückserweiterung S. 190 Nr. 5): Familie Ullmann kauft einen rechteckigen Wiesenstreifen für $60\\text{ }000\\text{ Fr.}$ Der Quadratmeterpreis beträgt $200\\text{ Fr./m}^2$. Das Grundstück hat eine Tiefe von $20\\text{ m}$:',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 380 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="115" y="30" width="210" height="75" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="103" y="72" fill="#3b82f6" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">Tiefe = 20 m</text>
        <text x="220" y="124" fill="#f59e0b" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Breite = ?</text>
        <text x="220" y="60" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Gesamtpreis: 60'000 Fr.</text>
        <text x="220" y="78" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">200 Fr./m²</text>
      </svg>`,
    },
    interaction: {
      steps: [
        {
          prompt: 'Schritt 1: Berechne den Flächeninhalt des gekauften Streifens in $\\text{m}^2$ ($60\\text{ }000 : 200$).',
          correctAnswer: '300',
          hint: 'Rechne $60\\text{ }000 : 200 = 300\\text{ m}^2$.',
        },
        {
          prompt: 'Schritt 2: Berechne die Breite des Streifens in Metern ($300 : 20$).',
          correctAnswer: '15',
          hint: 'Rechne $300 : 20 = 15\\text{ m}$.',
        },
      ],
    },
    correctAnswer: '15',
    acceptedAnswers: ['15', '15 m', '15m'],
    hints: [
      '💡 Suki sagt: Gehe rückwärts vor: Aus den Gesamtkosten und dem Quadratmeterpreis erhältst du zuerst die Fläche!',
      '🔑 Hinweis: Fläche = $60\\text{ }000 : 200 = 300\\text{ m}^2$. Breite = $300 : 20 = 15\\text{ m}$.',
      '✅ Lösung: Der Streifen ist $15\\text{ m}$ breit.',
    ],
    commonMistake: 'Direkt $60\\text{ }000 : 20$ gerechnet ohne den Quadratmeterpreis zu berücksichtigen.',
  },
  {
    id: 'w8_fi_202',
    levelId: '8-2',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Story (Terrasse pflastern): Eine trapezförmige Terrasse ($a = 8\\text{ m}, c = 4\\text{ m}, h = 5\\text{ m}$) soll gepflastert werden. Die Pflastersteine kosten $45\\text{ Fr./m}^2$. Berechne die reinen Materialkosten in Franken:',
    promptLatex: 'A = \\frac{8 + 4}{2} \\cdot 5 = 30\\text{ m}^2, \\quad 45\\text{ Fr./m}^2',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 165" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Paving texture -->
        <defs>
          <pattern id="paving" width="16" height="10" patternUnits="userSpaceOnUse">
            <rect width="16" height="10" fill="rgba(245, 158, 11, 0.15)"/>
            <path d="M 0 0 L 16 0 M 0 5 L 16 5 M 8 0 L 8 5 M 0 5 L 0 10 M 16 5 L 16 10" fill="none" stroke="rgba(245, 158, 11, 0.3)" stroke-width="0.8"/>
          </pattern>
        </defs>

        <!-- Terrace trapezoid (c = 4m top, a = 8m bottom, h = 5m) -->
        <polygon points="60,130 280,130 225,35 115,35" fill="url(#paving)" stroke="#f59e0b" stroke-width="2.5"/>

        <!-- Height indicator h = 5m -->
        <line x1="115" y1="35" x2="115" y2="130" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
        <rect x="115" y="120" width="10" height="10" fill="none" stroke="#f43f5e" stroke-width="1"/>
        <text x="122" y="85" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">h = 5 m</text>

        <!-- Dimensions -->
        <text x="170" y="27" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = 4 m (Hauswand)</text>
        <text x="170" y="148" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">a = 8 m (Gartenseite)</text>

        <!-- Area and cost note -->
        <text x="190" y="80" fill="#f59e0b" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Fläche A = ?</text>
        <text x="190" y="98" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">45 Fr./m² → Kosten = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 1200',
    },
    correctAnswer: '1350',
    acceptedAnswers: ['1350', "1'350", '1350 Fr.', "1'350 Fr.", '1350 CHF', "1'350 CHF"],
    hints: [
      '💡 Tipp: Berechne die Fläche: $A = \\frac{8 + 4}{2} \\cdot 5 = 6 \\cdot 5 = 30\\text{ m}^2$.',
      '🔑 Hinweis: Multipliziere mit dem Preis pro $\\text{m}^2$: $30 \\cdot 45 = 1350\\text{ Fr.}$',
      '✅ Lösung: Die Materialkosten betragen $1350\\text{ Fr.}$',
    ],
    commonMistake: 'Trapezfläche falsch berechnet.',
  },

  // =========================================================================
  // Level 8-3: Dachdecker & Verschnitt (S. 190 Nr. 1, S. 190 Nr. 8 / S. 191)
  // =========================================================================
  {
    id: 'w8_fi_301',
    levelId: '8-3',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Story (Satteldach S. 190 Nr. 1): Ein Haus hat zwei rechteckige Dachflächen von je $8{,}00\\text{ m} \\times 10{,}00\\text{ m}$. Pro $\\text{m}^2$ werden 12 Dachziegel benötigt. Wie viele Dachziegel werden für das gesamte Dach benötigt?',
    promptLatex: '2 \\times (8{,}00 \\cdot 10{,}00) = 160\\text{ m}^2, \\quad 12\\text{ Ziegel/m}^2',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 150" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- 3D style Gable Roof -->
        <line x1="80" y1="35" x2="260" y2="35" stroke="#f59e0b" stroke-width="3"/>
        <text x="170" y="27" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">First (Länge = 10,00 m)</text>
        <polygon points="80,35 260,35 230,115 50,115" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" stroke-width="2"/>
        <text x="145" y="80" fill="#f97316" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Dachfläche 1: 8,00 m × 10,00 m</text>
        <polygon points="50,115 80,35 110,115" fill="rgba(100, 116, 139, 0.2)" stroke="#64748b" stroke-width="1.5"/>
        <text x="170" y="136" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">2 Dachflächen | 12 Ziegel/m²</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 1500',
    },
    correctAnswer: '1920',
    acceptedAnswers: ['1920', "1'920", '1920 Ziegel', "1'920 Ziegel"],
    hints: [
      '💡 Tipp: Berechne eine Dachfläche: $8{,}00 \\cdot 10{,}00 = 80\\text{ m}^2$.',
      '🔑 Hinweis: Beide Dachflächen zusammen: $2 \\cdot 80 = 160\\text{ m}^2$. Dachziegel: $160 \\cdot 12 = 1920$.',
      '✅ Lösung: Es werden $1920\\text{ Dachziegel}$ benötigt.',
    ],
    commonMistake: 'Vergessen, dass ein Satteldach 2 Seiten hat ($90 \\cdot 12 = 1080$).',
  },
  {
    id: 'w8_sb_302',
    levelId: '8-3',
    type: 'step-builder',
    difficulty: 3,
    prompt: 'Story (Walmdach S. 190 Nr. 8): Ein Walmdach besteht aus 2 Trapezen ($a=10\\text{ m}, c=4\\text{ m}, h=5\\text{ m}$) und 2 Dreiecken ($g=6\\text{ m}, h=5\\text{ m}$). Pro $\\text{m}^2$ braucht man 13 Ziegel plus 20% Verschnitt:',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 175" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Roof Net: 2 Trapezes + 2 Triangles -->
        <!-- Center Ridge -->
        <line x1="145" y1="85" x2="205" y2="85" stroke="#f59e0b" stroke-width="3"/>
        <text x="175" y="80" fill="#f59e0b" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">First c = 4 m</text>

        <!-- Top Trapezoid -->
        <polygon points="145,85 205,85 260,25 90,25" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" stroke-width="2"/>
        <text x="175" y="55" fill="#f97316" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Trapez 1: h = 5 m</text>
        <text x="175" y="18" fill="var(--color-text-muted, #94a3b8)" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Traufe a = 10 m</text>

        <!-- Bottom Trapezoid -->
        <polygon points="145,85 205,85 260,145 90,145" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" stroke-width="2"/>
        <text x="175" y="118" fill="#f97316" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Trapez 2: h = 5 m</text>
        <text x="175" y="160" fill="var(--color-text-muted, #94a3b8)" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Traufe a = 10 m</text>

        <!-- Left Triangle (Walm) -->
        <polygon points="145,85 90,25 90,145" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
        <text x="115" y="88" fill="#3b82f6" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Walm 1</text>
        <text x="80" y="88" fill="var(--color-text-muted, #94a3b8)" font-size="10" font-family="Outfit, sans-serif" text-anchor="end">g = 6 m</text>

        <!-- Right Triangle (Walm) -->
        <polygon points="205,85 260,25 260,145" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
        <text x="235" y="88" fill="#3b82f6" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Walm 2</text>
        <text x="270" y="88" fill="var(--color-text-muted, #94a3b8)" font-size="10" font-family="Outfit, sans-serif">g = 6 m</text>

        <!-- Summary text -->
        <text x="175" y="172" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Dachfläche = 2 · A_Trapez + 2 · A_Dreieck</text>
      </svg>`,
    },
    interaction: {
      steps: [
        {
          prompt: 'Schritt 1: Berechne die Fläche der beiden Trapeze zusammen in $\\text{m}^2$ ($2 \\cdot \\frac{10 + 4}{2} \\cdot 5$).',
          correctAnswer: '70',
          hint: '1 Trapez $= 35\\text{ m}^2$. Beide Trapeze zusammen $= 70\\text{ m}^2$.',
        },
        {
          prompt: 'Schritt 2: Berechne die Fläche der beiden Dreiecke zusammen in $\\text{m}^2$ ($2 \\cdot \\frac{6 \\cdot 5}{2}$).',
          correctAnswer: '30',
          hint: '1 Dreieck $= 15\\text{ m}^2$. Beide Dreiecke zusammen $= 30\\text{ m}^2$.',
        },
        {
          prompt: 'Schritt 3: Berechne die gesamte Dachfläche in $\\text{m}^2$ ($70 + 30$).',
          correctAnswer: '100',
          hint: 'Rechne $70 + 30 = 100\\text{ m}^2$.',
        },
        {
          prompt: 'Schritt 4: Berechne die benötigten Ziegel inkl. 20% Verschnitt ($100 \\cdot 13 \\cdot 1{,}20$).',
          correctAnswer: '1560',
          hint: '$100 \\cdot 13 = 1300$ Ziegel. Mit $20\\%$ Verschnitt: $1300 \\cdot 1{,}20 = 1560$ Ziegel.',
        },
      ],
    },
    correctAnswer: '1560',
    acceptedAnswers: ['1560', '1560 Ziegel', "1'560", "1'560 Ziegel"],
    hints: [
      '💡 Suki sagt: Teile die Aufgabe in 4 klare Abschnitte: Trapeze, Dreiecke, Summe und Ziegel mit Verschnittfaktor $1{,}20$!',
      '🔑 Hinweis: Gesamte Fläche $= 100\\text{ m}^2$. Reine Ziegel $= 1300$. Mit Verschnitt: $1300 \\cdot 1{,}20 = 1560$.',
      '✅ Lösung: Es müssen $1560\\text{ Ziegel}$ bestellt werden.',
    ],
    commonMistake: 'Verschnittzuschlag (+20%) vergessen oder Trapeze/Dreiecke nur einfach gerechnet.',
  },

  // =========================================================================
  // Level 8-4: Maler & Bodenleger (S. 190 Nr. 3, S. 192 Nr. 11/13, S. 195 Nr. 7)
  // =========================================================================
  {
    id: 'w8_sb_401',
    levelId: '8-4',
    type: 'step-builder',
    difficulty: 3,
    prompt: 'Story (Korkparkett S. 190 Nr. 3): Ein Kinderzimmer misst $5{,}00\\text{ m} \\times 4{,}00\\text{ m}$. Die Korkplatten sind $40 \\times 25\\text{ cm}$ gross und werden in 10er-Packungen à $25{,}00\\text{ Fr.}$ verkauft:',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Room rectangle -->
        <rect x="40" y="25" width="180" height="95" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="2"/>
        <text x="130" y="65" fill="#f59e0b" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Kinderzimmer</text>
        <text x="130" y="85" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">5,00 m × 4,00 m</text>
        <!-- Single plate -->
        <g transform="translate(245, 45)">
          <rect x="0" y="0" width="60" height="40" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="1.5"/>
          <text x="30" y="24" fill="#10b981" font-size="9" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Platte</text>
          <text x="30" y="-6" fill="var(--color-text, #f8fafc)" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">40 cm</text>
          <text x="66" y="24" fill="var(--color-text, #f8fafc)" font-size="9" font-family="Outfit, sans-serif">25 cm</text>
        </g>
        <text x="275" y="105" fill="#10b981" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">10er-Pack: 25 Fr.</text>
      </svg>`,
    },
    interaction: {
      steps: [
        {
          prompt: 'Schritt 1: Berechne die Bodenfläche des Kinderzimmers in $\\text{m}^2$ ($5{,}00 \\cdot 4{,}00$).',
          correctAnswer: '20',
          hint: 'Rechne $5{,}00 \\cdot 4{,}00 = 20\\text{ m}^2$.',
        },
        {
          prompt: 'Schritt 2: Wie viele Platten ($40\\text{ cm} \\times 25\\text{ cm} = 0{,}10\\text{ m}^2$) braucht man für $20\\text{ m}^2$ ($20 : 0{,}10$)?',
          correctAnswer: '200',
          hint: 'Rechne $20 : 0{,}10 = 200\\text{ Platten}$.',
        },
        {
          prompt: 'Schritt 3: Wie viele 10er-Packungen müssen gekauft werden ($200 : 10$)?',
          correctAnswer: '20',
          hint: 'Rechne $200 : 10 = 20\\text{ Packungen}$.',
        },
        {
          prompt: 'Schritt 4: Wie viel kostet das Korkparkett insgesamt in Franken ($20 \\cdot 25{,}00$)?',
          correctAnswer: '500',
          hint: 'Rechne $20 \\cdot 25{,}00 = 500\\text{ Fr.}$',
        },
      ],
    },
    correctAnswer: '500',
    acceptedAnswers: ['500', '500 Fr.', '500 CHF'],
    hints: [
      '💡 Suki sagt: Schritt für Schritt: Bodenfläche $\\rightarrow$ Plattenanzahl $\\rightarrow$ Packungsanzahl $\\rightarrow$ Gesamtpreis!',
      '🔑 Hinweis: $20\\text{ m}^2 : 0{,}10\\text{ m}^2 = 200\\text{ Platten} = 20\\text{ Packungen}$. Preis: $20 \\cdot 25 = 500\\text{ Fr.}$',
      '✅ Lösung: Das Korkparkett kostet $500\\text{ Fr.}$',
    ],
    commonMistake: 'Fläche einer Platte in $\\text{cm}^2$ statt in $\\text{m}^2$ umgerechnet ($30 \\times 30 = 900\\text{ cm}^2 = 0{,}09\\text{ m}^2$).',
  },
  {
    id: 'w8_fi_402',
    levelId: '8-4',
    type: 'fill-in',
    difficulty: 3,
    prompt: 'Story (Giebelwand streichen S. 195 Nr. 7): Eine Giebelwand hat eine Breite von $10{,}00\\text{ m}$, eine Wandhöhe von $5{,}00\\text{ m}$ und eine Firsthöhe von $8{,}00\\text{ m}$. Die Fenster und die Tür bedecken zusammen $5{,}0\\text{ m}^2$. Pro $\\text{m}^2$ werden $1{,}5\\text{ kg}$ Farbe benötigt. Wie viel kg Farbe werden benötigt?',
    promptLatex: 'A_{\\text{Rechteck}} = 10{,}00 \\cdot 5{,}00, \\quad A_{\\text{Giebeldreieck}} = \\frac{10{,}00 \\cdot 3{,}00}{2}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 185" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Upper Gable Triangle (10m base, 3m height) -->
        <polygon points="90,85 250,85 170,25" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2"/>
        <text x="170" y="65" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Giebeldreieck: A₁ = ?</text>
        <line x1="170" y1="25" x2="170" y2="85" stroke="#10b981" stroke-width="1" stroke-dasharray="2 2"/>
        <text x="175" y="45" fill="#10b981" font-size="9" font-family="Outfit, sans-serif">h = 3 m</text>

        <!-- Lower Wall Rectangle (10m x 5m) -->
        <rect x="90" y="85" width="160" height="70" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
        <text x="170" y="98" fill="#3b82f6" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Wandfläche: A₂ = ?</text>

        <!-- Cutout: Door -->
        <rect x="110" y="115" width="22" height="40" fill="rgba(15, 23, 42, 0.85)" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="121" y="140" fill="#f43f5e" font-size="8" font-family="Outfit, sans-serif" text-anchor="middle">Tür</text>

        <!-- Cutout: Window -->
        <rect x="200" y="105" width="28" height="24" fill="rgba(15, 23, 42, 0.85)" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="214" y="120" fill="#f43f5e" font-size="8" font-family="Outfit, sans-serif" text-anchor="middle">Fenster</text>

        <!-- Cutout label -->
        <text x="170" y="125" fill="#f43f5e" font-size="9" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Fenster &amp; Tür: 5 m² Abzug</text>

        <!-- Dimensions -->
        <line x1="65" y1="25" x2="65" y2="155" stroke="var(--color-text-muted, #94a3b8)" stroke-width="1.5"/>
        <text x="58" y="95" fill="var(--color-text, #f8fafc)" font-size="10" font-family="Outfit, sans-serif" text-anchor="end">8,00 m</text>
        <text x="260" y="125" fill="#3b82f6" font-size="10" font-family="Outfit, sans-serif">5,00 m</text>
        <text x="170" y="172" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Breite = 10,00 m</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 75',
    },
    correctAnswer: '90',
    acceptedAnswers: ['90', '90 kg'],
    hints: [
      '💡 Tipp: Unteres Rechteck: $10{,}00 \\cdot 5{,}00 = 50{,}0\\text{ m}^2$. Oberes Dreieck (Höhe $8{,}00 - 5{,}00 = 3{,}00\\text{ m}$): $\\frac{10{,}00 \\cdot 3{,}00}{2} = 15{,}0\\text{ m}^2$.',
      '🔑 Hinweis: Wandfläche $= 50{,}0 + 15{,}0 = 65{,}0\\text{ m}^2$. Nach Fensterabzug: $65{,}0 - 5{,}0 = 60{,}0\\text{ m}^2$. Farbe: $60{,}0 \\cdot 1{,}5 = 90\\text{ kg}$.',
      '✅ Lösung: Es werden $90\\text{ kg}$ Farbe benötigt.',
    ],
    commonMistake: 'Fensterabzug ($5{,}0\\text{ m}^2$) vor dem Berechnen des Farbverbrauchs vergessen.',
  },

  // =========================================================================
  // Level 8-5: Boss: Der Generalunternehmer (S. 194 Nr. 4, S. 192 Nr. 12)
  // =========================================================================
  {
    id: 'w8_fi_501',
    levelId: '8-5',
    type: 'fill-in',
    difficulty: 3,
    prompt: 'Kompetenztest-Aufgabe (S. 194 Nr. 4): Das Zeltdach eines achteckigen Gebäudes besteht aus 8 gleich grossen Dreiecksflächen mit Grundseite $g = 5{,}00\\text{ m}$ und Dreieckshöhe $h = 8{,}00\\text{ m}$. Der Spengler verlangt $100\\text{ Fr./m}^2$ für Zinkblech. Berechne die Gesamtkosten in Franken:',
    promptLatex: '8 \\times \\left(\\frac{5{,}00 \\cdot 8{,}00}{2}\\right) \\times 100\\text{ Fr./m}^2',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 150" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="60,115 160,115 110,25" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2.5"/>
        <line x1="110" y1="25" x2="110" y2="115" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="116" y="70" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">h = 8,00 m</text>
        <text x="110" y="132" fill="#38bdf8" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 5,00 m</text>
        <g transform="translate(190, 40)">
          <rect x="0" y="0" width="130" height="60" rx="8" fill="rgba(15, 23, 42, 0.75)" stroke="#f59e0b" stroke-width="1.5"/>
          <text x="65" y="24" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">8 gleiche Dreiecke</text>
          <text x="65" y="44" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">100 Fr./m² Blech</text>
        </g>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 12000',
    },
    correctAnswer: '16000',
    acceptedAnswers: ['16000', "16'000", '16000 Fr.', "16'000 Fr.", '16000 CHF'],
    hints: [
      '💡 Tipp: Berechne eine Dreiecksfläche: $\\frac{5{,}00 \\cdot 8{,}00}{2} = 20{,}0\\text{ m}^2$.',
      '🔑 Hinweis: Alle 8 Dreiecksflächen zusammen: $8 \\cdot 20{,}0 = 160\\text{ m}^2$. Gesamtkosten: $160 \\cdot 100 = 16\\text{ }000\\text{ Fr.}$',
      '✅ Lösung: Die Spenglerarbeiten kosten $16\\text{ }000\\text{ Fr.}$',
    ],
    commonMistake: 'Dreiecksfläche nicht mit 8 multipliziert oder das Teilen durch 2 vergessen.',
  },
  {
    id: 'w8_mc_502',
    levelId: '8-5',
    type: 'multiple-choice',
    difficulty: 3,
    prompt: 'Story (Fassadendämmung S. 192 Nr. 11): Die gesamte Aussenwandfläche eines Hauses beträgt $400\\text{ m}^2$. Für Fenster und Türen müssen $25\\%$ abgezogen werden. Die Dämmung kostet $100\\text{ Fr./m}^2$. Wie lautet der korrekte Rechenansatz für die Gesamtkosten?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="25" width="240" height="85" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2"/>
        <text x="170" y="55" fill="var(--color-text, #f8fafc)" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Gesamtfläche: 400 m²</text>
        <rect x="190" y="45" width="80" height="50" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="230" y="75" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">- 25% Fenster</text>
        <text x="110" y="80" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">75% gedämmt</text>
        <text x="170" y="130" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Dämmung: 100 Fr./m²</text>
      </svg>`,
    },
    interaction: {
      options: [
        '$\\text{Kosten} = 400 \\cdot 0{,}75 \\cdot 100 = 30\\,000\\text{ Fr.}$',
        '$\\text{Kosten} = 400 \\cdot 1{,}25 \\cdot 100 = 50\\,000\\text{ Fr.}$',
        '$\\text{Kosten} = (400 - 25) \\cdot 100 = 37\\,500\\text{ Fr.}$',
        '$\\text{Kosten} = 400 \\cdot 100 = 40\\,000\\text{ Fr.}$',
      ],
    },
    correctAnswer: '$\\text{Kosten} = 400 \\cdot 0{,}75 \\cdot 100 = 30\\,000\\text{ Fr.}$',
    acceptedAnswers: ['$\\text{Kosten} = 400 \\cdot 0{,}75 \\cdot 100 = 30\\,000\\text{ Fr.}$'],
    hints: [
      '💡 Suki sagt: $25\\%$ Abzug bedeutet, dass noch $75\\%$ (also Faktor $0{,}75$) der Fläche übrig bleiben!',
      '🔑 Hinweis: Gedämmte Fläche $= 400 \\cdot 0{,}75 = 300\\text{ m}^2$. Kosten $= 300 \\cdot 100 = 30\\text{ }000\\text{ Fr.}$',
      '✅ Lösung: Kosten $= 400 \\cdot 0{,}75 \\cdot 100 = 30\\text{ }000\\text{ Fr.}$',
    ],
    commonMistake: '25 m² direkt von 400 subtrahiert statt 25% abzuziehen.',
  },
];
