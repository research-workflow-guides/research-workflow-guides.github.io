---
layout: layouts/doc.njk
title: Version Control
description: Understand tracked, staged, committed, and ignored states well enough to stay calm.
lang: en
section: git-github
order: 7
permalink: /en/git-github/version-control/
translationKey: git-version-control
eyebrow: Step 7
lead: Calm Git use comes from recognizing file states and knowing which files should never enter the repository.
toc:
  - id: learn-the-basic-file-states
    label: Basic file states
  - id: check-status-often
    label: Check status often
  - id: ignore-local-clutter
    label: Ignore local clutter
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Basic file states

The most important file states are:

- tracked
- modified
- staged
- committed
- ignored

You do not need every Git concept at once. These states are enough to understand most day-to-day repository behavior.

## Check status often

`git status` is the safest command to run when you feel unsure.

```bash
git status
```

It tells you what changed, what is staged, and what still needs attention.

## Ignore local clutter

Some files do not belong in version control, such as generated auxiliary files, local caches, or machine-specific clutter.

Use `.gitignore` to keep those files out of commits. The goal is not to hide real work. The goal is to stop noisy local artifacts from polluting the history.

## Self-check

If you can look at `git status` and explain which files are ready to commit, which are still local clutter, and which should be ignored, this page has done its job.
