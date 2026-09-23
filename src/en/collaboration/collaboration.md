---
layout: layouts/doc.njk
title: Start Collaborating
description: Invite a collaborator to a private repository and agree on how to share changes.
lang: en
section: collaboration
order: 1
permalink: /en/collaboration/collaboration/
translationKey: git-collaboration
eyebrow: Topic 1
lead: Invite a collaborator to the private repository and confirm that they accept. Agree as a team on when to Pull, Commit, and Push shared changes.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for a private repository owned by a personal account in a Windows desktop browser.
  workflow: Invite a collaborator, confirm acceptance, and agree on how to share changes.
  lastVerified: GitHub documentation checked on 2026-09-23. Current Windows screens await review.
  support: The older images show a public repository. macOS, Linux, and organization repository screens await review.
  scopeNote: This guide uses a private repository owned by a personal account in a Windows desktop browser. macOS, Linux, and organization repository screens will be reviewed later.
toc:
  - id: collaboration-guidelines
    label: Collaboration Guidelines
  - id: invite-collaborators
    label: Invite collaborators
  - id: confirm-access
    label: Confirm access
tags:
  - doc
---
## Collaboration Guidelines

Before starting work, check for remote changes and Pull when needed. Commit changes in coherent units, then Push when they are ready to share.

If you plan to rename many files, reorganize folders, or substantially revise a shared document, tell the team before you start. Share the scope and timing so others can coordinate overlapping work.

## Invite collaborators

A collaborator gains read and write access, so check the GitHub account you intend to invite. The older images below show a public repository; use them only to locate the controls. See [GitHub's invitation guide](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/repository-access-and-collaboration/inviting-collaborators-to-a-personal-repository) for the current procedure.

<div class="doc-step-pair">
  <div>
    <p>Open the private repository and select <strong>Settings</strong>. If the tab is hidden, find <strong>Settings</strong> in the repository's top menu.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.5-100.png" alt="Older public GitHub repository with the Settings tab highlighted">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>In the Settings sidebar, choose Collaborators under Access.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.5-101.png" alt="Older public GitHub repository settings with Collaborators highlighted">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Click the Add people button.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-access-page.png" alt="Older public GitHub repository access page showing Add people">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Enter the person's GitHub username or email address, then select their account from the matches.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-search-collaborator.png" alt="Older GitHub search field for adding a collaborator">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Check the display name and username in the search result, then use the button to add that account to the repository and send the invitation.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-add-collaborator.png" alt="Older GitHub dialog showing a selected collaborator account and invitation button">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>The invitation remains pending until the other person accepts it.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/collaboration-pending-invite.png" alt="Older public GitHub repository access page showing a Pending Invite">
  </figure>
</div>

## Confirm access

After the invitation is accepted, confirm that the collaborator can open the private repository. If they cannot, check whether the GitHub username or email address on the invitation matches the account they use.
