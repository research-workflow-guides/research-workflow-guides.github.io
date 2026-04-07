---
layout: layouts/doc.njk
title: Overleaf
description: Use Overleaf Professional as a GitHub-connected writing bridge when local VS Code is not the whole workflow.
lang: en
section: writing-in-vs-code
order: 6
permalink: /en/writing-in-vs-code/overleaf/
translationKey: writing-overleaf
eyebrow: Optional
lead: Use Overleaf Professional only when you need a browser-based writing bridge that still stays connected to the GitHub repository.
toc:
  - id: what-this-page-is-for
    label: Purpose
  - id: professional-requirement
    label: Professional requirement
  - id: link-github-in-overleaf
    label: Link GitHub
  - id: import-from-github
    label: Import from GitHub
  - id: work-in-overleaf
    label: Work in Overleaf
  - id: push-changes-back-to-github
    label: Push back to GitHub
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## What this page is for

Use this page only when local VS Code is not the whole workflow. Keep GitHub as the source of truth and use Overleaf as a writing bridge for collaboration or remote editing.

This is not a general Overleaf introduction and does not replace the local Git and VS Code flow.

## Professional requirement

This workflow requires the GitHub-connected features in Overleaf Professional. If your plan does not include that integration, stay with the local VS Code workflow.

<div class="doc-step-pair">
  <div>
    <p>Check whether GitHub sync is available in your account and workspace before proceeding.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-1.png" alt="Overleaf account settings showing professional status">
    <figcaption>Check the account area for the professional access this workflow relies on.</figcaption>
  </figure>
</div>

## Link GitHub in Overleaf

Before importing a repository, open Overleaf's synchronization settings and confirm that GitHub Sync is available for the current project. Connect at the account level once and reuse it for later projects — this avoids re-authorizing for every new paper.

<div class="doc-step-pair">
  <div>
    <p>This screen is mainly a status and management checkpoint. What matters is whether GitHub Sync is available here for the account or project you plan to use.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-2.png" alt="Overleaf project synchronization page showing GitHub Sync availability">
    <figcaption>Use the synchronization page to confirm that GitHub Sync is available for the project.</figcaption>
  </figure>
</div>

## Import from GitHub

Import from GitHub rather than uploading a ZIP. This keeps one repository history and avoids a disconnected browser-only project.

<div class="doc-step-pair">
  <div>
    <p>Start from the GitHub import path, not from a blank project or ZIP upload.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-3.png" alt="Overleaf import dialog with GitHub repository source">
    <figcaption>Begin from the GitHub import path rather than from a blank project or ZIP upload.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Select the repository that already contains the working manuscript — this keeps Overleaf and local VS Code pointed at the same history.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-4.png" alt="Overleaf dialog for selecting a GitHub repository to import">
    <figcaption>Select the repository that already contains the working manuscript.</figcaption>
  </figure>
</div>

## Work in Overleaf

Once imported, treat Overleaf as a focused writing surface, not a separate project structure. Keep the same `main.tex`, folder layout, and manuscript files that already work locally.

<div class="doc-step-pair">
  <div>
    <p>Edit and review inside Overleaf only when the browser workflow is the real convenience. Do not restructure files differently from the local project unless the whole team agrees.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-5.png" alt="Overleaf editor with the imported LaTeX project open">
    <figcaption>After import, work in the same manuscript structure rather than creating a separate browser-only version.</figcaption>
  </figure>
</div>

## Push changes back to GitHub

When browser-side edits are ready, push them back to the repository via the GitHub integration. Return to the local workflow for the next round of writing.

<div class="doc-step-pair">
  <div>
    <p>Open the GitHub sync controls when you are ready to push browser edits back to the repository.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-6.png" alt="Overleaf GitHub integration menu for syncing project changes">
    <figcaption>Open the GitHub sync controls when you are ready to send browser edits back to the repository.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Finish the push-back flow so the repository stays current and local VS Code work stays aligned.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-7.png" alt="Overleaf confirmation flow for pushing project changes to GitHub">
    <figcaption>Finish the push-back flow so the repository history stays current.</figcaption>
  </figure>
</div>

## Before proceeding

Confirm that all of the following are true:

- the repository was imported from GitHub rather than uploaded separately
- Overleaf edits can be pushed back to the same repository
- local VS Code and browser editing still point to one shared project history
