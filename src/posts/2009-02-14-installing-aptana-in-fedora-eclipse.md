---
layout: post
title: "Installing Aptana in Fedora Eclipse"
date: 2009-02-14 12:09:00 -0400
comments: true
categories:
---

Aptana is a wonderful tool for web design. I have been using it for years for my personal web sites and my professional ones. I have been trying to get more people turned on to it, as well. When I installed Fedora 10 recently, I didn't want to install Aptana, as it has, in the past, FooBar'd my Eclipse installation. However, I am learning Ruby (on rails), and want to install RadRails, which means I need Aptana. I thought about installing Aptana standalone, but don't want to start up a new Eclipse platform just for my rails development. So -

First, I tried to install Aptana normally, as an eclipse plugin, several times. However, some parts of it refused to work and the "My Aptana" page never showed up. After assessing this problem, I thought there may be conflicts with some of the plugins Fedora installs through yum. Ihad  installed all the Eclipse plugins that my yum repositories offered.

So I removed all the plugins using yum. Since I needed those plugins, I had to get the update sites to install in Eclipse. Here are the update sites for the rpms, for convenience. You can get the same information by checking the Fedora Eclipse project wiki at http://fedoraproject.org/wiki/Eclipse.

<h3>Keep Installed:</h3>
eclipse-ecj.x86_64
eclipse-demos.noarch
eclipse-platform.x86_64
eclipse-rcp.x86_64
eclipse-setools.x86_64
eclipse-shelled.noarch
eclipse-slide.noarch
eclipse-swt.x86_64
icu4j-eclipse.x86_64
tomcat5-jasper-eclipse.noarch

<h3>Install Using Aptana:</h3>
<strong>Subclipse (SVN Integration):
http://subclipse.tigris.org/update_1.4.x :</strong>
eclipse-subclipse*
<strong>Eclipse Git:
http://www.jgit.org/update-site/ :</strong>
eclipse-egit.noarch



<h3>Install Using The Update Manager:</h3>

<strong>Ganymede:
http://download.eclipse.org/releases/ganymede :</strong>
eclipse-cdt* (C and C++ Development)
eclipse-emf*  (Model and Model Development)
eclipse-gef* (Graphical editors and frameworks)
eclipse-jdt* (Java development)
eclipse-mylyn* (Collaboration Tools)
eclipse-pde.x86_64 (Java Development/Eclipse plug-in development environment)

<strong>Maven Integration for Eclipse:
http://m2eclipse.sonatype.org/update-dev/</strong> (stable development)
<strong>or http://m2eclipse.sonatype.org/update/</strong> (stable)
maven2-plugin-eclipse.x86_64

<strong>Linux Tools for Eclipse:
http://download.eclipse.org/technology/linuxtools/update/ :</strong>
eclipse-changelog.x86_64
eclipse-rpm-editor.x86_64

<strong>Checkstyle Plugin:
http://eclipse-cs.sourceforge.net/update:</strong>
eclipse-checkstyle.x86_64

<strong>Eclipse Perl Integration:
http://e-p-i-c.sourceforge.net/updates/testing :</strong>
eclipse-epic.x86_64

<strong>Babel (milti-lingual support):
http://download.eclipse.org/technology/babel/update-site/ganymede :</strong>
eclipse-nls-*.noarch

<strong>Photran (fortran support):
http://download.eclipse.org/technology/photran/updates/eclipse3.4cdt5.0  :</strong>
eclipse-photran*  (requires cdt plugin)

<strong>PHPEclipse (php):
http://phpeclipse.sourceforge.net/update/stable/1.2.x/ :</strong>
eclipse-phpeclipse.x86_64

<strong>Pydev (python):
http://pydev.sourceforge.net/updates/ :</strong>
eclipse-pydev*

<strong>QuickRex (regular expression editor):
http://www.bastian-bergerhoff.com/eclipse/features :</strong>
eclipse-quickrex.noarch

Now you are ready to install the Aptana plugin, using this update site: http://update.aptana.com/install/studio/3.2/. I recommend installing Aptan before installing any of the previously mentioned plugins, for best compatability.

That's it and good luck!
