---
layout: layouts/doc.njk
title: NumPy
description: 작은 수치 계산과 데이터 준비에 NumPy array를 사용합니다.
lang: ko
section: python
order: 3
group: backends
permalink: /ko/python/numpy/
translationKey: python-numpy
eyebrow: Backend 1
lead: NumPy는 Python에서 array 기반 수치 계산을 시작할 때 가장 기본이 되는 도구입니다.
toc:
  - id: numpy를-쓸-때
    label: NumPy를 쓸 때
  - id: 최소-예제
    label: 최소 예제
  - id: 작업-습관
    label: 작업 습관
tags:
  - doc
---
## NumPy를 쓸 때

<div class="doc-action-row">
  <p>Source code, issue, release, development 정보를 확인해야 할 때는 NumPy 공식 repository를 사용합니다.</p>
  <a class="doc-action-link" href="https://github.com/numpy/numpy">공식 repository</a>
</div>

데이터가 array 형태로 자연스럽게 표현되고, 빠르고 예측 가능한 수치 연산이 필요할 때 NumPy를 사용합니다.

초기 분석, 데이터 정리, 시뮬레이션, 그리고 더 무거운 library로 넘어가기 전의 데이터 준비에 적합합니다.

## 최소 예제

```python
import numpy as np

x = np.linspace(0.0, 1.0, 6)
y = x ** 2

print(y)
```

## 작업 습관

처음에는 NumPy 코드를 명시적으로 유지합니다. 여러 변환을 한 줄에 숨기기보다 array shape를 자주 확인하는 편이 안전합니다.

```python
print(x.shape)
print(y.shape)
```
