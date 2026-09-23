---
layout: layouts/doc.njk
title: GitHub Account Setup
description: Check or create a GitHub account, verify its email address, and review security settings.
lang: en
section: git-github
order: 2
permalink: /en/git-github/github-account-setup/
translationKey: git-github-account-setup
eyebrow: Topic 2
lead: Check the GitHub account you will use for repositories and collaboration. If you need an account, create one and verify its email address.
verification:
  status: needs-review
  screenshots: needs-update
  environment: This guide follows the GitHub browser flow; the existing images show older desktop views.
  workflow: Choose or create an account, verify its email, and review two-factor authentication.
  lastVerified: 2026-09-23 checked official GitHub documentation; current sign-up screens await verification.
  support: Existing GitHub sign-up images need updating.
verificationCard: false
toc:
  - id: create-or-confirm-the-account
    label: Create or confirm the account
  - id: turn-on-basic-security
    label: Turn on basic security
  - id: prepare-a-usable-profile
    label: Prepare a usable profile
tags:
  - doc
---
## Create or confirm the account

Choose the GitHub account that will own this repository. If you already have an account, sign in with it.

<div class="doc-step-pair">
  <div>
    <p>Open the <a href="https://github.com/">official GitHub homepage</a>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.4-1.png" alt="Older GitHub homepage start screen">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>If you do not have an account, sign up on the <a href="https://github.com/signup">GitHub sign-up page</a> and follow the prompts to verify your email address.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.4-2.png" alt="Sign up button on an older GitHub homepage">
  </figure>
</div>

## Turn on basic security

If you use a password, make it strong and unique. Follow GitHub's [two-factor authentication guide](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication) to set up 2FA, and store your [recovery codes](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods) securely.

## Prepare a usable profile

Check the username on your profile. Creating a repository requires a verified email address, so check its status under <strong>Settings &gt; Emails</strong> and follow GitHub's [email verification guide](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address) if needed.

If you can sign in with the account you chose and have verified its email address, continue to [Connect GitHub](/en/git-github/connect-github/).
