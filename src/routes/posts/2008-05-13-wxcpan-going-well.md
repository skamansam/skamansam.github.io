---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: wxCPAN Going Well
description: wxCPAN Going Well
excerpt:  I have successfully managed to implement a CPANPLUS::Shell.
cover: false
coverImage: /images/GSoC-logo-horizontal-800.png
coverAlt: RBE Logo
categories:
  - perl
tags: 
  - gSoC
created_at: 2008-05-13 14:56
updated_at: 2008-05-13 14:56
---

I have successfully managed to implement a CPANPLUS::Shell.  You call the shell like:
```perl
perl -MCPANPLUS -e 'shell(Wx)'
```

I have created a perl script for testing this.

I have also created a new svn branch, `development`. This is the current working branch.

You can view or download my current development code, via svn. [See the googlecode 
svn repo here](http://code.google.com/p/wxcpan/source/browse)
