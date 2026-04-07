---
layout: layouts/doc.njk
title: Folder Setup
description: Open the correct project root and keep one stable workspace shape in VS Code.
lang: en
section: writing-in-vs-code
order: 1
permalink: /en/writing-in-vs-code/folder-setup/
translationKey: writing-folder-setup
eyebrow: Topic 1
lead: Open the whole project folder in VS Code, not a single file. Keep the root stable and always build from the correct location.
toc:
  - id: open-the-project-root
    label: Open the project root
  - id: keep-one-stable-folder-shape
    label: Keep one stable folder shape
  - id: common-mistakes
    label: Common mistakes
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Open the project root

Open the whole project folder in VS Code, not just a single `.tex` file.

When the root folder is open, LaTeX Workshop, search, file references, and source control all see the same workspace boundary.

<div class="doc-step-pair">
  <div>
    <p>If VS Code still opens to an empty window, start from <strong>Open Folder</strong> rather than from a single recent file.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-open-folder-button.png" alt="VS Code empty window with the Open Folder button visible">
    <figcaption>Begin by opening a folder, not by working from an empty window.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>In the folder picker, choose the actual project root that contains the manuscript and its supporting files.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-select-project-folder.png" alt="Windows folder picker with the Seed document project folder selected">
    <figcaption>Select the project root you intend to build from.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If VS Code shows a trust prompt, allow the workspace only when it is your own project folder and you want the editor features fully enabled.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-trust-folder.png" alt="VS Code trust prompt asking whether to trust the authors of the opened folder">
    <figcaption>Trust the project folder so the full workspace features can load.</figcaption>
  </figure>
</div>

## Keep one stable folder shape

Keep one predictable structure for the working project:

<div class="doc-step-pair">
  <div>
    <p>After the folder opens, the Explorer should show one stable workspace tree rather than scattered files from different locations.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-workspace-ready.png" alt="VS Code open project workspace after the folder is loaded">
    <figcaption>The working result is one open project workspace with the manuscript files inside it.</figcaption>
  </figure>
</div>

- root folder for the repository or paper project
- a main `.tex` file near the root or in one clearly named subfolder
- figures, bibliography, and supplementary files in stable subfolders

The exact names can vary, but avoid moving files around every time you start a new document.

## Common mistakes

Do not start from the Downloads folder, a temporary ZIP preview, or a deeply nested child folder unless that folder is truly the project root.

If LaTeX Workshop cannot find the main file, the problem is often the folder you opened rather than the extension itself.

## Before proceeding

Confirm that the Explorer shows the whole project, the main `.tex` file is inside that tree, and builds are running against the intended root.
