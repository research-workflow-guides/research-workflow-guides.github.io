---
layout: layouts/doc.njk
title: Project Template
description: Download seed-documents from GitHub, build check-document.tex, and preview the PDF.
lang: en
section: initial-setup
order: 3
permalink: /en/initial-setup/project-template/
translationKey: initial-setup-project-template
eyebrow: Step 3
lead: Download the <code>seed-documents</code> starter project as a ZIP file from GitHub and extract it. Open the extracted folder in VS Code and run the first PDF build.
verificationCard: false
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: The guide is being written for Windows; macOS and Linux instructions are planned for later review.
  workflow: GitHub ZIP download, project extraction, VS Code folder opening, and first PDF build.
  lastVerified: Repository and official documentation checked on 2026-09-23. Windows execution check pending.
  support: Windows guidance under review. macOS and Linux guidance is planned.
  scopeNote: The Windows procedure still needs an end-to-end check. macOS and Linux guidance will be written later.
toc:
  - id: download-the-template
    label: Download the template
  - id: run-the-first-pdf-build
    label: Run the first PDF build
tags:
  - doc
---
## Download the template

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <ol>
      <li>
        <p><a class="doc-action-link" href="https://github.com/research-workflow-guides/seed-documents">Open the seed-documents repository</a></p>
      </li>
      <li>Above the repository's file list, click <strong>Code</strong>, then select <strong>Download ZIP</strong>.</li>
    </ol>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/github-code-btn.svg" alt="GitHub Code button">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <ol start="3">
      <li>In File Explorer, right-click the downloaded ZIP file and select <strong>Extract All</strong>. Confirm that the extracted folder contains <code>check-document.tex</code> and the <code>seed-document</code> folder.</li>
    </ol>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.5-1.png" alt="Starter repository on GitHub">
  </figure>
</div>

## Run the first PDF build

1. In VS Code, select **File > Open Folder...** and open the extracted top-level folder that contains `check-document.tex`.
2. Open `check-document.tex` in Explorer. Press `Ctrl+Shift+P` to open the Command Palette, then search for and run `Build LaTeX project`. If MiKTeX prompts you to install a missing package, complete the installation before checking the build result.
3. When the build finishes, confirm that `check-document.pdf` was created. Run `View LaTeX PDF file` from the Command Palette and check that the PDF opens in the VS Code preview.
