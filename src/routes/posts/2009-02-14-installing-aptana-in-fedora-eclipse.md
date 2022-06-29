---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Installing Aptana in Fedora Eclipse
description: Installing Aptana in Fedora Eclipse
excerpt: Aptana is a wonderful tool for web design. 
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
created_at: 2009-02-14 12:09
updated_at: 2009-02-14 12:09
---

Aptana is a wonderful tool for web design. I have been using it for years for my
personal web sites and my professional ones. I have been trying to get more
people turned on to it, as well. When I installed Fedora 10 recently, I didn't
want to install Aptana, as it has, in the past, FooBar'd my Eclipse
installation. However, I am learning Ruby (on rails), and want to install
RadRails, which means I need Aptana. I thought about installing Aptana
standalone, but don't want to start up a new Eclipse platform just for my rails
development. So -

First, I tried to install Aptana normally, as an eclipse plugin, several times.
However, some parts of it refused to work and the "My Aptana" page never showed
up. After assessing this problem, I thought there may be conflicts with some of
the plugins Fedora installs through yum. Ihad  installed all the Eclipse plugins
that my yum repositories offered.

So I removed all the plugins using yum. Since I needed those plugins, I had to
get the update sites to install in Eclipse. Here are the update sites for the
rpms, for convenience. You can get the same information by checking the Fedora
Eclipse project wiki at http://fedoraproject.org/wiki/Eclipse.

### Keep Installed:
* eclipse-ecj.x86_64
* eclipse-demos.noarch
* eclipse-platform.x86_64
* eclipse-rcp.x86_64
* eclipse-setools.x86_64
* eclipse-shelled.noarch
* eclipse-slide.noarch
* eclipse-swt.x86_64
* icu4j-eclipse.x86_64
* tomcat5-jasper-eclipse.noarch

### Install Using Aptana:
*  **Subclipse (SVN Integration)**
  * Update Site: http://subclipse.tigris.org/update_1.4.x
  * eclipse-subclipse*
*  **Eclipse Git**
  * Update Site: http://www.jgit.org/update-site/
  * eclipse-egit.noarch



### Install Using The Update Manager:

* **Ganymede**:
  * Upload Site: http://download.eclipse.org/releases/ganymede
  * eclipse-cdt* (C and C++ Development)
  * eclipse-emf*  (Model and Model Development)
  * eclipse-gef* (Graphical editors and frameworks)
  * eclipse-jdt* (Java development)
  * eclipse-mylyn* (Collaboration Tools)
  * eclipse-pde.x86_64 (Java Development/Eclipse plug-in development environment)

* **Maven Integration for Eclipse**
  * Update Site: http://m2eclipse.sonatype.org/update-dev/ (stable development)
  * Update Site: http://m2eclipse.sonatype.org/update/ (stable)
  * maven2-plugin-eclipse.x86_64

* **Linux Tools for Eclipse**
  * Update Site: http://download.eclipse.org/technology/linuxtools/update/
  * eclipse-changelog.x86_64
  * eclipse-rpm-editor.x86_64

* **Checkstyle Plugin**
  * Update Site: http://eclipse-cs.sourceforge.net/update
  * eclipse-checkstyle.x86_64

* **Eclipse Perl Integration**
  * Update Site: http://e-p-i-c.sourceforge.net/updates/testing
  * eclipse-epic.x86_64

* **Babel (milti-lingual support)**
  * Update Site: http://download.eclipse.org/technology/babel/update-site/ganymede
  * eclipse-nls-*.noarch

* **Photran (fortran support)**
  * Update Site: http://download.eclipse.org/technology/photran/updates/eclipse3.4cdt5.0
  * eclipse-photran*  (requires cdt plugin)

* **PHPEclipse (php)**
  * Update Site: http://phpeclipse.sourceforge.net/update/stable/1.2.x/
  * eclipse-phpeclipse.x86_64

* **Pydev (python)**
    * Update Site: http://pydev.sourceforge.net/updates/
    * eclipse-pydev*

* **QuickRex (regular expression editor)**
    * Update Site: http://www.bastian-bergerhoff.com/eclipse/features
    * eclipse-quickrex.noarch

Now you are ready to install the Aptana plugin, using this update site:
http://update.aptana.com/install/studio/3.2/. I recommend installing Aptana
before installing any of the previously mentioned plugins, for best
compatability.

That's it and good luck!
