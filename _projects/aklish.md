---
layout: project
title: Aklish
description: A Django x React.js web app for crowdsourcing Aklanon-English translations.
img: assets/img/projects/aklish/preview.png
importance: 1
category: developer
skills:
  - Django
  - React.js
  - Python
  - JavaScript
  - Sass
  - Bootstrap
github: https://github.com/andrianllmm/aklish
demo: https://aklish.up.railway.app
toc:
  sidebar: left
related_publications: true
tabs: true
chart:
  echarts: true
giscus_comments: true
selected: true
---

[Aklish](https://aklish.up.railway.app) is a web application designed to facilitate the crowdsourcing of Aklanon-English translations. It is an [open source](https://github.com/andrianllmm/aklish) project and is deployed in [Railway](https://aklish.up.railway.app) for demo purposes (it may be unavailable due to hosting costs). Aklish was initially developed as a Research Capstone Project {% cite maagma2024aklish %} during my Senior High School. The main purpose of the app is to enrich the Aklanon language, my mother tongue, which is classified as a Low-resource Language (LRL). It was specifically developed to offer a collaborative platform where users can contribute and manage translations between Aklanon and English. Over time, the app has grown to include additional features such as Aklanon-English dictionaries, spellcheckers, leaderboards, and word games.

{% include figure.liquid loading="eager" path="assets/img/projects/aklish/preview.png" class="img-fluid mb-4 rounded-lg" zoomable=true %}

## Goals

- **Expand Language Resources** <br>
  Develop tools to significantly enrich Aklanon language resources, ensuring they are both high-quality and engaging for users.

- **Foster Community Collaboration** <br>
  Create an inclusive platform where both native Aklanon speakers and learners can actively participate in and contribute to the translation process.

- **Enhance Language Learning** <br>
  Provide interactive and immersive features that support and accelerate language learning and practice.

<br>

## Tech Stack

| **Front-End** | JS ES14, React 18, HTML 5, CSS 4, SASS 1, Bootstrap 5 |
| **Back-End** | Python 3, Django 5 |
| **Database** | MySQL |
| **APIs** | REST |
| **Testing** | PyTest |
| **Version Control** | Git, GitHub |
| **Deployment** | Railway |

<br>

## Interface

The interface is designed with **responsiveness** in mind, ensuring it adapts seamlessly to different screen sizes and devices. It also includes a **dark mode** theme, allowing users to switch to a more visually comfortable experience in low-light environments.

<div class="row my-1">
  <div class="col-9">
    <img-comparison-slider value="72" hover="hover" class="w-100 h-auto">
      {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/homepage.png" class="img-fluid rounded" slot="first" %}
      {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/homepage_dark.png" class="img-fluid rounded" slot="second" %}
    </img-comparison-slider>
  </div>

  <div class="col-3">
    <img-comparison-slider value="50" hover="hover" class="w-100 h-auto">
      {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/homepage.png" class="img-fluid rounded" slot="first" %}
      {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/homepage_dark.png" class="img-fluid rounded" slot="second" %}
    </img-comparison-slider>
  </div>
</div>

<br>

<br>
## Features
<br>

### Bidirectional Input

Users can input entries and translations in both Aklanon and English.

<div class="row mx-auto">
  <div class="col-md m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/add-entry.png" class="img-fluid rounded" zoomable=true %} </div>
  <div class="col-md m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/add-translation.png" class="img-fluid rounded" zoomable=true %} </div>
</div>

<br>

### Multiple Translations

The platform supports multiple translations for a single entry, providing a range of translation options and interpretations.

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/multiple-translations.png" class="img-fluid rounded" zoomable=true %} </div>

<br>

### Browse Entries

Users can browse through various contributions and translations, making it easy to explore and review content.

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/browse-entries.png" class="img-fluid rounded" zoomable=true %} </div>

<br>

### Search Entries

A robust search feature enables users to find specific entries or translations quickly and efficiently.

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/search-entries.png" class="img-fluid rounded" zoomable=true %} </div>

<br>

### Authentication

Secure authentication ensures that users can create accounts, log in, and manage their contributions safely.

{% tabs authentication %}

{% tab authentication desktop %}

<div class="row mx-auto">
  <div class="col-md m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/login.png" class="img-fluid rounded" zoomable=true %} </div>
  <div class="col-md m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/register.png" class="img-fluid rounded" zoomable=true %} </div>
</div>

{% endtab %}

{% tab authentication mobile %}

<div class="row mx-auto">
  <div class="col m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/login.png" class="img-fluid rounded" zoomable=true %} </div>
  <div class="col m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/register.png" class="img-fluid rounded" zoomable=true %} </div>
