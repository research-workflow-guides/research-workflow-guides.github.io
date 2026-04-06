---
layout: layouts/doc.njk
title: Connect GitHub
description: Connect the GitHub account inside VS Code before you create the first repository.
lang: en
section: git-github
order: 3
permalink: /en/git-github/connect-github/
translationKey: git-connect-github
eyebrow: Step 3
lead: Sign in to GitHub from inside VS Code so repository actions can open in the same working environment.
toc:
  - id: sign-in-from-vs-code
    label: Sign in from VS Code
  - id: complete-the-browser-flow
    label: Complete the browser flow
  - id: confirm-the-connection
    label: Confirm the connection
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Sign in from VS Code

Before you start GitHub authentication, open the actual project folder in VS Code. It is easier to finish the sign-in flow and keep working if the same workspace is already open.

<div class="doc-step-pair">
  <div>
    <p>If VS Code still shows an empty window, start by using <strong>Open Folder</strong> instead of trying to connect GitHub from a blank workspace.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-open-folder-button.png" alt="VS Code empty window with the Open Folder button visible">
    <figcaption>Open the working folder before you start the GitHub sign-in flow.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>In the folder picker, choose the manuscript or project folder that you want to keep under version control.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-select-project-folder.png" alt="Windows folder picker with the Seed document project folder selected">
    <figcaption>Choose the project folder you want to use with Git and GitHub.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>When VS Code asks whether you trust the folder, accept it only if this is your own working folder so Git and extension features can run normally.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-trust-folder.png" alt="VS Code trust prompt asking whether to trust the authors of the opened folder">
    <figcaption>Trust the folder so the full workspace features can load.</figcaption>
  </figure>
</div>

Once the folder is open, use the Accounts menu or Source Control prompts in VS Code to start GitHub sign-in.

## Complete the browser flow

VS Code usually opens a browser page for authorization. Finish that flow with the same GitHub account you prepared in the previous step.

<div class="doc-step-pair">
  <div>
    <p>GitHub can show a confirmation screen like this before access is granted to VS Code. Complete the prompt with your normal GitHub verification method.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-confirm-access.png" alt="GitHub browser confirmation screen shown during VS Code authorization">
    <figcaption>Finish the GitHub confirmation step in the browser.</figcaption>
  </figure>
</div>

## Confirm the connection

Return to VS Code and confirm that you are back inside the same project workspace. Then check the Accounts menu or Git-related prompts to make sure the correct GitHub account is now recognized.

<div class="doc-step-pair">
  <div>
    <p>The expected result is an open project workspace where you can keep working without being sent back to an empty start screen.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-workspace-ready.png" alt="VS Code open project workspace after the folder is loaded">
    <figcaption>After the browser step, return to the opened project workspace.</figcaption>
  </figure>
</div>

## Self-check

If the project folder is open in VS Code and GitHub-related prompts stop restarting from scratch, proceed to repository creation.
