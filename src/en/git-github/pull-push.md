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
  - id: pull-before-work
    label: Pull before work
  - id: use-a-small-daily-sync-loop
    label: Use a daily sync loop
  - id: keep-commits-coherent
    label: Keep commits coherent
  - id: first-commit-and-push
    label: First commit and push
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---

<figure class="image-frame">
  <img src="/assets/images/3-topic-1-1.PNG" alt="Pull and push workflow overview">
</figure>

## Key terms

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Term</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Stage</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The process of preparing changes to be included in a commit, before actually committing them.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Commit</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The operation of saving changes to the local Git repository.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Push</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The action of transferring commits from the local Git repository to a remote repository.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Pull</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The action of fetching commits from a remote repository and merging them into the local branch.</td>
      </tr>
    </tbody>
  </table>
</div>

## Pull before work

```bash
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

## First commit and push

```bash
git status
git add .
git commit -m "Initial project import"
git push origin main
```

If the default branch is not `main`, use the branch name GitHub created for the repository.

<div class="doc-step-pair">
  <div>
    <p>With the files inside the clone, write a clear initial commit message.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-message.png" alt="VS Code source control panel with a commit message entered">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Publish the first commit with a normal push — or use the combined commit-and-push if your interface offers it.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-and-push.png" alt="VS Code commit menu showing Commit & Push">

  </figure>
</div>

## Before proceeding

If you can explain when to pull, when to commit, and when to push without improvising, your daily sync loop is ready.
