---
layout: layouts/doc.njk
title: Connect GitHub
description: Set the Git identity VS Code will use and know what to do if GitHub asks for browser sign-in.
lang: en
section: git-github
order: 3
permalink: /en/git-github/connect-github/
translationKey: git-connect-github
eyebrow: Step 3
lead: Open the VS Code terminal, set your global Git name and email, and confirm the settings before creating a repository.
outcome: Git is configured for the intended GitHub identity and browser authentication can complete when requested.
prerequisites:
  - Git is installed and available in the VS Code terminal.
  - A GitHub account is available; use the optional account guide if one must be created first.
completion: The terminal shows the intended Git identity and an authenticated GitHub operation no longer requests unfinished sign-in.
commonProblems:
  - The Git commit identity and the GitHub login account can be different if the wrong browser session is active.
  - Authentication prompts may open behind VS Code or in a browser window that is not signed in.
verification:
  status: needs-review
  environment: Windows is the detailed VS Code screenshot path; macOS and Linux use the same Git identity and browser sign-in concepts.
  workflow: VS Code terminal, Git identity configuration, and GitHub browser authentication.
  lastVerified: Pending a current-product walkthrough.
  support: All three operating systems are supported; terminal shortcuts and credential storage differ by platform.
toc:
  - id: open-the-terminal
    label: Open the terminal
  - id: set-name-and-email
    label: Set name and email
  - id: verify-the-configuration
    label: Verify the configuration
  - id: sign-in-when-prompted
    label: Sign in when prompted
tags:
  - doc
---
## Open the terminal

Use the Command Palette to open a fresh terminal inside VS Code.

<div class="doc-step-pair">
  <div>
    <p>Open the Command Palette, search for <strong>terminal</strong>, and select <strong>Terminal: Create New Terminal</strong>. Open it with <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd> (macOS: <kbd>Cmd</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>).</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-1%20(1).png" alt="VS Code Command Palette with Terminal: Create New Terminal selected">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After the command runs, confirm that the integrated terminal appears at the bottom of VS Code.</p>
    <p>You can also open a new terminal directly with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on Windows or <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>&#96;</kbd> on macOS.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-2%20(1).png" alt="VS Code integrated terminal opened">
  </figure>
</div>

## Set name and email

Set the name and email that Git will attach to commits made from this machine.

<div class="doc-step-pair">
  <div>
    <p>Run the name command first. Replace <code>NAME</code> with the name you want to appear in your commit history.</p>
    <pre data-code-label="bash"><code>git config --global user.name "NAME"</code></pre>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-3%20(1).png" alt="VS Code terminal with git config global user.name command">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Then run the email command. Use the email address that belongs to the GitHub account you prepared.</p>
    <pre data-code-label="bash"><code>git config --global user.email "EMAIL"</code></pre>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-4%20(1).png" alt="VS Code terminal with git config global user.email command">
  </figure>
</div>

## Verify the configuration

Check the saved configuration before moving on.

```shell
git config --list
```

<div class="doc-step-pair">
  <div>
    <p>Run <code>git config --list</code> in the same terminal.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-5%20(1).png" alt="VS Code terminal with git config list command">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>In the output, confirm that <code>user.name</code> and <code>user.email</code> match what you entered. You only need to do this setup once on the same machine.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/2.2.1-6%20(1).png" alt="VS Code terminal output showing user.name and user.email in git config list">
  </figure>
</div>

## Sign in when prompted

At some point VS Code may ask you to sign in to GitHub. If you see a prompt with <strong>Sign in with your browser</strong>, click it and complete the GitHub login in the browser.

<div class="doc-step-pair">
  <div>
    <p>Use the browser sign-in option for the normal GitHub login flow.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/connecting-github.png" alt="VS Code Connect to GitHub dialog with Sign in with your browser highlighted">
  </figure>
</div>

If <code>git config --list</code> shows the correct name and email, and any GitHub sign-in prompt has been completed, continue to repository creation.
