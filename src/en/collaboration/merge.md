---
layout: layouts/doc.njk
title: Merge
description: Combine a finished branch back into main when the separate work is ready.
lang: en
section: collaboration
order: 4
permalink: /en/collaboration/merge/
translationKey: git-merge
eyebrow: Topic 3
lead: Merging brings work from one branch into another branch, usually from a task branch back into main.
outcome: The completed task branch history is integrated into the local main branch and pushed to GitHub.
prerequisites:
  - The task branch is committed, pushed, and ready to integrate.
  - The local main branch has been updated from the remote before merging.
completion: "`git log --oneline --graph` shows the task history in main and `git status` reports main is clean and up to date."
commonProblems:
  - Merging while checked out on the wrong branch integrates history in the wrong direction.
  - A conflict must be resolved and committed before the merge can finish.
toc:
  - id: what-a-merge-means
    label: What a merge means
  - id: prepare-the-branches
    label: Prepare the branches
  - id: merge-into-main
    label: Merge into main
  - id: push-the-merge
    label: Push the merge
  - id: pull-from-different-branches
    label: Pull from different branches
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

```shell
git switch main
```

Then download the latest version of `main`:

```shell
git pull
```

## Merge into main

Merge the finished branch into the branch you are currently using:

```shell
git merge draft-section
```

In this example, `draft-section` is the branch that contains the finished work. `main` is the branch receiving that work.

If Git can combine the changes automatically, the merge will finish immediately. If the same part of a file changed on both branches, Git may stop and ask you to resolve a conflict.

## Push the merge

After the merge succeeds, upload the updated `main` branch to GitHub:

```shell
git push origin main
```

If the merged branch is no longer needed, you can delete it after confirming that the important work is now on `main`.

## Pull from different branches

Sometimes you are working on one branch, such as `new-contents`, but you need to bring in the latest work from `main`. In that case, first make sure you are on the branch that should receive the changes.

For example, while you are on `new-contents`, run:

```shell
git pull origin main
```

This pulls the latest `main` branch from GitHub and merges it into the branch you are currently using.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-1.png" alt="Terminal running git pull origin main while on another branch">
</figure>

If the two branches changed the same file, Git may stop and ask you to resolve a conflict. VS Code then shows the merge state in Source Control.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-2.png" alt="VS Code Source Control showing merge changes after pulling main into another branch">
</figure>

After you resolve the conflict and stage the files, click `Continue` to create the merge commit.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-3.png" alt="VS Code Source Control Continue button after staged merge changes">
</figure>

VS Code prepares a merge commit message. You can keep the default message or replace it with a short message that explains the merge.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-4.png" alt="VS Code Source Control commit message after pulling main into a branch">
</figure>

Then sync or push the branch so GitHub receives the merge commit.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-5.png" alt="VS Code Source Control Sync Changes button after merge commit">
</figure>

VS Code may warn that the action will pull and push commits for the current branch. Confirm only if you are ready to update that branch on GitHub.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-6.png" alt="VS Code confirmation dialog before syncing branch commits">
</figure>

After the sync finishes, Git Graph shows the merge commit on the current branch.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-7.png" alt="Git Graph showing a merge commit after pulling main into another branch">
</figure>

Remember that plain `git pull` pulls from the upstream branch of your current branch. To pull from `main` while staying on another branch, specify `origin main`.

Merge only when you know which branch should receive the changes. If other people need to review the work before it becomes part of `main`, use a Pull Request instead of merging directly.
