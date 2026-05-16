---
layout: layouts/doc.njk
title: Pull Request
description: Review branch changes on GitHub before merging them into the main project history.
lang: en
section: collaboration
order: 4
permalink: /en/collaboration/pull-request/
translationKey: git-pull-request
eyebrow: Topic 4
lead: A Pull Request lets collaborators inspect, discuss, and approve branch changes before they are merged.
toc:
  - id: what-a-pull-request-means
    label: What a Pull Request means
  - id: open-a-pull-request
    label: Open a Pull Request
  - id: review-changes
    label: Review changes
  - id: merge-the-pull-request
    label: Merge the Pull Request
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## What a Pull Request means

A Pull Request, often shortened to PR, is a request to merge one branch into another branch on GitHub. It is useful when the work should be checked before it becomes part of the main project history.

A PR usually shows:

- which branch contains the new work
- which branch will receive the work
- the commits included in the change
- the exact file differences
- comments, review decisions, and merge status

## Open a Pull Request

Before opening a Pull Request, push your branch to GitHub:

```bash
git push origin draft-section
```

On GitHub, open the repository and create a new Pull Request. Choose `main` as the base branch and choose your work branch, such as `draft-section`, as the compare branch.

Write a short title that names the work. In the description, explain what changed and mention anything the reviewer should check carefully.

## Review changes

The review step is where collaborators read the changes before merging them.

Open the Pull Request and inspect the changed files. A reviewer can leave comments, ask for edits, approve the PR, or request changes.

Good review comments are specific. Instead of saying that something is wrong, point to the line or section and explain what should change.

If someone requests changes, return to your branch, edit the files, commit the fix, and push again:

```bash
git add .
git commit -m "Address review comments"
git push origin draft-section
```

The Pull Request updates automatically after the new commit is pushed.

## Merge the Pull Request

When the review is finished and the branch is ready, merge the Pull Request on GitHub. After the PR is merged, `main` contains the branch work.

Return to VS Code and update your local `main` branch:

```bash
git switch main
git pull
```

If the branch is no longer needed, delete the branch on GitHub or locally after confirming the merge is complete.

## Before proceeding

Use a Pull Request when another person should check the work, when the change is large, or when you want a clear discussion record before merging. For small solo work, a direct merge may be enough.
