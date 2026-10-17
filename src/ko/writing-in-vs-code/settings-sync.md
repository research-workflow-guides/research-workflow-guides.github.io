---
layout: layouts/doc.njk
title: VS Code 작업 환경 동기화
description: Windows용 VS Code에서 GitHub 계정으로 Settings Sync를 켜고 다른 Windows PC와 사용자 환경을 동기화합니다.
lang: ko
section: writing-in-vs-code
order: 9
permalink: /ko/writing-in-vs-code/settings-sync/
translationKey: writing-settings-sync
eyebrow: 선택
lead: Windows에서 GitHub 계정으로 Settings Sync를 켜면 VS Code를 다시 설치하거나 다른 Windows PC를 사용할 때 설정과 확장 등 작업 환경을 동기화할 수 있습니다.
verificationCard: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows용 VS Code를 기준으로 설명하며 macOS와 Linux 절차는 추후 검증합니다.
  workflow: Settings Sync 활성화, 동기화 항목 확인, GitHub 로그인, 다른 Windows PC에서 동기화 확인.
  lastVerified: 2026-10-16 기존 macOS 이미지의 명령과 동기화 항목을 Windows용 VS Code 1.142.0과 비교했습니다.
  support: macOS 사진을 설명용 예시로 유지합니다. 브라우저 로그인과 PC 간 동기화는 실행하지 않았습니다.
toc:
  - id: settings-sync란-무엇인가
    label: Settings Sync란 무엇인가
  - id: github-계정으로-settings-sync-켜기
    label: GitHub 계정으로 Settings Sync 켜기
  - id: 동기화-항목은-기본값-그대로-두기
    label: 동기화 항목 확인하기
  - id: 다른-pc에서-같은-환경-이어받기
    label: 다른 PC에서 같은 환경 이어받기
  - id: 참고-문서
    label: 참고 문서
tags:
  - doc
---
## Settings Sync란 무엇인가

같은 GitHub 계정으로 Settings Sync를 켠 Windows PC 사이에서는 선택한 설정의 변경 사항이 자동으로 동기화됩니다.

Settings Sync에서는 다음 항목을 선택해 동기화할 수 있습니다.

- `Settings`
- `Keyboard Shortcuts`
- `Snippets`
- `Tasks`
- `MCP Servers`
- `UI State`
- `Extensions`
- `Profiles`
- `Prompts and Instructions`

## GitHub 계정으로 Settings Sync 켜기

1. `Ctrl+Shift+P`로 Command Palette를 엽니다.
2. `Settings Sync: Backup and Sync Settings...`를 실행합니다.
3. 동기화할 항목을 확인한 뒤 `Sign in`을 선택합니다.
4. 계정 선택 창에서 `Sign in with GitHub`를 선택합니다.
5. 브라우저에서 GitHub 로그인을 완료하고 VS Code로 돌아옵니다.

아래 사진은 macOS 예시이며, Windows에서도 같은 명령과 동기화 항목을 선택합니다.

<p>Command Palette에서 <code>Settings Sync: Backup and Sync Settings...</code>를 실행합니다. 사진에서는 두 번째 항목입니다. 선택되어 있는 <code>Help: Settings Sync</code>는 도움말을 여는 명령입니다.</p>

<figure class="image-frame">
  <img src="/assets/images/settings-sync/backup-and-sync-settings.png" alt="선택된 Help 아래 Settings Sync Backup and Sync Settings 명령이 보이는 macOS용 VS Code Command Palette">
</figure>

<h2 id="동기화-항목은-기본값-그대로-두기">동기화 항목 확인하기</h2>

기본으로 체크된 항목을 확인합니다. 동기화하지 않을 항목이 있다면 체크를 해제하고, 나머지는 그대로 둡니다.

<p>나중에 동기화 항목을 바꾸려면 Command Palette에서 <code>Settings Sync: Configure...</code>를 실행합니다.</p>

<figure class="image-frame">
  <img src="/assets/images/settings-sync/sync-options-defaults.png" alt="기본 동기화 항목이 체크된 macOS용 VS Code Settings Sync 예시 화면">
</figure>

<p><code>Sign in</code>을 누른 뒤 계정 선택 화면에서 <code>Sign in with GitHub</code>를 선택합니다.</p>

<figure class="image-frame">
  <img src="/assets/images/settings-sync/sign-in-with-github.png" alt="Sign in with GitHub가 선택된 VS Code 계정 선택 실제 화면">
</figure>

## 다른 PC에서 같은 환경 이어받기

다른 Windows PC에 VS Code를 설치한 뒤 같은 GitHub 계정으로 Settings Sync를 켜면 선택한 항목이 동기화됩니다.

Settings Sync를 켜면 VS Code가 이 PC와 클라우드의 데이터를 자동으로 병합합니다. 충돌을 자동으로 해결하지 못하면 동기화가 멈추고 해결을 요청합니다. `Show Conflicts`에서 양쪽 내용을 비교한 뒤 병합을 완료합니다.

## 참고 문서

<div class="doc-action-links">
  <a class="doc-action-link" href="https://code.visualstudio.com/docs/configure/settings-sync">VS Code Settings Sync</a>
  <a class="doc-action-link" href="https://code.visualstudio.com/docs/configure/profiles">VS Code Profiles</a>
  <a class="doc-action-link" href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github">GitHub authentication</a>
</div>
