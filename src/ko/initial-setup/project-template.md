---
layout: layouts/doc.njk
title: 프로젝트 템플릿
description: GitHub에서 seed-documents를 내려받아 check-document.tex을 빌드하고 PDF를 확인합니다.
lang: ko
section: initial-setup
order: 3
permalink: /ko/initial-setup/project-template/
translationKey: initial-setup-project-template
eyebrow: 3단계
lead: GitHub에서 <code>seed-documents</code> 시작용 프로젝트를 ZIP 파일로 내려받아 압축을 풉니다. 압축을 푼 폴더를 VS Code에서 열고 첫 PDF 빌드를 실행합니다.
verificationCard: false
workflowChecks: false
verification:
  status: needs-review
  screenshots: needs-update
  environment: Windows 기준으로 작성 중이며 macOS와 Linux는 추후 작성·검증할 예정입니다.
  workflow: GitHub ZIP 다운로드, 압축 해제, VS Code 폴더 열기, 첫 PDF build.
  lastVerified: 2026-09-23 저장소와 공식 문서 확인. Windows 실제 실행 검증 대기 중.
  support: Windows 안내 검토 중. macOS와 Linux 안내는 추후 추가 예정.
  scopeNote: Windows 절차의 실제 동작 검증이 남아 있습니다. macOS와 Linux 안내는 추후 작성합니다.
toc:
  - id: 템플릿-다운로드하기
    label: 템플릿 다운로드하기
  - id: 첫-pdf-빌드-실행
    label: 첫 PDF 빌드 실행
tags:
  - doc
---
## 템플릿 다운로드하기

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <ol>
      <li>
        <p><a class="doc-action-link" href="https://github.com/research-workflow-guides/seed-documents">seed-documents 저장소 열기</a></p>
      </li>
      <li>저장소의 파일 목록 위에서 <strong>Code</strong>를 클릭한 다음 <strong>Download ZIP</strong>을 선택합니다.</li>
    </ol>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/github-code-btn.svg" alt="GitHub Code 버튼">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <ol start="3">
      <li>다운로드한 ZIP 파일을 파일 탐색기에서 마우스 오른쪽 버튼으로 클릭하고 <strong>모두 압축 풀기(Extract All)</strong>를 선택합니다. 압축을 푼 폴더에 <code>check-document.tex</code> 파일과 <code>seed-document</code> 폴더가 있는지 확인합니다.</li>
    </ol>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.5-1.png" alt="GitHub의 starter repository">
  </figure>
</div>

## 첫 PDF 빌드 실행

1. VS Code에서 **File > Open Folder...** 메뉴를 선택하고, `check-document.tex`이 들어 있는 압축 해제된 최상위 폴더를 엽니다.
2. Explorer에서 `check-document.tex`을 엽니다. `Ctrl+Shift+P`로 Command Palette를 열고 `Build LaTeX project`를 검색해 실행합니다. MiKTeX의 패키지 설치 요청 창이 나타나면 필요한 패키지 설치를 완료한 뒤 빌드 결과를 확인합니다.
3. 빌드가 끝나면 `check-document.pdf`가 생성되었는지 확인합니다. Command Palette에서 `View LaTeX PDF file`을 실행해 PDF가 VS Code 미리 보기에서 열리는지 확인합니다.
