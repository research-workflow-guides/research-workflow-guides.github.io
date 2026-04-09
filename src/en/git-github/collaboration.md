---
layout: layouts/doc.njk
title: Collaboration
description: Use a small-team repository workflow that stays readable and predictable.
lang: en
section: git-github
order: 8
permalink: /en/git-github/collaboration/
translationKey: git-collaboration
eyebrow: Step 8
lead: Small-team collaboration works best when the repository rhythm is boring, explicit, and easy to recover from.
toc:
  - id: agree-on-a-shared-rhythm
    label: Agree on a shared rhythm
  - id: communicate-before-surprise-pushes
    label: Communicate before surprises
  - id: keep-history-readable
    label: Keep history readable
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Agree on a shared rhythm

Teams stay coordinated when everyone shares the same basic expectations:

- pull before major work
- commit coherent units
- push regularly instead of hoarding changes

## Communicate before surprises

If you are about to rename many files, reorganize a folder, or rewrite a shared section, tell the other collaborators first. Most collaboration pain comes from surprise, not from Git itself.

<div class="doc-step-pair">
  <div>
    <p>Before shared work begins, open repository settings to manage access.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-settings-tab.png" alt="GitHub repository page with the Settings tab highlighted">
    <figcaption>Open the repository settings before you invite collaborators.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Open the access page to see who already has repository access.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-access-page.png" alt="GitHub repository access page">
    <figcaption>The access page shows who already has repository access.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>The invitation flow starts by searching for the collaborator by username or email.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-search-collaborator.png" alt="Search field for adding a collaborator on GitHub">
    <figcaption>Search for the collaborator by username or email.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After the correct person appears, confirm the invitation so GitHub can send access to that collaborator.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-add-collaborator.png" alt="GitHub dialog for confirming a collaborator invitation">
    <figcaption>Confirm the invitation once the correct collaborator is selected.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>A pending invitation is a normal intermediate state before the collaborator accepts and joins the repository.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-pending-invite.png" alt="GitHub access page showing a pending collaborator invitation">
    <figcaption>A pending invitation is a normal intermediate state before the collaborator accepts.</figcaption>
  </figure>
</div>

## Keep history readable

Clear commit messages and smaller work units make collaboration calmer. The goal is not perfect history. The goal is history another person can follow.

## Before proceeding

If your collaborators can predict how and when changes will appear in the repository, the workflow is in a good place.
