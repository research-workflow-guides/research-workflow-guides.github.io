---
layout: layouts/doc.njk
title: Git Installation
description: Install Git and set the basic identity you will reuse across projects.
lang: en
section: git-github
order: 1
permalink: /en/git-github/git-installation/
translationKey: git-git-installation
eyebrow: Step 1
lead: Install Git first, then set the name and email that should follow your commits across projects.
toc:
  - id: install-git
    label: Install Git
  - id: set-your-identity
    label: Set your identity
  - id: verify-the-install
    label: Verify the install
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Install Git

Use the official installer or the package manager that is standard on your platform. The goal is simply to make the `git` command available from the terminal and from VS Code.

<div class="doc-section-grid">
  <div>
    <p>The official homepage and download page are enough for the first installation pass.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/1.3-1.png" alt="Git homepage">
      <figcaption>Start from the official Git homepage.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/1.3-2.png" alt="Git download page">
      <figcaption>Choose the installer for your operating system.</figcaption>
    </figure>
  </div>
</div>

<div class="doc-section-grid">
  <div>
    <p>The default installer flow is usually fine. If you see an editor choice during setup, selecting VS Code is reasonable.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/1.3-3.png" alt="Git installer steps">
      <figcaption>The installer runs through a normal sequence of setup screens.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/1.3-4.png" alt="Git installation complete">
      <figcaption>Finish the setup and return to the terminal for verification.</figcaption>
    </figure>
  </div>
</div>

## Set your identity

Git records a display name and email address in your commits. Set them once before you begin repository work.

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Verify the install

Run the following commands:

```bash
git --version
git config --global --list
```

Confirm that Git responds normally and that your name and email are visible.

## Self-check

If `git --version` works and your global identity is set correctly, move on to the GitHub account step.
