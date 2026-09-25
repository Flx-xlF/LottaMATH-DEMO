/**
 * Exam Simulation Question Pool for LottaMATH
 * Specifically designed for Sekundarschule Niveau P (Baselland).
 * 
 * DESIGN PRINCIPLES:
 * 1. Head-Math Friendly ("Kopfrechnen-Garantie"): All numbers are integers, round multiples,
 *    or clean fractions (0.5) that can be computed mentally in 15–40 seconds without scratchpad.
 * 2. Dedicated Parallel Variants: Eliminates question duplication with sub-chapters to test
 *    true conceptual transfer rather than rote memory recall.
 * 3. 20-in-20 Pacing: Fast, focused prompts with no tedious 4-step story calculations.
 */

export const EXAM_QUESTIONS_FLAECHEN = [
  // --- Parallelogramm: Formel & Vorwärts ---
  {
    id: 'exam_fl_01',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie lautet die Formel für den Flächeninhalt $A$ eines Parallelogramms mit Grundseite $g$ und zugehöriger Höhe $h$?',
    promptLatex: '',
    interaction: {
      options: ['$A = g \\cdot h$', '$A = \\frac{g \\cdot h}{2}$', '$A = 2 \\cdot (g + h)$', '$A = g^2 + h^2$'],
    },
    correctAnswer: '$A = g \\cdot h$',
    acceptedAnswers: ['$A = g \\cdot h$'],
    hints: [
      '💡 Tipp: Durch Abschneiden und Verschieben eines Dreiecks entsteht ein Rechteck mit denselben Seiten $g$ und $h$.',
      '🔑 Hinweis: Die Fläche ist Grundseite mal Höhe, genau wie beim Rechteck.',
      '✅ Lösung: $A = g \\cdot h$.',
    ],
    commonMistake: 'Durch 2 geteilt (Verwechslung mit dem Dreieck: $A = \\frac{g \\cdot h}{2}$).',
  },
  {
    id: 'exam_fl_02',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Ein Parallelogramm hat die Grundseite $g = 6\\text{ cm}$ und die Höhe $h = 5\\text{ cm}$. Berechne seinen Flächeninhalt $A$ in $\\text{cm}^2$:',
    promptLatex: 'g = 6\\text{ cm}, \\quad h = 5\\text{ cm}',
    interaction: {
      placeholder: 'z.B. 25',
    },
    correctAnswer: '30',
    acceptedAnswers: ['30', '30 cm²', '30cm²', '30 cm^2'],
    hints: [
      '💡 Tipp: Formel $A = g \\cdot h$.',
      '🔑 Hinweis: $6 \\cdot 5 = 30$.',
      '✅ Lösung: $30\\text{ cm}^2$.',
    ],
    commonMistake: 'Durch 2 geteilt (15 gerechnet wie beim Dreieck).',
  },
  {
    id: 'exam_fl_03',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Umkehraufgabe: Ein Parallelogramm hat den Flächeninhalt $A = 40\\text{ m}^2$ und die Grundseite $g = 8\\text{ m}$. Berechne die zugehörige Höhe $h$ in Metern:',
    promptLatex: 'A = 40\\text{ m}^2, \\quad g = 8\\text{ m}',
    interaction: {
      placeholder: 'z.B. 4',
    },
    correctAnswer: '5',
    acceptedAnswers: ['5', '5 m', '5m'],
    hints: [
      '💡 Tipp: Formel nach $h$ auflösen: $h = \\frac{A}{g}$.',
      '🔑 Hinweis: $40 : 8 = 5$.',
      '✅ Lösung: $h = 5\\text{ m}$.',
    ],
    commonMistake: 'Multipliziert statt dividiert ($40 \\cdot 8$).',
  },
  {
    id: 'exam_fl_04',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Ein Parallelogramm hat die Seiten $a = 10\\text{ cm}$ und $b = 6\\text{ cm}$. Die Höhe auf die Seite $a$ ist $h_a = 4\\text{ cm}$. Welche Information ist für den Flächeninhalt $A$ überflüssig?',
    promptLatex: 'a = 10\\text{ cm}, \\quad b = 6\\text{ cm}, \\quad h_a = 4\\text{ cm}',
    interaction: {
      options: ['Die Schrägseite $b = 6\\text{ cm}$', 'Die Höhe $h_a = 4\\text{ cm}$', 'Die Grundseite $a = 10\\text{ cm}$', 'Keine, man braucht alle drei'],
    },
    correctAnswer: 'Die Schrägseite $b = 6\\text{ cm}$',
    acceptedAnswers: ['Die Schrägseite $b = 6\\text{ cm}$'],
    hints: [
      '💡 Tipp: Für die Fläche gilt $A = a \\cdot h_a$.',
      '🔑 Hinweis: Die Schrägseite $b$ wird nur für den Umfang $U = 2a + 2b$ gebraucht, nicht für die Fläche!',
      '✅ Lösung: Die Schrägseite $b = 6\\text{ cm}$ wird nicht benötigt.',
    ],
    commonMistake: 'Gedacht, man müsste $a \\cdot b$ rechnen (wie beim Rechteck).',
  },

  // --- Dreieck: Formel, Vorwärts & Umkehr ---
  {
    id: 'exam_fl_05',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie lautet die Formel für den Flächeninhalt $A$ eines Dreiecks mit Grundseite $g$ und Höhe $h$?',
    promptLatex: '',
    interaction: {
      options: ['$A = \\frac{g \\cdot h}{2}$', '$A = g \\cdot h$', '$A = \\frac{g + h}{2}$', '$A = 2 \\cdot g \\cdot h$'],
    },
    correctAnswer: '$A = \\frac{g \\cdot h}{2}$',
    acceptedAnswers: ['$A = \\frac{g \\cdot h}{2}$'],
    hints: [
      '💡 Tipp: Jedes Dreieck ist genau halb so gross wie ein Parallelogramm mit gleicher Grundseite und Höhe.',
      '🔑 Hinweis: Die Grundseite mal Höhe wird durch 2 geteilt: $A = \\frac{g \\cdot h}{2}$.',
      '✅ Lösung: $A = \\frac{g \\cdot h}{2}$.',
    ],
    commonMistake: 'Division durch 2 vergessen ($A = g \\cdot h$).',
  },
  {
    id: 'exam_fl_06',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Berechne den Flächeninhalt eines Dreiecks mit der Grundseite $g = 10\\text{ cm}$ und der Höhe $h = 6\\text{ cm}$ in $\\text{cm}^2$:',
    promptLatex: 'g = 10\\text{ cm}, \\quad h = 6\\text{ cm}',
    interaction: {
      placeholder: 'z.B. 25',
    },
    correctAnswer: '30',
    acceptedAnswers: ['30', '30 cm²', '30cm²', '30 cm^2'],
    hints: [
      '💡 Tipp: $A = \\frac{g \\cdot h}{2}$.',
      '🔑 Hinweis: $\\frac{10 \\cdot 6}{2} = \\frac{60}{2} = 30$.',
      '✅ Lösung: $30\\text{ cm}^2$.',
    ],
    commonMistake: 'Das Teilen durch 2 vergessen und $60$ geantwortet.',
  },
  {
    id: 'exam_fl_07',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Ein rechtwinkliges Dreieck hat die beiden Katheten $a = 8\\text{ m}$ und $b = 5\\text{ m}$. Berechne seinen Flächeninhalt in $\\text{m}^2$:',
    promptLatex: 'a = 8\\text{ m}, \\quad b = 5\\text{ m}',
    interaction: {
      placeholder: 'z.B. 18',
    },
    correctAnswer: '20',
    acceptedAnswers: ['20', '20 m²', '20m²', '20 m^2'],
    hints: [
      '💡 Tipp: Im rechtwinkligen Dreieck stehen die beiden Katheten senkrecht aufeinander: $A = \\frac{a \\cdot b}{2}$.',
      '🔑 Hinweis: $\\frac{8 \\cdot 5}{2} = \\frac{40}{2} = 20$.',
      '✅ Lösung: $20\\text{ m}^2$.',
    ],
    commonMistake: 'Nicht halbiert und $40$ eingegeben.',
  },
  {
    id: 'exam_fl_08',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Umkehraufgabe: Ein Dreieck hat den Flächeninhalt $A = 20\\text{ cm}^2$ und die Grundseite $g = 8\\text{ cm}$. Berechne die zugehörige Höhe $h$ in cm:',
    promptLatex: 'A = 20\\text{ cm}^2, \\quad g = 8\\text{ cm}',
    interaction: {
      placeholder: 'z.B. 4',
    },
    correctAnswer: '5',
    acceptedAnswers: ['5', '5 cm', '5cm'],
    hints: [
      '💡 Tipp: Zuerst die Fläche verdoppeln! $2 \\cdot A = g \\cdot h$.',
      '🔑 Hinweis: $2 \\cdot 20 = 40$. Nun teilen: $40 : 8 = 5$.',
      '✅ Lösung: $h = 5\\text{ cm}$.',
    ],
    commonMistake: 'Fläche nicht verdoppelt und $20 : 8 = 2.5$ berechnet.',
  },
  {
    id: 'exam_fl_09',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Wie lautet die umgeformte Formel zur Berechnung der Grundseite $g$ eines Dreiecks aus Fläche $A$ und Höhe $h$?',
    promptLatex: 'A = \\frac{g \\cdot h}{2} \\implies g = ?',
    interaction: {
      options: ['$g = \\frac{2 \\cdot A}{h}$', '$g = \\frac{A}{h}$', '$g = \\frac{A \\cdot h}{2}$', '$g = 2A - h$'],
    },
    correctAnswer: '$g = \\frac{2 \\cdot A}{h}$',
    acceptedAnswers: ['$g = \\frac{2 \\cdot A}{h}$'],
    hints: [
      '💡 Tipp: Beide Seiten mit 2 multiplizieren ($2A = g \\cdot h$) und danach durch $h$ teilen.',
      '🔑 Hinweis: Aus $A = \\frac{g \\cdot h}{2}$ folgt nach Multiplikation mit 2: $2A = g \\cdot h$, also $g = \\frac{2A}{h}$.',
      '✅ Lösung: $g = \\frac{2A}{h}$.',
    ],
    commonMistake: '$g = \\frac{A}{h}$ (wie beim Parallelogramm).',
  },

  // --- Trapez: Formel, Vorwärts & Umkehr ---
  {
    id: 'exam_fl_10',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie berechnet man den Flächeninhalt $A$ eines Trapezes mit den parallelen Seiten $a$ und $c$ und der Höhe $h$?',
    promptLatex: '',
    interaction: {
      options: [
        '$A = \\frac{a + c}{2} \\cdot h$',
        '$A = (a + c) \\cdot h$',
        '$A = \\frac{a \\cdot c}{2} \\cdot h$',
        '$A = \\frac{a + h}{2} \\cdot c$',
      ],
    },
    correctAnswer: '$A = \\frac{a + c}{2} \\cdot h$',
    acceptedAnswers: ['$A = \\frac{a + c}{2} \\cdot h$'],
    hints: [
      '💡 Tipp: Man nimmt den Durchschnitt der beiden parallelen Seiten (Mittellinie $m = \\frac{a+c}{2}$) und multipliziert mit der Höhe $h$.',
      '🔑 Hinweis: Die Formel lautet $A = \\frac{a + c}{2} \\cdot h$.',
      '✅ Lösung: $A = \\frac{a + c}{2} \\cdot h = m \\cdot h$.',
    ],
    commonMistake: 'Parallele Seiten multipliziert statt addiert ($a \\cdot c$).',
  },
  {
    id: 'exam_fl_11',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Ein Trapez hat die parallelen Seiten $a = 9\\text{ m}$ und $c = 3\\text{ m}$ und die Höhe $h = 5\\text{ m}$. Berechne seinen Flächeninhalt in $\\text{m}^2$:',
    promptLatex: 'a = 9\\text{ m}, \\quad c = 3\\text{ m}, \\quad h = 5\\text{ m}',
    interaction: {
      placeholder: 'z.B. 28',
    },
    correctAnswer: '30',
    acceptedAnswers: ['30', '30 m²', '30m²', '30 m^2'],
    hints: [
      '💡 Tipp: Berechne zuerst den Mittelwert: $\\frac{9 + 3}{2} = \\frac{12}{2} = 6$.',
      '🔑 Hinweis: Nun mit der Höhe multiplizieren: $6 \\cdot 5 = 30$.',
      '✅ Lösung: $30\\text{ m}^2$.',
    ],
    commonMistake: 'Mittelwert nicht geteilt und $(9+3) \\cdot 5 = 60$ gerechnet.',
  },
  {
    id: 'exam_fl_12',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Ein Trapez hat die Mittellinie $m = 6\\text{ cm}$ und die Höhe $h = 5\\text{ cm}$. Berechne den Flächeninhalt $A$ in $\\text{cm}^2$:',
    promptLatex: 'm = 6\\text{ cm}, \\quad h = 5\\text{ cm}',
    interaction: {
      placeholder: 'z.B. 25',
    },
    correctAnswer: '30',
    acceptedAnswers: ['30', '30 cm²', '30cm²', '30 cm^2'],
    hints: [
      '💡 Tipp: Da die Mittellinie $m = \\frac{a+c}{2}$ bereits gegeben ist, gilt einfach $A = m \\cdot h$.',
      '🔑 Hinweis: $6 \\cdot 5 = 30$.',
      '✅ Lösung: $30\\text{ cm}^2$.',
    ],
    commonMistake: 'Die Mittellinie fälschlicherweise nochmals durch 2 geteilt.',
  },
  {
    id: 'exam_fl_13',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Umkehraufgabe: Ein Trapez hat die Fläche $A = 35\\text{ m}^2$ und die parallelen Seiten $a = 6\\text{ m}$ und $c = 4\\text{ m}$. Berechne die Höhe $h$ in Metern:',
    promptLatex: 'A = 35\\text{ m}^2, \\quad a = 6\\text{ m}, \\quad c = 4\\text{ m}',
    interaction: {
      placeholder: 'z.B. 5',
    },
    correctAnswer: '7',
    acceptedAnswers: ['7', '7 m', '7m'],
    hints: [
      '💡 Tipp: Berechne zuerst die Mittellinie $m = \\frac{6 + 4}{2} = 5\\text{ m}$.',
      '🔑 Hinweis: $h = \\frac{A}{m} = 35 : 5 = 7$.',
      '✅ Lösung: $h = 7\\text{ m}$.',
    ],
    commonMistake: '$35 : 10 = 3.5$ gerechnet, weil das Teilen durch 2 vergessen wurde.',
  },

  // --- Rhombus & Drachenviereck ---
  {
    id: 'exam_fl_14',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie berechnet man den Flächeninhalt $A$ eines Drachenvierecks oder Rhombus mit den Diagonalen $e$ und $f$?',
    promptLatex: '',
    interaction: {
      options: [
        '$A = \\frac{e \\cdot f}{2}$',
        '$A = e \\cdot f$',
        '$A = \\frac{e + f}{2}$',
        '$A = 2 \\cdot (e + f)$',
      ],
    },
    correctAnswer: '$A = \\frac{e \\cdot f}{2}$',
    acceptedAnswers: ['$A = \\frac{e \\cdot f}{2}$'],
    hints: [
      '💡 Tipp: Das umgebende Rechteck hat den Flächeninhalt $e \\cdot f$. Der Drachen füllt genau die Hälfte davon aus.',
      '🔑 Hinweis: Man multipliziert die beiden Diagonalen und halbiert das Produkt: $\\frac{e \\cdot f}{2}$.',
      '✅ Lösung: $A = \\frac{e \\cdot f}{2}$.',
    ],
    commonMistake: 'Das Halbiere vergessen ($A = e \\cdot f$).',
  },
  {
    id: 'exam_fl_15',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Ein Rhombus (Raute) hat die Diagonalen $e = 8\\text{ cm}$ und $f = 5\\text{ cm}$. Berechne seinen Flächeninhalt in $\\text{cm}^2$:',
    promptLatex: 'e = 8\\text{ cm}, \\quad f = 5\\text{ cm}',
    interaction: {
      placeholder: 'z.B. 15',
    },
    correctAnswer: '20',
    acceptedAnswers: ['20', '20 cm²', '20cm²', '20 cm^2'],
    hints: [
      '💡 Tipp: $A = \\frac{e \\cdot f}{2}$.',
      '🔑 Hinweis: $\\frac{8 \\cdot 5}{2} = \\frac{40}{2} = 20$.',
      '✅ Lösung: $20\\text{ cm}^2$.',
    ],
    commonMistake: 'Nicht durch 2 geteilt und $40$ eingetragen.',
  },
  {
    id: 'exam_fl_16',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Ein Drachenviereck hat die Fläche $A = 35\\text{ cm}^2$ und eine Diagonale $e = 10\\text{ cm}$. Berechne die Länge der zweiten Diagonale $f$ in cm:',
    promptLatex: 'A = 35\\text{ cm}^2, \\quad e = 10\\text{ cm}',
    interaction: {
      placeholder: 'z.B. 6',
    },
    correctAnswer: '7',
    acceptedAnswers: ['7', '7 cm', '7cm'],
    hints: [
      '💡 Tipp: Verdopple zuerst die Fläche: $2 \\cdot A = e \\cdot f = 70$.',
      '🔑 Hinweis: Teile nun durch $e$: $70 : 10 = 7$.',
      '✅ Lösung: $f = 7\\text{ cm}$.',
    ],
    commonMistake: 'Fläche nicht verdoppelt und $35 : 10 = 3.5$ herausbekommen.',
  },

  // --- Verbundfiguren (Zerlegen & Ergänzen mit Kopfrechnen) ---
  {
    id: 'exam_fl_17',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Eine Figur besteht aus einem Rechteck ($6\\text{ m} \\times 4\\text{ m}$) und einem aufgesetzten Dreieck mit Grundseite $g = 6\\text{ m}$ und Höhe $h = 2\\text{ m}$. Berechne die Gesamtfläche in $\\text{m}^2$:',
    promptLatex: 'A_{\\text{Rechteck}} = 6 \\cdot 4, \\quad A_{\\text{Dreieck}} = \\frac{6 \\cdot 2}{2}',
    interaction: {
      placeholder: 'z.B. 28',
    },
    correctAnswer: '30',
    acceptedAnswers: ['30', '30 m²', '30m²', '30 m^2'],
    hints: [
      '💡 Tipp: Rechteckfläche berechnen: $6 \\cdot 4 = 24\\text{ m}^2$.',
      '🔑 Hinweis: Dreiecksfläche berechnen: $\\frac{6 \\cdot 2}{2} = 6\\text{ m}^2$. Addiere beide: $24 + 6 = 30$.',
      '✅ Lösung: $30\\text{ m}^2$.',
    ],
    commonMistake: 'Das Dreieck nicht halbiert ($24 + 12 = 36$).',
  },
  {
    id: 'exam_fl_18',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Eine L-förmige Figur wird in zwei Rechtecke zerlegt: Teil 1 misst $5\\text{ m} \\times 3\\text{ m}$, Teil 2 misst $2\\text{ m} \\times 3\\text{ m}$. Wie gross ist die Gesamtfläche in $\\text{m}^2$?',
    promptLatex: 'A_1 = 5 \\cdot 3, \\quad A_2 = 2 \\cdot 3',
    interaction: {
      placeholder: 'z.B. 19',
    },
    correctAnswer: '21',
    acceptedAnswers: ['21', '21 m²', '21m²', '21 m^2'],
    hints: [
      '💡 Tipp: Berechne $A_1 = 5 \\cdot 3 = 15$ und $A_2 = 2 \\cdot 3 = 6$.',
      '🔑 Hinweis: $15 + 6 = 21$.',
      '✅ Lösung: $21\\text{ m}^2$.',
    ],
    commonMistake: 'Rechenfehler bei der Addition.',
  },
  {
    id: 'exam_fl_19',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Von einer quadratischen Platte ($10\\text{ cm} \\times 10\\text{ cm}$) wird an einer Ecke ein kleines Quadrat ($2\\text{ cm} \\times 2\\text{ cm}$) abgeschnitten. Wie gross ist die Restfläche in $\\text{cm}^2$?',
    promptLatex: 'A_{\\text{Rest}} = 10 \\cdot 10 - 2 \\cdot 2',
    interaction: {
      placeholder: 'z.B. 90',
    },
    correctAnswer: '96',
    acceptedAnswers: ['96', '96 cm²', '96cm²', '96 cm^2'],
    hints: [
      '💡 Tipp: Grosse Fläche minus abgeschnittene Fläche.',
      '🔑 Hinweis: $100 - 4 = 96$.',
      '✅ Lösung: $96\\text{ cm}^2$.',
    ],
    commonMistake: '$2 \\cdot 2$ vom falschen Wert abgezogen oder Rechenfehler bei $100 - 4$.',
  },

  // --- Einheiten-Umrechnung (Kopfrechnen-Fokus) ---
  {
    id: 'exam_fl_20',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Wie viele Quadratdezimeter ($\\text{dm}^2$) sind $4\\text{ m}^2$?',
    promptLatex: '4\\text{ m}^2 = ?\\text{ dm}^2',
    interaction: {
      placeholder: 'z.B. 40',
    },
    correctAnswer: '400',
    acceptedAnswers: ['400', '400 dm²', '400dm²', '400 dm^2'],
    hints: [
      '💡 Tipp: Bei Flächenmassen ist die Umrechnungszahl $100$ (da $10 \\times 10 = 100$).',
      '🔑 Hinweis: $4 \\cdot 100 = 400$.',
      '✅ Lösung: $400\\text{ dm}^2$.',
    ],
    commonMistake: 'Längen-Faktor 10 genommen ($40\\text{ dm}^2$).',
  },
  {
    id: 'exam_fl_21',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Wie viele Quadratzentimeter ($\\text{cm}^2$) sind $7\\text{ dm}^2$?',
    promptLatex: '7\\text{ dm}^2 = ?\\text{ cm}^2',
    interaction: {
      placeholder: 'z.B. 70',
    },
    correctAnswer: '700',
    acceptedAnswers: ['700', '700 cm²', '700cm²', '700 cm^2'],
    hints: [
      '💡 Tipp: $1\\text{ dm}^2 = 100\\text{ cm}^2$.',
      '🔑 Hinweis: $7 \\cdot 100 = 700$.',
      '✅ Lösung: $700\\text{ cm}^2$.',
    ],
    commonMistake: 'Mit 10 statt mit 100 multipliziert.',
  },

  // --- Sachrechnen & Reale Kontexte mit glatten Zahlen ---
  {
    id: 'exam_fl_22',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Ein rechteckiges Gartenbeet ist $5\\text{ m}$ lang und $4\\text{ m}$ breit. 1 Quadratmeter Rindenmulch kostet $3\\text{ CHF}$. Wie viel kostet der Rindenmulch für das gesamte Beet in CHF?',
    promptLatex: '',
    interaction: {
      placeholder: 'z.B. 50',
    },
    correctAnswer: '60',
    acceptedAnswers: ['60', '60 CHF', '60 Fr', '60 Fr.'],
    hints: [
      '💡 Tipp: Berechne zuerst die Fläche des Beetes: $5 \\cdot 4 = 20\\text{ m}^2$.',
      '🔑 Hinweis: Multipliziere mit dem Quadratmeterpreis: $20 \\cdot 3 = 60\\text{ CHF}$.',
      '✅ Lösung: $60\\text{ CHF}$.',
    ],
    commonMistake: 'Umfang statt Fläche berechnet: $2 \\cdot (5+4) \\cdot 3 = 54$.',
  },
  {
    id: 'exam_fl_23',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Eine dreieckige Giebelwand mit Grundseite $g = 8\\text{ m}$ und Höhe $h = 5\\text{ m}$ soll gestrichen werden. Wie gross ist die zu streichende Fläche in $\\text{m}^2$?',
    promptLatex: 'g = 8\\text{ m}, \\quad h = 5\\text{ m}',
    interaction: {
      placeholder: 'z.B. 15',
    },
    correctAnswer: '20',
    acceptedAnswers: ['20', '20 m²', '20m²', '20 m^2'],
    hints: [
      '💡 Tipp: Die Giebelwand ist ein Dreieck: $A = \\frac{g \\cdot h}{2}$.',
      '🔑 Hinweis: $\\frac{8 \\cdot 5}{2} = 20$.',
      '✅ Lösung: $20\\text{ m}^2$.',
    ],
    commonMistake: 'Dreieck nicht halbiert ($40$).',
  },
  {
    id: 'exam_fl_24',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Verdoppelt man die Grundseite $g$ eines Parallelogramms und lässt die Höhe $h$ gleich, was passiert mit dem Flächeninhalt?',
    promptLatex: 'A_{\\text{neu}} = (2g) \\cdot h',
    interaction: {
      options: [
        'Die Fläche verdoppelt sich',
        'Die Fläche vervierfacht sich',
        'Die Fläche bleibt unverändert',
        'Die Fläche steigt um 2'
      ],
    },
    correctAnswer: 'Die Fläche verdoppelt sich',
    acceptedAnswers: ['Die Fläche verdoppelt sich'],
    hints: [
      '💡 Tipp: Setze einfache Zahlen ein: $g=5, h=2 \\implies A=10$. Verdoppelt: $g=10, h=2 \\implies A=20$.',
      '🔑 Hinweis: Neue Fläche: $A\' = (2g) \\cdot h = 2 \\cdot (g \\cdot h) = 2A$.',
      '✅ Lösung: Die Fläche verdoppelt sich.',
    ],
    commonMistake: 'Gedacht, die Fläche vervierfacht sich (das passiert nur, wenn Grundseite UND Höhe verdoppelt werden).',
  },
  {
    id: 'exam_fl_25',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Verdoppelt man sowohl die Grundseite $g$ ALS AUCH die Höhe $h$ eines Dreiecks, was passiert mit dem Flächeninhalt?',
    promptLatex: 'A_{\\text{neu}} = \\frac{(2g) \\cdot (2h)}{2}',
    interaction: {
      options: [
        'Die Fläche vervierfacht sich ($4 \\cdot A$)',
        'Die Fläche verdoppelt sich ($2 \\cdot A$)',
        'Die Fläche wird 8-mal so gross',
        'Die Fläche bleibt gleich'
      ],
    },
    correctAnswer: 'Die Fläche vervierfacht sich ($4 \\cdot A$)',
    acceptedAnswers: ['Die Fläche vervierfacht sich ($4 \\cdot A$)'],
    hints: [
      '💡 Tipp: $(2g) \\cdot (2h) = 4 \\cdot (g \\cdot h)$.',
      '🔑 Hinweis: Aus $2 \\cdot 2 = 4$ folgt: $A\' = \\frac{(2g) \\cdot (2h)}{2} = 4 \\cdot \\frac{g \\cdot h}{2} = 4A$.',
      '✅ Lösung: Die Fläche vervierfacht sich.',
    ],
    commonMistake: 'Nur Verdopplung vermutet.',
  },
];

