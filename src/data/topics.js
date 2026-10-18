/**
 * Topic & Subject Definitions for LottaLEARN
 * High-level subject areas (Sekundarschule Niveau P, Baselland) grouping multiple worlds.
 */

export const SUBJECTS = [
  {
    id: 'mathe',
    name: 'Mathematik',
    emoji: '📐',
    paretoText: 'Mit nur <b>20% gezielten Kern-Mustern</b> (Flächenmodelle, Minusklammern & Binome) löst du <b>80% aller Prüfungsaufgaben</b>! Lerne clever & mit Durchblick statt mit Frust. 🐾',
  },
  {
    id: 'nt',
    name: 'Natur & Technik',
    emoji: '🔬',
    paretoText: 'Mit nur <b>20% gezielten Kern-Mustern</b> (Ursache-Wirkungs-Ketten, Strahlengänge & Gegenspieler-Paare) sicherst du dir <b>80% aller Prüfungspunkte</b>! Achte immer auf die exakten Schlüsselbegriffe. 🐾',
  },
  {
    id: 'geschichte',
    name: 'Geschichte (RZG)',
    emoji: '📜',
    paretoText: 'Mit nur <b>20% gezielten Kern-Mustern</b> (Kausalitätsketten: Ursache → Erfindung → gesellschaftliche Folge sowie die 6 Lösungsansätze der Sozialen Frage) sicherst du dir <b>80% aller Prüfungspunkte</b>! Achte auf die historischen Fachbegriffe. 🐾',
  },
];

export const TOPICS = [
  {
    id: 'terme',
    subjectId: 'mathe',
    name: 'Terme & Termumformungen',
    emoji: '📐',
    colorPrimary: 'hsl(265, 80%, 55%)',
    description: 'Algebraische Ausdrücke verstehen, vereinfachen und umformen.',
    chapter: 'Kapitel 8a',
    worldIds: [1, 2, 3, 4],
    unlocked: true,
  },
  {
    id: 'flaechen',
    subjectId: 'mathe',
    name: 'Flächeninhalt ebener Figuren',
    emoji: '📐',
    colorPrimary: 'hsl(160, 75%, 42%)',
    description: 'Parallelogramm, Dreieck, Trapez, Drachen & Rhombus verstehen, berechnen und anwenden.',
    chapter: 'Kapitel Flächen',
    worldIds: [5, 6, 7, 8],
    unlocked: true,
  },
  {
    id: 'gleichungen',
    subjectId: 'mathe',
    name: 'Gleichungen & Ungleichungen',
    emoji: '⚖️',
    colorPrimary: 'hsl(200, 75%, 50%)',
    description: 'Gleichungen aufstellen, nach x auflösen, Äquivalenzumformungen und knifflige Textaufgaben meistern.',
    chapter: 'Kapitel 9',
    worldIds: [],
    unlocked: false,
  },
  {
    id: 'prozent',
    subjectId: 'mathe',
    name: 'Prozent- & Zinsrechnen',
    emoji: '📊',
    colorPrimary: 'hsl(35, 85%, 55%)',
    description: 'Prozente, Promille, Rabatte, Mehrwertsteuer und Jahreszinsen im Handumdrehen berechnen.',
    chapter: 'Kapitel 6',
    worldIds: [],
    unlocked: false,
  },
  {
    id: 'sinne_optik',
    subjectId: 'nt',
    name: 'Reize, Sinne & Optik',
    emoji: '👁️',
    colorPrimary: 'hsl(195, 85%, 48%)',
    description: 'Licht & Linsen, Bildentstehung im Auge, Akkommodation, Sehfehler, Gehörsinn und Nervensystem.',
    chapter: 'AM 3.12 / 3.13',
    worldIds: [9, 10],
    unlocked: true,
  },
  {
    id: 'revolution',
    subjectId: 'geschichte',
    name: 'Industrielle Revolution',
    emoji: '🚂',
    colorPrimary: 'hsl(25, 90%, 48%)',
    description: 'Vom Zündfunken in England über James Watts Dampfmaschine bis zur Sozialen Frage.',
    chapter: 'RZG 2. Sek',
    worldIds: [11],
    unlocked: true,
  },
];

export function getSubjects() {
  return SUBJECTS;
}

export function getTopicsForSubject(subjectId = 'mathe') {
  return TOPICS.filter((t) => (t.subjectId || 'mathe') === subjectId);
}

export function getTopic(topicId) {
  return TOPICS.find((t) => t.id === topicId) || null;
}

export function getTopicForWorld(worldId) {
  return TOPICS.find((t) => t.worldIds.includes(Number(worldId))) || null;
}

/**
 * Determines the subject ('mathe', 'nt', or 'geschichte') for a given question ID
 * @param {string} questionId
 * @returns {'mathe'|'nt'|'geschichte'}
 */
export function getSubjectForQuestionId(questionId) {
  if (!questionId || typeof questionId !== 'string') return 'mathe';
  if (questionId.startsWith('exam_rzg_') || questionId.startsWith('exam_gesch_')) return 'geschichte';
  if (questionId.startsWith('exam_nt_')) return 'nt';
  if (questionId.startsWith('exam_')) return 'mathe';

  const match = questionId.match(/^w(\d+)_/);
  if (match) {
    const worldId = Number(match[1]);
    const topic = getTopicForWorld(worldId);
    if (topic && topic.subjectId) return topic.subjectId;
    if (worldId === 11) return 'geschichte';
    if (worldId >= 9) return 'nt';
  }
  return 'mathe';
}
