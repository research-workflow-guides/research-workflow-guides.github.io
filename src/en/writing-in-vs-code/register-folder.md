---
layout: layouts/doc.njk
title: Register Folder
description: Open a folder in VS Code to register it as your workspace.
lang: en
section: writing-in-vs-code
order: 1
permalink: /en/writing-in-vs-code/register-folder/
translationKey: writing-folder-setup
eyebrow: Topic 1
lead: In VS Code, you work at the folder level, not the file level. A project is not just a .tex file — it also includes figures, code, and other supporting files that VS Code manages together as one folder.
toc:
  - id: open-folder
    label: Open folder
  - id: common-mistakes
    label: Common mistakes
  - id: run-the-first-build
    label: Run the first build
  - id: open-another-folder
    label: Open another folder
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Open folder

<div class="doc-step-pair">
  <div>
    <p>Click <strong>Open Folder</strong> in the left sidebar.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-open-folder-button.png" alt="VS Code empty window with the Open Folder button visible">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Choose the folder that contains the manuscript and its supporting files.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-select-project-folder.png" alt="Windows folder picker with the Seed document project folder selected">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Now, we call such opened folder the <strong>workspace</strong>. In the above figure, Seed document folder is the workspace. If VS Code shows a trust prompt, allow the workspace only when it is your own folder and you want the editor features fully enabled.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-trust-folder.png" alt="VS Code trust prompt asking whether to trust the authors of the opened folder">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If you have successfully opened the folder, you can see the following screen.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-workspace-ready.png" alt="VS Code open project workspace after the folder is loaded">

  </figure>
</div>

## Common mistakes

Do not start from the Downloads folder, a temporary ZIP preview, or a deeply nested child folder unless that folder is truly the project root.

If LaTeX Workshop cannot find the main file, the problem is often the folder you opened rather than the extension itself.

## Run the first build

1. Trigger the build from LaTeX Workshop rather than from a manual terminal command.
2. Open the PDF preview and confirm the document compiles without errors.
3. If the template builds cleanly, your distribution, editor, and extension are all working together.

## Open another folder

<div class="doc-step-pair">
  <div>
    <p>If you want to open another registered folder, type <kbd>Ctrl</kbd> + <kbd>R</kbd> to select another folder.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-6.png" alt="VS Code folder picker opened with Ctrl+R">

  </figure>
</div>

## Before proceeding

Confirm that the Explorer shows the whole project, the main `.tex` file is inside that tree, and the first build completes without errors.
