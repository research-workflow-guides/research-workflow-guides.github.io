---
layout: layouts/doc.njk
title: Create Repository
description: Create the first empty private repository before you bring in the local project.
lang: en
section: git-github
order: 4
permalink: /en/git-github/create-repository/
translationKey: git-create-repository
eyebrow: Topic 2
lead: Start from an empty private repository so the first push stays simple and the initial history is easy to understand.
toc:
  - id: choose-the-repository-shape
    label: Choose the repository shape
  - id: create-an-empty-private-repository
    label: Create an empty private repository
  - id: keep-the-first-repository-simple
    label: Keep it simple
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Choose the repository shape

One private repository for one project is enough for the first workflow. Avoid adding extra files or automation until after the first push.

## Create an empty private repository

Create a new private repository with a clear project name. Skip the README, `.gitignore`, and license to keep the first push flow explicit.

<div class="doc-step-pair">
  <div>
    <p>From your profile, open the repositories list first.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-repositories-tab.png" alt="GitHub profile with the Repositories tab highlighted">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then use the <strong>New</strong> button from that repositories page to start the repository form.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-new-button.png" alt="GitHub repositories page with the New button highlighted">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Choose a clear name, keep the repository private, and fill out only the basic form fields for the first run.</p>
  </div>
  <!-- TODO: Retake this screenshot and the following empty-repo screenshot with a private repository example. Keep the captions explicitly aligned with a private repository flow. -->
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-form.png" alt="GitHub create repository form">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After creation, you should see an empty repository page ready for the first clone and push.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/create-repository-empty-repo.png" alt="Empty GitHub repository page after creation">

  </figure>
</div>

## Keep it simple

The point of the first repository is to understand the connection between local files and remote history. Complexity can come later.

## Before proceeding

If the private repository exists on GitHub and is still empty, you are ready to clone it locally.
