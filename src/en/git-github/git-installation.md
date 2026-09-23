---
layout: layouts/doc.njk
title: Git Installation
description: Install Git for Windows and configure the name and email recorded in commits.
lang: en
section: git-github
order: 1
permalink: /en/git-github/git-installation/
translationKey: git-git-installation
eyebrow: Topic 1
lead: Install Git for Windows, set the name and email recorded in commits, and verify both in a new PowerShell session.
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: This guide uses Windows installation screens; macOS and Linux procedures await writing and verification.
  workflow: Install Git for Windows, set a global name and email, and verify commands in PowerShell.
  lastVerified: 2026-09-23 checked official Git documentation; live Windows installation pending.
  support: Existing Windows installer images need updating. macOS and Linux guides are pending.
  scopeNote: This page currently covers Windows installation. macOS and Linux procedures will be written and verified later.
verificationCard: false
toc:
  - id: install-git
    label: Install Git
  - id: set-your-identity
    label: Set your commit identity
  - id: verify-the-install
    label: Verify the install
tags:
  - doc
---
## Install Git

<div class="doc-step-pair">
  <div>
    <p>Open the <a href="https://git-scm.com/install/windows">official Git for Windows installation page</a>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-1.png" alt="Older Git downloads page showing the Windows button and version 2.40.1">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Download and run the x64 or ARM64 Setup file that matches your Windows PC. When the installer opens, select <strong>Next</strong> to continue.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-2.png" alt="Information screen and Next button in the Git 2.40.1 installer">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>When the default editor screen appears, choose <strong>Use Visual Studio Code as Git's default editor</strong> if you want Git to open VS Code for editing. Review the descriptions on the remaining installer screens as you continue.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-3.png" alt="Git 2.40.1 installer default-editor list with Visual Studio Code selected">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Select <strong>Finish</strong> on the final installer screen. Close any PowerShell or VS Code terminals that were open before installation, then open a new one.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-4.png" alt="Final screen and Finish button in the Git 2.40.1 installer">

  </figure>
</div>

<h2 id="set-your-identity">Set your commit identity</h2>

Git records an author name and email address in commits. The `--global` values below are defaults for your user account on this computer; an individual repository can use different values.

Open a new PowerShell window. In VS Code, you can also open <strong>Terminal &gt; New Terminal</strong> and select PowerShell. Enter these commands:

```shell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

Replace `Your Name` and `you@example.com` with the name and email you want to use. To keep your personal email out of public commits, check the [`noreply` address provided in your GitHub account](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address) and use it here.

## Verify the install

In a new PowerShell window, check the Git version and the global name and email separately:

```shell
git --version
git config --global user.name
git config --global user.email
```

Setup is complete when `git --version` prints a version and the two configuration commands show the name and email you entered. If the terminal cannot find `git`, close any terminal opened before installation and try again in a new PowerShell window.
