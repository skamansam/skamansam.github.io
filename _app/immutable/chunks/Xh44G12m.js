import"./DsnmJJEf.js";import"./DUAmNnRy.js";import"./7VeBLrFP.js";import{s as o,f as u,c as n,r as i,n as g}from"./zEET8Voz.js";import{f as y,a as v}from"./6j56-UlN.js";import{P as w,h as r}from"./Dzp0gZK0.js";import{l as S,s as f}from"./DLHvm563.js";const s={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"How To Build a Dynamic Web Site With Simple Server Technologies.",description:"Using SSI to build a more dynamic website",excerpt:"In order to create a page that is easily maintainable, you need to do three",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["web-development"],tags:["SSI"],created_at:"2009-05-29T09:57:57.000Z",updated_at:"2009-05-29T09:57:57.000Z",preview:`Introduction

Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my...`,previewHtml:"<h2>Introduction</h2> <p>Back in the day, in 2000, I started creating my own Content Management System , called SaMS. I created it in Perl , as this was the only server technology available to me at that time. When I created my DynDNS account and got my own doma...</p>",textContent:`Introduction

Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started...`},{draft:D,comments:W,view:P,layout:B,lang:H,author:L,title:N,description:R,excerpt:U,cover:A,coverImage:E,coverAlt:F,categories:G,tags:Z,created_at:j,updated_at:z,preview:K,previewHtml:O,textContent:Q}=s;var I=y(`<h2 id="introduction">Introduction</h2> <p>Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.</p> <h2 id="getting-started">Getting Started</h2> <p>The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn't work, create a <code>.htaccess</code> file with the line <code>Options +Includes</code> in it, and place the file in your site's main top-level directory.
Check your web host's documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!</p> <p>This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the <a href="http://en.wikipedia.org/wiki/Server_Side_Includes">Wikipedia page</a>.</p> <p>You can test SSI by creating a simple HTML page and putting the following line
into the <code>&lt;body&gt;</code> of the document:</p> <pre class="language-html"><!></pre> <p>When viewed in your browser, it should display the URL of the page you are
viewing.</p> <p>Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign ('#'). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.</p> <p>The syntax for SSI is simple:</p> <pre class="language-html"><!></pre> <p>If you are used to Perl, this is much like saying: <code>directive(&#123; parameter =&gt; value &#125;)</code>. Most directives have only one parameter, but
some have two.</p> <h2 id="the-setup">The Setup</h2> <p>In order to create a page that is easily maintainable, you need to do three things:</p> <ul><li><strong>Create a template</strong>. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined  for my web site (those listed previously) in
this tutorial.</li> <li><strong>"Chunk" the page</strong>. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from <code>&lt;?xml..?&gt;</code> to the tag that represents the content area into a file
called "include/header.html". We will use SSI to reasseble the page
later.</li> <li><strong>Create the SSI</strong>. In each of your main content pages, place the
SSI directives into the top of the page, like so: <code>&lt;!--#include virtual="/include/header.html"--&gt;</code> …[content goes here]…<code>&lt;!--#include virtual="/include/footer.html"--&gt;</code>. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to <a href="http://your.server.net/include/header.html">http://your.server.net/include/header.html</a>, you will see the included header
file.)</li></ul> <p>There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this.</p>`,1);function Y(l,d){const c=S(d,["children","$$slots","$$events","$$legacy"]);w(l,f(()=>c,()=>s,{children:(h,b)=>{var t=I(),e=o(u(t),12),p=n(e);r(p,()=>'<code class="language-html"><span class="token comment">&lt;!--#echo var="REQUEST_URI"--></span></code>'),i(e);var a=o(e,8),m=n(a);r(m,()=>'<code class="language-html"><span class="token comment">&lt;!--#directive parameter=value--></span></code>'),i(a),g(10),v(h,t)},$$slots:{default:!0}}))}export{Y as default,s as metadata};
