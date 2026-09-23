---
layout: layouts/doc.njk
title: VS Code Installation
description: Install VS Code and LaTeX Workshop on Windows, then check that the extension is enabled.
lang: en
section: initial-setup
order: 2
permalink: /en/initial-setup/vs-code-installation/
translationKey: initial-setup-vs-code-installation
eyebrow: Step 2
lead: Install VS Code and add LaTeX Workshop on Windows. Check that the extension is enabled and that its build command appears.
outcome: VS Code opens normally and LaTeX Workshop is installed and enabled.
prerequisites:
  - MiKTeX, Perl, and latexmk are installed from the preceding step.
  - An internet connection is available to download VS Code and LaTeX Workshop.
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: The guide is being written for Windows; macOS and Linux instructions are planned for later review.
  workflow: VS Code User Installer, LaTeX Workshop installation and enablement, and build-command visibility.
  lastVerified: Official documentation checked on 2026-09-23. Windows screenshots and live behavior await verification.
  support: Windows guidance under review. macOS and Linux guidance is planned.
osGuide:
  topic: vs-code-installation
  platform: windows
toc:
  - id: install-vs-code
    label: Install VS Code
  - id: install-latex-workshop
    label: Install LaTeX Workshop
  - id: check-the-build-command
    label: Check the build command
tags:
  - doc
---
{% include "platform-guides/en/vs-code-installation/windows.md" %}
