import{S as qe,i as We,s as Ne,D as Ee,x as ze,y as Je,z as Ke,A as je,B as Ue,r as Oe,p as Re,C as Ze,U as Ve,e as s,t as d,k as u,c as l,a as i,h,d as t,m,b as f,g as P,F as e,n as Qe}from"../../chunks/index-e257a78e.js";import{P as Ye}from"../../chunks/post-11de8cff.js";function Xe(C){let o,w,_,a,r,p,v,z,J,G,K,I,j,O,T,R,b,Z,Q,x,Y,E,X,ee,te,k,ae,A,oe,re,M,ne,se,B,le,S,ie,de,H,he,ce,F,ue,me,U,fe,$,L,pe,q,y,D,we,_e,V,ve;return{c(){o=s("p"),w=d(`During my move from Greensboro, NC to Baltimore, MD, I accidentally threw away
my home server (case of mistaken identity), so I needed to build a new one. This
was more fortuitous than not, as it gave me the opportunity to build a system
which I could use for another decade. I always insist on older hardware, with
the most options for upgrade. So I bought a pretty sweet setup that I can
upgrade a little at a time until socket LGA1155 goes out of style. As of now,
that means a quad-core i7 will run on my machine - not too bad for the next
decade! Here are the complete specs for my machine:`),_=u(),a=s("ul"),r=s("li"),p=d("Motherboard:\xA0"),v=s("a"),z=d("ECS P67H2-A2 Motherboard"),J=u(),G=s("li"),K=d("CPU: "),I=s("a"),j=d("Intel G620 2.6GHz"),O=u(),T=s("li"),R=d("Memory:"),b=s("a"),Z=d("8Gb G.Skill Ripjaw"),Q=u(),x=s("li"),Y=d("Graphics: "),E=s("a"),X=d("2x nVidia 9500 1Gb PCIe"),ee=d(", in a (software) SLI configuration"),te=u(),k=s("li"),ae=d("Power Supply: "),A=s("a"),oe=d("Apevia Java 650W"),re=u(),M=s("li"),ne=d("Hard Drive: [Seagate Barracuda 2Tb SATA 6Gb/s](Seagate Barracuda Green 2TB SATA 6Gb/s 64MB Cache 3.5-Inch Internal)"),se=u(),B=s("li"),le=d("Display: "),S=s("a"),ie=d("ViewSonic 24\u201D Widescreen LCD"),de=u(),H=s("li"),he=d("Total Cost to Me: ~650.00usd"),ce=u(),F=s("li"),ue=d("Total Cost Premade: ~1,400"),me=u(),U=s("li"),fe=d("Savings: ~ 100%"),$=u(),L=s("p"),pe=d(`So my next task, once getting all the required parts and assembling them, was to
create a dual-boot system with Fedora 16 and Windows 7. I wanted to use my new
graphics goodness for CUDA application design and, of course, games. I installed
Windows 7, then Fedora 16 for a normal dual-boot configuration. Then came the
hard part: how to make Fedora switch video drivers based on whther it boots in
VirtualBox or not.`),q=u(),y=s("blockquote"),D=s("h3"),we=d("Update:"),_e=u(),V=s("p"),ve=d(`This article was never really finished. Basically, I used an init script to detect the presence of the virtualbox virtual instructionset,
then loaded the nvidia driver when it wasn\u2019t present. In modern linux distros, like Fedora, there is no need for any of this. Just install
the drivers, and the system will take care of the rest.`),this.h()},l(n){o=l(n,"P",{});var g=i(o);w=h(g,`During my move from Greensboro, NC to Baltimore, MD, I accidentally threw away
my home server (case of mistaken identity), so I needed to build a new one. This
was more fortuitous than not, as it gave me the opportunity to build a system
which I could use for another decade. I always insist on older hardware, with
the most options for upgrade. So I bought a pretty sweet setup that I can
upgrade a little at a time until socket LGA1155 goes out of style. As of now,
that means a quad-core i7 will run on my machine - not too bad for the next
decade! Here are the complete specs for my machine:`),g.forEach(t),_=m(n),a=l(n,"UL",{});var c=i(a);r=l(c,"LI",{});var ge=i(r);p=h(ge,"Motherboard:\xA0"),v=l(ge,"A",{href:!0,rel:!0});var Ae=i(v);z=h(Ae,"ECS P67H2-A2 Motherboard"),Ae.forEach(t),ge.forEach(t),J=m(c),G=l(c,"LI",{});var ye=i(G);K=h(ye,"CPU: "),I=l(ye,"A",{href:!0,rel:!0});var Se=i(I);j=h(Se,"Intel G620 2.6GHz"),Se.forEach(t),ye.forEach(t),O=m(c),T=l(c,"LI",{});var Ie=i(T);R=h(Ie,"Memory:"),b=l(Ie,"A",{href:!0,rel:!0});var Pe=i(b);Z=h(Pe,"8Gb G.Skill Ripjaw"),Pe.forEach(t),Ie.forEach(t),Q=m(c),x=l(c,"LI",{});var W=i(x);Y=h(W,"Graphics: "),E=l(W,"A",{href:!0,rel:!0});var Ce=i(E);X=h(Ce,"2x nVidia 9500 1Gb PCIe"),Ce.forEach(t),ee=h(W,", in a (software) SLI configuration"),W.forEach(t),te=m(c),k=l(c,"LI",{});var be=i(k);ae=h(be,"Power Supply: "),A=l(be,"A",{href:!0,rel:!0});var Ge=i(A);oe=h(Ge,"Apevia Java 650W"),Ge.forEach(t),be.forEach(t),re=m(c),M=l(c,"LI",{});var Te=i(M);ne=h(Te,"Hard Drive: [Seagate Barracuda 2Tb SATA 6Gb/s](Seagate Barracuda Green 2TB SATA 6Gb/s 64MB Cache 3.5-Inch Internal)"),Te.forEach(t),se=m(c),B=l(c,"LI",{});var xe=i(B);le=h(xe,"Display: "),S=l(xe,"A",{href:!0,rel:!0});var ke=i(S);ie=h(ke,"ViewSonic 24\u201D Widescreen LCD"),ke.forEach(t),xe.forEach(t),de=m(c),H=l(c,"LI",{});var Be=i(H);he=h(Be,"Total Cost to Me: ~650.00usd"),Be.forEach(t),ce=m(c),F=l(c,"LI",{});var Le=i(F);ue=h(Le,"Total Cost Premade: ~1,400"),Le.forEach(t),me=m(c),U=l(c,"LI",{});var De=i(U);fe=h(De,"Savings: ~ 100%"),De.forEach(t),c.forEach(t),$=m(n),L=l(n,"P",{});var Me=i(L);pe=h(Me,`So my next task, once getting all the required parts and assembling them, was to
create a dual-boot system with Fedora 16 and Windows 7. I wanted to use my new
graphics goodness for CUDA application design and, of course, games. I installed
Windows 7, then Fedora 16 for a normal dual-boot configuration. Then came the
hard part: how to make Fedora switch video drivers based on whther it boots in
VirtualBox or not.`),Me.forEach(t),q=m(n),y=l(n,"BLOCKQUOTE",{});var N=i(y);D=l(N,"H3",{id:!0});var He=i(D);we=h(He,"Update:"),He.forEach(t),_e=m(N),V=l(N,"P",{});var Fe=i(V);ve=h(Fe,`This article was never really finished. Basically, I used an init script to detect the presence of the virtualbox virtual instructionset,
then loaded the nvidia driver when it wasn\u2019t present. In modern linux distros, like Fedora, there is no need for any of this. Just install
the drivers, and the system will take care of the rest.`),Fe.forEach(t),N.forEach(t),this.h()},h(){f(v,"href","http://www.newegg.com/Product/Product.aspx?Item=N82E16813135283&Tpk=p67h2-a2"),f(v,"rel","nofollow"),f(I,"href","http://www.newegg.com/Product/Product.aspx?Item=N82E16819116399"),f(I,"rel","nofollow"),f(b,"href","http://www.newegg.com/Product/Product.aspx?Item=N82E16820231311"),f(b,"rel","nofollow"),f(E,"href","http://www.newegg.com/Product/Product.aspx?Item=N82E16814162054"),f(E,"rel","nofollow"),f(A,"href","http://www.newegg.com/Product/Product.aspx?Item=N82E16817148041"),f(A,"rel","nofollow"),f(S,"href","http://www.amazon.com/gp/product/B004KCPH84/ref=oh_o01_s00_i00_details"),f(S,"rel","nofollow"),f(D,"id","update")},m(n,g){P(n,o,g),e(o,w),P(n,_,g),P(n,a,g),e(a,r),e(r,p),e(r,v),e(v,z),e(a,J),e(a,G),e(G,K),e(G,I),e(I,j),e(a,O),e(a,T),e(T,R),e(T,b),e(b,Z),e(a,Q),e(a,x),e(x,Y),e(x,E),e(E,X),e(x,ee),e(a,te),e(a,k),e(k,ae),e(k,A),e(A,oe),e(a,re),e(a,M),e(M,ne),e(a,se),e(a,B),e(B,le),e(B,S),e(S,ie),e(a,de),e(a,H),e(H,he),e(a,ce),e(a,F),e(F,ue),e(a,me),e(a,U),e(U,fe),P(n,$,g),P(n,L,g),e(L,pe),P(n,q,g),P(n,y,g),e(y,D),e(D,we),e(y,_e),e(y,V),e(V,ve)},p:Qe,d(n){n&&t(o),n&&t(_),n&&t(a),n&&t($),n&&t(L),n&&t(q),n&&t(y)}}}function et(C){let o,w;const _=[C[0],$e];let a={$$slots:{default:[Xe]},$$scope:{ctx:C}};for(let r=0;r<_.length;r+=1)a=Ee(a,_[r]);return o=new Ye({props:a}),{c(){ze(o.$$.fragment)},l(r){Je(o.$$.fragment,r)},m(r,p){Ke(o,r,p),w=!0},p(r,[p]){const v=p&1?je(_,[p&1&&Ue(r[0]),p&0&&Ue($e)]):{};p&2&&(v.$$scope={dirty:p,ctx:r}),o.$set(v)},i(r){w||(Oe(o.$$.fragment,r),w=!0)},o(r){Re(o.$$.fragment,r),w=!1},d(r){Ze(o,r)}}}const $e={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"How to Keep Your Linux Always-On In A Dual-Boot System",description:"Keeping nVidia loaded across boots",excerpt:"Then came the hard part - how to make Fedora switch video drivers based on whther it boots in VirtualBox or not.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["linux"],tags:["Dual Boot","nVidia","CUDA"],created_at:"2012-02-04T08:10:00.000Z",updated_at:"2020-09-01T01:29:00.000Z",meta:[{property:"og:image",content:"/images/GSoC-logo-horizontal-800.png"},{name:"twitter:image",content:"/images/GSoC-logo-horizontal-800.png"}]};function tt(C,o,w){return C.$$set=_=>{w(0,o=Ee(Ee({},o),Ve(_)))},o=Ve(o),[o]}class rt extends qe{constructor(o){super(),We(this,o,tt,et,Ne,{})}}export{rt as default,$e as metadata};
