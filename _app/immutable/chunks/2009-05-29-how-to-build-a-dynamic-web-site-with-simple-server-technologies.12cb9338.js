import{s as ue,r as F,B as ne,f as o,a as r,g as s,C as u,c as d,h as le,d as a,j as P,i as n,y as he}from"./scheduler.28ea7184.js";import{S as ce,i as me,b as pe,d as ve,m as fe,a as ye,t as ge,e as _e}from"./index.8021bc93.js";import{g as Se,a as ie}from"./spread.8a54911c.js";import{P as we}from"./post.d4e0232c.js";function Ie(H){let l,v="Introduction",p,c,i=`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`,h,m,G="Getting Started",L,y,Z=`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn&#39;t work, create a <code>.htaccess</code> file with the line <code>Options +Includes</code> in it, and place the file in your site&#39;s main top-level directory.
Check your web host&#39;s documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`,q,g,K=`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the <a href="http://en.wikipedia.org/wiki/Server_Side_Includes">Wikipedia page</a>.`,D,_,O=`You can test SSI by creating a simple HTML page and putting the following line
into the <code>&lt;body&gt;</code> of the document:`,W,S,se='<code class="language-html"><span class="token comment">&lt;!--#echo var="REQUEST_URI"--></span></code>',$,w,Q=`When viewed in your browser, it should display the URL of the page you are
viewing.`,B,I,Y=`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign ('#'). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`,E,x,J="The syntax for SSI is simple:",R,C,re='<code class="language-html"><span class="token comment">&lt;!--#directive parameter=value--></span></code>',j,b,V=`If you are used to Perl, this is much like saying:
<code>directive({ parameter =&gt; value })</code>. Most directives have only one parameter, but
some have two.`,U,f,X="The Setup",N,T,ee="In order to create a page that is easily maintainable, you need to do three things:",z,M,te=`<li><strong>Create a template</strong>. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined  for my web site (those listed previously) in
this tutorial.</li> <li><strong>&quot;Chunk&quot; the page</strong>. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from <code>&lt;?xml..?&gt;</code> to the tag that represents the content area into a file
called &quot;include/header.html&quot;. We will use SSI to reasseble the page
later.</li> <li><strong>Create the SSI</strong>. In each of your main content pages, place the
SSI directives into the top of the page, like so: <code>&lt;!--#include virtual=&quot;/include/header.html&quot;--&gt;</code> …[content goes here]…<code>&lt;!--#include virtual=&quot;/include/footer.html&quot;--&gt;</code>. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
<a href="http://your.server.net/include/header.html" title="">http://your.server.net/include/header.html</a>, you will see the included header
file.)</li>`,A,k,ae="There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this.";return{c(){l=o("h2"),l.textContent=v,p=r(),c=o("p"),c.textContent=i,h=r(),m=o("h2"),m.textContent=G,L=r(),y=o("p"),y.innerHTML=Z,q=r(),g=o("p"),g.innerHTML=K,D=r(),_=o("p"),_.innerHTML=O,W=r(),S=o("pre"),$=r(),w=o("p"),w.textContent=Q,B=r(),I=o("p"),I.textContent=Y,E=r(),x=o("p"),x.textContent=J,R=r(),C=o("pre"),j=r(),b=o("p"),b.innerHTML=V,U=r(),f=o("h2"),f.textContent=X,N=r(),T=o("p"),T.textContent=ee,z=r(),M=o("ul"),M.innerHTML=te,A=r(),k=o("p"),k.textContent=ae,this.h()},l(e){l=s(e,"H2",{id:!0,["data-svelte-h"]:!0}),u(l)!=="svelte-p88ani"&&(l.textContent=v),p=d(e),c=s(e,"P",{["data-svelte-h"]:!0}),u(c)!=="svelte-1jbyr16"&&(c.textContent=i),h=d(e),m=s(e,"H2",{id:!0,["data-svelte-h"]:!0}),u(m)!=="svelte-133jdu3"&&(m.textContent=G),L=d(e),y=s(e,"P",{["data-svelte-h"]:!0}),u(y)!=="svelte-ztvngt"&&(y.innerHTML=Z),q=d(e),g=s(e,"P",{["data-svelte-h"]:!0}),u(g)!=="svelte-d5qnlg"&&(g.innerHTML=K),D=d(e),_=s(e,"P",{["data-svelte-h"]:!0}),u(_)!=="svelte-1qqmagr"&&(_.innerHTML=O),W=d(e),S=s(e,"PRE",{class:!0});var t=le(S);t.forEach(a),$=d(e),w=s(e,"P",{["data-svelte-h"]:!0}),u(w)!=="svelte-gs81ar"&&(w.textContent=Q),B=d(e),I=s(e,"P",{["data-svelte-h"]:!0}),u(I)!=="svelte-ql90to"&&(I.textContent=Y),E=d(e),x=s(e,"P",{["data-svelte-h"]:!0}),u(x)!=="svelte-1fs2hgo"&&(x.textContent=J),R=d(e),C=s(e,"PRE",{class:!0});var de=le(C);de.forEach(a),j=d(e),b=s(e,"P",{["data-svelte-h"]:!0}),u(b)!=="svelte-1upf9mt"&&(b.innerHTML=V),U=d(e),f=s(e,"H2",{id:!0,["data-svelte-h"]:!0}),u(f)!=="svelte-di2ekd"&&(f.textContent=X),N=d(e),T=s(e,"P",{["data-svelte-h"]:!0}),u(T)!=="svelte-1hzetjd"&&(T.textContent=ee),z=d(e),M=s(e,"UL",{["data-svelte-h"]:!0}),u(M)!=="svelte-1ekd03r"&&(M.innerHTML=te),A=d(e),k=s(e,"P",{["data-svelte-h"]:!0}),u(k)!=="svelte-1999ou"&&(k.textContent=ae),this.h()},h(){P(l,"id","introduction"),P(m,"id","getting-started"),P(S,"class","language-html"),P(C,"class","language-html"),P(f,"id","the-setup")},m(e,t){n(e,l,t),n(e,p,t),n(e,c,t),n(e,h,t),n(e,m,t),n(e,L,t),n(e,y,t),n(e,q,t),n(e,g,t),n(e,D,t),n(e,_,t),n(e,W,t),n(e,S,t),S.innerHTML=se,n(e,$,t),n(e,w,t),n(e,B,t),n(e,I,t),n(e,E,t),n(e,x,t),n(e,R,t),n(e,C,t),C.innerHTML=re,n(e,j,t),n(e,b,t),n(e,U,t),n(e,f,t),n(e,N,t),n(e,T,t),n(e,z,t),n(e,M,t),n(e,A,t),n(e,k,t)},p:he,d(e){e&&(a(l),a(p),a(c),a(h),a(m),a(L),a(y),a(q),a(g),a(D),a(_),a(W),a(S),a($),a(w),a(B),a(I),a(E),a(x),a(R),a(C),a(j),a(b),a(U),a(f),a(N),a(T),a(z),a(M),a(A),a(k))}}}function xe(H){let l,v;const p=[H[0],oe];let c={$$slots:{default:[Ie]},$$scope:{ctx:H}};for(let i=0;i<p.length;i+=1)c=F(c,p[i]);return l=new we({props:c}),{c(){pe(l.$$.fragment)},l(i){ve(l.$$.fragment,i)},m(i,h){fe(l,i,h),v=!0},p(i,[h]){const m=h&1?Se(p,[h&1&&ie(i[0]),h&0&&ie(oe)]):{};h&2&&(m.$$scope={dirty:h,ctx:i}),l.$set(m)},i(i){v||(ye(l.$$.fragment,i),v=!0)},o(i){ge(l.$$.fragment,i),v=!1},d(i){_e(l,i)}}}const oe={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"How To Build a Dynamic Web Site With Simple Server Technologies.",description:"Using SSI to build a more dynamic website",excerpt:"In order to create a page that is easily maintainable, you need to do three",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["web-development"],tags:["SSI"],created_at:"2009-05-29T09:57:57.000Z",updated_at:"2009-05-29T09:57:57.000Z",preview:`Introduction

Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my...`,previewHtml:"<h2>Introduction</h2> <p>Back in the day, in 2000, I started creating my own Content Management System , called SaMS. I created it in Perl , as this was the only server technology available to me at that time. When I created my DynDNS account and got my own doma...</p>",textContent:`Introduction

Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started...`};function Ce(H,l,v){return H.$$set=p=>{v(0,l=F(F({},l),ne(p)))},l=ne(l),[l]}class He extends ce{constructor(l){super(),me(this,l,Ce,xe,ue,{})}}export{He as default,oe as metadata};
