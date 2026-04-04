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

