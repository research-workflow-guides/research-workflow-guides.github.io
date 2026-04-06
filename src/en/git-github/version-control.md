---
layout: layouts/doc.njk
title: Version Control
description: Understand tracked, staged, committed, and ignored states well enough to stay calm.
lang: en
section: git-github
order: 7
permalink: /en/git-github/version-control/
translationKey: git-version-control
eyebrow: Step 7
lead: Calm Git use comes from recognizing file states and knowing which files should never enter the repository.
toc:
  - id: learn-the-basic-file-states
    label: Basic file states
  - id: check-status-often
    label: Check status often
  - id: ignore-local-clutter
    label: Ignore local clutter
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Basic file states

The most important file states are:

- tracked
- modified
- staged
- committed
- ignored

You do not need every Git concept at once. These states are enough to understand most day-to-day repository behavior.

## Check status often

`git status` is the right command when you feel unsure.

```bash
git status
```

It tells you what changed, what is staged, and what still needs attention.

## Ignore local clutter

Some files do not belong in version control, such as generated auxiliary files, local caches, or machine-specific clutter.

Use `.gitignore` to keep those files out of commits. The goal is not to hide real work. The goal is to stop noisy local artifacts from polluting the history.

<div class="doc-step-pair">
  <div>
    <p>Identify the heavy local folders or generated files that should never enter version control.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/example-folder.png" alt="Example project tree with a heavy folder">
    <figcaption>Start by identifying the local folder or generated files that should stay out of Git.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then create the <code>.gitignore</code> file in the project root so the ignore rules live beside the manuscript files.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/step1-root-file.png" alt="A new .gitignore file in the project root">
    <figcaption>Create the <code>.gitignore</code> file in the project root.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Add the folder name or ignore pattern to <code>.gitignore</code> so Git knows that this path should stay local.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/step2-ignore-entry.png" alt="A .gitignore file containing an ignore rule">
    <figcaption>Add the folder name or pattern to <code>.gitignore</code>.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After you save the file, VS Code usually makes the ignored folder visibly dimmer in the explorer.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/step2-gray-folder.png" alt="Ignored folder shown dimmed in VS Code">
    <figcaption>The ignored folder becomes visually dimmed in the explorer.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Once the ignore rule is active, those files should stay out of the repository view even after commit and push.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/gitignore/step3-commit-result.png" alt="GitHub repository where the ignored folder is absent">
    <figcaption>Ignored files stay out of the repository view after commit and push.</figcaption>
  </figure>
</div>

## Self-check

If you can look at `git status` and explain which files are ready to commit, which are still local clutter, and which should be ignored, this page has done its job.
