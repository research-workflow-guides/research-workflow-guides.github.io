---
layout: layouts/doc.njk
title: Snippets
description: Use a small snippet set to speed up repetitive LaTeX typing without overengineering.
lang: en
section: writing-in-vs-code
order: 5
permalink: /en/writing-in-vs-code/snippets/
translationKey: writing-snippets
eyebrow: Topic 5
lead: Snippets are useful when they remove repetition without hiding the structure of the document.
toc:
  - id: start-with-high-frequency-patterns
    label: Start with high-frequency patterns
  - id: example-snippet
    label: Example snippet
  - id: avoid-oversized-snippet-libraries
    label: Avoid oversized libraries
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Start with high-frequency patterns

Create snippets only for patterns you type constantly:

- theorem environments
- aligned equation blocks
- common figure or table shells
- repeated document scaffolding

If a snippet is used once a month, it probably does not belong in the core set.

<div class="doc-step-pair">
  <div>
    <p>Start from the Command Palette and open the user snippet flow instead of creating random JSON files by hand.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/configure-user-snippets.png" alt="VS Code Command Palette showing Snippets Configure User Snippets">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then search for the LaTeX snippet target so the snippet file is attached to the language you actually use for manuscript work.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/search-latex-snippet-target.png" alt="VS Code snippet target search with latex typed in the filter box">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If a LaTeX snippet file already exists, open that existing file instead of scattering duplicate snippet files across the system.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/choose-latex-json.png" alt="VS Code prompt showing latex.json as the existing LaTeX snippets file">

  </figure>
</div>

## Example snippet

<div class="doc-step-pair">
  <div>
    <p>If you need to inspect the files directly, the Windows example below shows the <code>%APPDATA%\\Code\\User\\snippets</code> folder where user snippets are stored.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/snippets-folder-path.png" alt="Windows File Explorer showing the AppData Code User snippets path">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Inside that folder, confirm that the LaTeX snippet file exists and is the file you plan to keep editing.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/latex-snippet-file.png" alt="Windows File Explorer showing the latex snippet file inside the VS Code snippets folder">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Once the file is open, keep the snippet set short and readable so future edits stay easy.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-core/snippets/edit-latex-json.png" alt="VS Code editor with latex.json open for snippet editing">

  </figure>
</div>

```json
{
  "align environment": {
    "prefix": "ali",
    "body": [
      "\\begin{align}",
      "  $1",
      "\\end{align}"
    ]
  }
}
```

Keep prefixes short but memorable.

## Avoid oversized libraries

Large snippet files become their own maintenance burden. Start with a small set that you trust, then add entries only when repeated typing is clearly wasting time.

## Before proceeding

Confirm that your snippets speed up common LaTeX patterns and that you still understand the structure they expand into.