export const EXAM_QUESTIONS_TERME = [
  // --- Terme aufstellen & interpretieren ---
  {
    id: 'exam_tm_01',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Ein Rechteck hat die Seitenlängen $x$ und $y$. Welcher Term beschreibt den Umfang $U$ des Rechtecks?',
    promptLatex: '',
    interaction: {
      options: ['$U = 2x + 2y$', '$U = x \\cdot y$', '$U = x + y$', '$U = 2xy$'],
    },
    correctAnswer: '$U = 2x + 2y$',
    acceptedAnswers: ['$U = 2x + 2y$'],
    hints: [
      '💡 Tipp: Der Umfang ist die Summe aller vier Aussenseiten: $x + y + x + y$.',
      '✅ Lösung: $2x + 2y$ oder $2(x + y)$.',
    ],
    commonMistake: 'Fläche ($x \\cdot y$) mit Umfang verwechselt.',
  },
  {
    id: 'exam_tm_02',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Ein Kinoticket kostet $k$ Franken, eine Tüte Popcorn kostet $5$ Franken. Welcher Term beschreibt die Gesamtkosten für 3 Personen, wenn jede Person ein Ticket und Popcorn kauft?',
    promptLatex: '',
    interaction: {
      options: ['$3(k + 5)$', '$3k + 5$', '$k + 15$', '$3 \\cdot 5k$'],
    },
    correctAnswer: '$3(k + 5)$',
    acceptedAnswers: ['$3(k + 5)$'],
    hints: [
      '💡 Tipp: Pro Person kostet es $k + 5$. Für 3 Personen also $3(k + 5)$ bzw. $3k + 15$.',
      '✅ Lösung: $3(k + 5)$.',
    ],
    commonMistake: 'Popcorn nur für 1 Person gezählt ($3k + 5$).',
  },

  // --- Gleichartige Glieder zusammenfassen ---
  {
    id: 'exam_tm_03',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Fasse den Term so weit wie möglich zusammen: $4x + 7x - 3x$',
    promptLatex: '4x + 7x - 3x = ?',
    interaction: {
      options: ['$8x$', '$8x^3$', '$14x$', '$8$'],
    },
    correctAnswer: '$8x$',
    acceptedAnswers: ['$8x$'],
    hints: [
      '💡 Tipp: Rechne nur die Vorzahlen (Koeffizienten): $4 + 7 - 3 = 8$.',
      '✅ Lösung: $8x$.',
    ],
    commonMistake: 'Exponenten addiert ($8x^3$).',
  },
  {
    id: 'exam_tm_04',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Vereinfache den Term: $5a + 4b + 3a - b$',
    promptLatex: '5a + 4b + 3a - b = ?',
    interaction: {
      options: ['$8a + 3b$', '$8a + 5b$', '$11ab$', '$8a - 3b$'],
    },
    correctAnswer: '$8a + 3b$',
    acceptedAnswers: ['$8a + 3b$'],
    hints: [
      '💡 Tipp: Fasse gleiche Variablen zusammen: $(5a + 3a) + (4b - 1b)$.',
      '🔑 Hinweis: $5a + 3a = 8a$ und $4b - 1b = 3b$.',
      '✅ Lösung: $8a + 3b$.',
    ],
    commonMistake: 'Ungleiche Glieder zusammengerechnet ($11ab$).',
  },
  {
    id: 'exam_tm_05',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Fasse zusammen: $6x^2 + 5x - 2x^2 + 3x$',
    promptLatex: '6x^2 + 5x - 2x^2 + 3x = ?',
    interaction: {
      options: ['$4x^2 + 8x$', '$12x^3$', '$4x^2 - 8x$', '$12x^2$'],
    },
    correctAnswer: '$4x^2 + 8x$',
    acceptedAnswers: ['$4x^2 + 8x$'],
    hints: [
      '💡 Tipp: $x^2$ und $x$ sind ungleichartig und dürfen NICHT zusammengerechnet werden!',
      '🔑 Hinweis: $(6x^2 - 2x^2) = 4x^2$ und $(5x + 3x) = 8x$.',
      '✅ Lösung: $4x^2 + 8x$.',
    ],
    commonMistake: '$x^2$ und $x$ zu $12x^3$ zusammengeworfen.',
  },

  // --- Plus- und Minusklammern ---
  {
    id: 'exam_tm_06',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Löse die Minusklammer auf: $9a - (4a + 5)$',
    promptLatex: '9a - (4a + 5) = ?',
    interaction: {
      options: ['$5a - 5$', '$5a + 5$', '$13a - 5$', '$5a$'],
    },
    correctAnswer: '$5a - 5$',
    acceptedAnswers: ['$5a - 5$'],
    hints: [
      '💡 Tipp: Ein Minus vor der Klammer dreht ALLE Vorzeichen in der Klammer um!',
      '🔑 Hinweis: $9a - 4a - 5 = 5a - 5$.',
      '✅ Lösung: $5a - 5$.',
    ],
    commonMistake: 'Das Vorzeichen der 5 nicht umgedreht ($5a + 5$).',
  },
  {
    id: 'exam_tm_07',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Löse die Klammern auf und vereinfache: $7x - (3x - 4)$',
    promptLatex: '7x - (3x - 4) = ?',
    interaction: {
      options: ['$4x + 4$', '$4x - 4$', '$10x - 4$', '$4x + 8$'],
    },
    correctAnswer: '$4x + 4$',
    acceptedAnswers: ['$4x + 4$'],
    hints: [
      '💡 Tipp: Minus vor der Klammer: Aus $-(-4)$ wird $+4$!',
      '🔑 Hinweis: $7x - 3x + 4 = 4x + 4$.',
      '✅ Lösung: $4x + 4$.',
    ],
    commonMistake: 'Minus mal Minus nicht zu Plus gemacht ($4x - 4$).',
  },

  // --- Ausmultiplizieren (Distributivgesetz) ---
  {
    id: 'exam_tm_08',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Multipliziere die Klammer aus: $4(3x - 5)$',
    promptLatex: '4 \\cdot (3x - 5) = ?',
    interaction: {
      options: ['$12x - 20$', '$12x - 5$', '$7x - 20$', '$12x + 20$'],
    },
    correctAnswer: '$12x - 20$',
    acceptedAnswers: ['$12x - 20$'],
    hints: [
      '💡 Tipp: Jeder Summand in der Klammer wird mit 4 multipliziert: $4 \\cdot 3x - 4 \\cdot 5$.',
      '✅ Lösung: $12x - 20$.',
    ],
    commonMistake: 'Nur den ersten Teil mit 4 multipliziert ($12x - 5$).',
  },
  {
    id: 'exam_tm_09',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Multipliziere aus und fasse zusammen: $2(3a + 4) + 3(2a - 1)$',
    promptLatex: '2(3a + 4) + 3(2a - 1) = ?',
    interaction: {
      options: ['$12a + 5$', '$12a + 7$', '$10a + 5$', '$12a - 5$'],
    },
    correctAnswer: '$12a + 5$',
    acceptedAnswers: ['$12a + 5$'],
    hints: [
      '💡 Tipp: Erste Klammer: $6a + 8$. Zweite Klammer: $6a - 3$.',
      '🔑 Hinweis: Addieren: $(6a + 6a) + (8 - 3) = 12a + 5$.',
      '✅ Lösung: $12a + 5$.',
    ],
    commonMistake: 'Rechenfehler bei den Konstanten $8 - 3 = 5$.',
  },

  // --- Ausklammern / Faktorisieren ---
  {
    id: 'exam_tm_10',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Klammere den grösstmöglichen gemeinsamen Faktor aus: $6x + 9$',
    promptLatex: '6x + 9 = ?',
    interaction: {
      options: ['$3(2x + 3)$', '$2(3x + 4)$', '$6(x + 3)$', '$3(3x + 3)$'],
    },
    correctAnswer: '$3(2x + 3)$',
    acceptedAnswers: ['$3(2x + 3)$'],
    hints: [
      '💡 Tipp: Der grösste gemeinsame Teiler von 6 und 9 ist 3.',
      '🔑 Hinweis: $6x : 3 = 2x$ und $9 : 3 = 3$.',
      '✅ Lösung: $3(2x + 3)$.',
    ],
    commonMistake: 'Falschen Teiler gewählt.',
  },
  {
    id: 'exam_tm_11',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Klammere aus: $15ab - 10a$',
    promptLatex: '15ab - 10a = ?',
    interaction: {
      options: ['$5a(3b - 2)$', '$5(3ab - 2a)$', '$5a(3b - 10)$', '$10a(1.5b - 1)$'],
    },
    correctAnswer: '$5a(3b - 2)$',
    acceptedAnswers: ['$5a(3b - 2)$'],
    hints: [
      '💡 Tipp: Sowohl Zahlenteiler 5 als auch die Variable $a$ kommen in beiden Gliedern vor: Faktor $5a$.',
      '🔑 Hinweis: $15ab : 5a = 3b$ und $10a : 5a = 2$.',
      '✅ Lösung: $5a(3b - 2)$.',
    ],
    commonMistake: 'Die gemeinsame Variable $a$ nicht mit ausgeklammert.',
  },

  // --- 1. Binomische Formel ---
  {
    id: 'exam_tm_12',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Berechne mit der 1. binomischen Formel: $(x + 4)^2$',
    promptLatex: '(x + 4)^2 = ?',
    interaction: {
      options: ['$x^2 + 8x + 16$', '$x^2 + 16$', '$x^2 + 4x + 16$', '$x^2 + 8x + 8$'],
    },
    correctAnswer: '$x^2 + 8x + 16$',
    acceptedAnswers: ['$x^2 + 8x + 16$'],
    hints: [
      '💡 Tipp: Formel $(a+b)^2 = a^2 + 2ab + b^2$.',
      '🔑 Hinweis: $a^2 = x^2$, Mittelglied $2 \\cdot x \\cdot 4 = 8x$, $b^2 = 4^2 = 16$.',
      '✅ Lösung: $x^2 + 8x + 16$.',
    ],
    commonMistake: 'Mittelglied vergessen und nur $x^2 + 16$ gerechnet.',
  },
  {
    id: 'exam_tm_13',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Berechne mit der 1. binomischen Formel: $(a + 5)^2$',
    promptLatex: '(a + 5)^2 = ?',
    interaction: {
      options: ['$a^2 + 10a + 25$', '$a^2 + 25$', '$a^2 + 5a + 25$', '$a^2 + 10a + 10$'],
    },
    correctAnswer: '$a^2 + 10a + 25$',
    acceptedAnswers: ['$a^2 + 10a + 25$'],
    hints: [
      '💡 Tipp: $(a+b)^2 = a^2 + 2ab + b^2$.',
      '🔑 Hinweis: $a^2 + 2 \\cdot a \\cdot 5 + 5^2 = a^2 + 10a + 25$.',
      '✅ Lösung: $a^2 + 10a + 25$.',
    ],
    commonMistake: 'Mittelglied vergessen ($a^2 + 25$).',
  },

  // --- 2. Binomische Formel ---
  {
    id: 'exam_tm_14',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Berechne mit der 2. binomischen Formel: $(x - 3)^2$',
    promptLatex: '(x - 3)^2 = ?',
    interaction: {
      options: ['$x^2 - 6x + 9$', '$x^2 - 9$', '$x^2 + 6x + 9$', '$x^2 - 6x - 9$'],
    },
    correctAnswer: '$x^2 - 6x + 9$',
    acceptedAnswers: ['$x^2 - 6x + 9$'],
    hints: [
      '💡 Tipp: Formel $(a-b)^2 = a^2 - 2ab + b^2$.',
      '🔑 Hinweis: $(-3)^2 = +9$, das Endglied ist immer positiv!',
      '✅ Lösung: $x^2 - 6x + 9$.',
    ],
    commonMistake: 'Vorzeichenfehler beim Endglied ($x^2 - 6x - 9$) oder Mittelglied vergessen.',
  },
  {
    id: 'exam_tm_15',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Berechne mit der 2. binomischen Formel: $(2x - 3)^2$',
    promptLatex: '(2x - 3)^2 = ?',
    interaction: {
      options: ['$4x^2 - 12x + 9$', '$2x^2 - 12x + 9$', '$4x^2 - 9$', '$4x^2 - 6x + 9$'],
    },
    correctAnswer: '$4x^2 - 12x + 9$',
    acceptedAnswers: ['$4x^2 - 12x + 9$'],
    hints: [
      '💡 Tipp: $(2x)^2 = 4x^2$. Mittelglied: $2 \\cdot (2x) \\cdot 3 = 12x$.',
      '🔑 Hinweis: Nach der 2. binomischen Formel: $(2x)^2 - 2 \\cdot (2x) \\cdot 3 + 3^2 = 4x^2 - 12x + 9$.',
      '✅ Lösung: $4x^2 - 12x + 9$.',
    ],
    commonMistake: 'Koeffizient 2 beim Quadrieren vergessen ($2x^2$).',
  },

  // --- 3. Binomische Formel ---
  {
    id: 'exam_tm_16',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Berechne mit der 3. binomischen Formel: $(x + 6)(x - 6)$',
    promptLatex: '(x + 6)(x - 6) = ?',
    interaction: {
      options: ['$x^2 - 36$', '$x^2 + 36$', '$x^2 - 12x - 36$', '$x^2 - 12$'],
    },
    correctAnswer: '$x^2 - 36$',
    acceptedAnswers: ['$x^2 - 36$'],
    hints: [
      '💡 Tipp: Formel $(a+b)(a-b) = a^2 - b^2$. Das Mittelglied hebt sich auf!',
      '🔑 Hinweis: $a^2 - b^2 = x^2 - 6^2 = x^2 - 36$.',
      '✅ Lösung: $x^2 - 36$.',
    ],
    commonMistake: 'Plus statt Minus ($x^2 + 36$).',
  },
  {
    id: 'exam_tm_17',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Berechne mit der 3. binomischen Formel: $(2a + 5)(2a - 5)$',
    promptLatex: '(2a + 5)(2a - 5) = ?',
    interaction: {
      options: ['$4a^2 - 25$', '$2a^2 - 25$', '$4a^2 + 25$', '$4a - 25$'],
    },
    correctAnswer: '$4a^2 - 25$',
    acceptedAnswers: ['$4a^2 - 25$'],
    hints: [
      '💡 Tipp: $(2a)^2 - 5^2 = 4a^2 - 25$.',
      '🔑 Hinweis: Den ersten Term $(2a)$ als Ganzes quadrieren: $(2a)^2 = 4a^2$.',
      '✅ Lösung: $4a^2 - 25$.',
    ],
    commonMistake: '$2a$ nicht quadriert ($2a^2 - 25$).',
  },

  // --- Kopfrechnen mit binomischen Formeln ---
  {
    id: 'exam_tm_18',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Kopfrechnen-Trick: Berechne $19 \\cdot 21$ im Kopf mit der 3. binomischen Formel $(20 - 1)(20 + 1) = 20^2 - 1^2$:',
    promptLatex: '19 \\cdot 21 = (20 - 1)(20 + 1) = ?',
    interaction: {
      placeholder: 'z.B. 395',
    },
    correctAnswer: '399',
    acceptedAnswers: ['399'],
    hints: [
      '💡 Tipp: $20^2 = 400$.',
      '🔑 Hinweis: $400 - 1 = 399$.',
      '✅ Lösung: $399$.',
    ],
    commonMistake: '400 minus 2 gerechnet (398).',
  },
  {
    id: 'exam_tm_19',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Kopfrechnen-Trick: Berechne $29 \\cdot 31$ im Kopf mit der 3. binomischen Formel $(30 - 1)(30 + 1) = 30^2 - 1^2$:',
    promptLatex: '29 \\cdot 31 = (30 - 1)(30 + 1) = ?',
    interaction: {
      placeholder: 'z.B. 895',
    },
    correctAnswer: '899',
    acceptedAnswers: ['899'],
    hints: [
      '💡 Tipp: $30^2 = 900$ und $1^2 = 1$.',
      '🔑 Hinweis: $900 - 1 = 899$.',
      '✅ Lösung: $899$.',
    ],
    commonMistake: '900 minus 2 gerechnet (898).',
  },

  // --- Termwert berechnen mit einfachen Zahlen ---
  {
    id: 'exam_tm_20',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 1,
    prompt: 'Berechne den Wert des Terms $T(x) = 4x - 7$ für $x = 5$:',
    promptLatex: 'T(5) = 4 \\cdot 5 - 7',
    interaction: {
      placeholder: 'z.B. 12',
    },
    correctAnswer: '13',
    acceptedAnswers: ['13'],
    hints: [
      '💡 Tipp: Setze für $x$ die Zahl 5 ein: $4 \\cdot 5 = 20$.',
      '🔑 Hinweis: $20 - 7 = 13$.',
      '✅ Lösung: $13$.',
    ],
    commonMistake: 'Rechenfehler bei der Subtraktion.',
  },
  {
    id: 'exam_tm_21',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Berechne den Wert des Terms $T(a) = 2a^2 - 3$ für $a = 3$:',
    promptLatex: 'T(3) = 2 \\cdot 3^2 - 3',
    interaction: {
      placeholder: 'z.B. 20',
    },
    correctAnswer: '15',
    acceptedAnswers: ['15'],
    hints: [
      '💡 Tipp: Punkt- vor Strichrechnung und Potenzen zuerst! $3^2 = 9$.',
      '🔑 Hinweis: $2 \\cdot 9 = 18$. Nun subtrahieren: $18 - 3 = 15$.',
      '✅ Lösung: $15$.',
    ],
    commonMistake: 'Zuerst $2 \\cdot 3 = 6$ gerechnet und dann quadriert ($6^2 = 36$).',
  },
  {
    id: 'exam_tm_22',
    levelId: 'exam',
    type: 'fill-in',
    difficulty: 2,
    prompt: 'Berechne den Wert des Terms $T(x) = (x + 3)^2$ für $x = 7$:',
    promptLatex: 'T(7) = (7 + 3)^2',
    interaction: {
      placeholder: 'z.B. 64',
    },
    correctAnswer: '100',
    acceptedAnswers: ['100'],
    hints: [
      '💡 Tipp: Berechne zuerst die Klammer: $7 + 3 = 10$.',
      '🔑 Hinweis: $10^2 = 100$.',
      '✅ Lösung: $100$.',
    ],
    commonMistake: 'Rechenfehler beim Quadrieren.',
  },
  {
    id: 'exam_tm_23',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Welche Zahl ist der Koeffizient der Variablen $x$ im Term $12 - 5x$?',
    promptLatex: '',
    interaction: {
      options: ['$-5$', '$5$', '$12$', '$-5x$'],
    },
    correctAnswer: '$-5$',
    acceptedAnswers: ['$-5$'],
    hints: [
      '💡 Tipp: Der Koeffizient ist die Zahl vor der Variablen mitsamt ihrem Vorzeichen.',
      '🔑 Hinweis: Achte auf das Minuszeichen vor der 5.',
      '✅ Lösung: $-5$.',
    ],
    commonMistake: 'Das negative Vorzeichen vergessen ($5$).',
  },
  {
    id: 'exam_tm_24',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Faktorisieren: Welcher Term entspricht $x^2 - 16$?',
    promptLatex: 'x^2 - 16 = ?',
    interaction: {
      options: ['$(x + 4)(x - 4)$', '$(x - 4)^2$', '$(x + 4)^2$', '$(x - 8)(x + 2)$'],
    },
    correctAnswer: '$(x + 4)(x - 4)$',
    acceptedAnswers: ['$(x + 4)(x - 4)$'],
    hints: [
      '💡 Tipp: Rückwärts anwenden der 3. binomischen Formel: $a^2 - b^2 = (a+b)(a-b)$.',
      '🔑 Hinweis: $\\sqrt{16} = 4$, also $(x+4)(x-4)$.',
      '✅ Lösung: $(x + 4)(x - 4)$.',
    ],
    commonMistake: 'Mit der 2. binomischen Formel $(x-4)^2 = x^2 - 8x + 16$ verwechselt.',
  },
  {
    id: 'exam_tm_25',
    levelId: 'exam',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Faktorisieren: Welcher Term entspricht $x^2 + 6x + 9$?',
    promptLatex: 'x^2 + 6x + 9 = ?',
    interaction: {
      options: ['$(x + 3)^2$', '$(x - 3)^2$', '$(x + 3)(x - 3)$', '$(x + 6)^2$'],
    },
    correctAnswer: '$(x + 3)^2$',
    acceptedAnswers: ['$(x + 3)^2$'],
    hints: [
      '💡 Tipp: 1. binomische Formel rückwärts: $\\sqrt{9} = 3$ und $2 \\cdot 3 = 6$.',
      '🔑 Hinweis: Alle Vorzeichen sind positiv und das Mittelglied ist $2 \\cdot x \\cdot 3 = 6x$.',
      '✅ Lösung: $(x + 3)^2$.',
    ],
    commonMistake: 'Vorzeichen mit der 2. binomischen Formel verwechselt.',
  },
];
