---
layout: layouts/doc.njk
title: Generate a redlined PDF
description: Use latexdiff on Windows to compare two TeX files and compile a redlined PDF.
lang: en
section: writing-in-vs-code
order: 9
permalink: /en/writing-in-vs-code/revision-pdf-latexdiff/
translationKey: writing-revision-pdf-latexdiff
eyebrow: Optional
lead: On Windows, use latexdiff to compare the earlier and revised LaTeX files, then compile the marked-up TeX output to PDF.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for VS Code and PowerShell on Windows; macOS and Linux steps await writing and review.
  workflow: Prepare earlier and revised TeX files, run latexdiff, choose math markup, and compile the PDF with latexmk.
  lastVerified: Official VS Code, latexdiff, and latexmk documentation and existing images checked on 2026-09-24. Windows execution check pending.
  support: Existing images include earlier filenames and screens and need updating for the current Windows workflow.
toc:
  - id: prepare-old-version
    label: Prepare old version
  - id: prepare-revised-version
    label: Prepare revised version
  - id: run-latexdiff
    label: Run latexdiff
  - id: compile-the-redlined-file
    label: Compile the redlined file
tags:
  - doc
---
## Prepare old version

Copy the earlier `.tex` file you want to compare to `old_version.tex`. Keep project files needed to compile the PDF, such as images and bibliography files, available.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-1.png" alt="Windows File Explorer with the earlier manuscript file old_version highlighted">

  </figure>
</div>

## Prepare revised version

Copy the revised manuscript’s `.tex` file to `revised_version.tex`. Put it in the same folder as `old_version.tex` and check that these are the two versions you intend to compare.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-2.png" alt="Windows File Explorer with the earlier revised filename Check_document highlighted">

  </figure>
</div>

## Run latexdiff

<div class="doc-action-row">
  <p>Use the official latexdiff documentation when you need upstream details about command options or troubleshooting.</p>
  <a class="doc-action-link" href="https://github.com/ftilmann/latexdiff">Official documentation</a>
</div>

<div class="doc-step-pair">
  <div>
    <p>In VS Code, open the folder containing <code>old_version.tex</code> and <code>revised_version.tex</code>. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> to open the Command Palette, then run <code>Terminal: Create New Terminal</code>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-3.png" alt="VS Code Command Palette with Terminal: Create New Terminal selected">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>In the PowerShell terminal, run the following command to generate <code>diff_version.tex</code>:</p>

```powershell
cmd /c "latexdiff --math-markup=0 old_version.tex revised_version.tex > diff_version.tex"
```

  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-4.png" alt="Earlier latexdiff command entered in a PowerShell terminal">

  </figure>
</div>


The command uses `--math-markup=0`, which suppresses math markup. Deleted equations will not appear in the difference file. To show equation changes, choose `1`, `2`, or `3` from the table below and use that value in the command.

| Value | Math markup |
|---|---|
| `0` (`off`) | Suppress math markup and omit deleted equations from the difference file |
| `1` (`whole`) | Mark the whole equation even for a small change |
| `2` (`coarse`) | Mark changes within equations at coarse granularity (default) |
| `3` (`fine`) | Mark small changes within equations at fine granularity |

When the command finishes, check that `diff_version.tex` appears in the folder containing the two input files.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-5.png" alt="Windows File Explorer with the generated diff_version LaTeX file highlighted">

  </figure>
</div>

## Compile the redlined file

If the manuscript uses pdfLaTeX, compile `diff_version.tex` in the same terminal with the following command. For XeLaTeX or LuaLaTeX, replace `-pdf` with `-xelatex` or `-lualatex`, respectively.

```shell
latexmk -pdf diff_version.tex
```

<div class="doc-step-pair">
  <div>
    <p>After compilation, open <code>diff_version.pdf</code> and check that text changes appear as in the example below. Equation markup depends on the selected <code>--math-markup</code> value.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-6.png" alt="Example PDF with deleted text in red and added text in blue">

  </figure>
</div>
