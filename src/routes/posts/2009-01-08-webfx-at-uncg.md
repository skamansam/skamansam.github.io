---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: WebFX at UNCG
description: Framework of js effects
excerpt:  Last semester, I started a project to ease my work quite a bit.
cover: false
coverImage: /images/GSoC-logo-horizontal-800.png
coverAlt: RBE Logo
categories:
  - portfolio
  - javascript
tags: 
  - UNCG
  - Web Design
created_at: 2009-01-08 10:49
updated_at: 2009-01-08 10:49
---

Last semester, I started a project to ease my work quite a bit. I noticed that a
lot of departments at UNCG want to add effects to their sites. In the past, I
have hand-coded all the effects myself, on an as-needed basis. I have grown a
little weary of doing this, as it may lead to sloppiness and errors in my code.
So I started work on a project I call WebFX! WebFX is a mixture of javascript
and CSS which adds effects and styles to elements based on the element's class.
All the class names begin with 'webFX_' and are usually suffixed with the name
of the effect. Since WebFX uses the amazing jQuery library, all the effects
should work across all browsers! Just in case, I have tested them in Opera 9.5,
Firefox 3.1, Internet Explorer 5, 5.5, 6, and 7, Konqueror 4.1.3, Lynx 2.8.6,
W3M 0.5.2, Amaya 11,


## Effects

The following FX are "Special FX" designed to do add 'flash' to the user experience, without using Flash (the Macromedia kind). Javascript must be enabled.


### **Always-Visible** (class="webFX_alwaysVisible")

The element will scroll down with the page, so it is always visible. The main use is to keep the navigation panel always visible to the user.


### **Image Rotation** (class="webFX_rotate")

This is called Image Rotation, because most people will use it for such, but really, it will work on any element. It simply rotates all the child elements in order.<strong></strong>

### **Slideshow** (class="webFX_slideshow")
This is the same as Image Rotation, but with controls added to start, stop, and pause the rotation.

### **Gallery** (class="webFX_gallery")
This is an extension of Slideshow, with an extra section for thumbnails.

## User Interface
The following FX use the jQuery UI library, with a custom theme designed for UNCG. Javascript must be enabled.

### **Accordion** (class="webFX_accordion")
This is a simple "Accordion" like interface for displaying data. It displays headers, and when the headers are clicked, the content is shown.

### **Tabbed Navigation** (class="webFX_tabs")
This turns any list into a series of tabs, with a sub-navigation bar underneath.<strong></strong>

### **DatePicker** (class="webFX_datePicker")
This allows the user to select a date from a DatePicker, and change the value of the element. Mostly useful for text input fields in forms.

### **Dialog** (class="webFX_dialog")
This displays a dialog (aka 'message box') with the first child's content when the element is clicked. Probably not very useful at UNCG, without some extra scripting.

### **Slider** (class="webFX_dialog")
This displays a slider that someone can manipulate. Not very useful at UNCG without some extra scripting.

## Styles
The following are UNCG-themed styles meant to be applied to certain elements. No Javascript is required.

### **News** (class="webFX_news")
This is the same as Accordion, but with no animation, just the style.
