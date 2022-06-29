import{S as Ct,i as xt,s as Pt,D as Ve,x as Mt,y as Lt,z as Dt,A as Ht,B as St,r as Ot,p as Rt,C as Wt,X as It,e as n,t as o,k as c,c as s,a as r,h as l,d as t,m as p,b as C,g as h,F as a,n as $t}from"../../chunks/index-1458cd2c.js";import{P as Ut}from"../../chunks/post-d6c55913.js";function Bt(D){let d,v,y,_,u,f,w,me,V,S,ve,A,ye,_e,F,we,Se,ee,g,Ie,H,be,ge,te,E,Ee,j,Te,ke,ae,x,gt='<code class="language-html"><span class="token comment">&lt;!--#echo var="REQUEST_URI"--></span></code>',oe,O,Ce,le,R,xe,ie,W,Pe,ne,P,Et='<code class="language-html"><span class="token comment">&lt;!--#directive parameter=value--></span></code>',se,T,Me,Z,Le,De,re,M,He,he,$,Oe,de,I,U,K,Re,We,$e,k,Y,Ue,Be,q,Ge,Ne,Ae,m,z,Fe,je,Q,Ze,Ke,X,Ye,qe,L,ze,Qe,ue,B,Xe;return{c(){d=n("h2"),v=o("Introduction"),y=c(),_=n("p"),u=o(`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),f=c(),w=n("h2"),me=o("Getting Started"),V=c(),S=n("p"),ve=o(`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn\u2019t work, create a `),A=n("code"),ye=o(".htaccess"),_e=o(" file with the line "),F=n("code"),we=o("Options +Includes"),Se=o(` in it, and place the file in your site\u2019s main top-level directory.
Check your web host\u2019s documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),ee=c(),g=n("p"),Ie=o(`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),H=n("a"),be=o("Wikipedia page"),ge=o("."),te=c(),E=n("p"),Ee=o(`You can test SSI by creating a simple HTML page and putting the following line
into the `),j=n("code"),Te=o("<body>"),ke=o(" of the document:"),ae=c(),x=n("pre"),oe=c(),O=n("p"),Ce=o(`When viewed in your browser, it should display the URL of the page you are
viewing.`),le=c(),R=n("p"),xe=o(`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign (\u2019#\u2019). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),ie=c(),W=n("p"),Pe=o("The syntax for SSI is simple:"),ne=c(),P=n("pre"),se=c(),T=n("p"),Me=o(`If you are used to Perl, this is much like saying:
`),Z=n("code"),Le=o("directive({ parameter => value })"),De=o(`. Most directives have only one parameter, but
some have two.`),re=c(),M=n("h2"),He=o("The Setup"),he=c(),$=n("p"),Oe=o("In order to create a page that is easily maintainable, you need to do three things:"),de=c(),I=n("ul"),U=n("li"),K=n("strong"),Re=o("Create a template"),We=o(`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined\xA0 for my web site (those listed previously) in
this tutorial.`),$e=c(),k=n("li"),Y=n("strong"),Ue=o("\u201CChunk\u201D the page"),Be=o(`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),q=n("code"),Ge=o("<?xml..?>"),Ne=o(` to the tag that represents the content area into a file
called \u201Cinclude/header.html\u201D. We will use SSI to reasseble the page
later.`),Ae=c(),m=n("li"),z=n("strong"),Fe=o("Create the SSI"),je=o(`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),Q=n("code"),Ze=o('<!--#include virtual="/include/header.html"-->'),Ke=o(" \u2026[content goes here]\u2026"),X=n("code"),Ye=o('<!--#include virtual="/include/footer.html"-->'),qe=o(`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),L=n("a"),ze=o("http://your.server.net/include/header.html"),Qe=o(`, you will see the included header
file.)`),ue=c(),B=n("p"),Xe=o("There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),this.h()},l(e){d=s(e,"H2",{id:!0});var i=r(d);v=l(i,"Introduction"),i.forEach(t),y=p(e),_=s(e,"P",{});var et=r(_);u=l(et,`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),et.forEach(t),f=p(e),w=s(e,"H2",{id:!0});var tt=r(w);me=l(tt,"Getting Started"),tt.forEach(t),V=p(e),S=s(e,"P",{});var G=r(S);ve=l(G,`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn\u2019t work, create a `),A=s(G,"CODE",{});var at=r(A);ye=l(at,".htaccess"),at.forEach(t),_e=l(G," file with the line "),F=s(G,"CODE",{});var ot=r(F);we=l(ot,"Options +Includes"),ot.forEach(t),Se=l(G,` in it, and place the file in your site\u2019s main top-level directory.
Check your web host\u2019s documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),G.forEach(t),ee=p(e),g=s(e,"P",{});var ce=r(g);Ie=l(ce,`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),H=s(ce,"A",{href:!0});var lt=r(H);be=l(lt,"Wikipedia page"),lt.forEach(t),ge=l(ce,"."),ce.forEach(t),te=p(e),E=s(e,"P",{});var pe=r(E);Ee=l(pe,`You can test SSI by creating a simple HTML page and putting the following line
into the `),j=s(pe,"CODE",{});var it=r(j);Te=l(it,"<body>"),it.forEach(t),ke=l(pe," of the document:"),pe.forEach(t),ae=p(e),x=s(e,"PRE",{class:!0});var Tt=r(x);Tt.forEach(t),oe=p(e),O=s(e,"P",{});var nt=r(O);Ce=l(nt,`When viewed in your browser, it should display the URL of the page you are
viewing.`),nt.forEach(t),le=p(e),R=s(e,"P",{});var st=r(R);xe=l(st,`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign (\u2019#\u2019). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),st.forEach(t),ie=p(e),W=s(e,"P",{});var rt=r(W);Pe=l(rt,"The syntax for SSI is simple:"),rt.forEach(t),ne=p(e),P=s(e,"PRE",{class:!0});var kt=r(P);kt.forEach(t),se=p(e),T=s(e,"P",{});var fe=r(T);Me=l(fe,`If you are used to Perl, this is much like saying:
`),Z=s(fe,"CODE",{});var ht=r(Z);Le=l(ht,"directive({ parameter => value })"),ht.forEach(t),De=l(fe,`. Most directives have only one parameter, but
some have two.`),fe.forEach(t),re=p(e),M=s(e,"H2",{id:!0});var dt=r(M);He=l(dt,"The Setup"),dt.forEach(t),he=p(e),$=s(e,"P",{});var ut=r($);Oe=l(ut,"In order to create a page that is easily maintainable, you need to do three things:"),ut.forEach(t),de=p(e),I=s(e,"UL",{});var N=r(I);U=s(N,"LI",{});var Je=r(U);K=s(Je,"STRONG",{});var ct=r(K);Re=l(ct,"Create a template"),ct.forEach(t),We=l(Je,`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined\xA0 for my web site (those listed previously) in
this tutorial.`),Je.forEach(t),$e=p(N),k=s(N,"LI",{});var J=r(k);Y=s(J,"STRONG",{});var pt=r(Y);Ue=l(pt,"\u201CChunk\u201D the page"),pt.forEach(t),Be=l(J,`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),q=s(J,"CODE",{});var ft=r(q);Ge=l(ft,"<?xml..?>"),ft.forEach(t),Ne=l(J,` to the tag that represents the content area into a file
called \u201Cinclude/header.html\u201D. We will use SSI to reasseble the page
later.`),J.forEach(t),Ae=p(N),m=s(N,"LI",{});var b=r(m);z=s(b,"STRONG",{});var mt=r(z);Fe=l(mt,"Create the SSI"),mt.forEach(t),je=l(b,`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),Q=s(b,"CODE",{});var vt=r(Q);Ze=l(vt,'<!--#include virtual="/include/header.html"-->'),vt.forEach(t),Ke=l(b," \u2026[content goes here]\u2026"),X=s(b,"CODE",{});var yt=r(X);Ye=l(yt,'<!--#include virtual="/include/footer.html"-->'),yt.forEach(t),qe=l(b,`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),L=s(b,"A",{href:!0,rel:!0});var _t=r(L);ze=l(_t,"http://your.server.net/include/header.html"),_t.forEach(t),Qe=l(b,`, you will see the included header
file.)`),b.forEach(t),N.forEach(t),ue=p(e),B=s(e,"P",{});var wt=r(B);Xe=l(wt,"There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),wt.forEach(t),this.h()},h(){C(d,"id","introduction"),C(w,"id","getting-started"),C(H,"href","http://en.wikipedia.org/wiki/Server_Side_Includes"),C(x,"class","language-html"),C(P,"class","language-html"),C(M,"id","the-setup"),C(L,"href","http://your.server.net/include/header.html"),C(L,"rel","nofollow")},m(e,i){h(e,d,i),a(d,v),h(e,y,i),h(e,_,i),a(_,u),h(e,f,i),h(e,w,i),a(w,me),h(e,V,i),h(e,S,i),a(S,ve),a(S,A),a(A,ye),a(S,_e),a(S,F),a(F,we),a(S,Se),h(e,ee,i),h(e,g,i),a(g,Ie),a(g,H),a(H,be),a(g,ge),h(e,te,i),h(e,E,i),a(E,Ee),a(E,j),a(j,Te),a(E,ke),h(e,ae,i),h(e,x,i),x.innerHTML=gt,h(e,oe,i),h(e,O,i),a(O,Ce),h(e,le,i),h(e,R,i),a(R,xe),h(e,ie,i),h(e,W,i),a(W,Pe),h(e,ne,i),h(e,P,i),P.innerHTML=Et,h(e,se,i),h(e,T,i),a(T,Me),a(T,Z),a(Z,Le),a(T,De),h(e,re,i),h(e,M,i),a(M,He),h(e,he,i),h(e,$,i),a($,Oe),h(e,de,i),h(e,I,i),a(I,U),a(U,K),a(K,Re),a(U,We),a(I,$e),a(I,k),a(k,Y),a(Y,Ue),a(k,Be),a(k,q),a(q,Ge),a(k,Ne),a(I,Ae),a(I,m),a(m,z),a(z,Fe),a(m,je),a(m,Q),a(Q,Ze),a(m,Ke),a(m,X),a(X,Ye),a(m,qe),a(m,L),a(L,ze),a(m,Qe),h(e,ue,i),h(e,B,i),a(B,Xe)},p:$t,d(e){e&&t(d),e&&t(y),e&&t(_),e&&t(f),e&&t(w),e&&t(V),e&&t(S),e&&t(ee),e&&t(g),e&&t(te),e&&t(E),e&&t(ae),e&&t(x),e&&t(oe),e&&t(O),e&&t(le),e&&t(R),e&&t(ie),e&&t(W),e&&t(ne),e&&t(P),e&&t(se),e&&t(T),e&&t(re),e&&t(M),e&&t(he),e&&t($),e&&t(de),e&&t(I),e&&t(ue),e&&t(B)}}}function Gt(D){let d,v;const y=[D[0],bt];let _={$$slots:{default:[Bt]},$$scope:{ctx:D}};for(let u=0;u<y.length;u+=1)_=Ve(_,y[u]);return d=new Ut({props:_}),{c(){Mt(d.$$.fragment)},l(u){Lt(d.$$.fragment,u)},m(u,f){Dt(d,u,f),v=!0},p(u,[f]){const w=f&1?Ht(y,[f&1&&St(u[0]),f&0&&St(bt)]):{};f&2&&(w.$$scope={dirty:f,ctx:u}),d.$set(w)},i(u){v||(Ot(d.$$.fragment,u),v=!0)},o(u){Rt(d.$$.fragment,u),v=!1},d(u){Wt(d,u)}}}const bt={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"How To Build a Dynamic Web Site With Simple Server Technologies.",description:"Using SSI to build a more dynamic website",excerpt:"In order to create a page that is easily maintainable, you need to do three",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["web-development"],tags:["SSI"],created_at:"2009-05-29T09:57:57.000Z",updated_at:"2009-05-29T09:57:57.000Z",lastmod:"2022-06-13T01:53:59.216Z"};function Nt(D,d,v){return D.$$set=y=>{v(0,d=Ve(Ve({},d),It(y)))},d=It(d),[d]}class jt extends Ct{constructor(d){super(),xt(this,d,Nt,Gt,Pt,{})}}export{jt as default,bt as metadata};
