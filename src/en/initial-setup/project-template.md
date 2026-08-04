---
layout: layouts/doc.njk
title: Project Template
description: Download a starter project, build it once, and confirm the environment is ready.
lang: en
section: initial-setup
order: 3
permalink: /en/initial-setup/project-template/
translationKey: initial-setup-project-template
eyebrow: Step 3
lead: Download the starter project.
outcome: The starter project is extracted, opened as a folder, and compiled into a PDF.
prerequisites:
  - LaTeX, VS Code, and LaTeX Workshop are installed.
  - The seed-documents ZIP archive can be downloaded from GitHub.
completion: The starter project builds without errors and its PDF opens in the VS Code preview.
commonProblems:
  - Opening the ZIP preview instead of the extracted project folder prevents a normal workspace build.
  - The first build may pause while MiKTeX installs a missing package.
verification:
  status: needs-review
  environment: Windows is the detailed screenshot path; macOS and Linux use the same repository and build result.
  workflow: GitHub ZIP download, project extraction, VS Code folder opening, and first PDF build.
  lastVerified: Pending a current-product walkthrough.
  support: Windows detailed; macOS and Linux supported by the same file and build checks.
toc:
  - id: download-the-template
    label: Download the template
tags:
  - doc
---
## Download the template


1. Open the seed-documents repository in GitHub.

   <p><a class="doc-action-link" href="https://github.com/research-workflow-guides/seed-documents">seed-documents repository</a></p>

2. Download the ZIP archive from GitHub by clicking the following button.

   <figure class="image-frame">
     <img src="/assets/images/github-code-btn.svg" alt="GitHub Code button">
   </figure>

3. Extract the archive and keep the folder intact — you will open the entire project folder in VS Code in the next part.

<figure class="image-frame">
  <img src="/assets/images/1.5-1.png" alt="Starter repository on GitHub">
</figure>

Confirm that the archive downloaded cleanly and the extracted folder contains the project files intact.
