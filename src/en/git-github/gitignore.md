---
layout: layouts/doc.njk
title: Gitignore
description: Exclude files and folders when you push to GitHub.
lang: en
section: git-github
order: 10
permalink: /en/git-github/gitignore/
translationKey: git-gitignore
eyebrow: Optional
lead: "Use <code>.gitignore</code> to keep generated files, local caches, and machine-specific clutter out of GitHub."
toc:
  - id: ignore-local-clutter
    label: Ignore local clutter
  - id: already-uploaded-clutter-files
    label: Already uploaded clutter files
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Ignore local clutter

You can create a `.gitignore` file to exclude specific files or folders from your GitHub commits.

This is also useful for large files, such as datasets or generated outputs, that are too large to upload to GitHub and should stay on your computer.

<div class="doc-step-pair">
  <div>
    <p>Let's assume you want to ignore all contents within the <code>heavy</code> folder.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-1.png" alt="Example project tree with a heavy folder">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Create a <code>.gitignore</code> file in the root folder.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-2.png" alt="A new .gitignore file in the project root">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-3.png" alt="A .gitignore file containing an ignore rule">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Add the folder name or ignore pattern to <code>.gitignore</code> so Git knows that this path should stay local.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-4.png" alt="Ignored folder shown dimmed in VS Code">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After you save the file, you will then see that the folder is grayed out.</p>
    <p>Commit and push the project after saving the ignore rule.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-5.png" alt="Commit and push after adding a .gitignore rule">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After you commit and push, you will see that the ignored files have not been uploaded to GitHub, but the <code>.gitignore</code> file itself has been uploaded.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore-6.png" alt="GitHub repository where the ignored folder is absent">

  </figure>
</div>

## Already uploaded clutter files

`.gitignore` works only on untracked files. It ignores neither staged nor committed files. You need to remove already tracked files from the cache to apply `.gitignore`.

If you want to remove an already uploaded file or folder from GitHub while keeping it on your computer, enter the following command in the terminal.

```bash
git rm -r --cached <file-or-folder-name>
git commit -m "Stop tracking ignored files"
git push
```

## Before proceeding

Check that the files or folders you want to exclude are listed in `.gitignore`, grayed out in VS Code, and absent from GitHub after commit and push. If a file still appears in Git, confirm whether it was already tracked before the ignore rule was added.
