---
layout: layouts/doc.njk
title: Connect GitHub
description: Follow browser authentication when VS Code asks you to sign in to GitHub.
lang: en
section: git-github
order: 3
permalink: /en/git-github/connect-github/
translationKey: git-connect-github
eyebrow: Step 3
lead: You configured your commit author information in the Git installation step. If VS Code later asks you to sign in to GitHub, complete the authentication in your browser.
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: This guide uses Windows VS Code screens; macOS and Linux screens await writing and verification.
  workflow: Recognize a GitHub sign-in request, authenticate in the browser, and return to VS Code.
  lastVerified: 2026-09-23 checked official VS Code documentation; current Windows sign-in screen awaits verification.
  support: The existing VS Code sign-in image needs updating. macOS and Linux guides are pending.
  scopeNote: This page currently uses Windows VS Code screens. macOS and Linux screens will be written and verified later.
verificationCard: false
toc:
  - id: open-the-terminal
    label: Check your GitHub account
  - id: sign-in-when-prompted
    label: Sign in when prompted
tags:
  - doc
---
<h2 id="open-the-terminal">Check your GitHub account</h2>

If you do not have a GitHub account, follow the [GitHub account setup guide](/en/git-github/github-account-setup/) first.

<p id="set-name-and-email">To change your commit author name or email, return to <a href="/en/git-github/git-installation/#set-your-identity">Set your commit identity</a> in the Git installation guide.</p>

<p id="verify-the-configuration">Git records the author information you configured earlier in commits. In the browser sign-in window, check which GitHub account you are using.</p>

## Sign in when prompted

<div class="doc-step-pair">
  <div>
    <p>VS Code may ask you to sign in when you clone a private repository or push to GitHub. If prompted, choose the browser sign-in option and authenticate with the GitHub account you intend to use.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/connecting-github.png" alt="Older VS Code Connect to GitHub dialog with Sign in with your browser highlighted">
  </figure>
</div>

Return to VS Code when browser authentication is complete. If you have not seen a sign-in request yet, continue to [Create Repository](/en/git-github/create-repository/).
