/**
 * Question Bank: World 7 (Zusammengesetzte Flächen)
 * Topic: Flächeninhalt ebener Figuren
 * Focus: Additive Zerlegung, subtraktive Ergänzung, Schmuckfiguren & Gitter-Vielecke
 * Aligned with 'Mathematik Sekundarstufe I' (S. 186 Nr. 8, S. 188 Nr. 2/4/5/11, S. 194 Nr. 2, S. 195 Nr. 3)
 */

export const WORLD7_QUESTIONS = [
  // =========================================================================
  // Level 7-1: Additive Zerlegung (S. 188 Nr. 4a, 4b)
  // =========================================================================
  {
    id: 'w7_sb_101',
    levelId: '7-1',
    type: 'step-builder',
    difficulty: 2,
    prompt: 'Zerlege die L-förmige Figur (Masse in m: linker Teil $4{,}0 \\times 4{,}0$, rechter Streifen $2{,}0 \\times 6{,}0$) Schritt für Schritt:',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 320 165" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- L-figure: Left 4x4, Right 2x6 -->
        <!-- Part 1: Left Square (4.0 x 4.0) -> (70, 60) to (150, 140) -->
        <rect x="70" y="60" width="80" height="80" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="110" y="105" fill="#3b82f6" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Teilfläche A₁ = ?</text>

        <!-- Part 2: Right Rect (2.0 x 6.0) -> (150, 20) to (190, 140) -->
        <rect x="150" y="20" width="40" height="120" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2.5"/>
        <text x="170" y="75" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A₂ = ?</text>

        <!-- Cut line (dashed) -->
        <line x1="150" y1="60" x2="150" y2="140" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>

        <!-- Dimension Labels -->
        <text x="110" y="155" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">4,0 m</text>
        <text x="170" y="155" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">2,0 m</text>
        <text x="60" y="105" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="end">4,0 m</text>
        <text x="200" y="85" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif">6,0 m</text>

        <!-- Total area note -->
        <text x="160" y="14" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Gesamtfläche A = A₁ + A₂</text>
      </svg>`,
    },
    interaction: {
      steps: [
        {
          prompt: 'Schritt 1: Berechne den Flächeninhalt des linken Quadrats ($4{,}0\\text{ m} \\times 4{,}0\\text{ m}$).',
          correctAnswer: '16',
          hint: 'Rechne $4{,}0 \\cdot 4{,}0 = 16$.',
        },
        {
          prompt: 'Schritt 2: Berechne den Flächeninhalt des rechten Rechtecks ($2{,}0\\text{ m} \\times 6{,}0\\text{ m}$).',
          correctAnswer: '12',
          hint: 'Rechne $2{,}0 \\cdot 6{,}0 = 12$.',
        },
        {
          prompt: 'Schritt 3: Addiere beide Teilflächen zur Gesamtfläche.',
          correctAnswer: '28',
          hint: 'Rechne $16 + 12 = 28$.',
        },
      ],
    },
    correctAnswer: '28',
    acceptedAnswers: ['28', '28 m²', '28m²'],
    hints: [
      '💡 Suki sagt: Teile das unhandliche "L" einfach mit einem geraden Schnitt in zwei bekannte Rechtecke!',
      '🔑 Hinweis: Berechne $A_1 = 4{,}0 \\cdot 4{,}0 = 16$ und $A_2 = 2{,}0 \\cdot 6{,}0 = 12$. Addiere beide:',
      '✅ Lösung: Die Gesamtfläche beträgt $28\\text{ m}^2$.',
    ],
    commonMistake: 'Masse falsch zugeordnet und Schnittkanten doppelt gezählt.',
  },
  {
    id: 'w7_fi_102',
    levelId: '7-1',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Aufgabe aus dem Buch (S. 188 Nr. 4b): Eine Treppenfigur hat eine Gesamtbreite von $25\\text{ cm}$. Die linke Stufe ist $10\\text{ cm}$ breit und $10\\text{ cm}$ hoch. Die rechte Stufe ist $15\\text{ cm}$ breit und $20\\text{ cm}$ hoch. Berechne die Gesamtfläche in $\\text{cm}^2$:',
    promptLatex: 'A_1 = 10 \\cdot 10, \\quad A_2 = 15 \\cdot 20',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 165" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Step 1: Left (10x10) -->
        <rect x="60" y="80" width="80" height="60" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2.5"/>
        <text x="100" y="115" fill="#3b82f6" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A₁ = ?</text>

        <!-- Step 2: Right (15x20) -->
        <rect x="140" y="20" width="120" height="120" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2.5"/>
        <text x="200" y="85" fill="#10b981" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A₂ = ?</text>

        <!-- Dashed separator -->
        <line x1="140" y1="80" x2="140" y2="140" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>

        <!-- Height labels -->
        <text x="50" y="115" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="end">10 cm</text>
        <text x="270" y="85" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif">20 cm</text>

        <!-- Width labels -->
        <text x="100" y="155" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">10 cm</text>
        <text x="200" y="155" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">15 cm</text>

        <!-- Note -->
        <text x="170" y="12" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Gesamt: A = A₁ + A₂ = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 350',
    },
    correctAnswer: '400',
    acceptedAnswers: ['400', '400 cm²', '400cm²', '400 cm^2'],
    hints: [
      '💡 Tipp: Berechne die linke Stufe: $A_1 = 10 \\cdot 10 = 100\\text{ cm}^2$.',
      '🔑 Hinweis: Berechne die rechte Stufe: $A_2 = 15 \\cdot 20 = 300\\text{ cm}^2$. Gesamtfläche: $100 + 300 = 400$.',
      '✅ Lösung: Die Gesamtfläche beträgt $400\\text{ cm}^2$.',
    ],
    commonMistake: 'Die Breite der zweiten Stufe fälschlicherweise als $25$ statt $(25 - 10) = 15$ angenommen.',
  },
  {
    id: 'w7_mc_103',
    levelId: '7-1',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Welche Grundregel gilt für das Zerlegen zusammengesetzter Flächen?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Sub-shape 1: Rectangle -->
        <rect x="50" y="30" width="100" height="80" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
        <text x="100" y="75" fill="#3b82f6" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A₁</text>
        <!-- Sub-shape 2: Triangle -->
        <polygon points="150,30 250,110 150,110" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2"/>
        <text x="180" y="85" fill="#10b981" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A₂</text>
        <!-- Formula text -->
        <text x="170" y="132" fill="#f59e0b" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A_gesamt = A₁ + A₂ (keine Überlappung)</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Die Gesamtfläche ist gleich der Summe aller nicht-überlappenden Teilflächen.',
        'Man darf Figuren nur in Dreiecke zerlegen, nie in Rechtecke.',
        'Beim Zerlegen ändert sich der gesamte Flächeninhalt geringfügig.',
        'Zusammengesetzte Flächen kann man nur durch Schätzen bestimmen.',
      ],
    },
    correctAnswer: 'Die Gesamtfläche ist gleich der Summe aller nicht-überlappenden Teilflächen.',
    acceptedAnswers: ['Die Gesamtfläche ist gleich der Summe aller nicht-überlappenden Teilflächen.'],
    hints: [
      '💡 Suki sagt: Egal wie du eine Pizza in Stücke schneidest – zusammen haben die Stücke immer genau dieselbe Fläche wie die ganze Pizza!',
      '🔑 Hinweis: Es gilt: $A_{\\text{ges}} = A_1 + A_2 + A_3 + \\dots$',
      '✅ Lösung: Die Gesamtfläche ist immer die Summe der einzelnen Teilflächen.',
    ],
    commonMistake: 'Geglaubt, die Art der Zerlegung würde das Endergebnis verändern.',
  },

  // =========================================================================
  // Level 7-2: Subtraktive Ergänzung (Restfläche) (S. 181 Nr. 2, S. 188 Nr. 5)
  // =========================================================================
  {
    id: 'w7_fi_201',
    levelId: '7-2',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Story (Glaszuschnitt): Ein Glaser hat eine quadratische Glasscheibe von $1{,}00\\text{ m} \\times 1{,}00\\text{ m}$. Daraus schneidet er an einer Ecke ein dreieckiges Stück mit den Katheten $0{,}40\\text{ m}$ und $1{,}00\\text{ m}$ ab. Wie gross ist die verbleibende Restfläche in $\\text{m}^2$?',
    promptLatex: 'A_{\\text{Quadrat}} = 1{,}00 \\cdot 1{,}00, \\quad A_{\\text{Dreieck}} = \\frac{0{,}40 \\cdot 1{,}00}{2}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 165" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Original square boundary (dashed) -->
        <rect x="90" y="20" width="120" height="120" fill="none" stroke="var(--color-border, #64748b)" stroke-width="1.5" stroke-dasharray="3 3"/>

        <!-- Remaining Glass (Trapezoid: 90,20 to 162,20 to 210,140 to 90,140) -->
        <polygon points="90,20 162,20 210,140 90,140" fill="rgba(6, 182, 212, 0.25)" stroke="#06b6d4" stroke-width="2.5"/>
        <text x="135" y="85" fill="#06b6d4" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Restfläche</text>
        <text x="135" y="102" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = ?</text>

        <!-- Cut-off triangle (162,20 to 210,20 to 210,140) -->
        <polygon points="162,20 210,20 210,140" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="195" y="60" fill="#f43f5e" font-size="9" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Abfall</text>
        <text x="195" y="75" fill="#f43f5e" font-size="9" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Dreieck</text>

        <!-- Dimensions -->
        <text x="80" y="85" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="end">1,00 m</text>
        <text x="150" y="155" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">1,00 m</text>
        <text x="186" y="14" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">0,40 m</text>

        <!-- Calculation Note -->
        <text x="170" y="162" fill="#06b6d4" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Restfläche = Quadrat - Abfalldreieck</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 0.5',
    },
    correctAnswer: '0.8',
    acceptedAnswers: ['0.8', '0,8', '0.8 m²', '0,8 m²', '0.8m²'],
    hints: [
      '💡 Tipp: Berechne zuerst die Gesamtfläche des Quadrats: $1{,}00 \\cdot 1{,}00 = 1{,}00\\text{ m}^2$.',
      '🔑 Hinweis: Berechne das abgeschnittene Dreieck: $\\frac{0{,}40 \\cdot 1{,}00}{2} = 0{,}20\\text{ m}^2$. Subtrahiere: $1{,}00 - 0{,}20 = 0{,}80$.',
      '✅ Lösung: Die Restfläche beträgt $0{,}8\\text{ m}^2$.',
    ],
    commonMistake: 'Das abgeschnittene Dreieck addiert statt subtrahiert ($1{,}80$).',
  },
  {
    id: 'w7_fi_202',
    levelId: '7-2',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Ein rechteckiges Blech misst $60\\text{ cm} \\times 40\\text{ cm}$ ($2400\\text{ cm}^2$). In der Mitte wird eine trapezförmige Öffnung mit $a = 20\\text{ cm}$, $c = 10\\text{ cm}$ und $h = 20\\text{ cm}$ ausgestanzt. Wie gross ist die verbleibende Blechfläche in $\\text{cm}^2$?',
    promptLatex: 'A_{\\text{Blech}} = 2400\\text{ cm}^2, \\quad A_{\\text{Trapez}} = \\frac{20 + 10}{2} \\cdot 20',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 165" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Outer Blech (60 x 40 cm) -->
        <rect x="50" y="20" width="240" height="110" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2.5"/>

        <!-- Punched-out Trapezoid hole in center -->
        <polygon points="130,105 210,105 190,55 150,55" fill="rgba(15, 23, 42, 0.85)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
        <text x="170" y="82" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Ausstanzung</text>

        <!-- Inner trapezoid dimensions -->
        <text x="170" y="50" fill="#f43f5e" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">c = 10 cm</text>
        <text x="170" y="118" fill="#f43f5e" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">a = 20 cm</text>
        <text x="215" y="80" fill="#f43f5e" font-size="9" font-family="Outfit, sans-serif">h = 20 cm</text>

        <!-- Outer dimensions -->
        <text x="170" y="14" fill="#6366f1" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Blechbreite: 60 cm</text>
        <text x="40" y="80" fill="#6366f1" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">40 cm</text>

        <!-- Formula at bottom -->
        <text x="170" y="152" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Restfläche = Gesamtblech - Trapezloch</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 1800',
    },
    correctAnswer: '2100',
    acceptedAnswers: ['2100', '2100 cm²', '2100cm²', '2100 cm^2'],
    hints: [
      '💡 Tipp: Berechne die Fläche des Trapezes: $\\frac{20 + 10}{2} \\cdot 20 = 15 \\cdot 20 = 300\\text{ cm}^2$.',
      '🔑 Hinweis: Ziehe die Öffnung vom Gesamtblech ab: $2400 - 300 = 2100\\text{ cm}^2$.',
      '✅ Lösung: Die Restfläche beträgt $2100\\text{ cm}^2$.',
    ],
    commonMistake: 'Trapezfläche falsch berechnet oder nicht vom Gesamtblech abgezogen.',
  },
  {
    id: 'w7_mc_203',
    levelId: '7-2',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wann ist die subtraktive Ergänzungsmethode ("Ergänzen zum Rechteck minus Aussparungen") besonders vorteilhaft?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Bounding rectangle (dashed) -->
        <rect x="70" y="20" width="200" height="95" fill="none" stroke="var(--color-border, #64748b)" stroke-width="1.5" stroke-dasharray="4 3"/>
        <!-- Main body with missing corner -->
        <polygon points="70,20 210,20 270,80 270,115 70,115" fill="rgba(6, 182, 212, 0.2)" stroke="#06b6d4" stroke-width="2.5"/>
        <!-- Missing corner triangle -->
        <polygon points="210,20 270,20 270,80" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3 3"/>
        <text x="245" y="45" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Ecke</text>
        <text x="155" y="70" fill="#06b6d4" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Figur</text>
        <text x="170" y="132" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A_Figur = A_Rechteck - A_Ecke</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Wenn eine Figur fast ein Rechteck ist und nur an den Ecken kleine Dreiecke fehlen.',
        'Nur bei perfekten Quadraten.',
        'Wenn alle Seiten krumm und unregelmässig sind.',
        'Die Ergänzungsmethode ist immer langsamer als die Zerlegung.',
      ],
    },
    correctAnswer: 'Wenn eine Figur fast ein Rechteck ist und nur an den Ecken kleine Dreiecke fehlen.',
    acceptedAnswers: ['Wenn eine Figur fast ein Rechteck ist und nur an den Ecken kleine Dreiecke fehlen.'],
    hints: [
      '💡 Suki sagt: Wenn du ein Grundstück mit einer abgeschrägten Ecke hast, berechne einfach das grosse Rechteck und ziehe das kleine Eckdreieck ab!',
      '🔑 Hinweis: Statt die Figur mühsam in 3 Teile zu zerlegen, rechnest du $A_{\\text{ges}} = A_{\\text{Rahmen}} - A_{\\text{Ecke}}$. Das spart Zeit und Fehler.',
      '✅ Lösung: Wenn eine Figur fast ein Rechteck ist und nur wenige Ecken fehlen.',
    ],
    commonMistake: 'Die Eleganz der Subtraktionsmethode nicht erkannt.',
  },

  // =========================================================================
  // Level 7-3: Schmuckfiguren & Sterne (S. 186 Nr. 8)
  // =========================================================================
  {
    id: 'w7_fi_301',
    levelId: '7-3',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Story (Bandornament): Ein Fries aus 4 aneinandergefügten Rhomben (Raute) spannt sich über ein Rechteck der Länge $40\\text{ cm}$ und Höhe $10\\text{ cm}$. Berechne die farbige Gesamtfläche der 4 Rhomben in $\\text{cm}^2$:',
    promptLatex: 'e_1 = \\frac{40}{4} = 10\\text{ cm}, \\quad f_1 = 10\\text{ cm}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 380 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Surrounding rectangle (40 x 10 cm) -->
        <rect x="50" y="25" width="300" height="70" fill="none" stroke="var(--color-border, #64748b)" stroke-width="1.5" stroke-dasharray="3 3"/>

        <!-- 4 Rhombuses -->
        <polygon points="50,60 87.5,25 125,60 87.5,95" fill="rgba(168, 85, 247, 0.25)" stroke="#a855f7" stroke-width="2"/>
        <polygon points="125,60 162.5,25 200,60 162.5,95" fill="rgba(168, 85, 247, 0.25)" stroke="#a855f7" stroke-width="2"/>
        <polygon points="200,60 237.5,25 275,60 237.5,95" fill="rgba(168, 85, 247, 0.25)" stroke="#a855f7" stroke-width="2"/>
        <polygon points="275,60 312.5,25 350,60 312.5,95" fill="rgba(168, 85, 247, 0.25)" stroke="#a855f7" stroke-width="2"/>

        <!-- Inner diagonals for Rhombus 1 -->
        <line x1="50" y1="60" x2="125" y2="60" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2 2"/>
        <line x1="87.5" y1="25" x2="87.5" y2="95" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2 2"/>
        <text x="87.5" y="52" fill="#f59e0b" font-size="9" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">e₁</text>

        <!-- Dimensions -->
        <text x="200" y="15" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Gesamtlänge = 40 cm (4 gleiche Rhomben)</text>
        <text x="42" y="64" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="end">10 cm</text>

        <!-- Bottom formula -->
        <text x="200" y="122" fill="#a855f7" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Fläche aller 4 Rhomben zusammen = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 250',
    },
    correctAnswer: '200',
    acceptedAnswers: ['200', '200 cm²', '200cm²', '200 cm^2'],
    hints: [
      '💡 Suki sagt: Jeder einzelne Rhombus hat die Diagonalen $e = 40 : 4 = 10\\text{ cm}$ und $f = 10\\text{ cm}$.',
      '🔑 Hinweis: Ein Rhombus hat die Fläche $A_1 = \\frac{10 \\cdot 10}{2} = 50\\text{ cm}^2$. Alle 4 zusammen: $4 \\cdot 50 = 200\\text{ cm}^2$ (genau die Hälfte des Rechtecks $40 \\cdot 10 = 400$!).',
      '✅ Lösung: Die Gesamtfläche beträgt $200\\text{ cm}^2$.',
    ],
    commonMistake: 'Die Fläche eines einzelnen Rhombus nicht mit 4 multipliziert ($50$).',
  },
  {
    id: 'w7_fi_302',
    levelId: '7-3',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Aufgabe aus dem Buch (S. 186 Nr. 8a): Ein Stern besteht aus einem zentralen Quadrat ($30\\text{ cm} \\times 30\\text{ cm}$) und 4 angesetzten Dreiecks-Zacken (Grundseite $g = 20\\text{ cm}$, Höhe $h = 20\\text{ cm}$). Berechne den gesamten Flächeninhalt des Sterns in $\\text{cm}^2$:',
    promptLatex: 'A_{\\text{Quadrat}} = 30 \\cdot 30, \\quad 4 \\times A_{\\text{Dreieck}} = 4 \\cdot \\frac{20 \\cdot 20}{2}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 320 200" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- 4 Triangle Spikes -->
        <polygon points="140,70 180,70 160,20" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="2"/>
        <polygon points="140,130 180,130 160,180" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="2"/>
        <polygon points="130,80 130,120 80,100" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="2"/>
        <polygon points="190,80 190,120 240,100" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="2"/>

        <!-- Central Square (30 x 30 cm) -->
        <rect x="130" y="70" width="60" height="60" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" stroke-width="2.5"/>
        <text x="160" y="104" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">30 × 30 cm</text>

        <!-- Labels -->
        <text x="160" y="14" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Zacke: g = 20, h = 20</text>

        <!-- Summary -->
        <text x="160" y="196" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Gesamtfläche des Sterns = ?</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 1500',
    },
    correctAnswer: '1700',
    acceptedAnswers: ['1700', '1700 cm²', '1700cm²', '1700 cm^2'],
    hints: [
      '💡 Tipp: Zentrales Quadrat: $30 \\cdot 30 = 900\\text{ cm}^2$.',
      '🔑 Hinweis: Eine Zacke: $\\frac{20 \\cdot 20}{2} = 200\\text{ cm}^2$. Vier Zacken: $4 \\cdot 200 = 800\\text{ cm}^2$. Gesamt: $900 + 800 = 1700$.',
      '✅ Lösung: Der Flächeninhalt des Sterns beträgt $1700\\text{ cm}^2$.',
    ],
    commonMistake: 'Nur 1 Zacke zum Quadrat addiert ($1100$).',
  },

  // =========================================================================
  // Level 7-4: Vielecke im Gitter (S. 188 Nr. 11, S. 194 Nr. 2)
  // =========================================================================
  {
    id: 'w7_fi_401',
    levelId: '7-4',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Ein Fünfeck auf kariertem Papier (Kästchenlänge $1\\text{ cm}$) lässt sich in ein Rechteck ($6\\text{ cm} \\times 4\\text{ cm}$) und ein aufgesetztes Dreieck ($g = 6\\text{ cm}, h = 3\\text{ cm}$) zerlegen. Wie gross ist die Fläche des Fünfecks in $\\text{cm}^2$?',
    promptLatex: 'A_{\\text{Rechteck}} = 6 \\cdot 4, \\quad A_{\\text{Dreieck}} = \\frac{6 \\cdot 3}{2}',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 320 170" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Grid pattern -->
        <defs>
          <pattern id="grid401" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-border, #334155)" stroke-width="0.8"/>
          </pattern>
        </defs>
        <rect x="20" y="5" width="280" height="155" fill="url(#grid401)" opacity="0.6"/>

        <!-- Lower Rectangle (6 x 4) -->
        <rect x="100" y="70" width="120" height="80" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
        <text x="160" y="115" fill="#3b82f6" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A₁ = ?</text>

        <!-- Upper Triangle (g = 6, h = 3) -->
        <polygon points="100,70 220,70 160,10" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2"/>
        <text x="160" y="52" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A₂ = ?</text>

        <!-- Dashed separator -->
        <line x1="100" y1="70" x2="220" y2="70" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3"/>

        <!-- Triangle height line -->
        <line x1="160" y1="10" x2="160" y2="70" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="166" y="32" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif">h = 3 cm</text>

        <!-- Dimensions -->
        <text x="90" y="115" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="end">4 cm</text>
        <text x="160" y="162" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">g = 6 cm</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 30',
    },
    correctAnswer: '33',
    acceptedAnswers: ['33', '33 cm²', '33cm²', '33 cm^2'],
    hints: [
      '💡 Tipp: Rechteckfläche: $6 \\cdot 4 = 24\\text{ cm}^2$.',
      '🔑 Hinweis: Dreiecksfläche: $\\frac{6 \\cdot 3}{2} = 9\\text{ cm}^2$. Gesamt: $24 + 9 = 33$.',
      '✅ Lösung: $A = 33\\text{ cm}^2$.',
    ],
    commonMistake: 'Dreieck nicht halbiert ($24 + 18 = 42$).',
  },
  {
    id: 'w7_mc_402',
    levelId: '7-4',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Achtung Masseinheit im Gitter: Ein Gitter hat eine Kästchenlänge von $0{,}5\\text{ cm}$. Eine Figur füllt genau 16 Gitterkästchen aus. Welchen Flächeninhalt hat die Figur in $\\text{cm}^2$?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- 4x4 Grid of 16 filled squares -->
        <g transform="translate(120, 20)">
          <rect x="0" y="0" width="80" height="80" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="2"/>
          <line x1="20" y1="0" x2="20" y2="80" stroke="#10b981" stroke-width="1"/>
          <line x1="40" y1="0" x2="40" y2="80" stroke="#10b981" stroke-width="1"/>
          <line x1="60" y1="0" x2="60" y2="80" stroke="#10b981" stroke-width="1"/>
          <line x1="0" y1="20" x2="80" y2="20" stroke="#10b981" stroke-width="1"/>
          <line x1="0" y1="40" x2="80" y2="40" stroke="#10b981" stroke-width="1"/>
          <line x1="0" y1="60" x2="80" y2="60" stroke="#10b981" stroke-width="1"/>
          <text x="40" y="-8" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">16 Kästchen</text>
        </g>
        <text x="95" y="60" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">1 Kästchen = 0,5 cm</text>
        <text x="170" y="125" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Fläche von 1 Kästchen = 0,5 cm · 0,5 cm = ?</text>
      </svg>`,
    },
    interaction: {
      options: [
        '$4\\text{ cm}^2$ (da 1 Kästchen $= 0{,}5\\text{ cm} \\cdot 0{,}5\\text{ cm} = 0{,}25\\text{ cm}^2$)',
        '$8\\text{ cm}^2$',
        '$16\\text{ cm}^2$',
        '$2\\text{ cm}^2$',
      ],
    },
    correctAnswer: '$4\\text{ cm}^2$ (da 1 Kästchen $= 0{,}5\\text{ cm} \\cdot 0{,}5\\text{ cm} = 0{,}25\\text{ cm}^2$)',
    acceptedAnswers: ['$4\\text{ cm}^2$ (da 1 Kästchen $= 0{,}5\\text{ cm} \\cdot 0{,}5\\text{ cm} = 0{,}25\\text{ cm}^2$)'],
    hints: [
      '💡 Suki sagt: Pass gut auf! 1 Kästchen mit Kantenlänge $0{,}5\\text{ cm}$ hat die Fläche $0{,}5 \\cdot 0{,}5 = 0{,}25\\text{ cm}^2$!',
      '🔑 Hinweis: Bei 16 Kästchen rechnest du $16 \\cdot 0{,}25\\text{ cm}^2 = 4\\text{ cm}^2$.',
      '✅ Lösung: Der Flächeninhalt beträgt $4\\text{ cm}^2$.',
    ],
    commonMistake: 'Die Kästchenanzahl einfach mit $0{,}5$ multipliziert ($8\\text{ cm}^2$) statt mit $0{,}25$.',
  },

  // =========================================================================
  // Level 7-5: Boss: Puzzle-Architekt (S. 188 Nr. 4c, S. 195 Nr. 3)
  // =========================================================================
  {
    id: 'w7_sb_501',
    levelId: '7-5',
    type: 'step-builder',
    difficulty: 3,
    prompt: 'Kompetenztest-Aufgabe: Berechne den Flächeninhalt des symmetrischen Sechsecks (Masse in cm: Obere Kante $80$, Untere Kante $120$, Gesamthöhe $70$, unterer gerader Block bis Höhe $40$):',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 185" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Upper Trapezoid (c=80, a=120, h=30) -->
        <polygon points="60,95 284,95 244,35 100,35" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="2"/>
        <text x="172" y="68" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Trapez: A₂ = ?</text>
        <text x="172" y="27" fill="#f59e0b" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">c = 80 cm</text>

        <!-- Lower Rectangle (120 x 40) -->
        <rect x="60" y="95" width="224" height="60" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
        <text x="172" y="130" fill="#6366f1" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Rechteck: A₁ = ?</text>

        <!-- Dashed separator -->
        <line x1="60" y1="95" x2="284" y2="95" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4 3"/>

        <!-- Height indicators on left -->
        <line x1="40" y1="35" x2="40" y2="155" stroke="var(--color-text-muted, #94a3b8)" stroke-width="1.5"/>
        <line x1="35" y1="35" x2="45" y2="35" stroke="var(--color-text-muted, #94a3b8)" stroke-width="1.5"/>
        <line x1="35" y1="155" x2="45" y2="155" stroke="var(--color-text-muted, #94a3b8)" stroke-width="1.5"/>
        <text x="32" y="98" fill="var(--color-text, #f8fafc)" font-size="10" font-family="Outfit, sans-serif" text-anchor="end">70 cm</text>

        <!-- Right side block heights -->
        <text x="290" y="130" fill="#6366f1" font-size="10" font-family="Outfit, sans-serif">40 cm</text>
        <text x="290" y="68" fill="#f59e0b" font-size="10" font-family="Outfit, sans-serif">h = 30 cm</text>

        <!-- Bottom dimension -->
        <text x="172" y="172" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Untere Kante = 120 cm</text>
      </svg>`,
    },
    interaction: {
      steps: [
        {
          prompt: 'Schritt 1: Berechne den unteren rechteckigen Bereich ($120\\text{ cm} \\times 40\\text{ cm}$).',
          correctAnswer: '4800',
          hint: 'Rechne $120 \\cdot 40 = 4800$.',
        },
        {
          prompt: 'Schritt 2: Berechne das aufgesetzte Trapez (Grundseiten $a = 120$, $c = 80$, Höhe $h = 70 - 40 = 30$).',
          correctAnswer: '3000',
          hint: 'Trapez: $\\frac{120 + 80}{2} \\cdot 30 = 100 \\cdot 30 = 3000$.',
        },
        {
          prompt: 'Schritt 3: Addiere beide Teilflächen zur Gesamtfläche.',
          correctAnswer: '7800',
          hint: 'Rechne $4800 + 3000 = 7800$.',
        },
      ],
    },
    correctAnswer: '7800',
    acceptedAnswers: ['7800', '7800 cm²', '7800cm²', '7800 cm^2'],
    hints: [
      '💡 Suki sagt: Die Figur besteht unten aus einem Rechteck und oben aus einem symmetrischen Trapez!',
      '🔑 Hinweis: Rechteck: $120 \\cdot 40 = 4800$. Trapezhöhe: $70 - 40 = 30$. Trapezfläche: $\\frac{120 + 80}{2} \\cdot 30 = 3000$. Gesamt: $4800 + 3000 = 7800$.',
      '✅ Lösung: Der Flächeninhalt beträgt $7800\\text{ cm}^2$.',
    ],
    commonMistake: 'Höhe des Trapezes nicht als Differenz $(70 - 40)$ berechnet, sondern die Gesamthöhe 70 verwendet.',
  },
  {
    id: 'w7_fi_502',
    levelId: '7-5',
    type: 'fill-in',
    difficulty: 3,
    prompt: 'Aufgabe aus dem Buch (S. 188 Nr. 4c): Eine symmetrische Haus-Giebelfigur hat eine Basis von $10\\text{ m}$, eine Wandhöhe von $4\\text{ m}$ und eine Firsthöhe von $4 + 4 = 8\\text{ m}$. Die Dachschrägen enden an einer oberen Firstbreite von $4\\text{ m}$. Berechne die Gesamtfläche in $\\text{m}^2$:',
    promptLatex: 'A_{\\text{Wand}} = 10 \\cdot 4, \\quad A_{\\text{Dach}} = \\frac{10 + 4}{2} \\cdot 4',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 165" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Lower Rectangle (Wall: 10m base, 4m height) -->
        <rect x="70" y="85" width="200" height="50" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="2"/>
        <text x="170" y="115" fill="#3b82f6" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Wand: 10 m × 4 m</text>

        <!-- Upper Trapezoid (Roof: c = 4m top, a = 10m bottom, h = 4m) -->
        <polygon points="70,85 270,85 210,35 130,35" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="2"/>
        <text x="170" y="65" fill="#f59e0b" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Dach (Trapez): h = 4 m</text>
        <text x="170" y="27" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Firstbreite c = 4 m</text>

        <!-- Height indicators -->
        <text x="55" y="115" fill="#3b82f6" font-size="11" font-family="Outfit, sans-serif" text-anchor="end">4 m</text>
        <text x="55" y="60" fill="#f59e0b" font-size="11" font-family="Outfit, sans-serif" text-anchor="end">4 m</text>
        <text x="170" y="152" fill="var(--color-text, #f8fafc)" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Basis = 10 m</text>
      </svg>`,
    },
    interaction: {
      placeholder: 'z.B. 55',
    },
    correctAnswer: '68',
    acceptedAnswers: ['68', '68 m²', '68m²', '68 m^2'],
    hints: [
      '💡 Tipp: Unteres Rechteck: $10 \\cdot 4 = 40\\text{ m}^2$.',
      '🔑 Hinweis: Oberes Trapez: $\\frac{10 + 4}{2} \\cdot 4 = 7 \\cdot 4 = 28\\text{ m}^2$. Gesamt: $40 + 28 = 68$.',
      '✅ Lösung: Die Gesamtfläche beträgt $68\\text{ m}^2$.',
    ],
    commonMistake: 'Rechteck und Trapez nicht sauber getrennt.',
  },
];
