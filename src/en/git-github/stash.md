---
layout: layouts/doc.njk
title: Source control
description: Use VS Code Source Control to stash or discard local changes.
lang: en
section: git-github
order: 10
permalink: /en/git-github/source-control/
translationKey: git-stash
eyebrow: Optional
lead: Manage local changes by saving them for later or discarding them when they are no longer needed.
toc:
  - id: open-changes
    label: Open changes
  - id: stash
    label: Stash
  - id: discard-changes
    label: Discard Changes
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
