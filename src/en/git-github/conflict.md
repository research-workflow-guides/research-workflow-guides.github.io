---
layout: layouts/doc.njk
title: Conflict
description: Resolve same-file text conflicts without panic and return to the normal loop.
lang: en
section: git-github
order: 9
permalink: /en/git-github/conflict/
translationKey: git-conflict
eyebrow: Topic 4
lead: A conflict is not a disaster. It simply means Git needs help choosing between overlapping edits.
toc:
  - id: what-a-conflict-means
    label: What a conflict means
  - id: three-options
    label: Three options
  - id: finish-the-merge
    label: Finish the merge
tags:
  - doc
---
## What a conflict means

If GitHub has changes that are not yet on your computer, VS Code may stop the push and ask you to pull first. Pull brings those GitHub changes into your local project and tries to combine them with your work.

If the two versions changed the same part differently and Git cannot combine them automatically, it asks you to choose the final content. This is a conflict.

<div class="doc-step-pair">
  <div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/conflict-push-warning.png" alt="VS Code warning that a push was rejected and a pull is required">

  </figure>
</div>

Before pulling, run `git status`. If it shows uncommitted work, commit that work or temporarily save it with `git stash`.

After that warning, click 'Cancel'. Execute the command "pull".

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

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Option</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">What happens</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Accept Current Change</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Only the modifications made locally will be accepted, and the content on GitHub will be discarded.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Accept Incoming Change</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The modifications made locally will be discarded, and only the content on GitHub will be accepted.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Accept Both Changes</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">Both versions will be kept. To avoid accidentally discarding either version, the safest workflow is to choose this option first and then have the author review and edit the combined result, removing duplicated or incompatible text.</td>
      </tr>
    </tbody>
  </table>
</div>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-5.png" alt="VS Code conflict options for accepting current, incoming, or both changes">

</figure>

For example, if you click on 'Accept Both Changes', you will see a screen similar to the one on the right. Before compiling or saving, the author should review the combined code and text, remove duplicated content, and reconcile any incompatible lines. Compile or save only after confirming the intended final result.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-6.png" alt="VS Code conflict editor with Accept Both Changes highlighted">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-7.png" alt="VS Code editor after both conflict changes are accepted">

</figure>

Before staging the resolved file, run:

```shell
git status
git diff
```

Confirm that no conflict markers remain, review the exact combined changes, and compile or build the document. Stage and commit only after these checks pass.

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

If you can explain what the final file should say and the repository returns to a clean state afterward, the conflict has been handled correctly.
