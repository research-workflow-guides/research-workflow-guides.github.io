---
layout: layouts/doc.njk
title: Source control
description: Inspect, stash, and discard changes or undo an unpublished commit in VS Code on Windows.
lang: en
section: git-github
order: 10
permalink: /en/git-github/source-control/
translationKey: git-source-control
eyebrow: Optional
lead: On Windows, inspect file changes in VS Code Source Control, save unfinished work for later, or discard unwanted changes. You can also undo a local commit that has not been published.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for VS Code Source Control and the integrated terminal on Windows.
  workflow: Inspect changes, create and apply a stash, discard changes, and undo an unpublished local commit.
  lastVerified: VS Code and official Git documentation checked on 2026-09-24. Current Windows screens await review.
  support: The existing images show older Source Control screens and generated files and need updating.
toc:
  - id: open-changes
    label: Open changes
  - id: stash
    label: Save changes with Stash
  - id: discard-changes
    label: Discard Changes
  - id: undo-local-commits
    label: Undo local commits
tags:
  - doc
---
## Open changes

On Windows, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>G</kbd> to open Source Control and see modified, added, or deleted files. **Changes** lists files that are not staged; **Staged Changes** lists files selected for the next commit.

<figure class="image-frame">
  <img src="/assets/images/source-control-1.png" alt="VS Code Source Control view showing changed files">
</figure>

The Source Control badge summarizes changed items in the repository. The number beside **Changes** counts items that have not been staged.

Select a file under **Changes** to inspect its changes.

<figure class="image-frame">
  <img src="/assets/images/source-control-2.png" alt="Changed file selected in VS Code Source Control">
</figure>

In a side-by-side diff, the last committed file appears on the left and the current working file on the right. A narrow editor may show an inline diff instead. Use the added and removed line indicators to inspect the change.

<figure class="image-frame">
  <img src="/assets/images/source-control-3.png" alt="VS Code comparison view showing old and current file versions">
</figure>

<h2 id="stash">Save changes with Stash</h2>

Use a stash to put uncommitted changes aside while you handle another task. A stash stays local and is not uploaded to GitHub by Push. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>, run `Git: Stash`, and enter a descriptive message. To include new, untracked files as well, choose `Git: Stash (Include Untracked)`.

The older screenshot below also shows generated `.aux`, `.log`, and `.pdf` files. Check whether a new file belongs in the stash before including it; use [Gitignore](/en/git-github/gitignore/) rules for generated files you normally exclude from commits.

<figure class="image-frame">
  <img src="/assets/images/stash-1.png" alt="Older VS Code Source Control menu showing the Stash command beside generated files">
</figure>

Use `Git: View Stash` to inspect a stash first. `Git: Apply Stash...` restores the selected changes and keeps the stash entry; `Git: Pop Stash...` removes the entry after applying it successfully. Resolve any conflicts with current work before continuing.

<figure class="image-frame">
  <img src="/assets/images/stash-2.png" alt="Older VS Code Source Control menu showing Apply Latest Stash and Apply Stash commands">
</figure>

## Discard Changes

To discard uncommitted changes in one file, right-click it under **Changes** and select **Discard Changes**. A new, untracked file has no earlier version to restore and may be removed, so check the target first.

<figure class="image-frame">
  <img src="/assets/images/discard-changes-1.png" alt="Older Source Control screen highlighting the discard action for an untracked file">
</figure>

The discard button beside **Changes** discards changes across the list. Use the file action when you only intend to discard one file, and review the confirmation dialog's file list before discarding everything.

<figure class="image-frame">
  <img src="/assets/images/discard-changes-2.png" alt="Older Source Control screen highlighting the discard action for the entire Changes list">
</figure>

## Undo local commits

If you made the last commit but have not pushed it, you can remove that commit while keeping its file changes in your working folder. First check the current branch and the commit you intend to undo.

In the example below, `Sync Changes 1↑` means the local branch is one commit ahead of its remote branch. Confirm that the commit has not been pushed before continuing.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-1.png" alt="Older VS Code screen preparing to commit seven new image files and one modified file">
</figure>

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-2.png" alt="Older VS Code screen showing Sync Changes 1↑ for a local branch one commit ahead of the remote">
</figure>

To undo only the latest unpublished commit on the current branch, run this command in the integrated terminal:

```shell
git reset --mixed HEAD~1
```

This command moves the current branch back one commit and resets the staging area while keeping the working files. Modified existing files appear under **Changes**; files first added in the undone commit may appear as untracked files.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-3.png" alt="Older PowerShell terminal running git reset --mixed HEAD~1">
</figure>

After the reset, inspect the remaining files in Source Control and stage only those you still need.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-4.png" alt="Older VS Code screen showing modified and untracked files in Changes after Reset">
</figure>

Do not use this Reset command for a commit that has already been pushed or shared. If you need a new commit that reverses published changes, see the [Git revert documentation](https://git-scm.com/docs/git-revert).

Before discarding changes, applying a stash, or resetting a commit, run `git status` to review modified, staged, and untracked files. Preserve work you might need in a separate commit or copy first.

```shell
git status
```
