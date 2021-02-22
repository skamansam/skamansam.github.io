---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Building Enlightenment e17 on Fedora 10 x86_64
description: How to Build Enlightenment Desktop on Fedora 10
excerpt: i have begun to build and install Enlightenment e17 on my Fedora 10 x86_64 laptop
cover: false
coverImage: /images/GSoC-logo-horizontal-800.png
coverAlt: RBE Logo
categories:
  - linux
tags: 
  - Fedora
created_at: 2009-04-02 21:34
updated_at: 2009-04-02 21:34
meta:
  - property: og:image
    content: /images/GSoC-logo-horizontal-800.png
  - name: twitter:image
    content: /images/GSoC-logo-horizontal-800.png
---

DISCLAIMER: The following did NOT work correctly for me. The applications worked
correctly, but the desktop fails. When I find out what went wrong, I will modify
this post to suit.

Today i have begun to build and install Enlightenment e17 on my Fedora 10 x86_64
laptop. I have Googled for a few sites to help me get started, only to discover
their directions are very lacking. VERY lacking. So to compensate, i am writing
this article on the things you need to get started with Enlightenment e17. If
you would like to try out e17, you can use yum to install some of the base
componenets, but remember to erase them with `yum -e enlightenment` before you
start building e17 or some severe nastiness could occur. The packages I have
installed for my evaluation are: bitmap_fonts, e_dbus, edje, efreet, embryo,
enlightenment, eterm, and libast. The reason I didn't just use the yum packages
is that I know e17 has a lot of dependencies and a lot of hidden features. I
like to have a lot of features! Read on to find out about some of those
features.

## Step 1: Preparations
You are going to need a few dependencies for this. Some you can get via yum, and others you need to get from a version control repository. Here are the command you need to execute:
sudo yum install libjpeg-devel libtiff-devel libpng-devel giflib-devel freetype-devel libXext-devel libid3tag-devel subversion imlib2-devel libxcb libxcb-devel libxcb-util libxcb-util libxcb-util-devel glew-devel libXrender-devel directfb-devel xine-lib-devel gstreamer-devel gstreamer-plugins-base-devel vlc-devel
mkdir ~/Download/e17
cd ~/Download/e17
svn co http://svn.enlightenment.org/svn/e
svn co http://ememoa.googlecode.com/svn/trunk/ ememoa-read-only

## Step 2: The long drive home

Ok. Now that we have our tools, we can start the dirty work: building e17. I am listing this in the order you should build. Just follow along and shout, "Hoo-Raaahhhh!!!" at the appropriate times. For brevity, I will be listing the package names in bold font, then the directory in which it can be found in brackets. Then I will give a hort description of the file, and any options to be passed to ./configure. You should run three commands with each step:
1. `cd` to change into that directory. All directory names will be relative to ~/Download/e17/e/trunk/, except the ememoa package, which should be ~/Download/e17/ememoa-read-only/
1. `./configure --libdir=/usr/lib64 --prefix=/usr` with the config options appended to the end, seperated by spaces. See the first two examples to see what I mean. (NOTE: If you are missing the ./configure script for any of the following steps, run ./autogen.sh first.)
1. `<code>gmake &amp;&amp; sudo gmake install</code>` This command builds the package, prompts for your password, if you are in the sudoers file, and installs it. This step may take some time before prompting for your password.

### Ememoa [ ememoa-read-only/ ]  `--enable-pthread --enable-use64`
> We are going to build ememoa first. From the ememoa website, it is a "memory pool 
> allocator that helps to improve memory allocation speed and memory usage by improving
> memory locality during data manipulation." What this means is that ememoa helps speed 
> up memory access, which will make e17 faster.
> So if you're following along, you should execute the following:
> ```bash
> cd ~/Download/e17/ememoa/
> ./configure --libdir=/usr/lib64 --prefix=/usr --enable-pthread --enable-use64
> make && sudo make install
> ```
> This package may not install a file in the correct place, so we need to make sure 
> it is. Run ` ls /usr/lib64/pkgconfig/ememoa.pc`. If it says there is no file, 
> then issue: `mv /usr/lib/pkgconfig/ememoa* /usr/lib64/pkgconfig/`

### Imlib2 [ imlib2/ ]
> This is a tricky one. So much software depends on imlib that is will be nearly 
> impossible to uninstall. You can, however, build imlib and simply install it over 
> existing files. If you want to do this, just run 
> `cd ~ &amp;&amp; yumdownloader imlib2 imlib2-devel`. If you have problems after 
> building imlib2, simply login in a terminal and issue 
> `sudo rpm -ivh --force ~/imlib2*.rpm` (replace 'user' with your username) to 
> restore the old files. OK - now that the disclaimer is over with, on to the 
> next commands:
> ```bash
> cd ../e/trunk/imlib2
> ./configure --prefix=/usr --libdir=/usr/lib64
>  ```
> The end of the output of this last command will give you a asummary of what 
> is going to be included in the build. You should see a list of "Image Loaders" 
> with all yes's. If you don't, then issue `yum install libXXX-devel` for each 
> one. For instance, if you see that TIFF and ID3 are "no," then run 
> `sudo yum install libtiff-devel libid3-devel`. "Use AMD64 for speed" 
> should be yes and "use MMX..." should be no. I am not sure what "visibility hiding" 
> is, so leave it as-is. Now issue:
> ```bash
> make
> sudo make install
> ```

