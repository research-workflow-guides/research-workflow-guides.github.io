---
layout: layouts/doc.njk
title: LaTeX 설치
description: MiKTeX를 설치하고 기본 LaTeX 도구 체인이 준비됐는지 확인합니다.
lang: ko
section: start-here
order: 1
permalink: /ko/start-here/latex-installation/
translationKey: start-here-latex-installation
eyebrow: Step 1
lead: MiKTeX를 설치하고, 필요 시 패키지가 자동으로 설치되도록 설정한 뒤, 기본 도구 체인이 준비됐는지 확인합니다.
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

이 가이드의 기본 배포판은 MiKTeX입니다. 초기 설치 부담이 적고, 처음 사용자에게 익숙하며, 필요한 패키지를 작업 중에 설치할 수 있습니다.

이 가이드에서는 MiKTeX로 설치합니다.

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
    <p>설치 프로그램 자체는 일반적인 흐름으로 진행하면 충분합니다. 먼저 setup wizard가 오류 없이 끝나는지 확인하는 것이 중요합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-3.png" alt="MiKTeX setup wizard 완료 화면">
    <figcaption>MiKTeX setup wizard가 오류 없이 끝나야 합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>설치 후에는 MiKTeX Console에서 <code>latexmk</code>를 검색해, 설치 대상이 보이는지부터 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-4.png" alt="MiKTeX Console에서 latexmk를 검색한 화면">
    <figcaption>MiKTeX Console에서 <code>latexmk</code>를 검색합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p><code>latexmk</code>가 없으면 MiKTeX가 패키지를 내려받아 설치할 때까지 기다립니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-5.png" alt="MiKTeX 패키지 설치 진행 창">
    <figcaption>패키지 설치가 끝날 때까지 진행 창을 확인합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>나중에 build가 멈춘 것처럼 보이면 MiKTeX 패키지 설치 창이 editor 뒤에 숨어 있는지 먼저 확인하세요.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-7.png" alt="editor 뒤에 숨어 있는 MiKTeX 패키지 설치 창 미리보기">
    <figcaption>build가 멈추면 editor 뒤에 MiKTeX 설치 창이 숨어 있지 않은지 확인합니다.</figcaption>
  </figure>
</div>

<div class="doc-step-pair">
  <div>
    <p>설치 창이 나타나면 누락된 패키지를 설치하도록 허용해야 build가 계속 진행됩니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-8.png" alt="누락된 패키지에 대한 MiKTeX 설치 대화상자">
    <figcaption>누락된 패키지를 설치하라는 창이 뜨면 설치를 허용합니다.</figcaption>
  </figure>
</div>

## 운영체제별 메모

### Windows

이 가이드에서는 Windows를 기본 경로로 봅니다. MiKTeX를 설치한 뒤, 이후 `latexmk`/`latexdiff` 계열 작업에서 막히지 않도록 **Strawberry Perl을 필수로 설치**해 두는 것을 권장합니다.

- Strawberry Perl 공식 사이트: <https://strawberryperl.com/>
- 설치 후 새 터미널에서 다음을 확인합니다.

```powershell
perl --version
where perl
latexmk -v
```

### macOS

macOS는 공식 MiKTeX 설치 프로그램을 사용합니다. 보통 Perl이 기본 경로(`/usr/bin/perl`)에 잡혀 있지만, 진행 전에 터미널에서 직접 확인하는 것을 권장합니다.

```bash
perl --version
which perl
latexmk -v
```

`perl` 명령이 없으면 Perl 런타임을 먼저 설치한 뒤 다시 확인합니다.

### Linux

Linux는 지원되지만 배포판별 설치 방식 차이가 큽니다. 따라서 배포판별 세부 단계는 MiKTeX **공식 Linux 설치 문서**를 기준으로 진행하는 것이 가장 안전합니다.

- MiKTeX Linux 설치(공식): <https://miktex.org/howto/install-miktex-unx>

설치 후에는 아래처럼 도구 체인을 점검하도록 문구를 넣는 것을 권장합니다.

```bash
perl --version
which perl
latexmk -v
miktex --version
```

`latexmk`가 없으면 MiKTeX Console(또는 해당 배포판의 MiKTeX 패키지 흐름)에서 설치한 뒤 다시 확인합니다.

## Perl 확인


`latexmk`와 이후 `latexdiff` 계열 작업은 Perl 기반 도구에 의존합니다.

```bash
perl --version
latexmk -v
```

Windows에서는 Perl이 없으면 Strawberry Perl을 설치합니다. macOS와 Linux는 기본 Perl이 있는지 먼저 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/1.1.3-6.png" alt="Strawberry Perl 다운로드 페이지">
  <figcaption>Windows에 Perl이 없다면 Strawberry Perl을 함께 설치합니다.</figcaption>
</figure>

## 점검

MiKTeX Console이 정상적으로 열리고 `latexmk -v`가 오류 없이 실행되는지 확인합니다. Perl 기반 도구를 사용한다면 `perl --version`도 확인합니다.
