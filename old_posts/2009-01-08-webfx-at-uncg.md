---
layout: post
title: "WebFX at UNCG"
date: 2009/01/08 10:49:00 -0400
comments: true
categories:
---

Last semester, I started a project to ease my work quite a bit. I noticed that a lot of departments at UNCG want to add effects to their sites. In the past, I have hand-coded all the effects myself, on an as-needed basis. I have grown a little weary of doing this, as it may lead to sloppiness and errors in my code. So I started work on a project I call WebFX! WebFX is a mixture of javascript and CSS which adds effects and styles to elements based on the element's class. All the class names begin with 'webFX_' and are usually suffixed with the name of the effect. Since WebFX uses the amazing jQuery library, all the effects should work across all browsers! Just in case, I have tested them in Opera 9.5, Firefox 3.1, Internet Explorer 5, 5.5, 6, and 7, Konqueror 4.1.3, Lynx 2.8.6, W3M 0.5.2, Amaya 11,
<h2>Effects</h2>
The following FX are "Special FX" designed to do add 'flash' to the user experience, without using Flash (the Macromedia kind). Javascript must be enabled.

<strong>Always-Visible </strong>(class="webFX_alwaysVisible")<strong>
</strong>The element will scroll down with the page, so it is always visible. The main use is to keep the navigation panel always visible to the user.

<strong>Image Rotation </strong>(class="webFX_rotate")
This is called Image Rotation, because most people will use it for such, but really, it will work on any element. It simply rotates all the child elements in order.<strong></strong>

<strong>Slideshow </strong>(class="webFX_slideshow")
This is the same as Image Rotation, but with controls added to start, stop, and pause the rotation.

<strong>Gallery </strong>(class="webFX_gallery")
This is an extension of Slideshow, with an extra section for thumbnails.
<h2>User Interface</h2>
The following FX use the jQuery UI library, with a custom theme designed for UNCG. Javascript must be enabled.

<strong>Accordion </strong>(class="webFX_accordion")
This is a simple "Accordion" like interface for displaying data. It displays headers, and when the headers are clicked, the content is shown.

<strong>Tabbed Navigation </strong>(class="webFX_tabs")
This turns any list into a series of tabs, with a sub-navigation bar underneath.<strong></strong>

<strong>DatePicker </strong>(class="webFX_datePicker")
This allows the user to select a date from a DatePicker, and change the value of the element. Mostly useful for text input fields in forms.

<strong>Dialog </strong>(class="webFX_dialog")
This displays a dialog (aka 'message box') with the first child's content when the element is clicked. Probably not very useful at UNCG, without some extra scripting.

<strong>Slider </strong>(class="webFX_dialog")
This displays a slider that someone can manipulate. Not very useful at UNCG without some extra scripting.
<h2>Styles</h2>
The following are UNCG-themed styles meant to be applied to certain elements. No Javascript is required.

<strong>News </strong>(class="webFX_news")
This is the same as Accordion, but with no animation, just the style.
