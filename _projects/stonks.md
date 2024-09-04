---
layout: project
title: Stonks
description: A Flask web app for simulating “buying”, “selling", and managing portfolios of stocks.
img: assets/img/projects/stonks/preview.png
importance: 3
category: applications
skills:
  - Flask
  - Python
  - SQLite
  - API
  - JavaScript
  - Chart.js
  - Bootstrap
giscus_comments: true
selected: true
---

Stonks is a web application that allows users to manage portfolios of stocks. It enables users to check real-time stock prices and the value of their portfolios using the Yahoo Finance API. The app also simulates "buying" and "selling" stocks by querying for stock prices. Stonks was developed as part of a [problem set](https://cs50.harvard.edu/x/2024/psets/9/finance/) for  [Harvard's CS50x](https://cs50.harvard.edu/x/2024/).

{% include figure.liquid loading="eager" path="assets/img/projects/stonks/preview.png" class="img-fluid mb-4 rounded-lg" zoomable=true %}

<br>

## Tech Stack

| **Front-End** | JS ES14, HTML 5, CSS 4, Bootstrap 5, Chart.js 4 |
| **Back-End** | Python 3, Flask 3 |
| **Database** | MySQL |
| **APIs** | Yahoo Finance |

<br>

<br>
## Features
<br>

### Authentication

Users can create an account by filling out a form with a unique username and password. Once registered, they can log in to their accounts.

<br>

### Stock Quote Lookup

Users can look up the current price of a stock in real-time by searching for its symbol.

<br>

### Portfolio Overview

The portfolio view displays the stocks a user owns, including the number of shares, current prices, and total value of each stock. It also shows the user’s cash balance and the overall portfolio value.

<br>

### Stock Purchase

Users can buy stocks by providing a stock symbol and the number of shares. Purchase transactions are recorded in the database.

<br>

### Stock Sale

Users can sell stocks from their portfolio by selecting a symbol and entering the number of shares to sell. Sale transactions are also recorded in the database.

<br>

### Transaction History

A transaction history is available, presenting a detailed record of all transactions, including both purchases and sales.

<br>
