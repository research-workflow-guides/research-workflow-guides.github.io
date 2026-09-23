---
layout: layouts/doc.njk
title: Recovery
description: Inspect Git file changes and recover selected versions in the VS Code terminal on Windows.
lang: en
section: git-github
order: 11
permalink: /en/git-github/recovery/
translationKey: git-recovery
eyebrow: Optional
lead: On Windows, check Git status in the VS Code terminal and restore only the files you intend to change.
verificationCard: false
verification:
  status: needs-review
  environment: Written for the VS Code integrated Git terminal on Windows.
  workflow: Check file status, discard or unstage changes, and recover deleted files or versions from older commits.
  lastVerified: Official Git documentation checked on 2026-09-24. Current Windows execution awaits review.
toc:
  - id: what-git-can-recover
    label: What Git can recover
  - id: undo-local-changes
    label: Discard working file edits
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

What you can recover with Git depends on the file's recorded state. You can retrieve committed file versions from history. Save any uncommitted edits you may need before discarding them.

A newly saved file may still be untracked by Git, and staging does not create a commit in history. Before a large edit or folder cleanup, run `git status` and commit the work you need to preserve or keep a separate copy.

<h2 id="undo-local-changes">Discard working file edits</h2>

Before discarding anything, inspect the named file's status, unstaged diff, and staged diff:

```shell
git status --short -- path/to/file.tex
git diff -- path/to/file.tex
git diff --cached -- path/to/file.tex
```

For a previously committed file, `git restore -- path/to/file.tex` discards unstaged edits in the working file and restores its current staged content. If you have already staged changes, that content may differ from the last commit.

```shell
git restore -- path/to/file.tex
```

To discard both staged and unstaged edits in this committed file and return it to the last commit, review those differences first, then run:

```shell
git restore --staged --worktree -- path/to/file.tex
```

This discards the current edits in the named file. Save anything you may need in a separate copy or commit first.

## Unstage files

If you used `git add` too early, remove the named file from the next commit's staged list while keeping its working file:

```shell
git restore --staged -- path/to/file.tex
```

An existing tracked file appears as an unstaged change; a newly added file may appear as untracked. Check the result with `git status`.

## Recover deleted files

If you deleted a committed file, run `git status` to see whether the deletion is staged. Restore an unstaged deletion with:

```shell
git restore -- path/to/file.tex
```

For a staged deletion, use this command to recover the last committed version:

```shell
git restore --staged --worktree -- path/to/file.tex
```

These commands cannot recover an untracked file that was never committed.

## Restore from an older commit

If you need an older version of a file, find its commit in Git Graph or with:

```shell
git log --oneline -- path/to/file.tex
```

Replace `COMMIT_HASH` below with the hash you found. Read that version with `git show` and preserve any current edits you need:

```shell
git show COMMIT_HASH:path/to/file.tex
```

Check `git status` for staged changes to the named file before you run the next command. Then replace only that file's working copy with the selected version:

```shell
git restore --source=COMMIT_HASH --worktree -- path/to/file.tex
```

This command leaves any staged content unchanged. Review the restored file with `git diff -- path/to/file.tex`. If you want to record this version as a new commit, stage the file and commit it.

```shell
git diff -- path/to/file.tex
```

If the restored file is part of a build, save it and check the build result as well.
