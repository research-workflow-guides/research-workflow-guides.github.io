---
layout: layouts/doc.njk
title: VS Code Installation
description: Install VS Code and add the LaTeX Workshop extension.
lang: en
section: initial-setup
order: 2
permalink: /en/initial-setup/vs-code-installation/
translationKey: initial-setup-vs-code-installation
eyebrow: Step 2
lead: Install VS Code, add the LaTeX Workshop extension, and confirm the editor is ready for the first project.
outcome: VS Code opens normally and LaTeX Workshop is installed and enabled.
prerequisites:
  - A working LaTeX distribution from the previous core step.
  - Permission to install VS Code and extensions.
completion: The Extensions view shows LaTeX Workshop as enabled and the Command Palette lists its build command.
commonProblems:
  - The extension can be installed but disabled for the current workspace.
  - VS Code may need to be reloaded before LaTeX Workshop commands appear.
verification:
  status: needs-review
  environment: The guide is being written for Windows; macOS and Linux instructions are planned for later review.
  workflow: VS Code installation and LaTeX Workshop extension setup.
  lastVerified: Pending a current-product walkthrough.
  support: Windows guidance under review. macOS and Linux guidance is planned.
osGuide:
  topic: vs-code-installation
  platform: windows
toc:
  - id: install-vs-code
    label: Install VS Code
  - id: install-latex-workshop
    label: Install LaTeX Workshop
tags:
  - doc
---
{% include "platform-guides/en/vs-code-installation/windows.md" %}
