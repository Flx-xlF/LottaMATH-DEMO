# 🐾 LottaMATH (Demo)

> Gamified, privacy-first math learning platform tailored for Swiss Secondary School (Sekundarstufe I, Niveau P). Built with interactive SVG visual models, live LaTeX rendering, custom touch keyboard, and local-first progress tracking.

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-F20587?style=flat-square&logo=github)](https://flx-xlf.github.io/LottaMATH-DEMO/)
[![Bundle Size](https://img.shields.io/badge/Bundle-<250_kB_gzipped-black?style=flat-square)](https://flx-xlf.github.io/LottaMATH-DEMO/)
[![PWA](https://img.shields.io/badge/PWA-Installable-blue?style=flat-square)](https://flx-xlf.github.io/LottaMATH-DEMO/)
[![Curriculum](https://img.shields.io/badge/Lehrplan-21_Sekundarstufe_I-10b981?style=flat-square)](https://flx-xlf.github.io/LottaMATH-DEMO/)
[![License: MIT](https://img.shields.io/badge/License-MIT-lightgrey?style=flat-square)](LICENSE)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-Tip_Me-FF5E5B?style=flat-square&logo=kofi)](https://ko-fi.com/flxxlf)

---

## 🧭 Live Demo

Explore the fully interactive, client-side demo directly in your browser:  
👉 **[https://flx-xlf.github.io/LottaMATH-DEMO/](https://flx-xlf.github.io/LottaMATH-DEMO/)**

* **Pre-seeded Demo Profiles:**
  * 🐱 **Lotta:** Level 4 (*Algebra-Talent*), 680 XP, 5-day streak, Worlds 1–3 completed with 3 stars, and 2 active items in the *Fehler-Schmiede*.
  * 🦊 **Nico:** Level 2 (*Entdecker:in*), 140 XP, World 1 completed.
  * ➕ **Your Own Profile:** Create your own profile or reset progress anytime.
* **100% Client-Side:** Runs completely in your browser with `localStorage` persistence. No server setup, no registration, and no tracking.

---

## 📐 Autonomous Chapter Generation: The "Golden Rule Set"

A central architectural feature of **LottaMATH** is its pedagogical compilation pipeline, governed by a strict **"Golden Rule Set"**.

Instead of hand-coding every individual exercise, UI interaction, and diagram for a new syllabus topic, the pipeline accepts raw curriculum material and automatically synthesizes cohesive, classroom-ready learning chapters.

```
  ┌────────────────────────────────┐         ┌───────────────────────────────┐
  │        Curriculum Input        │         │        LottaMATH Engine       │
  │ • Learning objectives (Ziele)  │ ──────> │      [ Golden Rule Set ]      │
  │ • Theoretical explanations     │         │ • Pedagogical structure       │
  │ • Example tasks & calculations │         │ • Cognitive load constraints  │
  └────────────────────────────────┘         └───────────────┬───────────────┘
                                                             │
                                                             ▼
  ┌──────────────────────────────────────────────────────────────────────────┐
  │                         Generated Learning World                         │
  │  • Real-world intro scenarios     • Vector SVG sketches & area models    │
  │  • Multi-modal question types     • 3-tier hints & mistake explanations  │
  │  • Calibrated mental math numbers • Formatted KaTeX mathematical terms   │
  └──────────────────────────────────────────────────────────────────────────┘
```

### 📥 Inputs
The pipeline works with standard curriculum resources:
* **Learning Objectives (*Lernziele*):** Standard competencies (such as Swiss *Lehrplan 21*, Sekundarstufe I).
* **Theory & Concepts:** Explanations, definitions, and formula derivations.
* **Sample Calculations & Tasks:** Representative exercises, parameter sets, and step sequences.

### ⚙️ What the System Generates
Governed by the rule set, the pipeline translates the input into complete interactive chapters:

* 📖 **Contextual Introductions:** Real-world scenarios grounded in everyday student experiences (e.g., game scoring, mobile subscriptions, discounts, room planning) that frame the concept before introducing formal notation.
* 📐 **Visual Models & SVG Sketches:** Programmatically generated geometric sketches, area models (*Rechteckmodelle*), coordinate grids, and visual proofs—with consistent dimensions and anti-spoiler labeling.
* 🧩 **Differentiated Question Sets:** A balanced mix of question formats (Multiple Choice, Touch Keypad Fill-in, Drag-to-Group categorization, Drag-to-Order step sequencing, and Multi-Step Builders) while preventing near-duplicate clones.
* 🧠 **Calibrated Mental Math:** Values and intermediate steps are constrained to numbers that are straightforward to calculate mentally, keeping the student's working memory focused on algebraic and geometric structure.
* 🪜 **Scaffolded 3-Tier Hints:** Progressive guidance (conceptual prompt $\rightarrow$ methodological clue $\rightarrow$ complete solution path), accompanied by explanations of common pitfalls (*Fehler-Fallen*).
* 🛡️ **Anti-Spoiler Integrity:** Defensive pre-scrambling of choices, secured placeholders, and runtime shuffling to prevent answer guessing based on UI layout.
* ✍️ **Standard KaTeX Typesetting:** Clean typography for all mathematical terms, fractions, exponents, and Swiss notation conventions.
* 🎯 **Review Cards & Exam Pools:** High-yield summary cards and randomized, timed mock exam pools aligned with Swiss grading scales (1.0–6.0).

> [!NOTE]
> **Curriculum to Code:** The rule set standardizes quality across topics, translating raw teaching goals into consistent, interactive web exercises without manual per-question scripting.

---

## ✨ Key Features

### 1. 📐 Aligned with Swiss Curriculum (Lehrplan 21 / Sekundarstufe I)
* **Part 1 — Algebra & Terme:**
  * **World 1:** Terme & Variablen verstehen *(Grundregeln, Zusammenfassen)*
  * **World 2:** Klammern auflösen & Distributivgesetz *(Ausmultiplizieren, Minusklammern)*
  * **World 3:** Binomische Formeln *(Binom 1, 2, 3 vorwärts & rückwärts)*
  * **World 4:** Faktorisieren & Ausklammern *(Ausklammern, Binome erkennen)*
* **Part 2 — Geometrie & Flächen (Thema 2):**
  * **World 5:** Rechtecke & Quadrate *(Umfang, Fläche, Flächenzerlegung)*
  * **World 6:** Parallelogramme & Rauten *(Grundlinie $\cdot$ Höhe)*
  * **World 7:** Dreiecke & Trapeze *($\frac{g \cdot h}{2}$ & Mittelparallele)*
  * **World 8:** Reale Sachaufgaben *(Verschnitt, Wandfarben, Rabatte, Materialkosten)*

### 2. ⌨️ Touch-Optimized Math Keyboard & Live KaTeX
* Tailored for school iPads and mobile touchscreens with $\ge 48\text{px}$ touch targets.
* Mathematical symbols ($x, y, a, b, ^2, ^3, \cdot, /, -, +$) without triggering irritating system software keyboards.
* Live typographic LaTeX rendering with KaTeX.

### 3. 🧩 Interactive Question Types & Step Builders
* **Multiple Choice:** Quick conceptual checks with randomized options.
* **Math Keypad Input:** Exact algebraic term matching and smart simplification.
* **Drag-to-Group & Drag-to-Order:** Interactive sorting of equivalent expressions and calculation steps.
* **Step-by-Step Builders:** Guiding students methodically through complex multi-step problems.

### 4. 🐱 Suki Mascot & Gamification
* Real-time mood reactions, confetti celebrations, and encouraging feedback in Swiss German/Standard German tone.
* Level progression from *Anfänger:in* up to *Mathe-König:in*, achievement trophies, and streaks.

### 5. 🛠️ Fehler-Schmiede (Mistake Vault)
* Questions answered incorrectly automatically land in the student's personal vault for targeted spaced repetition.
* Solved questions are tombstoned and archived.

### 6. 📝 Exam Simulation (Prüfungsmodus)
* Realistic 20-question randomized mock test across all worlds.
* Swiss standard grading scale (Grade 1.0 to 6.0, rounded to quarters).

---

## 🛠️ Technology Stack

| Component | Technology | Rationale |
|---|---|---|
| **Core Architecture** | Vanilla ES Modules (JS/HTML5) | Zero runtime overhead, fast boot time |
| **Styling & Theme** | Modern Vanilla CSS | Smooth gradients, glassmorphism, responsive grid |
| **Math Typesetting** | [KaTeX](https://katex.org/) | Blazing fast inline and display LaTeX rendering |
| **Micro-Animations** | [Anime.js](https://animejs.com/) | Fluid feedback for mascot and XP counters |
| **Drag & Drop** | [SortableJS](https://sortablejs.github.io/Sortable/) | Smooth touch-friendly drag-and-drop sorting |
| **Bundler** | [Vite](https://vitejs.dev/) | Sub-second builds, efficient tree-shaking |
| **Hosting** | [GitHub Pages](https://pages.github.com/) | 1-click CI/CD deployment via GitHub Actions |

---

## 🚀 Local Development

```bash
# 1. Clone the repository
git clone https://github.com/Flx-xlF/LottaMATH-DEMO.git
cd LottaMATH-DEMO

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Create production build
npm run build
```

---

## 📄 License & Attribution

Distributed under the **MIT License**.

Built with care (and a bit of madness) by [schema/f](https://github.com/Flx-xlF).  
Enjoy my work? [Tip me on Ko-fi](https://ko-fi.com/flxxlf).
