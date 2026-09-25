/**
 * Suki the Cat Mascot — Message Bank for LottaMATH
 * Empathic, playful, and encouraging messages in Swiss-friendly German.
 */

import { getFriendlyPlayerName } from '../engine/profileManager.js';

export const CAT_MESSAGES = {
  greeting: [
    'Miau! Schön, dass du da bist, {name}! 🐾',
    'Schnurr… lass uns heute ein paar Terme zähmen!',
    '*streckt sich* Bereit für dein nächstes Mathe-Abenteuer?',
    'Miau! Zusammen knacken wir jede Aufgabe! ✨',
    'Hey {name}! Ich hab meine Pfoten schon aufgewärmt. 🐱',
    'Schnurr… mit jedem Schritt wirst du sicherer!',
    'Miau! Welches Thema erforschen wir heute? 🐾',
    '*schnurrt leise* Du machst das grossartig!',
    '💡 Sukis 80/20-Tipp: Verstehe die Kern-Muster, und 80% der Prüfung laufen wie von selbst! 🐾',
  ],
  correct: [
    'Purrfekt! 🐱✨',
    'Miau-nifik! Genau richtig!',
    'Schnurr… du bist einfach spitze!',
    '*wedelt begeistert mit dem Schwanz* Richtig! 🐾',
    'Bravo! Das war ein echter Meisterzug!',
    'Miau! Auf direktem Weg zu den 3 Sternen! ⭐',
    'Exakt gelöst! Deine Logik sitzt! 🚀',
    '*macht einen kleinen Freudentanz* Richtig! 🐱',
  ],
  wrong: [
    'Jede Katze landet auf den Pfoten! Versuch\'s nochmal! 🐾',
    'Nicht aufgeben — Fehler machen uns nur schlauer! 💛',
    'Hmm, fast! Schau dir den Tipp an 🐱',
    'Kein Problem! Wir tasten uns Schritt für Schritt heran.',
    '*stupst dich sanft an* Ich glaub an dich, {name}! 🐾',
    'Aus Fehlern lernt man am meisten — weiter geht\'s! 💪',
    'Miau! Nimm dir kurz Zeit und probier es noch einmal.',
    'Fast geschafft! Beim nächsten Mal sitzt es! 🐱',
  ],
  celebration: [
    'MIAU! Alle Sterne abgeräumt! Du bist die Beste! 🎉🐾',
    '*springt vor Freude im Kreis* Was für eine Spitzenleistung! 🏆',
    'Purrfektion! Das war eine absolute Glanzleistung! ⭐⭐⭐',
    'Schnurr… Sek P Meister:in {name} hat wieder zugeschlagen! 👑',
    'Wuff… äh, MIAU! Wahnsinn, wie sicher du das gelöst hast! 🐱',
    'Du hast dieses Thema voll im Griff! Weiter so! 🚀',
  ],
  encouragement: [
    'Übung macht Meister:innen! Ich bin stolz auf dich, {name}! 💛🐾',
    'Schritt für Schritt — wir schaffen das zusammen!',
    'Du hast gekämpft und bist dran geblieben — das zählt! 🐱',
    'Jedes gelöste Rätsel bringt dich weiter! Miau!',
    'Miau! Gleich nochmal probieren — jetzt weisst du wie es geht!',
    '*kuschelt sich an* Nicht entmutigen lassen, du wirst immer besser!',
    '💡 Pareto-Prinzip: Mit den 20% Kern-Regeln holst du 80% der Punkte! Wir packen das! 🐾',
  ],
  thinking: [
    'Gute Frage! Lass mich dir zeigen, wozu man das braucht… 🐱',
    'Hmm, wofür braucht man das im echten Leben? Schau mal! 🐾',
    'Miau! Das ist viel praktischer als du denkst! ✨',
    '*legt den Kopf schief* Mathe steckt überall im Alltag!',
    'Wusstest du schon? Das begegnet dir überall! 💡',
    '💡 80/20-Fokus: Konzentriere dich auf die 3 Kern-Muster, der Rest ergibt sich von alleine! 🐱',
  ],
};

/**
 * Returns a random message from a given category, with {name} replaced
 * by the active profile's nickname.
 * @param {string} category
 * @param {string} [playerName='du']
 * @returns {string}
 */
export function getRandomMessage(category, playerName = 'du') {
  const pool = CAT_MESSAGES[category] || CAT_MESSAGES.greeting;
  const index = Math.floor(Math.random() * pool.length);
  const friendlyName = getFriendlyPlayerName(playerName);

  let msg = pool[index];
  if (friendlyName) {
    msg = msg.replace(/\{name\}/g, friendlyName);
  } else {
    msg = msg
      .replace(/, \{name\}!/g, '!')
      .replace(/Hey \{name\}!/g, 'Hey!')
      .replace(/Sek P Meister:in \{name\}/g, 'Sek P Meister:in')
      .replace(/\{name\}/g, 'du');
  }
  return msg;
}
