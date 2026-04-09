---
layout: layouts/doc.njk
title: Pull & Push
description: Repeat one clean sync loop so local work and remote history stay aligned.
lang: en
section: git-github
order: 6
permalink: /en/git-github/pull-push/
translationKey: git-pull-push
eyebrow: Topic 1
lead: "Keep the daily remote workflow small: pull before work if needed, commit coherent changes, then push when the work unit is ready."
toc:
  - id: key-terms
    label: Key terms
  - id: start-by-checking-the-current-state
    label: Check the current state
  - id: use-a-small-daily-sync-loop
    label: Use a daily sync loop
  - id: keep-commits-coherent
    label: Keep commits coherent
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---

<figure class="image-frame">
  <img src="/assets/images/3-topic-1-1.PNG" alt="Pull and push workflow overview">
</figure>

## Key terms

<dl>
  <dt>Stage</dt>
  <dd>The process of preparing changes to be included in a commit, before actually committing them.</dd>
  <dt>Commit</dt>
  <dd>The operation of saving changes to the local Git repository.</dd>
  <dt>Push</dt>
  <dd>The action of transferring commits from the local Git repository to a remote repository.</dd>
  <dt>Pull</dt>
  <dd>The action of fetching commits from a remote repository and merging them into the local branch.</dd>
</dl>

## Check the current state

Before large edits, look at the repository state.

```bash
git status
git pull
```

If nobody else has changed the repository, the pull does nothing — that is expected.

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/pull-menu.png" alt="VS Code source control menu with Pull highlighted">

</figure>

## Use a daily sync loop

The loop is:

1. pull when the remote may have changed
2. work locally
3. stage and commit one coherent unit
4. push the new commit

## Keep commits coherent

A good commit collects one understandable change. It does not need to be huge. It only needs to make sense when you read the history later.

<div class="doc-step-pair">
  <div>
    <p>Write a short message that names the unit of work before you publish anything to the remote.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-message.png" alt="VS Code source control panel with a commit message entered">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After the commit is ready, push it so the remote history stays aligned with your local work.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-and-push.png" alt="VS Code commit menu with Commit & Push highlighted">

  </figure>
</div>

## Before proceeding

If you can explain when to pull, when to commit, and when to push without improvising, your daily sync loop is ready.
