---
layout: layouts/doc.njk
title: Sync Your VS Code Setup
description: Turn on Settings Sync with GitHub in VS Code on Windows to synchronize your setup with another Windows PC.
lang: en
section: writing-in-vs-code
order: 8
permalink: /en/writing-in-vs-code/settings-sync/
translationKey: writing-settings-sync
eyebrow: Optional
lead: On Windows, turn on Settings Sync with a GitHub account to sync your VS Code settings, extensions, and other setup when you reinstall VS Code or use another Windows PC.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Written for VS Code on Windows; macOS and Linux steps await review.
  workflow: Turn on Settings Sync, review sync categories, sign in with GitHub, and verify sync on another Windows PC.
  lastVerified: VS Code Settings Sync documentation checked on 2026-09-23. Current Windows steps and screens await review.
  support: The three existing screenshots were captured on macOS and need to be updated for current Windows.
toc:
  - id: what-settings-sync-is
    label: What Settings Sync is
  - id: turn-on-settings-sync-with-github
    label: Turn on Settings Sync with GitHub
  - id: leave-the-sync-options-at-the-defaults
    label: Review sync options
  - id: restore-the-same-setup-on-another-machine
    label: Restore the same setup on another machine
  - id: references
    label: References
tags:
  - doc
---
## What Settings Sync is

Settings Sync automatically synchronizes selected preferences between Windows PCs signed in with the same GitHub account.

In VS Code Settings Sync, you can choose which of the following items to synchronize:

- `Settings`
- `Keyboard Shortcuts`
- `Snippets`
- `Tasks`
- `MCP Servers`
- `UI State`
- `Extensions`
- `Profiles`
- `Prompts and Instructions`

## Turn on Settings Sync with GitHub

1. Open the Command Palette with `Ctrl+Shift+P`.
2. Run `Settings Sync: Backup and Sync Settings...`.
3. Review the categories to sync, then select `Sign in`.
4. In the account picker, choose `Sign in with GitHub`.
5. Finish the GitHub sign-in flow in the browser and return to VS Code.

<div class="doc-step-pair">
  <div>
    <p>Run <code>Settings Sync: Backup and Sync Settings...</code> from the Command Palette.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/settings-sync/backup-and-sync-settings.png" alt="VS Code Command Palette showing Settings Sync Backup and Sync Settings">
  </figure>
</div>

<h2 id="leave-the-sync-options-at-the-defaults">Review sync options</h2>

Review the categories selected by default. Clear any category you do not want to sync, and leave the others selected.

<div class="doc-step-pair">
  <div>
    <p>To change the selected categories later, run <code>Settings Sync: Configure...</code> from the Command Palette.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/settings-sync/sync-options-defaults.png" alt="Example VS Code Settings Sync item list with default options checked">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>After selecting <code>Sign in</code>, choose <code>Sign in with GitHub</code>.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/settings-sync/sign-in-with-github.png" alt="Example VS Code account picker with Sign in with GitHub selected">
  </figure>
</div>

## Restore the same setup on another machine

On another Windows PC, install VS Code and turn on Settings Sync with the same GitHub account to synchronize the selected categories.

When you turn on Settings Sync, VS Code automatically merges local and cloud data. If it cannot resolve a conflict, synchronization pauses and prompts you to resolve it. Use `Show Conflicts` to compare both versions before completing the merge.

## References

<div class="doc-action-links">
  <a class="doc-action-link" href="https://code.visualstudio.com/docs/configure/settings-sync">VS Code Settings Sync</a>
  <a class="doc-action-link" href="https://code.visualstudio.com/docs/configure/profiles">VS Code Profiles</a>
  <a class="doc-action-link" href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github">GitHub authentication</a>
</div>
