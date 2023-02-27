import{S as Ct,i as Pt,s as xt,C as Xe,y as Lt,z as Mt,A as Ht,H as Dt,$ as St,g as Ot,d as Rt,B as Wt,L as It,k as n,q as o,a as c,l as s,m as r,r as l,h as t,c as p,n as V,b as h,G as a,I as $t}from"./index.37f37dfa.js";import{P as Gt}from"./post.47922bc8.js";function Ut(L){let d,v,y,_,u,f,I,me,X,w,ve,N,ye,_e,A,we,Se,ee,g,Ie,M,be,ge,te,E,Ee,F,Te,ke,ae,C,gt='<code class="language-html"><span class="token comment">&lt;!--#echo var="REQUEST_URI"--></span></code>',oe,H,Ce,le,D,Pe,ie,O,xe,ne,P,Et='<code class="language-html"><span class="token comment">&lt;!--#directive parameter=value--></span></code>',se,T,Le,j,Me,He,re,R,De,he,W,Oe,de,S,$,q,Re,We,$e,k,K,Ge,Ue,Y,Be,Ne,Ae,m,Z,Fe,je,z,qe,Ke,Q,Ye,Ze,x,ze,Qe,ue,G,Je;return{c(){d=n("h2"),v=o("Introduction"),y=c(),_=n("p"),u=o(`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),f=c(),I=n("h2"),me=o("Getting Started"),X=c(),w=n("p"),ve=o(`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn't work, create a `),N=n("code"),ye=o(".htaccess"),_e=o(" file with the line "),A=n("code"),we=o("Options +Includes"),Se=o(` in it, and place the file in your site's main top-level directory.
Check your web host's documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),ee=c(),g=n("p"),Ie=o(`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),M=n("a"),be=o("Wikipedia page"),ge=o("."),te=c(),E=n("p"),Ee=o(`You can test SSI by creating a simple HTML page and putting the following line
into the `),F=n("code"),Te=o("<body>"),ke=o(" of the document:"),ae=c(),C=n("pre"),oe=c(),H=n("p"),Ce=o(`When viewed in your browser, it should display the URL of the page you are
viewing.`),le=c(),D=n("p"),Pe=o(`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign ('#'). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),ie=c(),O=n("p"),xe=o("The syntax for SSI is simple:"),ne=c(),P=n("pre"),se=c(),T=n("p"),Le=o(`If you are used to Perl, this is much like saying:
`),j=n("code"),Me=o("directive({ parameter => value })"),He=o(`. Most directives have only one parameter, but
some have two.`),re=c(),R=n("h2"),De=o("The Setup"),he=c(),W=n("p"),Oe=o("In order to create a page that is easily maintainable, you need to do three things:"),de=c(),S=n("ul"),$=n("li"),q=n("strong"),Re=o("Create a template"),We=o(`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined  for my web site (those listed previously) in
this tutorial.`),$e=c(),k=n("li"),K=n("strong"),Ge=o('"Chunk" the page'),Ue=o(`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),Y=n("code"),Be=o("<?xml..?>"),Ne=o(` to the tag that represents the content area into a file
called "include/header.html". We will use SSI to reasseble the page
later.`),Ae=c(),m=n("li"),Z=n("strong"),Fe=o("Create the SSI"),je=o(`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),z=n("code"),qe=o('<!--#include virtual="/include/header.html"-->'),Ke=o(" …[content goes here]…"),Q=n("code"),Ye=o('<!--#include virtual="/include/footer.html"-->'),Ze=o(`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),x=n("a"),ze=o("http://your.server.net/include/header.html"),Qe=o(`, you will see the included header
file.)`),ue=c(),G=n("p"),Je=o("There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),this.h()},l(e){d=s(e,"H2",{});var i=r(d);v=l(i,"Introduction"),i.forEach(t),y=p(e),_=s(e,"P",{});var et=r(_);u=l(et,`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),et.forEach(t),f=p(e),I=s(e,"H2",{});var tt=r(I);me=l(tt,"Getting Started"),tt.forEach(t),X=p(e),w=s(e,"P",{});var U=r(w);ve=l(U,`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn't work, create a `),N=s(U,"CODE",{});var at=r(N);ye=l(at,".htaccess"),at.forEach(t),_e=l(U," file with the line "),A=s(U,"CODE",{});var ot=r(A);we=l(ot,"Options +Includes"),ot.forEach(t),Se=l(U,` in it, and place the file in your site's main top-level directory.
Check your web host's documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),U.forEach(t),ee=p(e),g=s(e,"P",{});var ce=r(g);Ie=l(ce,`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),M=s(ce,"A",{href:!0});var lt=r(M);be=l(lt,"Wikipedia page"),lt.forEach(t),ge=l(ce,"."),ce.forEach(t),te=p(e),E=s(e,"P",{});var pe=r(E);Ee=l(pe,`You can test SSI by creating a simple HTML page and putting the following line
into the `),F=s(pe,"CODE",{});var it=r(F);Te=l(it,"<body>"),it.forEach(t),ke=l(pe," of the document:"),pe.forEach(t),ae=p(e),C=s(e,"PRE",{class:!0});var Tt=r(C);Tt.forEach(t),oe=p(e),H=s(e,"P",{});var nt=r(H);Ce=l(nt,`When viewed in your browser, it should display the URL of the page you are
viewing.`),nt.forEach(t),le=p(e),D=s(e,"P",{});var st=r(D);Pe=l(st,`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign ('#'). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),st.forEach(t),ie=p(e),O=s(e,"P",{});var rt=r(O);xe=l(rt,"The syntax for SSI is simple:"),rt.forEach(t),ne=p(e),P=s(e,"PRE",{class:!0});var kt=r(P);kt.forEach(t),se=p(e),T=s(e,"P",{});var fe=r(T);Le=l(fe,`If you are used to Perl, this is much like saying:
`),j=s(fe,"CODE",{});var ht=r(j);Me=l(ht,"directive({ parameter => value })"),ht.forEach(t),He=l(fe,`. Most directives have only one parameter, but
some have two.`),fe.forEach(t),re=p(e),R=s(e,"H2",{});var dt=r(R);De=l(dt,"The Setup"),dt.forEach(t),he=p(e),W=s(e,"P",{});var ut=r(W);Oe=l(ut,"In order to create a page that is easily maintainable, you need to do three things:"),ut.forEach(t),de=p(e),S=s(e,"UL",{});var B=r(S);$=s(B,"LI",{});var Ve=r($);q=s(Ve,"STRONG",{});var ct=r(q);Re=l(ct,"Create a template"),ct.forEach(t),We=l(Ve,`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined  for my web site (those listed previously) in
this tutorial.`),Ve.forEach(t),$e=p(B),k=s(B,"LI",{});var J=r(k);K=s(J,"STRONG",{});var pt=r(K);Ge=l(pt,'"Chunk" the page'),pt.forEach(t),Ue=l(J,`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),Y=s(J,"CODE",{});var ft=r(Y);Be=l(ft,"<?xml..?>"),ft.forEach(t),Ne=l(J,` to the tag that represents the content area into a file
called "include/header.html". We will use SSI to reasseble the page
later.`),J.forEach(t),Ae=p(B),m=s(B,"LI",{});var b=r(m);Z=s(b,"STRONG",{});var mt=r(Z);Fe=l(mt,"Create the SSI"),mt.forEach(t),je=l(b,`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),z=s(b,"CODE",{});var vt=r(z);qe=l(vt,'<!--#include virtual="/include/header.html"-->'),vt.forEach(t),Ke=l(b," …[content goes here]…"),Q=s(b,"CODE",{});var yt=r(Q);Ye=l(yt,'<!--#include virtual="/include/footer.html"-->'),yt.forEach(t),Ze=l(b,`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),x=s(b,"A",{href:!0,rel:!0});var _t=r(x);ze=l(_t,"http://your.server.net/include/header.html"),_t.forEach(t),Qe=l(b,`, you will see the included header
file.)`),b.forEach(t),B.forEach(t),ue=p(e),G=s(e,"P",{});var wt=r(G);Je=l(wt,"There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),wt.forEach(t),this.h()},h(){V(M,"href","http://en.wikipedia.org/wiki/Server_Side_Includes"),V(C,"class","language-html"),V(P,"class","language-html"),V(x,"href","http://your.server.net/include/header.html"),V(x,"rel","nofollow")},m(e,i){h(e,d,i),a(d,v),h(e,y,i),h(e,_,i),a(_,u),h(e,f,i),h(e,I,i),a(I,me),h(e,X,i),h(e,w,i),a(w,ve),a(w,N),a(N,ye),a(w,_e),a(w,A),a(A,we),a(w,Se),h(e,ee,i),h(e,g,i),a(g,Ie),a(g,M),a(M,be),a(g,ge),h(e,te,i),h(e,E,i),a(E,Ee),a(E,F),a(F,Te),a(E,ke),h(e,ae,i),h(e,C,i),C.innerHTML=gt,h(e,oe,i),h(e,H,i),a(H,Ce),h(e,le,i),h(e,D,i),a(D,Pe),h(e,ie,i),h(e,O,i),a(O,xe),h(e,ne,i),h(e,P,i),P.innerHTML=Et,h(e,se,i),h(e,T,i),a(T,Le),a(T,j),a(j,Me),a(T,He),h(e,re,i),h(e,R,i),a(R,De),h(e,he,i),h(e,W,i),a(W,Oe),h(e,de,i),h(e,S,i),a(S,$),a($,q),a(q,Re),a($,We),a(S,$e),a(S,k),a(k,K),a(K,Ge),a(k,Ue),a(k,Y),a(Y,Be),a(k,Ne),a(S,Ae),a(S,m),a(m,Z),a(Z,Fe),a(m,je),a(m,z),a(z,qe),a(m,Ke),a(m,Q),a(Q,Ye),a(m,Ze),a(m,x),a(x,ze),a(m,Qe),h(e,ue,i),h(e,G,i),a(G,Je)},p:$t,d(e){e&&t(d),e&&t(y),e&&t(_),e&&t(f),e&&t(I),e&&t(X),e&&t(w),e&&t(ee),e&&t(g),e&&t(te),e&&t(E),e&&t(ae),e&&t(C),e&&t(oe),e&&t(H),e&&t(le),e&&t(D),e&&t(ie),e&&t(O),e&&t(ne),e&&t(P),e&&t(se),e&&t(T),e&&t(re),e&&t(R),e&&t(he),e&&t(W),e&&t(de),e&&t(S),e&&t(ue),e&&t(G)}}}function Bt(L){let d,v;const y=[L[0],bt];let _={$$slots:{default:[Ut]},$$scope:{ctx:L}};for(let u=0;u<y.length;u+=1)_=Xe(_,y[u]);return d=new Gt({props:_}),{c(){Lt(d.$$.fragment)},l(u){Mt(d.$$.fragment,u)},m(u,f){Ht(d,u,f),v=!0},p(u,[f]){const I=f&1?Dt(y,[f&1&&St(u[0]),f&0&&St(bt)]):{};f&2&&(I.$$scope={dirty:f,ctx:u}),d.$set(I)},i(u){v||(Ot(d.$$.fragment,u),v=!0)},o(u){Rt(d.$$.fragment,u),v=!1},d(u){Wt(d,u)}}}const bt={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"How To Build a Dynamic Web Site With Simple Server Technologies.",description:"Using SSI to build a more dynamic website",excerpt:"In order to create a page that is easily maintainable, you need to do three",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["web-development"],tags:["SSI"],created_at:"2009-05-29T09:57:57.000Z",updated_at:"2009-05-29T09:57:57.000Z"};function Nt(L,d,v){return L.$$set=y=>{v(0,d=Xe(Xe({},d),It(y)))},d=It(d),[d]}class jt extends Ct{constructor(d){super(),Pt(this,d,Nt,Bt,xt,{})}}export{jt as default,bt as metadata};
