---
layout: post
title: "Building Chromium on Fedora 10 x86_64"
date: 2009-03-11 7:50:00  -0400
comments: true
categories:
---

I am working on installing Chromium for Fedora 10 x86_64 bit. Here's how you do it:

make sure a bunch of i386 libs are installed, by running the command:

yum install cairo.i386 cairo-devel.i386 cairomm.i386 cairomm-devel.i386 pango-devel.i386 atk-devel.i386 gperf freetype-devel.i386 glib2-devel.i386 glibc-devel.i386 dwdiff gtk-devel.i386 gtk2-devel.i386 fontconfig-devel.i386 libX11-devel.i386 libXrender-devel.i386 libXext-devel.i386

Then follow the same instructions listed on the <a href="http://code.google.com/p/chromium/wiki/LinuxBuildInstructions">Chromium Linux Build Page</a>
