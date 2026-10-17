---
layout: layouts/doc.njk
title: TeXBB
description: Windows용 TeXBB로 수학 메모를 작성하고 LaTeX PDF와 BibTeX 참고문헌을 확인합니다.
lang: ko
section: writing-in-vs-code
order: 7
permalink: /ko/writing-in-vs-code/texbb/
translationKey: writing-texbb
eyebrow: 선택
lead: TeXBB(LaTeX BlackBoard)는 LaTeX, Markdown, 그리기, BibTeX 참고문헌을 다루는 Windows용 프로그램입니다. VS Code의 본격적인 연구 원고와 별개로, 짧은 계산과 메모를 적는 연습장처럼 사용할 수 있습니다.
toc:
  - id: open-texbb
    label: TeXBB 시작하기
  - id: android-viewer
    label: Android 뷰어
  - id: mathematical-note
    label: 수식 메모 써 보기
  - id: latex-pdf
    label: LaTeX PDF 만들기
  - id: references
    label: 참고문헌 살펴보기
tags:
  - doc
---
<h2 id="open-texbb">TeXBB 시작하기</h2>

<div class="doc-action-row">
  <p>공식 사이트에서 Microsoft Store 링크를 따라 Windows 앱을 설치합니다. TeXBB는 VS Code 확장 기능이 아니라 별도 프로그램이며, 이 안내서의 필수 단계는 아닙니다.</p>
  <a class="doc-action-link" href="https://texbb.kiyuobjung.com/">TeXBB 공식 사이트</a>
</div>

본격적인 원고와 GitHub 관리는 지금까지의 VS Code 작업 흐름을 그대로 사용하면 됩니다. TeXBB는 그 옆에서 수식 하나를 시험하거나, 참고문헌을 살펴보거나, 떠오른 생각을 적는 용도로 시작해 보세요. 앱의 **Help > Tutorial**에서도 사용 예제를 볼 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/texbb/desktop-latex.png" alt="TeXBB Windows LaTeX 편집기와 컴파일된 PDF 미리보기가 나란히 보이는 화면" width="2560" height="1392">
</figure>

<h2 id="android-viewer">Android 뷰어</h2>

