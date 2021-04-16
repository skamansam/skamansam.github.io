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

# Why use Vue?

# Using Templates vs API

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
