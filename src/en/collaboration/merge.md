---
layout: layouts/doc.njk
title: Merge
description: Merge a reviewed pull request and update local main.
lang: en
section: collaboration
order: 5
permalink: /en/collaboration/merge/
translationKey: git-merge
eyebrow: Topic 4
lead: Merge the reviewed pull request into <code>main</code> on GitHub, then update local <code>main</code> in the VS Code integrated terminal on Windows.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for a Windows desktop browser and the VS Code integrated terminal.
  workflow: Merge a pull request, update local main, and optionally bring main into a work branch.
  lastVerified: Official documentation and the command flow in a disposable local repository checked on 2026-09-23. Current Windows screens await review.
  support: Existing images show a conflict on the new-contents work branch. macOS and Linux screens await review.
  scopeNote: This guide uses a Windows desktop browser and the VS Code integrated terminal. macOS and Linux procedures will be reviewed later.
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

Merging applies changes from a work branch to a target branch. In this guide, you merge the reviewed pull request into `main` on GitHub.

GitHub records the reviews and merge result on the pull request. The commit history added to `main` depends on the selected merge method.

## Confirm the Pull Request is ready

At the top of the pull request, confirm `base: main` and `compare: draft-section`. Recheck the files proposed for merging in **Files changed**.

Confirm that requested changes and the team's review are complete. If the repository requires approvals or automated checks, confirm they passed. If new commits arrived after the last review, reread the diff and request another review when needed.

## Merge the approved Pull Request

At the bottom of the PR, check the [merge methods](https://docs.github.com/en/pull-requests/reference/pull-request-merges) allowed by the repository. **Merge pull request** preserves the individual commits and adds a merge commit; **Squash and merge** makes one commit; **Rebase and merge** reapplies commits on `main`. Follow the team's chosen method.

After checking the merge status, select the chosen merge method and its confirmation button. Confirm that the PR shows **Merged** and the changes appear on `main`. If the team has finished using the work branch, you can then choose **Delete branch**.

## Update local main

After merging on GitHub, open the VS Code integrated terminal on Windows. Check and settle unfinished changes with `git status`, switch to local `main`, and pull GitHub's `main` using `--ff-only`.

```powershell
git status
git switch main
git pull --ff-only origin main
```

After the pull, use `git status` to check the current branch and remaining changes, then confirm the merged files are present locally. If `--ff-only` refuses, inspect commits that exist only on local `main`.

## Bring main into a task branch

Use this procedure only while the PR is still open and your work branch needs changes from `main`. Settle unfinished changes, then switch to `draft-section`.

```powershell
git status
git switch draft-section
git fetch origin
git merge origin/main
```

`git fetch origin` refreshes the GitHub branch information, and `git merge origin/main` integrates it into the current `draft-section` branch. The existing images below show an older conflict example using `git pull origin main` on `new-contents`.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-1.png" alt="Existing Windows terminal showing a conflict while bringing main into new-contents">
</figure>

If the branches contain conflicting changes, Git pauses the merge and VS Code lists the affected files under **Source Control > Merge Changes**. Without conflicts, the merge may finish immediately.

See the [official VS Code conflict resolution guide](https://code.visualstudio.com/docs/sourcecontrol/merge-conflicts) for choosing the final content of a conflicted file.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-2.png" alt="Existing VS Code Source Control view listing a conflicted file under Merge Changes">
</figure>

Open each conflicted file, choose the final content, and save it. Stage only the resolved files, then use **Commit** to finish the merge. The **Continue** button in the existing image awaits review on current Windows screens.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-3.png" alt="Existing VS Code screen with staged conflict changes and the Continue button highlighted">
</figure>

After the merge commit, Source Control may show the number of commits to publish. `from_main` in the existing image is an example commit message.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-4.png" alt="Existing VS Code Source Control view showing Sync Changes 2↑ after a from_main commit">
</figure>

After completing the merge commit, run `git push` to publish the work branch. **Sync Changes** in the existing image may run both Pull and Push.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-5.png" alt="Existing VS Code Source Control view highlighting the Sync Changes 2↑ button">
</figure>

If you choose **Sync Changes**, read the branch named in the Pull and Push confirmation. The existing image shows `origin/new-contents`; if you are working on `draft-section`, cancel when the names differ and recheck the active branch.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-6.png" alt="Existing VS Code Sync Changes confirmation naming origin/new-contents as the Pull and Push target">
</figure>

The existing image below shows a merge commit in **Git Graph**. If the branch fast-forwards, there may be no separate merge commit.

<figure class="image-frame">
  <img src="/assets/images/pull-different-branch-7.png" alt="Existing Git Graph showing a merge commit on new-contents and the origin/main marker">
</figure>
