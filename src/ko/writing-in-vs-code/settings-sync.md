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

공식 문서 기준으로 다음 항목을 동기화할 수 있습니다.

- `Settings`
- `Keyboard Shortcuts`
- `User Snippets`
- `User Tasks`
- `UI State`
- `Extensions`
- `Profiles`

처음에는 이 항목들을 세세하게 조정하기보다 기본 설정 그대로 시작해도 충분합니다.

## GitHub 계정으로 Settings Sync 켜기

Settings Sync를 켜는 방법은 간단합니다.

1. VS Code 왼쪽 아래의 Accounts 또는 Manage 메뉴를 엽니다.
2. `Backup and Sync Settings...`를 선택합니다.
3. 계정 선택 창에서 `Sign in with GitHub`를 선택합니다.
4. 브라우저에서 GitHub 로그인을 완료하고 VS Code로 돌아옵니다.

<div class="doc-step-pair">
  <div>
    <p>먼저 Manage 메뉴에서 <code>Backup and Sync Settings...</code>를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/settings-sync/backup-and-sync-settings.png" alt="Backup and Sync Settings가 선택된 VS Code Manage 메뉴 예시 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>계정을 고르는 화면에서는 <code>Sign in with GitHub</code>를 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/settings-sync/sign-in-with-github.png" alt="Sign in with GitHub가 선택된 VS Code 계정 선택 예시 화면">
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

## 다른 PC에서 같은 환경 이어받기

다른 PC에 VS Code를 설치한 뒤 같은 GitHub 계정으로 로그인하면, 저장해 둔 작업 환경을 불러올 수 있습니다.

이때 VS Code는 클라우드 설정을 현재 기기에 어떻게 적용할지 묻습니다. `Merge` 또는 `Replace Local` 중 선택할 수 있으며, 완전히 새로 설치한 환경이라면 보통 `Replace Local`이 가장 간단합니다.

<div class="doc-step-pair">
  <div>
    <p>새로 설치한 VS Code라면 보존해야 할 local 설정이 거의 없으므로 <code>Replace Local</code>이 가장 단순합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/settings-sync/merge-or-replace.png" alt="Replace Local이 선택된 VS Code Settings Sync 적용 방식 예시 화면">
  </figure>
</div>

## 참고 문서

아래 문서들을 기준으로 이 페이지를 정리했습니다.

- [VS Code Settings Sync](https://code.visualstudio.com/docs/configure/settings-sync)
- [VS Code Profiles](https://code.visualstudio.com/docs/configure/profiles)
- [GitHub authentication](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github)
