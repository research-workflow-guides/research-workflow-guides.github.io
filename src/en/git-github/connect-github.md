---
layout: layouts/doc.njk
title: Connect GitHub
description: Connect the GitHub account inside VS Code before you create the first repository.
lang: en
section: git-github
order: 3
permalink: /en/git-github/connect-github/
translationKey: git-connect-github
eyebrow: Topic 1
lead: Sign in to GitHub from inside VS Code so repository actions can open in the same working environment.
toc:
  - id: sign-in-from-vs-code
    label: Sign in from VS Code
  - id: complete-the-browser-flow
    label: Complete the browser flow
  - id: confirm-the-connection
    label: Confirm the connection
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Sign in from VS Code

Before starting the GitHub sign-in, open the project folder in VS Code. Finishing the sign-in flow is simpler when the workspace is already open.

<div class="doc-step-pair">
  <div>
    <p>If VS Code shows an empty window, use <strong>Open Folder</strong> before starting the GitHub sign-in flow.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-open-folder-button.png" alt="VS Code empty window with the Open Folder button visible">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>In the folder picker, choose the manuscript or project folder you are putting under version control.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-select-project-folder.png" alt="Windows folder picker with the Seed document project folder selected">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>When VS Code asks whether you trust the folder, accept it only if this is your own working folder so Git and extension features can run normally.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-trust-folder.png" alt="VS Code trust prompt asking whether to trust the authors of the opened folder">

  </figure>
</div>

Once the folder is open, use the Accounts menu or Source Control prompts in VS Code to start GitHub sign-in.

## Complete the browser flow

VS Code opens a browser page for authorization. Finish that flow with the GitHub account you prepared in the previous step.

<div class="doc-step-pair">
  <div>
    <p>GitHub can show a confirmation screen like this before access is granted to VS Code. Complete the prompt with your normal GitHub verification method.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-confirm-access.png" alt="GitHub browser confirmation screen shown during VS Code authorization">

  </figure>
</div>

## Confirm the connection

Return to VS Code and confirm the project workspace is open. Check the Accounts menu or Git-related prompts to verify the correct GitHub account is recognized.

<div class="doc-step-pair">
  <div>
    <p>The workspace should be open and ready to continue from — not reset to an empty start screen.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/connect-workspace-ready.png" alt="VS Code open project workspace after the folder is loaded">

  </figure>
</div>

## Before proceeding

If the project folder is open in VS Code and GitHub no longer prompts you to sign in, proceed to repository creation.
