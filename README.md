# 🐾 LottaLEARN (Interactive Demo)

> **Gamified, Privacy-First Multi-Subject Learning Platform for Swiss Secondary School (*Sekundarstufe I, Niveau P*) & Gymnasium Preparation**  
> *Built with Vanilla ES Modules, Vite, bundled KaTeX, Anime.js, SortableJS, and a Local-First PWA Architecture.*
>
> Built with care (and a bit of madness) by [schema/f](https://github.com/Flx-xlF).  
> Enjoy my work? [Tip me on Ko-fi](https://ko-fi.com/flxxlf)

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-F20587?style=flat-square&logo=github)](https://flx-xlf.github.io/LottaMATH-DEMO/)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable-7c4dff?style=flat-square&logo=pwa)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![KaTeX](https://img.shields.io/badge/KaTeX-LaTeX_Math-00d1b2?style=flat-square)](https://katex.org/)
[![Curriculum](https://img.shields.io/badge/Curriculum-Lehrplan_21_%2F_Sek_P-10b981?style=flat-square)](https://v-ef.lehrplan.ch/)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)](./LICENSE)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Tip_Me-FF5E5B?style=flat-square&logo=kofi)](https://ko-fi.com/flxxlf)

---

## 🧭 Live Demo

Explore the interactive, 100% client-side demo directly in your browser or install it on an iPad:  
👉 **[https://flx-xlf.github.io/LottaMATH-DEMO/](https://flx-xlf.github.io/LottaMATH-DEMO/)**

* **Pre-Seeded Demo Profiles:**
  * 🐱 **Lotta** (`LOTA-9K2P`): Level 4 (*Logik-Talent*), 760 XP, 5-day streak, progress across Math Worlds 1–3 and *Optik* (World 9), 1 recorded exam (90%, Grade 5.5), and 2 open items in the *Fehler-Schmiede*.
  * 🦊 **Nico** (`NICO-7M4X`): Level 2 (*Entdecker:in*), 220 XP, 2-day streak, *Natur & Technik* focus with progress across Worlds 1, 9, 10, and 11, and 1 open item in the *Fehler-Schmiede*.
  * ➕ **Your Own Profile:** Create up to 8 isolated local profiles, test device linking with recovery codes (`XXXX-XXXX`), switch seamlessly between subjects, or toggle Dark/Light Mode anytime.
* **Zero Setup Required:** Runs entirely in the browser with `localStorage` persistence and in-browser mocks for cloud sync, issue reporting, and premium gating—all 11 worlds, the *Fehler-Schmiede*, and Exam Mode are unlocked out of the box.

---

## 🎯 Problem & Solution

### The Problem
The transition into Swiss Secondary School (*Sekundarstufe I, Niveau P / Untergymnasium*) introduces a steep jump in cognitive load. Students move rapidly from concrete arithmetic to algebraic structures, geometric proofs, biological causal chains, and historical analysis.

Conventional learning software often compounds this anxiety:
1. **Punitive Drills over Scaffolding:** Multiple-choice drills penalize errors without explaining *why* a misconception happened.
2. **Poor Tablet & Touch Ergonomics:** Standard mobile software keyboards pop up over equations, break algebraic input, and ignore iPad Safari ergonomics.
3. **Mental Math Overload:** Unchecked textbook numbers force multi-digit scratchpad arithmetic instead of letting students focus on structural patterns.
4. **School Privacy Friction:** Requiring student emails, logins, or third-party tracking violates strict Swiss school data-protection expectations.

### The Solution: LottaLEARN
**LottaLEARN** turns secondary-level practice across **Mathematik**, **Natur & Technik**, and **Geschichte (RZG)** into an encouraging, visual-first experience tailored to school iPads and desktop browsers:
- **Zero-PII Local-First Design:** No emails, no passwords required in demo mode, and no analytics or tracking cookies.
- **Error-Friendly Pedagogy (*Lern-Pause* & *Fehler-Schmiede*):** Wrong answers never auto-skip—they pause to diagnose the typical misconception (`commonMistake`), show the step-by-step resolution, and collect the task in a subject-scoped **Fehler-Schmiede** for targeted mastery.
- **Empathetic Mascot (Suki):** An animated inline SVG cat mascot with 5 mood states (`happy`, `excited`, `thinking`, `encouraging`, `celebrating`) and `{name}`-personalized encouragement.

---

## 📚 Curriculum & Learning Worlds (3 Subjects · 11 Worlds · 55 Levels · 366 Questions)

The dashboard includes a mobile-friendly horizontal **Subject Switcher** (with Pareto 80/20 Strategy Cards per subject) covering **11 playable Worlds** (4 practice levels + 1 Boss level each = **55 levels**), **276 world questions**, and **90 dedicated exam-pool questions**:

### 📐 Mathematik (8 Worlds · 203 World Questions + 50 Exam Questions)
* **Thema 1 — Terme & Termumformungen *(Kapitel 8a)*:**
  * **Welt 1 — Terme Basics** *(36 Fragen)*: Was ist ein Term?, Terme erkennen, Gleichartige Terme, Terme zusammenfassen, Boss: *Terme-Meister*
  * **Welt 2 — Ausmultiplizieren** *(36 Fragen)*: Das Distributivgesetz, Einfach ausmultiplizieren, Klammern mit Minus, Doppelte Klammern, Boss: *Klammer-König*
  * **Welt 3 — Ausklammern** *(33 Fragen)*: Gemeinsame Faktoren, Zahlen ausklammern, Variablen ausklammern, Gemischt ausklammern, Boss: *Faktor-Fuchs*
  * **Welt 4 — Binomische Formeln** *(35 Fragen)*: 1. Binomische Formel, 2. Binomische Formel, 3. Binomische Formel, Formeln rückwärts, Boss: *Binom-Bändiger*
* **Thema 2 — Flächeninhalt ebener Figuren *(Kapitel Flächen)*:**
  * **Welt 5 — Formeln & Berechnen** *(23 Fragen)*: Das Parallelogramm, Das Dreieck & 3 Höhen, Das Trapez, Drachen & Rhombus, Boss: *Formel-Meister*
  * **Welt 6 — Umformen & Koordinaten** *(17 Fragen)*: Umkehrformeln (Dreieck, Parallelogramm, Trapez & Drachen), Figuren im Koordinatensystem, Einheiten umrechnen, Boss: *Algebra- & Gitter-Profi*
  * **Welt 7 — Zusammengesetzte Flächen** *(12 Fragen)*: Additive Zerlegung, Subtraktive Ergänzung (Restfläche), Schmuckfiguren & Sterne, Vielecke im Gitter, Boss: *Puzzle-Architekt*
  * **Welt 8 — Reale Sachaufgaben** *(11 Fragen)*: Grundstücke & Glaserarbeiten, Terrassen & Böschungen, Dachdecker & Verschnitt, Maler & Bodenleger, Boss: *Der Generalunternehmer*
* *Roadmap Teasers shown in UI (`🔒 Demnächst`):* **Gleichungen & Ungleichungen** *(Kapitel 9)* and **Prozent- & Zinsrechnen** *(Kapitel 6)*.

### 🔬 Natur & Technik (2 Worlds · 40 World Questions + 20 Exam Questions)
* **Thema — Reize, Sinne & Optik *(AM 3.12 / 3.13)*:**
  * **Welt 9 — Sehsinn & Optik** *(20 Fragen)*: Licht & Linsenarten, Aufbau & Bildentstehung, Akkommodation (Nah & Fern), Sehfehler & Brillenkorrektur, Boss: *Optik-Meisterprüfung*
  * **Welt 10 — Gehörsinn & Nervensystem** *(20 Fragen)*: Aufbau & Funktion des Ohrs, Räumliches Hören & Schäden, Wahrnehmung & Reizleitung, Bewusste Reaktion vs. Reflex, Boss: *Sinne & Nerven Finale*

### 📜 Geschichte (RZG) (1 World · 33 World Questions + 20 Exam Questions)
* **Thema — Industrielle Revolution *(RZG 2. Sek)*:**
  * **Welt 11 — Industrielle Revolution** *(33 Fragen)*: Start & Zündfunken in England, Dampfmaschine & technischer Wandel, Fabrikalltag & Schattenseiten, Die Soziale Frage & 6 Akteure, Boss: *Meister der Industrialisierung*

---

## ✨ Key Capabilities

### 1. 🧩 Five Tactile Question Formats & Custom Math Keyboard
All 366 questions are authored across five interaction modes tailored to touchscreens:
- **Multiple Choice (`multiple-choice`, 192 questions):** 4 options built around real student misconceptions, shuffled dynamically via Fisher-Yates.
- **Custom Math Keyboard (`fill-in`, 115 questions):** Touch-friendly iPad keypad (`0–9`, `x`, `y`, `a`, `b`, `²`, `³`, `+`, `−`, `·`, `/`, `,`, `(`, `)`) with live KaTeX preview, full physical keyboard support on desktop, algebraic expression normalization (`normalizeExpression`), and zero OS software-keyboard popups.
- **Drag-to-Group (`drag-group`, 33 questions):** `SortableJS` touch-tuned categorization buckets with defensive collision checks preventing trivial 1:1 ordering.
- **Drag-to-Order (`drag-order`, 13 questions):** Sequential sorting of algebraic steps, optical/neural pathways, or historical causal chains with anti-spoiler pre-scrambling.
- **Interactive Step-Builder (`step-builder`, 13 questions):** Guided multi-step solving that validates each sub-step with per-step tips before accepting the final result.

### 2. 🎨 Visual Math Models & Anime.js Geometric Derivations
Every world opens with a multi-tab **Real-World Intro** (`worldIntro.js`) and offers level **Tutorial Cards** (`tutorial.js`) featuring Pareto 80/20 exam rules and 4 visual model renderers (`visualMath.js` & `animatedVisuals.js`):
- **Area Models (`area-model`)** for distributive law and binomial grids.
- **Algebra Tiles (`algebra-tiles`)** for positive/negative term tiles ($x^2$, $x$, $1$).
- **Custom SVG Schematics (`custom-svg`)** for geometry sketches, coordinate grids, optical ray diagrams, ear/eye anatomy, and historical infographics (66 in-question visuals + intro visuals).
- **Looping Anime.js Proofs (`animated-svg`)** for visual derivations: `binom-expansion`, `binom-subtraction`, `binom-diff-squares`, `parallelogram-shear`, `triangle-split`, and `l-shape-split`.

### 3. 💡 3-Tier Hint Ladder & Subject-Scoped *Fehler-Schmiede*
- **Non-Punitive Hints (`hintPanel.js`):** Every question provides a 3-tier progressive hint ladder (`💡 Tipp` → `🔑 Hinweis` → `✅ Lösung`) plus a `commonMistake` callout (10 XP when solved without hints, 5 XP with hints).
- **Lern-Pause:** Incorrect answers halt auto-advance, display the exact misconception trap and step-by-step solution, and route the question into the student's **Fehler-Schmiede**.
- **Subject-Scoped Mistake Vault (`#/vault`):** Tracks up to 100 active mistakes (plus 200 resolved tombstones) filtered by the active subject (*Mathematik*, *Natur & Technik*, or *Geschichte*) and awards a **+15 XP** mastery bonus per resolved question.

### 4. 🎯 Timed Exam Simulation (`#/exam`)
- **5 Selectable Exam Scopes:** *Mathe: Flächeninhalt*, *Mathe: Terme*, *NT: Reize, Sinne & Optik*, *Geschichte: Industrielle Revolution*, or *Mathe: Gesamter Stoff gemischt*.
- **Realistic Conditions:** 20 randomized questions drawn from the dedicated 90-question `examPool.js` under a 20-minute (`1200s`) countdown.
- **Swiss Grading Scale:** Calculates $\text{Note} = \frac{\text{Score}}{100} \cdot 5 + 1$ rounded to quarter grades (`1.00` to `6.00`, `4.00` = *Genügend*), triggers confetti for `>= 4.50`, records `examHistory`, and lists every missed task with user input vs. expected answer.

### 5. 🔄 Local-First Multi-Profile Architecture & Sync Simulation
- **Multi-User Profile Isolation (`profileManager.js`):** Up to 8 isolated profiles per browser (`lottamath_profile_<id>_state`), with duplicate-name ordinals (`①`, `②`, ...), long-press / right-click management (rename, sync modal, delete confirmation), and zero cross-profile state leakage.
- **Deterministic 8-Char Recovery Codes (`XXXX-XXXX`):** Generated with an unambiguous character alphabet (`RECOVERY_ALPHABET`) and flexible input normalization (`normalizeRecoveryCode` handling spaces and Unicode dashes).
- **Monotonic Merge Engine (`syncService.js` -> `mergeStates`):** Combines state without progress loss using generation epochs (for clean intentional resets), `Math.max` for XP/stars/bestScore/attempts, set unions for achievements and seen intros, timestamp-reconciled Mistake Vault / tombstone resolution, and deduplicated exam history.
- **Serverless Demo Mock:** In this GitHub Pages demo, `syncService.js` routes `register`, `push`, `pull`, `lookup`, `update_profile`, and `delete` actions through an in-browser `mockFetch` backed by `localStorage`.

### 6. 📱 iPad Safari PWA & Safe-Point Updates
- **Offline-Capable Service Worker (`public/sw.js`, cache `lottalearn-v18`):** Network-first strategy for HTML/navigation requests and cache-first with background revalidation for static hashed assets; all KaTeX JS/CSS/fonts, Anime.js, and SortableJS are locally bundled in `dist/`. *(Note: `index.html` links optional Google Fonts stylesheets for Inter/Outfit with system fallbacks).*
- **Safe-Point Background Updates (`updateManager.js`):** New Service Worker versions wait until the student returns to the Dashboard before activating (`SKIP_WAITING`), preventing mid-quiz reloads.
- **Cross-Browser Install Banner (`main.js`):** Detects `beforeinstallprompt` on Chromium/Android or guides iOS/macOS Safari users to *«Zum Home-Bildschirm»* / *«Zum Dock hinzufügen»* with a 3-day dismiss cooldown.

### 7. 🧪 Demo Mode Behavior vs. Production Scaffolding
To make this public repository run cleanly as a static site on GitHub Pages while preserving the full app UX:
- **Classroom Password Gate (`authGate.js`):** Included in source (`SHA-256` Web Crypto lock) and bypassed at boot in `src/main.js` for instant demo access.
- **Freemium / Premium UI (`subscriptionManager.js`, `upgrade.js`, `subscriptionSuccess.js`):** `verifySubscription()` returns `demo-all-access` with `premiumEnforced: false` so every world, vault, and exam mode is open; the upgrade screen demonstrates the Swiss pricing & payment UI (`CHF 4.90/mo`, `CHF 39.00/yr`, TWINT / Cards / Apple Pay / Google Pay).
- **Problem Reporter (`quiz.js` -> *Aufgabe melden*):** Opens the full issue-reporting modal and simulates a successful submission locally without posting to an external webhook.

---

## 📐 Autonomous Chapter Generation & The Golden Rule Sets

A central architectural feature of **LottaLEARN** is its curriculum compilation workflow, governed by strict **Golden Rule Sets** documented in [`docs/CONTENT_SCHEMA.md`](./docs/CONTENT_SCHEMA.md) and [`.agents/rules/`](./.agents/rules/question_design_and_interactions.md).

```
  ┌────────────────────────────────┐         ┌───────────────────────────────┐
  │        Curriculum Input        │         │       LottaLEARN Engine       │
  │ • Learning objectives (Ziele)  │ ──────> │     [ 9 Golden Rule Sets ]    │
  │ • Theoretical explanations     │         │ • Pedagogical structure       │
  │ • Example tasks & calculations │         │ • Cognitive load constraints  │
  └────────────────────────────────┘         └───────────────┬───────────────┘
                                                             │
                                                             ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │                         Generated Learning World                         │
  │  • Real-world intro scenarios     • Vector SVG & Anime.js derivations    │
  │  • 5 interactive question types   • 3-tier hints & misconception traps   │
  │  • Mental-math calibrated numbers • Bundled KaTeX & Swiss orthography    │
  └──────────────────────────────────────────────────────────────────────────┘
```

### 📐 Mathematics: The 9 Golden Rules

| # | Rule | Core Directive & Pedagogical Purpose |
|---|---|---|
| **1** | **Question Uniqueness & Diversity** *(No Clones)* | Every question targets a distinct algebraic pattern, operation order, or geometric configuration across difficulty tiers `1–3`—never just swapping variable letters or digits. |
| **2** | **Mental Math Standard** *(Kopfrechenbare Zahlen)* | Every intermediate step (including $2A \div h$ in inverse formulas and $(a+c)$ sums in trapezoids) must be effortlessly solvable mentally by a 13-year-old without a calculator or scratchpad. |
| **3** | **3-Tier Hint Ladder & Trap Diagnostics** | Exactly 3 progressive hints (`💡 Tipp` → `🔑 Hinweis` → `✅ Lösung`) plus a mandatory `commonMistake` explanation. Animated hints are reserved for on-demand hints/intros to prevent overload. |
| **4** | **Visual Scaffolding & Zero Spoilers** | Mandatory `realWorldIntro` visuals and geometry sketches (`custom-svg`, `area-model`, `algebra-tiles`, `animated-svg`) that keep coordinates consistent and never spoil solutions or matching-task variable letters. |
| **5** | **Keyboard Reachability & Permutations** | `fill-in` and `step-builder` answers use only keys present on `mathKeyboard.js` (`0–9`, `x`, `y`, `a`, `b`, `²`, `³`, `+`, `−`, `·`, `/`, `,`, `(`, `)`) with factor permutations registered in `acceptedAnswers`. |
| **6** | **Dummy Placeholder Integrity** | `interaction.placeholder` must never reveal `correctAnswer` or match `commonMistake`, using a distinct format example instead. |
| **7** | **Diagnostic Distractor Design** | All 3 distractors in `multiple-choice` map to realistic student traps (sign flips, missing $\div 2$, perimeter vs. area) with length and stylistic parity. |
| **8** | **Randomization & Anti-Spoiler Order** | Choices and drag items are pre-scrambled in data, shuffled via Fisher-Yates in `questionEngine.js`, and guarded against 1:1 solved alignment in `quiz.js`. |
| **9** | **Swiss Orthography Standard** *(No Eszett)* | Strict Swiss German spelling across all UI strings, prompts, hints, and docs: always write `ss` / `SS` (e.g., *gross*, *schliessen*, *Massstab*, *Fuss*) and never the German Eszett glyph. |

### 🔬 Natur & Technik & RZG: The 9 Golden Rules

| # | Rule | Core Directive & Pedagogical Purpose |
|---|---|---|
| **1** | **Complete Causal Chains** *(Ursache → Mechanismus → Auswirkung)* | Explanations must connect anatomical/physical cause through mechanism to observable effect (avoiding circular descriptions). |
| **2** | **Sek P Terminology & Taxonomy** | Strict curriculum terminology across Eye & Vision (*Ziliarmuskel*, *Akkommodation*, *Konvex-/Konkavlinse*), Ear & Nervous System (*Cochlea*, *sensorisch/motorisch*, *Reflexbogen*), and RZG History. |
| **3** | **Diagnostic 3-Trap Distractors** | Distractors capture opposite mechanisms, circular descriptions, and category/anachronism confusions. |
| **4** | **3-Tier Pedagogical Hint Ladder** | Everyday intuitive hook → biological/physical/historical principle → exam-grade answer, plus `commonMistake`. |
| **5** | **Touch-Optimized Interaction Types** | Science and Humanities use `multiple-choice`, `drag-group`, and `drag-order` to avoid mobile keyboard/spelling traps. |
| **6** | **Anti-Spoiler Visual Schematics** | Anatomical, ray, and schematic SVGs clarify mechanisms without printing the answer text directly into the diagram. |
| **7** | **Curriculum & Worksheet Alignment** | Direct alignment with *Lehrplan 21* Sek P materials (including *Natur & Technik* worksheets AM 3.12 / 3.13 and RZG Industrial Revolution). |
| **8** | **Pre-Scrambled Data & Shuffled Delivery** | Pool items and options are stored pre-scrambled and dynamically randomized at runtime. |
| **9** | **Swiss Orthography Standard** *(No Eszett)* | Zero Eszett across all science and humanities texts—strictly `ss` / `SS` (e.g., *Grosshirn*, *weisse Substanz*, *heiss*, *Russ*, *süss*). |

*(Full technical schemas, SVG guidelines, and authoring rules live in [`docs/CONTENT_SCHEMA.md`](./docs/CONTENT_SCHEMA.md), [`.agents/rules/question_design_and_interactions.md`](./.agents/rules/question_design_and_interactions.md), and [`.agents/rules/swiss_orthography.md`](./.agents/rules/swiss_orthography.md)).*

---

## 🛠️ Architecture & Tech Stack

```
LottaMATH-DEMO/
├── .agents/rules/                # Agent authoring & Swiss orthography guardrails
├── .github/workflows/deploy.yml  # GitHub Actions → GitHub Pages CI/CD pipeline (Node 22)
├── docs/CONTENT_SCHEMA.md        # Pedagogy, Golden Rules & JSON schemas
├── public/                       # Manifest, app icons, .htaccess, Service Worker (sw.js)
├── src/
│   ├── components/               # UI widgets (mathKeyboard, visualMath, animatedVisuals,
│   │                             #   dragDrop, catMascot, hintPanel, profilePicker, authGate, …)
│   ├── data/
│   │   ├── questions/            # Curated banks: world1.js–world11.js + examPool.js
│   │   ├── achievements.js       # 16 achievement definitions & evaluator
│   │   ├── catMessages.js        # Suki mascot dialogue pools with {name} interpolation
│   │   ├── topics.js             # 3 subjects (mathe, nt, geschichte) & 6 topic definitions
│   │   └── worlds.js             # 11 world definitions, realWorldIntro tabs & 55 levels
│   ├── engine/                   # Core logic: gameState, questionEngine, hintEngine,
│   │                             #   profileManager, syncService (demo mock + mergeStates),
│   │                             #   subscriptionManager (demo bypass), updateManager
│   ├── screens/                  # Views: dashboard, worldIntro, levelSelect, tutorial,
│   │                             #   quiz, results, exam, upgrade, subscriptionSuccess
│   ├── index.css                 # Custom CSS design system (HSL tokens, glassmorphism, themes)
│   └── main.js                   # App controller, hash router & PWA install banner
├── index.html                    # Entry HTML & iOS/PWA meta tags
├── package.json                  # Dependencies & Vite scripts
└── vite.config.js                # Vite 6 config (base: './', target: 'safari15')
```

| Layer | Technology | Purpose |
|---|---|---|
| **UI & Routing** | **Vanilla JS (ES Modules)** | Zero framework overhead, fast startup on school tablets, clean hash router |
| **Design System** | **Modern Vanilla CSS** | Custom HSL variables, glassmorphic cards, responsive grids, Dark/Light themes |
| **Math Typesetting** | **KaTeX (`^0.16.21`, bundled)** | Fast inline and display LaTeX math rendering with locally bundled fonts |
| **Vector Animations** | **Anime.js (`^4.5.0`)** | Looping SVG geometric derivations (`animatedVisuals.js`) and UI feedback |
| **Touch Drag & Drop** | **SortableJS (`^1.15.6`)** | Fallback-enabled touch sorting on mobile Safari for `drag-group` and `drag-order` |
| **Build & Tooling** | **Vite (`^6.3.5`)** | Instant HMR dev server and Safari 15+ production bundle in `dist/` |
| **Hosting & CI/CD** | **GitHub Actions & Pages** | Automated build & deployment via [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) |

---

## 🚀 Local Development & Build

### Prerequisites
- **Node.js** 18+ (CI uses Node 22) and `npm`

### Commands
```bash
# 1. Clone the repository
git clone https://github.com/Flx-xlF/LottaMATH-DEMO.git
cd LottaMATH-DEMO

# 2. Install dependencies
npm install

# 3. Start local development server (exposes LAN IP via host: true for live iPad testing)
npm run dev

# 4. Create production build in dist/
npm run build

# 5. Preview production build locally
npm run preview
```
Open `http://localhost:3000` in your browser (or connect from an iPad on the same Wi-Fi network using Vite's Network URL).

---

## 🔒 Privacy & Client-Side Safety

- **No Tracking or Cookies:** Zero third-party analytics, tracking pixels, or advertising cookies.
- **No PII Required:** Student profiles store only a chosen nickname, avatar emoji, recovery code, and learning progress locally in `localStorage`.
- **XSS Hardening:** User-provided profile nicknames are HTML-escaped via `textContent` before rendering in pickers and dashboard headers.

---

## 📄 License & Attribution

Distributed under the **[MIT License](./LICENSE)** (`Copyright (c) 2026 schema/f`).

Built with care (and a bit of madness) by [schema/f](https://github.com/Flx-xlF).  
Enjoy my work? [Tip me on Ko-fi](https://ko-fi.com/flxxlf).

---

*Created with ❤️ for Lotta and every student mastering secondary-school math, science, and history.*
