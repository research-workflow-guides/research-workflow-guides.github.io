---
layout: layouts/doc.njk
title: Pull Request
description: Open a pull request from a work branch and review its changes and feedback.
lang: en
section: collaboration
order: 4
permalink: /en/collaboration/pull-request/
translationKey: git-pull-request
eyebrow: Topic 3
lead: Push your work branch to GitHub and open a pull request into <code>main</code>. Review the changed files and feedback before merging.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for a private personal-account repository in a Windows desktop browser.
  workflow: Opening a pull request, reviewing changes, and preparing to merge.
  lastVerified: GitHub documentation checked on 2026-09-23. Current Windows screens await review.
  support: Existing images use the new-contents example branch. Current Windows and macOS/Linux screens await review.
  scopeNote: This guide uses a private personal-account repository in a Windows desktop browser. macOS and Linux screens will be reviewed later.
toc:
  - id: what-a-pull-request-means
    label: What a Pull Request means
  - id: push-the-branch-to-github
    label: Push the branch to GitHub
  - id: open-a-pull-request
    label: Open a Pull Request
  - id: review-the-pull-request
    label: Review the Pull Request
  - id: prepare-the-pull-request-for-merge
    label: Prepare the Pull Request for merge
tags:
  - doc
---
## What a Pull Request means

A pull request (PR) proposes merging changes from a work branch into another branch on GitHub. It lets collaborators review and discuss those changes before merging.

When creating a PR, select `main` as the base branch that will receive the changes and your work branch as the compare branch. GitHub shows the differences in that direction.

## Push the branch to GitHub

After committing your work, use `git branch --show-current` in the VS Code integrated terminal to confirm that `draft-section` is active. If this branch has not been published yet, push it to GitHub with the following command.

```powershell
git push -u origin draft-section
```

The `-u` option sets the upstream branch for local `draft-section`. On later commits to the same branch, `git push` sends them to GitHub.

## Open a Pull Request

The existing images below use `new-contents` as an example branch. Select `draft-section` when following this guide.

On GitHub, select the `draft-section` branch. Choose `Compare & pull request` above the file list if it appears. Otherwise, open **Pull requests > New pull request**.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-1.png" alt="Existing GitHub Pull requests list with a Compare & pull request button">
</figure>

<figure class="image-frame">
  <img src="/assets/images/pull-requests-2.png" alt="Close-up of the Compare & pull request button in an existing GitHub image">
</figure>

On the PR creation page, confirm `base: main` and `compare: draft-section`. Check that the proposed file changes contain only the intended work.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-3.png" alt="Existing PR creation form with base main, compare new-contents, title, and description">
</figure>

Give the PR a short title. In the description, explain what changed, why, and what needs review. When ready, select **Create pull request**.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-4.png" alt="Existing PR creation form with the Create pull request button highlighted">
</figure>

## Review the Pull Request

On the PR page, use **Conversation** for the description and comments, **Commits** for commit history, **Checks** for automated results, and **Files changed** for file differences.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-5.png" alt="Existing PR Conversation page showing tabs, Reviewers, and merge status">
</figure>

In **Files changed**, check that the PR contains the expected files and inspect each difference. To request a review, select a collaborator under **Reviewers** in the right sidebar. Reviewers can comment, approve, or request changes.

If changes are requested, edit the files on the same `draft-section` branch. In **Source Control**, stage only the intended files, commit them, and run `git push`. The PR updates when those commits reach the branch.

```powershell
git push
```

## Prepare the Pull Request for merge

Confirm that requested changes and the team's review are complete. Check the merge status at the bottom of **Conversation** for conflicts, and satisfy any required approvals or automated checks configured for the repository.

Leave the reviewed PR open. Follow [Merge](/en/collaboration/merge/) to merge it and update your local `main` branch.
