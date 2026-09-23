---
layout: layouts/doc.njk
title: Git 설치
description: Windows에 Git을 설치하고 커밋 작성자 이름·이메일을 설정합니다.
lang: ko
section: git-github
order: 1
permalink: /ko/git-github/git-installation/
translationKey: git-git-installation
eyebrow: 주제 1
lead: Windows에서 Git for Windows를 설치한 뒤, 커밋에 기록할 이름과 이메일을 설정합니다. 새 PowerShell에서 설치와 설정을 확인합니다.
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 설치 화면을 기준으로 작성했으며 macOS와 Linux 절차는 추후 작성·검증합니다.
  workflow: Git for Windows 설치, 전역 이름·이메일 설정, PowerShell에서 명령 확인.
  lastVerified: 2026-09-23 Git 공식 문서 확인. Windows 실제 설치 검증 대기 중.
  support: 기존 Windows 설치 이미지는 업데이트가 필요합니다. macOS와 Linux 안내는 준비 중입니다.
  scopeNote: 현재 Windows 설치 절차를 안내합니다. macOS와 Linux 절차는 추후 작성·검증합니다.
verificationCard: false
toc:
  - id: git-설치
    label: Git 설치
  - id: identity-설정
    label: 커밋 작성자 설정
  - id: 설치-확인
    label: 설치 확인
tags:
  - doc
---
## Git 설치

<div class="doc-step-pair">
  <div>
    <p>Git 공식 <a href="https://git-scm.com/install/windows">Windows 설치 페이지</a>를 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-1.png" alt="예전 Git 다운로드 페이지의 Windows 버튼과 2.40.1 버전 표시">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>Windows 설치 페이지에서 PC에 맞는 x64 또는 ARM64 Setup 파일을 내려받아 실행합니다. 설치 창이 열리면 <strong>Next</strong>로 진행합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-2.png" alt="Git 2.40.1 설치 마법사의 Information 화면과 Next 버튼">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>기본 편집기 선택 화면이 나오면, VS Code를 Git 편집기로 쓰려는 경우 <strong>Use Visual Studio Code as Git's default editor</strong>를 선택합니다. 다른 설치 옵션은 각 화면의 설명을 확인하며 진행합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-3.png" alt="Git 2.40.1 설치 마법사의 기본 편집기 목록에서 Visual Studio Code를 선택하는 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>설치 마법사의 마지막 화면에서 <strong>Finish</strong>를 선택합니다. 설치 전에 열어둔 PowerShell이나 VS Code 터미널은 닫고 새로 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.3-4.png" alt="Git 2.40.1 설치 마법사의 완료 화면과 Finish 버튼">

  </figure>
</div>

<h2 id="identity-설정">커밋 작성자 설정</h2>

Git은 커밋에 작성자 이름과 이메일을 기록합니다. 아래 `--global` 설정은 이 컴퓨터 사용자 계정의 기본값이며, 저장소별로 다른 값을 지정할 수도 있습니다.

새 PowerShell 창을 엽니다. VS Code를 사용 중이라면 <strong>Terminal &gt; New Terminal</strong>을 연 뒤 PowerShell을 선택해도 됩니다. 다음 명령을 입력합니다.

```shell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

`Your Name`과 `you@example.com`을 사용할 이름과 이메일로 바꿉니다. 공개 저장소에 개인 이메일을 표시하고 싶지 않다면 [GitHub 계정에서 제공하는 `noreply` 주소](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address)를 확인해 사용합니다.

## 설치 확인

새 PowerShell에서 Git 버전과 전역 이름·이메일을 각각 확인합니다.

```shell
git --version
git config --global user.name
git config --global user.email
```

`git --version`이 버전을 출력하고 두 설정 조회가 입력한 이름과 이메일을 보여주면 완료입니다. `git` 명령을 찾지 못하면 설치 전에 열어둔 터미널을 닫고 새 PowerShell에서 다시 확인합니다.
