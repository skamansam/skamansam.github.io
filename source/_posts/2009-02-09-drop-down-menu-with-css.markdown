---
layout: post
title: "Drop-Down Menu with CSS"
date: 2009-02-09 8:48:00 -0400
comments: true
categories:
---

This is the first post in a series of articles on web technologies I most commonly use. I will mostly use these posts as a central repository for my (X)HTML/CSS/Javascript/Perl/etc. code.

The CSS Drop-down Menu is fairly simple. It is simply a list with certain style attributes. We will begin by creating a simple XHTML page with a list for the menu, and a place for the styles. The names of the menu items must all be links.

<pre lang="xml">&lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml"&gt;
&lt;head&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" /&gt;
&lt;title&gt;Drop-Down Menu Test&lt;/title&gt;
&lt;style type="text/css"&gt;
@import menu.css
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;ul class="menu"&gt;
&lt;li&gt;&lt;a href="#"&gt;Menu 1&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Menu 2&lt;/a&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 2.1&lt;/a&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 2.1.1&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 2.2.2&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 2.3.3&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 2.4.4&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 2.2&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 2.3&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 2.4&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Menu 3&lt;/a&gt;
&lt;ul class="submenu"&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 3.1&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 3.2&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 3.3&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Sub Menu 3.4&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/li&gt;
&lt;li&gt;&lt;a href="#"&gt;Menu 4&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;/body&gt;
&lt;/html&gt;</pre>

That's all for the HTML! we're only going to be dealing with the CSS from now on, which are placed in the file named 'menu.css'. If you want to change the name, make sure you change the @import statement in the css in the header to point to the appropriate file.

Next, we want to apply our styles. The first styles we'll <code>create are for the actual mechanics of the menu: the showing and hiding of the items.</code>

<pre lang="css">.menu li&gt;ul,.menu li&gt;ol { display: none; }                                /*hide all submenus*/
.menu li:hover&gt;ul,.menu li:hover&gt;ol { display: block; }    /*show all submenus on hover*/
</pre>

That's it! That's all there is to a really, really simple drop-down menu. No-frills, no fuss.

<h2>Problem 1: Internet Explorer</h2>
The previous solution only seems to work on Firefox, Opera, Safari, Konqueror, and all other KHTML and Mozilla-based browsers. What if we want to work with Internet Explorer? It seems we have to get dirty, since IE is not standards-compliant. One way to get IE on the train  is to use conditional comments. A conditional comment is something M$ invented because their browsers aren't compatible with each other. Conditional comments only work on Internet Explorer.
<pre lang="xml">&lt;!--[if IE 6]&gt;
@import menu_ie6.css
&lt;![endif]--&gt;
&lt;!--[if IE 5.5]&gt;
@import menu_ie55.css
&lt;![endif]--&gt;
&lt;!--[if IE 5]&gt;
@import menu_ie5.css
&lt;![endif]--&gt;
</pre>

You can also test ranges by using:

<pre lang="xml">&lt;!--[if gte IE 5]&gt;
@import menu_ie.css
&lt;!--[else]&gt;
&lt;/style&gt;
&lt;script type="javascript"&gt;
//menu code in Javascript
&lt;/script
&lt;style type="text/css" &gt;
&lt;![endif]--&gt;
</pre>

This code tests if we are using IE 5 or greater, and if so, imports the IE5-relevant stylesheet. If the browser is less than IEv5, it closes the style tag, opens a javscript
tag which inserts a comment to do the dropdown meu in javascript. <strong>DO NOT</strong>, under any circumstances put the previous code on your web site. Nasty things will happen if you do!

That was just an example of conditional comments. Now on to our use of them.

<h2>Ugly!</h2>
The styles are pretty ugly so far, and have some serious alignment issues. This makes it pretty hard to select the submenus. The first thing we want to do is make sure the menus appear above all other elements on the page.

<pre lang="css">/*all submenus*/
.menu li&gt;ul,.menu li&gt;ol {
float: left;
margin-left: 0px;
margin-top: -1.1em;
list-style-type: none;
position: absolute;
background-color: #fffff;
z-index: 10000;
}</pre>
