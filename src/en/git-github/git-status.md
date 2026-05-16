---
layout: layouts/doc.njk
title: Git status
description: Check what changed before you stage, commit, or push.
lang: en
section: git-github
order: 7
permalink: /en/git-github/git-status/
translationKey: git-status
eyebrow: Topic 2
lead: Check what changed before you stage, commit, or push.
toc:
  - id: check-the-current-state
    label: Check the current state
  - id: basic-file-states
    label: Basic file states
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Check the current state

Open a new terminal with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on macOS. Then enter the following command:

```bash
git status
```

Then you will see a result like this in the terminal:

<figure class="image-frame">
  <img src="/assets/images/gitstatus.png" alt="Git status output in the terminal">
</figure>

## Basic file states

The most important file states are:

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">State</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>tracked</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Git already knows about the file and watches it for changes.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>modified</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The file has changed locally, but the change is not staged yet.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>staged</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The change has been added to the next commit.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>committed</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The change has been saved in the local Git history.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>ignored</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Git intentionally leaves the file out because of an ignore rule.</td>
      </tr>
    </tbody>
  </table>
</div>

## Before proceeding

If you can recognize the basic file states, you are ready to use `git status` more deliberately.