</div>

{% endtab %}

{% endtabs %}

<br>

### Quality Control Strategies

#### Voting System

A community-driven voting system allows users to rate and evaluate translations, ensuring high-quality entries.

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/voting.png" class="img-fluid rounded" zoomable=true %} </div>

<br>

#### Dictionaries

An integrated Aklanon and English dictionary provides users with references and helps in maintaining consistency and accuracy in translations.

{% tabs dictionaries %}

{% tab dictionaries desktop %}

<div class="row mx-auto">
  <div class="col-md m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/dictionary_catalog.png" class="img-fluid rounded" zoomable=true %} </div>
  <div class="col-md m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/dictionary_entry.png" class="img-fluid rounded" zoomable=true %} </div>
</div>

{% endtab %}

{% tab dictionaries mobile %}

<div class="row mx-auto">
  <div class="col m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/dictionary_catalog.png" class="img-fluid rounded" zoomable=true %} </div>
  <div class="col m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/dictionary_entry.png" class="img-fluid rounded" zoomable=true %} </div>
</div>

{% endtab %}

{% endtabs %}

<br>

#### Proofreaders

Proofreading tools and mechanisms help maintain the quality of translations in both Aklanon and English.

{% tabs proofreader %}

{% tab proofreader desktop %}

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/proofreader.png" class="img-fluid rounded" zoomable=true %} </div>

{% endtab %}

{% tab proofreader mobile %}

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/proofreader.png" class="img-fluid rounded" zoomable=true %} </div>

{% endtab %}

{% endtabs %}

<br>

#### Points System

A points system similar to Stack Overflow's reputation system rewards active users and contributors, promoting accountability within the community.

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/reputation-guide.png" class="img-fluid rounded" zoomable=true %} </div>

<br>

### Engagement Strategies

#### Leaderboard System

Leaderboards showcase top contributors, encouraging healthy competition and recognition for active participants.

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/leaderboard.png" class="img-fluid rounded" zoomable=true %} </div>

<br>

#### Games

Interactive games, including a Wordle clone and synonym-antonym matching, provide an engaging way to learn and practice both languages.

##### Wordle

{% tabs wordle %}

{% tab wordle desktop %}

<div class="row mx-auto">
  <div class="col-md m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/wordle.png" class="img-fluid rounded" zoomable=true %} </div>
  <div class="col-md m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/wordle_won.png" class="img-fluid rounded" zoomable=true %} </div>
</div>

{% endtab %}

{% tab wordle mobile %}

<div class="row mx-auto">
  <div class="col m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/wordle.png" class="img-fluid rounded" zoomable=true %} </div>
  <div class="col m-1"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/wordle_won.png" class="img-fluid rounded" zoomable=true %} </div>
</div>

{% endtab %}

{% endtabs %}

<br>

#### Match

{% tabs match %}

{% tab match desktop %}

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/desktop/match.png" class="img-fluid rounded" zoomable=true %} </div>

{% endtab %}

{% tab match mobile %}

<div class="col-md-6 mx-auto"> {% include figure.liquid path="assets/img/projects/aklish/screenshots/mobile/match.png" class="img-fluid rounded" zoomable=true %} </div>

{% endtab %}

{% endtabs %}

<br>

## Effectiveness

Through a comprehensive assessment of its functionality, performance, accessibility, adherence to modern standards (AMS), search engine optimization (SEO), usability, and engagement, Aklish was determined to be functional (82.01%), perform well (81.33%), be accessible (96.79%), adhere to modern standards (100%), be search engine optimized (99.21%), be usable (61.29%), and relatively low in engagement based on several metrics {% cite maagma2024aklish %}.

```echarts
{
  "responsive": true,
  "tooltip": {},
  "legend": {},
  "xAxis": {
    "data": ["Functionality", "Performance", "Accessibility", "AMS", "SEO", "Usability"],
    "axisLabel": {
      "interval": 0,
      "rotate": 30,
      "overflow": "truncate"
    }
  },
  "yAxis": {},
  "series": [
    {
      "name": "Effectiveness",
      "type": "bar",
      "data": [82, 81, 96, 100, 99, 61]
    }
  ]
}
```

<br>
