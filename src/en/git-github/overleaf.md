---
layout: layouts/doc.njk
title: Overleaf
description: If your collaborator uses Overleaf instead of VS Code, you can still work in VS Code by connecting Overleaf and GitHub.
lang: en
section: git-github
order: 6
permalink: /en/git-github/overleaf/
translationKey: git-overleaf
eyebrow: Optional
lead: Maintain the workspace as a GitHub repository and connect it to Overleaf. Your collaborator does not need to use GitHub directly. However, sync tasks such as pulling and pushing must be handled manually by you or your collaborator in Overleaf.
toc:
  - id: professional-subscription
    label: Professional subscription
  - id: link-github
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
## Professional subscription

<!-- TODO: Restructure this page around the current Overleaf flow: Premium availability, Link GitHub in Account Settings, Import from GitHub, and Use Integrations to sync. Update the surrounding screenshots/captions to match that structure. -->
This workflow requires the GitHub-connected features in Overleaf Professional. If your plan does not include that integration, stay with the local VS Code workflow.

<div class="doc-step-pair">
  <div>
    <p>Check whether GitHub sync is available in your account and workspace before proceeding.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-1.png" alt="Overleaf account settings showing professional status">

  </figure>
</div>

## Link GitHub

Go to Account Settings and complete the GitHub Sync setup under Project Synchronisation. You can ignore Git integration for now.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-2.png" alt="Overleaf project synchronization page showing GitHub Sync availability">

  </figure>
</div>

## Import from GitHub

Import from GitHub to keep a single repository history instead of creating a disconnected browser-only project.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-3.png" alt="Overleaf import dialog with GitHub repository source">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Choose a repository and click the "Import to Overleaf" button.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-4.png" alt="Overleaf dialog for selecting a GitHub repository to import">

  </figure>
</div>

## Work in Overleaf

Once the import is complete, you will see the following screen. Collaborators connected to the account can now work in Overleaf.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-5.png" alt="Overleaf editor with the imported LaTeX project open">

  </figure>
</div>

## Push changes back to GitHub

If there are changes in Overleaf or Git, click the GitHub button under Integrations to sync.

<div class="doc-step-pair">
  <div>
    <p>Open the GitHub sync controls when you are ready to push browser edits back to the repository.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-6.png" alt="Overleaf GitHub integration menu for syncing project changes">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-7.png" alt="Overleaf confirmation flow for pushing project changes to GitHub">

  </figure>
</div>

## Before proceeding

Confirm that all of the following are true:

- the repository was imported from GitHub rather than uploaded separately
- Overleaf edits can be pushed back to the same repository
- local VS Code and browser editing still point to one shared project history
