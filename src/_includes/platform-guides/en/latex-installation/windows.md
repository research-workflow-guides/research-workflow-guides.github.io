## Download MiKTeX

<div class="doc-action-row">
  <p>Open the official MiKTeX download page and click Download on the Windows tab to get the installer.</p>
  <a class="doc-action-link" href="https://miktex.org/download">Official MiKTeX downloads</a>
</div>

<figure class="image-frame">
  <img src="/assets/images/reviewed-2026-10-16/miktex-download-page.png" alt="Official MiKTeX download page">
</figure>

## Install MiKTeX

1. Download the Windows installer from the official MiKTeX download page.
2. Finish the normal installer flow, then open MiKTeX Console once after installation.
3. Run updates in MiKTeX Console before moving on, so the package database is current.
4. Keep on-demand package installation enabled, since that is the working assumption of this guide.
5. Confirm that `latexmk` is available. If it is missing, install it through MiKTeX Console before continuing.

<p>The installer itself is straightforward. The first real checkpoint is that the setup wizard reaches its completion screen without errors.</p>

<figure class="image-frame">
  <img src="/assets/images/1.1.3-3.png" alt="MiKTeX setup wizard completion screen">
</figure>

<p>After setup, search for <code>latexmk</code> in MiKTeX Console and confirm that the package is available for installation.</p>

<figure class="image-frame">
  <img src="/assets/images/1.1.3-4.png" alt="MiKTeX Console package search for latexmk">
</figure>

<p>If <code>latexmk</code> is missing, let MiKTeX install it and wait for the package operation to finish.</p>

<figure class="image-frame">
  <img src="/assets/images/1.1.3-5.png" alt="MiKTeX package installation progress window">
</figure>

## Perl Installation

`latexmk` and later `latexdiff`-style workflows depend on Perl-based tools. The Windows installation and verification steps are below.

If Perl is not already available on Windows, install Strawberry Perl after MiKTeX so later `latexmk` and `latexdiff` workflows can run.

<div class="doc-action-row">
  <p>Open the official Strawberry Perl site and install it if Perl is not already available.</p>
  <a class="doc-action-link" href="https://strawberryperl.com/">Strawberry Perl</a>
</div>

<figure class="image-frame">
  <img src="/assets/images/reviewed-2026-10-16/strawberry-perl-download.png" alt="Official Strawberry Perl page with Windows downloads">
</figure>

Open a new PowerShell window and verify:

```powershell
perl --version
where.exe perl
latexmk -v
```

## Package auto-installation

When a build pauses mid-compile, MiKTeX is likely fetching a missing package. On Windows, the dialog can appear behind the editor or as a small taskbar preview — look for it before assuming the build has hung.

<p>If a build seems to pause, look for the MiKTeX package-install prompt. On Windows, it can appear behind the editor or as a small taskbar preview.</p>

<figure class="image-frame">
  <img src="/assets/images/1.1.3-7.png" alt="VS Code with a hidden MiKTeX package installation prompt preview">
</figure>

<p>When the package dialog appears, allow MiKTeX to install the missing package so the build can continue.</p>

<figure class="image-frame">
  <img src="/assets/images/1.1.3-8.png" alt="MiKTeX package installation dialog for a missing package">
</figure>
