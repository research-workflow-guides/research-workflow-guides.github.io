---
layout: layouts/doc.njk
title: LaTeX Installation
description: Install MiKTeX and verify the base LaTeX toolchain is working.
lang: en
section: initial-setup
order: 1
permalink: /en/initial-setup/latex-installation/
translationKey: initial-setup-latex-installation
eyebrow: Step 1
lead: Install MiKTeX, enable on-demand package installation, and verify the base toolchain is ready.
outcome: MiKTeX, Perl, and latexmk are installed and available from a new terminal.
prerequisites:
  - Permission to install software on the computer.
  - A stable internet connection for installers and LaTeX packages.
completion: A new terminal prints version information for both `perl --version` and `latexmk -v`.
commonProblems:
  - A package-install prompt may be hidden behind VS Code during the first build.
  - A newly installed command may require closing and reopening the terminal.
verification:
  status: needs-review
  screenshots: needs-update
  environment: The guide is being written for Windows; macOS and Linux instructions are planned for later review.
  workflow: MiKTeX, Perl, latexmk, and on-demand package installation.
  lastVerified: Existing Windows installation screenshots need updating. Pending a current-product walkthrough.
  support: Windows guidance under review. macOS and Linux guidance is planned.
osGuide:
  topic: latex-installation
  platform: windows
toc:
  - id: download-miktex
    label: Download MiKTeX
  - id: install-miktex
    label: Install MiKTeX
  - id: perl-installation
    label: Perl Installation
  - id: package-auto-installation
    label: Package auto-installation
tags:
  - doc
---
{% include "platform-guides/en/latex-installation/windows.md" %}
