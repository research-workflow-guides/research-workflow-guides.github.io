---
layout: layouts/doc.njk
title: Source control
description: Use VS Code Source Control to stash or discard local changes.
lang: en
section: git-github
order: 10
permalink: /en/git-github/source-control/
translationKey: git-source-control
eyebrow: Optional
lead: Manage local changes by saving them for later or discarding them when they are no longer needed.
toc:
  - id: open-changes
    label: Open changes
  - id: stash
    label: Stash
  - id: discard-changes
    label: Discard Changes
  - id: undo-local-commits
    label: Undo local commits
tags:
  - doc
---
## Open changes

Open the Source Control view to see files that have changed since the last commit.

<figure class="image-frame">
  <img src="/assets/images/source-control-1.png" alt="VS Code Source Control view showing changed files">
</figure>

The number on the Source Control icon and next to Changes shows how many files currently have changes.

Click a file under Changes to inspect what changed.

<figure class="image-frame">
  <img src="/assets/images/source-control-2.png" alt="Changed file selected in VS Code Source Control">
</figure>

VS Code opens a comparison view. The left side shows the previous version, and the right side shows the current working tree. Red highlights show removed or previous content, while green highlights show added or current content.

<figure class="image-frame">
  <img src="/assets/images/source-control-3.png" alt="VS Code comparison view showing old and current file versions">
</figure>

## Stash

If you want to temporarily save your changes, you can use the 'stash' feature in Source Control. Stashing can be useful for version control purposes.

To create a stash, click on 'Stash'.

<figure class="image-frame">
  <img src="/assets/images/stash-1.png" alt="VS Code Source Control stash command">
</figure>

To apply a stash, click on 'Apply Stash'.

<figure class="image-frame">
  <img src="/assets/images/stash-2.png" alt="VS Code Source Control apply stash command">
</figure>

## Discard Changes

If you want to discard the changes, you can simply click on the following buttons in the source control.

<figure class="image-frame">
  <img src="/assets/images/discard-changes-1.png" alt="VS Code Source Control discard changes buttons">
</figure>

To discard all changes, click the button next to Changes.

<figure class="image-frame">
  <img src="/assets/images/discard-changes-2.png" alt="VS Code Source Control discard all changes button">
</figure>

## Undo local commits

If you already committed by mistake but have not pushed yet, you can undo the commit and return the files to unstaged changes.

For example, after making a mistaken commit, Source Control may show a `Sync Changes 1↑` button. This means one local commit is waiting to be pushed.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-1.png" alt="VS Code Source Control before making a mistaken commit">
</figure>

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-2.png" alt="VS Code Source Control showing one local commit waiting to sync">
</figure>

To undo only the latest local commit, run:

```shell
git reset --mixed HEAD~1
```

This command cancels the latest commit, keeps the file changes, and returns those changes to the unstaged area.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-3.png" alt="Terminal running git reset mixed HEAD one commit back">
</figure>

After the reset, the files appear under Changes again.

<figure class="image-frame">
  <img src="/assets/images/mistake-commit-4.png" alt="VS Code Source Control showing files returned to unstaged changes">
</figure>

To undo the latest two local commits, change the number:

```shell
git reset --mixed HEAD~2
```

Use this only for commits that have not been pushed yet. If the commit has already been pushed or shared with others, do not reset it unless you understand the consequences.

Before you discard changes, apply a stash, or reset a local commit, check the current state first:

```shell
git status
```

If the current work might still matter, save it in a commit, stash it, or copy the important text elsewhere before running commands that remove or rewrite local history.
