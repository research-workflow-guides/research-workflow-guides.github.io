---
layout: layouts/doc.njk
title: Overleaf
description: Import a GitHub repository used in VS Code on Windows into Overleaf and synchronize it manually.
lang: en
section: collaboration
order: 2
permalink: /en/collaboration/overleaf/
translationKey: git-overleaf
eyebrow: Optional
lead: Import the GitHub repository you use in VS Code on Windows into Overleaf for browser collaboration. Run Pull and Push between GitHub and Overleaf manually.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for VS Code on Windows, a GitHub.com repository, and the Overleaf browser interface.
  workflow: Check GitHub Sync access, link the account, import the repository, and use manual Pull and Push.
  lastVerified: Official Overleaf documentation checked on 2026-09-24. Current account and Windows screens await review.
  support: The existing images show older Overleaf account and project screens and need updating.
toc:
  - id: professional-subscription
    label: GitHub Sync access
  - id: link-github
    label: Link GitHub
  - id: import-from-github
    label: Import from GitHub
  - id: work-in-overleaf
    label: Work in Overleaf
  - id: push-changes-back-to-github
    label: Synchronize with GitHub
tags:
  - doc
---
<h2 id="professional-subscription">GitHub Sync access</h2>

GitHub Sync is an Overleaf premium feature. It may be available through an individual subscription, group subscription, or Overleaf Commons, so check whether your account has access.

<div class="doc-step-pair">
  <div>
    <p>Check for <strong>GitHub Sync</strong> in your Overleaf <strong>Account Settings</strong>. This connection procedure requires access to that feature. The older image below only shows an account labeled Professional.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-1.png" alt="Older Overleaf Account Settings screen with a Professional badge">

  </figure>
</div>

## Link GitHub

In **Account Settings > Project Synchronisation**, link your GitHub.com account through **GitHub Sync** and check that it can access the repository you intend to use. **Git integration** is a separate feature that uses an Overleaf project as a Git remote.

<div class="doc-step-pair">
  <div>
    <p>The older image shows an account that is already linked, so it displays <strong>Unlink</strong>. A new connection shows a linking action instead.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-2.png" alt="Older Overleaf Project Synchronisation screen showing an already linked GitHub Sync account with Unlink">

  </figure>
</div>

## Import from GitHub

In Overleaf, choose **New Project > Import from GitHub** to create a new Overleaf project linked to your existing GitHub repository. Overleaf editing history and GitHub commit history are separate; move changes between them manually. You cannot later link an existing Overleaf project to an existing GitHub repository.

<div class="doc-step-pair">
  <div>
    <p>Select <strong>Import from GitHub</strong> in the older menu shown below.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-3.png" alt="Older Overleaf New Project menu with Import from GitHub selected">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Check the owner and repository name, then select <strong>Import to Overleaf</strong> for the intended GitHub.com repository. If it is missing, check the connected GitHub account's repository access.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-4.png" alt="Older Overleaf repository selection screen with an Import to Overleaf button for each repository">

  </figure>
</div>

Overleaf limits project size and file counts, and it does not support Git LFS or submodules. Before importing a repository with many files, check [Overleaf's GitHub Sync limitations](https://docs.overleaf.com/integrations-and-add-ons/git-integration-and-github-synchronization/github-synchronization).

## Work in Overleaf

Once the imported project opens in the Overleaf editor, collaborators invited through **Share** can edit it in the browser. Saved Overleaf changes do not reach GitHub automatically; run GitHub Sync when that work is ready.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-5.png" alt="Older Overleaf editor with an imported LaTeX project and the Share button visible">

  </figure>
</div>

<h2 id="push-changes-back-to-github">Synchronize with GitHub</h2>

Open **Integrations > GitHub** in the Overleaf project to check synchronization status. If it reports new commits on GitHub, Pull them and review the project. Push Overleaf changes to GitHub as a separate action.

<div class="doc-step-pair">
  <div>
    <p>The <strong>GitHub</strong> entry in this older image opens the synchronization dialog.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-6.png" alt="Older Overleaf Integrations menu showing the GitHub entry that opens the sync dialog">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Review the Overleaf edits, then select <strong>Push Overleaf changes to GitHub</strong> to create a GitHub commit. Pull that commit into your local VS Code repository afterward.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/writing-optional/overleaf/2.3.1-7.png" alt="Older GitHub Sync dialog showing the Push Overleaf changes to GitHub button">

  </figure>
</div>

You can enter a commit message when pushing from Overleaf. GitHub shows the connected account as the commit author, so review individual collaborators' edits in Overleaf's separate history.

If edits to the same part conflict during synchronization, Overleaf may create a separate branch on GitHub. Merge that branch into the default branch and check synchronization status again.

Confirm that all of the following are true:

- you created the linked Overleaf project from the existing GitHub repository
- the Overleaf project is linked to the intended GitHub repository
- after pushing from Overleaf, you checked the GitHub commit and pulled it into VS Code
- if a conflict created a separate branch, you merged it into the default branch
