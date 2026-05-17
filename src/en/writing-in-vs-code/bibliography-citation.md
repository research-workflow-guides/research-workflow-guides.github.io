---
layout: layouts/doc.njk
title: BibTeX
description: Manage references in a .bib file and cite sources from your manuscript.
lang: en
section: writing-in-vs-code
order: 6
permalink: /en/writing-in-vs-code/bibliography-citation/
translationKey: writing-bibliography-citation
eyebrow: Topic 3
lead: In LaTeX, it is convenient to organize references in a .bib file. Sources that are not cited in the .tex file do not appear in the compiled PDF, so one .bib file can be shared across multiple papers.
toc:
  - id: what-citations-need
    label: What citations need
  - id: create-a-bib-file
    label: Create a .bib file
  - id: find-a-bibtex-entry
    label: Find a BibTeX entry
  - id: add-the-entry
    label: Add the entry
  - id: cite-the-source
    label: Cite the source
  - id: print-the-bibliography
    label: Print the bibliography
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## What citations need

A BibTeX workflow uses two files together.

- The `.bib` file stores reference entries.
- The `.tex` file cites selected entries with citation keys.

Only the entries cited in the `.tex` file appear in the compiled PDF. This lets you keep many references in one bibliography file while printing only the sources used in the current manuscript.

## Create a .bib file

Create a new file in the project root folder.

<figure class="image-frame">
  <img src="/assets/images/reference-1.png" alt="VS Code explorer menu for creating a new file">
</figure>

Name the file `reference.bib`.

<figure class="image-frame">
  <img src="/assets/images/reference-2.png" alt="VS Code explorer showing a new reference.bib file">
</figure>

Keeping the `.bib` file beside the manuscript makes it easy to track the reference file in Git and reuse it across related papers.

## Find a BibTeX entry

Open a bibliographic database such as [MathSciNet](https://mathscinet-ams-org.proxy1.cl.msu.edu/mathscinet/publications-search), Google Scholar, a journal website, or a publisher page.

<figure class="image-frame">
  <img src="/assets/images/reference-3.png" alt="MathSciNet publication search page">
</figure>

Search for the book, article, or paper you want to cite.

<figure class="image-frame">
  <img src="/assets/images/reference-4.png" alt="MathSciNet search results for a reference">
</figure>

Open the record and choose the citation tool.

<figure class="image-frame">
  <img src="/assets/images/reference-5.png" alt="MathSciNet record page with the Cite button highlighted">
</figure>

Select `BibTeX`, then copy the citation entry.

<figure class="image-frame">
  <img src="/assets/images/reference-6.png" alt="MathSciNet citation formatting dialog with BibTeX selected">
</figure>

## Add the entry

Paste the copied BibTeX entry into `reference.bib`.

```bibtex
@book {MR737190,
    AUTHOR = {Gilbarg, David and Trudinger, Neil S.},
     TITLE = {Elliptic partial differential equations of second order},
    SERIES = {Grundlehren der mathematischen Wissenschaften [Fundamental
              Principles of Mathematical Sciences]},
    VOLUME = {224},
   EDITION = {Second},
 PUBLISHER = {Springer-Verlag, Berlin},
      YEAR = {1983},
     PAGES = {xiii+513},
      ISBN = {3-540-13025-X},
   MRCLASS = {35Jxx (35-01)},
  MRNUMBER = {737190},
MRREVIEWER = {O.\ John},
       DOI = {10.1007/978-3-642-61798-0},
       URL = {https://doi-org.proxy1.cl.msu.edu/10.1007/978-3-642-61798-0},
}
```

<figure class="image-frame">
  <img src="/assets/images/reference-7.png" alt="VS Code editor showing a BibTeX entry inside reference.bib">
</figure>

The part after `{` is the citation key. In this example, the key is `MR737190`.

## Cite the source

In the manuscript, cite the source with the citation key.

```latex
\cite{MR737190}
```

Then tell LaTeX which bibliography file to use.

```latex
\bibliographystyle{plain}
\bibliography{reference}
```

<figure class="image-frame">
  <img src="/assets/images/reference-8.png" alt="VS Code editor showing a citation command and bibliography commands in a tex file">
</figure>

The file name is written without `.bib`, so `reference.bib` becomes `reference`.

## Print the bibliography

Compile the manuscript and check the PDF.

<figure class="image-frame">
  <img src="/assets/images/reference-9.png" alt="Compiled PDF showing an in-text citation and references section">
</figure>

The citation appears in the manuscript, and the cited entry appears in the references section. If a reference exists in `reference.bib` but is never cited in the `.tex` file, it will not appear in the PDF.

Some templates use `biblatex` instead of BibTeX. In that case, the project may use commands such as `\addbibresource{reference.bib}` near the top and `\printbibliography` near the end. Use the system your template expects.

## Before proceeding

After adding or changing citations, compile the manuscript again and check the PDF.

If the bibliography does not update immediately, run the build again. Bibliography tools often need more than one build pass before citations and reference lists are fully updated.
