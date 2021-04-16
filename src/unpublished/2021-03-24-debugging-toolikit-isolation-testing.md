---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: "Debugging Toolkit: Isolation Testing"
description: Principles behind isolation testing 
excerpt: ""
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - web-development
tags:
  - Vue
  - Javascript
  - Debugging
  - Testing
created_at: 2021-03-24 12:00:00
updated_at: 2021-03-24 12:00:00
---

# Debugging Toolikit: Isolation Testing

Ever had some code in your program that refused to work the way you
knew it should? Whether it is a small group of functions, or a multi-faceted
integration, isolation testing can help you find out why it isn't
working as it should. It can also be employed to help you improve
your exising code.

## The What on Isolation Testing

Isolation testing just means pull out all the code relevant to your
[broken] functionality, and test it on its own. You can also do this
by refactoring your existing code into smaller and smaller pieces
until you have small, atomic units of functionality.

For instance, if you your app uses employs the  Flux pattern
and a component isn't updating properly, you can take the 
components that communicate, and the bits of the flux store
and create a new application with only those pieces. You can then
refactor that code into smaller pieces until the problem becomes obvious.

Isolation testing can
