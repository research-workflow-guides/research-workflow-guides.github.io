---
layout: layouts/doc.njk
title: Version Control
description: Understand tracked, modified, staged, and committed states well enough to stay calm.
lang: en
section: git-github
order: 7
permalink: /en/git-github/version-control/
translationKey: git-version-control
eyebrow: Topic 2
lead: Calm Git use comes from recognizing file states during normal repository work.
toc:
  - id: learn-the-basic-file-states
    label: Basic file states
  - id: check-status-often
    label: Check status often
  - id: before-proceeding
    label: Before proceeding
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

`git status` is the right command when you feel unsure.

```bash
git status
```

It tells you what changed, what is staged, and what still needs attention.

## Before proceeding

If you can look at `git status` and explain which files are modified, staged, and ready to commit, this page has done its job.
