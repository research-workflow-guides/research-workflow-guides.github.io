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

This guide doesn't compare MiKTeX with TeX Live. The steps here assume you're continuing with MiKTeX.

[Official MiKTeX downloads](https://miktex.org/download)

<div class="doc-section-grid">
  <div>
    <p>The official homepage and download page are the two screens you should expect to see first.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/1.1.3-1.png" alt="MiKTeX homepage">
      <figcaption>Start from the official MiKTeX homepage.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/1.1.3-2.png" alt="MiKTeX download page">
      <figcaption>Choose the download page that matches your platform.</figcaption>
    </figure>
  </div>
</div>

## Install MiKTeX

1. Download the installer from the official MiKTeX download page for your platform.
2. Finish the normal installer flow, then open MiKTeX Console once after installation.
3. Run updates in MiKTeX Console before moving on, so the package database is current.
4. Keep package installation on demand enabled, since that is the working assumption of this guide.
5. Confirm that `latexmk` is available. If it is missing, install it through MiKTeX Console before continuing.

<div class="doc-section-grid">
  <div>
    <p>The installer is straightforward. The key follow-up step is opening MiKTeX Console.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/1.1.3-3.png" alt="MiKTeX installer window">
      <figcaption>The standard installer flow starts here.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/1.1.3-4.png" alt="MiKTeX installation steps">
      <figcaption>Finish the normal setup steps, then launch MiKTeX Console.</figcaption>
    </figure>
  </div>
</div>

<div class="doc-section-grid">
  <div>
    <p>Inside MiKTeX Console, update packages first, then confirm that <code>latexmk</code> is available and that on-demand installation is enabled.</p>
  </div>
  <div class="figure-stack">
    <figure class="image-frame">
      <img src="/assets/images/1.1.3-5.png" alt="MiKTeX Console">
      <figcaption>Open MiKTeX Console after the installer finishes.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/1.1.3-6.png" alt="MiKTeX Console package search for latexmk">
      <figcaption>Search for and install <code>latexmk</code> if it is missing.</figcaption>
    </figure>
    <figure class="image-frame">
      <img src="/assets/images/1.1.3-8.png" alt="MiKTeX package-on-demand confirmation dialog">
      <figcaption>Keep package-on-demand enabled so missing packages can install as needed.</figcaption>
    </figure>
  </div>
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
  <img src="/assets/images/1.1.3-7.png" alt="Strawberry Perl download page">
  <figcaption>Strawberry Perl is the standard fallback for Windows.</figcaption>
</figure>

## Before you move on

Confirm that MiKTeX Console opens and `latexmk -v` runs without errors. If your workflow uses Perl-based tools, verify `perl --version` as well.
