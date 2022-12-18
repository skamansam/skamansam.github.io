import{S as Ct,i as xt,s as Pt,C as Xe,w as Mt,x as Lt,y as Ht,H as Dt,Z as St,f as Ot,t as Rt,z as Wt,K as It,k as n,q as o,a as c,l as s,m as r,r as l,h as t,c as f,n as V,b as h,G as a,B as $t}from"./index-6a3f2268.js";import{P as Gt}from"./post-3c5a9cb3.js";function Ut(M){let d,v,y,_,u,p,I,me,X,w,ve,N,ye,_e,A,we,Se,ee,g,Ie,L,be,ge,te,E,Ee,F,Te,ke,ae,C,gt='<code class="language-html"><span class="token comment">&lt;!--#echo var="REQUEST_URI"--></span></code>',oe,H,Ce,le,D,xe,ie,O,Pe,ne,x,Et='<code class="language-html"><span class="token comment">&lt;!--#directive parameter=value--></span></code>',se,T,Me,j,Le,He,re,R,De,he,W,Oe,de,S,$,K,Re,We,$e,k,Z,Ge,Ue,q,Be,Ne,Ae,m,Y,Fe,je,z,Ke,Ze,Q,qe,Ye,P,ze,Qe,ue,G,Je;return{c(){d=n("h2"),v=o("Introduction"),y=c(),_=n("p"),u=o(`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),p=c(),I=n("h2"),me=o("Getting Started"),X=c(),w=n("p"),ve=o(`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn't work, create a `),N=n("code"),ye=o(".htaccess"),_e=o(" file with the line "),A=n("code"),we=o("Options +Includes"),Se=o(` in it, and place the file in your site's main top-level directory.
Check your web host's documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),ee=c(),g=n("p"),Ie=o(`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),L=n("a"),be=o("Wikipedia page"),ge=o("."),te=c(),E=n("p"),Ee=o(`You can test SSI by creating a simple HTML page and putting the following line
into the `),F=n("code"),Te=o("<body>"),ke=o(" of the document:"),ae=c(),C=n("pre"),oe=c(),H=n("p"),Ce=o(`When viewed in your browser, it should display the URL of the page you are
viewing.`),le=c(),D=n("p"),xe=o(`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign ('#'). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),ie=c(),O=n("p"),Pe=o("The syntax for SSI is simple:"),ne=c(),x=n("pre"),se=c(),T=n("p"),Me=o(`If you are used to Perl, this is much like saying:
`),j=n("code"),Le=o("directive({ parameter => value })"),He=o(`. Most directives have only one parameter, but
some have two.`),re=c(),R=n("h2"),De=o("The Setup"),he=c(),W=n("p"),Oe=o("In order to create a page that is easily maintainable, you need to do three things:"),de=c(),S=n("ul"),$=n("li"),K=n("strong"),Re=o("Create a template"),We=o(`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined  for my web site (those listed previously) in
this tutorial.`),$e=c(),k=n("li"),Z=n("strong"),Ge=o('"Chunk" the page'),Ue=o(`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),q=n("code"),Be=o("<?xml..?>"),Ne=o(` to the tag that represents the content area into a file
called "include/header.html". We will use SSI to reasseble the page
later.`),Ae=c(),m=n("li"),Y=n("strong"),Fe=o("Create the SSI"),je=o(`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),z=n("code"),Ke=o('<!--#include virtual="/include/header.html"-->'),Ze=o(" …[content goes here]…"),Q=n("code"),qe=o('<!--#include virtual="/include/footer.html"-->'),Ye=o(`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),P=n("a"),ze=o("http://your.server.net/include/header.html"),Qe=o(`, you will see the included header
file.)`),ue=c(),G=n("p"),Je=o("There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),this.h()},l(e){d=s(e,"H2",{});var i=r(d);v=l(i,"Introduction"),i.forEach(t),y=f(e),_=s(e,"P",{});var et=r(_);u=l(et,`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),et.forEach(t),p=f(e),I=s(e,"H2",{});var tt=r(I);me=l(tt,"Getting Started"),tt.forEach(t),X=f(e),w=s(e,"P",{});var U=r(w);ve=l(U,`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn't work, create a `),N=s(U,"CODE",{});var at=r(N);ye=l(at,".htaccess"),at.forEach(t),_e=l(U," file with the line "),A=s(U,"CODE",{});var ot=r(A);we=l(ot,"Options +Includes"),ot.forEach(t),Se=l(U,` in it, and place the file in your site's main top-level directory.
Check your web host's documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),U.forEach(t),ee=f(e),g=s(e,"P",{});var ce=r(g);Ie=l(ce,`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),L=s(ce,"A",{href:!0});var lt=r(L);be=l(lt,"Wikipedia page"),lt.forEach(t),ge=l(ce,"."),ce.forEach(t),te=f(e),E=s(e,"P",{});var fe=r(E);Ee=l(fe,`You can test SSI by creating a simple HTML page and putting the following line
into the `),F=s(fe,"CODE",{});var it=r(F);Te=l(it,"<body>"),it.forEach(t),ke=l(fe," of the document:"),fe.forEach(t),ae=f(e),C=s(e,"PRE",{class:!0});var Tt=r(C);Tt.forEach(t),oe=f(e),H=s(e,"P",{});var nt=r(H);Ce=l(nt,`When viewed in your browser, it should display the URL of the page you are
viewing.`),nt.forEach(t),le=f(e),D=s(e,"P",{});var st=r(D);xe=l(st,`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign ('#'). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),st.forEach(t),ie=f(e),O=s(e,"P",{});var rt=r(O);Pe=l(rt,"The syntax for SSI is simple:"),rt.forEach(t),ne=f(e),x=s(e,"PRE",{class:!0});var kt=r(x);kt.forEach(t),se=f(e),T=s(e,"P",{});var pe=r(T);Me=l(pe,`If you are used to Perl, this is much like saying:
`),j=s(pe,"CODE",{});var ht=r(j);Le=l(ht,"directive({ parameter => value })"),ht.forEach(t),He=l(pe,`. Most directives have only one parameter, but
some have two.`),pe.forEach(t),re=f(e),R=s(e,"H2",{});var dt=r(R);De=l(dt,"The Setup"),dt.forEach(t),he=f(e),W=s(e,"P",{});var ut=r(W);Oe=l(ut,"In order to create a page that is easily maintainable, you need to do three things:"),ut.forEach(t),de=f(e),S=s(e,"UL",{});var B=r(S);$=s(B,"LI",{});var Ve=r($);K=s(Ve,"STRONG",{});var ct=r(K);Re=l(ct,"Create a template"),ct.forEach(t),We=l(Ve,`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined  for my web site (those listed previously) in
this tutorial.`),Ve.forEach(t),$e=f(B),k=s(B,"LI",{});var J=r(k);Z=s(J,"STRONG",{});var ft=r(Z);Ge=l(ft,'"Chunk" the page'),ft.forEach(t),Ue=l(J,`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),q=s(J,"CODE",{});var pt=r(q);Be=l(pt,"<?xml..?>"),pt.forEach(t),Ne=l(J,` to the tag that represents the content area into a file
called "include/header.html". We will use SSI to reasseble the page
later.`),J.forEach(t),Ae=f(B),m=s(B,"LI",{});var b=r(m);Y=s(b,"STRONG",{});var mt=r(Y);Fe=l(mt,"Create the SSI"),mt.forEach(t),je=l(b,`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),z=s(b,"CODE",{});var vt=r(z);Ke=l(vt,'<!--#include virtual="/include/header.html"-->'),vt.forEach(t),Ze=l(b," …[content goes here]…"),Q=s(b,"CODE",{});var yt=r(Q);qe=l(yt,'<!--#include virtual="/include/footer.html"-->'),yt.forEach(t),Ye=l(b,`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),P=s(b,"A",{href:!0,rel:!0});var _t=r(P);ze=l(_t,"http://your.server.net/include/header.html"),_t.forEach(t),Qe=l(b,`, you will see the included header
file.)`),b.forEach(t),B.forEach(t),ue=f(e),G=s(e,"P",{});var wt=r(G);Je=l(wt,"There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),wt.forEach(t),this.h()},h(){V(L,"href","http://en.wikipedia.org/wiki/Server_Side_Includes"),V(C,"class","language-html"),V(x,"class","language-html"),V(P,"href","http://your.server.net/include/header.html"),V(P,"rel","nofollow")},m(e,i){h(e,d,i),a(d,v),h(e,y,i),h(e,_,i),a(_,u),h(e,p,i),h(e,I,i),a(I,me),h(e,X,i),h(e,w,i),a(w,ve),a(w,N),a(N,ye),a(w,_e),a(w,A),a(A,we),a(w,Se),h(e,ee,i),h(e,g,i),a(g,Ie),a(g,L),a(L,be),a(g,ge),h(e,te,i),h(e,E,i),a(E,Ee),a(E,F),a(F,Te),a(E,ke),h(e,ae,i),h(e,C,i),C.innerHTML=gt,h(e,oe,i),h(e,H,i),a(H,Ce),h(e,le,i),h(e,D,i),a(D,xe),h(e,ie,i),h(e,O,i),a(O,Pe),h(e,ne,i),h(e,x,i),x.innerHTML=Et,h(e,se,i),h(e,T,i),a(T,Me),a(T,j),a(j,Le),a(T,He),h(e,re,i),h(e,R,i),a(R,De),h(e,he,i),h(e,W,i),a(W,Oe),h(e,de,i),h(e,S,i),a(S,$),a($,K),a(K,Re),a($,We),a(S,$e),a(S,k),a(k,Z),a(Z,Ge),a(k,Ue),a(k,q),a(q,Be),a(k,Ne),a(S,Ae),a(S,m),a(m,Y),a(Y,Fe),a(m,je),a(m,z),a(z,Ke),a(m,Ze),a(m,Q),a(Q,qe),a(m,Ye),a(m,P),a(P,ze),a(m,Qe),h(e,ue,i),h(e,G,i),a(G,Je)},p:$t,d(e){e&&t(d),e&&t(y),e&&t(_),e&&t(p),e&&t(I),e&&t(X),e&&t(w),e&&t(ee),e&&t(g),e&&t(te),e&&t(E),e&&t(ae),e&&t(C),e&&t(oe),e&&t(H),e&&t(le),e&&t(D),e&&t(ie),e&&t(O),e&&t(ne),e&&t(x),e&&t(se),e&&t(T),e&&t(re),e&&t(R),e&&t(he),e&&t(W),e&&t(de),e&&t(S),e&&t(ue),e&&t(G)}}}function Bt(M){let d,v;const y=[M[0],bt];let _={$$slots:{default:[Ut]},$$scope:{ctx:M}};for(let u=0;u<y.length;u+=1)_=Xe(_,y[u]);return d=new Gt({props:_}),{c(){Mt(d.$$.fragment)},l(u){Lt(d.$$.fragment,u)},m(u,p){Ht(d,u,p),v=!0},p(u,[p]){const I=p&1?Dt(y,[p&1&&St(u[0]),p&0&&St(bt)]):{};p&2&&(I.$$scope={dirty:p,ctx:u}),d.$set(I)},i(u){v||(Ot(d.$$.fragment,u),v=!0)},o(u){Rt(d.$$.fragment,u),v=!1},d(u){Wt(d,u)}}}const bt={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"How To Build a Dynamic Web Site With Simple Server Technologies.",description:"Using SSI to build a more dynamic website",excerpt:"In order to create a page that is easily maintainable, you need to do three",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["web-development"],tags:["SSI"],created_at:"2009-05-29T09:57:57.000Z",updated_at:"2009-05-29T09:57:57.000Z"};function Nt(M,d,v){return M.$$set=y=>{v(0,d=Xe(Xe({},d),It(y)))},d=It(d),[d]}class jt extends Ct{constructor(d){super(),xt(this,d,Nt,Bt,Pt,{})}}export{jt as default,bt as metadata};
