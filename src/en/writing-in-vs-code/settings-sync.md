---
layout: layouts/doc.njk
title: Sync Your VS Code Setup
description: Turn on Settings Sync with GitHub and keep the same VS Code setup across multiple machines.
lang: en
section: writing-in-vs-code
order: 6
permalink: /en/writing-in-vs-code/settings-sync/
translationKey: writing-settings-sync
eyebrow: Optional
lead: If you enable Settings Sync with your GitHub account, you can reinstall VS Code or move to another machine without rebuilding the same setup from scratch.
toc:
  - id: what-settings-sync-is
    label: What Settings Sync is
  - id: turn-on-settings-sync-with-github
    label: Turn on Settings Sync with GitHub
  - id: leave-the-sync-options-at-the-defaults
    label: Leave the sync options at the defaults
  - id: restore-the-same-setup-on-another-machine
    label: Restore the same setup on another machine
  - id: references
    label: References
tags:
  - doc
---
<!-- TODO: Replace the visible image placeholders below with our own current screenshots when we publish this page. -->

## What Settings Sync is

Settings Sync is the VS Code feature that keeps your editor setup aligned across machines.

It is useful when you reinstall VS Code or move to another computer and want your old setup back quickly. Once it is enabled, you do not need to rebuild `settings`, `keyboard shortcuts`, `snippets`, `extensions`, and `profiles` from scratch.

According to the official documentation, Settings Sync can synchronize the following items:

- `Settings`
- `Keyboard Shortcuts`
- `User Snippets`
- `User Tasks`
- `UI State`
- `Extensions`
- `Profiles`

At first, it is usually enough to leave these options at the default selection and start there.

## Turn on Settings Sync with GitHub

The process is straightforward.

1. Open the Accounts or Manage menu in the lower-left corner of VS Code.
2. Choose `Backup and Sync Settings...`.
3. In the account picker, choose `Sign in with GitHub`.
4. Finish the GitHub sign-in flow in the browser and return to VS Code.

> [Image placeholder] The VS Code Manage menu with `Backup and Sync Settings...` selected
>
> [Image placeholder] The account picker with `Sign in with GitHub` selected

## Leave the sync options at the defaults

When you first turn on Settings Sync, VS Code shows the list of items that can be synchronized.

For this guide, there is no need to customize that list. In most cases, the default checked state is enough to restore the same working environment without extra adjustment.

> [Image placeholder] The Settings Sync item list showing the default checked state

## Restore the same setup on another machine

After installing VS Code on another machine, sign in with the same GitHub account to bring back the saved setup.

At that point, VS Code may ask how to apply the cloud settings on the current machine. You can choose `Merge` or `Replace Local`. On a fresh installation, `Replace Local` is usually the simplest choice.

> [Image placeholder] The dialog for choosing `Merge` or `Replace Local` on a new machine

## References

This page is based on the following documentation.

- [VS Code Settings Sync](https://code.visualstudio.com/docs/configure/settings-sync)
- [VS Code Profiles](https://code.visualstudio.com/docs/configure/profiles)
- [GitHub authentication](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
