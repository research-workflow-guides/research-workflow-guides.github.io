---
layout: layouts/doc.njk
title: Pull & Push
description: Repeat one clean sync loop so local work and remote history stay aligned.
lang: en
section: git-github
order: 7
permalink: /en/git-github/pull-push/
translationKey: git-pull-push
eyebrow: Topic 2
lead: "Keep the daily remote workflow small: pull before work if needed, commit coherent changes, then push when the work unit is ready."
toc:
  - id: key-terms
    label: Key terms
  - id: pull-first-way
    label: Pull (first way)
  - id: pull-second-way
    label: Pull (second way)
  - id: pull-third-way
    label: Pull (third way)
  - id: push-first-way
    label: Push (first way)
  - id: push-second-way
    label: Push (second way)
  - id: push-third-way
    label: Push (third way)
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

## Pull (first way)

Let's learn how to download what's uploaded to GitHub to the registered folder.

Click the button on the right and select 'Pull' in Source Control.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-10.png" alt="VS Code Source Control pull menu">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-11%20(1).png" alt="VS Code Source Control menu with Pull highlighted">
</figure>

When the pull is successfully completed, you will be able to see the following screen.

If nobody else has changed the repository, the pull does nothing — that is expected.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-12.png" alt="VS Code Source Control after pull completes">
</figure>

## Pull (second way)

Open a new terminal with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on macOS. Then enter the following command:

```bash
git pull
```

## Pull (third way)

You can also perform Pull commands from the Command Palette with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on macOS.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-10%20(2).png" alt="VS Code Command Palette pull command">
</figure>

## Push (first way)

You can upload the changes to GitHub by staging them, committing, and then pushing.

Click the '+' button in Source Control.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-1.png" alt="VS Code Source Control plus button for staging changes">
</figure>

You will see the Staged Changes appear.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-2.png" alt="VS Code source control panel with staged changes">
</figure>

Enter the commit message.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-3.png" alt="VS Code source control panel with a commit message entered">
</figure>

Click the button on the right.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-5.png" alt="VS Code Source Control commit button menu">
</figure>

Select 'Commit & Push'.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-6.png" alt="VS Code Source Control Commit & Push option">
</figure>

## Push (second way)

Open a new terminal with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on macOS. Then enter the following command:

```bash
git add .
git commit -m "Describe your change"
git push
```

## Push (third way)

You can also perform Push commands from the Command Palette with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> on macOS.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-11%20(2).png" alt="VS Code Command Palette push command">
</figure>

## Before proceeding

If you can explain when to pull, when to commit, and when to push without improvising, your daily sync loop is ready.
