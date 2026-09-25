/**
 * Topic Definitions for LottaMATH
 * High-level subject areas (Sekundarschule Niveau P, Baselland) grouping multiple worlds.
 */

export const TOPICS = [
  {
    id: 'terme',
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
    name: 'Prozent- & Zinsrechnen',
    emoji: '📊',
    colorPrimary: 'hsl(35, 85%, 55%)',
    description: 'Prozente, Promille, Rabatte, Mehrwertsteuer und Jahreszinsen im Handumdrehen berechnen.',
    chapter: 'Kapitel 6',
    worldIds: [],
    unlocked: false,
  },
];

export function getTopic(topicId) {
  return TOPICS.find((t) => t.id === topicId) || null;
}

export function getTopicForWorld(worldId) {
  return TOPICS.find((t) => t.worldIds.includes(Number(worldId))) || null;
}
