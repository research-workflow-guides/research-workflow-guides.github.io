---
layout: layouts/doc.njk
title: Snippets
description: Use a small snippet set to speed up repetitive LaTeX typing without overengineering.
lang: en
section: writing-in-vs-code
order: 5
permalink: /en/writing-in-vs-code/snippets/
translationKey: writing-snippets
eyebrow: Topic 5
lead: Snippets are useful when they remove repetition without hiding the structure of the document.
toc:
  - id: start-with-high-frequency-patterns
    label: Start with high-frequency patterns
  - id: example-snippet
    label: Example snippet
  - id: avoid-oversized-snippet-libraries
    label: Avoid oversized libraries
  - id: before-you-move-on
    label: Self-check
tags:
  - doc
---
## Start with high-frequency patterns

Create snippets only for patterns you type constantly:

- theorem environments
- aligned equation blocks
- common figure or table shells
- repeated document scaffolding

If a snippet is used once a month, it probably does not belong in the core set.

## Example snippet

```json
{
  "align environment": {
    "prefix": "ali",
    "body": [
      "\\begin{align}",
      "  $1",
      "\\end{align}"
    ]
  }
}
```

Keep prefixes short but memorable.

## Avoid oversized libraries

Large snippet files become their own maintenance burden. Start with a small set that you trust, then add entries only when repeated typing is clearly wasting time.

## Self-check

Confirm that your snippets speed up common LaTeX patterns and that you still understand the structure they expand into.

