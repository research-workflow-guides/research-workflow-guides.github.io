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
lead: A Pull Request is a GitHub review page for branch work before it is merged.
toc:
  - id: what-a-pull-request-means
    label: What a Pull Request means
  - id: push-the-branch-to-github
    label: Push the branch to GitHub
  - id: open-a-pull-request
    label: Open a Pull Request
  - id: review-the-pull-request
    label: Review the Pull Request
  - id: merge-the-pull-request
    label: Merge the Pull Request
tags:
  - doc
---
## What a Pull Request means

A Pull Request, often shortened to PR, is not a separate Git command. It is a GitHub workflow built on top of Git branches, commits, and merges.

A PR asks GitHub to compare one branch with another branch. Usually, your work branch is the compare branch, and `main` is the base branch that will receive the work.

Use a Pull Request when another person should review the work, when the change is large, or when you want a clear discussion record before merging.

## Push the branch to GitHub

Before you can open a Pull Request, the branch must be uploaded to GitHub.

```shell
git push -u origin draft-section
```

The `-u` option connects your local branch with the branch on GitHub. After that, you can usually use `git push` on the same branch.

## Open a Pull Request

After pushing the branch, GitHub may show a `Compare & pull request` button. Click it to start the PR.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-1.png" alt="GitHub repository page showing a Compare and pull request button">
</figure>

Check the branch direction carefully. The base branch is the branch that will receive the changes, usually `main`. The compare branch is the branch that contains your work.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-2.png" alt="GitHub pull request comparison page showing base and compare branches">
</figure>

Write a short title and description. The title should name the work, and the description should explain what changed or what the reviewer should check.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-3.png" alt="GitHub page for creating a pull request with title and description fields">
</figure>

## Review the Pull Request

After the Pull Request is created, GitHub keeps the discussion, commits, checks, and merge status in one place.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-4.png" alt="Created pull request page on GitHub">
</figure>

Use the changed files view to inspect the exact differences before merging. Reviewers can leave comments, approve the PR, or request changes.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-5.png" alt="GitHub pull request page showing changed files for review">
</figure>

If someone requests changes, return to the same branch, edit the files, commit the fix, and push again.

```shell
git add .
git commit -m "Address review comments"
git push
```

The Pull Request updates automatically after the new commit is pushed to the same branch.

## Merge the Pull Request

When the review is finished and the branch is ready, merge the Pull Request on GitHub. After the PR is merged, `main` contains the branch work.

Return to VS Code and update your local `main` branch.

```shell
git switch main
git pull
```

If the branch is no longer needed, delete it after confirming that the merge is complete.

Do not treat a Pull Request as just another way to push. Its value is review: checking the branch direction, reading the file differences, discussing the change, and merging only when the work is ready.
