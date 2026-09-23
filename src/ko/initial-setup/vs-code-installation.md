---
layout: layouts/doc.njk
title: VS Code 설치
description: VS Code를 설치하고 LaTeX Workshop 확장을 추가합니다.
lang: ko
section: initial-setup
order: 2
permalink: /ko/initial-setup/vs-code-installation/
translationKey: initial-setup-vs-code-installation
eyebrow: 2단계
lead: VS Code를 설치하고 LaTeX Workshop 확장을 추가해 첫 프로젝트를 열 준비를 마칩니다.
outcome: VS Code가 정상적으로 열리고 LaTeX Workshop이 설치되어 활성화됩니다.
prerequisites:
  - 이전 핵심 단계에서 LaTeX 배포판 설치를 완료했습니다.
  - VS Code와 extension을 설치할 권한이 필요합니다.
completion: Extensions 화면에서 LaTeX Workshop이 활성화되어 있고 Command Palette에 build 명령이 나타납니다.
commonProblems:
  - Extension이 설치되어 있어도 현재 workspace에서 비활성화되어 있을 수 있습니다.
  - LaTeX Workshop 명령이 보이려면 VS Code 창을 reload해야 할 수 있습니다.
verification:
  status: needs-review
  environment: Windows 기준으로 작성 중이며 macOS와 Linux는 추후 작성·검증할 예정입니다.
  workflow: VS Code 설치와 LaTeX Workshop extension 설정.
  lastVerified: 현재 제품 기준 walkthrough 대기 중.
  support: Windows 안내 검토 중. macOS와 Linux 안내는 추후 추가 예정.
  scopeNote: 이 단계는 Windows를 기준으로 설명합니다. macOS와 Linux 절차는 추후 작성·검증할 예정입니다.
toc:
  - id: vs-code-설치
    label: VS Code 설치
  - id: latex-workshop-설치
    label: LaTeX Workshop 설치
tags:
  - doc
---
## VS Code 설치

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <div class="doc-action-row">
      <p>Windows용 VS Code 설치 파일을 다운로드한 뒤, 설치 후 VS Code가 오류 없이 열리는지 확인합니다.</p>
      <a class="doc-action-link" href="https://code.visualstudio.com/Download">VS Code 공식 다운로드</a>
    </div>
    <p>먼저 VS Code 공식 홈페이지에 들어가서 올바른 다운로드 경로에 있는지만 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-1.png" alt="VS Code 홈페이지">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>그다음 다운로드 페이지로 이동해 Windows용 설치 파일을 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-2.png" alt="VS Code 다운로드 페이지">
  </figure>
</div>

## LaTeX Workshop 설치

1. 좌측 Extensions 패널이나 Command Palette를 엽니다.
2. **LaTeX Workshop**을 검색해 James Yu가 배포한 확장을 설치합니다.
3. 설치 후 VS Code를 잠시 열어 두어 확장이 완전히 등록되도록 합니다.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop">VS Code Marketplace의 LaTeX Workshop</a></p>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>먼저 Extensions 패널에서 <strong>LaTeX Workshop</strong>를 검색해 올바른 확장을 찾습니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-3.png" alt="LaTeX Workshop가 보이는 VS Code Extensions 패널">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>설치가 끝난 뒤에는 확장이 활성화됐는지 확인하고, VS Code가 첫 프로젝트 작업을 받을 준비가 됐는지 봅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-4.png" alt="설치가 완료된 VS Code 화면">
  </figure>
</div>

VS Code가 정상적으로 열리고, LaTeX Workshop이 설치되어 있으며, Command Palette에서 LaTeX Workshop 관련 명령이 보이면 다음 단계로 넘어갑니다.
