---
layout: layouts/doc.njk
title: Pull & Push
description: Repeat one clean sync loop so local work and remote history stay aligned.
lang: en
section: git-github
order: 6
permalink: /en/git-github/pull-push/
translationKey: git-pull-push
eyebrow: Step 6
lead: "Keep the daily remote workflow small: pull before work if needed, commit coherent changes, then push when the work unit is ready."
toc:
  - id: start-by-checking-the-current-state
    label: Check the current state
  - id: use-a-small-daily-sync-loop
    label: Use a daily sync loop
  - id: keep-commits-coherent
    label: Keep commits coherent
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Check the current state

Before large edits, look at the repository state.

```bash
git status
git pull
```

If you know nobody else changed the repository, the pull may do nothing. That is fine.

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/pull-menu.png" alt="VS Code source control menu with Pull highlighted">
  <figcaption>The pull action is usually available from the Source Control menu in VS Code.</figcaption>
</figure>

## Use a daily sync loop

The loop is usually:

1. pull when the remote may have changed
2. work locally
3. stage and commit one coherent unit
4. push the new commit

## Keep commits coherent

A good commit collects one understandable change. It does not need to be huge. It only needs to make sense when you read the history later.

<div class="doc-section-grid">
  <div>
    <p>Write a short message that names the unit of work, then publish it with the usual push step.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/commit-message.png" alt="VS Code source control panel with a commit message entered">
      <figcaption>A visible commit message helps keep the history readable later.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/legacy/github-workflow/commit-and-push.png" alt="VS Code commit menu with Commit & Push highlighted">
      <figcaption>After the commit is ready, push it to keep the remote history aligned.</figcaption>
    </figure>
  </div>
</div>

## Self-check

If you can explain when to pull, when to commit, and when to push without improvising, your daily sync loop is ready.
