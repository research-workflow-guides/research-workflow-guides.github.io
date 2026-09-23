---
layout: layouts/doc.njk
title: Open Project Folder
description: Open the seed-document example folder in VS Code, then build and preview the manuscript.
lang: en
section: writing-in-vs-code
order: 1
permalink: /en/writing-in-vs-code/register-folder/
translationKey: writing-folder-setup
eyebrow: Step 1
lead: The previous step used <code>check-document.tex</code> for the first build. Now open the <code>seed-document</code> folder containing the sample manuscript in VS Code. Keep the manuscript, figures, and bibliography files together in this folder.
verificationCard: false
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written around Windows screenshots; macOS and Linux screens await review.
  workflow: VS Code Open Folder, Workspace Trust, Explorer, and LaTeX Workshop build.
  lastVerified: Repository and official VS Code and LaTeX Workshop documentation checked on 2026-09-23. Windows execution check pending.
  support: Windows screenshots await review. macOS and Linux screen guidance will be checked later.
  scopeNote: This page uses Windows screenshots. The existing images need review against the current version, and macOS and Linux screen guidance will be checked later.
toc:
  - id: open-folder
    label: Open folder
  - id: build-the-sample-manuscript
    label: Build the sample manuscript
  - id: open-another-folder
    label: Open another folder
tags:
  - doc
---
## Open folder

<div class="doc-step-pair">
  <div>
    <p>Select <strong>File &gt; Open Folder...</strong> in VS Code. If the window is empty, you can also use the <strong>Open Folder</strong> button in Explorer.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-open-folder-button.png" alt="VS Code empty window with the Open Folder button visible">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Inside the extracted <code>seed-documents</code> folder, select the <code>seed-document</code> folder containing <code>seed-document.tex</code>, <code>bibliography.bib</code>, and <code>figure.jpg</code>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-select-project-folder.png" alt="Windows folder picker with the Seed document project folder selected">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>The selected <code>seed-document</code> folder opens as a VS Code workspace. If Workspace Trust appears, review the folder's files and choose <strong>Yes, I trust the authors</strong> only when you trust their contents.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-trust-folder.png" alt="VS Code trust prompt asking whether to trust the authors of the opened folder">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Check that Explorer shows the <code>seed-document</code> folder at the top, with <code>seed-document.tex</code> and <code>bibliography.bib</code> inside it.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-workspace-ready.png" alt="VS Code open project workspace after the folder is loaded">

  </figure>
</div>

## Build the sample manuscript

1. Open `seed-document.tex` in Explorer, then press `Ctrl+Shift+P` and run `Build LaTeX project` from the Command Palette.
2. Check that LaTeX Workshop reports a successful build, then run `View LaTeX PDF file` to open `seed-document.pdf`.

If LaTeX Workshop cannot find the root file, check that Explorer shows the `seed-document` folder and reopen `seed-document.tex`.

## Open another folder

<div class="doc-step-pair">
  <div>
    <p>To reopen a recent folder, press <kbd>Ctrl</kbd> + <kbd>R</kbd> and select it from the list. If it is not listed, use <strong>File &gt; Open Folder...</strong> to open the folder.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-6.png" alt="VS Code list of recently opened folders">

  </figure>
</div>
