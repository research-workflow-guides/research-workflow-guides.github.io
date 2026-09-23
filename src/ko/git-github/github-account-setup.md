---
layout: layouts/doc.njk
title: GitHub 계정 준비
description: GitHub 계정을 확인하거나 만들고 이메일 인증과 보안 설정을 점검합니다.
lang: ko
section: git-github
order: 2
permalink: /ko/git-github/github-account-setup/
translationKey: git-github-account-setup
eyebrow: 주제 2
lead: 저장소를 만들고 협업할 GitHub 계정을 확인합니다. 계정이 없다면 만들고 이메일 주소를 인증합니다.
verification:
  status: needs-review
  screenshots: needs-update
  environment: GitHub 웹 브라우저 흐름을 기준으로 작성했으며 기존 이미지는 예전 데스크톱 화면입니다.
  workflow: 계정 선택 또는 가입, 이메일 인증, 2단계 인증 확인.
  lastVerified: 2026-09-23 GitHub 공식 문서 확인. 현재 가입 화면 검증 대기 중.
  support: 기존 GitHub 가입 이미지는 업데이트가 필요합니다.
verificationCard: false
toc:
  - id: 계정-만들기-또는-확인
    label: 계정 만들기 또는 확인
  - id: 기본-보안-설정
    label: 기본 보안 설정
  - id: 프로필-정리
    label: 프로필 정리
tags:
  - doc
---
## 계정 만들기 또는 확인

이번 저장소를 소유할 GitHub 계정을 선택합니다. 이미 계정이 있다면 해당 계정으로 로그인합니다.

<div class="doc-step-pair">
  <div>
    <p><a href="https://github.com/">GitHub 공식 홈페이지</a>를 엽니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.4-1.png" alt="예전 GitHub 홈페이지의 시작 화면">

  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>계정이 없다면 <a href="https://github.com/signup">GitHub 가입 페이지</a>에서 가입하고 안내에 따라 이메일 주소를 인증합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.4-2.png" alt="예전 GitHub 홈페이지의 Sign up 버튼">

  </figure>
</div>

## 기본 보안 설정

비밀번호를 사용한다면 고유하고 강한 비밀번호를 설정합니다. GitHub의 [2단계 인증 안내](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)에 따라 인증을 설정하고 [복구 코드](https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication-recovery-methods)를 안전하게 보관합니다.

## 프로필 정리

프로필에서 사용자명을 확인합니다. 새 저장소를 만들려면 이메일 주소가 인증되어 있어야 하므로, <strong>Settings &gt; Emails</strong>에서 상태를 확인하고 필요하면 [이메일 인증 안내](https://docs.github.com/en/account-and-profile/how-tos/email-preferences/verifying-your-email-address)를 따릅니다.

선택한 계정으로 로그인할 수 있고 이메일 인증을 마쳤다면 [GitHub 연결](/ko/git-github/connect-github/) 안내로 진행합니다.
