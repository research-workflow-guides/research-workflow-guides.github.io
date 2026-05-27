---
layout: layouts/doc.njk
title: Recovery
description: Recover committed work, undo local mistakes, and return safely to a known Git state.
lang: en
section: git-github
order: 11
permalink: /en/git-github/recovery/
translationKey: git-recovery
eyebrow: Optional
lead: Git can help you recover work only after Git has recorded it.
toc:
  - id: what-git-can-recover
    label: What Git can recover
  - id: undo-local-changes
    label: Undo local changes
  - id: unstage-files
    label: Unstage files
  - id: recover-deleted-files
    label: Recover deleted files
  - id: restore-from-an-older-commit
    label: Restore from an older commit
tags:
  - doc
---
## What Git can recover

Git is not an automatic backup for every file on your computer. It can recover work that has been recorded in Git, usually through a commit.

If a file was never saved, staged, committed, or pushed, Git may not be able to recover it. Commit important milestones before risky edits, large rewrites, or folder cleanup.

## Undo local changes

If you edited a tracked file and want to return it to the last committed version, use `git restore`.

```shell
git restore path/to/file.tex
```

To discard all current local changes in tracked files:

```shell
git restore .
```

Use this carefully. The current uncommitted edits will be removed.

## Unstage files

If you used `git add` too early, remove the file from the staging area without deleting your edits:

```shell
git restore --staged path/to/file.tex
```

This keeps the file changed in your folder, but it is no longer staged for the next commit.

## Recover deleted files

If a tracked file was deleted by mistake, restore it from the last committed version:

```shell
git restore path/to/file.tex
```

This works only if Git already knew about the file. A new untracked file that was never committed cannot be recovered this way.

## Restore from an older commit

If you need the version of one file from an older commit, first find the commit hash in Git Graph or with `git log`.

Then restore that file from the selected commit:

```shell
git restore --source <commit-hash> path/to/file.tex
```

This is safer than resetting the whole repository because it restores only the file you name.

Before running recovery commands, check the current state:

```shell
git status
```

If the current edits may still matter, commit them, stash them, or copy the important text elsewhere before discarding changes. Prefer file-level restore commands before using broad reset commands.
