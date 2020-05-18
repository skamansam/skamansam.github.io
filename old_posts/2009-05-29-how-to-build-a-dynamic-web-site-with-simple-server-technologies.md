---
layout: post
title: "How To Build a Dynamic Web Site With Simple Server Technologies."
date: 2009-05-29 9:57:57 -0400
comments: true
categories:
published: false
---

<h2>Introduction</h2>
Back in the day, in 2000, I started creating my own Content Management System , called SaMS. I created it in Perl , as this was the only server technology available to me at that time. When I created my DynDNS account and got my own domain and a stable place to live, I started redesigning my website. SaMS could have been used, but I had found easier ways to do the same stuff, mainly Server-Side Includes. In this article, I will explain very briefly how to use Server-Side includes to create a web site that is easy to maintain.
<h2>Getting Started</h2>
The only thing you will need is a web server with SSI enabled. If you have SSI available, but it doesn't work, create a .htaccess file with the line "Options +Includes" in it, and place the file in your site's main top-level directory. Check your web host's documentation for the specifics. There are many free web hosting services with SSI enabled. Google for them!

This tutorial assumes you know HTML and how to edit/upload files to your server. For a great reference on Server-Side includes, check the <a href="http://en.wikipedia.org/wiki/Server_Side_Includes">Wikipedia page</a>.

You can test SSI by creating a simple HTML page and putting the following line into the &lt;body&gt; of the document:

&lt;!--#echo var="REQUEST_URI"--&gt;

When viewed in your browser, it should display the URL of the page you are viewing.

Note how the SSI tag looks like a simple HTML comment. They are, with one exception: they must begin with a pound sign ('#'). This is very handy for testing, as you can just remove the pound sign to turn off the directive, but still keep the code.

The syntax for SSI is simple:

&lt;!--#directive parameter=value--&gt;

If you are used to Perl, this is much like saying: directive({parameter=&gt;value}). Most directives have only one parameter, but some have two.
<h2>The Setup</h2>
In order to create a page that is easily maintainable, you need to do three things:
<ol>
	<li><strong>Create a template</strong>. Create a page that will represent the layout of all thpages on your site. I recommend creating several areas: a header, a footer, a navigation section, and a toolbar or news section. I will be using the areas I defined  for my web site (those listed previously) in this tutorial.</li>
	<li><strong>"Chunk" the page</strong>. Break up the page into the sections, and put the related html into separate files. For instance, I put all the html from &lt;?xml..?&gt; to the tag that represents the content area into a file called "include/header.html". We will use SSI to reasseble the page later.</li>
	<li><strong>Create the SSI</strong>. In each of your main content pages, place the SSI directives into the top of the page, like so:
&lt;!--#include virtual="/include/header.html"--&gt; ...[content goe here]...&lt;!--#include virtual="/include/footer.html"--&gt;. The include directive includes the page named. The virtual parameter means to use the URI to include the file, instead of the absolute path on the server.( If you go to http://[your.server.net]/include/header.html, you will see the included header file.)</li>
</ol>
There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this.
