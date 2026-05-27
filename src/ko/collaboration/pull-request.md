---
layout: layouts/doc.njk
title: Pull Request
description: Branch 변경 사항을 main 이력에 merge하기 전에 GitHub에서 검토합니다.
lang: ko
section: collaboration
order: 4
permalink: /ko/collaboration/pull-request/
translationKey: git-pull-request
eyebrow: 주제 4
lead: Pull Request는 branch 작업을 merge하기 전에 GitHub에서 검토하는 페이지입니다.
toc:
  - id: pull-request의-의미
    label: Pull Request의 의미
  - id: branch를-github에-push하기
    label: branch를 GitHub에 push하기
  - id: pull-request-열기
    label: Pull Request 열기
  - id: pull-request-검토하기
    label: Pull Request 검토하기
  - id: pull-request-merge하기
    label: Pull Request merge하기
tags:
  - doc
---
## Pull Request의 의미

Pull Request는 보통 PR이라고 줄여 부르며, 별도의 Git 명령어가 아닙니다. GitHub가 Git의 branch, commit, merge 기능 위에 만든 협업 workflow입니다.

PR은 GitHub에서 한 branch와 다른 branch를 비교해달라고 요청하는 과정입니다. 보통 작업 branch가 compare branch이고, 작업을 받을 `main`이 base branch입니다.

다른 사람이 작업을 확인해야 하거나, 변경 사항이 크거나, merge 전에 논의 기록을 남기고 싶다면 Pull Request를 사용하세요.

## branch를 GitHub에 push하기

Pull Request를 열기 전에는 branch가 GitHub에 올라가 있어야 합니다.

```shell
git push -u origin draft-section
```

`-u` 옵션은 local branch와 GitHub의 branch를 연결합니다. 그 다음부터는 같은 branch에서 보통 `git push`만 입력하면 됩니다.

## Pull Request 열기

Branch를 push한 뒤 GitHub에 `Compare & pull request` 버튼이 나타날 수 있습니다. 이 버튼을 클릭해 PR을 시작합니다.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-1.png" alt="Compare and pull request 버튼이 보이는 GitHub repository 화면">
</figure>

Branch 방향을 주의해서 확인하세요. base branch는 변경 사항을 받을 branch이며 보통 `main`입니다. compare branch는 작업이 들어 있는 branch입니다.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-2.png" alt="base branch와 compare branch를 확인하는 GitHub pull request 비교 화면">
</figure>

짧은 제목과 설명을 작성합니다. 제목에는 작업 이름을 적고, 설명에는 무엇이 바뀌었는지 또는 reviewer가 무엇을 확인해야 하는지 적습니다.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-3.png" alt="title과 description을 작성하는 GitHub pull request 생성 화면">
</figure>

## Pull Request 검토하기

Pull Request가 만들어지면 GitHub는 discussion, commit, check, merge 상태를 한 곳에 모아 보여줍니다.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-4.png" alt="생성된 GitHub Pull Request 페이지">
</figure>

Changed files 화면에서 정확한 변경 차이를 확인한 뒤 merge합니다. Reviewer는 comment를 남기거나, PR을 approve하거나, 수정을 요청할 수 있습니다.

<figure class="image-frame">
  <img src="/assets/images/pull-requests-5.png" alt="파일 변경 사항을 검토하는 GitHub Pull Request 화면">
</figure>

수정 요청을 받았다면 같은 branch로 돌아가 파일을 수정하고, commit한 뒤 다시 push합니다.

```shell
git add .
git commit -m "Address review comments"
git push
```

같은 branch에 새 commit을 push하면 Pull Request는 자동으로 업데이트됩니다.

## Pull Request merge하기

Review가 끝나고 branch가 준비되면 GitHub에서 Pull Request를 merge합니다. PR이 merge되면 `main`에 branch 작업이 포함됩니다.

VS Code로 돌아와 local `main` branch를 업데이트합니다.

```shell
git switch main
git pull
```

Branch가 더 이상 필요하지 않다면 merge가 완료된 것을 확인한 뒤 삭제할 수 있습니다.

Pull Request를 단순히 push하는 다른 방법처럼 다루지 마세요. PR의 핵심은 review입니다. Branch 방향을 확인하고, 파일 차이를 읽고, 변경 사항을 논의한 뒤, 작업이 준비되었을 때 merge하는 것이 목적입니다.
