---
layout: layouts/doc.njk
title: Project Template
description: Download a starter project, build it once, and confirm the environment is ready.
lang: en
section: start-here
order: 3
permalink: /en/start-here/project-template/
translationKey: start-here-project-template
eyebrow: Step 3
lead: Download the starter project, open it in VS Code, and run one build to confirm the full toolchain works.
toc:
  - id: download-the-starter-archive
    label: Download the template
  - id: open-the-project-in-vs-code
    label: Open the project
  - id: run-the-first-build
    label: Run the first build
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Download the starter archive

Use the starter repository as your project template source.

1. Open the starter repository and download the ZIP archive from GitHub.
2. Extract the archive and keep the folder intact — you'll open the entire project folder in VS Code.

[Starter repository: research-workflow-guides/seed-documents](https://github.com/research-workflow-guides/seed-documents)

<div class="doc-step-pair">
  <div>
    <p>Use the starter repository page as the source of truth before you download anything from GitHub.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.5-1.png" alt="Starter repository on GitHub">
    <figcaption>The starter repository page shows the project you will download.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then open the GitHub code menu and choose the ZIP download path for that repository.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/github-code-btn.svg" alt="GitHub Code button">
    <figcaption>Open the GitHub code menu and choose the ZIP download path.</figcaption>
  </figure>
</div>

## Open the project in VS Code

1. Open the extracted folder in VS Code as a project, not as a single file.
2. Use `seed-document/seed-document.tex` as your starting point.

## Run the first build

1. Trigger the build from LaTeX Workshop rather than from a manual terminal command.
2. Open the PDF preview and confirm the document compiles without errors.
3. This is your final setup checkpoint. If the template builds cleanly, your distribution, editor, and extension are all working together.

## Before you move on

Confirm that the starter file opens in VS Code, the build completes without errors, and a PDF preview appears.
