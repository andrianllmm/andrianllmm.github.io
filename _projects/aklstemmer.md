---
layout: project
title: Aklanon Stemmer
description: A Python library for Aklanon word stemming.
img: assets/img/projects/aklstemmer/preview.png
importance: 2
category: libraries
skills:
  - Python
  - NLP
github: https://github.com/andrianllmm/aklanon-stemmer
giscus_comments: true
selected: true
---

[aklstemmer](https://github.com/andrianllmm/aklanon-stemmer) is a Python library for Aklanon word stemming. It is an [open source](https://github.com/andrianllmm/aklanon-stemmer) project and is available as a Python library. aklstemmer was first developed as a supplementary tool for the spellchecker used in the [Aklish project](/projects/aklish). The main purpose of the library is to determine the base or root word of an Aklanon word. It was specifically developed to improve the dictionary-base spellchecker since inflected words is often not included in the word list. It is now a reusable tool for stemming any Aklanon-inflected words.

```python
from aklstemmer import stemmer

stem = stemmer.get_stem("nagsueat")

print(stem)
# Output: 'sueat'

```
