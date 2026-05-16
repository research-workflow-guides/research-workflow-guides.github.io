---
layout: layouts/doc.njk
title: Bibtex
description: Manage references in a .bib file and cite sources from your manuscript.
lang: en
section: writing-in-vs-code
order: 6
permalink: /en/writing-in-vs-code/bibliography-citation/
translationKey: writing-bibliography-citation
eyebrow: Topic 3
lead: Keep reference data in a bibliography file and cite those entries from the manuscript text.
toc:
  - id: what-citations-need
    label: What citations need
  - id: create-a-bib-file
    label: Create a .bib file
  - id: add-a-reference-entry
    label: Add a reference entry
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

A LaTeX citation workflow usually separates the manuscript text from the reference data.

- The manuscript file contains the writing and citation commands.
- The `.bib` file stores reference entries.
- Each reference entry has a citation key.
- The manuscript uses that key when citing the source.

If your journal template or project template already includes bibliography commands, follow that template first. Do not mix multiple bibliography systems in the same project unless you know why.

## Create a .bib file

Create a file named `references.bib` in the project root folder.

Keeping the bibliography file beside the main manuscript makes it easier to track the file in Git and reuse it across chapters or sections.

## Add a reference entry

Add one reference entry to `references.bib`.

```bibtex
@article{smith2024workflow,
  author  = {Smith, Jane and Lee, Min},
  title   = {Research Workflow Example},
  journal = {Example Journal},
  year    = {2024}
}
```

The part after `{` is the citation key. In this example, the key is `smith2024workflow`.

Use short, readable citation keys. A common pattern is `authorYearKeyword`, such as `smith2024workflow` or `kim2025latex`.

## Cite the source

In the manuscript, cite the source with the citation key:

```latex
This workflow follows earlier research practice \cite{smith2024workflow}.
```

If the citation key is wrong or missing from the `.bib` file, LaTeX may show a question mark in the PDF or a warning in the build log.

## Print the bibliography

Your template may already include the bibliography commands. If it does, keep the template version.

For a basic BibTeX-style setup, the end of the manuscript often looks like this:

```latex
\bibliographystyle{plain}
\bibliography{references}
```

The file name is written without `.bib`, so `references.bib` becomes `references`.

Some templates use `biblatex` instead. In that case, the project may use commands such as `\addbibresource{references.bib}` near the top and `\printbibliography` near the end. Use the system your template expects.

## Before proceeding

After adding or changing citations, compile the manuscript again and check the PDF.

If the bibliography does not update immediately, run the build again. Bibliography tools often need more than one build pass before citations and reference lists are fully updated.
