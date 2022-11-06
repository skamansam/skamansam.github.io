---
comments: true
view: post
layout: post
lang: en
author: skamansam
title: Drop-Down Menu with CSS
description: Drop-down menu with no JS
excerpt: The CSS Drop-down Menu is fairly simple.
cover: false
coverImage: /images/GSoC-logo-horizontal-800.png
coverAlt: RBE Logo
categories:
  - web-development
tags: 
  - CSS
created_at: 2009-02-09 08:48
updated_at: 2009-02-09 08:48
---

This is the first post in a series of articles on web technologies I most
commonly use. I will mostly use these posts as a central repository for my
(X)HTML/CSS/Javascript/Perl/etc. code.

The CSS Drop-down Menu is fairly simple. It is simply a list with certain style
attributes. We will begin by creating a simple XHTML page with a list for the
menu, and a place for the styles. The names of the menu items must all be links.

```html
<?xml version="1.0" encoding="ISO-8859-1" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>Drop-Down Menu Test</title>
<style type="text/css">
    @import menu.css
</style>
</head>
<body>
<ul class="menu">
    <li><a href="#">Menu 1</a></li>
    <li><a href="#">Menu 2</a>
        <ul>
            <li><a href="#">Sub Menu 2.1</a>
                <ul>
                    <li><a href="#">Sub Menu 2.1.1</a></li>
                    <li><a href="#">Sub Menu 2.2.2</a></li>
                    <li><a href="#">Sub Menu 2.3.3</a></li>
                    <li><a href="#">Sub Menu 2.4.4</a></li>
                </ul>
            </li>
            <li><a href="#">Sub Menu 2.2</a></li>
            <li><a href="#">Sub Menu 2.3</a></li>
            <li><a href="#">Sub Menu 2.4</a></li>
        </ul>
    </li>
    <li><a href="#">Menu 3</a>
        <ul class="submenu">
            <li><a href="#">Sub Menu 3.1</a></li>
            <li><a href="#">Sub Menu 3.2</a></li>
            <li><a href="#">Sub Menu 3.3</a></li>
            <li><a href="#">Sub Menu 3.4</a></li>
        </ul>
    </li>
    <li><a href="#">Menu 4</a></li>
</ul>

</body>
</html></pre>
```

That's all for the HTML! we're only going to be dealing with the CSS from now
on, which are placed in the file named 'menu.css'. If you want to change the
name, make sure you change the @import statement in the css in the header to
point to the appropriate file.

Next, we want to apply our styles. The first styles we'll <code>create are for
the actual mechanics of the menu: the showing and hiding of the items.</code>

```css
.menu li > ul,.menu li > ol { display: none; }                                /*hide all submenus*/
.menu li:hover > ul,.menu li:hover > ol { display: block; }    /*show all submenus on hover*/
```

That's it! That's all there is to a really, really simple drop-down menu. No-frills, no fuss.

## Problem 1: Internet Explorer

The previous solution only seems to work on Firefox, Opera, Safari, Konqueror,
and all other KHTML and Mozilla-based browsers. What if we want to work with
Internet Explorer? It seems we have to get dirty, since IE is not
standards-compliant. One way to get IE on the train  is to use conditional
comments. A conditional comment is something M$ invented because their browsers
aren't compatible with each other. Conditional comments only work on Internet
Explorer.

```html
<!--[if IE 6]>
@import menu_ie6.css
<![endif]-->
<!--[if IE 5.5]>
@import menu_ie55.css
<![endif]-->
<!--[if IE 5]>
@import menu_ie5.css
<![endif]-->
```

You can also test ranges by using:

```html
<!--[if gte IE 5]>
@import menu_ie.css
<!--[else]>
</style>
<script type="javascript">
//menu code in Javascript
</script
<style type="text/css" >
<![endif]-->
```

This code tests if we are using IE 5 or greater, and if so, imports the IE5-relevant stylesheet. If the browser is less than IEv5, it closes the style tag, opens a javscript
tag which inserts a comment to do the dropdown meu in javascript. <strong>DO NOT</strong>, under any circumstances put the previous code on your web site. Nasty things will happen if you do!

That was just an example of conditional comments. Now on to our use of them.

## Ugly!
The styles are pretty ugly so far, and have some serious alignment issues. This makes it pretty hard to select the submenus. The first thing we want to do is make sure the menus appear above all other elements on the page.

```css
/*all submenus*/
.menu li > ul,.menu li > ol {
    float: left;
    margin-left: 0px;
    margin-top: -1.1em;
    list-style-type: none;
    position: absolute;
    background-color: #fffff;
    z-index: 10000;
}
```
