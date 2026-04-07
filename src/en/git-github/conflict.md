---
layout: layouts/doc.njk
title: Conflict
description: Resolve same-file text conflicts without panic and return to the normal loop.
lang: en
section: git-github
order: 9
permalink: /en/git-github/conflict/
translationKey: git-conflict
eyebrow: Step 9
lead: A conflict is not a disaster. It simply means Git needs help choosing between overlapping edits.
toc:
  - id: what-a-conflict-means
    label: What a conflict means
  - id: resolve-one-file-carefully
    label: Resolve one file carefully
  - id: finish-the-merge-cleanly
    label: Finish the merge cleanly
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## What a conflict means

A conflict appears when two sets of changes touch the same lines or the same small region of a file.

Git stops and asks you to decide what the final text should be.

<div class="doc-step-pair">
  <div>
    <p>A common first sign is a push warning: the remote changed and you need to pull first.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/conflict-push-warning.png" alt="VS Code warning that a push was rejected and a pull is required">
    <figcaption>A rejected push often means the remote changed and you need to pull before continuing.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After that warning, start the merge flow from the Source Control menu.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/conflict-pull-menu.png" alt="VS Code source control menu with Pull highlighted after a push warning">
    <figcaption>Start the merge by pulling the remote changes into your local repository.</figcaption>
  </figure>
</div>

## Resolve one file carefully

Use the VS Code Merge Editor or the conflict markers directly. Read the surrounding lines, decide what should remain, and keep the final text consistent.

Do not accept everything from one side unless that is the correct outcome.

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/conflict-merge-state.png" alt="VS Code source control panel during a merge with merge changes shown">
  <figcaption>While conflicts remain, the repository stays in a merge-in-progress state until you resolve each one.</figcaption>
</figure>

## Finish the merge cleanly

After resolving the file, confirm the conflict markers are gone, stage the file, and finish the merge commit or re-run the normal commit flow.

## Before proceeding

If you can explain what the final file should say and the repository returns to a clean state afterward, the conflict has been handled correctly.
