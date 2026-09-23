---
layout: layouts/doc.njk
title: Clone
description: Clone an empty private GitHub repository in VS Code on Windows.
lang: en
section: git-github
order: 5
permalink: /en/git-github/clone-first-push/
translationKey: git-clone-first-push
eyebrow: Topic 3
lead: Copy the URL of the empty private repository you created earlier, then clone it in VS Code. Open the cloned folder before adding your project files.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for a Windows desktop browser and VS Code.
  workflow: Copy the empty repository's HTTPS URL, clone in VS Code, open the folder, and check the remote URL.
  lastVerified: GitHub and VS Code documentation checked on 2026-09-23. Current Windows screens await verification.
  support: Existing GitHub and VS Code images need updating. macOS and Linux screens await review.
  scopeNote: This guide uses Windows desktop screens. macOS and Linux screens will be reviewed later.
toc:
  - id: copy-the-empty-repository-url
    label: Copy the empty repository URL
  - id: clone-in-vs-code
    label: Clone in VS Code
  - id: other-clone-methods
    label: Other clone methods
  - id: check-the-clone
    label: Check the clone
tags:
  - doc
---
## Copy the empty repository URL

Open the empty private repository you created earlier and copy its HTTPS URL from **Quick setup**. The existing image shows the **Code** menu of a public repository that already has files; use it only to locate the URL copy control.

<figure class="image-frame">
  <img src="/assets/images/clone-1.png" alt="Older public GitHub repository with the HTTPS URL copy control highlighted in the Code menu">
</figure>

## Clone in VS Code

Open **Source Control** in VS Code.

<figure class="image-frame">
  <img src="/assets/images/clone-2.png" alt="Older VS Code welcome screen with the Source Control icon highlighted">
</figure>

Select **Clone Repository**. If the button is not visible, open the Command Palette with `Ctrl+Shift+P` and run `Git: Clone`.

<figure class="image-frame">
  <img src="/assets/images/clone-3.png" alt="Clone Repository button in an older VS Code Source Control view">
</figure>

Paste the HTTPS URL and select **Clone from URL**. If a sign-in prompt appears for the private repository, finish authentication in the browser and return to VS Code.

<figure class="image-frame">
  <img src="/assets/images/clone-6.png" alt="Repository HTTPS URL pasted into an older VS Code clone prompt">
</figure>

Choose the parent folder where the cloned repository folder will be created. When cloning finishes, select **Open** to open the new repository folder.

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/clone-select-folder.png" alt="Older Windows folder picker for choosing the clone's parent folder">
</figure>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/clone-open-repo.png" alt="Older VS Code prompt asking whether to open the cloned repository">
</figure>

## Other clone methods

You can also select **Clone from GitHub** in VS Code and search for the repository by name. The images below show an older repository picker. If the empty private repository does not appear, use its HTTPS URL instead.

<figure class="image-frame">
  <img src="/assets/images/clone-4.png" alt="Clone from GitHub selected in an older VS Code clone prompt">
</figure>

<figure class="image-frame">
  <img src="/assets/images/clone-5.png" alt="Older VS Code picker listing GitHub repositories">
</figure>

To use a terminal, run these commands from the parent folder where you want the clone. Replace the example URL with your repository's HTTPS URL.

```powershell
git clone https://github.com/OWNER/REPOSITORY.git
cd REPOSITORY
```

## Check the clone

Run these commands in the cloned folder. The clone is ready when `git status` runs without a repository error and `origin` in `git remote -v` points to the URL you copied. An empty repository has no commits or project files yet.

```powershell
git status
git remote -v
```

Move the needed source files from **inside** the `seed-documents` folder downloaded in step 3 into the cloned repository folder. Copying the `seed-documents` folder itself would add an extra folder level.
