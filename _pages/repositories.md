---
layout: page
permalink: /repositories/
title: Repositories
description:
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

<section id="users">

<h2 class="mt-4"><a href=".#users" class="text-reset text-decoration-none">Users</a></h2>

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
{% for user in site.data.repositories.github_users %}
  {% include repository/repo_user.liquid username=user %}
{% endfor %}
</div>

</section>
<hr>

{% if site.repo_trophies.enabled %}

<section id="trophies">

{% for user in site.data.repositories.github_users %}

{% if site.data.repositories.github_users.size > 1 %}
<h4>{{ user }}</h4>
{% endif %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
{% include repository/repo_trophies.liquid username=user %}
</div>

{% endfor %}

</section>
<hr>

{% endif %}

{% endif %}

{% if site.data.repositories.github_repos %}

<section id="repos">

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

</section>
<hr>

{% endif %}
