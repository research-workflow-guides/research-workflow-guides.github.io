---
layout: layouts/doc.njk
title: Version Control
description: Inspect commits and file changes with Git Graph in VS Code on Windows.
lang: en
section: git-github
order: 8
permalink: /en/git-github/version-control/
translationKey: git-version-control
eyebrow: Topic 3
lead: On Windows, use Git Graph in VS Code to inspect commit history and file changes.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for VS Code and the Git Graph extension on Windows.
  workflow: Install Git Graph, then inspect commits and file changes.
  lastVerified: Git Graph Marketplace and official Git documentation checked on 2026-09-24. Current Windows screens await review.
  support: The existing images show older Git Graph screens and repository history and need updating.
toc:
  - id: add-extension
    label: Install Git Graph
  - id: git-graph
    label: Git Graph
  - id: interface
    label: Interface
  - id: review-of-changes
    label: Review of changes
  - id: to-reset-to-an-old-version
    label: Inspect an earlier version and Reset
tags:
  - doc
---
<h2 id="add-extension">Install Git Graph</h2>

In VS Code, search for `Git Graph` in **Extensions**. Check that the publisher is `mhutchie`, then select **Install**. The Marketplace link below provides the extension details.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph">Git Graph on Visual Studio Marketplace</a></p>

<figure class="image-frame">
  <img src="/assets/images/gitgraph.png" alt="Older VS Code extension details showing Git Graph by publisher mhutchie installed">
</figure>

## Git Graph

Open the Git repository folder in VS Code, press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>, and run `Git Graph: View Git Graph`. The older screenshots below also show a Source Control button and a **Git Graph** item in the status bar.

<figure class="image-frame">
  <img src="/assets/images/clone-2.png" alt="Older VS Code screen with the Source Control icon highlighted in the activity bar">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-1.png" alt="Older VS Code Source Control screen with the button for opening Git Graph highlighted">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-2.png" alt="Older Windows VS Code screen with the Git Graph status-bar item highlighted">
</figure>

The dots and lines in the graph show how commits and branches connect. `main` points to the local branch, while `origin/main` shows the last known position of the remote branch. The labels do not always point to the same commit.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-3.png" alt="Older Git Graph commit history with main and origin/main labels">
</figure>

## Interface

The numbers in the older screenshot identify these areas.

| Number | Area | What it shows |
| --- | --- | --- |
| 1 | Graph | Dots represent commits; lines connect commits and show where branches diverge. |
| 2 | Description and labels | Commit messages and branch positions such as `main` and `origin/main`. The selected commit and the current branch are different concepts. |
| 3 | Date, author, commit | The commit date shown by the current display setting, the author, and an abbreviated commit ID. The date is not the push time. |

<figure class="image-frame">
  <img src="/assets/images/2.2.5-4.png" alt="Older Git Graph screen labeling the graph, commit description and branch labels, and date, author, and commit ID areas">
</figure>

## Review of changes

Select a commit to list the files changed in that commit. In the older screenshot below, `new file.tex` was added, `revised file.txt` was modified, and `deleted file.txt` was deleted. Colors may vary with display settings, so check the file status as well.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-5%20(1).png" alt="Older Git Graph commit details showing one deleted, one added, and one modified file">
</figure>

Select a file in the commit's changed-file list to open the VS Code diff view. The left side shows the earlier content and the right side shows the content after the commit. In the example below, “Also, I like dogs.” was added to `revised file.txt`.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-6%20(1).png" alt="Older diff view of revised file.txt showing its earlier text on the left and the added sentence Also, I like dogs. on the right">
</figure>

<h2 id="to-reset-to-an-old-version">Inspect an earlier version and Reset</h2>

Select an earlier commit in the graph to inspect its changes. Inspecting a commit this way does not alter your current files or branch. Before choosing a recovery operation, check Source Control for uncommitted changes.

To undo the changes from a commit that has already been shared, `revert` creates a new commit that reverses them. The `Reset current branch to this commit` item in the older screenshot below moves the current branch; do not use it merely to inspect an earlier version.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-9.png" alt="Older VS Code Source Control screen without uncommitted changes, alongside Git Graph">
</figure>

The older image below shows Git Graph's **Reset current branch to this commit** menu. Reset moves the current branch to the selected commit. Check how each option affects the working files and staging area before using it.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-7%20(1).png" alt="Older Git Graph context menu with Reset current branch to this Commit highlighted on an earlier commit">
</figure>

| Option | Effect on the branch and files |
| --- | --- |
| **Soft** | Moves the branch to the selected commit while leaving the staging area and working files unchanged. |
| **Mixed** | Moves the branch and resets the staging area to the selected commit; working files remain unchanged. |
| **Hard** | Moves the branch and resets the staging area and tracked working files to the selected commit. Uncommitted changes may be lost. |

<figure class="image-frame">
  <img src="/assets/images/2.2.5-8.png" alt="Older Git Graph Reset dialog showing Soft, Mixed, and Hard options">
</figure>

Resetting a branch that has already been published to GitHub can make the local and remote histories diverge, so a normal push may be rejected. To undo shared changes, consider `revert`, which records a new reversing commit. **Hard** can discard uncommitted changes; check how to preserve your work before using it.

For details, see Git's [reset documentation](https://git-scm.com/docs/git-reset) and [revert documentation](https://git-scm.com/docs/git-revert).
