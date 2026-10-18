/**
 * Question Bank: World 9 (Sehsinn & Optik)
 * Subject: Natur & Technik (Biologie & Physik, Sekundarstufe I Niveau P)
 * Curriculum alignment: Prisma / NaTech AM 3.12, AM 3.13, Lehrplan 21
 */

export const WORLD9_QUESTIONS = [
  // =========================================================================
  // Level 9-1: Licht & Linsenarten
  // =========================================================================
  {
    id: 'w9_mc_101',
    levelId: '9-1',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Wie breitet sich Licht von einer Lichtquelle (z. B. einer Lampe oder der Sonne) im Raum aus?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Geradlinig in alle Richtungen.',
        'In wellenförmigen Kurven um Hindernisse herum.',
        'Ausschliesslich in die Richtung, in die man blickt.',
        'Kreisförmig und spiralig nach oben.',
      ],
    },
    correctAnswer: 'Geradlinig in alle Richtungen.',
    acceptedAnswers: ['Geradlinig in alle Richtungen.'],
    hints: [
      '💡 Tipp: Denk an die Strahlen einer Taschenlampe im Nebel oder an einen Schattenwurf.',
      '🔑 Hinweis: Lichtstrahlen bewegen sich in homogenen Stoffen (wie Luft) immer auf schnurgeraden Bahnen.',
      '✅ Lösung: Licht breitet sich von einer Lichtquelle geradlinig in alle Richtungen aus.',
    ],
    commonMistake: 'Geglaubt, Licht bewege sich in Kurven oder sei vom Blick des Betrachters abhängig.',
  },
  {
    id: 'w9_dg_102',
    levelId: '9-1',
    type: 'drag-group',
    difficulty: 1,
    prompt: 'Ordne die Eigenschaften und Beispiele den beiden Linsenarten zu:',
    promptLatex: '',
    visual: null,
    interaction: {
      items: [
        'In der Mitte dicker als am Rand',
        'Bündelt parallele Lichtstrahlen im Brennpunkt',
        'In der Mitte dünner als am Rand',
        'Zerstreut einfallende Lichtstrahlen nach aussen',
        'Typisches Beispiel: Lupe oder Mikroskop',
        'Typisches Beispiel: Brille bei Kurzsichtigkeit',
      ],
      groups: [
        { id: 'konvex', label: 'Konvexlinse (Sammellinse)', color: 'hsl(195, 85%, 48%)' },
        { id: 'konkav', label: 'Konkavlinse (Zerstreuungslinse)', color: 'hsl(280, 75%, 58%)' },
      ],
    },
    correctAnswer: {
      konvex: [
        'In der Mitte dicker als am Rand',
        'Bündelt parallele Lichtstrahlen im Brennpunkt',
        'Typisches Beispiel: Lupe oder Mikroskop',
      ],
      konkav: [
        'In der Mitte dünner als am Rand',
        'Zerstreut einfallende Lichtstrahlen nach aussen',
        'Typisches Beispiel: Brille bei Kurzsichtigkeit',
      ],
    },
    acceptedAnswers: [],
    hints: [
      '💡 Suki sagt: Konvex ist bauchig (Sammellinse, Mitte dick), konkav ist wie eine Höhle nach innen gewölbt (Zerstreuungslinse, Mitte dünn)!',
      '🔑 Hinweis: Eine Lupe vergrössert und sammelt Sonnenstrahlen – sie ist in der Mitte spürbar dicker.',
      '✅ Lösung: Konvex = Mitte dicker, bündelt Strahlen, Lupe. Konkav = Mitte dünner, zerstreut Strahlen, Zerstreuungslinse.',
    ],
    commonMistake: 'Konvex und Konkav vertauscht.',
  },
  {
    id: 'w9_mc_103',
    levelId: '9-1',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Was passiert mit parallelen Lichtstrahlen, wenn sie auf eine Konvexlinse (Sammellinse) treffen?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 135" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="40" x2="160" y2="40" stroke="#10b981" stroke-width="2"/>
        <line x1="20" y1="68" x2="160" y2="68" stroke="#10b981" stroke-width="2"/>
        <line x1="20" y1="96" x2="160" y2="96" stroke="#10b981" stroke-width="2"/>
        <ellipse cx="160" cy="68" rx="14" ry="48" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
        <line x1="160" y1="40" x2="280" y2="68" stroke="#10b981" stroke-width="2"/>
        <line x1="160" y1="68" x2="310" y2="68" stroke="#10b981" stroke-width="2"/>
        <line x1="160" y1="96" x2="280" y2="68" stroke="#10b981" stroke-width="2"/>
        <circle cx="280" cy="68" r="4.5" fill="#f43f5e"/>
        <text x="280" y="52" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Brennpunkt F</text>
        <text x="80" y="28" fill="#10b981" font-size="11" font-family="Outfit, sans-serif">Parallele Strahlen</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Sie werden zur optischen Achse hin gebrochen und schneiden sich im Brennpunkt.',
        'Sie werden nach aussen abgelenkt und streben immer weiter auseinander.',
        'Sie treten ungebrochen und parallel durch die Linse hindurch.',
        'Sie werden an der Linsenoberfläche vollständig reflektiert und kehren um.',
      ],
    },
    correctAnswer: 'Sie werden zur optischen Achse hin gebrochen und schneiden sich im Brennpunkt.',
    acceptedAnswers: ['Sie werden zur optischen Achse hin gebrochen und schneiden sich im Brennpunkt.'],
    hints: [
      '💡 Tipp: Schau dir den roten Punkt im Bild an: Was tun die grünen Strahlen hinter der Linse?',
      '🔑 Hinweis: Da die Sammellinse in der Mitte dicker ist, lenkt sie die Randstrahlen nach innen zum gemeinsamen Brennpunkt.',
      '✅ Lösung: Sie werden zur optischen Achse hin gebrochen und schneiden sich im Brennpunkt.',
    ],
    commonMistake: 'Wirkung von Sammellinse und Zerstreuungslinse verwechselt.',
  },
  {
    id: 'w9_mc_104',
    levelId: '9-1',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Was versteht man in der Physik unter dem Begriff «Lichtbrechung»?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Die Richtungsänderung von Licht beim Übergang zwischen zwei verschiedenen durchsichtigen Stoffen (z. B. Luft und Glas).',
        'Das Zurückwerfen von Licht an einer undurchsichtigen, spiegelnden Fläche.',
        'Das vollständige Verschlucken von Lichtstrahlen durch dunkle Gegenstände.',
        'Die Zersplitterung eines Lichtstrahls in unsichtbare Teilchen beim Aufprall.',
      ],
    },
    correctAnswer: 'Die Richtungsänderung von Licht beim Übergang zwischen zwei verschiedenen durchsichtigen Stoffen (z. B. Luft und Glas).',
    acceptedAnswers: ['Die Richtungsänderung von Licht beim Übergang zwischen zwei verschiedenen durchsichtigen Stoffen (z. B. Luft und Glas).'],
    hints: [
      '💡 Suki sagt: Denk an einen Strohhalm im Wasserglas – er sieht an der Wasseroberfläche wie «geknickt» aus!',
      '🔑 Hinweis: Brechung geschieht, weil Licht in Wasser oder Glas langsamer ist als in der Luft.',
      '✅ Lösung: Lichtbrechung ist die Richtungsänderung (Ablenkung) an der Grenzfläche zweier optisch unterschiedlicher Medien.',
    ],
    commonMistake: 'Lichtbrechung mit Reflexion (Spiegelung) oder Absorption (Verschlucken) verwechselt.',
  },
  {
    id: 'w9_do_105',
    levelId: '9-1',
    type: 'drag-order',
    difficulty: 2,
    prompt: 'Bringe die Schritte der Lichtbündelung bei einer Sammellinse in die richtige logische Reihenfolge:',
    promptLatex: '',
    visual: null,
    interaction: {
      items: [
        'Einfallende parallele Strahlen treffen auf die Linsenvorderseite',
        'Lichtstrahlen werden beim Übergang in das dichtere Glas zur Mitte hin gebrochen',
        'Lichtquelle sendet geradlinige Lichtstrahlen aus',
        'Gebrochene Strahlen kreuzen sich hinter der Linse exakt im Brennpunkt',
      ],
      correctOrder: [
        'Lichtquelle sendet geradlinige Lichtstrahlen aus',
        'Einfallende parallele Strahlen treffen auf die Linsenvorderseite',
        'Lichtstrahlen werden beim Übergang in das dichtere Glas zur Mitte hin gebrochen',
        'Gebrochene Strahlen kreuzen sich hinter der Linse exakt im Brennpunkt',
      ],
    },
    correctAnswer: [
      'Lichtquelle sendet geradlinige Lichtstrahlen aus',
      'Einfallende parallele Strahlen treffen auf die Linsenvorderseite',
      'Lichtstrahlen werden beim Übergang in das dichtere Glas zur Mitte hin gebrochen',
      'Gebrochene Strahlen kreuzen sich hinter der Linse exakt im Brennpunkt',
    ],
    acceptedAnswers: [],
    hints: [
      '💡 Tipp: Start bei der Quelle des Lichts, dann zur Linse, dann zum Schnittpunkt.',
      '🔑 Hinweis: Erst tritt das Licht in die Linse ein, wird gebrochen und trifft sich danach im Brennpunkt.',
      '✅ Lösung: 1. Lichtquelle → 2. Auftreffen auf Linse → 3. Brechung im Glas → 4. Kreuzung im Brennpunkt.',
    ],
    commonMistake: 'Brennpunkt vor die Brechung in der Linse einsortiert.',
  },

  // =========================================================================
  // Level 9-2: Aufbau & Bildentstehung im Auge
  // =========================================================================
  {
    id: 'w9_do_201',
    levelId: '9-2',
    type: 'drag-order',
    difficulty: 1,
    prompt: 'Bringe den chronologischen Ablauf des Sehvorgangs von der Lichtquelle bis zum Bild im Gehirn in die richtige Reihenfolge:',
    promptLatex: '',
    visual: null,
    interaction: {
      items: [
        'Licht tritt durch die Pupille und wird an der Augenlinse gebrochen',
        'Licht von der Lichtquelle wird am Gegenstand reflektiert',
        'Sinneszellen senden Impulse ans Gehirn; Bild wird aufrecht verarbeitet',
        'Lichtstrahlen treffen auf die Hornhaut und werden gebrochen',
        'Lichtstrahlen bündeln sich auf der Netzhaut (umgekehrtes Bild)',
      ],
      correctOrder: [
        'Licht von der Lichtquelle wird am Gegenstand reflektiert',
        'Lichtstrahlen treffen auf die Hornhaut und werden gebrochen',
        'Licht tritt durch die Pupille und wird an der Augenlinse gebrochen',
        'Lichtstrahlen bündeln sich auf der Netzhaut (umgekehrtes Bild)',
        'Sinneszellen senden Impulse ans Gehirn; Bild wird aufrecht verarbeitet',
      ],
    },
    correctAnswer: [
      'Licht von der Lichtquelle wird am Gegenstand reflektiert',
      'Lichtstrahlen treffen auf die Hornhaut und werden gebrochen',
      'Licht tritt durch die Pupille und wird an der Augenlinse gebrochen',
      'Lichtstrahlen bündeln sich auf der Netzhaut (umgekehrtes Bild)',
      'Sinneszellen senden Impulse ans Gehirn; Bild wird aufrecht verarbeitet',
    ],
    acceptedAnswers: [],
    hints: [
      '💡 Tipp: Ohne reflektiertes Licht vom Objekt sieht das Auge gar nichts – das ist der erste Schritt!',
      '🔑 Hinweis: Die Hornhaut liegt ganz aussen vor der Pupille und der Linse. Die Netzhaut liegt ganz hinten.',
      '✅ Lösung: Reflexion am Objekt → Hornhaut → Pupille/Linse → Netzhaut → Sehnerv/Gehirn.',
    ],
    commonMistake: 'Hornhaut hinter die Linse sortiert oder Gehirn an den Anfang gesetzt.',
  },
  {
    id: 'w9_mc_202',
    levelId: '9-2',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Welche Eigenschaften hat das Bild, das auf der menschlichen Netzhaut entsteht?',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 340 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Tree object outside -->
        <line x1="45" y1="110" x2="45" y2="40" stroke="#10b981" stroke-width="4"/>
        <polygon points="45,25 25,60 65,60" fill="#10b981"/>
        <text x="45" y="128" fill="#10b981" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Baum (Original)</text>
        <!-- Eye shape -->
        <circle cx="230" cy="70" r="50" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" stroke-width="2"/>
        <ellipse cx="190" cy="70" rx="6" ry="28" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" stroke-width="1.5"/>
        <!-- Inverted miniature tree on retina -->
        <line x1="275" y1="58" x2="275" y2="85" stroke="#f43f5e" stroke-width="2.5"/>
        <polygon points="275,92 265,72 285,72" fill="#f43f5e"/>
        <text x="275" y="112" fill="#f43f5e" font-size="10" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Bild: ?</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Es steht auf dem Kopf (umgekehrt) und ist verkleinert.',
        'Es steht aufrecht und ist genau gleich gross wie das Original.',
        'Es ist spiegelverkehrt, steht aber bereits aufrecht.',
        'Es ist stark vergrössert und farblos.',
      ],
    },
    correctAnswer: 'Es steht auf dem Kopf (umgekehrt) und ist verkleinert.',
    acceptedAnswers: ['Es steht auf dem Kopf (umgekehrt) und ist verkleinert.'],
    hints: [
      '💡 Suki sagt: Schau dir das kleine Bäumchen auf der Netzhaut im Bild an – wohin zeigt seine Spitze?',
      '🔑 Hinweis: Wie bei einer Lochkamera kreuzen sich die Lichtstrahlen beim Durchtritt durch die Linse. Darum steht das Bild kopf und ist viel kleiner als der echte Baum.',
      '✅ Lösung: Auf der Netzhaut entsteht ein umgekehrtes (auf dem Kopf stehendes) und verkleinertes Bild.',
    ],
    commonMistake: 'Geglaubt, das Bild sei bereits auf der Netzhaut aufrecht.',
  },
  {
    id: 'w9_dg_203',
    levelId: '9-2',
    type: 'drag-group',
    difficulty: 2,
    prompt: 'Ordne die anatomischen Bestandteile des Auges ihren spezifischen Aufgaben zu:',
    promptLatex: '',
    visual: null,
    interaction: {
      items: [
        'Hornhaut',
        'Pupille',
        'Augenlinse',
        'Netzhaut',
        'Sehnerv',
      ],
      groups: [
        { id: 'brechung', label: 'Lichtbrechung & Scharfstellung', color: 'hsl(195, 85%, 48%)' },
        { id: 'lichtmenge', label: 'Lichteinfall regulieren (Blende)', color: 'hsl(35, 95%, 55%)' },
        { id: 'signal', label: 'Signalumwandlung & Weiterleitung', color: 'hsl(280, 75%, 58%)' },
      ],
    },
    correctAnswer: {
      brechung: ['Hornhaut', 'Augenlinse'],
      lichtmenge: ['Pupille'],
      signal: ['Netzhaut', 'Sehnerv'],
    },
    acceptedAnswers: [],
    hints: [
      '💡 Tipp: Sowohl die äussere Hornhaut als auch die innere Linse brechen das Licht.',
      '🔑 Hinweis: Die Pupille öffnet und schliesst sich wie eine Fotoblende je nach Helligkeit. Die Netzhaut enthält die Sinneszellen.',
      '✅ Lösung: Hornhaut & Linse brechen; Pupille regelt die Lichtmenge; Netzhaut & Sehnerv wandeln Reize um und leiten sie weiter.',
    ],
    commonMistake: 'Der Pupille eine Brechungsfunktion zugeschrieben (die Pupille ist lediglich die Öffnung der Regenbogenhaut!).',
  },
  {
    id: 'w9_mc_204',
    levelId: '9-2',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Warum sehen wir die Welt aufrecht, obwohl das Bild auf der Netzhaut auf dem Kopf steht?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Weil das Gehirn die elektrischen Nervensignale verarbeitet und das Bild im Sehzentrum wieder aufrecht dreht.',
        'Weil der Glaskörper im Auge das Bild kurz vor dem Sehnerv mechanisch zurückdreht.',
        'Weil sich die Lichtstrahlen im Sehnerv ein zweites Mal kreuzen und so aufrichten.',
        'Weil die Augenmuskeln den Augapfel ständig gegengleich bewegen.',
      ],
    },
    correctAnswer: 'Weil das Gehirn die elektrischen Nervensignale verarbeitet und das Bild im Sehzentrum wieder aufrecht dreht.',
    acceptedAnswers: ['Weil das Gehirn die elektrischen Nervensignale verarbeitet und das Bild im Sehzentrum wieder aufrecht dreht.'],
    hints: [
      '💡 Suki sagt: Sehen findet zu einem grossen Teil im Kopf statt – das Auge liefert nur die Rohdaten!',
      '🔑 Hinweis: Die Sinneszellen senden nur elektrische Impulse (Code). Das Sehzentrum im Grosshirn rekonstruiert daraus das fertige, aufrechte Bild.',
      '✅ Lösung: Das Gehirn verarbeitet die Impulse und dreht das Bild aufrecht.',
    ],
    commonMistake: 'Eine mechanische Drehung im Auge oder im Sehnerv vermutet.',
  },
  {
    id: 'w9_mc_205',
    levelId: '9-2',
    type: 'multiple-choice',
    difficulty: 3,
    prompt: 'Welche Struktur des Auges leistet den GRÖSSTEN Anteil an der gesamten Lichtbrechung beim gesunden Auge?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Die Hornhaut (Cornea), weil hier der grösste Dichteunterschied zwischen Luft und Gewebe vorliegt.',
        'Die Augenlinse, weil sie aus elastischem Muskelgewebe besteht.',
        'Die Pupille, weil sie das Licht wie ein Trichter bündelt.',
        'Der Glaskörper, weil er das grösste Volumen im Auge einnimmt.',
      ],
    },
    correctAnswer: 'Die Hornhaut (Cornea), weil hier der grösste Dichteunterschied zwischen Luft und Gewebe vorliegt.',
    acceptedAnswers: ['Die Hornhaut (Cornea), weil hier der grösste Dichteunterschied zwischen Luft und Gewebe vorliegt.'],
    hints: [
      '💡 Tipp: Lichtbrechung ist dort am stärksten, wo der Übergang am krassesten ist: von Luft in Flüssigkeit/Gewebe.',
      '🔑 Hinweis: Die Hornhaut erbringt rund zwei Drittel der gesamten Brechkraft. Die Linse dient vor allem der Feinabstimmung (Akkommodation).',
      '✅ Lösung: Die Hornhaut erbringt den grössten Brechungsanteil, da an der Grenze von Luft zu Hornhaut der stärkste Brechungsindex-Sprung auftritt.',
    ],
    commonMistake: 'Fälschlicherweise die Augenlinse genannt (die Linse leistet nur ca. 1/3 der Brechkraft für die variable Scharfeinstellung).',
  },

  // =========================================================================
  // Level 9-3: Akkommodation (Nah- & Fernsicht)
  // =========================================================================
  {
    id: 'w9_mc_301',
    levelId: '9-3',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Was versteht man in der Biologie unter dem Begriff «Akkommodation»?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Die dynamische Anpassung der Brechkraft des Auges an nahe oder weit entfernte Gegenstände.',
        'Die Anpassung der Pupillengrösse an Helle und Dunkelheit (Lichtreflex).',
        'Das synchrone Bewegen beider Augäpfel beim Verfolgen eines Objekts.',
        'Die Regeneration der Sehpigmente auf der Netzhaut während des Schlafs.',
      ],
    },
    correctAnswer: 'Die dynamische Anpassung der Brechkraft des Auges an nahe oder weit entfernte Gegenstände.',
    acceptedAnswers: ['Die dynamische Anpassung der Brechkraft des Auges an nahe oder weit entfernte Gegenstände.'],
    hints: [
      '💡 Suki sagt: Denk an den Autofokus deiner Handykamera!',
      '🔑 Hinweis: Akkommodation verändert die Krümmung der Augenlinse, um wahlweise Nah- oder Fernobjekte scharfzustellen.',
      '✅ Lösung: Akkommodation ist die Anpassung der Linsenbrechkraft an verschiedene Entfernungen.',
    ],
    commonMistake: 'Akkommodation (Entfernungseinstellung) mit Adaption (Hell-Dunkel-Anpassung der Pupille) verwechselt.',
  },
  {
    id: 'w9_dg_302',
    levelId: '9-3',
    type: 'drag-group',
    difficulty: 2,
    prompt: 'Ordne die Zustände von Ringmuskel, Linse und Brechkraft den beiden Blickweiten zu:',
    promptLatex: '',
    visual: null,
    interaction: {
      items: [
        'Ringmuskel entspannt',
        'Augenlinse flach gezogen (schwach gewölbt)',
        'Licht muss nur schwach gebrochen werden',
        'Ringmuskel angespannt (kontrahiert)',
        'Augenlinse stark gewölbt (kugelig)',
        'Licht muss stark gebrochen werden',
      ],
      groups: [
        { id: 'ferne', label: 'Blick in die Ferne', color: 'hsl(195, 85%, 48%)' },
        { id: 'naehe', label: 'Blick in die Nähe', color: 'hsl(35, 95%, 55%)' },
      ],
    },
    correctAnswer: {
      ferne: [
        'Ringmuskel entspannt',
        'Augenlinse flach gezogen (schwach gewölbt)',
        'Licht muss nur schwach gebrochen werden',
      ],
      naehe: [
        'Ringmuskel angespannt (kontrahiert)',
        'Augenlinse stark gewölbt (kugelig)',
        'Licht muss stark gebrochen werden',
      ],
    },
    acceptedAnswers: [],
    hints: [
      '💡 Suki sagt: Entspannt ins Weite blicken! Wenn du stundenlang aufs Smartphone starrst, ermüdet der Ringmuskel, weil er dauerhaft ANGESPANNT ist!',
      '🔑 Hinweis: Fernsicht = Ringmuskel entspannt, Linse flach. Nahsicht = Ringmuskel angespannt, Linse kugelig dick.',
      '✅ Lösung: Ferne: Ringmuskel entspannt, Linse flach, schwache Brechung. Nähe: Ringmuskel angespannt, Linse kugelig, starke Brechung.',
    ],
    commonMistake: 'Geglaubt, der Muskel müsse sich für die Ferne anspannen.',
  },
  {
    id: 'w9_mc_303',
    levelId: '9-3',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Was passiert mit der Sicht auf weit entfernte Gegenstände, wenn du deinen Blick auf deinen Daumen (Nahbereich) scharfstellst?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Der Hintergrund in der Ferne erscheint verschwommen und unscharf.',
        'Der Hintergrund bleibt exakt genauso scharf wie der Daumen.',
        'Der Hintergrund verschwindet vollständig aus dem Blickfeld.',
        'Der Hintergrund wird stark vergrössert dargestellt.',
      ],
    },
    correctAnswer: 'Der Hintergrund in der Ferne erscheint verschwommen und unscharf.',
    acceptedAnswers: ['Der Hintergrund in der Ferne erscheint verschwommen und unscharf.'],
    hints: [
      '💡 Suki sagt: Probier es sofort selbst aus! Halte deinen Daumen 15 cm vor die Nase und schau ihn an. Was passiert mit den Dingen im Zimmer dahinter?',
      '🔑 Hinweis: Die Linse kann zu einem Zeitpunkt immer nur eine einzige Distanz exakt auf der Netzhaut fokussieren.',
      '✅ Lösung: Da die Linse für die Nähe stark gekrümmt ist, werden die Strahlen aus der Ferne zu früh gebündelt und erscheinen unscharf.',
    ],
    commonMistake: 'Geglaubt, das menschliche Auge könne Nah- und Fernbereich gleichzeitig gestochen scharf abbilden.',
  },
  {
    id: 'w9_mc_304',
    levelId: '9-3',
    type: 'multiple-choice',
    difficulty: 3,
    prompt: 'Warum ermüden unsere Augen bei stundenlanger Bildschirmarbeit (z. B. Smartphone oder Laptop) viel schneller als beim Spaziergang in der Natur?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Weil der Ringmuskel bei Nahsicht ununterbrochen angespannt sein muss, um die Linse kugelig zu wölben.',
        'Weil das Auge bei Nahsicht den Sehnerv mechanisch abklemmt.',
        'Weil in Innenräumen keine UV-Strahlen auf die Hornhaut treffen.',
        'Weil die Pupille bei Bildschirmlicht dauerhaft vollständig geöffnet bleibt.',
      ],
    },
    correctAnswer: 'Weil der Ringmuskel bei Nahsicht ununterbrochen angespannt sein muss, um die Linse kugelig zu wölben.',
    acceptedAnswers: ['Weil der Ringmuskel bei Nahsicht ununterbrochen angespannt sein muss, um die Linse kugelig zu wölben.'],
    hints: [
      '💡 Tipp: Überlege, welcher Muskelzustand (angespannt oder entspannt) Energie und Haltekraft verlangt.',
      '🔑 Hinweis: Beim Blick in die Ferne (Spaziergang) ist der Ziliarmuskel/Ringmuskel entspannt. Beim Nahsehen arbeitet er im Dauereinsatz.',
      '✅ Lösung: Bei Nahsicht muss der Ringmuskel dauerhaft kontrahieren, um die elastische Linse dick zu wölben. Das führt zu Muskelermüdung.',
    ],
    commonMistake: 'Gedacht, der Fernblick sei anstrengend für die Augenmuskeln.',
  },
  {
    id: 'w9_mc_305',
    levelId: '9-3',
    type: 'multiple-choice',
    difficulty: 3,
    prompt: 'Welche optische Eigenschaft verändert sich direkt, wenn sich die Augenlinse stärker kugelig wölbt?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Ihre Brechkraft nimmt zu (sie bricht das Licht stärker und verkürzt die Brennweite).',
        'Ihre Brechkraft nimmt ab (sie lässt Licht geradliniger passieren).',
        'Die Linse wird lichtundurchlässig und filtert blaue Wellenlängen heraus.',
        'Die Brennweite verdoppelt sich, sodass Strahlen weiter nach hinten wandern.',
      ],
    },
    correctAnswer: 'Ihre Brechkraft nimmt zu (sie bricht das Licht stärker und verkürzt die Brennweite).',
    acceptedAnswers: ['Ihre Brechkraft nimmt zu (sie bricht das Licht stärker und verkürzt die Brennweite).'],
    hints: [
      '💡 Tipp: Je gekrümmter eine Lupe ist, desto stärker lenkt sie Lichtstrahlen ab.',
      '🔑 Hinweis: Stärkere Wölbung = stärkere Lichtablenkung = höhere Brechkraft.',
      '✅ Lösung: Durch die stärkere Wölbung steigt die Brechkraft der Linse, wodurch stark auseinanderstrebende Strahlen aus der Nähe auf der Netzhaut fokussiert werden.',
    ],
    commonMistake: 'Wölbung mit schwächerer Brechung verwechselt.',
  },

  // =========================================================================
  // Level 9-4: Sehfehler & Brillenkorrektur (AM 3.12 & AM 3.13)
  // =========================================================================
  {
    id: 'w9_mc_401',
    levelId: '9-4',
    type: 'multiple-choice',
    difficulty: 1,
    prompt: 'Was ist die anatomische Ursache für Kurzsichtigkeit beim menschlichen Auge?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Der Augapfel ist im Verhältnis zur Brechkraft zu lang gewachsen.',
        'Der Augapfel ist im Verhältnis zur Brechkraft zu kurz gewachsen.',
        'Die Hornhaut ist an mehreren Stellen unregelmässig zerkratzt.',
        'Der Sehnerv leitet elektrische Signale zu langsam an das Gehirn weiter.',
      ],
    },
    correctAnswer: 'Der Augapfel ist im Verhältnis zur Brechkraft zu lang gewachsen.',
    acceptedAnswers: ['Der Augapfel ist im Verhältnis zur Brechkraft zu lang gewachsen.'],
    hints: [
      '💡 Tipp: Denk an Worksheet AM 3.12: Bild 2 zeigt ein in die Länge gezogenes Auge.',
      '🔑 Hinweis: Zu lang = Kurzsichtig (Ferne unscharf). Zu kurz = Weitsichtig (Nähe unscharf).',
      '✅ Lösung: Bei Kurzsichtigkeit ist der Augapfel zu lang.',
    ],
    commonMistake: 'Kurzsichtigkeit mit Weitsichtigkeit vertauscht (gedacht, "kurz" bedeute, der Augapfel sei zu kurz).',
  },
  {
    id: 'w9_mc_402',
    levelId: '9-4',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Prüfungsfalle (Arbeitsblatt AM 3.12b): Warum sieht ein kurzsichtiges Auge weit entfernte Gegenstände unscharf? Wähle die Begründung, die in der Prüfung die volle Punktzahl sichert:',
    promptLatex: '',
    visual: {
      type: 'custom-svg',
      svg: `<svg viewBox="0 0 350 140" style="max-width: 100%; height: auto; display: block; margin: 0 auto;" xmlns="http://www.w3.org/2000/svg">
        <!-- Elongated eyeball -->
        <ellipse cx="255" cy="70" rx="72" ry="46" fill="rgba(56, 189, 248, 0.1)" stroke="#94a3b8" stroke-width="2"/>
        <path d="M 310 38 A 72 46 0 0 1 310 102" fill="none" stroke="#f59e0b" stroke-width="3"/>
        <text x="320" y="30" fill="#f59e0b" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="end">Netzhaut</text>
        <ellipse cx="195" cy="70" rx="6" ry="28" fill="rgba(56, 189, 248, 0.35)" stroke="#38bdf8" stroke-width="1.5"/>
        <line x1="20" y1="52" x2="195" y2="52" stroke="#10b981" stroke-width="2"/>
        <line x1="20" y1="88" x2="195" y2="88" stroke="#10b981" stroke-width="2"/>
        <line x1="195" y1="52" x2="325" y2="82" stroke="#10b981" stroke-width="2"/>
        <line x1="195" y1="88" x2="325" y2="58" stroke="#10b981" stroke-width="2"/>
        <circle cx="285" cy="70" r="4" fill="#f43f5e"/>
        <text x="280" y="55" fill="#f43f5e" font-size="11" font-weight="bold" font-family="Outfit, sans-serif" text-anchor="middle">Brennpunkt ?</text>
      </svg>`,
    },
    interaction: {
      options: [
        'Weil der Augapfel zu lang ist, kreuzen sich die Lichtstrahlen bereits VOR der Netzhaut.',
        'Weil das Auge länglich geformt ist und darum trotz entspannten Ringmuskeln unscharf sieht.',
        'Weil sich die Lichtstrahlen erst HINTER der Netzhaut in einem gemeinsamen Punkt treffen.',
        'Weil die Augenlinse das Licht bei Kurzsichtigkeit überhaupt nicht mehr brechen kann.',
      ],
    },
    correctAnswer: 'Weil der Augapfel zu lang ist, kreuzen sich die Lichtstrahlen bereits VOR der Netzhaut.',
    acceptedAnswers: ['Weil der Augapfel zu lang ist, kreuzen sich die Lichtstrahlen bereits VOR der Netzhaut.'],
    hints: [
      '💡 Suki sagt: Vorsicht vor der Falle! Wiederhole nicht einfach die Frage («ist länglich, darum unscharf»). Schau genau auf den roten Brennpunkt im Strahlengang!',
      '🔑 Hinweis: Der entscheidende Fachbegriff lautet: Wo treffen sich die Strahlen im Verhältnis zur Netzhaut?',
      '✅ Lösung: Da der Augapfel zu lang ist, treffen sich die gebrochenen Strahlen schon VOR der Netzhaut. Auf der Netzhaut kommt nur ein unscharfer Zerstreuungskreis an.',
    ],
    commonMistake: 'Oberflächlich geantwortet («das Auge ist oval/länglich und sieht unscharf») ohne den optischen Mechanismus («Brennpunkt liegt VOR der Netzhaut») zu nennen.',
  },
  {
    id: 'w9_mc_403',
    levelId: '9-4',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Vertiefung (Arbeitsblatt AM 3.13): Mit welcher Linse wird Kurzsichtigkeit korrigiert und warum?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Mit einer Konkavlinse (Zerstreuungslinse), weil sie die Lichtstrahlen vorab leicht streut und so den Brennpunkt nach hinten auf die Netzhaut verschiebt.',
        'Mit einer Konvexlinse (Sammellinse), weil sie die Lichtstrahlen vorab bündelt und den Brennpunkt nach vorne zieht.',
        'Mit einer Zylinderlinse, die das Licht ausschliesslich in horizontaler Richtung spiegelt.',
        'Mit einer Lochblende, die die Pupille künstlich verengt.',
      ],
    },
    correctAnswer: 'Mit einer Konkavlinse (Zerstreuungslinse), weil sie die Lichtstrahlen vorab leicht streut und so den Brennpunkt nach hinten auf die Netzhaut verschiebt.',
    acceptedAnswers: ['Mit einer Konkavlinse (Zerstreuungslinse), weil sie die Lichtstrahlen vorab leicht streut und so den Brennpunkt nach hinten auf die Netzhaut verschiebt.'],
    hints: [
      '💡 Tipp: Die Strahlen treffen sich zu früh (vor der Netzhaut). Brauchen wir eine Linse, die sie noch früher bündelt, oder eine, die sie auseinanderstreut?',
      '🔑 Hinweis: Eine Zerstreuungslinse (Konkavlinse) schwächt die zu starke Brechung ab, sodass die Strahlen weiter hinten landen.',
      '✅ Lösung: Konkavlinse (Zerstreuungslinse) streut die einfallenden Strahlen leicht vor, damit sie sich erst auf der Netzhaut treffen.',
    ],
    commonMistake: 'Sammellinse (Konvex) gewählt – das würde den Brennpunkt noch weiter nach vorne ziehen und die Unschärfe verschlimmern!',
  },
  {
    id: 'w9_mc_404',
    levelId: '9-4',
    type: 'multiple-choice',
    difficulty: 2,
    prompt: 'Vertiefung (Arbeitsblatt AM 3.13): Was ist das Problem bei Weitsichtigkeit und wie wirkt die Korrekturbrille?',
    promptLatex: '',
    visual: null,
    interaction: {
      options: [
        'Augapfel ist zu kurz (Brennpunkt läge hinter der Netzhaut) → Konvexlinse (Sammellinse) bündelt vorab, sodass Strahlen auf der Netzhaut landen.',
        'Augapfel ist zu lang (Brennpunkt liegt vor der Netzhaut) → Konkavlinse zerstreut vorab.',
        'Hornhaut ist ungleichmässig gekrümmt → Schutzbrille gleicht Unebenheiten aus.',
        'Augenlinse bricht das Licht zu stark → Dunkle Sonnenbrille dämpft das Licht.',
      ],
    },
    correctAnswer: 'Augapfel ist zu kurz (Brennpunkt läge hinter der Netzhaut) → Konvexlinse (Sammellinse) bündelt vorab, sodass Strahlen auf der Netzhaut landen.',
    acceptedAnswers: ['Augapfel ist zu kurz (Brennpunkt läge hinter der Netzhaut) → Konvexlinse (Sammellinse) bündelt vorab, sodass Strahlen auf der Netzhaut landen.'],
    hints: [
      '💡 Tipp: Weitsichtig = Augapfel zu kurz. Wo würden sich die Strahlen ohne Brille treffen?',
      '🔑 Hinweis: Hinter der Netzhaut! Um die Strahlen früher zusammenzuführen, braucht man eine Sammellinse (Konvexlinse).',
      '✅ Lösung: Augapfel zu kurz → Brennpunkt hinter Netzhaut → Konvexlinse (Sammellinse) bündelt vorab.',
    ],
    commonMistake: 'Weitsichtigkeit mit Kurzsichtigkeit vertauscht.',
  },
  {
    id: 'w9_dg_405',
    levelId: '9-4',
    type: 'drag-group',
    difficulty: 3,
    prompt: 'Ordne die Sehmerkmale den vier Sehschärfe-Typen zu:',
    promptLatex: '',
    visual: null,
    interaction: {
      items: [
        'Ferne scharf, Nähe scharf (Normale Augapfellänge)',
        'Ferne unscharf, Nähe scharf (Augapfel zu lang)',
        'Ferne scharf, Nähe unscharf (Augapfel zu kurz)',
        'Ferne unscharf, Nähe unscharf (Hornhaut unregelmässig gewölbt)',
      ],
      groups: [
        { id: 'normal', label: 'Normalsichtig', color: 'hsl(160, 75%, 42%)' },
        { id: 'kurz', label: 'Kurzsichtig', color: 'hsl(195, 85%, 48%)' },
        { id: 'weit', label: 'Weitsichtig', color: 'hsl(35, 95%, 55%)' },
        { id: 'astig', label: 'Hornhautverkrümmung', color: 'hsl(280, 75%, 58%)' },
      ],
    },
    correctAnswer: {
      normal: ['Ferne scharf, Nähe scharf (Normale Augapfellänge)'],
      kurz: ['Ferne unscharf, Nähe scharf (Augapfel zu lang)'],
      weit: ['Ferne scharf, Nähe unscharf (Augapfel zu kurz)'],
      astig: ['Ferne unscharf, Nähe unscharf (Hornhaut unregelmässig gewölbt)'],
    },
    acceptedAnswers: [],
    hints: [
      '💡 Suki sagt: Die Bezeichnung sagt dir immer, wo man NOCH scharf sieht: Kurz-sichtig = in kurzer Distanz scharf!',
      '🔑 Hinweis: Wer kurzsichtig ist, sieht nahe Dinge (Buch) prima, aber die Tafel in der Ferne unscharf.',
      '✅ Lösung: Normal = beides scharf; Kurzsichtig = nur nah scharf; Weitsichtig = nur fern scharf; Hornhautverkrümmung = beides verzerrt.',
    ],
    commonMistake: 'Kurzsichtig als "sieht nur kurz scharf" interpretiert.',
  },
];
