---
layout: layouts/doc.njk
title: Merge
description: Merge an approved Pull Request into main and synchronize the local repository.
lang: en
section: collaboration
order: 5
permalink: /en/collaboration/merge/
translationKey: git-merge
eyebrow: Topic 4
lead: Merge the reviewed task branch through its Pull Request, then bring the resulting main history back to your local repository.
outcome: The approved Pull Request is merged into main on GitHub and the local main branch is synchronized with it.
prerequisites:
  - The Pull Request has no unresolved review requests or failing required checks.
  - The base branch and merge method have been confirmed before merging.
completion: GitHub marks the Pull Request as merged, and local main is clean and up to date after pulling.
commonProblems:
  - Merging before review is complete bypasses the collaboration decision recorded in the Pull Request.
  - Selecting an unintended merge method can produce a history shape that differs from the repository policy.
toc:
  - id: what-a-merge-means
    label: What a merge means
  - id: confirm-the-pull-request-is-ready
    label: Confirm the Pull Request is ready
  - id: merge-the-approved-pull-request
    label: Merge the approved Pull Request
  - id: update-local-main
    label: Update local main
  - id: bring-main-into-a-task-branch
    label: Bring main into a task branch
tags:
  - doc
---
## What a merge means

A merge combines the commit history from one branch into another branch. In this core workflow, the task branch enters `main` through the reviewed Pull Request created in the previous document.

Merging does not mean copying files by hand. Git compares branch histories, and GitHub records the review decision and the merge result on the Pull Request.

The same Git operation can also be run directly in a local repository. Direct local merging can be useful for solo work, but it is not the ordered collaboration path because it bypasses the Pull Request review step.

## Confirm the Pull Request is ready

Return to the Pull Request and check the base and compare branches one more time. The base should normally be `main`, and the compare branch should contain the task work.

Confirm that requested changes have been addressed, required approvals are present, and required checks have passed. Read the final file diff if commits were added after the last review.

## Merge the approved Pull Request

Use the merge method allowed by the repository. GitHub may offer a merge commit, squash merge, or rebase merge. If the team has a documented policy, follow it rather than choosing based only on the shortest button label.

Confirm the merge only after GitHub reports that the Pull Request is ready. When the operation finishes, GitHub marks the PR as merged and `main` contains the reviewed changes. Delete the remote task branch only after confirming that the merge completed successfully.

## Update local main

The merge happened on GitHub, so update the local repository before starting new work. Open a terminal, switch to `main`, and pull the merged history.

```shell
git switch main
git pull
```

Run `git status` and, when useful, `git log --oneline --graph` to confirm that local `main` is clean, up to date, and contains the merged work.

## Bring main into a task branch

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
