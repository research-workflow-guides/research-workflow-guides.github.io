---
layout: layouts/doc.njk
title: GitHub
description: Use a small-team repository workflow that stays readable and predictable.
lang: en
section: collaboration
order: 1
permalink: /en/collaboration/collaboration/
translationKey: git-collaboration
eyebrow: Topic 1
lead: Small-team collaboration works best when the repository rhythm is boring, explicit, and easy to recover from.
outcome: The repository has an invited collaborator and a shared rule for pulling, committing, and communicating large changes.
prerequisites:
  - A GitHub repository exists and you have permission to manage access.
  - The collaborator's GitHub username or email address is known.
completion: The collaborator appears in repository access settings and can open the private repository after accepting the invitation.
commonProblems:
  - An invitation sent to the wrong account will not grant access to the collaborator's active GitHub identity.
  - Repository settings are unavailable to users without administration permission.
verification:
  status: needs-review
  environment: GitHub web interface; screenshots document a desktop browser path.
  workflow: Repository access settings and collaborator invitation acceptance.
  lastVerified: Pending a current GitHub UI walkthrough.
  support: Browser workflow is platform-independent; exact menu placement may change.
toc:
  - id: collaboration-guidelines
    label: Collaboration Guidelines
  - id: invite-collaborators
    label: Invite collaborators
tags:
  - doc
---
## Collaboration Guidelines

Teams stay coordinated when everyone shares the same basic expectations:

- pull before major work
- commit coherent units
- push regularly instead of hoarding changes

If you are about to rename many files, reorganize a folder, or rewrite a shared section, tell the other collaborators first. Most collaboration pain comes from surprise, not from Git itself.

## Invite collaborators

<div class="doc-step-pair">
  <div>
    <p>Select the Settings tab in the repository where you want to invite a collaborator.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.5-100.png" alt="GitHub repository page with the Settings tab highlighted">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>In the Settings sidebar, choose Collaborators under Access.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.5-101.png" alt="GitHub repository settings page with Collaborators highlighted">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Click the Add people button.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-access-page.png" alt="GitHub repository access page">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Search for the collaborator by username or email.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-search-collaborator.png" alt="Search field for adding a collaborator on GitHub">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After the correct person appears, confirm the invitation so GitHub can send access to that collaborator.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-add-collaborator.png" alt="GitHub dialog for confirming a collaborator invitation">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>A pending invitation is a normal intermediate state before the collaborator accepts and joins the repository.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-pending-invite.png" alt="GitHub access page showing a pending collaborator invitation">
  </figure>
</div>

If your collaborators can predict how and when changes will appear in the repository, the workflow is in a good place.
