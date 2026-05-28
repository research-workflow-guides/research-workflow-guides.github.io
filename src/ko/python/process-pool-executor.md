---
layout: layouts/doc.njk
title: ProcessPoolExecutor
description: 서로 독립적인 Python 작업을 여러 CPU process로 나누어 실행합니다.
lang: ko
section: python
order: 11
group: acceleration
permalink: /ko/python/process-pool-executor/
translationKey: python-process-pool-executor
eyebrow: Acceleration 2
lead: ProcessPoolExecutor는 독립적인 CPU-bound 작업이 많고, 그 작업들을 병렬로 실행할 수 있을 때 유용합니다.
toc:
  - id: processpoolexecutor를-쓸-때
    label: ProcessPoolExecutor를 쓸 때
  - id: 최소-예제
    label: 최소 예제
  - id: 작업-습관
    label: 작업 습관
tags:
  - doc
---
## ProcessPoolExecutor를 쓸 때

Parameter sweep, 반복 simulation, file-by-file processing처럼 서로 독립적인 CPU-heavy task가 많을 때 `ProcessPoolExecutor`를 사용합니다.

각 task가 너무 작거나, 큰 mutable state를 공유해야 하거나, 대부분의 시간이 network나 disk I/O를 기다리는 데 쓰인다면 효과가 작을 수 있습니다.

## 최소 예제

```python
from concurrent.futures import ProcessPoolExecutor

def compute_square(n):
    return n, n**2

if __name__ == "__main__":
    values = range(10)

    with ProcessPoolExecutor() as executor:
        results = list(executor.map(compute_square, values))

    print(results)
```

`if __name__ == "__main__":` guard는 특히 Windows에서 중요합니다.

## 작업 습관

Worker function은 작게 만들고 file의 top level에 둡니다. 단순한 input을 넘기고 단순한 output을 돌려받은 뒤, parallel section이 끝난 후 결과를 합칩니다.
