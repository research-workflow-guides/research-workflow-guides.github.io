---
layout: layouts/doc.njk
title: Generate a Revision PDF with latexdiff
description: Compare an old TeX file with a revised one and compile a review PDF with latexdiff.
lang: en
section: writing-in-vs-code
order: 7
permalink: /en/writing-in-vs-code/revision-pdf-latexdiff/
translationKey: writing-revision-pdf-latexdiff
eyebrow: Optional
lead: Use this workflow when you need a review PDF that highlights changes between an earlier TeX version and the current revision.
toc:
  - id: what-this-page-is-for
    label: Purpose
  - id: prepare-old-version
    label: Prepare old version
  - id: prepare-revised-version
    label: Prepare revised version
  - id: run-latexdiff
    label: Run latexdiff
  - id: inspect-diff-version
    label: Inspect diff_version.tex
  - id: compile-the-diff-file
    label: Compile the diff file
  - id: review-the-generated-pdf
    label: Review the PDF
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## What this page is for

Use this workflow when a supervisor, collaborator, or reviewer needs a PDF that clearly marks what changed between two manuscript states.

The workflow is narrow by design: prepare two TeX files, generate `diff_version.tex`, compile it, and read the resulting PDF.

## Prepare old version

Save the earlier manuscript as `old_version.tex`. This should be the specific version you want to compare against, not a random backup.

<div class="doc-step-pair">
  <div>
    <p>Name the comparison input clearly. If the old file is ambiguous, the generated diff PDF will be ambiguous too.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-1.png" alt="Example manuscript file saved as old_version.tex before running latexdiff">
    <figcaption>Prepare the earlier manuscript state as <code>old_version.tex</code>.</figcaption>
  </figure>
</div>

## Prepare revised version

Save the current manuscript state as `revised_version.tex`. The two files should be comparable versions of the same document, not two unrelated drafts.

<div class="doc-step-pair">
  <div>
    <p>Keep the revised manuscript separate from the old snapshot. What matters here is that the current comparison input is clearly distinguishable before you run the command.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-2.png" alt="Current manuscript file prepared separately before running latexdiff">
    <figcaption>Keep the current manuscript as a separate comparison file before running the diff.</figcaption>
  </figure>
</div>

## Run latexdiff

Open a terminal in the directory that contains both files and run:

```bash
latexdiff --math-markup=0 old_version.tex revised_version.tex > diff_version.tex
```

<div class="doc-step-pair">
  <div>
    <p>Open the terminal in the manuscript directory where both TeX inputs are available.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-3.png" alt="VS Code command palette with the Create New Terminal action">
    <figcaption>Open a terminal from the manuscript project before running the diff command.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then run <code>latexdiff</code> to generate <code>diff_version.tex</code>, which still needs inspection and compilation.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-4.png" alt="Terminal output after running latexdiff to produce diff_version.tex">
    <figcaption>Run <code>latexdiff</code> to generate <code>diff_version.tex</code>.</figcaption>
  </figure>
</div>

## Inspect diff_version.tex

Before compiling, open `diff_version.tex` and confirm it was generated correctly. A quick check here catches obvious problems before a failed build.

<div class="doc-step-pair">
  <div>
    <p>You do not need to read every line. Verify that the file exists, the markup looks reasonable, and the diff corresponds to the documents you meant to compare.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-5.png" alt="Project folder showing the generated diff_version file">
    <figcaption>Confirm that the generated diff file appears in the project.</figcaption>
  </figure>
</div>

## Compile the diff file

Compile the generated file as its own target:

```bash
latexmk -pdf diff_version.tex
```

This produces a PDF that highlights insertions and deletions in a reviewer-friendly format.

## Review the generated PDF

Open the compiled PDF and confirm the marked changes are clear enough to send.

<div class="doc-step-pair">
  <div>
    <p>The final check is visual — make sure the markup is readable, equations are intact, and the PDF matches the comparison you intended.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-6.png" alt="Compiled revision PDF showing highlighted manuscript changes">
    <figcaption>The compiled revision PDF should make insertions and deletions easy to review.</figcaption>
  </figure>
</div>

## Before proceeding

Confirm that all of the following are true:

- `old_version.tex` and `revised_version.tex` represent the two manuscript states you actually want to compare
- `diff_version.tex` was generated without confusion about the input files
- `latexmk -pdf diff_version.tex` produced a readable review PDF
