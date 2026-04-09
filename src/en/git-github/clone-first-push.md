---
layout: layouts/doc.njk
title: Clone + First Push
description: Clone the empty repository, add the project files, and publish the first commit.
lang: en
section: git-github
order: 5
permalink: /en/git-github/clone-first-push/
translationKey: git-clone-first-push
eyebrow: Topic 3
lead: Clone the empty repository first, then bring the working project into that clone and make the initial push from there.
toc:
  - id: clone-the-empty-repository
    label: Clone the empty repository
  - id: copy-the-project-into-the-clone
    label: Copy the project into the clone
  - id: make-the-first-commit-and-push
    label: First commit and push
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Clone the empty repository

Start by cloning the repository GitHub created for you.

```bash
git clone <repository-url>
cd <repository-folder>
```

<div class="doc-step-pair">
  <div>
    <p>Copy the repository URL from GitHub before opening any local workflow.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-copy-url.png" alt="GitHub repository page with the clone URL copied">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>You can also start the clone flow directly from VS Code instead of pasting the command in the terminal.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-command.png" alt="VS Code source control panel with Clone Repository">

  </figure>
</div>

## Copy the project into the clone

Move the working files into the cloned folder instead of trying to push from an unrelated directory. This keeps the remote and local repository history aligned from the beginning.

<div class="doc-step-pair">
  <div>
    <p>Choose a destination folder for the clone before moving any project files.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-select-folder.png" alt="Folder selection dialog for choosing a clone destination">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After the clone finishes, open that cloned repository as the working folder before copying your project files into it.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-open-repo.png" alt="VS Code after opening the cloned repository">

  </figure>
</div>

## First commit and push

```bash
git status
git add .
git commit -m "Initial project import"
git push origin main
```

If the default branch is not `main`, use the branch name GitHub created for the repository.

<div class="doc-step-pair">
  <div>
    <p>With the files inside the clone, write a clear initial commit message.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-message.png" alt="VS Code source control panel with a commit message entered">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Publish the first commit with a normal push — or use the combined commit-and-push if your interface offers it.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-and-push.png" alt="VS Code commit menu showing Commit & Push">

  </figure>
</div>

## Before proceeding

If GitHub now shows the project files and your local repository is clean after the push, the first remote publication worked.
