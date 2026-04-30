---
layout: layouts/doc.njk
title: Generate a redlined PDF
description: Compare an old TeX file with a revised TeX file and compile a redlined PDF.
lang: en
section: writing-in-vs-code
order: 7
permalink: /en/writing-in-vs-code/revision-pdf-latexdiff/
translationKey: writing-revision-pdf-latexdiff
eyebrow: Optional
lead: Use this workflow when a supervisor, collaborator, or reviewer needs a PDF that clearly marks what changed between two manuscript states.
toc:
  - id: prepare-old-version
    label: Prepare old version
  - id: prepare-revised-version
    label: Prepare revised version
  - id: run-latexdiff
    label: Run latexdiff
  - id: compile-the-diff-file
    label: Compile the redlined file
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Prepare old version

Save the earlier manuscript as `old_version.tex`. This should be the specific version you want to compare against, not a random backup. You need only the TeX file, not other files.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-1.png" alt="Example manuscript file saved as old_version.tex before running latexdiff">

  </figure>
</div>

## Prepare revised version

Prepare a revised TeX file. For example, the name of the revised file is `Check_document.tex`.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-2.png" alt="Current manuscript file prepared separately before running latexdiff">

  </figure>
</div>

## Run latexdiff

<div class="doc-step-pair">
  <div>
    <p>Open the terminal in the manuscript directory where both TeX inputs are available.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-3.png" alt="VS Code command palette with the Create New Terminal action">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then run <code>latexdiff</code> to generate <code>diff_version.tex</code>. Enter the following command in the terminal:</p>

```bash
latexdiff --math-markup=0 old_version.tex revised_version.tex > diff_version.tex
```

    <p>Press Enter to run the command.</p>

  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-4.png" alt="Terminal output after running latexdiff to produce diff_version.tex">

  </figure>
</div>


By changing the number in `--math-markup=<number>`, you can adjust how precisely the changes inside equations are displayed.

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Code</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Value</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:left">Behavior</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>--math-markup=0</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>off</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Math changes not shown (current setting)</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>--math-markup=1</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>coarse</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Entire math environment compared as one unit</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>--math-markup=2</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>whole</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Whole environment marked if any change occurred</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>--math-markup=3</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>fine</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Fine-grained markup inside math expressions</td>
      </tr>
    </tbody>
  </table>
</div>

After running latexdiff in the terminal, `diff_version.tex` will be generated.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-5.png" alt="Project folder showing the generated diff_version file">

  </figure>
</div>

## Compile the redlined file

Compile the generated TeX file:

```bash
latexmk -pdf diff_version.tex
```

<div class="doc-step-pair">
  <div>
    <p>If the compilation succeeds, you will get a redlined PDF with all changes marked as shown below.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/revision-pdf-latexdiff/2.3.2-6.png" alt="Compiled redlined PDF showing highlighted manuscript changes">

  </figure>
</div>

## Before proceeding

Confirm that all of the following are true:

- `old_version.tex` and `revised_version.tex` represent the two manuscript states you actually want to compare
- `diff_version.tex` was generated without confusion about the input files
- `latexmk -pdf diff_version.tex` produced a readable redlined PDF
