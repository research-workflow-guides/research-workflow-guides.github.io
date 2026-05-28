---
layout: layouts/doc.njk
title: CUDA
description: GPU 실행이 이득이 될 만큼 큰 작업에 CUDA-capable GPU를 사용합니다.
lang: ko
section: python
order: 12
group: acceleration
permalink: /ko/python/cuda/
translationKey: python-cuda
eyebrow: Acceleration 3
lead: CUDA acceleration은 큰 numerical workload를 GPU에서 병렬 작업으로 표현할 수 있을 때 유용합니다.
toc:
  - id: cuda를-쓸-때
    label: CUDA를 쓸 때
  - id: 최소-예제
    label: 최소 예제
  - id: 작업-습관
    label: 작업 습관
tags:
  - doc
---
## CUDA를 쓸 때

계산량이 크고, 병렬화하기 좋고, 데이터를 GPU로 옮겼다가 다시 가져오는 비용을 감수할 만큼 이득이 있을 때 CUDA를 사용합니다.

대부분의 연구 workflow에서는 PyTorch나 JAX처럼 이미 CUDA를 지원하는 library부터 시작하는 편이 좋습니다. Library 경로로 충분하지 않을 때만 custom CUDA kernel을 고려합니다.

## 최소 예제

아래 PyTorch 예제는 compatible GPU와 CUDA-enabled PyTorch 설치가 있으면 CUDA에서 실행됩니다.

```python
import torch

device = "cuda" if torch.cuda.is_available() else "cpu"

x = torch.linspace(0.0, 1.0, 1000, device=device)
y = x**2

print(device)
print(y[:5])
```

## 작업 습관

먼저 CPU에서 correctness를 확인한 뒤 같은 계산을 GPU로 옮깁니다. CUDA가 실제로 도움이 됐는지 판단할 때는 data transfer까지 포함한 end-to-end runtime을 재야 합니다.
