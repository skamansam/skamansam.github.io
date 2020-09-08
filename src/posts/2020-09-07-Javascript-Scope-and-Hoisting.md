---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Javascript Scope and Hoisting
description: How Javascript Scopes and how hoisting works
excerpt: 
cover: false
coverImage: false
coverAlt: RBE Logo
categories:
  - programming
  - javascript
tags:
  - language design
created_at: 2020-09-07 23:56:19
updated_at: 2020-09-07 23:56:19
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---

<note> This article is still in development. Please be patient.</note>

A friend recently asked me to explain why the following code did not work as expected:

```javascript
var x = 1;
console.log(x); //expected output: 1
if(x===1){
    var x = 2;
    console.log(x); //expected output: 2
}
console.log(x); //expected output: 1
```

I knew immediately that it had to do with the way javascript handles the `var` keyword and hoists
the declaration. I wanted to explain a little better, so I referred to the docs at Mozilla Developer Network
and found a few more interesting things to look out for.