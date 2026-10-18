# LottaMATH: Question Design, Mental Math & Interaction Integrity Rules

These rules govern all mathematical question authoring, visual creation, and interaction logic in LottaMATH. Every AI agent and developer working in this repository must strictly adhere to these standards.

---

## 1. Mental Math Standard (Kopfrechenbare Zahlen)

Lotta (13, 2. Sekundarstufe Niveau P) solves problems mentally without a calculator or scratch paper. Multi-digit arithmetic drains working memory and triggers math anxiety.

- **Clean Intermediate Operations:**
  - All intermediate sums, products, and quotients must be clean integers or simple halves ($0.5$).
  - When formulas involve division by 2 (Triangles, Rhombuses), numerators must be even before dividing. For Trapezoids, the sum $(a + c)$ must always be an even integer.
- **Inverse Formula Doubling & Divisions (Critical Anti-Trap):**
  - When solving inverse formulas (e.g. $c = \frac{2A}{h} - a$, $g = \frac{2A}{h}$, $f = \frac{2A}{e}$), doubling the area ($2A$) and then dividing by the known dimension ($h, g, e$) must result in an elementary division directly within the 1x1 multiplication table or simple base-10 arithmetic.
  - **Forbidden:** Awkward 3-digit divisions like $128 : 8 = 16$.
  - **Rule of Thumb:** Intermediate dividend ($2A$) must not exceed 100 unless it is an exact multiple of 10 (e.g. $200 : 20 = 10$).
- **No Blind Textbook Copying:**
  - Textbook exercise numbers frequently assume scratchpad work. Never copy textbook numbers verbatim into LottaMATH without verifying that every calculation step is effortless head math. Adapt numbers whenever necessary.

---

## 2. Geometric Sketches & Anti-Spoiler Integrity

Sketches must visually support understanding without inadvertently giving away the solution.

- **Calculation Tasks (Dimension Known / Target Unknown):**
  - Clearly mark known dimensions ($g = 12\text{ m}, h = 6\text{ m}$) with dimension lines/arrows.
  - The unknown target must be marked with a question mark (e.g. $c = ?$, $A = ?$).
  - Never print the calculated answer or area directly into the sketch.
- **Formula Identification / Matching Tasks (Critical Anti-Spoiler):**
  - In questions where students must identify, match, or sort formulas to geometric shapes (e.g., `drag-group` or `multiple-choice` matching formulas like $A = g \cdot h$, $A = \frac{a+c}{2} \cdot h$, $A = \frac{e \cdot f}{2}$ to shapes):
  - **Sketches MUST NOT print formula variable letters** ($g, h, a, c, e, f$) onto the figures. Printing $a, c, h$ on a trapezoid or $e, f$ on a kite reduces the problem to mindless letter matching rather than conceptual geometry.
  - Instead, display clean geometric outlines with structural construction lines (dashed height, dashed diagonals) and shape names ("Parallelogramm", "Dreieck", "Trapez", "Drachen").

---

## 3. Interaction Randomization & Anti-Spoiler Order

Interactive components must never provide structural or positional hints about the correct answer.

- **Pre-Scrambled Data Definitions:**
  - In question data (`src/data/questions/`), arrays for `interaction.items` (`drag-group`, `drag-order`) and `interaction.options` (`multiple-choice`) must **NEVER** be authored in the solved order or in 1:1 positional correspondence with `groups` or choices.
- **Engine-Level Dynamic Shuffling:**
  - `questionEngine.js` must dynamically shuffle options and pool items via Fisher-Yates during session (`getQuestionsForLevel`) and exam generation (`getExamQuestions`).
- **UI-Level Collision Safeguard:**
  - `quiz.js` must implement defensive shuffling and check that the randomized pool does not accidentally align 1:1 with group drop buckets or sequential steps. If a 1:1 collision is detected, items must be swapped before rendering.
- **Dummy Placeholder Integrity:**
  - In `fill-in` questions, `placeholder` must never reveal the answer and must differ from `correctAnswer` (e.g., use `z.B. 4` instead of the answer `3`).

---

## 4. Swiss Orthography & Typography (Strict "No Eszett / Kein ß")

LottaLEARN is designed specifically for Swiss secondary school students (Sekundarschule Baselland, Lehrplan 21). Swiss German typography and orthography strictly apply across the entire application:

- **Absolute Prohibition of "ß":**
  - The character `ß` (Eszett / Scharfes S) is **STRICTLY FORBIDDEN** anywhere in the app, codebase, data files, questions, prompts, hints, solutions, explanations, cat mascot messages, headers, documentation, and UI components.
- **Mandatory Replacement with "ss" / "SS":**
  - Always use `ss` in lowercase words: e.g., *gross*, *schliessen*, *Strasse*, *fliessen*, *weisser*, *ausschliesslich*, *Massnahmen*, *muss*, *beissen*, *heiss*, *Russ*, *süss*, *Grosshirn*.
  - Always use `SS` in uppercase/capitalized text: e.g., *GROSS*, *STRASSE*.
- **Code & Regex Cleanliness:**
  - Regular expressions or string sanitizers must never introduce `ß` or expect `ß` in user facing text or validations.

