---
layout: layouts/doc.njk
title: Clone + First Push
description: Clone the empty repository, add the project files, and publish the first commit.
lang: en
section: git-github
order: 5
permalink: /en/git-github/clone-first-push/
translationKey: git-clone-first-push
eyebrow: Step 5
lead: Clone the empty repository first, then bring the working project into that clone and make the initial push from there.
toc:
  - id: clone-the-empty-repository
    label: Clone the empty repository
  - id: copy-the-project-into-the-clone
    label: Copy the project into the clone
  - id: make-the-first-commit-and-push
    label: First commit and push
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Clone the empty repository

Start by cloning the repository GitHub created for you.

```bash
git clone <repository-url>
cd <repository-folder>
```

<div class="doc-section-grid">
  <div>
    <p>First copy the repository URL from GitHub so the clone target is explicit before you open any local workflow.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-copy-url.png" alt="GitHub repository page with the clone URL copied">
    <figcaption>Copy the repository URL from the GitHub code menu.</figcaption>
  </figure>
</div>

<div class="doc-section-grid">
  <div>
    <p>Then start the clone flow in VS Code if you prefer not to paste the command manually into the terminal.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-command.png" alt="VS Code source control panel with Clone Repository">
    <figcaption>VS Code can start the clone flow directly from the Source Control panel.</figcaption>
  </figure>
</div>

## Copy the project into the clone

Move the working files into the cloned folder instead of trying to push from an unrelated directory. This keeps the remote and local repository history aligned from the beginning.

<div class="doc-section-grid">
  <div>
    <p>Choose the destination folder for the clone before you move any project files around.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-select-folder.png" alt="Folder selection dialog for choosing a clone destination">
    <figcaption>Select a clear destination folder for the cloned repository.</figcaption>
  </figure>
</div>

<div class="doc-section-grid">
  <div>
    <p>After the clone finishes, open that cloned repository as the working folder before copying your project files into it.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/clone-open-repo.png" alt="VS Code after opening the cloned repository">
    <figcaption>Open the cloned repository before you copy your project files into it.</figcaption>
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

<div class="doc-section-grid">
  <div>
    <p>Once the files are inside the clone, start by writing a clear initial commit message.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-message.png" alt="VS Code source control panel with a commit message entered">
    <figcaption>Write the initial commit message before publishing.</figcaption>
  </figure>
</div>

<div class="doc-section-grid">
  <div>
    <p>Then publish that first history with the normal push flow, including the combined commit-and-push action if your interface offers it.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/commit-and-push.png" alt="VS Code commit menu showing Commit & Push">
    <figcaption>Use the combined commit-and-push flow if that matches your interface.</figcaption>
  </figure>
</div>

## Self-check

If GitHub now shows the project files and your local repository is clean after the push, the first remote publication worked.
