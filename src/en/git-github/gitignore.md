---
layout: layouts/doc.njk
title: Gitignore
description: Use .gitignore in VS Code on Windows to keep generated files and local folders out of Git tracking.
lang: en
section: git-github
order: 12
permalink: /en/git-github/gitignore/
translationKey: git-gitignore
eyebrow: Optional
lead: "On Windows, use <code>.gitignore</code> in VS Code to keep generated files and local folders out of Git tracking."
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for VS Code and the integrated Git terminal on Windows.
  workflow: Add an ignore rule, check whether it applies, and handle files already tracked by Git.
  lastVerified: Official Git and GitHub documentation checked on 2026-09-24. Current Windows screens await review.
  support: The existing images show older VS Code screens and a public GitHub repository and need updating.
toc:
  - id: ignore-local-clutter
    label: Ignore a new folder
  - id: already-uploaded-clutter-files
    label: Stop tracking existing files
tags:
  - doc
---
<h2 id="ignore-local-clutter">Ignore a new folder</h2>

List generated files or local folders that Git should not track in the repository's `.gitignore` file. New files matching a rule are excluded from ordinary `git add` operations.

Ignore rules are useful for generated `.aux` and `.log` files or temporary folders used only on your computer. Decide which source files, such as manuscripts and bibliographies, the project should share and commit those as needed.

<div class="doc-step-pair">
  <div>
    <p>In this example, we will tell Git to ignore the <code>heavy</code> folder. It contains files that Git does not yet track.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-1.png" alt="Older VS Code Explorer with a heavy folder containing an untracked file">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>In VS Code, right-click the repository's root folder and select <strong>New File...</strong>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-2.png" alt="Older VS Code menu selecting New File in the repository root">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Name the new file <code>.gitignore</code>. Place it at the same root level as the example <code>heavy</code> folder.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-3.png" alt="Older VS Code screen entering the .gitignore filename at the repository root">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Enter <code>heavy/</code> on its own line in <code>.gitignore</code>, then save the file. The trailing <code>/</code> marks a directory. This rule applies to directories named <code>heavy</code> below the location of this <code>.gitignore</code>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-4.png" alt="Older VS Code screen entering the heavy/ rule in .gitignore">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After saving the file, VS Code may dim the ignored folder. Check the rule with the Git command below regardless of how the folder appears.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-5.png" alt="Older VS Code screen showing the heavy folder dimmed after saving the heavy/ rule">

  </figure>
</div>

Run this command from the repository root. If the output names the `heavy/` rule in `.gitignore`, Git is ignoring the example file.

```shell
git check-ignore -v heavy/this-is-a-heavy-file.txt
```

Commit and push only `.gitignore` and the source files you intend to share.

<div class="doc-step-pair">
  <div>
    <p>The committed <code>.gitignore</code> appears in your private GitHub repository, while the <code>heavy</code> folder ignored from the start does not. The older screenshot below shows a public-repository example.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-6.png" alt="Older public GitHub repository showing .gitignore but no heavy folder">

  </figure>
</div>

<h2 id="already-uploaded-clutter-files">Stop tracking existing files</h2>

`.gitignore` rules apply to files Git does not yet track. A new rule does not automatically stop tracking a file already added with `git add`. To keep the local file while stopping Git tracking, remove its path from Git's index.

If the example `heavy/` folder is already tracked, start in the repository-root terminal by listing its tracked files. If the output contains only files you intend to stop tracking, remove the folder from Git's index with the commands below. The local working files remain.

```shell
git ls-files -- heavy/
git rm -r --cached -- heavy/
git add .gitignore
git status
```

Review the removal of `heavy/` from tracking and the `.gitignore` change in `git status`, then commit and push only those changes. The folder disappears from the latest GitHub file list, but earlier commits still contain its history. If a new file is not ignored, use `git check-ignore -v` to inspect the matching rule.
