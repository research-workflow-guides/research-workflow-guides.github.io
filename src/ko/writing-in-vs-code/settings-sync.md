---
layout: layouts/doc.njk
title: VS Code 작업 환경 동기화
description: GitHub 계정으로 Settings Sync를 켜고 여러 PC에서 같은 VS Code 환경을 유지합니다.
lang: ko
section: writing-in-vs-code
order: 6
permalink: /ko/writing-in-vs-code/settings-sync/
translationKey: writing-settings-sync
eyebrow: 선택
lead: GitHub 계정으로 Settings Sync를 켜 두면 VS Code를 새로 설치하거나 다른 PC에서 열 때도 익숙한 작업 환경을 빠르게 복원할 수 있습니다.
toc:
  - id: settings-sync란-무엇인가
    label: Settings Sync란 무엇인가
  - id: github-계정으로-settings-sync-켜기
    label: GitHub 계정으로 Settings Sync 켜기
  - id: 동기화-항목은-기본값-그대로-두기
    label: 동기화 항목은 기본값 그대로 두기
  - id: 다른-pc에서-같은-환경-이어받기
    label: 다른 PC에서 같은 환경 이어받기
  - id: 참고-문서
    label: 참고 문서
tags:
  - doc
---
## Settings Sync란 무엇인가

Settings Sync는 VS Code 작업 환경을 여러 기기에서 동기화해 주는 기능입니다.

VS Code를 새로 설치하거나 다른 PC에서 작업할 때, 이전 환경을 빠르게 복원하고 싶을 때 유용합니다. 한 번 설정해 두면 `settings`, `keyboard shortcuts`, `snippets`, `extensions`, `profiles`를 처음부터 다시 맞출 필요가 없습니다.

공식 문서는 `settings`, `keyboard shortcuts`, `user snippets`, `user tasks`, `UI State`, `extensions`, `profiles`를 동기화 항목으로 설명합니다. VS Code 1.117.0의 실제 Settings Sync 선택 화면에는 다음 항목이 보입니다.

- `Settings`
- `Keyboard Shortcuts`
- `Snippets`
- `Tasks`
- `MCP Servers`
- `UI State`
- `Extensions`
- `Profiles`
- `Prompts and Instructions`

처음에는 이 항목들을 세세하게 조정하기보다 기본 설정 그대로 시작해도 충분합니다.

## GitHub 계정으로 Settings Sync 켜기

Settings Sync를 켜는 방법은 간단합니다.

1. `Cmd+Shift+P`로 Command Palette를 엽니다.
2. `Settings Sync: Backup and Sync Settings...`를 실행합니다.
3. 기본 동기화 항목을 그대로 두고 `Sign in`을 선택합니다.
4. 계정 선택 창에서 `Sign in with GitHub`를 선택합니다.
5. 브라우저에서 GitHub 로그인을 완료하고 VS Code로 돌아옵니다.

<div class="doc-step-pair">
  <div>
    <p>Command Palette에서 <code>Settings Sync: Backup and Sync Settings...</code>를 실행합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/settings-sync/backup-and-sync-settings.png" alt="Settings Sync Backup and Sync Settings 명령이 보이는 VS Code Command Palette 실제 화면">
  </figure>
</div>

## 동기화 항목은 기본값 그대로 두기

Settings Sync를 처음 켜면 동기화할 항목 목록이 표시됩니다.

항목을 따로 고를 필요 없이, 기본으로 체크된 상태 그대로 진행하면 됩니다. 대부분의 경우 이 설정만으로 동일한 작업 환경을 문제없이 복원할 수 있습니다.

<div class="doc-step-pair">
  <div>
    <p>특정 항목을 로컬에만 남겨야 하는 이유가 없다면 기본 체크 상태를 그대로 둡니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/settings-sync/sync-options-defaults.png" alt="기본 동기화 항목이 체크된 VS Code Settings Sync 예시 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p><code>Sign in</code>을 누른 뒤 계정 선택 화면에서 <code>Sign in with GitHub</code>를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/settings-sync/sign-in-with-github.png" alt="Sign in with GitHub가 선택된 VS Code 계정 선택 실제 화면">
  </figure>
</div>

## 다른 PC에서 같은 환경 이어받기

다른 PC에 VS Code를 설치한 뒤 같은 GitHub 계정으로 로그인하면, 저장해 둔 작업 환경을 불러올 수 있습니다.

이때 VS Code는 클라우드 설정을 현재 기기에 어떻게 적용할지 물을 수 있습니다. `Merge`는 현재 기기의 설정과 클라우드 설정을 합치고, `Replace Local`은 현재 기기의 local 설정을 클라우드 설정으로 덮어씁니다. 보존해야 할 local 설정이 있는지 먼저 확인한 뒤 선택합니다.

## 참고 문서

아래 문서들을 기준으로 이 페이지를 정리했습니다.

- [VS Code Settings Sync](https://code.visualstudio.com/docs/configure/settings-sync)
- [VS Code Profiles](https://code.visualstudio.com/docs/configure/profiles)
- [GitHub authentication](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
