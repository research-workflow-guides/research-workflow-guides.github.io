## MiKTeX 다운로드

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <div class="doc-action-row">
      <p>아래 ‘MiKTeX 공식 다운로드’ 링크를 열어 다운로드 페이지로 이동합니다.</p>
      <a class="doc-action-link" href="https://miktex.org/download">MiKTeX 공식 다운로드</a>
    </div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-1.png" alt="MiKTeX 홈페이지">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>다운로드 페이지에서 Windows용 설치 파일을 선택합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-2.png" alt="MiKTeX 다운로드 페이지">
  </figure>
</div>

## MiKTeX 설치

1. 다운로드한 MiKTeX 설치 파일을 실행하고, 화면의 안내에 따라 설치를 완료합니다.
2. 설치가 끝나면 MiKTeX Console을 엽니다. 이 프로그램에서 MiKTeX를 업데이트하고 LaTeX 패키지를 관리할 수 있습니다.
3. MiKTeX Console에서 사용 가능한 업데이트를 확인하고 설치합니다. 업데이트가 완료되면 다음 단계로 진행합니다.
4. 문서를 컴파일할 때 필요한 LaTeX 패키지가 없으면 자동으로 설치하도록 설정합니다. 자세한 설정 방법은 아래 ‘패키지 자동 설치’ 절에서 설명합니다.
5. MiKTeX Console에서 `latexmk`를 검색하고 설치 여부를 확인합니다. 설치되어 있지 않으면 해당 패키지를 설치합니다.

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>설치 프로그램에 완료 화면이 표시되는지 확인합니다. 오류가 발생했다면 오류 메시지를 확인하고 해결한 뒤 다음 단계로 진행합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-3.png" alt="MiKTeX setup wizard 완료 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>MiKTeX Console의 Packages 화면에서 <code>latexmk</code>를 검색합니다. 검색 결과의 <code>latexmk</code> 행을 선택하고 ‘Installed on’ 열에서 설치 여부를 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-4.png" alt="MiKTeX Console에서 latexmk를 검색한 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>‘Installed on’ 열이 비어 있으면 <code>latexmk</code> 행을 선택하고 더하기(+) 버튼을 눌러 설치합니다. 패키지 설치가 끝날 때까지 기다립니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-5.png" alt="MiKTeX 패키지 설치 진행 창">
  </figure>
</div>

## Perl 설치

`latexmk`와 이후 `latexdiff` 계열 작업에는 Perl이 필요합니다. Windows에서 설치하고 확인하는 방법은 다음과 같습니다.

Windows에 Perl이 설치되어 있지 않다면 Strawberry Perl을 설치합니다. 이미 Perl을 사용 중이라면 아래 명령으로 실행 여부를 먼저 확인합니다.

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <div class="doc-action-row">
      <p>Strawberry Perl 공식 사이트에서 Windows용 설치 프로그램을 내려받아 설치합니다.</p>
      <a class="doc-action-link" href="https://strawberryperl.com/">Strawberry Perl</a>
    </div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-6.png" alt="Strawberry Perl 다운로드 페이지">
  </figure>
</div>

새 PowerShell에서 다음 명령을 실행합니다.

```powershell
perl --version
where.exe perl
latexmk -v
```

## 패키지 자동 설치

MiKTeX Console의 Settings > General에서 ‘Always install missing packages on-the-fly’를 선택하면 문서를 컴파일할 때 누락된 패키지를 자동으로 설치합니다. 설치할 때마다 확인하려면 ‘Ask me’를 선택합니다.

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>‘Ask me’를 선택한 상태에서 VS Code의 빌드가 멈춘 것처럼 보이면, 작업 표시줄에서 MiKTeX 패키지 설치 창이 열려 있는지 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-7.png" alt="editor 뒤에 숨어 있는 MiKTeX 패키지 설치 창 미리보기">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>설치 창에 표시된 패키지를 확인한 뒤 Install을 누릅니다. 설치가 완료되면 빌드를 다시 확인합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.1.3-8.png" alt="누락된 패키지에 대한 MiKTeX 설치 대화상자">
  </figure>
</div>
