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
toc:
  - id: why-miktex
    label: Why MiKTeX
  - id: download-miktex
    label: Download MiKTeX
  - id: install-miktex
    label: Install MiKTeX
  - id: platform-notes
    label: Platform notes
  - id: perl-requirement
    label: Perl requirement
  - id: on-demand-packages
    label: Package auto-installation
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Why MiKTeX

MiKTeX is the default distribution for this guide. It starts lightweight, works well for first-time users, and installs missing packages as you need them.

## Download MiKTeX

<div class="doc-step-pair">
  <div>
    <p>Download it from the MiKTeX website.</p>
    <p><a href="https://miktex.org/download">Official MiKTeX downloads</a></p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-1.png" alt="MiKTeX homepage">
    <figcaption>Download it from the MiKTeX website.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>On the download page, choose the installer that matches your operating system.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-2.png" alt="MiKTeX download page">
    <figcaption>Choose the installer that matches your platform.</figcaption>
  </figure>
</div>

## Install MiKTeX

1. Download the installer from the official MiKTeX download page for your platform.
2. Finish the normal installer flow, then open MiKTeX Console once after installation.
3. Run updates in MiKTeX Console before moving on, so the package database is current.
4. Keep on-demand package installation enabled, since that is the working assumption of this guide.
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

## Platform notes

### Windows

For this guide, treat Windows as the default path. Install MiKTeX first, then **install Strawberry Perl as a required dependency** so later `latexmk`/`latexdiff` workflows do not fail because Perl is missing.

- Strawberry Perl (official): <https://strawberryperl.com/>
- After install, open a new terminal and verify:

```powershell
perl --version
where perl
latexmk -v
```

### macOS

Use the official MiKTeX installer for macOS. macOS environments usually expose Perl already (`/usr/bin/perl`), but you should verify from Terminal before moving on.

```bash
perl --version
which perl
latexmk -v
```

If `perl` is not found, install a Perl runtime first, then rerun the checks.

### Linux

Linux is supported, but setup details vary by distribution. Follow MiKTeX’s **official Linux installation page** for your distro and package manager, then verify the toolchain with commands below.

- MiKTeX Linux install docs (official): <https://miktex.org/howto/install-miktex-unx>

Recommended post-install checks:

```bash
perl --version
which perl
latexmk -v
miktex --version
```

If `latexmk` is missing, install it from MiKTeX Console or your distro/MiKTeX package flow, then re-check.

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

## Package auto-installation

When a build pauses mid-compile, MiKTeX is likely fetching a missing package. On Windows, the dialog can appear behind the editor or as a small taskbar preview — look for it before assuming the build has hung.

<div class="doc-step-pair">
  <div>
    <p>If a build seems to pause, look for the MiKTeX package-install prompt. On Windows, it can appear behind the editor or as a small taskbar preview.</p>
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

## Before proceeding

Confirm that MiKTeX Console opens and `latexmk -v` runs without errors. If your workflow uses Perl-based tools, verify `perl --version` as well.
