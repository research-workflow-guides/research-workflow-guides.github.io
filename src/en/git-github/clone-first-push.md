---
layout: layouts/doc.njk
title: Clone + First Push
description: Clone the empty repository, add the project files, and publish the first commit.
lang: en
section: git-github
order: 5
permalink: /en/git-github/clone-first-push/
translationKey: git-clone-first-push
eyebrow: Step 5
lead: Clone the empty repository first, then bring the working project into that clone and make the initial push from there.
toc:
  - id: clone-the-empty-repository
    label: Clone the empty repository
  - id: copy-the-project-into-the-clone
    label: Copy the project into the clone
  - id: make-the-first-commit-and-push
    label: First commit and push
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Clone the empty repository

Start by cloning the repository GitHub created for you.

```bash
git clone <repository-url>
cd <repository-folder>
```

## Copy the project into the clone

Move the working files into the cloned folder instead of trying to push from an unrelated directory. This keeps the remote and local repository history aligned from the beginning.

## First commit and push

```bash
git status
git add .
git commit -m "Initial project import"
git push origin main
```

If the default branch is not `main`, use the branch name GitHub created for the repository.

## Self-check

If GitHub now shows the project files and your local repository is clean after the push, the first remote publication worked.

