---
layout: layouts/doc.njk
title: Conflict
description: Resolve merge conflicts during Pull in VS Code on Windows and review the result.
lang: en
section: git-github
order: 9
permalink: /en/git-github/conflict/
translationKey: git-conflict
eyebrow: Topic 4
lead: On Windows, review conflicting edits during Pull in VS Code and complete the merge.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for VS Code and the integrated Git terminal on Windows.
  workflow: Check local status before Pull, edit conflicts, stage only source files, and complete the merge.
  lastVerified: Official VS Code and Git documentation checked on 2026-09-24. Current Windows screens await review.
  support: The existing images show older VS Code screens and an example that stages generated files; they need updating.
toc:
  - id: what-a-conflict-means
    label: When conflicts occur
  - id: three-options
    label: Edit conflicting sections
  - id: finish-the-merge
    label: Complete the merge
tags:
  - doc
---
<h2 id="what-a-conflict-means">When conflicts occur</h2>

If the remote has new commits and your push is rejected, first run `git status` to check local changes. This guide covers the case where Pull starts a merge after you have prepared your local work, and the merge finds conflicting edits.

If your local branch and the incoming branch changed the same part differently and Git cannot combine them automatically, a conflict occurs. Edit each conflicting section into the content you want to keep.

<div class="doc-step-pair">
  <div>
    <p>Select <strong>Cancel</strong> in the push warning. Before pulling, run <code>git status</code> and commit the intended source changes or <a href="/en/git-github/source-control/#stash">Stash unfinished work</a>. Check again for unexpected changes, then Pull.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/legacy/github-workflow/conflict-push-warning.png" alt="Older VS Code Push warning asking the user to Pull remote changes">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If Pull produces a conflict, the file appears under <strong>Merge Changes</strong> in Source Control. In the older screenshot, <strong>Current Change</strong> is from your local branch and <strong>Incoming Change</strong> is from the fetched branch. Generated files such as <code>.log</code> and <code>.pdf</code> under <strong>Changes</strong> do not need to be staged to resolve the conflict.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.4-4.png" alt="Older VS Code screen with a TeX conflict under Merge Changes and generated files under Changes">

  </figure>
</div>

<h2 id="three-options">Edit conflicting sections</h2>

Open the conflicted file and decide the final content of each section. The inline actions in the older screenshot apply to the selected conflict section.

- `Accept Current Change`: keep the current branch's content.
- `Accept Incoming Change`: keep the incoming branch's content.
- `Accept Both Changes`: place both versions one after the other. Check their order and duplication, then edit as needed.
- Edit manually: combine parts of both versions or write new text, then remove the conflict markers.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-5.png" alt="Older VS Code inline actions for accepting current, incoming, or both changes in a conflict section">

</figure>

`Accept Both Changes` places the two versions one after the other. The older result image still contains `!Conflict!` text, so it does not show a finished document. Edit duplicated or incompatible content into the intended final text, save the file, and then build it.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-6.png" alt="Older VS Code conflict editor with Accept Both Changes highlighted">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-7.png" alt="Older VS Code result after keeping both versions, with unfinished !Conflict! text still present">

</figure>

After saving the edited file, use these commands to inspect unresolved entries, remaining conflict markers or whitespace errors, and the combined content:

```shell
git status
git diff --check
git diff
```

Build the document and review the result, then stage only the resolved source file. Passing `git diff --check` does not replace reviewing the file and build output for correctness.

<h2 id="finish-the-merge">Complete the merge</h2>

In Source Control, stage only the resolved TeX source file under **Merge Changes**. The second and third older images below also stage the entire **Changes** list, including generated `.log` and `.pdf` files. Do not use that button; check the staged files with `git status` and `git diff --cached`.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-8.png" alt="Older VS Code screen showing the button to stage only the resolved TeX file under Merge Changes">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-9.png" alt="Older VS Code screen showing the stage-all Changes button including generated files, which should not be used">

</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.4-10.png" alt="Older VS Code screen with TeX source and generated log and PDF files all staged, an example not to follow">

</figure>

After reviewing the staged source file, select **Commit** to complete the merge, then **Push**. The **Commit & Push** image below shows an older menu.

<figure class="image-frame">
  <img src="/assets/images/2.2.4-11.png" alt="Older VS Code menu highlighting Commit & Push while generated files are also staged">

</figure>

Run `git status` to confirm that no merge remains in progress. Generated build files may still be in the working tree. If you temporarily stored work before Pull, reapply it after the merge and check the resulting status.
