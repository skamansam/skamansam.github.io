---
draft: true
comments: true
view: post
layout: post
lang: en
author: skamansam
title: How To Build a Dynamic Web Site With Simple Server Technologies.
description: Using SSI to build a more dynamic website
excerpt: In order to create a page that is easily maintainable, you need to do three
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - web-development
tags:
  - SSI
created_at: 2009-05-29 9:57:57
updated_at: 2009-05-29 9:57:57
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
lastmod: 2022-06-13T01:53:59.216Z
---

## Introduction
Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.

## Getting Started
The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn't work, create a `.htaccess` file with the line `Options
+Includes` in it, and place the file in your site's main top-level directory.
Check your web host's documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!

This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the <a
href="http://en.wikipedia.org/wiki/Server_Side_Includes">Wikipedia page</a>.

You can test SSI by creating a simple HTML page and putting the following line
into the `<body>` of the document:

```html
<!--#echo var="REQUEST_URI"-->
```

When viewed in your browser, it should display the URL of the page you are
viewing.

Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign ('#'). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.

The syntax for SSI is simple:

```html
<!--#directive parameter=value-->
```

If you are used to Perl, this is much like saying:
`directive({ parameter => value })`. Most directives have only one parameter, but
some have two.

## The Setup
In order to create a page that is easily maintainable, you need to do three things:

* **Create a template**. Create a page that will represent the
  layout of all thpages on your site. I recommend creating several areas: a
  header, a footer, a navigation section, and a toolbar or news section. I will
  be using the areas I defined  for my web site (those listed previously) in
  this tutorial.
* **"Chunk" the page**. Break up the page into the sections, and
  put the related html into separate files. For instance, I put all the html
  from `<?xml..?>` to the tag that represents the content area into a file
  called "include/header.html". We will use SSI to reasseble the page
  later.
* **Create the SSI**. In each of your main content pages, place the
  SSI directives into the top of the page, like so: `<!--#include
  virtual="/include/header.html"-->` ...[content goes here]...`<!--#include
  virtual="/include/footer.html"-->`. The include directive includes the page
  named. The virtual parameter means to use the URI to include the file, instead
  of the absolute path on the server.( If you go to
  http://your.server.net/include/header.html, you will see the included header
  file.)

There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this.
