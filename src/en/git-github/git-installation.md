---
layout: layouts/doc.njk
title: Git Installation
description: Install Git and set the basic identity you will reuse across projects.
lang: en
section: git-github
order: 1
permalink: /en/git-github/git-installation/
translationKey: git-git-installation
eyebrow: Topic 1
lead: Install Git first, then set the name and email that should follow your commits across projects.
outcome: Git is available in a new terminal and the global commit name and email are configured.
prerequisites:
  - Permission to install software or use the platform package manager.
  - The name and email address to record in future commits.
completion: "`git --version` succeeds and `git config --global --list` shows the intended name and email."
commonProblems:
  - A terminal opened before installation may not recognize the new `git` command.
  - The commit email should match an address accepted by the GitHub account or its no-reply setting.
verification:
  status: needs-review
  environment: Windows is the detailed installer path; macOS and Linux use official platform installation methods.
  workflow: Git installation, global identity configuration, and terminal verification.
  lastVerified: Pending a current-product walkthrough.
  support: Windows detailed; macOS and Linux supported through official package and command checks.
toc:
  - id: install-git
    label: Install Git
  - id: set-your-identity
    label: Set your identity
  - id: verify-the-install
    label: Verify the install
tags:
  - doc
---
## Install Git

Use the official installer or the standard package manager for your platform. The goal is to make the `git` command available in the terminal and in VS Code.

<div class="doc-step-pair">
  <div>
    <p>Start from the official Git homepage.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-1.png" alt="Git homepage">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then move to the download page and choose the installer that matches your operating system.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-2.png" alt="Git download page">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>The default installer options are fine for most setups. Confirm that the setup wizard starts normally.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-3.png" alt="Git installer steps">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After the installer finishes, return to the terminal and verify that Git is available.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-4.png" alt="Git installation complete">

  </figure>
</div>

## Set your identity

Git records a display name and email address in your commits. Set them once before you begin repository work.

Open a new terminal with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on macOS. Then enter the following command:

```shell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Verify the install

Run the following commands:

```shell
git --version
git config --global --list
```

Confirm that Git responds normally and that your name and email are visible.

If `git --version` works and your global identity is set correctly, move on to the GitHub account step.
