---
layout: layouts/doc.njk
title: Set up LaTeX snippets
description: Open the LaTeX user snippet file in VS Code on Windows, add the definitions you need, and check what they insert.
lang: en
section: writing-in-vs-code
order: 4
permalink: /en/writing-in-vs-code/snippets/
translationKey: writing-snippets
eyebrow: Optional
lead: On Windows, find and open the LaTeX user snippet file in VS Code to keep frequently used entries in one place.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for the default Windows VS Code profile; macOS and Linux steps await review.
  workflow: Create or open the LaTeX user snippet file, add example definitions, and check autocomplete insertion.
  lastVerified: VS Code documentation and the example latex.json checked on 2026-09-23. Current Windows screens await review.
  support: Existing screenshots need to be checked against the current Windows version of VS Code.
toc:
  - id: finding-the-setting-file
    label: Open the LaTeX snippet file
  - id: example-snippet
    label: Example user snippets
tags:
  - doc
---
<h2 id="finding-the-setting-file">Open the LaTeX snippet file</h2>

<div class="doc-step-pair">
  <div>
    <p>On Windows, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> to open the Command Palette and run <strong>Snippets: Configure Snippets</strong>. VS Code lets you create or open the user snippet file from there.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/configure-user-snippets.png" alt="VS Code Command Palette showing Snippets Configure User Snippets">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Search for <code>latex</code> in the language picker. If there is no existing file, select <strong>latex (LaTeX)</strong> to create a language-specific user snippet file. Snippets in this file are suggested when you edit LaTeX files.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/search-latex-snippet-target.png" alt="VS Code snippet target search with latex typed in the filter box">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If <code>latex.json</code> (LaTeX) appears under <strong>Existing Snippets</strong>, select that file. Review the snippets already there, then add or edit entries in the same file.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/choose-latex-json.png" alt="VS Code prompt showing latex.json as the existing LaTeX snippets file">

  </figure>
</div>

<h2 id="example-snippet">Example user snippets</h2>

<div class="doc-action-row">
  <p>The default document pack includes example user snippets in <code>latex.json</code>. Add the definitions you need to the <code>latex.json</code> file you opened above.</p>
  <a class="doc-action-link" href="https://github.com/research-workflow-guides/setting/blob/main/latex.json">Example latex.json</a>
</div>

- **Windows default profile**: `%APPDATA%\Code\User\snippets\latex.json`
- **macOS / Linux**: Paths and steps will be written and verified later.

<div class="doc-step-pair">
  <div>
    <p>In Windows File Explorer, enter <code>%APPDATA%\Code\User\snippets</code> in the address bar and press <kbd>Enter</kbd> to open the default profile's snippets folder.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/snippets-folder-path.png" alt="Windows File Explorer showing the AppData Code User snippets path">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Look for a JSON file shown as <code>latex</code> or <code>latex.json</code> in the folder. If file name extensions are hidden, <code>latex.json</code> may appear as <code>latex</code>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/latex-snippet-file.png" alt="Windows File Explorer showing the latex snippet file inside the VS Code snippets folder">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>In <code>latex.json</code>, check the <code>prefix</code> and <code>body</code> of each snippet you add. The <code>prefix</code> is the trigger text, and the <code>body</code> is the LaTeX content inserted.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/edit-latex-json.png" alt="VS Code editor with latex.json open for snippet editing">

  </figure>
</div>

The unnumbered equation snippet in the default document pack uses `eq` as its `prefix`. Choose prefixes that are easy to type and distinguish from one another.

In a LaTeX file, type the new `prefix`, select the snippet from the suggestion list, and press Tab to insert it. Check that the LaTeX from `body` appears as expected.
