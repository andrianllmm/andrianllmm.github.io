---
layout: project
title: Tagalog Stemmer
description: A Python library for Tagalog word stemming.
img: assets/img/projects/tglstemmer/preview.png
importance: 2
category: libraries
skills:
  - Python
  - NLP
github: https://github.com/andrianllmm/tagalog-stemmer
giscus_comments: true
---

[tglstemmer](https://github.com/andrianllmm/tagalog-stemmer) is a Python library for Tagalog word stemming. It is an [open source](https://github.com/andrianllmm/tagalog-stemmer) project and is available as a python library. aklstemmer was first developed as a supplementary tool for the the [TagLID project](/projects/taglid). The main purpose of the library is to determine the base or root word of a Tagalog word. It was specifically developed to improve the dictionary-base Language Identification tool since inflected words is often not included in the word list. It is now a reusable tool for stemming any Tagalog-inflected words.

```python
from tglstemmer import stemmer

stem = stemmer.get_stem("nagsulat")

print(stem)
# Output: 'sulat'

```
