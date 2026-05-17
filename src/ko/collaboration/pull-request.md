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
lead: Pull Request는 branch 변경 사항을 merge하기 전에 협업자가 확인하고, 논의하고, 승인할 수 있게 해줍니다.
toc:
  - id: pull-request의-의미
    label: Pull Request의 의미
  - id: pull-request-열기
    label: Pull Request 열기
  - id: 변경-사항-검토하기
    label: 변경 사항 검토하기
  - id: pull-request-merge하기
    label: Pull Request merge하기
  - id: 넘어가기-전
    label: 넘어가기 전
tags:
  - doc
---
## Pull Request의 의미

Pull Request는 보통 PR이라고 줄여 부르며, GitHub에서 한 branch를 다른 branch로 merge해달라고 요청하는 과정입니다. 작업이 main 프로젝트 이력의 일부가 되기 전에 확인이 필요할 때 유용합니다.

PR에서는 보통 다음을 확인할 수 있습니다.

- 새 작업이 들어 있는 branch
- 작업을 받을 branch
- 변경 사항에 포함된 commit
- 정확한 파일 차이
- comment, review 결정, merge 상태

## Pull Request 열기

Pull Request를 열기 전에 branch를 GitHub에 push합니다.

```bash
git push origin draft-section
```

GitHub에서 repository를 열고 새 Pull Request를 만듭니다. base branch는 `main`으로 선택하고, compare branch는 `draft-section` 같은 작업 branch로 선택합니다.

제목에는 작업 내용을 짧게 적습니다. 설명에는 무엇이 바뀌었는지, reviewer가 특히 확인해야 할 부분이 있는지 적습니다.

## 변경 사항 검토하기

Review 단계는 협업자가 merge 전에 변경 사항을 읽는 과정입니다.

Pull Request를 열고 변경된 파일을 확인합니다. Reviewer는 comment를 남기거나, 수정을 요청하거나, PR을 승인하거나, 변경을 요구할 수 있습니다.

좋은 review comment는 구체적입니다. 단순히 잘못되었다고 말하기보다, 어떤 줄이나 섹션을 가리키고 무엇이 바뀌어야 하는지 설명합니다.

수정 요청을 받았다면 branch로 돌아가 파일을 수정하고, commit한 뒤 다시 push합니다.

```bash
git add .
git commit -m "Address review comments"
git push origin draft-section
```

새 commit을 push하면 Pull Request는 자동으로 업데이트됩니다.

## Pull Request merge하기

Review가 끝나고 branch가 준비되면 GitHub에서 Pull Request를 merge합니다. PR이 merge되면 `main`에 branch 작업이 포함됩니다.

VS Code로 돌아와 local `main` branch를 업데이트합니다.

```bash
git switch main
git pull
```

Branch가 더 이상 필요하지 않다면 merge가 완료된 것을 확인한 뒤 GitHub나 local에서 branch를 삭제할 수 있습니다.

## 넘어가기 전

다른 사람이 작업을 확인해야 하거나, 변경 사항이 크거나, merge 전에 논의 기록을 남기고 싶다면 Pull Request를 사용하세요. 혼자 하는 작은 작업이라면 직접 merge해도 충분할 수 있습니다.
