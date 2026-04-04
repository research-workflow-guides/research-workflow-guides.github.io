---
layout: layouts/doc.njk
title: Conflict
description: Resolve same-file text conflicts without panic and return to the normal loop.
lang: en
section: git-github
order: 9
permalink: /en/git-github/conflict/
translationKey: git-conflict
eyebrow: Step 9
lead: A conflict is not a disaster. It simply means Git needs help choosing between overlapping edits.
toc:
  - id: what-a-conflict-means
    label: What a conflict means
  - id: resolve-one-file-carefully
    label: Resolve one file carefully
  - id: finish-the-merge-cleanly
    label: Finish the merge cleanly
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## What a conflict means

A conflict usually appears when two sets of changes touch the same lines or the same small region of a file.

Git stops and asks you to decide what the final text should be.

## Resolve one file carefully

Use the VS Code Merge Editor or the conflict markers directly. Read the surrounding lines, decide what should remain, and keep the final text consistent.

Do not rush to accept everything from one side unless that really is the correct outcome.

## Finish the merge cleanly

After resolving the file, confirm the conflict markers are gone, stage the file, and finish the merge commit or re-run the normal commit flow.

## Self-check

If you can explain what the final file should say and the repository returns to a clean state afterward, the conflict has been handled correctly.

