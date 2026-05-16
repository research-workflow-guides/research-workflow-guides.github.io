---
layout: layouts/doc.njk
title: Branch
description: Use branches to separate work, switch contexts, and collaborate without disturbing the main line.
lang: en
section: collaboration
order: 2
permalink: /en/collaboration/branch/
translationKey: git-branch
eyebrow: Topic 2
lead: Branches let collaborators work on separate lines of development before sharing changes back to the main project history.
toc:
  - id: what-a-branch-means
    label: What a branch means
  - id: create-a-branch
    label: Create a branch
  - id: switch-branches
    label: Switch branches
  - id: remove-branches
    label: Remove branches
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## What a branch means

A branch is a named line of work inside the same repository. The main branch usually holds the stable project history, while another branch can hold a draft, experiment, fix, or collaborator-specific task.

Working on a branch does not create a separate repository. It creates a separate pointer to a commit history, so you can make commits without immediately changing the main line.

Branches are useful when:

- two people need to work at the same time
- one change may take several commits
- you want to test an idea before merging it into the main work

## Create a branch

Open a new terminal with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on macOS. Then enter the following command:

Create a branch before starting work that should stay separate from `main`.

```bash
git branch draft-section
git switch draft-section
```

You can also create and switch to a new branch in one command:

```bash
git switch -c draft-section
```

Use a short branch name that describes the task, such as `fix-conflict-notes`, `revise-introduction`, or `add-results-table`.

## Switch branches

Switching branches means changing which line of work is currently checked out in your folder. After switching, the files in VS Code update to match the selected branch.

```bash
git switch main
git switch draft-section
```

Before switching branches, commit or stash your current changes. Git may stop the switch if your uncommitted changes would be overwritten.

When you switch branches, you are not deleting work. You are changing the active context: which commits your folder is showing, and where the next commit will be added.

## Remove branches

Remove a branch when the separate line of work is finished, merged, or no longer needed.

You cannot delete the branch you are currently using. First, switch to the branch you want to keep:

```bash
git switch main
```

Then delete the local branch:

```bash
git branch -d draft-section
```

The `-d` option is the safer choice because Git will stop you if the branch has commits that have not been merged. If you are sure the branch should be discarded, you can force the deletion:

```bash
git branch -D draft-section
```

If the branch was already pushed to GitHub, delete the remote branch separately:

```bash
git push origin --delete draft-section
```

## Before proceeding

Use branches for work that should stay isolated until it is ready to share. Before merging or deleting a branch, make sure the important commits have been pushed or merged into the branch you want to keep.
