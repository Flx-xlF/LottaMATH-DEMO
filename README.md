# LottaLEARN 🐾

> **Gamified Multi-Subject Learning Platform for Secondary School & Swiss Gymnasium Preparation**  
> *Built with Vanilla JavaScript, Vite, KaTeX, and a Local-First Sync Architecture.*  
> 
> Built with care (and a bit of madness) by [schema/f](https://github.com/Flx-xlF).  
> Enjoy my work? [Tip me on Ko-fi](https://ko-fi.com/flxxlf)

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-7c4dff?style=flat-square&logo=pwa)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES_Modules-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![KaTeX](https://img.shields.io/badge/KaTeX-LaTeX_Math-00d1b2?style=flat-square)](https://katex.org/)
[![PHP](https://img.shields.io/badge/Backend-PHP_8.x-777BB4?style=flat-square&logo=php)](https://www.php.net/)
[![MariaDB](https://img.shields.io/badge/Database-MariaDB-003545?style=flat-square&logo=mariadb)](https://mariadb.org/)
[![Curriculum](https://img.shields.io/badge/Curriculum-Lehrplan_21_%2F_Gymi-ff6b6b?style=flat-square)](https://v-ef.lehrplan.ch/)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Tip_Me-FF5E5B?style=flat-square&logo=kofi)](https://ko-fi.com/flxxlf)
[![License](https://img.shields.io/badge/License-Proprietary-blue?style=flat-square)](#)

---

## 🎯 The Problem Solved

The transition from primary to secondary school (Sekundarstufe I / Untergymnasium) presents one of the steepest challenges in student confidence. Students abruptly shift from basic facts to abstract reasoning, rigorous scientific chains of causality, and algebraic terms.

Traditional educational software often exacerbates learning anxiety:
1. **Punitiveness over Scaffolding:** Typical multiple-choice drills reward memorization and penalize mistakes with red crosses, discouraging experimentation.
2. **Poor iPad & Classroom Usability:** Clunky desktop interfaces that fail on mobile touchscreens without proper mathematical and interactive input methods.
3. **Data Privacy Barriers:** Requiring student emails, logins, or cloud accounts creates friction and violates strict Swiss school privacy regulations (DSGVO / cantonal school data protection laws).

### 💡 The Solution: LottaLEARN
**LottaLEARN** turns secondary-level learning across Mathematics, Science (*Natur & Technik*), and beyond into an encouraging, tactile adventure. Designed specifically for school iPads and desktop browsers, it introduces:
- **Zero-Friction Privacy:** No emails, no phone numbers, no tracking cookies. Profiles live locally on the device with optional privacy-first cloud synchronization.
- **Error-Friendly Pedagogy:** Mistakes are not penalties — they trigger immediate explanatory feedback, cognitive hints, and are collected in the **«Fehler-Schmiede» (Error-Forge)** for targeted spaced repetition.
- **Suki the Cat:** A lively mascot giving contextual encouragement and celebration based on educational psychology principles (Self-Determination Theory).

---

## ✨ Key Features

### 1. 🗺️ Six Curriculum Worlds (Swiss Lehrplan 21 & Gymi Prep)
- **Welt 1: Ganze Zahlen & Vorzeichen** — Negative numbers, number line navigation, absolute values, rules of signs.
- **Welt 2: Variablen & Terme** — Introducing variables, algebraic substitution, and collecting like terms ($3a + 2b - a$).
- **Welt 3: Terme vereinfachen & Klammern** — Distributive laws, expanding brackets, minus-signs before brackets, factoring.
- **Welt 4: Brüche & Bruchterme** — Fraction arithmetic, common denominators, algebraic fraction simplification.
- **Welt 5: Lineare Gleichungen** — Balance-scale model, step-by-step equivalence transformations ($2x + 5 = 17$).
- **Welt 6: Textaufgaben & Modellieren** — Translating word puzzles into formal equations, geometry and age problems.

### 2. 🧩 Five Diverse Interaction Formats
Moving far beyond generic multiple choice, questions utilize tactile, pedagogically tailored mechanics:
- **Multiple Choice with Misconception Distractors:** Answers reflect real student traps with explanatory breakdowns.
- **Custom Math On-Screen Keyboard:** Full mathematical expression input ($x$, $y$, fractions, exponents, brackets) designed for iPad touchscreens.
- **Drag-and-Drop Term Grouping:** Sort like terms into color-coded buckets with tactile snap animations.
- **Drag-and-Drop Step Sequencing:** Arrange equation-solving steps into correct logical order.
- **Interactive Step-Builder:** Scaffolded multi-step problems guiding the student through sub-calculations.

### 3. 🛡️ Error-Forge («Fehler-Schmiede») & Spaced Repetition
- Any missed problem is automatically routed to the personal **Fehler-Schmiede**.
- Students can replay their specific trouble spots in focused practice rounds until mastered.
- A capped, high-signal cache (100 questions) guarantees fast query performance and positive reinforcement.

### 4. 🔄 Monotonic Cross-Device Cloud Sync
- **Local-First:** Immediate, zero-latency interactions via browser `localStorage`.
- **Background Sync:** Progress (XP, stars, streaks, completed levels) is debounced (2s) and pushed to the MariaDB backend.
- **8-Character Recovery Code (`XXXX-XXXX`):** Link an iPad to a home Mac or restore progress after an iPad reset without an account or email.
- **Monotonic Conflict Resolution:** If two devices sync differing states, algorithms merge highest XP, best scores, and superset achievements — progress is never lost.

### 5. 📱 Optimized iPad Safari PWA & Offline Support
- Fully installable via Safari **«Zum Home-Bildschirm»** (standalone fullscreen mode).
- Offline-ready Service Worker caching: all fonts, formulas, and assets are locally bundled, requiring zero external CDN runtime dependencies.
- Automatic background updates without interrupting active quiz rounds.

### 6. 🏫 Classroom Mode & Monetization Readiness
- **Classroom Password Gate:** Built-in SHA-256 Web Crypto password lock to prevent public access during classroom trials.
- **Freemium Stripe Integration:** Ready for Stripe Checkout with native Swiss payment methods (TWINT & Credit Cards).
- **Kill-Switch Architecture:** The `premium_enforced` switch allows toggling the entire app between 100% free mode and subscription gating instantly.
- **Student Problem Reporter:** Integrated modal allowing students to report confusing formulations or typos directly to a private Discord channel.

---

## 📏 The Golden Rules of Content Creation

### 📐 Mathematics: The 9 Golden Rules
Every mathematical problem, interaction, and visual sketch in LottaLEARN is strictly governed by the **9 Golden Rules of Math Content**, ensuring textbook quality (Swiss *Lehrplan 21* / Gymnasium standard), zero cognitive overload, and bulletproof UI compatibility:

| # | Rule | Core Directive & Pedagogical Purpose |
|---|---|---|
| **1** | **Question Uniqueness & Diversity** *(No Clones)* | Never create identical or cloned tasks (e.g. merely swapping $x$ for $y$ or $5$ for $6$). Every question targets a distinct algebraic pattern, order of operations, or geometric configuration across calibrated difficulty tiers (1–3). |
| **2** | **Mental Math Standard** *(Kopfrechenbare Zahlen)* | Every step—including intermediate dividends and products—must be effortlessly solvable mentally by a 13-year-old student without a calculator or scratchpad. Requires clean integers/halves, even $(a+c)$ sums for trapezoid $\div 2$, and clean factors. |
| **3** | **The 3-Tier Hint Ladder & Strict Boundaries** | Exactly 3 progressive hints with strict information boundaries: **Level 1 (`💡 Tipp`)** = conceptual orientation only; **Level 2 (`🔑 Hinweis`)** = methodological setup/first step (never reveals the final answer); **Level 3 (`✅ Lösung`)** = complete step-by-step resolution; plus a mandatory **`commonMistake`** trap breakdown. |
| **4** | **Visual Scaffolding, SVG Fidelity & Zero Spoilers** | Mandatory visual models (`custom-svg`, `area-model`, `algebra-tiles`). Sketches must maintain proportional integrity and use Unicode (no raw LaTeX in SVG `<text>`). `promptLatex` and sketches must **never** spoil intermediate calculations, decomposed formulas, or variable letters in matching tasks. |
| **5** | **Keyboard Reachability & Permutation Completeness** | `fill-in` and `step-builder` solutions must be 100% typable on the custom iPad math keyboard (only `0-9`, `x`, `y`, `a`, `b`, `²`, `³`, `+`, `-`, `·`, `/`, `,`, `(`, `)`). No other letters, units, or `=` signs. All commutative factor permutations in parentheses must be registered in `acceptedAnswers`. |
| **6** | **Dummy Placeholder Integrity** *(Fill-in)* | The `interaction.placeholder` must never reveal `correctAnswer`, must never equal the `commonMistake` trap value (preventing cognitive anchoring), and must use distinct numbers from a different problem format example. |
| **7** | **Diagnostic Distractor Design** *(Multiple Choice)* | Every multiple-choice task provides 4 options where all 3 distractors map directly to real, predictable student misconceptions (e.g. forgetting $\div 2$, minus-bracket sign flip, perimeter vs. area). All 4 options maintain length and stylistic parity to eliminate test-wiseness guessing. |
| **8** | **Interaction Randomization & Order Integrity** | Options and draggable items must never be authored in solved order in data files. The engine applies dynamic Fisher-Yates shuffling and defensive UI collision detection to prevent trivial positional solutions. |
| **9** | **Swiss Orthography Standard** *(Strictly No «ß»)* | Zero tolerance for the German Eszett («ß»). In Switzerland, standard orthography strictly replaces «ß» with «ss» (or «SS» in uppercase) across all UI elements, task prompts, answers, hints, and explanations. |

### 🔬 Natur & Technik (Science) & RZG (Humanities): The 9 Golden Rules
To maintain the same rigorous Swiss Sekundarschule Niveau P standard across science and humanities:

| # | Rule | Core Directive & Pedagogical Purpose |
|---|---|---|
| **1** | **Complete Causal Chains** *(Ursache → Mechanismus → Auswirkung)* | Explanations must never stop at naming facts. E.g., for Myopia: not just "the eyeball is too long", but "because the eyeball is too long, the focal point forms *in front of* the retina, projecting a blurred circle onto it". |
| **2** | **Taxonomy & Terminology Consistency** | Precise anatomical and scientific naming (e.g. *Ziliarmuskel / Ringmuskel*, *Konvex- / Sammellinse*, *Konkav- / Zerstreuungslinse*, *sensorisch / motorisch*). |
| **3** | **Cognitive Traps & Plausible Distractors** | All 3 multiple-choice distractors embody real student misconceptions (e.g. confusing circular reasoning in AM 3.12b or reversing near/far muscle accommodation). |
| **4** | **3-Tier Pedagogical Hint Ladder** | Tier 1 = Intuitive everyday hook; Tier 2 = Biological/Physical mechanism; Tier 3 = Full exam-grade answer; plus diagnostic `commonMistake`. |
| **5** | **Touch-Optimized Interaction Types** | Strictly utilize `multiple-choice`, `drag-group` (classification), and `drag-order` (chronological stimulus-response or anatomy sequences). Zero typing traps or auto-correct penalties on iPad. |
| **6** | **Anti-Spoiler Visual Schematics** | Anatomical and ray diagrams highlight the phenomenon without giving away the answer text. |
| **7** | **Curriculum & Worksheet Alignment** | Direct mapping to Swiss Lehrplan 21 and Sek P worksheets (e.g. AM 3.12 & AM 3.13 for vision correction). |
| **8** | **Authoring Scramble Integrity** | Question items and options are pre-scrambled in data and shuffled at runtime. |
| **9** | **Swiss Orthography Standard** *(Strictly No «ß»)* | Zero tolerance for «ß». All German terms use «ss» (e.g. *gross*, *schliessen*, *heiss*, *weisse Substanz*, *Russ*, *süss*), adhering to Swiss school standards. |

*(Detailed schemas, code specifications, and the pre-flight verification checklist are documented in [docs/CONTENT_SCHEMA.md](./docs/CONTENT_SCHEMA.md)).*

---

## 🛠️ Architecture & Tech Stack

```
LottaLEARN/
├── api/                    # Lightweight PHP 8 / MariaDB REST API
│   ├── config.php          # Central configuration & fallback defaults
│   ├── db.php              # Singleton PDO database connector
│   ├── sync.php            # Cross-device profile & progress sync endpoint
│   ├── report.php          # Discord Webhook issue reporting endpoint
│   ├── checkout.php        # Stripe Checkout session creator (TWINT / Card)
│   ├── portal.php          # Stripe Customer Portal session endpoint
│   ├── verify.php          # License key validation & rate-limiting endpoint
│   └── webhook.php         # Stripe event webhook listener
├── src/                    # Frontend Application (Vanilla ES Modules)
│   ├── components/         # UI Components (MathKeyboard, Suki, DragDrop, etc.)
│   ├── data/               # World definitions & curated question pools (W1–W10, Mathe & NT)
│   ├── engine/             # Core engines (GameState, QuestionEngine, SyncService)
│   ├── screens/            # Application views (Dashboard, Quiz, Exam, etc.)
│   ├── index.css           # Modern CSS design system with HSL tokens
│   └── main.js             # App controller, hash router, and lifecycle
├── public/                 # Static assets, icons, manifest, service worker
└── vite.config.js          # Build configuration targeting Safari 15+
```

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend Framework** | **Vanilla JS (ES6+)** | Zero framework overhead, ultra-fast load times on school tablets, zero bundle bloat. |
| **Styling** | **Modern Vanilla CSS** | Custom CSS custom properties, HSL color system, glassmorphism, responsive grid. |
| **Formula Engine** | **KaTeX (bundled)** | High-performance, accessible LaTeX math rendering that works 100% offline. |
| **Animations** | **Anime.js** | Micro-interactions, celebratory star triggers, and tactile button feedback. |
| **Touch Gestures** | **SortableJS** | Smooth HTML5 & touch drag-and-drop support on mobile Safari. |
| **Bundler** | **Vite 6** | Instant HMR during development, optimized single-pass Safari 15 target bundle. |
| **Backend API** | **PHP 8.x + PDO** | Stateless, fast, highly compatible with standard Swiss cPanel/cyon.ch hosting. |
| **Database** | **MariaDB** | Normalized tables for licenses, synced profiles, and JSON state blobs (`utf8mb4`). |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and `npm`
- *(Optional for Backend)* PHP 8.1+ & MySQL/MariaDB

### Local Development
```bash
# 1. Clone repository
git clone https://github.com/Flx-xlF/lottamath.git
cd lottamath

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```
Open `http://localhost:3000` in your browser. (The server is also reachable on your local Wi-Fi IP for live iPad testing).

### Production Build
```bash
npm run build
```
Generates the fully optimized static bundle in `dist/`, automatically packaging the `api/` folder alongside web assets.

---

## 🚢 Deployment

The project is structured for 1-click SFTP/FTPS deployment onto standard web hosting environments like **cyon.ch**:

1. Run `npm run build`.
2. Upload the contents of `dist/` to your server's document root (e.g. `/public_html/lottamath.yourdomain.ch/`).
3. In `api/`, create a `config.local.php` file with your MariaDB database credentials.
4. Import `api/schema.sql` and `api/sync_schema.sql` via phpMyAdmin.

*(Detailed step-by-step instructions available in [DEPLOY.md](./DEPLOY.md)).*

---

## 🔒 Privacy & Security

- **Student Protection:** No analytics, tracking pixels, or third-party cookies.
- **Hardened Server Config:** Root and API `.htaccess` files block direct access to `.env`, `composer.json`, and server secrets.
- **Prepared Statements:** All database queries strictly utilize parameterized PDO prepared statements to eliminate SQL injection risks.
- **IP Rate Limiting:** Built-in rate limiting on sync and license validation endpoints protects against brute-force attacks and abuse.

---

## 👨‍💻 Portfolio Highlights & Takeaways

- **Pedagogical Engineering:** Designed from scratch to address psychological hurdles in secondary math education using positive reinforcement and error-tolerant interfaces.
- **Mobile-First Touch Architecture:** Built custom UI components (such as an on-screen LaTeX keypad and touch sorting) to make complex mathematical notation intuitive on tablets.
- **Local-First Data Resilience:** Engineered a monotonic state-merging synchronization model ensuring no lost student work even under unstable classroom Wi-Fi.

---

Built with care (and a bit of madness) by [schema/f](https://github.com/Flx-xlF).  
Enjoy my work? [Tip me on Ko-fi](https://ko-fi.com/flxxlf).

---

*Created with ❤️ for Lotta and every student taking their first steps into the world of algebra.*
