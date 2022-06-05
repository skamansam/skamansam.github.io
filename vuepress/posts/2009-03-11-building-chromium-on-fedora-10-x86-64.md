---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Building Chromium on Fedora 10 x86_64
description: Installing Chromium for Fedora 10 x86_64 bit
excerpt: Chromium for Fedora 10 x86_64 bit
cover: false
coverImage: /images/GSoC-logo-horizontal-800.png
coverAlt: RBE Logo
categories:
  - web-development
  - linux
tags: 
  - CSS
  - Fedora
  - IDE
  - Editor
created_at: 2009-03-11 7:50
updated_at: 2009-03-11 7:50
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---
I am working on installing Chromium for Fedora 10 x86_64 bit. Here's how you do it:

make sure a bunch of i386 libs are installed, by running the command:

```bash
yum install cairo.i386 cairo-devel.i386 cairomm.i386 cairomm-devel.i386 pango-devel.i386 \
    atk-devel.i386 gperf freetype-devel.i386 glib2-devel.i386 glibc-devel.i386 dwdiff \
    gtk-devel.i386 gtk2-devel.i386 fontconfig-devel.i386 libX11-devel.i386 \
    libXrender-devel.i386 libXext-devel.i386
```

Then follow the same instructions listed on the [Chromium Linux Build Page](http://code.google.com/p/chromium/wiki/LinuxBuildInstructions)
