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
  lastVerified: VS Code and GitHub documentation checked on 2026-09-23. Current Windows screens await review.
  support: The existing VS Code images need updating. macOS and Linux screens await review.
  scopeNote: This guide uses Windows screens. macOS and Linux screens will be reviewed later.
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

In VS Code **Source Control**, click `+` beside **each file** you want to stage. The older image below shows the `+` beside the **Changes heading**, which stages every file, including generated files. Use it only to locate the control. If **Staged Changes** contains files you do not want, click `-` beside those files to unstage them.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-1.png" alt="Older VS Code Source Control showing the Stage All button beside Changes and generated files">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-2.png" alt="Older VS Code Staged Changes list that includes generated LaTeX files">
</figure>

Once **Staged Changes** contains only the files you intend to upload, enter a commit message and select **Commit**. This records the commit locally. The older image below also includes generated files, so rely on the file list you reviewed.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-3.png" alt="Older VS Code Source Control view with a commit message entered">
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

<figure class="image-frame">
  <img src="/assets/images/2.2.3-12.png" alt="Older VS Code notification after Pull completes">
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

The older images below show **Commit & Push** with generated files in the staged list. Do not follow that selection as shown. Use **Publish Branch** above for the first commit.

<figure class="image-frame">
  <img src="/assets/images/2.2.3-5.png" alt="Older VS Code commit menu with generated files in the staged list">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.3-6.png" alt="Older VS Code Commit & Push option with generated files staged">
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
