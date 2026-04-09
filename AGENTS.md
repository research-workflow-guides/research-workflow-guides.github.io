# Research Workflow Guidebook Agent Notes

## Response Style
- Default to concise, structured answers.
- Start with the direct answer or conclusion in the first sentence.
- Keep most replies within 3-6 lines unless the user explicitly asks for detail.
- For coding or documentation tasks, do the work first and explain briefly after.

## Document Editing Principles
- Preserve the existing bilingual structure of the site.
- For `src/ko/**`, keep titles, headings, TOC labels, captions, and body text stylistically consistent within each page.
- Keep product names, commands, filenames, code identifiers, and exact UI labels in their original language when that improves accuracy.

## Korean Terminology Rules
- Do not alternate between Korean and English for the same general concept within a single Korean page without a clear reason.
- Prefer natural Korean for explanatory prose, but keep fixed technical labels consistent across related pages.

## Fixed-Term Exceptions
- `snippet` and `snippets` are treated as fixed proper-noun-like terms on Korean pages and should remain in English.
- Preserve singular and plural meaning when editing Korean documentation:
  use `snippet` for singular references and `snippets` for plural references.
- Use `Snippets` only where title case is appropriate, such as page titles, navigation labels, or standalone section labels.
- Do not translate `snippet`, `snippets`, or `Snippets` to `스니펫` or another Korean paraphrase.
- Apply this rule consistently to page titles, TOC labels, section headings, and descriptive references when the term refers to the VS Code/LaTeX writing topic.
- Exact UI strings may remain fully in English, including examples such as `Configure User Snippets`.
- Commands, filenames, and code references such as `settings.json`, `latex.json`, and `snippet` keys should remain in their original literal form.
