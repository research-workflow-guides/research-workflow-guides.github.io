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
  - id: download-miktex
    label: Download MiKTeX
  - id: install-miktex
    label: Install MiKTeX
  - id: perl-installation
    label: Perl Installation
    children:
      - id: windows
        label: Windows
      - id: macos-linux
        label: macOS / Linux
  - id: package-auto-installation
    label: Package auto-installation
tags:
  - doc
---
## Download MiKTeX

<div class="doc-step-pair">
  <div>
    <div class="doc-action-row">
      <p>Download it from the MiKTeX website.</p>
      <a class="doc-action-link" href="https://miktex.org/download">Official MiKTeX downloads</a>
    </div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-1.png" alt="MiKTeX homepage">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>On the download page, choose the installer that matches your operating system.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-2.png" alt="MiKTeX download page">
  </figure>
</div>

## Install MiKTeX

1. Download the installer from the official MiKTeX download page for your platform.
2. Finish the normal installer flow, then open MiKTeX Console once after installation.
3. Run updates in MiKTeX Console before moving on, so the package database is current.
4. Keep on-demand package installation enabled, since that is the working assumption of this guide.
5. Confirm that `latexmk` is available. If it is missing, install it through MiKTeX Console before continuing.

Linux is supported, but setup details vary by distribution. Follow the **official MiKTeX Linux installation docs** for distro-specific steps.

<p><a class="doc-action-link" href="https://miktex.org/howto/install-miktex-unx">MiKTeX Linux install docs</a></p>

<div class="doc-step-pair">
  <div>
    <p>The installer itself is straightforward. The first real checkpoint is that the setup wizard reaches its completion screen without errors.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-3.png" alt="MiKTeX setup wizard completion screen">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After setup, search for <code>latexmk</code> in MiKTeX Console and confirm that the package is available for installation.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-4.png" alt="MiKTeX Console package search for latexmk">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If <code>latexmk</code> is missing, let MiKTeX install it and wait for the package operation to finish.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-5.png" alt="MiKTeX package installation progress window">
  </figure>
</div>

## Perl Installation

`latexmk` and later `latexdiff`-style workflows depend on Perl-based tools. Operating-system-specific installation and verification steps are below.

### Windows

For this guide, treat Windows as the default path. Install MiKTeX first, then **install Strawberry Perl as a required dependency** so later `latexmk`/`latexdiff` workflows do not fail because Perl is missing.

<div class="doc-action-row">
  <p>Open the official Strawberry Perl site and install it before running the checks.</p>
  <a class="doc-action-link" href="https://strawberryperl.com/">Strawberry Perl</a>
</div>

After install, open a new terminal and verify:

```powershell
perl --version
where perl
latexmk -v
```

<figure class="image-frame">
  <img src="/assets/images/1.1.3-6.png" alt="Strawberry Perl download page">
</figure>

### macOS / Linux

macOS environments usually expose Perl already (`/usr/bin/perl`), while Linux varies by distribution. In both environments, verify from Terminal before moving on.

```bash
perl --version
which perl
latexmk -v
```

If `perl` is not found, install a Perl runtime first, then rerun the checks.

## Package auto-installation

When a build pauses mid-compile, MiKTeX is likely fetching a missing package. On Windows, the dialog can appear behind the editor or as a small taskbar preview — look for it before assuming the build has hung.

<div class="doc-step-pair">
  <div>
    <p>If a build seems to pause, look for the MiKTeX package-install prompt. On Windows, it can appear behind the editor or as a small taskbar preview.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-7.png" alt="VS Code with a hidden MiKTeX package installation prompt preview">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>When the package dialog appears, allow MiKTeX to install the missing package so the build can continue.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-8.png" alt="MiKTeX package installation dialog for a missing package">
  </figure>
</div>
