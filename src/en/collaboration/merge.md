---
layout: layouts/doc.njk
title: Merge
description: Combine a finished branch back into main when the separate work is ready.
lang: en
section: collaboration
order: 3
permalink: /en/collaboration/merge/
translationKey: git-merge
eyebrow: Topic 3
lead: Merging brings work from one branch into another branch, usually from a task branch back into main.
toc:
  - id: what-a-merge-means
    label: What a merge means
  - id: prepare-the-branches
    label: Prepare the branches
  - id: merge-into-main
    label: Merge into main
  - id: push-the-merge
    label: Push the merge
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## What a merge means

A merge combines the commit history from one branch into another branch. In a common workflow, you create a separate branch for a task, finish the work there, and then merge that branch back into `main`.

Merging does not mean copying files by hand. Git compares the branch histories and brings the selected changes into the branch you are currently using.

Use a merge when:

- the branch work is finished
- you want the changes to become part of `main`
- you are working alone or the team has agreed that the branch is ready

## Prepare the branches

Before merging, commit or stash your current changes. The merge should start from a clean working state.

Open a new terminal with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on macOS. Then move to the branch that should receive the finished work:

```bash
git switch main
```

Then download the latest version of `main`:

```bash
git pull
```

## Merge into main

Merge the finished branch into the branch you are currently using:

```bash
git merge draft-section
```

In this example, `draft-section` is the branch that contains the finished work. `main` is the branch receiving that work.

If Git can combine the changes automatically, the merge will finish immediately. If the same part of a file changed on both branches, Git may stop and ask you to resolve a conflict.

## Push the merge

After the merge succeeds, upload the updated `main` branch to GitHub:

```bash
git push origin main
```

If the merged branch is no longer needed, you can delete it after confirming that the important work is now on `main`.

## Before proceeding

Merge only when you know which branch should receive the changes. If other people need to review the work before it becomes part of `main`, use a Pull Request instead of merging directly.
