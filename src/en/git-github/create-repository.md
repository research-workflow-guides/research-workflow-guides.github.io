---
layout: layouts/doc.njk
title: Create Repository
description: Create an empty private GitHub repository before adding your project files.
lang: en
section: git-github
order: 4
permalink: /en/git-github/create-repository/
translationKey: git-create-repository
eyebrow: Topic 2
lead: Create an empty private repository on GitHub. In the next step, clone it and add your project files.
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: This guide uses GitHub web screens from a Windows desktop browser.
  workflow: Choose the owner and name, set private visibility, omit starter files, and check the empty repository.
  lastVerified: GitHub repository configuration screen checked and captured in a Windows browser on 2026-10-16. Repository creation was not executed.
  support: Older GitHub screenshots illustrate repository creation and Quick setup. The creation form shows Public selected; select Private for this guide.
verificationCard: false
toc:
  - id: choose-the-repository-shape
    label: Choose the repository shape
  - id: create-an-empty-private-repository
    label: Create an empty private repository
tags:
  - doc
---
## Choose the repository shape

Choose the GitHub account that will own the new repository, and set its visibility to <strong>Private</strong>.

## Create an empty private repository

Choose a repository name that identifies the project. You will clone an empty repository in the next step, so leave the README, `.gitignore`, and license options unset for now.

<p>Sign in to GitHub, then open the <strong>Repositories</strong> tab on your profile.</p>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/create-repository-repositories-tab.png" alt="Repositories tab highlighted on an older GitHub profile page">

</figure>

<p>Select <strong>New</strong> on the <strong>Repositories</strong> page. If your screen looks different, open GitHub's <a href="https://github.com/new">new repository page</a> directly.</p>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/create-repository-new-button.png" alt="New button highlighted on an older GitHub Repositories page">

</figure>

<p>Check <strong>Owner</strong> and <strong>Repository name</strong>, then select <strong>Private</strong>. Leave README, <code>.gitignore</code>, and license unset, and select <strong>Create repository</strong>.</p>
<p><strong>The older image shows Public selected. Select Private for this guide.</strong></p>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/create-repository-form.png" alt="Older GitHub create repository form with Public selected">

</figure>

<p>Check the <strong>Private</strong> label beside your repository name and the <strong>Quick setup</strong> instructions for an empty repository. The image below is a location example for <strong>Quick setup</strong>; it shows an older public repository. Confirm that your own repository is <strong>Private</strong>.</p>

<figure class="image-frame">
  <img src="/assets/images/legacy/github-workflow/create-repository-empty-repo.png" alt="Older empty GitHub repository page showing Public and Quick setup">

</figure>
