---
layout: layouts/doc.njk
title: TeXBB
description: Use TeXBB on Windows for mathematical notes, LaTeX PDF previews, and BibTeX references.
lang: en
section: writing-in-vs-code
order: 7
permalink: /en/writing-in-vs-code/texbb/
translationKey: writing-texbb
eyebrow: Optional
lead: TeXBB (LaTeX BlackBoard) is a Windows app for LaTeX, Markdown, drawing, and BibTeX references. Use it as a scratchpad for short calculations and notes alongside your main research project in VS Code.
toc:
  - id: open-texbb
    label: Open TeXBB
  - id: android-viewer
    label: Android viewer
  - id: mathematical-note
    label: Write a mathematical note
  - id: latex-pdf
    label: Build a LaTeX PDF
  - id: references
    label: Work with references
tags:
  - doc
---
<h2 id="open-texbb">Open TeXBB</h2>

<div class="doc-action-row">
  <p>Open the official website and follow its Microsoft Store link to install the Windows app. This is an optional tool, not a VS Code extension or a required step in the guidebook.</p>
  <a class="doc-action-link" href="https://texbb.kiyuobjung.com/">Official TeXBB website</a>
</div>

Keep using VS Code and GitHub for your main paper. TeXBB can sit beside that workflow when you want a separate place to try an equation, collect a reference, or jot down an idea. The app's **Help > Tutorial** provides further examples.

<figure class="image-frame">
  <img src="/assets/images/texbb/desktop-latex.png" alt="TeXBB Windows LaTeX editor beside the compiled PDF preview" width="2560" height="1392">
</figure>

<h2 id="android-viewer">Android viewer</h2>

Optionally read synchronized Markdown previews and compiled LaTeX PDFs on a phone. The Windows app works without the Android app. Check the official [PC–mobile guide](https://texbb.kiyuobjung.com/#setup) for current installation access and connection steps; use a trusted private network for pairing and synchronization.

<figure class="image-frame image-frame--phone">
  <img src="/assets/images/texbb/android-viewer.jpg" alt="A compiled LaTeX PDF displayed in the TeXBB Android viewer" width="1080" height="2093">
</figure>

<h2 id="mathematical-note">Write a mathematical note</h2>

Start with Markdown: it lets you mix ordinary text and mathematical notation without preparing a full LaTeX document.

1. Select **Markdown** at the top of the app.
2. Click **+** to create a separate practice document, then select its editor tab.
3. Paste the example below.
4. Click **Build** to save the note and refresh its viewer.

```markdown
# A quick calculation

For $n \ge 1$, the sum of the first $n$ positive integers is

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}.
$$

- Check the formula for $n=3$.
- Keep the argument here before adding it to the paper.
```

Use `$...$` for a formula within a sentence and `$$...$$` for a displayed formula. TeXBB includes the math renderer for these Markdown previews, so you do not need a TeX compiler for this step. **Build** here refreshes the note; it does not create a LaTeX PDF.

<figure class="image-frame">
  <img src="/assets/images/texbb/markdown-note.png" alt="A TeXBB Markdown note with mathematical formulas rendered in the adjacent viewer" width="2560" height="1392">
  <figcaption>An example Markdown note and its preview in TeXBB.</figcaption>
</figure>

<h2 id="latex-pdf">Build a LaTeX PDF</h2>

For a short LaTeX draft, use the **LaTeX** workspace instead. PDF compilation requires a separately installed TeX toolchain. If you completed [LaTeX Installation](/en/initial-setup/latex-installation/), you can use that existing installation; you do not need a second distribution just for TeXBB.

1. Open **Settings > LaTeX**, find **LaTeX setup**, and click **Scan again**. Check that it shows **Detected**.
2. Return to **LaTeX** and click **+** to create a practice document from the default template.
3. Replace only the template's body with the example below. Keep its preamble and document structure. If the full source is visible, edit only between `\begin{document}` and `\end{document}`.
4. Click **Build**, wait for it to finish, and read the result in the matching **Viewer** tab.

```latex
For $n \ge 1$,
\[
  \sum_{k=1}^{n} k = \frac{n(n+1)}{2}.
\]
```

If the build fails, open **View > Log Panel** and check the first compiler error. The viewer may retain the last successful PDF, so an unchanged preview does not necessarily mean the latest build succeeded.

<details>
  <summary>The PDF was built, but the Viewer is empty</summary>
  <p><strong>Detected</strong> confirms that a TeX build tool was found. If the log says <code>No PDF renderer found</code>, the PDF preview also needs the Poppler tools <code>pdftoppm</code> or <code>pdftocairo</code>. See <a href="https://texbb.kiyuobjung.com/support">TeXBB Support</a> if you need help with that setup.</p>
</details>

<h2 id="references">Work with references</h2>

The **Reference** workspace lets you edit a BibTeX library and view its entries as a table or a citation diagram. You can use the BibTeX entries collected in the [BibTeX guide](/en/writing-in-vs-code/bibliography-citation/).

- To try an existing library safely, first make a copy of its `.bib` file. Choose that copy through **Settings > Reference > BibTex file > Change File...**.
- To add citation text you already have, select **Reference**, open **Tools > Reference > Import Citation...** (or click **+**), paste the BibTeX entry, and click **Import**.
- For direct source edits, use **Editor**, then **Save**. Select **Table** to inspect the entries or **Viewer** to refresh the diagram.

Citation import uses the text you provide; it is not an automatic DOI or URL search. Editing the practice copy does not automatically update your paper's `.bib` file. Save any changes you want to keep to the appropriate project file, then rebuild the paper in VS Code to check them.

<figure class="image-frame">
  <img src="/assets/images/texbb/reference-diagram.png" alt="TeXBB Reference Viewer displaying reference entries and citation relationships as a diagram" width="2560" height="1392">
  <figcaption>Viewer: an example of a reference and citation relationship diagram.</figcaption>
</figure>

<figure class="image-frame">
  <img src="/assets/images/texbb/reference-table.png" alt="TeXBB Reference Table listing authors, titles, years, and other bibliography fields" width="2560" height="1392">
  <figcaption>Table: an example bibliography list.</figcaption>
</figure>
