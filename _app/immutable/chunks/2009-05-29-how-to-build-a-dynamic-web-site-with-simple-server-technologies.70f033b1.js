import{S as Ct,i as Mt,s as Pt,C as Xe,y as xt,z as Dt,A as Lt,H as Ht,a0 as _t,g as Wt,d as Ot,B as Rt,L as It,k as l,q as n,a as u,l as r,m as s,r as o,h as t,c as p,n as C,b as h,G as a,I as Bt}from"./index.8495bde4.js";import{P as Nt}from"./post.98a719d8.js";function $t(L){let d,y,v,S,c,m,w,fe,X,_,ye,A,ve,Se,F,we,_e,ee,b,Ie,H,ge,be,te,E,Ee,j,Te,ke,ae,M,bt='<code class="language-html"><span class="token comment">&lt;!--#echo var="REQUEST_URI"--></span></code>',ne,W,Ce,oe,O,Me,ie,R,Pe,le,P,Et='<code class="language-html"><span class="token comment">&lt;!--#directive parameter=value--></span></code>',re,T,xe,q,De,Le,se,x,He,he,B,We,de,I,N,K,Oe,Re,Be,k,Y,Ne,$e,Z,Ge,Ue,Ae,f,z,Fe,je,Q,qe,Ke,J,Ye,Ze,D,ze,Qe,ce,$,Je;return{c(){d=l("h2"),y=n("Introduction"),v=u(),S=l("p"),c=n(`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),m=u(),w=l("h2"),fe=n("Getting Started"),X=u(),_=l("p"),ye=n(`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn't work, create a `),A=l("code"),ve=n(".htaccess"),Se=n(" file with the line "),F=l("code"),we=n("Options +Includes"),_e=n(` in it, and place the file in your site's main top-level directory.
Check your web host's documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),ee=u(),b=l("p"),Ie=n(`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),H=l("a"),ge=n("Wikipedia page"),be=n("."),te=u(),E=l("p"),Ee=n(`You can test SSI by creating a simple HTML page and putting the following line
into the `),j=l("code"),Te=n("<body>"),ke=n(" of the document:"),ae=u(),M=l("pre"),ne=u(),W=l("p"),Ce=n(`When viewed in your browser, it should display the URL of the page you are
viewing.`),oe=u(),O=l("p"),Me=n(`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign ('#'). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),ie=u(),R=l("p"),Pe=n("The syntax for SSI is simple:"),le=u(),P=l("pre"),re=u(),T=l("p"),xe=n(`If you are used to Perl, this is much like saying:
`),q=l("code"),De=n("directive({ parameter => value })"),Le=n(`. Most directives have only one parameter, but
some have two.`),se=u(),x=l("h2"),He=n("The Setup"),he=u(),B=l("p"),We=n("In order to create a page that is easily maintainable, you need to do three things:"),de=u(),I=l("ul"),N=l("li"),K=l("strong"),Oe=n("Create a template"),Re=n(`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined  for my web site (those listed previously) in
this tutorial.`),Be=u(),k=l("li"),Y=l("strong"),Ne=n('"Chunk" the page'),$e=n(`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),Z=l("code"),Ge=n("<?xml..?>"),Ue=n(` to the tag that represents the content area into a file
called "include/header.html". We will use SSI to reasseble the page
later.`),Ae=u(),f=l("li"),z=l("strong"),Fe=n("Create the SSI"),je=n(`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),Q=l("code"),qe=n('<!--#include virtual="/include/header.html"-->'),Ke=n(" …[content goes here]…"),J=l("code"),Ye=n('<!--#include virtual="/include/footer.html"-->'),Ze=n(`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),D=l("a"),ze=n("http://your.server.net/include/header.html"),Qe=n(`, you will see the included header
file.)`),ce=u(),$=l("p"),Je=n("There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),this.h()},l(e){d=r(e,"H2",{id:!0});var i=s(d);y=o(i,"Introduction"),i.forEach(t),v=p(e),S=r(e,"P",{});var et=s(S);c=o(et,`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),et.forEach(t),m=p(e),w=r(e,"H2",{id:!0});var tt=s(w);fe=o(tt,"Getting Started"),tt.forEach(t),X=p(e),_=r(e,"P",{});var G=s(_);ye=o(G,`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn't work, create a `),A=r(G,"CODE",{});var at=s(A);ve=o(at,".htaccess"),at.forEach(t),Se=o(G," file with the line "),F=r(G,"CODE",{});var nt=s(F);we=o(nt,"Options +Includes"),nt.forEach(t),_e=o(G,` in it, and place the file in your site's main top-level directory.
Check your web host's documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),G.forEach(t),ee=p(e),b=r(e,"P",{});var ue=s(b);Ie=o(ue,`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),H=r(ue,"A",{href:!0});var ot=s(H);ge=o(ot,"Wikipedia page"),ot.forEach(t),be=o(ue,"."),ue.forEach(t),te=p(e),E=r(e,"P",{});var pe=s(E);Ee=o(pe,`You can test SSI by creating a simple HTML page and putting the following line
into the `),j=r(pe,"CODE",{});var it=s(j);Te=o(it,"<body>"),it.forEach(t),ke=o(pe," of the document:"),pe.forEach(t),ae=p(e),M=r(e,"PRE",{class:!0});var Tt=s(M);Tt.forEach(t),ne=p(e),W=r(e,"P",{});var lt=s(W);Ce=o(lt,`When viewed in your browser, it should display the URL of the page you are
viewing.`),lt.forEach(t),oe=p(e),O=r(e,"P",{});var rt=s(O);Me=o(rt,`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign ('#'). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),rt.forEach(t),ie=p(e),R=r(e,"P",{});var st=s(R);Pe=o(st,"The syntax for SSI is simple:"),st.forEach(t),le=p(e),P=r(e,"PRE",{class:!0});var kt=s(P);kt.forEach(t),re=p(e),T=r(e,"P",{});var me=s(T);xe=o(me,`If you are used to Perl, this is much like saying:
`),q=r(me,"CODE",{});var ht=s(q);De=o(ht,"directive({ parameter => value })"),ht.forEach(t),Le=o(me,`. Most directives have only one parameter, but
some have two.`),me.forEach(t),se=p(e),x=r(e,"H2",{id:!0});var dt=s(x);He=o(dt,"The Setup"),dt.forEach(t),he=p(e),B=r(e,"P",{});var ct=s(B);We=o(ct,"In order to create a page that is easily maintainable, you need to do three things:"),ct.forEach(t),de=p(e),I=r(e,"UL",{});var U=s(I);N=r(U,"LI",{});var Ve=s(N);K=r(Ve,"STRONG",{});var ut=s(K);Oe=o(ut,"Create a template"),ut.forEach(t),Re=o(Ve,`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined  for my web site (those listed previously) in
this tutorial.`),Ve.forEach(t),Be=p(U),k=r(U,"LI",{});var V=s(k);Y=r(V,"STRONG",{});var pt=s(Y);Ne=o(pt,'"Chunk" the page'),pt.forEach(t),$e=o(V,`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),Z=r(V,"CODE",{});var mt=s(Z);Ge=o(mt,"<?xml..?>"),mt.forEach(t),Ue=o(V,` to the tag that represents the content area into a file
called "include/header.html". We will use SSI to reasseble the page
later.`),V.forEach(t),Ae=p(U),f=r(U,"LI",{});var g=s(f);z=r(g,"STRONG",{});var ft=s(z);Fe=o(ft,"Create the SSI"),ft.forEach(t),je=o(g,`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),Q=r(g,"CODE",{});var yt=s(Q);qe=o(yt,'<!--#include virtual="/include/header.html"-->'),yt.forEach(t),Ke=o(g," …[content goes here]…"),J=r(g,"CODE",{});var vt=s(J);Ye=o(vt,'<!--#include virtual="/include/footer.html"-->'),vt.forEach(t),Ze=o(g,`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),D=r(g,"A",{href:!0,title:!0});var St=s(D);ze=o(St,"http://your.server.net/include/header.html"),St.forEach(t),Qe=o(g,`, you will see the included header
file.)`),g.forEach(t),U.forEach(t),ce=p(e),$=r(e,"P",{});var wt=s($);Je=o(wt,"There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),wt.forEach(t),this.h()},h(){C(d,"id","introduction"),C(w,"id","getting-started"),C(H,"href","http://en.wikipedia.org/wiki/Server_Side_Includes"),C(M,"class","language-html"),C(P,"class","language-html"),C(x,"id","the-setup"),C(D,"href","http://your.server.net/include/header.html"),C(D,"title","")},m(e,i){h(e,d,i),a(d,y),h(e,v,i),h(e,S,i),a(S,c),h(e,m,i),h(e,w,i),a(w,fe),h(e,X,i),h(e,_,i),a(_,ye),a(_,A),a(A,ve),a(_,Se),a(_,F),a(F,we),a(_,_e),h(e,ee,i),h(e,b,i),a(b,Ie),a(b,H),a(H,ge),a(b,be),h(e,te,i),h(e,E,i),a(E,Ee),a(E,j),a(j,Te),a(E,ke),h(e,ae,i),h(e,M,i),M.innerHTML=bt,h(e,ne,i),h(e,W,i),a(W,Ce),h(e,oe,i),h(e,O,i),a(O,Me),h(e,ie,i),h(e,R,i),a(R,Pe),h(e,le,i),h(e,P,i),P.innerHTML=Et,h(e,re,i),h(e,T,i),a(T,xe),a(T,q),a(q,De),a(T,Le),h(e,se,i),h(e,x,i),a(x,He),h(e,he,i),h(e,B,i),a(B,We),h(e,de,i),h(e,I,i),a(I,N),a(N,K),a(K,Oe),a(N,Re),a(I,Be),a(I,k),a(k,Y),a(Y,Ne),a(k,$e),a(k,Z),a(Z,Ge),a(k,Ue),a(I,Ae),a(I,f),a(f,z),a(z,Fe),a(f,je),a(f,Q),a(Q,qe),a(f,Ke),a(f,J),a(J,Ye),a(f,Ze),a(f,D),a(D,ze),a(f,Qe),h(e,ce,i),h(e,$,i),a($,Je)},p:Bt,d(e){e&&t(d),e&&t(v),e&&t(S),e&&t(m),e&&t(w),e&&t(X),e&&t(_),e&&t(ee),e&&t(b),e&&t(te),e&&t(E),e&&t(ae),e&&t(M),e&&t(ne),e&&t(W),e&&t(oe),e&&t(O),e&&t(ie),e&&t(R),e&&t(le),e&&t(P),e&&t(re),e&&t(T),e&&t(se),e&&t(x),e&&t(he),e&&t(B),e&&t(de),e&&t(I),e&&t(ce),e&&t($)}}}function Gt(L){let d,y;const v=[L[0],gt];let S={$$slots:{default:[$t]},$$scope:{ctx:L}};for(let c=0;c<v.length;c+=1)S=Xe(S,v[c]);return d=new Nt({props:S}),{c(){xt(d.$$.fragment)},l(c){Dt(d.$$.fragment,c)},m(c,m){Lt(d,c,m),y=!0},p(c,[m]){const w=m&1?Ht(v,[m&1&&_t(c[0]),m&0&&_t(gt)]):{};m&2&&(w.$$scope={dirty:m,ctx:c}),d.$set(w)},i(c){y||(Wt(d.$$.fragment,c),y=!0)},o(c){Ot(d.$$.fragment,c),y=!1},d(c){Rt(d,c)}}}const gt={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"How To Build a Dynamic Web Site With Simple Server Technologies.",description:"Using SSI to build a more dynamic website",excerpt:"In order to create a page that is easily maintainable, you need to do three",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["web-development"],tags:["SSI"],created_at:"2009-05-29T09:57:57.000Z",updated_at:"2009-05-29T09:57:57.000Z",preview:`Introduction

Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my...`,previewHtml:"<h2>Introduction</h2> <p>Back in the day, in 2000, I started creating my own Content Management System , called SaMS. I created it in Perl , as this was the only server technology available to me at that time. When I created my DynDNS account and got my own doma...</p>",textContent:`Introduction

Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started...`};function Ut(L,d,y){return L.$$set=v=>{y(0,d=Xe(Xe({},d),It(v)))},d=It(d),[d]}class jt extends Ct{constructor(d){super(),Mt(this,d,Ut,Gt,Pt,{})}}export{jt as default,gt as metadata};