원하면 동기화한 Markdown 미리보기와 LaTeX PDF를 휴대전화에서 읽을 수 있습니다. Android 앱 없이 Windows 앱만 사용해도 됩니다. 현재 설치·이용 가능 여부와 연결 방법은 공식 [PC–모바일 안내](https://texbb.kiyuobjung.com/#setup)를 확인하고, 연결과 동기화에는 신뢰할 수 있는 사설 네트워크를 사용합니다.

<figure class="image-frame image-frame--phone">
  <img src="/assets/images/texbb/android-viewer.jpg" alt="TeXBB Android 뷰어에서 LaTeX로 만든 PDF를 보는 화면" width="1080" height="2093">
</figure>

<h2 id="mathematical-note">수식 메모 써 보기</h2>

먼저 Markdown으로 간단한 메모를 만들어 봅니다. LaTeX 문서 전체의 틀을 준비하지 않아도 설명과 수식을 함께 적을 수 있습니다.

1. 앱 위쪽에서 **Markdown**을 선택합니다.
2. <strong>+</strong>를 눌러 연습용 문서를 새로 만들고 해당 편집기 탭을 선택합니다.
3. 아래 예제를 붙여넣습니다.
4. **Build**를 눌러 메모를 저장하고 미리보기를 갱신합니다.

```markdown
# 간단한 계산

$n \ge 1$일 때, 처음 $n$개 양의 정수의 합은 다음과 같습니다.

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}.
$$

- $n=3$일 때 확인해 봅니다.
- 원고에 넣기 전에 여기에서 논증을 정리합니다.
```

문장 안의 수식은 `$...$`, 독립된 수식은 `$$...$$`로 감쌉니다. 이 Markdown 미리보기에 필요한 수식 표시 기능은 TeXBB에 포함되어 있으므로, 이 단계에서는 TeX 컴파일러가 없어도 됩니다. 여기서 **Build**는 메모의 표시를 갱신하는 버튼이지 LaTeX PDF를 만드는 버튼은 아닙니다.

<figure class="image-frame">
  <img src="/assets/images/texbb/markdown-note.png" alt="TeXBB Markdown 편집기의 수식 메모와 옆에서 수식을 표시하는 미리보기 화면" width="2560" height="1392">
  <figcaption>TeXBB에서 수식이 들어간 Markdown 메모를 작성하고 확인하는 예시입니다.</figcaption>
</figure>

<h2 id="latex-pdf">LaTeX PDF 만들기</h2>

짧은 LaTeX 초안을 PDF로 확인하려면 **LaTeX** 작업 화면을 사용합니다. PDF를 만들 때는 별도로 설치한 TeX 도구가 필요합니다. 앞의 [LaTeX 설치](/ko/initial-setup/latex-installation/)를 완료했다면 그 설치를 그대로 사용하면 되며, TeXBB용으로 다시 설치할 필요는 없습니다.

1. **Settings > LaTeX**에서 **LaTeX setup**을 찾고 **Scan again**을 누릅니다. **Detected**로 표시되는지 확인합니다.
2. **LaTeX**로 돌아가 <strong>+</strong>를 눌러 기본 틀이 들어 있는 연습용 문서를 만듭니다.
3. 기본 문서의 본문만 아래 예제로 바꿉니다. 전처리부와 문서 구조는 그대로 둡니다. 전체 소스가 보인다면 `\begin{document}`와 `\end{document}` 사이만 수정합니다.
4. **Build**를 누르고 작업이 끝나면 해당 **Viewer** 탭에서 PDF를 확인합니다.

```latex
For $n \ge 1$,
\[
  \sum_{k=1}^{n} k = \frac{n(n+1)}{2}.
\]
```

빌드가 실패하면 **View > Log Panel**에서 처음 나온 컴파일 오류를 확인합니다. 미리보기에 이전에 성공한 PDF가 남아 있을 수 있으므로, 화면에 PDF가 보인다고 해서 방금 빌드가 성공한 것은 아닙니다.

<details>
  <summary>PDF가 만들어졌는데 Viewer가 비어 있다면</summary>
  <p><strong>Detected</strong>는 TeX 빌드 도구가 발견되었다는 뜻입니다. 로그에 <code>No PDF renderer found</code>가 나오면 PDF 표시용 Poppler 도구인 <code>pdftoppm</code> 또는 <code>pdftocairo</code>가 추가로 필요합니다. 설정에 도움이 필요하면 <a href="https://texbb.kiyuobjung.com/support">TeXBB Support</a>를 확인하세요.</p>
</details>

<h2 id="references">참고문헌 살펴보기</h2>

**Reference**에서는 BibTeX 문헌 정보를 편집하고 표나 인용 관계 그림으로 확인할 수 있습니다. [BibTeX 안내](/ko/writing-in-vs-code/bibliography-citation/)에서 모은 문헌 정보도 사용할 수 있습니다.

- 기존 문헌 목록으로 연습하려면 먼저 `.bib` 파일의 복사본을 만듭니다. <strong>Settings &gt; Reference &gt; BibTex file &gt; Change File...</strong>에서 그 복사본을 선택합니다.
- 이미 가지고 있는 BibTeX 문헌 정보를 추가하려면 **Reference**에서 **Tools > Reference > Import Citation...** 또는 <strong>+</strong>를 선택하고, BibTeX 항목을 붙여넣은 뒤 **Import**를 누릅니다.
- 소스를 직접 고쳤다면 **Editor**에서 **Save**를 누릅니다. **Table**에서는 항목을 표로 확인하고, **Viewer**를 선택하면 관계 그림을 갱신합니다.

인용 가져오기는 붙여넣은 문헌 정보를 사용하는 기능이며 DOI나 URL을 자동으로 검색하는 기능은 아닙니다. 연습용 복사본을 수정해도 원고 프로젝트의 `.bib` 파일은 자동으로 바뀌지 않습니다. 원고에 반영할 내용은 해당 프로젝트 파일에 저장하고, VS Code에서 원고를 다시 빌드해 확인합니다.

<figure class="image-frame">
  <img src="/assets/images/texbb/reference-diagram.png" alt="TeXBB Reference Viewer에서 문헌 항목과 인용 관계를 그림으로 보여 주는 화면" width="2560" height="1392">
  <figcaption>Viewer에서 문헌과 인용 관계를 그림으로 확인하는 예시입니다.</figcaption>
</figure>

<figure class="image-frame">
  <img src="/assets/images/texbb/reference-table.png" alt="TeXBB Reference Table에서 저자와 제목, 연도 등 문헌 정보를 표로 보여 주는 화면" width="2560" height="1392">
  <figcaption>Table에서 문헌 목록을 표로 확인하는 예시입니다.</figcaption>
</figure>
