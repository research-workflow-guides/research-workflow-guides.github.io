---
layout: layouts/doc.njk
title: ProcessPoolExecutor
description: Use multiple CPU processes for independent Python tasks.
lang: en
section: python
order: 11
group: acceleration
permalink: /en/python/process-pool-executor/
translationKey: python-process-pool-executor
eyebrow: Acceleration 2
lead: ProcessPoolExecutor is useful when many independent CPU-bound jobs can run in parallel.
toc:
  - id: when-to-use-processpoolexecutor
    label: When to use ProcessPoolExecutor
  - id: minimal-example
    label: Minimal example
  - id: working-habit
    label: Working habit
tags:
  - doc
---
## When to use ProcessPoolExecutor

Use `ProcessPoolExecutor` when you have many independent CPU-heavy tasks, such as parameter sweeps, repeated simulations, or file-by-file processing.

It is usually not helpful when each task is tiny, when tasks share large mutable state, or when most of the time is spent waiting on network or disk I/O.

## Minimal example

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

The `if __name__ == "__main__":` guard is important, especially on Windows.

## Working habit

Keep worker functions small and defined at the top level of the file. Pass simple inputs, return simple outputs, and combine the results after the parallel section finishes.
