---
layout: layouts/doc.njk
title: Version Control
description: Understand tracked, modified, staged, and committed states well enough to stay calm.
lang: en
section: git-github
order: 8
permalink: /en/git-github/version-control/
translationKey: git-version-control
eyebrow: Topic 3
lead: Let's learn how to manage versions using Git Graph.
toc:
  - id: add-extension
    label: Add extension
  - id: git-graph
    label: Git Graph
  - id: interface
    label: Interface
  - id: review-of-changes
    label: Review of changes
  - id: to-reset-to-an-old-version
    label: To reset to an old version
  - id: before-proceeding
    label: Before proceeding
tags:
  - doc
---
## Add extension

[Git Graph on Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)

<figure class="image-frame">
  <img src="/assets/images/gitgraph.png" alt="Git Graph extension">
</figure>

## Git Graph

You can access the Git Graph by clicking on the button with a graph icon in the Source Control panel or by clicking on 'Git Graph' at the bottom of the window.

<figure class="image-frame">
  <img src="/assets/images/clone-2.png" alt="VS Code Source Control panel with Git Graph access">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-1.png" alt="Git Graph view in VS Code">
</figure>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-2.png" alt="Git Graph history view in VS Code">
</figure>

When accessing the Git Graph, you will see the following screen.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-3.png" alt="Git Graph screen in VS Code">
</figure>

## Interface

Here is an explanation of each section:

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Section</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Explanation</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><span style="display:inline-flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border-radius:50%;background:#ffffff;border:2px solid #ff2d2d;color:#ff2d2d;font-weight:700;font-size:0.85rem;line-height:1">1</span></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">It visualizes the commits that have been pushed so far.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><span style="display:inline-flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border-radius:50%;background:#ffffff;border:2px solid #ff2d2d;color:#ff2d2d;font-weight:700;font-size:0.85rem;line-height:1">2</span></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">It represents the current commit being discussed along with its message. It is referred to as the current branch. You can use <code>Check out</code> to move to a different commit, but we will not cover that in this tutorial.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><span style="display:inline-flex;align-items:center;justify-content:center;width:1.25rem;height:1.25rem;border-radius:50%;background:#ffffff;border:2px solid #ff2d2d;color:#ff2d2d;font-weight:700;font-size:0.85rem;line-height:1">3</span></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">It displays the date and author of each pushed commit, along with a unique identifier for each commit.</td>
      </tr>
    </tbody>
  </table>
</div>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-4.png" alt="Git Graph interface sections">
</figure>

## Review of changes

When you click on a commit to review the changes, you will see the following screen. The colors of the file names have the following meanings:

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Color</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code style="color:#7ec36f">Green</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The file is newly created.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code style="color:#e4c75f">Yellow</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The existing file has been modified.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code style="color:#ff5f5f">Red</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">The file has been deleted.</td>
      </tr>
    </tbody>
  </table>
</div>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-5%20(1).png" alt="Git Graph commit change review screen">
</figure>

If you want to examine the changes in more detail, you can click on a commit, and you will see the following screen. The left side shows the content before the changes, and the right side shows the content after the changes.

For example, if you click on 'revised file.txt', you will see that the sentence 'Also, I like dogs' has been added, indicating the specific change made.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-6%20(1).png" alt="Git Graph detailed file change showing added text">
</figure>

## To reset to an old version

Moving between commits can be sensitive and complex. Therefore, before reverting to an old version, it is recommended to proceed from a clean state in Source Control, as shown on the right-hand side of the screen, with no pending changes.

If you are sharing your code with others, it is recommended to use 'revert' instead of 'reset'. Alternatively, using 'branch' is also recommended. However, we won't cover these topics in this tutorial.

<figure class="image-frame">
  <img src="/assets/images/2.2.5-9.png" alt="Clean Source Control state before resetting to an old version">
</figure>

1. Right-click on the commit of the version you want to revert to, and click on "Reset current branch to this commit."

<figure class="image-frame">
  <img src="/assets/images/2.2.5-7%20(1).png" alt="Reset current branch to this commit menu in Git Graph">
</figure>

2. You will then see the right-hand side screen. You can choose one of the three options, and here are the explanations for each option:

<div style="display:flex;justify-content:center;margin:1.25rem 0">
  <table style="border-collapse:collapse;min-width:32rem">
    <thead>
      <tr style="background:#f0e1c8">
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Option</th>
        <th style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Soft</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">All commit history will be removed, but both the selected past commit and the current changes will be kept.</td>
      </tr>
      <tr style="background:#fdf7ef">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Mixed</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">All commit history will be removed, but the changes will be kept, accepting the selected past commit.</td>
      </tr>
      <tr style="background:#ffffff">
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem;text-align:center"><code>Hard</code></td>
        <td style="border:1px solid #dfc9a0;padding:0.65rem 1.2rem">All changes will be discarded, and only the selected past commit will be accepted.</td>
      </tr>
    </tbody>
  </table>
</div>

<figure class="image-frame">
  <img src="/assets/images/2.2.5-8.png" alt="Git Graph reset options">
</figure>

3. It is recommended to prioritize successful pushes based on the chosen option before continuing with your work.

Since Version Control can be complex, it is advisable to start with cautious use of the "Hard" option. For more detailed information, please refer to the resources available at the links below.

[Git Tools - Reset Demystified](https://git-scm.com/book/en/v2/Git-Tools-Reset-Demystified)

## Before proceeding

Git Graph and reset are useful when you need to inspect or manage version history. Before changing history, check that your Source Control state is clean and make sure you understand which changes will be kept.
