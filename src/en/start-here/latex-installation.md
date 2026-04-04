---
layout: layouts/doc.njk
title: LaTeX Installation
description: Install MiKTeX and confirm the basic LaTeX workflow is ready.
lang: en
section: start-here
order: 1
permalink: /en/start-here/latex-installation/
translationKey: start-here-latex-installation
eyebrow: Step 1
lead: Install MiKTeX, enable package-on-demand behavior, and confirm the base toolchain is available.
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

For this guidebook, MiKTeX is the default distribution because it is lighter to begin with, friendly to first-time users, and able to install missing packages as you work.

This page is not a TeX Live comparison guide. The implementation path here assumes you will continue with MiKTeX.

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
    <p>The installer itself is straightforward. After installation, the important follow-up screen is MiKTeX Console.</p>
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
    <p>Inside MiKTeX Console, update packages first, then check whether <code>latexmk</code> is available and keep package-on-demand enabled.</p>
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

`latexmk` and later `latexdiff`-style workflows depend on Perl-based tooling.

```bash
perl --version
latexmk -v
```

On Windows, install Strawberry Perl if Perl is missing. On macOS and Linux, verify that Perl is already available before you proceed.

<figure class="image-frame">
  <img src="/assets/images/1.1.3-7.png" alt="Strawberry Perl download page">
  <figcaption>If Windows does not already provide Perl, Strawberry Perl is the usual fallback.</figcaption>
</figure>

## Before you move on

Confirm that MiKTeX Console opens, `latexmk -v` works, and `perl --version` works if your setup needs Perl-based tools.
