---
layout: project
title: TagLID
description: A word level Language Identification (LID) tool for Tagalog-English (Taglish) text.
img: assets/img/projects/taglid/preview.png
importance: 1
category: developer
skills:
  - Python
  - NLP
  - Web scraping
  - XML programming
github: https://github.com/andrianllmm/taglid
pseudocode: true
related_publications: true
giscus_comments: true
selected: true
---

[TagLID](https://github.com/andrianllmm/taglid) is a word level Language Identification (LID) tool for Tagalog-English (Taglish) text. It is an [open source](https://github.com/andrianllmm/taglid) project and is available as a Python library. TagLID was first developed as a data analysis tool for our Practical Research 2 {% cite maagma2023taglish%} in my Senior High School. The main purpose of the library is to identify the language of a text as either Tagalog or English. It was specifically developed to evaluate the frequency values of Tagalog and English words in a Taglish text. This was needed for our study since we need to determine the relative frequency of Taglish in a large dataset of text from our respondents. However, it grew as a reusable tool for language detection.

<br>


## Usage

TagLID can be used both as a Python library and a command-line interface (CLI) tool. For comprehensive instructions, check the [repository](https://github.com/andrianllmm/taglid/#usage).


### Library mode

You can use TagLID as a library by importing it into your Python code.

```python
from taglid.lid import lang_identify, simplify

labeled_text = lang_identify("hello, mundo")
print(simplify(labeled_text))

```
Output:
```plaintext
[('hello', 'eng'), ('mundo', 'tgl')]
```


### CLI mode

You can also use TagLID as a CLI tool by running `python -m taglid`.

<script src="https://asciinema.org/a/QYzCSjTuhHuEvhw4cUsWCJMJV.js" id="asciicast-QYzCSjTuhHuEvhw4cUsWCJMJV" async="true"></script>

<br>


## How it works

By utilizing word frequency lists, a word level language identification algorithm is defined below. This function checks the presence of a word in both Tagalog and English dictionaries and labels its language accordingly. This initial algorithm is in line with the one employed by [Herrera (2022)](https://aclanthology.org/2022.lrec-1.225). However, to address ambiguous cases where a word is present in both dictionaries such as words like the English preposition ‘at’ and the Tagalog conjunction ‘at’ (and), the word frequency of the word in both languages will be compared and evaluated accordingly.

```pseudocode
% Dictionary-based word level language identification
\begin{algorithm}
\caption{Dictionary-based word level language identification}
\begin{algorithmic}

\FUNCTION{LangIdentify}{$$word$$}
  \STATE $$lang = null$$

  \IF{word \textbf{in} EngDict \textbf{and} word \textbf{in} TglDict}
    \IF{EngFreq[word] > TglFreq[word]}
      \STATE $$lang = "ENG"$$
    \ELSEIF{TglFreq[word] > EngFreq[word]}
      \STATE $$lang = "TGL"$$
    \ENDIF
  \ELSEIF{word \textbf{in} EngDict}
    \STATE $$lang = "ENG"$$
  \ELSEIF{word \textbf{in} TglDict}
    \STATE $$lang = "TGL"$$
  \ENDIF
\ENDFUNCTION

\end{algorithmic}
\end{algorithm}
```
This function is preceded by supplementary functions to exclude certain words from the count since they are not specific to English or Tagalog.
It is then proceeded other supplementary functions to handle special cases in which the word frequency lists cannot catch. Check the [source code](https://github.com/andrianllmm/tagLID/blob/main/src/taglid/lid.py) for see these supplementary functions.