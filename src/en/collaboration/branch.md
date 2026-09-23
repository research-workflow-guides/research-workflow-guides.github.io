---
layout: layouts/doc.njk
title: Branch
description: Create, inspect, switch, and remove branches to keep work separate.
lang: en
section: collaboration
order: 3
permalink: /en/collaboration/branch/
translationKey: git-branch
eyebrow: Topic 2
lead: A new branch separates work from the current commit. Commits made there do not appear on <code>main</code> until the branch is merged.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  environment: Written for the VS Code integrated terminal on Windows.
  workflow: Create, list, switch, and remove a branch after merging.
  lastVerified: Git documentation and the command flow in a disposable local repository checked on 2026-09-23. Current Windows screens await review.
  support: macOS and Linux terminal procedures await review.
  scopeNote: This guide uses the VS Code integrated terminal on Windows. macOS and Linux procedures will be reviewed later.
toc:
  - id: what-a-branch-means
    label: What a branch means
  - id: create-a-branch
    label: Create a branch
  - id: list-branches
    label: List branches
  - id: switch-branches
    label: Switch branches
  - id: remove-branches
    label: Remove branches
tags:
  - doc
---
## What a branch means

A branch is a name that points to a commit in the same repository. A new branch starts at the current commit; as you make commits on it, that name moves to each new commit.

Branches are useful when:

- two people need to work at the same time
- one change may take several commits
- you want to test an idea before merging it into the main work

## Create a branch

In VS Code on Windows, select **Terminal > New Terminal**. Run `git status` to check and set aside unfinished changes. The examples below assume that the default branch is named `main`.

Switch to `main`, [Pull](/en/git-github/pull-push/) remote changes, then create and switch to a new branch. Replace `main` in the first command if your default branch has another name.

```powershell
git switch main
git pull
git switch -c draft-section
```

Choose a short name for one task, such as `revise-introduction` or `add-results-table`.

## List branches

Use `git branch --show-current` to check the active branch. `git branch` lists local branches and marks the active one with `*`.

```powershell
git branch --show-current
git branch
```

To include GitHub branches, refresh the remote information before listing all branches. Entries beginning with `origin/` are the remote branches last fetched from GitHub.

```powershell
git fetch origin
git branch -a
```

## Switch branches

When you switch branches, the files shown in VS Code update to match the selected branch's committed state.

```powershell
git switch main
git switch draft-section
```

Before switching, use `git status` to check unfinished changes, then commit or safely set aside work you need to keep. `git switch` stops if switching would overwrite changes, but non-overlapping changes may carry over to the other branch.

## Remove branches

After merging the work into `main`, you can remove the task branch. Switch to `main`, receive remote changes, and check for commits that exist only on the task branch. No output from `git log` means all of that branch's commits are included in `main`.

```powershell
git switch main
git pull
git log main..draft-section --oneline
```

If there is no output, delete the local task branch. If `-d` refuses, check the merge state again.

```powershell
git branch -d draft-section
```

If the remote branch still exists on GitHub and the team no longer uses it, delete that branch separately.

```powershell
git push origin --delete draft-section
```
