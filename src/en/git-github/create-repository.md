---
layout: layouts/doc.njk
title: Create Repository
description: Create the first empty private repository before you bring in the local project.
lang: en
section: git-github
order: 4
permalink: /en/git-github/create-repository/
translationKey: git-create-repository
eyebrow: Step 4
lead: Start from an empty private repository so the first push stays simple and the initial history is easy to understand.
toc:
  - id: choose-the-repository-shape
    label: Choose the repository shape
  - id: create-an-empty-private-repository
    label: Create an empty private repository
  - id: keep-the-first-repository-simple
    label: Keep it simple
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Choose the repository shape

For the first workflow, one private repository for one working project is enough. Avoid adding extra files or automation before the first push succeeds.

## Create an empty private repository

Use GitHub to create a new private repository with a clear project name. You do not need to add a README, `.gitignore`, or license if you want the first local push flow to stay explicit.

<div class="doc-step-pair">
  <div>
    <p>From your profile, move to the repositories list before you try to create anything new.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-repositories-tab.png" alt="GitHub profile with the Repositories tab highlighted">
    <figcaption>Open the repository list from your GitHub profile.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then use the <strong>New</strong> button from that repositories page to start the repository form.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-new-button.png" alt="GitHub repositories page with the New button highlighted">
    <figcaption>Use the <strong>New</strong> button to begin the repository form.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Choose a clear name, keep the repository private, and fill out only the basic form fields for the first run.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-form.png" alt="GitHub create repository form">
    <figcaption>Fill out the repository form with a project name and privacy setting.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After creation, the expected result is an empty repository page that is ready for the first clone and push.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-empty-repo.png" alt="Empty GitHub repository page after creation">
    <figcaption>An empty repository page is the expected result before the first clone and push.</figcaption>
  </figure>
</div>

## Keep it simple

The point of the first repository is to understand the connection between local files and remote history. Complexity can come later.

## Self-check

If the private repository exists on GitHub and is still empty, you are ready to clone it locally.