### eina [ eina/ ] `--enable-ememoa`
> From the web site: "Eina is a multi-platform library that provides optimized
> data types and a few tools that could be used for projects." To build:

### Eet [ eet/ ]
> Eet is a cool little library used
> for data input/output that is written very little and read very much.
### Edb [ OLD/edb/ ]
> The edb library is in the OLD
> directory, but some packages look for it and may use it. If you want to use
> this library, charge on!
### Imlib2 Extras [ imlib2_loaders/ ]
> Now that we have some libs installed, we can build
> some more imlib2 image loaders.
### Imlib2 Extras [ imlib2_tools/ ]
> This package contains some extra tools for developing with Imlib. 
### Evas [ evas/ ] `--enable-gl-x11 --enable-gl-glew --enable-software-xcb --enable-buffer --enable-xrender-x11 --enable-software-sdl --enable-directfb --enable-fb`
> From the wiki: "Evas is a hardware-accelerated canvas API for X-Windows
> that can draw anti-aliased text, smooth super and sub-sampled images,
> alpha-blend, as well as drop down to using normal X11 primitives such as
> pixmaps, lines and rectangles for speed if your CPU or graphics hardware are
> too slow. " This is how e17 gets its speed for its cool effects. The following
> lines are for installing it with all the backends enabled. There is one
> problem in the current SVN: glew support is not working. If you try the
> following `./configure` line and make gives you an error, remove the
> `--enable-gl-glew` from the `./configure` command and run it again. If you get
> errors while building, it means that the correct devel packages aren't
> installed, and you should check Step 1 for the correct packages to install.
### Ecore [ ecore/ ]
> This is the core library
> for Enlightenment. It handles events, draws the GUI, and does a lot of graphic
> stuff.  Just a simple few commands should pick up all the previous
> configuration information: 
### Efreet [ efreet/ ]
> Efreet implements a bunch of protocols set by freedesktop.org. This
> includes icon themes, .desktop file support, and menus.
### Embryo [ embryo/ ] `--enable-doc`
> Embryo is a
> C-like scripting language used by enlightenment. Add `--enable-doc` to the
> `./configure` line if you want to install documentation for this.
### Edje [edje/] `--enable-doc --enable-edje-program-cache`
> From the wiki: "Edje is an attempt to
> find a middleground between theming and programming without turning the theme
> itself into just yet another program." It is the awesome theming engine for
> enlightenment. 
### E_DBus [ e_dbus/ ]
> This is
> the D-Bus connection for e17. It is used to get and set system information,
> using an interface common to a lot of applications.
### ETK [ etk/ ]
> Etk is the enlightenment toolit,
> which is based on EFL. If you managed to enable framebuffer support in ecore,
> this will automatically enable framebuffer support in etk.
### EXML [ exml/ ]
> A neat library for dealing with XML files. 
### Epsilon [ epsilon/ ] `--enable-thumbnailer-xine`
> A library for creating quick thumbnails.
### Emotion [ epsilon/ ]
> A library for videos. 
### Enity [ enity/ ]
> A library for creating dialogs, much like xdialog.
### Etk Extras [ etk_extra/ ]
> Extra libs for etk. 
### Evolve [ evolve/ ]
> Allows you to theme your windows using an edje-like syntax.
### Enlightenment Widget Library [ ewl/ ]
> A toolkit for creating EFL-based GUIs.
### Expedite [ expedite/ ]
> Benchmarking suite for e17. 
### Enhance [ enhance/ ]
> Allows you to use glade files with e17 libs for easier UI development!

### Exchange [ PROTO/exchange/ ]
> Enlightenment looks for this lib and uses it if it is installed. The README says "The
> enlightened way to exchange stuffs!" I'm not sure what this is, but we're
> going to use it anyway! NOTE: this is a prototype library, and may not
> function when you download it. If the build fails with an odd error, it may be
> fixed by the following day. 
### Esmart [ esmart/ ]
> A collection of smarter evas objects.
### Enlightenment [ e/ ]
> The actual enlightenment desktop environment.
### Entrance [ entrance/ ]
> An enlightenment login manager, to replace gdm, kdm, or xdm. In order to
> be able to run entrance as your display manager, you must edit a few files as
> root. In `/etc/X11/xdm/Xsession`, find the area that looks like: 
> 
> ```bash
> failsafe)
> ...code here....
> gnome|gnome-session)
> ...code here....
> ```
> and add the following lines before "failsafe)":
> ```bash
> enlightenment)
> exec $SSH_AGENT /bin/sh -c "exec -l $SHELL -c \"enlightenment\""
> ;;
> ```
> Then open `/etc/sysconfig/desktop` and make sure it says `DISPLAYMANAGER=enlightenment`

## Step 3: EApps
Now that we've built our main libraries and software - on to the fun stuff! We
are now going to build more apps for use with enlightenment.

### Edje Editor [ edje_editor/ ]
> This is an editor for theme files. Really awesome!
### Edje Viewer [ edje_editor/ ]
> This is an editor for theme files. Really awesome!
### Elicit [ elicit/ ]
> A screen zoomer. and color picker. 
### Elitaire [ elitaire/ ]
> Solitaire game for e17.
