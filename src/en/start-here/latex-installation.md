---
layout: layouts/doc.njk
title: LaTeX Installation
description: Install MiKTeX and confirm the basic LaTeX workflow is ready.
lang: en
section: start-here
order: 1
permalink: /en/start-here/latex-installation/
activeSection: start-here
langSwitch:
  url: /ko/start-here/
  label: 한국어
eyebrow: Step 1
lead: Install MiKTeX, enable package-on-demand behavior, and confirm the base toolchain is available.
meta:
  - label: Default distribution
    value: MiKTeX
  - label: Goal
    value: Reach a working LaTeX installation with latexmk available.
breadcrumbs:
  - title: English Home
    url: /en/
  - title: Start Here
    url: /en/start-here/
  - title: LaTeX Installation
toc:
  - id: why-miktex
    label: Why MiKTeX
  - id: install-miktex
    label: Install MiKTeX
  - id: platform-notes
    label: Platform notes
  - id: perl-requirement
    label: Perl requirement
  - id: before-you-move-on
    label: Self-check
prevPage:
  title: Start Here category home
  url: /en/start-here/
nextPage:
  title: VS Code Installation
  url: /en/start-here/vs-code-installation/
tags:
  - doc
---
## Why MiKTeX

For this guidebook, MiKTeX is the default distribution because it is lighter to begin with, friendly to first-time users, and able to install missing packages as you work.

This page is not a TeX Live comparison guide. The implementation path here assumes you will continue with MiKTeX.

[Official MiKTeX downloads](https://miktex.org/download)

## Install MiKTeX

1. Download the installer from the official MiKTeX download page for your platform.
2. Finish the normal installer flow, then open MiKTeX Console once after installation.
3. Run updates in MiKTeX Console before moving on, so the package database is current.
4. Keep package installation on demand enabled, since that is the working assumption of this guide.
5. Confirm that `latexmk` is available. If it is missing, install it through MiKTeX Console before continuing.

## Platform notes

### Windows

Windows is the simplest path in this guide. If later workflows need Perl-based tools, install Strawberry Perl.

### macOS

Use the official MiKTeX installer for macOS, then verify both MiKTeX and Perl from the terminal.

### Linux

Treat Linux as a supported-with-caveat path. Follow the MiKTeX documentation for your distribution and verify the toolchain carefully.

## Perl requirement

`latexmk` and later `latexdiff`-style workflows depend on Perl-based tooling.

```bash
perl --version
latexmk -v
```

On Windows, install Strawberry Perl if Perl is missing. On macOS and Linux, verify that Perl is already available before you proceed.

## Before you move on

Confirm that MiKTeX Console opens, `latexmk -v` works, and `perl --version` works if your setup needs Perl-based tools.
