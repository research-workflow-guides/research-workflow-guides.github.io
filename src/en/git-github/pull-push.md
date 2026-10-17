---
layout: layouts/doc.njk
title: Pull & Push
description: Publish the first commit to GitHub, then exchange later changes with Pull and Push.
lang: en
section: git-github
order: 7
permalink: /en/git-github/pull-push/
translationKey: git-pull-push
eyebrow: Topic 2
lead: Create the first commit from the files added to the empty cloned repository, then use Publish Branch to send it to GitHub. After that, use Pull to receive remote commits and Push to upload local commits.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for VS Code Source Control and the integrated terminal on Windows.
  workflow: Publish the first commit from an empty repository, then use Pull and Push.
  lastVerified: Staging and commit menu screens checked in VS Code on Windows on 2026-10-16. Publish Branch, Pull, and Push were not performed during this screen review.
  support: Existing screenshots illustrate staging and commit menu locations; exclude generated files as instructed. The full workflow was not verified. macOS and Linux screens await review.
toc:
  - id: key-terms
    label: Key terms
  - id: publish-the-first-commit
    label: Publish the first commit
  - id: receive-remote-changes
    label: Receive remote changes
  - id: upload-local-commits
    label: Upload local commits
  - id: check-the-published-commit
    label: Check the published commit
tags:
  - doc
---

<figure class="image-frame">
  <img src="/assets/images/3-topic-1-1.PNG" alt="Existing diagram showing commits sent from one local repository to GitHub and pulled into another">
</figure>

## Key terms

- **Stage**: Choose changes for the next commit.
- **Commit**: Record those changes in local Git history.
- **Push**: Send local commits to GitHub.
- **Pull**: Bring new GitHub commits into the local branch.

## Publish the first commit

Choose the project source files identified by `git status` in the previous step. For example, review `check-document.tex` and the source files in `seed-document`. Decide separately whether you need build outputs such as `.aux`, `.log`, `.fls`, `.synctex.gz`, and PDF files. Add files you want to exclude to [`.gitignore`](/en/git-github/gitignore/) before staging.

In VS Code **Source Control**, click `+` beside **each file** you want to stage, or right-click the file and select **Stage Changes**. The screenshots below show all files, including generated files, selected using the `+` beside **Changes**. In your own work, keep only the `.tex`, `.bib`, and other source files you need. If **Staged Changes** contains an unwanted file, click `-` beside that file to unstage it.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-1.png" alt="Existing VS Code screenshot with a LaTeX project's Changes list and the Stage All Changes button highlighted">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-2.png" alt="Existing VS Code screenshot with LaTeX source and generated files together under Staged Changes">
</figure>

Once **Staged Changes** contains only the files you intend to upload, enter a commit message and select **Commit**. This records the commit locally. The screenshot shows where to enter the message; write one that describes your own changes.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-3.png" alt="Existing VS Code screenshot of a LaTeX project with the commit message field highlighted">
</figure>

After committing, select **Publish Branch** in **Source Control** to upload the current branch to the GitHub repository you cloned earlier. Check the displayed repository address so you do not select **Publish to GitHub**, which creates another repository. Then confirm the files and first commit on GitHub.

## Receive remote changes

After publishing the first branch, when GitHub has new commits, select **Pull** from the **Source Control** `...` menu. Commit or safely set aside any unfinished changes first. If nobody has added a remote commit, there are no new files to receive.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-10.png" alt="Older VS Code Source Control More Actions menu location">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-11%20(1).png" alt="Older VS Code Source Control Pull menu item">
</figure>

You can also run `git pull` in the terminal, or open the **Command Palette** with `Ctrl+Shift+P` and run `Git: Pull`.

```powershell
git pull
```

<figure class="image-frame">
  <img src="/assets/images/2.2.3-10%20(2).png" alt="Older VS Code Command Palette showing Git Pull">
</figure>

## Upload local commits

For later changes, review the files, stage only those you need, and commit them. Then select **Push** from the **Source Control** `...` menu or run `git push` in the terminal. If a push is rejected because another commit was added to the remote branch, Pull and review those changes before pushing again.

```powershell
git push
```

After reviewing the staged files, you can also use **Commit & Push** for later commits on an already published branch. The screenshot shows where to find the menu. Do not copy its generated-file selection; check that only the source files you need remain staged. Use **Publish Branch** above for the first commit.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-6.png" alt="Existing VS Code screenshot of a LaTeX project with Commit & Push highlighted">
</figure>

You can also open the **Command Palette** with `Ctrl+Shift+P` and run `Git: Push`.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-11%20(2).png" alt="Older VS Code Command Palette showing Git Push">
</figure>

## Check the published commit

On GitHub, check the files and latest commit on the branch you uploaded. Locally, run `git status` to check for unexpected remaining changes.

```powershell
git status
```
