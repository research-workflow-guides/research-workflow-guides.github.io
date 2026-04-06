---
layout: layouts/doc.njk
title: LaTeX 설치
description: MiKTeX를 설치하고 기본 LaTeX 도구 체인이 동작하는지 확인합니다.
lang: ko
section: start-here
order: 1
permalink: /ko/start-here/latex-installation/
translationKey: start-here-latex-installation
eyebrow: Step 1
lead: MiKTeX를 설치하고, 필요한 패키지가 자동으로 들어오도록 두고, 기본 toolchain이 준비됐는지 확인합니다.
meta:
  - label: 기본 배포판
    value: MiKTeX
  - label: 목표
    value: latexmk가 동작하는 기본 LaTeX 환경 만들기
toc:
  - id: why-miktex
    label: 왜 MiKTeX인가
  - id: install-miktex
    label: MiKTeX 설치
  - id: platform-notes
    label: 운영체제별 메모
  - id: perl-requirement
    label: Perl 확인
  - id: before-you-move-on
    label: 점검
tags:
  - doc
---
## 왜 MiKTeX인가

이 가이드에서는 처음 설치 부담이 비교적 낮고, 작업 중 필요한 패키지를 바로 설치하기 쉬운 MiKTeX를 기본 배포판으로 둡니다.

여기서는 TeX Live 비교보다 "가장 빨리 첫 build를 통과하는 경로"를 우선합니다.

[MiKTeX 공식 다운로드](https://miktex.org/download)

<div class="doc-step-pair">
  <div>
    <p>먼저 MiKTeX 공식 홈페이지에 들어가서 올바른 배포판 사이트에 와 있는지부터 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-1.png" alt="MiKTeX 홈페이지">
    <figcaption>MiKTeX 공식 홈페이지에서 시작합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 다운로드 페이지로 이동해서 현재 운영체제에 맞는 설치 파일을 고릅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-2.png" alt="MiKTeX 다운로드 페이지">
    <figcaption>운영체제에 맞는 다운로드 페이지로 이동합니다.</figcaption>
  </figure>
</div>

## MiKTeX 설치

1. 운영체제에 맞는 MiKTeX 설치 파일을 다운로드합니다.
2. 일반적인 설치 과정을 마친 뒤 MiKTeX Console을 한 번 실행합니다.
3. 업데이트를 먼저 적용해 패키지 데이터베이스를 최신 상태로 맞춥니다.
4. package-on-demand 옵션은 켜 둡니다.
5. `latexmk`가 보이지 않으면 MiKTeX Console에서 설치한 뒤 진행합니다.

<div class="doc-step-pair">
  <div>
    <p>설치 프로그램 자체는 일반적인 흐름으로 진행하면 충분합니다. 먼저 installer가 정상적으로 시작되는지만 보면 됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-3.png" alt="MiKTeX 설치 화면">
    <figcaption>MiKTeX 설치는 일반적인 installer 흐름으로 시작합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>설치가 끝나면 setup wizard에서 멈추지 말고 MiKTeX Console까지 열어 다음 점검으로 넘어갑니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-4.png" alt="MiKTeX 설치 단계">
    <figcaption>설치를 마친 뒤 MiKTeX Console을 실행합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>MiKTeX Console 안에서는 먼저 프로그램이 정상적으로 열리는지부터 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-5.png" alt="MiKTeX Console">
    <figcaption>설치가 끝나면 MiKTeX Console을 엽니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>그다음 <code>latexmk</code>가 보이지 않는지 확인하고, 없으면 Console에서 바로 검색해 설치합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-6.png" alt="MiKTeX Console에서 latexmk 검색">
    <figcaption><code>latexmk</code>가 없다면 Console에서 검색해 설치합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>이후 package-on-demand를 켜 두면 나중에 필요한 패키지가 빠졌을 때 첫 build를 덜 막히게 만들 수 있습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-8.png" alt="MiKTeX package-on-demand 확인 창">
    <figcaption>필요한 패키지가 자동 설치되도록 package-on-demand를 켜 둡니다.</figcaption>
  </figure>
</div>

## 운영체제별 메모

### Windows

이 가이드에서는 Windows 경로가 가장 단순합니다. 나중에 Perl 기반 도구가 필요하면 Strawberry Perl을 추가합니다.

### macOS

공식 MiKTeX 설치 프로그램을 쓴 뒤, 터미널에서 MiKTeX와 Perl이 실제로 잡히는지 확인합니다.

### Linux

배포판마다 설치 방식 차이가 있으므로 MiKTeX 문서를 참고하고, 핵심 명령이 동작하는지 더 꼼꼼히 확인합니다.

## Perl 확인

`latexmk`와 이후 `latexdiff` 계열 작업은 Perl 기반 도구에 의존합니다.

```bash
perl --version
latexmk -v
```

Windows에서는 Perl이 없으면 Strawberry Perl을 설치합니다. macOS와 Linux는 기본 Perl이 있는지 먼저 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/1.1.3-7.png" alt="Strawberry Perl 다운로드 페이지">
  <figcaption>Windows에 Perl이 없다면 Strawberry Perl을 함께 설치합니다.</figcaption>
</figure>

## 점검

MiKTeX Console이 열리고, `latexmk -v`가 동작하며, 필요하다면 `perl --version`도 정상 출력되면 다음 단계로 넘어갑니다.
