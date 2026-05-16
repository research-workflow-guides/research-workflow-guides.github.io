---
layout: layouts/doc.njk
title: Conflict
description: Resolve same-file text conflicts without panic and return to the normal loop.
lang: en
section: git-github
order: 8
permalink: /en/git-github/conflict/
translationKey: git-conflict
eyebrow: Topic 3
lead: A conflict is not a disaster. It simply means Git needs help choosing between overlapping edits.
toc:
  - id: what-a-conflict-means
    label: What a conflict means
  - id: three-options
    label: Three options
  - id: finish-the-merge
    label: Finish the merge
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## What a conflict means

A conflict appears when two sets of changes touch the same lines or the same small region of a file. For a push or pull to succeed cleanly, the file on GitHub and the local file you started editing from should match.

If they are different, pushing or pulling will result in a conflict (refer to the picture below). Git stops and asks you to decide what the final text should be. Let's learn how to resolve this issue.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/conflict-push-warning.png" alt="VS Code warning that a push was rejected and a pull is required">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After that warning, click 'Cancel'. Execute the command "pull".</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.3-11%20(1).png" alt="VS Code source control menu with Pull highlighted after a push warning">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then you will be able to see the following screen where the staging will be canceled. The green box displays the modifications made locally, while the blue box displays the content from GitHub.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.4-4.png" alt="VS Code source control panel after staging is canceled during a merge conflict">

  </figure>
</div>

## Three options

There are three options, and you can click the one you prefer:

**Accept Current Change:** Only the modifications made locally will be accepted, and the content on GitHub will be discarded.

**Accept Incoming Change:** The modifications made locally will be discarded, and only the content on GitHub will be accepted.

**Accept Both Changes:** Both the local and GitHub contents will be accepted. This is the safest option.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-5.png" alt="VS Code conflict options for accepting current, incoming, or both changes">

</figure>

For example, if you click on 'Accept Both Changes', you will be able to see a screen similar to the one on the right. Now, execute the compilation (or saving).

<figure class="image-frame">
  <img src="/assets/images/2.2.4-6.png" alt="VS Code conflict editor with Accept Both Changes highlighted">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-7.png" alt="VS Code editor after both conflict changes are accepted">

</figure>

## Finish the merge

In the source control, click on the '+' button in 'Merge Changes', and also click on the '+' button in 'Changes'. Then you will be able to see that all the changes have been staged, just like the screen on the right.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-8.png" alt="VS Code Source Control with Merge Changes ready to stage">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-9.png" alt="VS Code Source Control with Changes ready to stage">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-10.png" alt="VS Code Source Control after all conflict changes are staged">

</figure>

Proceed with the command "Commit & Push". Thus, the conflict has been resolved.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-11.png" alt="VS Code Source Control menu with Commit & Push highlighted">

</figure>

## Before proceeding

If you can explain what the final file should say and the repository returns to a clean state afterward, the conflict has been handled correctly.
