---
layout: layouts/doc.njk
title: Git status
description: Check the Git status of project files moved into the cloned repository.
lang: en
section: git-github
order: 6
permalink: /en/git-github/git-status/
translationKey: git-status
eyebrow: Topic 1
lead: After moving the project source files into the cloned repository, run <code>git status</code> to see which files Git does not yet track.
workflowChecks: false
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for the VS Code integrated terminal on Windows.
  workflow: Run git status in the cloned repository and identify untracked files.
  lastVerified: Git documentation and local empty-repository output checked on 2026-09-23. Current Windows screens await review.
  support: The existing terminal image needs updating. macOS and Linux screens await review.
  scopeNote: This guide uses Windows screens. macOS and Linux screens will be reviewed later.
toc:
  - id: check-the-current-state
    label: Check the current state
  - id: basic-file-states
    label: Basic file states
tags:
  - doc
---
## Check the current state

With the cloned repository folder open in VS Code, select **Terminal > New Terminal**. Check that the terminal opened in that repository folder, then run `git status`.

```shell
git status
```

Before the first commit, the output may show `No commits yet` and `Untracked files`. The existing image shows a repository with commits, so its `origin/main` line may differ from your result.

<figure class="image-frame">
  <img src="/assets/images/gitstatus.png" alt="Older Windows terminal showing a new file under Untracked files in a repository that already has commits">
</figure>

## Basic file states

After moving the files, look under `Untracked files`. Later, distinguish `Changes not staged for commit` from `Changes to be committed`.

- **Untracked files**: New files that Git does not yet track.
- **Changes not staged for commit**: Changes to tracked files that have not been prepared for the next commit.
- **Changes to be committed**: Changes prepared for the next commit.

If generated PDFs or LaTeX auxiliary files appear in `git status`, check whether you need them before staging. Add files you want to exclude to [`.gitignore`](/en/git-github/gitignore/).
