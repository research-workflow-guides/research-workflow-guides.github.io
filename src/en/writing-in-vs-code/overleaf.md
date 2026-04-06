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
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## What this page is for

Use this page only when local VS Code is not the whole workflow. The goal is simple: keep GitHub as the source of truth, then use Overleaf as a browser-based writing bridge when that helps collaboration or remote editing.

This is not a general Overleaf introduction. It also does not replace the local Git and VS Code flow from the rest of the guide.

## Professional requirement

This workflow assumes that your account or workspace already exposes the GitHub-connected features available in Overleaf Professional. If you cannot see those controls, stop here and stay with the local VS Code workflow instead.

<div class="doc-step-pair">
  <div>
    <p>Check the account area first. The practical question here is whether the account shows the professional access and workspace context that this GitHub-connected workflow depends on.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-1.png" alt="Overleaf account settings showing professional status">
    <figcaption>Check the account area for the professional access this workflow relies on.</figcaption>
  </figure>
</div>

## Link GitHub in Overleaf

Before importing a repository, open Overleaf's synchronization settings and confirm that GitHub Sync is available for the current project. If the account is not linked yet, this is the place to manage that connection.

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

Import the existing repository from GitHub instead of uploading a ZIP copy. That keeps one repository history and avoids creating a disconnected browser-only project.

<div class="doc-step-pair">
  <div>
    <p>Start from the GitHub import entry rather than from a blank project or ZIP upload.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-3.png" alt="Overleaf import dialog with GitHub repository source">
    <figcaption>Begin from the GitHub import path rather than from a blank project or ZIP upload.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then choose the repository that already stores the LaTeX project so Overleaf points to the same manuscript history you use locally.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-4.png" alt="Overleaf dialog for selecting a GitHub repository to import">
    <figcaption>Select the repository that already contains the working manuscript.</figcaption>
  </figure>
</div>

## Work in Overleaf

Once the repository is imported, treat Overleaf as a focused writing surface, not as a different project structure. Keep the same `main.tex`, folder layout, and manuscript files that already work locally.

<div class="doc-step-pair">
  <div>
    <p>Edit, compile, and review the manuscript inside Overleaf only when the browser workflow is the real convenience. Avoid restructuring files differently from the local project unless the whole team agrees.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-5.png" alt="Overleaf editor with the imported LaTeX project open">
    <figcaption>After import, work in the same manuscript structure rather than creating a separate browser-only version.</figcaption>
  </figure>
</div>

## Push changes back to GitHub

After the browser-side edits are ready, use the GitHub integration to push those changes back to the repository. Then return to the normal local workflow for the next round of writing when appropriate.

<div class="doc-step-pair">
  <div>
    <p>The first push-back checkpoint is opening the GitHub sync controls when you are ready to send browser edits back to the repository.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-6.png" alt="Overleaf GitHub integration menu for syncing project changes">
    <figcaption>Open the GitHub sync controls when you are ready to send browser edits back to the repository.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then finish the push-back flow so the repository history stays current and local VS Code work does not drift from browser edits.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-7.png" alt="Overleaf confirmation flow for pushing project changes to GitHub">
    <figcaption>Finish the push-back flow so the repository history stays current.</figcaption>
  </figure>
</div>

## Before you move on

Confirm that all of the following are true:

- the repository was imported from GitHub rather than uploaded separately
- Overleaf edits can be pushed back to the same repository
- local VS Code and browser editing still point to one shared project history
