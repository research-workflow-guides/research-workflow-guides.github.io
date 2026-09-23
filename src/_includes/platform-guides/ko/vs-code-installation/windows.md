## VS Code 설치

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <div class="doc-action-row">
      <p>VS Code 공식 다운로드 페이지에서 Windows용 <strong>User Installer</strong>를 선택합니다. Intel·AMD PC에서는 x64, Arm PC에서는 Arm64 설치 파일을 내려받습니다.</p>
      <a class="doc-action-link" href="https://code.visualstudio.com/Download">VS Code 공식 다운로드</a>
    </div>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-2.png" alt="VS Code 다운로드 페이지의 Windows 설치 파일 선택 화면">
  </figure>
</div>

다운로드한 설치 파일을 실행하고 안내에 따라 설치합니다. User Installer는 현재 사용자 계정에 설치되며 관리자 권한이 필요하지 않습니다. 설치가 끝나면 VS Code를 열어 시작 화면이 표시되는지 확인합니다.

## LaTeX Workshop 설치

VS Code 왼쪽의 Extensions 아이콘을 선택하거나 `Ctrl+Shift+X`를 눌러 확장 화면을 엽니다.

<p><a class="doc-action-link" href="https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop">VS Code Marketplace의 LaTeX Workshop</a></p>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>검색창에 <strong>LaTeX Workshop</strong>을 입력합니다. 게시자가 <strong>James Yu</strong>인 확장을 선택하고 <strong>Install</strong>을 누릅니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-3.png" alt="VS Code Extensions 검색 결과에서 James Yu의 LaTeX Workshop을 찾은 화면">
  </figure>
</div>

<div class="doc-step-pair">
  <div class="doc-step-copy">
    <p>설치 후 LaTeX Workshop이 Installed 목록에 있는지 확인합니다. Disabled로 표시되면 확장 관리 메뉴에서 <strong>Enable</strong> 또는 <strong>Enable (Workspace)</strong>을 선택합니다. 다시 로드하라는 안내가 나타나면 VS Code 창을 다시 로드합니다.</p>
  </div>
  <figure class="image-frame">
    <img src="/assets/images/1.2-4.png" alt="VS Code Installed 확장 목록에 LaTeX Workshop이 표시된 화면">
  </figure>
</div>

## 빌드 명령 확인

`Ctrl+Shift+P`로 Command Palette를 열고 `Build LaTeX project`를 검색합니다. 명령이 보이지 않으면 `.tex` 파일을 열어 다시 검색하고, LaTeX Workshop이 비활성화되지 않았는지 확인합니다. 실제 PDF 빌드는 다음 프로젝트 템플릿 단계에서 진행합니다.
