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
lead: Store reference entries in a .bib file and cite the entries you need by key in the manuscript's .tex file. The same .bib file can be reused across manuscripts.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Existing images show Windows VS Code and MathSciNet screens.
  workflow: Create a .bib file, copy a BibTeX entry, cite it, and print a bibliography.
  lastVerified: 2026-09-23 compared existing images with the current setup guide; live screen check pending.
  support: Existing images show an older project folder structure and need updating.
workflowChecks: false
toc:
  - id: what-citations-need
    label: How BibTeX uses two files
  - id: create-a-bib-file
    label: Prepare a .bib file
  - id: find-a-bibtex-entry
    label: Find a BibTeX entry
  - id: add-the-entry
    label: Add the entry
  - id: cite-the-source
    label: Cite the source
  - id: print-the-bibliography
    label: Check the bibliography
tags:
  - doc
---
<h2 id="what-citations-need">How BibTeX uses two files</h2>

- The `.bib` file stores each reference's bibliographic details and citation key.
- The `.tex` file cites selected entries with citation keys.

In the BibTeX example below, only entries cited with `\cite` in the `.tex` file appear in the bibliography. You can keep many references in one `.bib` file and cite the ones needed for the current manuscript.

<h2 id="create-a-bib-file">Prepare a .bib file</h2>

The `seed-document` example from the previous step already includes `bibliography.bib`; open that file. For a new manuscript, create a `.bib` file in the folder containing its `.tex` file.

<figure class="image-frame">
  <img src="/assets/images/reference-1.png" alt="VS Code explorer menu for creating a new file">
</figure>

If you create a new file, use `reference.bib` as the example name.

<figure class="image-frame">
  <img src="/assets/images/reference-2.png" alt="VS Code explorer showing a new reference.bib file">
</figure>

Keeping the `.bib` file in the manuscript folder lets you track it in Git and use it from other manuscripts in that folder.

## Find a BibTeX entry

<div class="doc-action-row">
  <p>Search for the source in MathSciNet or Google Scholar, or open its journal or publisher page.</p>
  <a class="doc-action-link" href="https://mathscinet.ams.org/">MathSciNet</a>
</div>

The MathSciNet images below show an older interface. In the current interface, follow the **Export → BibTeX → Get Citations → Copy** sequence described in the text.

<figure class="image-frame">
  <img src="/assets/images/reference-3.png" alt="MathSciNet publication search page">
</figure>

Search by the source's title or author.

<figure class="image-frame">
  <img src="/assets/images/reference-4.png" alt="MathSciNet search results for a reference">
</figure>

Open **Export** above the search results and select the entry you want to cite.

<figure class="image-frame">
  <img src="/assets/images/reference-5.png" alt="MathSciNet record page with the Cite button highlighted">
</figure>

Set the citation format to **BibTeX**, select **Get Citations**, and then use **Copy** to copy the entry.

<figure class="image-frame">
  <img src="/assets/images/reference-6.png" alt="MathSciNet citation formatting dialog with BibTeX selected">
</figure>

## Add the entry

Paste the copied BibTeX entry into the `.bib` file you are using. The example below adds it to `reference.bib`.

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
       URL = {https://doi.org/10.1007/978-3-642-61798-0},
}
```

<figure class="image-frame">
  <img src="/assets/images/reference-7.png" alt="VS Code editor showing a BibTeX entry inside reference.bib">
</figure>

On the first line, `MR737190` inside the braces after `@book` is the citation key. Use the same value in the manuscript's `\cite{...}` command.

## Cite the source

```latex
\cite{MR737190}
```

If your manuscript uses the new `reference.bib` file, add these commands before `\end{document}`. The first chooses the bibliography style; the second selects the `.bib` file. Keep the existing `abbrv` style and `bibliography.bib` connection when using the `seed-document` example.

```latex
\bibliographystyle{plain}
\bibliography{reference}
```

<figure class="image-frame">
  <img src="/assets/images/reference-8.png" alt="VS Code editor showing a citation command and bibliography commands in a tex file">
</figure>

Omit the `.bib` extension inside `\bibliography{...}`. Use `\bibliography{reference}` for `reference.bib` or `\bibliography{bibliography}` for `bibliography.bib`.

<h2 id="print-the-bibliography">Check the bibliography</h2>

Open the manuscript's `.tex` file in VS Code, run **Build LaTeX project** from the Command Palette, and check the PDF preview.

<figure class="image-frame">
  <img src="/assets/images/reference-9.png" alt="Compiled PDF showing an in-text citation and references section">
</figure>

Check that the citation in the PDF is not `?` and that the source appears in the bibliography. If the entry is missing, check that the citation key in `.tex` matches the key on the first line of the `.bib` entry.

If the manuscript template loads `biblatex`, do not add the BibTeX commands above. Follow the template's `\addbibresource{...}` and `\printbibliography` setup instead. If the bibliography is missing, check that the build runs the backend specified by the template.

If a citation remains `?` or the bibliography does not update, check the LaTeX Workshop build log for BibTeX or template backend errors. Fix the error, rebuild, and check the PDF.
