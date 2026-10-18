/**
 * World & Level Definitions for LottaMATH
 * Aligned with 'Mathematik Sekundarstufe I' (Kapitel 8a - Terme und Termumformungen)
 */

export const WORLDS = [
  {
    id: 1,
    topicId: 'terme',
    name: 'Terme Basics',
    emoji: '🌊',
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
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 400 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="w1-level-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#0891b2" stop-opacity="0.10"/>
                </linearGradient>
                <linearGradient id="w1-gem-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#10b981" stop-opacity="0.25"/>
                  <stop offset="100%" stop-color="#059669" stop-opacity="0.10"/>
                </linearGradient>
              </defs>
              <!-- Level Block (100L) -->
              <rect x="20" y="15" width="145" height="75" rx="10" fill="url(#w1-level-grad)" stroke="#06b6d4" stroke-width="2"/>
              <text x="35" y="42" fill="#38bdf8" font-size="20" font-weight="bold" font-family="Outfit, sans-serif">100L</text>
              <text x="35" y="62" fill="#94a3b8" font-size="12" font-family="Outfit, sans-serif">Level-XP</text>
              <text x="35" y="78" fill="#64748b" font-size="11" font-family="Outfit, sans-serif">(z. B. 100 · 3 = 300)</text>

              <!-- Plus Sign -->
              <circle cx="185" cy="52" r="14" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
              <text x="185" y="58" fill="#f8fafc" font-size="18" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">+</text>

              <!-- Emerald Gem Block (50s) -->
              <rect x="215" y="15" width="165" height="75" rx="10" fill="url(#w1-gem-grad)" stroke="#10b981" stroke-width="2"/>
              <text x="230" y="42" fill="#34d399" font-size="20" font-weight="bold" font-family="Outfit, sans-serif">50s</text>
              <text x="230" y="62" fill="#94a3b8" font-size="12" font-family="Outfit, sans-serif">Smaragd-Bonus</text>
              <text x="230" y="78" fill="#64748b" font-size="11" font-family="Outfit, sans-serif">(z. B. 50 · 2 = 100)</text>

              <!-- Bottom Warning Badge -->
              <rect x="30" y="102" width="340" height="26" rx="6" fill="rgba(244, 63, 94, 0.12)" stroke="#f43f5e" stroke-width="1" stroke-dasharray="3 3"/>
              <text x="200" y="119" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">⚠️ 100L + 50s ≠ 150Ls! (Ungleiche Einheiten getrennt halten!)</text>
            </svg>`,
          },
        },
        {
          icon: '📱',
          title: 'Dein Handy-Abo & Extra-Daten',
          scenario: 'Wie berechnet dein Mobilfunkanbieter deine Monatsrechnung?',
          mathBreakdown: [
            {
              step: 'Fixe Grundgebühr',
              detail: 'Jeden Monat zahlst du 15 CHF fix, egal wie viel du surfst.',
              math: '15',
            },
            {
              step: 'Zusatz-Datenvolumen',
              detail: 'Jedes zusätzliche Gigabyte ($x$) kostet 2 CHF.',
              math: '2x',
            },
            {
              step: 'Monatlicher Term',
              detail: 'Deine Gesamtkosten für den Monat ergeben sich aus:',
              math: '15 + 2x',
            },
          ],
          sukiComment: 'Verbrauchst du 4 Extra-GB, setzt du $x=4$ ein: $15 + 2 \\cdot 4 = 23$ CHF. Genau dafür gibt es Terme!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 400 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <!-- Base Fee Card (Constant) -->
              <rect x="20" y="20" width="135" height="65" rx="8" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" stroke-width="2"/>
              <text x="87" y="46" fill="#818cf8" font-size="18" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">15 CHF</text>
              <text x="87" y="65" fill="#94a3b8" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Fixe Grundgebühr</text>
              <text x="87" y="78" fill="#64748b" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">(Konstante)</text>

              <!-- Plus Sign -->
              <text x="170" y="58" fill="#f8fafc" font-size="20" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">+</text>

              <!-- Variable Data Blocks (2x) -->
              <g transform="translate(190, 20)">
                <!-- 1 GB Block -->
                <rect x="0" y="0" width="55" height="65" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="27" y="32" fill="#fbbf24" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">+2 CHF</text>
                <text x="27" y="50" fill="#94a3b8" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">1. GB</text>

                <!-- 2 GB Block -->
                <rect x="62" y="0" width="55" height="65" rx="6" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="89" y="32" fill="#fbbf24" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">+2 CHF</text>
                <text x="89" y="50" fill="#94a3b8" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">2. GB</text>

                <!-- x GB Block (dashed) -->
                <rect x="124" y="0" width="65" height="65" rx="6" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="3 3"/>
                <text x="156" y="32" fill="#fbbf24" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">... 2x</text>
                <text x="156" y="50" fill="#94a3b8" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">x GB</text>
              </g>

              <!-- Overall Formula Bracket / Tag -->
              <rect x="30" y="98" width="340" height="26" rx="6" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
              <text x="200" y="115" fill="#e2e8f0" font-size="12" font-family="Outfit, sans-serif" text-anchor="middle">
                Gesamtrechnung: 15 + 2x CHF (Variable x bestimmt Zusatzkosten)
              </text>
            </svg>`,
          },
        },
        {
          icon: '🛍️',
          title: 'Sale & Rabatte im Kopf berechnen',
          scenario: 'Wie rechnest du im Kleiderladen blitzschnell den Rabatt-Preis aus?',
          mathBreakdown: [
            {
              step: 'Originalpreis',
              detail: 'Ein Hoodie kostet regulär $p$ CHF.',
              math: 'p',
            },
            {
              step: '20% Rabatt abziehen',
              detail: '20% von $p$ entspricht $0{,}20 \\cdot p$ Abzug.',
              math: '- 0{,}20p',
            },
            {
              step: 'Term zusammenfassen',
              detail: 'Gleichartige Terme verrechnen ($1p - 0{,}20p$):',
              math: '0{,}80p',
            },
          ],
          sukiComment: 'Statt mühsam den Rabatt abzuziehen, multiplizierst du den Preis einfach direkt mit $0{,}8$!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 400 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <!-- Top Bar: Original Price p (100%) -->
              <rect x="25" y="15" width="350" height="28" rx="6" fill="rgba(148, 163, 184, 0.15)" stroke="#64748b" stroke-width="1.5"/>
              <text x="200" y="34" fill="#cbd5e1" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Originalpreis: p (100%)</text>

              <!-- Bottom Bar Split: 80% kept + 20% discount -->
              <!-- 80% Kept Portion (0.80p) -->
              <rect x="25" y="55" width="270" height="38" rx="6" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2"/>
              <text x="160" y="78" fill="#34d399" font-size="14" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Neuer Preis: 0,80 · p (80%)</text>

              <!-- 20% Discount Portion (0.20p) -->
              <rect x="300" y="55" width="75" height="38" rx="6" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
              <text x="337" y="75" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">-20%</text>
              <text x="337" y="89" fill="#fda4af" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">-0,20p</text>

              <!-- Quick Math Takeaway -->
              <rect x="25" y="104" width="350" height="24" rx="6" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
              <text x="200" y="120" fill="#f8fafc" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">
                Rechentrick: 1p - 0,20p = 0,80p (Direkt mit 0,8 multiplizieren!)
              </text>
            </svg>`,
          },
        },
      ],
    },
    levels: [
      {
        id: '1-1',
        name: 'Was ist ein Term?',
        description: 'Bausteine von Termen erkennen: Variablen, Koeffizienten und Konstanten.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '1-2',
        name: 'Terme erkennen',
        description: 'Mathematische Ausdrücke und sprachliche Beschreibungen verbinden.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '1-3',
        name: 'Gleichartige Terme',
        description: 'Finde Terme mit denselben Variablen und Potenzen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['drag-group', 'multiple-choice'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '1-4',
        name: 'Terme zusammenfassen',
        description: 'Plus und Minus: Gleichartige Glieder zusammenrechnen.',
        isBoss: false,
        questionsPerSession: 7,
        allowedTypes: ['fill-in', 'multiple-choice'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '1-5',
        name: 'Boss: Terme-Meister',
        description: 'Zeige dein Können im ersten grossen Boss-Kampf!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'fill-in', 'drag-group'],
        timeLimit: 300,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 2,
    topicId: 'terme',
    name: 'Ausmultiplizieren',
    emoji: '🔥',
    colorPrimary: 'hsl(35, 95%, 55%)',
    colorSecondary: 'hsl(25, 90%, 45%)',
    description: 'Löse Klammern auf mit dem Distributivgesetz und meistere Minusklammern.',
    realWorldIntro: {
      headline: 'Klammern & Flächen im echten Leben',
      examples: [
        {
          icon: '🏗️',
          title: 'Architektur & Zimmer streichen',
          scenario: 'Du möchtest dein Zimmer streichen. Wie viel Farbe brauchst du für 3 Wände?',
          mathBreakdown: [
            {
              step: 'Raummasse',
              detail: 'Alle Wände sind gleich hoch ($h$), aber unterschiedlich breit ($b_1, b_2, b_3$).',
              math: 'b_1 + b_2 + b_3',
            },
            {
              step: 'Distributivgesetz anwenden',
              detail: 'Statt 3 einzelne Wände mühsam zu rechnen, nimmst du Höhe mal Gesamtbreite:',
              math: 'h \\cdot (b_1 + b_2 + b_3)',
            },
            {
              step: 'Ausmultiplizierte Wandfläche',
              detail: 'Jedes Wandstück wird abgedeckt:',
              math: 'h \\cdot b_1 + h \\cdot b_2 + h \\cdot b_3',
            },
          ],
          sukiComment: 'Das Distributivgesetz spart zwei Rechenschritte und verhindert Rechenfehler beim Farb-Einkauf im Baumarkt!',
          visual: {
            type: 'area-model',
            title: 'Wandflächen-Modell: $h \\cdot (b_1 + b_2 + b_3)$',
            cols: ['b_1', 'b_2', 'b_3'],
            rows: ['h'],
            cells: [
              [{ label: 'h \\cdot b_1', color: 'hsl(35, 95%, 55%)' }, { label: 'h \\cdot b_2', color: 'hsl(180, 75%, 48%)' }, { label: 'h \\cdot b_3', color: 'hsl(335, 80%, 60%)' }]
            ],
            summary: '$h(b_1 + b_2 + b_3) = hb_1 + hb_2 + hb_3$',
          },
        },
        {
          icon: '🧪',
          title: 'Party-Bowle für 8 Freundinnen',
          scenario: 'Wie rechnest du ein leckeres Getränkerezept fehlerfrei hoch?',
          mathBreakdown: [
            {
              step: 'Portion für 1 Person',
              detail: '1 Glas besteht aus 200 ml Saft ($s$) und 50 ml Sirup ($m$).',
              math: '200s + 50m',
            },
            {
              step: 'Für 8 Personen hochskalieren',
              detail: 'Die gesamte Klammer wird mit 8 multipliziert:',
              math: '8 \\cdot (200s + 50m)',
            },
            {
              step: 'Ausmultiplizieren',
              detail: 'Jeder Bestandteil wird mal 8 gerechnet:',
              math: '1600s + 400m',
            },
          ],
          sukiComment: 'Ausmultiplizieren stellt sicher, dass das Mischungsverhältnis perfekt bleibt und kein Gast zu wenig Sirup hat!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 400 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="bowle-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#f59e0b"/>
                </marker>
              </defs>
              <!-- 1 Glas (Klammer: 200s + 50m) -->
              <g transform="translate(20, 15)">
                <rect x="0" y="0" width="115" height="75" rx="8" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5"/>
                <text x="57" y="18" fill="#94a3b8" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">1 Glas (Portion)</text>
                
                <!-- Juice block -->
                <rect x="10" y="24" width="95" height="24" rx="4" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="57" y="40" fill="#fbbf24" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">200 ml Saft (s)</text>
                
                <!-- Syrup block -->
                <rect x="10" y="51" width="95" height="18" rx="4" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="1.5"/>
                <text x="57" y="64" fill="#fda4af" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">50 ml Sirup (m)</text>
              </g>

              <!-- Arrow with Multiplier 8 -->
              <path d="M 145 52 L 185 52" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#bowle-arrow)"/>
              <text x="165" y="42" fill="#f59e0b" font-size="15" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">· 8</text>

              <!-- 8 Gläser (Ausmultipliziert: 1600s + 400m) -->
              <g transform="translate(195, 15)">
                <rect x="0" y="0" width="185" height="75" rx="8" fill="rgba(255, 255, 255, 0.04)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="92" y="18" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Bowle für 8 Freundinnen</text>
                
                <!-- Scaled Juice -->
                <rect x="12" y="24" width="161" height="24" rx="4" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="92" y="40" fill="#fbbf24" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">8 · 200 = 1600 ml Saft (s)</text>
                
                <!-- Scaled Syrup -->
                <rect x="12" y="51" width="161" height="18" rx="4" fill="rgba(244, 63, 94, 0.25)" stroke="#f43f5e" stroke-width="1.5"/>
                <text x="92" y="64" fill="#fda4af" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">8 · 50 = 400 ml Sirup (m)</text>
              </g>

              <!-- Formula Banner -->
              <rect x="20" y="100" width="360" height="26" rx="6" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1"/>
              <text x="200" y="117" fill="#f8fafc" font-size="12" font-family="Outfit, sans-serif" text-anchor="middle">
                Distributivgesetz: 8 · (200s + 50m) = 1600s + 400m
              </text>
            </svg>`,
          },
        },
        {
          icon: '💰',
          title: 'Zinsen & Sparen',
          scenario: 'Wie berechnen Banken dein Erspartes nach einem Jahr mit Zinsen?',
          mathBreakdown: [
            {
              step: 'Startkapital',
              detail: 'Du hast ein Guthaben von $K$ CHF auf deinem Sparkonto.',
              math: 'K',
            },
            {
              step: 'Mit Zinsfaktor wachsen',
              detail: 'Bei Zinssatz $p\\%$ wächst das Geld um den Faktor $(1 + p/100)$:',
              math: 'K \\cdot (1 + \\frac{p}{100})',
            },
            {
              step: 'Klammer auflösen',
              detail: 'Startkapital plus erwirtschaftete Zinsen:',
              math: 'K + K \\cdot \\frac{p}{100}',
            },
          ],
          sukiComment: 'Die Klammer zeigt auf einen Blick, wie dein Geld für dich arbeitet!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 400 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <!-- Top Dimension: (1 + 0.03) -->
              <line x1="60" y1="20" x2="310" y2="20" stroke="#818cf8" stroke-width="1.5"/>
              <text x="185" y="15" fill="#818cf8" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Wachstumsfaktor (1 + 0,03)</text>
              
              <!-- Left Dimension: Height K -->
              <text x="40" y="62" fill="#38bdf8" font-size="14" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">K</text>

              <!-- Main Area: Capital K (100%) -->
              <rect x="60" y="26" width="240" height="62" rx="6" fill="rgba(99, 102, 241, 0.2)" stroke="#6366f1" stroke-width="2"/>
              <text x="180" y="54" fill="#a5b4fc" font-size="15" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Startkapital: K · 1</text>
              <text x="180" y="72" fill="#94a3b8" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Dein erspartes Geld (100%)</text>

              <!-- Small Area: 3% Interest Slice -->
              <rect x="305" y="26" width="65" height="62" rx="6" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="2"/>
              <text x="337" y="53" fill="#34d399" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">+3%</text>
              <text x="337" y="70" fill="#6ee7b7" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">0,03 · K</text>

              <!-- Formula Banner -->
              <rect x="25" y="98" width="350" height="26" rx="6" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1"/>
              <text x="200" y="115" fill="#f8fafc" font-size="12" font-family="Outfit, sans-serif" text-anchor="middle">
                Klammer aufgelöst: K · (1 + 0,03) = K + 0,03K = 1,03K
              </text>
            </svg>`,
          },
        },
      ],
    },
    levels: [
      {
        id: '2-1',
        name: 'Das Distributivgesetz',
        description: 'Verstehe das Gesetz: Jeder Teil der Klammer wird multipliziert.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-order'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '2-2',
        name: 'Einfach ausmultiplizieren',
        description: 'Zahlen und Variablen vor der Klammer hineinmultiplizieren.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '2-3',
        name: 'Klammern mit Minus',
        description: 'Vorsicht Vorzeichen! Minus vor der Klammer dreht alle Vorzeichen um.',
        isBoss: false,
        questionsPerSession: 7,
        allowedTypes: ['fill-in', 'multiple-choice'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '2-4',
        name: 'Doppelte Klammern',
        description: '(a + b)(c + d): Jeden Term der 1. Klammer mit jedem der 2. multiplizieren.',
        isBoss: false,
        questionsPerSession: 7,
        allowedTypes: ['multiple-choice', 'step-builder', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '2-5',
        name: 'Boss: Klammer-König',
        description: 'Beherrsche alle Klammerarten unter Zeitdruck!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'fill-in', 'step-builder', 'drag-order'],
        timeLimit: 300,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 3,
    topicId: 'terme',
    name: 'Ausklammern',
    emoji: '🌿',
    colorPrimary: 'hsl(150, 65%, 48%)',
    colorSecondary: 'hsl(140, 60%, 35%)',
    description: 'Finde gemeinsame Faktoren und verwandle Summen in Produkte (Faktorisieren).',
    realWorldIntro: {
      headline: 'Warum klammern wir aus? (Faktorisieren)',
      examples: [
        {
          icon: '⚡',
          title: 'Computerchips & App-Speed (TikTok / Spotify)',
          scenario: 'Warum klammern Programmierer Terme aus, damit Handys nicht ruckeln?',
          mathBreakdown: [
            {
              step: 'Unoptimierter Algorithmus',
              detail: 'Für jeden Bildschirmpixel rechnet der Chip: $150x + 150y$. (2 Multiplikationen + 1 Addition).',
              math: '150 \\cdot x + 150 \\cdot y',
            },
            {
              step: 'Gemeinsamen Faktor $150$ ausklammern',
              detail: 'Der gemeinsame Faktor wird vor die Klammer gezogen:',
              math: '150 \\cdot (x + y)',
            },
            {
              step: 'Rechenaufwand halbiert',
              detail: 'Jetzt braucht der Chip nur noch 1 Addition + 1 Multiplikation:',
              math: '150(x + y)',
            },
          ],
          sukiComment: 'Millionen Ausklammerungen pro Sekunde sorgen dafür, dass Games flüssig mit 60 FPS laufen und dein Akku geschont wird!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 400 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <!-- Top Row: Unoptimized (150x + 150y) -->
              <g transform="translate(15, 15)">
                <rect x="0" y="0" width="165" height="44" rx="6" fill="rgba(244, 63, 94, 0.12)" stroke="#f43f5e" stroke-width="1.5"/>
                <text x="82" y="19" fill="#fda4af" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">150·x + 150·y</text>
                <text x="82" y="34" fill="#94a3b8" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">2 Multiplikationen + 1 Plus</text>
              </g>

              <!-- Central Arrow: Ausklammern -->
              <g transform="translate(190, 18)">
                <text x="10" y="24" fill="#10b981" font-size="20" font-weight="bold" font-family="Outfit, sans-serif">→</text>
                <text x="10" y="10" fill="#10b981" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">Faktor 150</text>
                <text x="10" y="38" fill="#10b981" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">rausziehen</text>
              </g>

              <!-- Top/Right Row: Optimized 150(x + y) -->
              <g transform="translate(225, 15)">
                <rect x="0" y="0" width="160" height="44" rx="6" fill="rgba(16, 185, 129, 0.18)" stroke="#10b981" stroke-width="2"/>
                <text x="80" y="19" fill="#34d399" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">150 · (x + y)</text>
                <text x="80" y="34" fill="#a7f3d0" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Nur noch 1 Multiplikation!</text>
              </g>

              <!-- Speed & Efficiency Badge -->
              <rect x="25" y="70" width="350" height="54" rx="8" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
              <text x="200" y="91" fill="#f8fafc" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">
                ⚡ Rechenaufwand halbiert (50% schneller!)
              </text>
              <text x="200" y="110" fill="#94a3b8" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">
                Handy-Prozessor rechnet flüssig mit 60 FPS &amp; spart wertvollen Akku.
              </text>
            </svg>`,
          },
        },
        {
          icon: '📦',
          title: 'Sammelbestellungen & Versandkosten',
          scenario: 'Ihr bestellt zu viert im Online-Shop und teilt euch die Lieferkosten.',
          mathBreakdown: [
            {
              step: 'Einzelne Beträge',
              detail: 'Jeder zahlt seinen Artikelpreis ($a_1, a_2, a_3, a_4$).',
              math: 'a_1 + a_2 + a_3 + a_4',
            },
            {
              step: 'Fixe Liefergebühr',
              detail: 'Statt 4x Porto zu zahlen, wird die Gesamtbestellung in einem Paket gebündelt.',
              math: '(a_1 + a_2 + a_3 + a_4) + 1p',
            },
          ],
          sukiComment: 'Gemeinsame Faktoren zusammenfassen spart bares Taschengeld!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 400 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <!-- Left Side: 4 Einzelbestellungen -->
              <g transform="translate(15, 12)">
                <rect x="0" y="0" width="165" height="78" rx="8" fill="rgba(244, 63, 94, 0.1)" stroke="#f43f5e" stroke-width="1.5" stroke-dasharray="3 3"/>
                <text x="82" y="18" fill="#fda4af" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">4 Einzelpakete</text>
                
                <!-- 4 small boxes -->
                <g transform="translate(14, 25)">
                  <rect x="0" y="0" width="28" height="24" rx="4" fill="rgba(255,255,255,0.08)" stroke="#f43f5e" stroke-width="1"/>
                  <text x="14" y="16" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">+p</text>
                  <rect x="36" y="0" width="28" height="24" rx="4" fill="rgba(255,255,255,0.08)" stroke="#f43f5e" stroke-width="1"/>
                  <text x="50" y="16" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">+p</text>
                  <rect x="72" y="0" width="28" height="24" rx="4" fill="rgba(255,255,255,0.08)" stroke="#f43f5e" stroke-width="1"/>
                  <text x="86" y="16" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">+p</text>
                  <rect x="108" y="0" width="28" height="24" rx="4" fill="rgba(255,255,255,0.08)" stroke="#f43f5e" stroke-width="1"/>
                  <text x="122" y="16" fill="#f43f5e" font-size="10" font-weight="bold" text-anchor="middle">+p</text>
                </g>
                <text x="82" y="68" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">4x Porto zahlen! (4 · p)</text>
              </g>

              <!-- Arrow: Bündeln -->
              <text x="195" y="54" fill="#10b981" font-size="20" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">→</text>

              <!-- Right Side: 1 Sammelbestellung -->
              <g transform="translate(220, 12)">
                <rect x="0" y="0" width="165" height="78" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="2"/>
                <text x="82" y="18" fill="#34d399" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">1 Sammelpaket</text>
                
                <rect x="25" y="26" width="115" height="26" rx="5" fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="1.5"/>
                <text x="82" y="43" fill="#ecfdf5" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Alle 4 Artikel im Paket</text>
                <text x="82" y="68" fill="#34d399" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Nur 1x Porto! (1 · p)</text>
              </g>

              <!-- Bottom Formula / Advice -->
              <rect x="20" y="100" width="360" height="26" rx="6" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1"/>
              <text x="200" y="117" fill="#f8fafc" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">
                Gemeinsame Faktoren &amp; Pakete bündeln spart bares Taschengeld!
              </text>
            </svg>`,
          },
        },
      ],
    },
    levels: [
      {
        id: '3-1',
        name: 'Gemeinsame Faktoren',
        description: 'Erkenne, welcher Teiler oder Buchstabe in allen Gliedern steckt.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['drag-group', 'multiple-choice'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '3-2',
        name: 'Zahlen ausklammern',
        description: 'Den grössten gemeinsamen Teiler (ggT) vor die Klammer ziehen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['fill-in', 'multiple-choice'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '3-3',
        name: 'Variablen ausklammern',
        description: 'Gemeinsame Variablen wie x oder a vor die Klammer setzen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '3-4',
        name: 'Gemischt ausklammern',
        description: 'Zahlen und Variablen gleichzeitig ausklammern: Vollständig faktorisieren.',
        isBoss: false,
        questionsPerSession: 7,
        allowedTypes: ['fill-in', 'step-builder'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '3-5',
        name: 'Boss: Faktor-Fuchs',
        description: 'Beweise, dass kein gemeinsamer Faktor vor dir sicher ist!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'fill-in', 'drag-group', 'step-builder'],
        timeLimit: 300,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 4,
    topicId: 'terme',
    name: 'Binomische Formeln',
    emoji: '🌸',
    colorPrimary: 'hsl(335, 80%, 60%)',
    colorSecondary: 'hsl(325, 75%, 45%)',
    description: 'Die drei Zauberformeln der Algebra verstehen, anwenden und rückwärts nutzen.',
    realWorldIntro: {
      headline: 'Die 3 Zauberformeln im Alltag',
      examples: [
        {
          icon: '🌻',
          title: 'Gartenbeet quadratisch vergrössern (1. Binom)',
          scenario: 'Ein quadratisches Beet mit Seitenlänge $a$ wird an beiden Seiten um $b$ verlängert.',
          mathBreakdown: [
            {
              step: 'Neue Seitenlänge',
              detail: 'Jede Seite des neuen Quadrats ist $(a + b)$ lang.',
              math: 'a + b',
            },
            {
              step: 'Gesamtfläche als Quadrat',
              detail: 'Die Fläche des neuen Beetes:',
              math: '(a + b)^2',
            },
            {
              step: 'Aufteilung in 4 Teilflächen',
              detail: 'Altes Beet ($a^2$), 2 Randstreifen ($2ab$) und die Ecke ($b^2$):',
              math: 'a^2 + 2ab + b^2',
            },
          ],
          sukiComment: 'Vergiss niemals das $2ab$ in der Mitte — das sind die beiden Rechtecke an den Rändern!',
          visual: {
            type: 'animated-svg',
            animationId: 'binom-expansion',
            title: '1. Binomische Formel: $(a + b)^2$',
            summary: '$(a + b)^2 = a^2 + 2ab + b^2$',
          },
        },
        {
          icon: '✂️',
          title: 'Zuschnitt & Restfläche (2. Binom)',
          scenario: 'Ein quadratisches Holzbrett der Seitenlänge $a$ wird an beiden Seiten um $b$ gekürzt. Wie gross ist das neue Quadrat?',
          mathBreakdown: [
            {
              step: 'Neue Seitenlänge',
              detail: 'Die Seiten des verkleinerten Quadrats betragen jeweils $(a - b)$.',
              math: 'a - b',
            },
            {
              step: 'Gesamtfläche als Quadrat',
              detail: 'Die Fläche des neuen Quadrats:',
              math: '(a - b)^2',
            },
            {
              step: 'Die beiden Streifen abziehen',
              detail: 'Vom grossen Quadrat ($a^2$) ziehen wir zwei Randstreifen ab ($2 \\cdot ab$):',
              math: 'a^2 - 2ab',
            },
            {
              step: 'Überlappung der Ecke ausgleichen',
              detail: 'Weil die Ecke $b^2$ doppelt abgezogen wurde, muss sie einmal addiert werden:',
              math: 'a^2 - 2ab + b^2',
            },
          ],
          sukiComment: 'Genau darum heisst es am Ende $+b^2$: Wir müssen die doppelt abgezogene Ecke wieder hineinlegen!',
          visual: {
            type: 'animated-svg',
            animationId: 'binom-subtraction',
            title: '2. Binomische Formel: $(a - b)^2$',
            summary: '$(a - b)^2 = a^2 - 2ab + b^2$',
          },
        },
        {
          icon: '🧮',
          title: 'Blitz-Kopfrechnen in 2 Sekunden ($49 \\cdot 51$)',
          scenario: 'Wie rechnest du $49 \\cdot 51$ im Kopf schneller als jeder Taschenrechner?',
          mathBreakdown: [
            {
              step: 'Als 3. Binom erkennen',
              detail: 'Mittelwert 50 nutzen: $49 = (50 - 1)$ und $51 = (50 + 1)$.',
              math: '(50 - 1)(50 + 1)',
            },
            {
              step: '3. Binomische Formel anwenden',
              detail: '$(a - b)(a + b) = a^2 - b^2$:',
              math: '50^2 - 1^2',
            },
            {
              step: 'Im Kopf auflösen',
              detail: '$2500 - 1 = 2499$. Fertig!',
              math: '2499',
            },
          ],
          sukiComment: 'Mit diesem Trick verblüffst du deine Lehrerin und deine Mitschüler!',
          visual: {
            type: 'animated-svg',
            animationId: 'binom-diff-squares',
            title: '3. Binomische Formel: $a^2 - b^2$',
            summary: '$(a - b)(a + b) = a^2 - b^2$',
          },
        },
      ],
    },
    levels: [
      {
        id: '4-1',
        name: '1. Binomische Formel',
        description: '(a + b)² = a² + 2ab + b² — Die Plus-Formel.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['fill-in', 'multiple-choice'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '4-2',
        name: '2. Binomische Formel',
        description: '(a − b)² = a² − 2ab + b² — Achtung beim mittleren Minuszeichen!',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['fill-in', 'multiple-choice'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '4-3',
        name: '3. Binomische Formel',
        description: '(a + b)(a − b) = a² − b² — Die Plus-Minus-Formel ohne Mittelglied.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['fill-in', 'multiple-choice'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '4-4',
        name: 'Formeln rückwärts',
        description: 'Vom Dreiglied zurück zum Quadrat (Faktorisieren mit Binomen).',
        isBoss: false,
        questionsPerSession: 7,
        allowedTypes: ['multiple-choice', 'fill-in', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '4-5',
        name: 'Boss: Binom-Bändiger',
        description: 'Das ultimative Finale: Meistere alle Binome!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'fill-in', 'drag-group'],
        timeLimit: 300,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 5,
    topicId: 'flaechen',
    name: 'Formeln & Berechnen',
    emoji: '📐',
    colorPrimary: 'hsl(160, 75%, 42%)',
    colorSecondary: 'hsl(170, 80%, 32%)',
    description: 'Verstehe die Flächenformeln für Parallelogramm, Dreieck, Trapez, Drachen & Rhombus.',
    realWorldIntro: {
      headline: 'Wozu brauchen wir Flächenformeln im Alltag?',
      examples: [
        {
          icon: '🏞️',
          title: 'Baugrundstücke & Landkarten',
          scenario: 'Wie berechnen Landvermesser den Flächeninhalt von schrägen Parzellen?',
          mathBreakdown: [
            {
              step: 'Grundseite',
              detail: 'Die Strassenfront des Grundstücks ist die Grundseite ($g = 40\\text{ m}$).',
              math: 'g = 40\\text{ m}',
            },
            {
              step: 'Senkrechte Höhe',
              detail: 'Der senkrechte Abstand zur hinteren Grenze ist die Höhe ($h = 25\\text{ m}$).',
              math: 'h = 25\\text{ m}',
            },
            {
              step: 'Flächeninhalt',
              detail: 'Fläche durch Scherung wie ein Rechteck berechnen:',
              math: 'A = g \\cdot h = 40 \\cdot 25 = 1000\\text{ m}^2',
            },
          ],
          sukiComment: 'Wichtig: Bei schrägen Figuren immer die senkrechte Höhe $h$ messen, nie die schräge Seitenkante!',
          visual: {
            type: 'animated-svg',
            animationId: 'parallelogram-shear',
            title: 'Parallelogramm-Scherung: $A = g \\cdot h$',
            summary: '$A = g \\cdot h$ (Gleiche Fläche wie das Rechteck)',
          },
        },
        {
          icon: '🪟',
          title: 'Glaser & Dreiecksfenster',
          scenario: 'Ein Glaser schneidet eine dreieckige Fensterscheibe aus einer rechteckigen Platte zu.',
          mathBreakdown: [
            {
              step: 'Rechteckige Scheibe',
              detail: 'Breite $2{,}50\\text{ m}$ und Höhe $3{,}00\\text{ m}$ ($7{,}5\\text{ m}^2$).',
              math: '2{,}50 \\cdot 3{,}00 = 7{,}50\\text{ m}^2',
            },
            {
              step: 'Diagonalschnitt',
              detail: 'Ein Dreieck ist genau die Hälfte des umschriebenen Rechtecks:',
              math: 'A = \\frac{g \\cdot h}{2} = \\frac{7{,}50}{2} = 3{,}75\\text{ m}^2',
            },
          ],
          sukiComment: 'Jedes Dreieck ist genau halb so gross wie das umschriebene Rechteck mit gleicher Grundseite und Höhe!',
          visual: {
            type: 'animated-svg',
            animationId: 'triangle-split',
            title: 'Dreiecksfläche: $A = \\frac{g \\cdot h}{2}$',
            summary: '$A = \\frac{g \\cdot h}{2} = \\frac{2{,}50 \\cdot 3{,}00}{2} = 3{,}75\\text{ m}^2$',
          },
        },
      ],
    },
    levels: [
      {
        id: '5-1',
        name: 'Das Parallelogramm',
        description: 'A = g · h: Warum jede Scherung die gleiche Fläche behält.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in', 'drag-order'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '5-2',
        name: 'Das Dreieck & 3 Höhen',
        description: 'A = (g · h) / 2: Jede der 3 Seiten mit ihrer zugehörigen Höhe nutzen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '5-3',
        name: 'Das Trapez',
        description: 'A = ((a + c) / 2) · h: Die Mittellinie mit der Höhe multiplizieren.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '5-4',
        name: 'Drachen & Rhombus',
        description: 'A = (e · f) / 2: Flächeninhalt über die Diagonalen berechnen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '5-5',
        name: 'Boss: Formel-Meister',
        description: 'Beweise dein Können bei allen 5 ebenen Grundfiguren!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'fill-in', 'drag-group', 'drag-order'],
        timeLimit: 300,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 6,
    topicId: 'flaechen',
    name: 'Umformen & Koordinaten',
    emoji: '📍',
    colorPrimary: 'hsl(210, 85%, 52%)',
    colorSecondary: 'hsl(220, 80%, 40%)',
    description: 'Stelle Formeln nach gesuchten Grössen um und berechne Figuren im Koordinatensystem.',
    realWorldIntro: {
      headline: 'Mathematische Detektivarbeit',
      examples: [
        {
          icon: '🔍',
          title: 'Höhe rückwärts berechnen',
          scenario: 'Ein Bauherr weiss: Die dreieckige Dachfläche hat $78\\text{ m}^2$ und die Basis misst $12\\text{ m}$. Wie hoch ist das Dach?',
          mathBreakdown: [
            {
              step: 'Formel aufstellen',
              detail: 'Flächenformel für das Dreieck:',
              math: 'A = \\frac{g \\cdot h}{2} \\implies 78 = \\frac{12 \\cdot h}{2}',
            },
            {
              step: 'Nach h auflösen',
              detail: 'Mit 2 multiplizieren und durch die Grundseite 12 teilen:',
              math: 'h = \\frac{2 \\cdot 78}{12} = 13\\text{ m}',
            },
          ],
          sukiComment: 'Verdopple zuerst immer die Fläche ($2A$), bevor du durch die gegebene Seite teilst!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 400 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <!-- Left: Triangle Geometry -->
              <g transform="translate(10, 5)">
                <!-- Triangle body -->
                <polygon points="20,105 180,105 100,20" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2"/>
                
                <!-- Area label in center -->
                <text x="100" y="75" fill="#bae6fd" font-size="13" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">A = 78 m²</text>
                
                <!-- Height line h -->
                <line x1="100" y1="20" x2="100" y2="105" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4 3"/>
                <!-- Right angle marker -->
                <rect x="100" y="97" width="8" height="8" fill="none" stroke="#f43f5e" stroke-width="1.2"/>
                <circle cx="104" cy="101" r="1" fill="#f43f5e"/>
                
                <!-- Label h = ? -->
                <rect x="106" y="42" width="46" height="20" rx="4" fill="rgba(244, 63, 94, 0.25)" stroke="#f43f5e" stroke-width="1"/>
                <text x="129" y="56" fill="#f43f5e" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">h = ?</text>
                
                <!-- Base line dimension g = 12 m -->
                <line x1="20" y1="117" x2="180" y2="117" stroke="#38bdf8" stroke-width="1.5"/>
                <line x1="20" y1="113" x2="20" y2="121" stroke="#38bdf8" stroke-width="1.5"/>
                <line x1="180" y1="113" x2="180" y2="121" stroke="#38bdf8" stroke-width="1.5"/>
                <text x="100" y="132" fill="#38bdf8" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">g = 12 m</text>
              </g>

              <!-- Right: Step-by-Step Umkehr-Logik Card -->
              <g transform="translate(210, 10)">
                <rect x="0" y="0" width="175" height="125" rx="8" fill="rgba(255, 255, 255, 0.04)" stroke="rgba(255, 255, 255, 0.12)" stroke-width="1.5"/>
                <text x="87" y="20" fill="#f8fafc" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Detektiv-Formel</text>
                
                <!-- Step 1: Double Area -->
                <rect x="10" y="28" width="155" height="26" rx="4" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" stroke-width="1"/>
                <text x="87" y="45" fill="#fbbf24" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">1. Verdoppeln: 2 · 78 = 156</text>
                
                <!-- Step 2: Divide by Base -->
                <rect x="10" y="58" width="155" height="26" rx="4" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981" stroke-width="1"/>
                <text x="87" y="75" fill="#34d399" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">2. Teilen: 156 : 12 = 13 m</text>
                
                <!-- Result Box -->
                <rect x="10" y="88" width="155" height="26" rx="4" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="1.5"/>
                <text x="87" y="105" fill="#fda4af" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Höhe h = 13 m ✅</text>
              </g>
            </svg>`,
          },
        },
      ],
    },
    levels: [
      {
        id: '6-1',
        name: 'Umkehrformeln: Dreieck & Parallelogramm',
        description: 'Berechne g oder h aus der gegebenen Fläche.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '6-2',
        name: 'Umkehrformeln: Trapez & Drachen',
        description: 'Löse nach c, h oder den Diagonalen e, f auf.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '6-3',
        name: 'Figuren im Koordinatensystem',
        description: 'Eckpunkte eintragen, Längen ablesen und Fläche bestimmen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '6-4',
        name: 'Einheiten umrechnen',
        description: 'cm, dm, m und mm² sicher angleichen und fehlerfrei rechnen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '6-5',
        name: 'Boss: Algebra- & Gitter-Profi',
        description: 'Beweise dein Können bei Umkehraufgaben und Koordinaten!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'fill-in', 'drag-group'],
        timeLimit: 300,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 7,
    topicId: 'flaechen',
    name: 'Zusammengesetzte Flächen',
    emoji: '🧩',
    colorPrimary: 'hsl(280, 80%, 55%)',
    colorSecondary: 'hsl(290, 75%, 45%)',
    description: 'Zerlege komplexe Vielecke, berechne Restflächen und meistere Schmuckfiguren.',
    realWorldIntro: {
      headline: 'Geometrie wie ein Puzzle',
      examples: [
        {
          icon: '🏠',
          title: 'Wohnungs-Grundrisse',
          scenario: 'L-förmige Zimmer lassen sich nicht mit einer einzigen Formel berechnen – man teilt sie auf!',
          mathBreakdown: [
            {
              step: 'Zerlegen',
              detail: 'Das L-Zimmer wird in zwei einfache Rechtecke $R_1$ und $R_2$ zerlegt.',
              math: 'A_1 = 3{,}6 \\cdot 3{,}6 = 12{,}96\\text{ m}^2, \\quad A_2 = 2{,}4 \\cdot 6{,}0 = 14{,}40\\text{ m}^2',
            },
            {
              step: 'Addieren',
              detail: 'Gesamtfläche durch Summe der Teilflächen:',
              math: 'A_{\\text{ges}} = A_1 + A_2 = 27{,}36\\text{ m}^2',
            },
          ],
          sukiComment: 'Du kannst L-Formen senkrecht oder waagerecht zerlegen – das Ergebnis ist immer exakt dasselbe!',
          visual: {
            type: 'animated-svg',
            animationId: 'l-shape-split',
            title: 'L-Zimmer zerlegen: $A_{\\text{ges}} = A_1 + A_2$',
            summary: '$A_1 = 3{,}6 \\cdot 3{,}6 = 12{,}96\\text{ m}^2, \\quad A_2 = 2{,}4 \\cdot 6{,}0 = 14{,}40\\text{ m}^2 \\implies A_{\\text{ges}} = 27{,}36\\text{ m}^2$',
          },
        },
      ],
    },
    levels: [
      {
        id: '7-1',
        name: 'Additive Zerlegung',
        description: 'L-Formen und Treppen in Rechtecke und Dreiecke aufteilen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in', 'step-builder'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '7-2',
        name: 'Subtraktive Ergänzung (Restfläche)',
        description: 'Aussenrahmen berechnen und Aussparungen abziehen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '7-3',
        name: 'Schmuckfiguren & Sterne',
        description: 'Ornamente aus Rhomben, Quadraten und Dreiecken berechnen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '7-4',
        name: 'Vielecke im Gitter',
        description: 'Unregelmässige Vielecke geschickt in Teilflächen zerlegen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '7-5',
        name: 'Boss: Puzzle-Architekt',
        description: 'Löse anspruchsvolle zusammengesetzte Flächen im Boss-Kampf!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'fill-in', 'step-builder'],
        timeLimit: 300,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 8,
    topicId: 'flaechen',
    name: 'Reale Sachaufgaben',
    emoji: '🏗️',
    colorPrimary: 'hsl(35, 95%, 50%)',
    colorSecondary: 'hsl(25, 90%, 40%)',
    description: 'Meistere reale Projekte: Grundstücke, Dächer decken, Wände streichen und Böden verlegen.',
    realWorldIntro: {
      headline: 'Mathematik auf der Baustelle & im Alltag',
      examples: [
        {
          icon: '🏡',
          title: 'Walmdach & Ziegelbedarf',
          scenario: 'Ein Walmdach besteht aus 2 Trapezen und 2 Dreiecken. Wie viele Ziegel müssen bestellt werden?',
          mathBreakdown: [
            {
              step: 'Trapezflächen',
              detail: '2 Trapeze mit $a=12\\text{ m}, c=4{,}8\\text{ m}, h=4{,}8\\text{ m}$:',
              math: '2 \\cdot \\left(\\frac{12 + 4{,}8}{2} \\cdot 4{,}8\\right) = 2 \\cdot 40{,}32 = 80{,}64\\text{ m}^2',
            },
            {
              step: 'Dreiecksflächen',
              detail: '2 Dreiecke mit $g=7{,}2\\text{ m}, h=4{,}8\\text{ m}$:',
              math: '2 \\cdot \\left(\\frac{7{,}2 \\cdot 4{,}8}{2}\\right) = 34{,}56\\text{ m}^2',
            },
            {
              step: 'Gesamtfläche & Ziegel',
              detail: 'Gesamt $115{,}2\\text{ m}^2$ bei $13\\text{ Ziegel/m}^2$ plus $20\\%\\text{ Verschnitt}$:',
              math: '115{,}2 \\cdot 13 \\cdot 1{,}20 = 1797{,}12 \\implies 1798\\text{ Ziegel}',
            },
          ],
          sukiComment: 'Bei Sachaufgaben immer genau auf Zuschläge (wie 20% Verschnitt) oder Abzüge (wie Fenster) achten!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 400 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="roof-arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <polygon points="0 0, 6 3, 0 6" fill="#f59e0b"/>
                </marker>
              </defs>
              <!-- Left: 3D Isometric Roof -->
              <g transform="translate(15, 12)">
                <text x="75" y="10" fill="#94a3b8" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">3D-Walmdach</text>
                
                <!-- Front Trapezoid -->
                <polygon points="10,80 140,80 105,35 45,35" fill="rgba(245, 158, 11, 0.25)" stroke="#f59e0b" stroke-width="1.5"/>
                <text x="75" y="62" fill="#fbbf24" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Trapez 1</text>
                
                <!-- Left Triangle -->
                <polygon points="10,80 45,35 25,25" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="1.5"/>
                
                <!-- Ridge Line (First) -->
                <line x1="45" y1="35" x2="105" y2="35" stroke="#fbbf24" stroke-width="2.5"/>
                <text x="75" y="30" fill="#f8fafc" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">Firstlinie</text>
                
                <!-- Base eaves line -->
                <line x1="10" y1="80" x2="140" y2="80" stroke="#f59e0b" stroke-width="2"/>
                <text x="75" y="94" fill="#94a3b8" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">Traufe (Basis)</text>
              </g>

              <!-- Center: Deconstruct Arrow -->
              <path d="M 165 58 L 195 58" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#roof-arrow)"/>
              <text x="180" y="48" fill="#f59e0b" font-size="9" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Netz</text>

              <!-- Right: 2D Unfolded Components -->
              <g transform="translate(205, 8)">
                <rect x="0" y="0" width="180" height="98" rx="6" fill="rgba(255, 255, 255, 0.03)" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
                <text x="90" y="16" fill="#34d399" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">2D-Teilflächen (Dachnetz)</text>
                
                <!-- 2 Trapezoids block -->
                <rect x="10" y="24" width="160" height="30" rx="4" fill="rgba(245, 158, 11, 0.18)" stroke="#f59e0b" stroke-width="1.2"/>
                <text x="90" y="43" fill="#fbbf24" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">2 × Trapez = 80,64 m²</text>
                
                <!-- 2 Triangles block -->
                <rect x="10" y="58" width="160" height="30" rx="4" fill="rgba(56, 189, 248, 0.18)" stroke="#38bdf8" stroke-width="1.2"/>
                <text x="90" y="77" fill="#38bdf8" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">2 × Dreieck = 34,56 m²</text>
              </g>

              <!-- Bottom Formula Summary -->
              <rect x="15" y="112" width="370" height="26" rx="6" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
              <text x="200" y="129" fill="#f8fafc" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">
                Gesamtdach: <tspan fill="#fbbf24">80,64 m²</tspan> + <tspan fill="#38bdf8">34,56 m²</tspan> = <tspan fill="#34d399" font-weight="bold">115,20 m²</tspan> (→ 1798 Ziegel)
              </text>
            </svg>`,
          },
        },
      ],
    },
    levels: [
      {
        id: '8-1',
        name: 'Grundstücke & Glaserarbeiten',
        description: 'Kaufpreise, Strassenverlauf und Dreiecksfenster berechnen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '8-2',
        name: 'Terrassen & Böschungen',
        description: 'Flächen und Pflastersteinkosten für Trapeze berechnen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in', 'step-builder'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '8-3',
        name: 'Dachdecker & Verschnitt',
        description: 'Walm- und Satteldächer berechnen mit 20% Ziegelzuschlag.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in', 'step-builder'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '8-4',
        name: 'Maler & Bodenleger',
        description: 'Fassadendämmung mit Fensterabzug, Farbverbrauch und Korkpackungen.',
        isBoss: false,
        questionsPerSession: 6,
        allowedTypes: ['multiple-choice', 'fill-in', 'step-builder'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '8-5',
        name: 'Boss: Der Generalunternehmer',
        description: 'Die ultimative Kompetenzprüfung: Löse alle Sachaufgaben!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'fill-in', 'step-builder'],
        timeLimit: 360,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 9,
    topicId: 'sinne_optik',
    name: 'Sehsinn & Optik',
    emoji: '👁️',
    colorPrimary: 'hsl(195, 85%, 48%)',
    colorSecondary: 'hsl(205, 80%, 38%)',
    description: 'Licht & Linsen, Bildentstehung im Auge, Akkommodation und Korrektur von Sehfehlern.',
    realWorldIntro: {
      headline: 'Wie das Auge die Welt einfängt',
      examples: [
        {
          icon: '📷',
          title: 'Auge und Kamera',
          scenario: 'Genau wie eine Kamera bündelt das menschliche Auge Lichtstrahlen auf eine lichtempfindliche Schicht (Netzhaut).',
          mathBreakdown: [
            {
              step: '1. Lichtbrechung',
              detail: 'Hornhaut und Augenlinse brechen das einfallende Licht.',
              math: '',
            },
            {
              step: '2. Bild auf Netzhaut',
              detail: 'Auf der Netzhaut entsteht ein umgekehrtes, verkleinertes Bild.',
              math: '',
            },
            {
              step: '3. Gehirn',
              detail: 'Das Gehirn verarbeitet die elektrischen Impulse und dreht das Bild aufrecht.',
              math: '',
            },
          ],
          sukiComment: 'Die Hornhaut übernimmt sogar den grössten Teil der Brechung – die Augenlinse stellt nur noch fein scharf!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 340 145" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <circle cx="240" cy="72" r="55" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-width="2.5"/>
              <path d="M 285 35 A 55 55 0 0 1 285 109" fill="none" stroke="#f59e0b" stroke-width="3.5"/>
              <text x="295" y="28" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif">Netzhaut</text>
              <ellipse cx="195" cy="72" rx="7" ry="32" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" stroke-width="2"/>
              <text x="195" y="30" fill="#38bdf8" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Linse</text>
              <line x1="20" y1="52" x2="195" y2="52" stroke="#10b981" stroke-width="2"/>
              <line x1="20" y1="92" x2="195" y2="92" stroke="#10b981" stroke-width="2"/>
              <line x1="195" y1="52" x2="295" y2="72" stroke="#10b981" stroke-width="2"/>
              <line x1="195" y1="92" x2="295" y2="72" stroke="#10b981" stroke-width="2"/>
              <circle cx="295" cy="72" r="4" fill="#f43f5e"/>
              <text x="240" y="140" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Licht bündelt sich exakt auf der Netzhaut</text>
            </svg>`,
          },
        },
        {
          icon: '👓',
          title: 'Warum Brillen scharfstellen',
          scenario: 'Wenn der Augapfel nicht die ideale Form hat, landet der Brennpunkt nicht auf der Netzhaut – die Sicht wird unscharf.',
          mathBreakdown: [
            {
              step: 'Kurzsichtig',
              detail: 'Augapfel zu lang → Brennpunkt VOR der Netzhaut → Konkavlinse (Zerstreuungslinse) schiebt ihn nach hinten.',
              math: '',
            },
            {
              step: 'Weitsichtig',
              detail: 'Augapfel zu kurz → Brennpunkt HINTER der Netzhaut → Konvexlinse (Sammellinse) bündelt vorab.',
              math: '',
            },
          ],
          sukiComment: 'Mit der passenden Brille landet der Brennpunkt wieder haargenau auf der Netzhaut!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 340 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="250" cy="70" rx="65" ry="45" fill="rgba(244, 63, 94, 0.1)" stroke="#f43f5e" stroke-width="2"/>
              <circle cx="270" cy="70" r="3.5" fill="#f43f5e"/>
              <text x="270" y="55" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">vor Netzhaut</text>
              <path d="M 36 40 Q 44 70 36 100 L 58 100 Q 50 70 58 40 Z" fill="rgba(56, 189, 248, 0.3)" stroke="#38bdf8" stroke-width="2"/>
              <text x="47" y="125" fill="#38bdf8" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Konkavlinse</text>
              <text x="180" y="132" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Korrektur bei Kurzsichtigkeit</text>
            </svg>`,
          },
        },
      ],
    },
    levels: [
      {
        id: '9-1',
        name: 'Licht & Linsenarten',
        description: 'Geradliniges Licht, Konvexlinse (Sammellinse) vs. Konkavlinse (Zerstreuungslinse).',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group', 'drag-order'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '9-2',
        name: 'Aufbau & Bildentstehung',
        description: 'Der Sehvorgang: Hornhaut, Pupille, Linse, Netzhaut und Bildeigenschaften.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group', 'drag-order'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '9-3',
        name: 'Akkommodation (Nah & Fern)',
        description: 'Scharfeinstellung: Ringmuskel, Linsenwölbung und Brechkraft bei Nah- und Fernsicht.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '9-4',
        name: 'Sehfehler & Brillenkorrektur',
        description: 'Kurzsichtigkeit, Weitsichtigkeit & Hornhautverkrümmung: Ursachen, Brennpunkt und Linsen.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '9-5',
        name: 'Boss: Optik-Meisterprüfung',
        description: 'Beweise dein Können über das gesamte Sehsinn- und Optik-Thema!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'drag-group', 'drag-order'],
        timeLimit: 240,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 10,
    topicId: 'sinne_optik',
    name: 'Gehörsinn & Nervensystem',
    emoji: '🎧',
    colorPrimary: 'hsl(280, 75%, 58%)',
    colorSecondary: 'hsl(290, 70%, 48%)',
    description: 'Schallausbreitung, Aufbau des Ohrs, räumliches Hören, Gehörschäden und Reiz-Reaktions-Schema.',
    realWorldIntro: {
      headline: 'Wie wir hören und blitzschnell reagieren',
      examples: [
        {
          icon: '🚲',
          title: 'Richtungshören im Verkehr',
          scenario: 'Ein Fahrrad klingelt hinter dir – sofort weisst du, aus welcher Richtung es kommt.',
          mathBreakdown: [
            {
              step: '1. Zeitunterschied',
              detail: 'Der Schall erreicht das nähere Ohr wenige Bruchteile einer Sekunde früher.',
              math: '',
            },
            {
              step: '2. Lautstärke',
              detail: 'Der Kopf dämpft den Schall zum abgewandten Ohr leicht ab.',
              math: '',
            },
            {
              step: '3. Gehirn',
              detail: 'Aus Zeit- und Lautstärkeunterschied berechnet das Gehirn die exakte Richtung.',
              math: '',
            },
          ],
          sukiComment: 'Darum brauchen wir zwei funktionierende Ohren, um Schall im Raum orten zu können!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 340 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <circle cx="170" cy="70" r="35" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" stroke-width="2"/>
              <ellipse cx="132" cy="70" rx="6" ry="12" fill="#a855f7"/>
              <ellipse cx="208" cy="70" rx="6" ry="12" fill="#a855f7"/>
              <circle cx="60" cy="40" r="10" fill="#f59e0b"/>
              <text x="60" y="44" fill="#000" font-size="11" font-weight="bold" text-anchor="middle">🔔</text>
              <path d="M 80 45 Q 110 55 130 65" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3"/>
              <text x="170" y="128" fill="var(--color-text-muted, #94a3b8)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Schall erreicht linkes Ohr zuerst</text>
            </svg>`,
          },
        },
        {
          icon: '⚡',
          title: 'Schutzreflex an der Herdplatte',
          scenario: 'Warum ziehst du die Hand von einer heissen Herdplatte zurück, noch BEVOR du den Schmerz spürst?',
          mathBreakdown: [
            {
              step: '1. Reflexbogen',
              detail: 'Das Alarmsignal wird direkt im Rückenmark auf den Muskel umgeschaltet (unter 50 Millisekunden).',
              math: '',
            },
            {
              step: '2. Schmerz',
              detail: 'Die Nachricht erreicht das Grosshirn erst kurz danach – der Schutzreflex hat bereits gewirkt.',
              math: '',
            },
          ],
          sukiComment: 'Ein Reflex schützt vor Verbrennungen, weil das Nachdenken im Gehirn zu lange dauern würde!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 340 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="arrow-amber" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 Z" fill="#f59e0b"/>
                </marker>
                <marker id="arrow-green" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M 0 0 L 6 3 L 0 6 Z" fill="#10b981"/>
                </marker>
              </defs>
              <rect x="30" y="45" width="90" height="40" rx="8" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="2"/>
              <text x="75" y="69" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Haut / Muskel</text>
              <rect x="220" y="45" width="90" height="40" rx="8" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2"/>
              <text x="265" y="69" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Rückenmark</text>
              <path d="M 120 55 L 212 55" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow-amber)"/>
              <text x="166" y="50" fill="#f59e0b" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">sensibel</text>
              <path d="M 220 75 L 128 75" stroke="#10b981" stroke-width="2" marker-end="url(#arrow-green)"/>
              <text x="166" y="88" fill="#10b981" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">motorisch</text>
              <text x="170" y="118" fill="var(--color-text, #f8fafc)" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">Kurzer Reflexbogen ohne Gehirn-Umweg</text>
            </svg>`,
          },
        },
      ],
    },
    levels: [
      {
        id: '10-1',
        name: 'Aufbau & Funktion des Ohrs',
        description: 'Schallausbreitung, Trommelfell, Gehörknöchelchen und Hörschnecke.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group', 'drag-order'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '10-2',
        name: 'Räumliches Hören & Schäden',
        description: 'Hören mit zwei Ohren, Trommelfellriss, Lärmschwerhörigkeit und Tinnitus.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '10-3',
        name: 'Wahrnehmung & Reizleitung',
        description: 'Ein Sinn allein reicht nicht aus: Reizaufnahme, Weiterleitung und Verarbeitung.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-order', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '10-4',
        name: 'Bewusste Reaktion vs. Reflex',
        description: 'Unterscheidung zwischen bewussten Handlungen (Gehirn) und Schutzreflexen (Rückenmark).',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '10-5',
        name: 'Boss: Sinne & Nerven Finale',
        description: 'Meistere alle Prüfungsfragen zu Gehör, Wahrnehmung und Reflexen!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'drag-group', 'drag-order'],
        timeLimit: 240,
        unlockRequirement: 1,
      },
    ],
  },
  {
    id: 11,
    topicId: 'revolution',
    name: 'Industrielle Revolution',
    emoji: '🚂',
    colorPrimary: 'hsl(25, 90%, 48%)',
    colorSecondary: 'hsl(15, 85%, 35%)',
    description: 'Vom Zündfunken in England über James Watts Dampfmaschine bis zur Sozialen Frage.',
    realWorldIntro: {
      headline: 'Wie die Dampfmaschine unsere Welt veränderte',
      examples: [
        {
          icon: '🧵',
          title: 'Handarbeit vs. Fabrik (Produktionssprung)',
          scenario: 'Vor 250 Jahren entstand jedes Kleidungsstück in wochenlanger Handarbeit zu Hause. Dampfgetriebene Webstühle stellten plötzlich in Stunden her, wofür Weber früher Monate brauchten.',
          mathBreakdown: [
            {
              step: '1. Handwebstuhl',
              detail: 'Ein geübter Handweber schaffte mühsam ca. 2 Meter Tuch pro Tag.',
              math: '',
            },
            {
              step: '2. Mechanischer Webstuhl',
              detail: 'Eine dampfbetriebene Spinnmaschine produzierte über 50 Meter pro Tag – das 25-Fache!',
              math: '',
            },
          ],
          sukiComment: 'Kleidung wurde für Millionen bezahlbar – doch Handwerker verloren über Nacht ihre Existenz!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 340 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <!-- Left: Handarbeit -->
              <rect x="20" y="25" width="135" height="85" rx="8" fill="rgba(255,255,255,0.05)" stroke="#f59e0b" stroke-width="1.5"/>
              <text x="87" y="45" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Vor der Revolution</text>
              <text x="87" y="68" fill="#f8fafc" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Mühsame Handarbeit</text>
              <text x="87" y="85" fill="#f8fafc" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Heimarbeit &amp; Manufaktur</text>
              <text x="87" y="102" fill="#94a3b8" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">2 Meter / Tag</text>

              <!-- Arrow -->
              <text x="170" y="72" fill="#10b981" font-size="22" font-weight="bold" text-anchor="middle">→</text>

              <!-- Right: Fabrik -->
              <rect x="185" y="25" width="135" height="85" rx="8" fill="rgba(16, 185, 129, 0.12)" stroke="#10b981" stroke-width="2"/>
              <text x="252" y="45" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Industrielle Fabrik</text>
              <text x="252" y="68" fill="#f8fafc" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Dampf &amp; Maschinen</text>
              <text x="252" y="85" fill="#f8fafc" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Massenfertigung</text>
              <text x="252" y="102" fill="#34d399" font-size="9" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">50+ Meter / Tag</text>
            </svg>`,
          },
        },
        {
          icon: '⚙️',
          title: 'James Watt & die Dampfkraft (21 Männer)',
          scenario: 'Frühe Mühlen funktionierten nur an Flüssen und froren im Winter ein. James Watt erfand die ortsunabhängige Dauerenergie.',
          mathBreakdown: [
            {
              step: '1. Gigantische Kraft',
              detail: 'Eine einzige frühe Dampfmaschine ersetzte die Muskelkraft von 21 erwachsenen Männern.',
              math: '',
            },
            {
              step: '2. Mobilitätswunder',
              detail: 'Dampflokomotiven und Dampfschiffe brachten Kohle, Eisen und Menschen in Rekordzeit ans Ziel.',
              math: '',
            },
          ],
          sukiComment: 'Die Dampfmaschine befreite die Fabriken von Flussufern und Wetter – und trieb den weltweiten Handel an!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 340 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <rect x="25" y="25" width="290" height="85" rx="8" fill="rgba(249, 115, 22, 0.1)" stroke="#f97316" stroke-width="1.5"/>
              <text x="170" y="48" fill="#f97316" font-size="12" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Watts Dampfmaschine: Konstante Energie</text>
              <circle cx="70" cy="78" r="18" fill="rgba(249, 115, 22, 0.2)" stroke="#f97316" stroke-width="2"/>
              <text x="70" y="82" fill="#fff" font-size="11" font-weight="bold" text-anchor="middle">⚙️</text>
              <text x="170" y="75" fill="#f8fafc" font-size="11" font-family="Outfit, sans-serif" text-anchor="middle">1 Maschine = Arbeitskraft von 21 Männern</text>
              <text x="170" y="94" fill="#94a3b8" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Wetterunabhängig · Tag &amp; Nacht · Freie Standortwahl</text>
            </svg>`,
          },
        },
        {
          icon: '⚖️',
          title: 'Die Soziale Frage (Fortschritt vs. Not)',
          scenario: 'Wieso drohte der arbeitenden Bevölkerung trotz dieses gewaltigen Reichtums Verelendung, Kinderarbeit und Hunger?',
          mathBreakdown: [
            {
              step: '1. Widerspruch',
              detail: 'Fabrikbesitzer wurden steinreich, Arbeiter hausten zu mehreren Familien in feuchten 1-Zimmer-Wohnungen.',
              math: '',
            },
            {
              step: '2. Die 6 Lösungsansätze',
              detail: 'Arbeiter (Gewerkschaften), Parteien (SPD), Unternehmer, Kirchen, Staat (Gesetze) und Revolutionäre rangen um die Lösung.',
              math: '',
            },
          ],
          sukiComment: 'Ohne Gewerkschaften und staatliche Gesetze gäbe es heute kein Verbot von Kinderarbeit und keine Krankenversicherung!',
          visual: {
            type: 'custom-svg',
            svg: `<svg viewBox="0 0 340 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="20" width="140" height="95" rx="8" fill="rgba(244, 63, 94, 0.12)" stroke="#f43f5e" stroke-width="1.5"/>
              <text x="90" y="38" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Das Dilemma</text>
              <text x="90" y="58" fill="#f8fafc" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">12h-Arbeitstag</text>
              <text x="90" y="74" fill="#f8fafc" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Kinderarbeit</text>
              <text x="90" y="90" fill="#f8fafc" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Wohnungsnot</text>
              <text x="90" y="106" fill="#f8fafc" font-size="10" font-family="Outfit, sans-serif" text-anchor="middle">Null Absicherung</text>

              <rect x="180" y="20" width="140" height="95" rx="8" fill="rgba(56, 189, 248, 0.12)" stroke="#38bdf8" stroke-width="1.5"/>
              <text x="250" y="38" fill="#38bdf8" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Die 6 Antworten</text>
              <text x="250" y="58" fill="#f8fafc" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">1. Arbeiter (Gewerkschaft)</text>
              <text x="250" y="72" fill="#f8fafc" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">2. Unternehmer (Fürsorge)</text>
              <text x="250" y="86" fill="#f8fafc" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">3. Parteien (SAP/SPD)</text>
              <text x="250" y="100" fill="#f8fafc" font-size="9" font-family="Outfit, sans-serif" text-anchor="middle">4. Kirche · 5. Rev. · 6. Staat</text>
            </svg>`,
          },
        },
      ],
    },
    levels: [
      {
        id: '11-1',
        name: 'Start & Zündfunken in England',
        description: 'Voraussetzungen, Schweiz vs. England, Bevölkerungsexplosion und Zündfunken von unten.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group', 'drag-order'],
        timeLimit: 0,
        unlockRequirement: 0,
      },
      {
        id: '11-2',
        name: 'Dampfmaschine & technischer Wandel',
        description: 'James Watt, 21 Männer Arbeitskraft, konstante Energie, Eisenbahn und Dampfschiff.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group', 'drag-order'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '11-3',
        name: 'Fabrikalltag & Schattenseiten',
        description: 'Landflucht, Wohnungsnot, 12h-Arbeitstag, Fabrikrisiken, Kinderarbeit und Umweltprobleme.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '11-4',
        name: 'Die Soziale Frage & 6 Akteure',
        description: 'Widerspruch der Verelendung: Arbeiter, Unternehmer, Parteien, Kirchen, Revolutionäre und Staat.',
        isBoss: false,
        questionsPerSession: 5,
        allowedTypes: ['multiple-choice', 'drag-group'],
        timeLimit: 0,
        unlockRequirement: 1,
      },
      {
        id: '11-5',
        name: 'Boss: Meister der Industrialisierung',
        description: 'Meistere alle Prüfungsfragen und Kausalketten zur Industriellen Revolution!',
        isBoss: true,
        questionsPerSession: 8,
        allowedTypes: ['multiple-choice', 'drag-group', 'drag-order'],
        timeLimit: 240,
        unlockRequirement: 1,
      },
    ],
  },
];

export function getWorld(worldId) {
  return WORLDS.find((w) => w.id === Number(worldId)) || null;
}

export function getLevel(worldId, levelNum) {
  const world = getWorld(worldId);
  if (!world) return null;
  const levelId = `${worldId}-${levelNum}`;
  return world.levels.find((l) => l.id === levelId) || null;
}

export function getAllLevels() {
  return WORLDS.flatMap((w) => w.levels);
}

export function getWorldsForTopic(topicId) {
  return WORLDS.filter((w) => w.topicId === topicId);
}

