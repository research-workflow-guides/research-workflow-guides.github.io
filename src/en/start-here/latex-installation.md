---
layout: layouts/doc.njk
title: LaTeX Installation
description: Install MiKTeX and verify the base LaTeX toolchain is working.
lang: en
section: start-here
order: 1
permalink: /en/start-here/latex-installation/
translationKey: start-here-latex-installation
eyebrow: Step 1
lead: Install MiKTeX, enable on-demand package installation, and verify the base toolchain is ready.
meta:
  - label: Default distribution
    value: MiKTeX
  - label: Goal
    value: Reach a working LaTeX installation with latexmk available.
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
tags:
  - doc
---
## Why MiKTeX

MiKTeX is the default distribution for this guide. It starts lightweight, works well for first-time users, and installs missing packages as you need them.

Use MiKTeX for this installation guide.

[Official MiKTeX downloads](https://miktex.org/download)

<div class="doc-step-pair">
  <div>
    <p>Download it from the MiKTeX website.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-1.png" alt="MiKTeX homepage">
    <figcaption>Download it from the MiKTeX website.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then move to the download page and choose the installer that matches your operating system.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-2.png" alt="MiKTeX download page">
    <figcaption>Choose the download page that matches your platform.</figcaption>
  </figure>
</div>

## Install MiKTeX

1. Download the installer from the official MiKTeX download page for your platform.
2. Finish the normal installer flow, then open MiKTeX Console once after installation.
3. Run updates in MiKTeX Console before moving on, so the package database is current.
4. Keep package installation on demand enabled, since that is the working assumption of this guide.
5. Confirm that `latexmk` is available. If it is missing, install it through MiKTeX Console before continuing.

<div class="doc-step-pair">
  <div>
    <p>The installer itself is straightforward. The first real checkpoint is that the setup wizard reaches its completion screen without errors.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-3.png" alt="MiKTeX setup wizard completion screen">
    <figcaption>The MiKTeX setup wizard should complete without errors.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After setup, search for <code>latexmk</code> in MiKTeX Console and confirm that the package is available for installation.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-4.png" alt="MiKTeX Console package search for latexmk">
    <figcaption>Search for <code>latexmk</code> in MiKTeX Console.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If <code>latexmk</code> is missing, let MiKTeX install it and wait for the package operation to finish.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-5.png" alt="MiKTeX package installation progress window">
    <figcaption>Wait for the package installation to finish.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If a build seems to pause later, look for the MiKTeX package-install prompt. On Windows it can appear behind the editor or as a small hidden dialog preview.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-7.png" alt="VS Code with a hidden MiKTeX package installation prompt preview">
    <figcaption>If the build pauses, check whether a MiKTeX package-install dialog is waiting behind the editor.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>When the package dialog appears, allow MiKTeX to install the missing package so the build can continue.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-8.png" alt="MiKTeX package installation dialog for a missing package">
    <figcaption>Allow MiKTeX to install the missing package when prompted.</figcaption>
  </figure>
</div>

## Platform notes

### Windows

Windows is the simplest path in this guide. If later workflows need Perl-based tools, install Strawberry Perl.

### macOS

Use the official MiKTeX installer for macOS, then verify both MiKTeX and Perl from the terminal.

### Linux

Treat Linux as a supported-with-caveat path. Follow the MiKTeX documentation for your distribution and verify the toolchain carefully.

## Perl requirement

`latexmk` and `latexdiff`-style workflows both depend on Perl.

```bash
perl --version
latexmk -v
```

On Windows, install Strawberry Perl if Perl is missing. On macOS and Linux, verify that Perl is already available before you proceed.

<figure class="image-frame">
  <img src="/assets/images/1.1.3-6.png" alt="Strawberry Perl download page">
  <figcaption>Strawberry Perl is the standard fallback for Windows.</figcaption>
</figure>

## Before you move on

Confirm that MiKTeX Console opens and `latexmk -v` runs without errors. If your workflow uses Perl-based tools, verify `perl --version` as well.
