---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Getting Started with Django and Vue
description: How to set up a Django app with a Vue.js frontend
excerpt: ""
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - web-development
tags:
  - Django
  - Vue
created_at: 2021-03-04 13:30:00
updated_at: 2021-03-04 13:30:00
---

# Getting Started with Django and Vue

# Why use Django?

# Why use Vue?

# Using Templates vs API

I have seen many articles for integrating vue/react/angular/etc with backend frameworks where you basically take an html view and 
use that as your base `index.html`. I think that is way overkill, and is shoehorning one framework into another. IMHO, you
should keep your frameworks as seperate as possible. I know some of you may say, "what about the View in Model-View-Controller?" Well,
the view is just whatever a consumer consumes. If you expect your consumer to use html, then by all means use templates and integrated
html views. However, there is no reason your server application can't just serve up some good old json in its views, so you can build
whatever consumer you want to transform that json into something a user can use. The benefits of this are easy to see: 

1. The Best Tool. You can choose what the user consumes by creating a mobile app and a web app with the same backend.
2. Microservices. You can create many microservices that each handle a portion of your workload, and deploy only parts to clients who need them.
3. Frontend Framework Agnostic. You can create one service in angular, and another service in vue.
4. Deployments. By breaking up your app into pieces, you can update and deploy a part of your app instead of the whole thing.
5. Developing seperately. You can develop the frontend and the backend seperately, so your team can work concurrently.


## About our demo app
### Bookstore
- Author
  - has many books
- Book
  - has many authors
  - has many categories
- Category
  - belongs to book
  - 
### Our API Routes
- POST,GET            /api/v0/authors
- POST,PUT,GET,DELETE /api/v0/authors/{author-slug}
- POST,GET            /api/v0/authors/{author-slug}/books
- POST,PUT,GET,DELETE /api/v0/authors/{author-slug}/books/{book-slug}
- POST,PUT,GET,DELETE /api/v0/authors/{author-slug}/categories/{category-slug}
- POST,GET            /api/v0/authors/{author-slug}/categories/{category-slug}/books
- POST,PUT,GET,DELETE /api/v0/authors/{author-slug}/categories/{category-slug}/books/{book-slug}
- POST,GET            /api/v0/books
- POST,PUT,GET,DELETE /api/v0/books/{book-slug}
- POST,GET            /api/v0/categories
- POST,PUT,GET,DELETE /api/v0/categories/{category-slug}
- POST,GET            /api/v0/authors/{author-slug}/categories/{category-slug}/books
- POST,PUT,GET,DELETE /api/v0/authors/{author-slug}/categories/{category-slug}/books/{book-slug}

## Creating a new Django App
### Using Django Rest Framework (DRF)
### Creating the Models
### Creating the Views
### Creating the Serializers
### Namespacing our API
### Nested Routes

## Creating a new Vue App
### Do we need a Flux Store?
### Creating the API Bindings
### Creating the Flux Store
### Creating the Layout
### Creating the Pages
