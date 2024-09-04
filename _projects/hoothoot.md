---
layout: project
title: Hoothoot
description: A Django Twitter-like social network web app for making posts and following people.
img: assets/img/projects/hoothoot/preview.png
importance: 4
category: applications
skills:
  - Django
  - Python
  - JavaScript
  - Bootstrap
giscus_comments: true
selected: true
---

Hoothoot is a web application that provides a social networking experience similar to Twitter. It allows users to create posts, like and comment on posts, share content, and follow other users. The app features user authentication, robust post management,  and real-time updates for likes and comments. Hoothoot was developed as part of a [problem set](https://cs50.harvard.edu/web/2020/projects/4/network/) for [Harvard's CS50w](https://cs50.harvard.edu/web/2020/).

{% include figure.liquid loading="eager" path="assets/img/projects/hoothoot/preview.png" class="img-fluid mb-4 rounded-lg" zoomable=true %}

<br>

## Tech Stack

| **Front-End** | JS ES14, HTML 5, CSS 4, Bootstrap 5 |
| **Back-End** | Python 3, Django 5 |
| **Database** | MySQL |

<br>

<br>
## Features
<br>

### Authentication

Users can create an account by providing a unique username, email, and password. Once registered, they can log in to their accounts.

<br>

### Create Posts

Signed-in users can create new text-based posts, which are visible to all users in the feed.

<br>

### Like and Unlike

Users can like or unlike posts. JavaScript handles updates to the like count asynchronously, without reloading the page.

<br>

### Edit Posts

Users can edit their own posts by replacing the post content with a textarea. Changes are saved without reloading the page, using JavaScript.

<br>

### Feed

The feed displays all posts from all users, sorted by recency and popularity. Each post can be liked, commented on, and shared.

<br>

### Following

The "Following" page shows posts from users that the current user follows, functioning similarly to the main feed but with a filtered set of posts.

<br>

### Profile

The profile page displays all posts by the user. It allows others to follow or unfollow them while showing the number of followers and the users they follow.

<br>
