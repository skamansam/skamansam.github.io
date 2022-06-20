import{S as Ct,i as xt,s as Pt,D as Xe,x as Mt,y as Lt,z as Dt,A as Ht,B as wt,r as Ot,p as Rt,C as Wt,V as gt,e as n,t as o,k as c,c as r,a as s,h as l,d as t,m as p,b as C,g as h,F as a,n as Gt}from"../../chunks/index-f095e7d9.js";import{P as $t}from"../../chunks/post-34b2f3fb.js";function Ut(D){let d,v,y,_,u,f,S,me,X,w,ve,A,ye,_e,F,Se,we,ee,b,ge,H,Ie,be,te,E,Ee,j,Te,ke,ae,x,bt='<code class="language-html"><span class="token comment">&lt;!--#echo var="REQUEST_URI"--></span></code>',oe,O,Ce,le,R,xe,ie,W,Pe,ne,P,Et='<code class="language-html"><span class="token comment">&lt;!--#directive parameter=value--></span></code>',re,T,Me,z,Le,De,se,M,He,he,G,Oe,de,g,$,Z,Re,We,Ge,k,K,$e,Ue,Y,Be,Ne,Ae,m,q,Fe,je,Q,ze,Ze,V,Ke,Ye,L,qe,Qe,ue,U,Ve;return{c(){d=n("h2"),v=o("Introduction"),y=c(),_=n("p"),u=o(`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),f=c(),S=n("h2"),me=o("Getting Started"),X=c(),w=n("p"),ve=o(`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn\u2019t work, create a `),A=n("code"),ye=o(".htaccess"),_e=o(" file with the line "),F=n("code"),Se=o("Options +Includes"),we=o(` in it, and place the file in your site\u2019s main top-level directory.
Check your web host\u2019s documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),ee=c(),b=n("p"),ge=o(`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),H=n("a"),Ie=o("Wikipedia page"),be=o("."),te=c(),E=n("p"),Ee=o(`You can test SSI by creating a simple HTML page and putting the following line
into the `),j=n("code"),Te=o("<body>"),ke=o(" of the document:"),ae=c(),x=n("pre"),oe=c(),O=n("p"),Ce=o(`When viewed in your browser, it should display the URL of the page you are
viewing.`),le=c(),R=n("p"),xe=o(`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign (\u2019#\u2019). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),ie=c(),W=n("p"),Pe=o("The syntax for SSI is simple:"),ne=c(),P=n("pre"),re=c(),T=n("p"),Me=o(`If you are used to Perl, this is much like saying:
`),z=n("code"),Le=o("directive({ parameter => value })"),De=o(`. Most directives have only one parameter, but
some have two.`),se=c(),M=n("h2"),He=o("The Setup"),he=c(),G=n("p"),Oe=o("In order to create a page that is easily maintainable, you need to do three things:"),de=c(),g=n("ul"),$=n("li"),Z=n("strong"),Re=o("Create a template"),We=o(`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined\xA0 for my web site (those listed previously) in
this tutorial.`),Ge=c(),k=n("li"),K=n("strong"),$e=o("\u201CChunk\u201D the page"),Ue=o(`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),Y=n("code"),Be=o("<?xml..?>"),Ne=o(` to the tag that represents the content area into a file
called \u201Cinclude/header.html\u201D. We will use SSI to reasseble the page
later.`),Ae=c(),m=n("li"),q=n("strong"),Fe=o("Create the SSI"),je=o(`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),Q=n("code"),ze=o('<!--#include virtual="/include/header.html"-->'),Ze=o(" \u2026[content goes here]\u2026"),V=n("code"),Ke=o('<!--#include virtual="/include/footer.html"-->'),Ye=o(`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),L=n("a"),qe=o("http://your.server.net/include/header.html"),Qe=o(`, you will see the included header
file.)`),ue=c(),U=n("p"),Ve=o("There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),this.h()},l(e){d=r(e,"H2",{id:!0});var i=s(d);v=l(i,"Introduction"),i.forEach(t),y=p(e),_=r(e,"P",{});var et=s(_);u=l(et,`Back in the day, in 2000, I started creating my own Content Management System ,
called SaMS. I created it in Perl , as this was the only server technology
available to me at that time. When I created my DynDNS account and got my own
domain and a stable place to live, I started redesigning my website. SaMS could
have been used, but I had found easier ways to do the same stuff, mainly
Server-Side Includes. In this article, I will explain very briefly how to use
Server-Side includes to create a web site that is easy to maintain.`),et.forEach(t),f=p(e),S=r(e,"H2",{id:!0});var tt=s(S);me=l(tt,"Getting Started"),tt.forEach(t),X=p(e),w=r(e,"P",{});var B=s(w);ve=l(B,`The only thing you will need is a web server with SSI enabled. If you have SSI
available, but it doesn\u2019t work, create a `),A=r(B,"CODE",{});var at=s(A);ye=l(at,".htaccess"),at.forEach(t),_e=l(B," file with the line "),F=r(B,"CODE",{});var ot=s(F);Se=l(ot,"Options +Includes"),ot.forEach(t),we=l(B,` in it, and place the file in your site\u2019s main top-level directory.
Check your web host\u2019s documentation for the specifics. There are many free web
hosting services with SSI enabled. Google for them!`),B.forEach(t),ee=p(e),b=r(e,"P",{});var ce=s(b);ge=l(ce,`This tutorial assumes you know HTML and how to edit/upload files to your server.
For a great reference on Server-Side includes, check the `),H=r(ce,"A",{href:!0});var lt=s(H);Ie=l(lt,"Wikipedia page"),lt.forEach(t),be=l(ce,"."),ce.forEach(t),te=p(e),E=r(e,"P",{});var pe=s(E);Ee=l(pe,`You can test SSI by creating a simple HTML page and putting the following line
into the `),j=r(pe,"CODE",{});var it=s(j);Te=l(it,"<body>"),it.forEach(t),ke=l(pe," of the document:"),pe.forEach(t),ae=p(e),x=r(e,"PRE",{class:!0});var Tt=s(x);Tt.forEach(t),oe=p(e),O=r(e,"P",{});var nt=s(O);Ce=l(nt,`When viewed in your browser, it should display the URL of the page you are
viewing.`),nt.forEach(t),le=p(e),R=r(e,"P",{});var rt=s(R);xe=l(rt,`Note how the SSI tag looks like a simple HTML comment. They are, with one
exception: they must begin with a pound sign (\u2019#\u2019). This is very handy for
testing, as you can just remove the pound sign to turn off the directive, but
still keep the code.`),rt.forEach(t),ie=p(e),W=r(e,"P",{});var st=s(W);Pe=l(st,"The syntax for SSI is simple:"),st.forEach(t),ne=p(e),P=r(e,"PRE",{class:!0});var kt=s(P);kt.forEach(t),re=p(e),T=r(e,"P",{});var fe=s(T);Me=l(fe,`If you are used to Perl, this is much like saying:
`),z=r(fe,"CODE",{});var ht=s(z);Le=l(ht,"directive({ parameter => value })"),ht.forEach(t),De=l(fe,`. Most directives have only one parameter, but
some have two.`),fe.forEach(t),se=p(e),M=r(e,"H2",{id:!0});var dt=s(M);He=l(dt,"The Setup"),dt.forEach(t),he=p(e),G=r(e,"P",{});var ut=s(G);Oe=l(ut,"In order to create a page that is easily maintainable, you need to do three things:"),ut.forEach(t),de=p(e),g=r(e,"UL",{});var N=s(g);$=r(N,"LI",{});var Je=s($);Z=r(Je,"STRONG",{});var ct=s(Z);Re=l(ct,"Create a template"),ct.forEach(t),We=l(Je,`. Create a page that will represent the
layout of all thpages on your site. I recommend creating several areas: a
header, a footer, a navigation section, and a toolbar or news section. I will
be using the areas I defined\xA0 for my web site (those listed previously) in
this tutorial.`),Je.forEach(t),Ge=p(N),k=r(N,"LI",{});var J=s(k);K=r(J,"STRONG",{});var pt=s(K);$e=l(pt,"\u201CChunk\u201D the page"),pt.forEach(t),Ue=l(J,`. Break up the page into the sections, and
put the related html into separate files. For instance, I put all the html
from `),Y=r(J,"CODE",{});var ft=s(Y);Be=l(ft,"<?xml..?>"),ft.forEach(t),Ne=l(J,` to the tag that represents the content area into a file
called \u201Cinclude/header.html\u201D. We will use SSI to reasseble the page
later.`),J.forEach(t),Ae=p(N),m=r(N,"LI",{});var I=s(m);q=r(I,"STRONG",{});var mt=s(q);Fe=l(mt,"Create the SSI"),mt.forEach(t),je=l(I,`. In each of your main content pages, place the
SSI directives into the top of the page, like so: `),Q=r(I,"CODE",{});var vt=s(Q);ze=l(vt,'<!--#include virtual="/include/header.html"-->'),vt.forEach(t),Ze=l(I," \u2026[content goes here]\u2026"),V=r(I,"CODE",{});var yt=s(V);Ke=l(yt,'<!--#include virtual="/include/footer.html"-->'),yt.forEach(t),Ye=l(I,`. The include directive includes the page
named. The virtual parameter means to use the URI to include the file, instead
of the absolute path on the server.( If you go to
`),L=r(I,"A",{href:!0,rel:!0});var _t=s(L);qe=l(_t,"http://your.server.net/include/header.html"),_t.forEach(t),Qe=l(I,`, you will see the included header
file.)`),I.forEach(t),N.forEach(t),ue=p(e),U=r(e,"P",{});var St=s(U);Ve=l(St,"There we are! A very simple SSI-enabled site. Keep reading for more of what you can do with this."),St.forEach(t),this.h()},h(){C(d,"id","introduction"),C(S,"id","getting-started"),C(H,"href","http://en.wikipedia.org/wiki/Server_Side_Includes"),C(x,"class","language-html"),C(P,"class","language-html"),C(M,"id","the-setup"),C(L,"href","http://your.server.net/include/header.html"),C(L,"rel","nofollow")},m(e,i){h(e,d,i),a(d,v),h(e,y,i),h(e,_,i),a(_,u),h(e,f,i),h(e,S,i),a(S,me),h(e,X,i),h(e,w,i),a(w,ve),a(w,A),a(A,ye),a(w,_e),a(w,F),a(F,Se),a(w,we),h(e,ee,i),h(e,b,i),a(b,ge),a(b,H),a(H,Ie),a(b,be),h(e,te,i),h(e,E,i),a(E,Ee),a(E,j),a(j,Te),a(E,ke),h(e,ae,i),h(e,x,i),x.innerHTML=bt,h(e,oe,i),h(e,O,i),a(O,Ce),h(e,le,i),h(e,R,i),a(R,xe),h(e,ie,i),h(e,W,i),a(W,Pe),h(e,ne,i),h(e,P,i),P.innerHTML=Et,h(e,re,i),h(e,T,i),a(T,Me),a(T,z),a(z,Le),a(T,De),h(e,se,i),h(e,M,i),a(M,He),h(e,he,i),h(e,G,i),a(G,Oe),h(e,de,i),h(e,g,i),a(g,$),a($,Z),a(Z,Re),a($,We),a(g,Ge),a(g,k),a(k,K),a(K,$e),a(k,Ue),a(k,Y),a(Y,Be),a(k,Ne),a(g,Ae),a(g,m),a(m,q),a(q,Fe),a(m,je),a(m,Q),a(Q,ze),a(m,Ze),a(m,V),a(V,Ke),a(m,Ye),a(m,L),a(L,qe),a(m,Qe),h(e,ue,i),h(e,U,i),a(U,Ve)},p:Gt,d(e){e&&t(d),e&&t(y),e&&t(_),e&&t(f),e&&t(S),e&&t(X),e&&t(w),e&&t(ee),e&&t(b),e&&t(te),e&&t(E),e&&t(ae),e&&t(x),e&&t(oe),e&&t(O),e&&t(le),e&&t(R),e&&t(ie),e&&t(W),e&&t(ne),e&&t(P),e&&t(re),e&&t(T),e&&t(se),e&&t(M),e&&t(he),e&&t(G),e&&t(de),e&&t(g),e&&t(ue),e&&t(U)}}}function Bt(D){let d,v;const y=[D[0],It];let _={$$slots:{default:[Ut]},$$scope:{ctx:D}};for(let u=0;u<y.length;u+=1)_=Xe(_,y[u]);return d=new $t({props:_}),{c(){Mt(d.$$.fragment)},l(u){Lt(d.$$.fragment,u)},m(u,f){Dt(d,u,f),v=!0},p(u,[f]){const S=f&1?Ht(y,[f&1&&wt(u[0]),f&0&&wt(It)]):{};f&2&&(S.$$scope={dirty:f,ctx:u}),d.$set(S)},i(u){v||(Ot(d.$$.fragment,u),v=!0)},o(u){Rt(d.$$.fragment,u),v=!1},d(u){Wt(d,u)}}}const It={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"How To Build a Dynamic Web Site With Simple Server Technologies.",description:"Using SSI to build a more dynamic website",excerpt:"In order to create a page that is easily maintainable, you need to do three",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["web-development"],tags:["SSI"],created_at:"2009-05-29T09:57:57.000Z",updated_at:"2009-05-29T09:57:57.000Z",meta:[{property:"og:image",content:"/images/GSoC-logo-horizontal-800.png"},{name:"twitter:image",content:"/images/GSoC-logo-horizontal-800.png"}],lastmod:"2022-06-13T01:53:59.216Z"};function Nt(D,d,v){return D.$$set=y=>{v(0,d=Xe(Xe({},d),gt(y)))},d=gt(d),[d]}class jt extends Ct{constructor(d){super(),xt(this,d,Nt,Bt,Pt,{})}}export{jt as default,It as metadata};
