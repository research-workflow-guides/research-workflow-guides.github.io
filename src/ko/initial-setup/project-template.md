---
layout: layouts/doc.njk
title: 프로젝트 템플릿
description: 시작용 프로젝트를 내려받아 첫 빌드를 실행하고 전체 도구 체인이 동작하는지 확인합니다.
lang: ko
section: initial-setup
order: 3
permalink: /ko/initial-setup/project-template/
translationKey: initial-setup-project-template
eyebrow: 3단계
lead: 시작용 프로젝트를 내려받아 VS Code에서 열고, 빌드를 한 번 실행해 전체 도구 체인이 동작하는지 확인합니다.
outcome: 시작용 프로젝트를 압축 해제하고 폴더로 연 뒤 PDF로 빌드합니다.
prerequisites:
  - LaTeX, VS Code, LaTeX Workshop 설치를 완료했습니다.
  - GitHub에서 seed-documents ZIP 파일을 받을 수 있습니다.
completion: 시작용 프로젝트가 오류 없이 빌드되고 VS Code preview에서 PDF가 열립니다.
commonProblems:
  - 압축 파일 미리보기만 열면 정상적인 workspace build를 할 수 없습니다.
  - 첫 build에서 MiKTeX가 누락된 패키지를 설치하는 동안 잠시 멈출 수 있습니다.
verification:
  status: needs-review
  environment: Windows 기준으로 작성 중이며 macOS와 Linux는 추후 작성·검증할 예정입니다.
  workflow: GitHub ZIP 다운로드, 압축 해제, VS Code 폴더 열기, 첫 PDF build.
  lastVerified: 현재 제품 기준 walkthrough 대기 중.
  support: Windows 안내 검토 중. macOS와 Linux 안내는 추후 추가 예정.
  scopeNote: 이 단계는 Windows를 기준으로 설명합니다. macOS와 Linux 절차는 추후 작성·검증할 예정입니다.
toc:
  - id: 템플릿-다운로드하기
    label: 템플릿 다운로드하기
tags:
  - doc
---
## 템플릿 다운로드하기

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <ol>
      <li>
        <p>GitHub에서 seed-documents 리파지토리를 엽니다.</p>
        <p><a class="doc-action-link" href="https://github.com/research-workflow-guides/seed-documents">seed-documents 리파지토리</a></p>
      </li>
      <li>아래 버튼을 클릭해 ZIP archive를 다운로드합니다.</li>
    </ol>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/github-code-btn.svg" alt="GitHub Code 버튼">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <ol start="3">
      <li>압축을 풀고 폴더 구조를 유지합니다 — 다음 파트에서 VS Code로 폴더 전체를 열게 됩니다.</li>
    </ol>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.5-1.png" alt="GitHub의 starter repository">
  </figure>
</div>

압축 파일이 정상적으로 내려받아졌고, 압축을 푼 폴더에 프로젝트 파일이 온전히 들어 있는지 확인합니다.
