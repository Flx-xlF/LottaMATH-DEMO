# Swiss Orthography Standard (Strict "No Eszett / Kein ß")

## Rule Definition
In Switzerland, standard German orthography does not use the character `ß` (Eszett / Scharfes S). All instances of `ß` are strictly written as `ss` (or `SS` in uppercase).

This standard is universally applied across Swiss schools (Lehrplan 21, Sekundarschule Baselland, Gymnasium), official publications, and educational media.

## Mandatory Directives for LottaLEARN / LottaMATH

1. **Zero Tolerance for «ß»:**
   - The character `ß` is **STRICTLY PROHIBITED** throughout the entire application and codebase:
     - Task prompts (`prompt`, `promptLatex`, `title`, `description`)
     - Answer options, accepted answers, matching pairs, and group categories
     - 3-tier hint ladders (`💡 Tipp`, `🔑 Hinweis`, `✅ Lösung`, `commonMistake`)
     - Cat mascot (Suki) messages and dialogue
     - UI buttons, labels, tooltips, modal dialogs, and headers
     - Feedback messages, error alerts, and exam feedback
     - Data models, documentation, and agent rule sets

2. **Standard Replacements:**
   - `ß` -> `ss` (e.g., *groß* -> *gross*, *schließen* -> *schliessen*, *weiß* -> *weiss*, *süß* -> *süss*, *Ruß* -> *Russ*, *Maßstab* -> *Massstab*, *außer* -> *ausser*, *heiß* -> *heiss*, *Fuß* -> *Fuss*)
   - Capitalized words / headers: `SS` (e.g., *GROSS*, *WEISS*, *SCHLIESSEN*)

3. **Input Validation & Regex Integrity:**
   - Regular expressions for text processing must not expect or require `ß` (use `[a-zA-ZäöüÄÖÜ]`).
   - Normalization functions (e.g., answer cleaning) may convert any stray `ß` to `ss` defensively, ensuring students typing on German keyboards are graded correctly while system output strictly displays `ss`.
