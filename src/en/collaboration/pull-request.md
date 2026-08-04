---
layout: layouts/doc.njk
title: Pull Request
description: Review branch changes on GitHub before merging them into the main project history.
lang: en
section: collaboration
order: 4
permalink: /en/collaboration/pull-request/
translationKey: git-pull-request
eyebrow: Topic 3
lead: A Pull Request is a GitHub review page for branch work before it is merged.
outcome: A pushed task branch is reviewed in a GitHub Pull Request and becomes ready to merge into main.
prerequisites:
  - The task branch is committed and pushed to GitHub.
  - The base branch and intended reviewers are known.
completion: The Pull Request has no unresolved review requests or failing checks and GitHub reports that it is ready to merge.
commonProblems:
  - Selecting the wrong base branch changes what the Pull Request proposes to merge.
  - New commits after review may require another review before merging.
verification:
  status: needs-review
  environment: GitHub web interface; screenshots document a desktop browser path.
  workflow: Opening, reviewing, and merging a Pull Request, then updating local main.
  lastVerified: Pending a current GitHub UI walkthrough.
  support: Browser workflow is platform-independent; GitHub controls may move over time.
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

## Prepare the Pull Request for merge

Before merging, confirm that the requested changes have been addressed, required reviewers have approved the work, and automated checks have passed. GitHub should report that the Pull Request is ready to merge.

Leave the Pull Request open at this point. The next core document explains how to merge the approved PR and update your local `main` branch.

Do not treat a Pull Request as just another way to push. Its value is review: checking the branch direction, reading the file differences, discussing the change, and deciding that the work is ready before it enters `main`.
