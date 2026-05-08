---
layout: layouts/doc.njk
title: Clone
description: Choose a clone workflow and open the copied repository in VS Code.
lang: en
section: git-github
order: 5
permalink: /en/git-github/clone-first-push/
translationKey: git-clone-first-push
eyebrow: Topic 3
lead: Choose the clone workflow that matches where you are starting from. There are three ways to clone repositories in GitHub.
toc:
  - id: first-way
    label: First way
  - id: second-way
    label: Second way
  - id: third-way
    label: Third way
  - id: fork
    label: Fork
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## First way

<div class="doc-step-pair">
  <div>
    <p>Open the Source Control view, choose <strong>Clone Repository</strong>, and select <strong>Clone from GitHub</strong>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-2.png" alt="VS Code welcome screen for starting a clone workflow">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Search for the repository you want to clone.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-3.png" alt="VS Code repository picker with GitHub repositories listed">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If VS Code asks for a repository source, choose <strong>Clone from GitHub</strong>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-4.png" alt="VS Code clone source picker with Clone from GitHub selected">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Select the repository from the GitHub search results.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-5.png" alt="VS Code repository picker with a GitHub repository selected">
  </figure>
</div>

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

<div class="doc-step-pair">
  <div>
    <p>Once the folder cloning is completed successfully, you will be able to see the following screen.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-7.png" alt="VS Code showing the cloned repository open in the Explorer">
  </figure>
</div>

## Second way

<div class="doc-step-pair">
  <div>
    <p>Copy the repository URL from GitHub.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-1.png" alt="GitHub repository page with the repository URL copy button highlighted">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>You can also paste the repository URL copied from GitHub directly into VS Code.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/clone-6.png" alt="VS Code clone input for pasting a GitHub repository URL">

  </figure>
</div>

## Third way

Enter these commands in the terminal.

```bash
git clone <repository-url>
cd <repository-folder>
```

## Fork

If you want to copy someone else's public repository, use <strong>Fork</strong>.

<figure class="image-frame">
  <img src="/assets/images/Fork.png" alt="GitHub repository page with the Fork button highlighted">
</figure>

## Before proceeding

If the cloned repository is open in VS Code and the project files are inside it, continue to the first commit and push workflow.
