import{S as lo,i as no,s as io,D as xt,x as ao,y as so,z as ro,A as uo,B as eo,r as co,p as fo,C as ho,L as to,e as l,t as a,k as d,c as n,a as i,h as s,d as t,m as f,b as R,g as u,I as o,n as po}from"../../chunks/index-f0cd6aaa.js";import{P as mo}from"../../chunks/post-d11a0746.js";import"../../chunks/stores-707f9fa0.js";import"../../chunks/settings-69239d06.js";function go(D){let c,g,y,v,h,m,T,M,Ge,ue,w,$,J,Ae,Oe,Le,P,U,Se,qe,Ne,z,Q,De,Me,ce,H,$e,de,G,Pe,fe,b,ze,A,He,Fe,he,O,We,pe,k,Ye,L,je,Ze,me,_,B,V,Je,Ue,K,X,Qe,Be,ee,te,Ve,ge,E,Ke,oe,Xe,et,ye,I,tt,le,ot,lt,ve,C,nt,ne,it,at,we,S,st,_e,F,rt,be,q,ut,ke,p,N,ct,ie,dt,ft,ht,W,pt,ae,mt,gt,se,yt,vt,Y,wt,re,_t;return{c(){c=l("p"),g=a(`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit.\xA0In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),y=d(),v=l("p"),h=l("strong"),m=a("NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),T=d(),M=l("p"),Ge=a("Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),ue=d(),w=l("ul"),$=l("li"),J=l("strong"),Ae=a("Single-Click"),Oe=a(": Move the editing cursor to the mouse cursor\u2019s location"),Le=d(),P=l("li"),U=l("strong"),Se=a("Double-Click"),qe=a(": Select the word that is under the mouse cursor"),Ne=d(),z=l("li"),Q=l("strong"),De=a("Triple-Click"),Me=a(": Select the entire line that is under the mouse cursor"),ce=d(),H=l("p"),$e=a(`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression (\u201Cregex\u201D for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),de=d(),G=l("h2"),Pe=a("I Gotta Have It!"),fe=d(),b=l("p"),ze=a(`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro\u2019s repository or already
installed it.\xA0\xA0If you don\u2019t have it already, you can pick it up from
`),A=l("a"),He=a("the google code repo"),Fe=a(`, and it doesn\u2019t require root
access, so setup should be really simple, just follow the directions.`),he=d(),O=l("h2"),We=a("You mentioned Ruby on Rails?"),pe=d(),k=l("p"),Ye=a(`Yes\u2026 yes I did. \xA0You can find out more about Ruby words, constants, and other
things
`),L=l("a"),je=a("here"),Ze=a(`.
Ruby words are pretty simple: they:`),me=d(),_=l("ol"),B=l("li"),V=l("strong"),Je=a("can begin with a single $ sign"),Ue=d(),K=l("li"),X=l("strong"),Qe=a("can begin with a single or double @ sign, a"),Be=d(),ee=l("li"),te=l("strong"),Ve=a("can contain any letter a-z, case insensitive"),ge=d(),E=l("p"),Ke=a(`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),oe=l("strong"),Xe=a("can contain two colons in a row"),et=a("."),ye=d(),I=l("p"),tt=a(`To put all that in simple regular
expressions:\xA0`),le=l("code"),ot=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),lt=a(`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
\u201CAdd\u201D button and entering a name for it. I suggest using \u201CRuby Word\u201D for the
name.`),ve=d(),C=l("p"),nt=a(`I also find myself moving ruby strings around a lot. Wouldn\u2019t it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression:\xA0`),ne=l("code"),it=a(`(['"]).*?\\1`),at=a(`. Make sure to check the \u2018M\u2019 flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The \u2018\\1\u2019 means to
match the value from the first parenthetical match, so the quotes will line up
properly. The \u2019.*?\u2019 means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),we=d(),S=l("h2"),st=a("Come Together"),_e=d(),F=l("p"),rt=a(`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),be=d(),q=l("h4"),ut=a("Selection Rules"),ke=d(),p=l("ul"),N=l("li"),ct=a("Ruby Word:\xA0"),ie=l("code"),dt=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),ft=a(" \xA0 \xA0(Flags: None)"),ht=d(),W=l("li"),pt=a("Full Quote:\xA0"),ae=l("code"),mt=a(`(['"]).*?\\1 (Flags: M)`),gt=d(),se=l("li"),yt=a("Single-Line Quote \xA0(Flags: None)"),vt=d(),Y=l("li"),wt=a("Haml Word:\xA0"),re=l("code"),_t=a("(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),this.h()},l(e){c=n(e,"P",{});var r=i(c);g=s(r,`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit.\xA0In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),r.forEach(t),y=f(e),v=n(e,"P",{});var Rt=i(v);h=n(Rt,"STRONG",{});var Tt=i(h);m=s(Tt,"NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),Tt.forEach(t),Rt.forEach(t),T=f(e),M=n(e,"P",{});var Gt=i(M);Ge=s(Gt,"Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),Gt.forEach(t),ue=f(e),w=n(e,"UL",{});var j=i(w);$=n(j,"LI",{});var bt=i($);J=n(bt,"STRONG",{});var At=i(J);Ae=s(At,"Single-Click"),At.forEach(t),Oe=s(bt,": Move the editing cursor to the mouse cursor\u2019s location"),bt.forEach(t),Le=f(j),P=n(j,"LI",{});var kt=i(P);U=n(kt,"STRONG",{});var Ot=i(U);Se=s(Ot,"Double-Click"),Ot.forEach(t),qe=s(kt,": Select the word that is under the mouse cursor"),kt.forEach(t),Ne=f(j),z=n(j,"LI",{});var Et=i(z);Q=n(Et,"STRONG",{});var Lt=i(Q);De=s(Lt,"Triple-Click"),Lt.forEach(t),Me=s(Et,": Select the entire line that is under the mouse cursor"),Et.forEach(t),j.forEach(t),ce=f(e),H=n(e,"P",{});var St=i(H);$e=s(St,`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression (\u201Cregex\u201D for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),St.forEach(t),de=f(e),G=n(e,"H2",{id:!0});var qt=i(G);Pe=s(qt,"I Gotta Have It!"),qt.forEach(t),fe=f(e),b=n(e,"P",{});var Ee=i(b);ze=s(Ee,`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro\u2019s repository or already
installed it.\xA0\xA0If you don\u2019t have it already, you can pick it up from
`),A=n(Ee,"A",{href:!0,rel:!0});var Nt=i(A);He=s(Nt,"the google code repo"),Nt.forEach(t),Fe=s(Ee,`, and it doesn\u2019t require root
access, so setup should be really simple, just follow the directions.`),Ee.forEach(t),he=f(e),O=n(e,"H2",{id:!0});var Dt=i(O);We=s(Dt,"You mentioned Ruby on Rails?"),Dt.forEach(t),pe=f(e),k=n(e,"P",{});var Ie=i(k);Ye=s(Ie,`Yes\u2026 yes I did. \xA0You can find out more about Ruby words, constants, and other
things
`),L=n(Ie,"A",{href:!0,rel:!0});var Mt=i(L);je=s(Mt,"here"),Mt.forEach(t),Ze=s(Ie,`.
Ruby words are pretty simple: they:`),Ie.forEach(t),me=f(e),_=n(e,"OL",{});var Z=i(_);B=n(Z,"LI",{});var $t=i(B);V=n($t,"STRONG",{});var Pt=i(V);Je=s(Pt,"can begin with a single $ sign"),Pt.forEach(t),$t.forEach(t),Ue=f(Z),K=n(Z,"LI",{});var zt=i(K);X=n(zt,"STRONG",{});var Ht=i(X);Qe=s(Ht,"can begin with a single or double @ sign, a"),Ht.forEach(t),zt.forEach(t),Be=f(Z),ee=n(Z,"LI",{});var Ft=i(ee);te=n(Ft,"STRONG",{});var Wt=i(te);Ve=s(Wt,"can contain any letter a-z, case insensitive"),Wt.forEach(t),Ft.forEach(t),Z.forEach(t),ge=f(e),E=n(e,"P",{});var Ce=i(E);Ke=s(Ce,`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),oe=n(Ce,"STRONG",{});var Yt=i(oe);Xe=s(Yt,"can contain two colons in a row"),Yt.forEach(t),et=s(Ce,"."),Ce.forEach(t),ye=f(e),I=n(e,"P",{});var xe=i(I);tt=s(xe,`To put all that in simple regular
expressions:\xA0`),le=n(xe,"CODE",{});var jt=i(le);ot=s(jt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),jt.forEach(t),lt=s(xe,`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
\u201CAdd\u201D button and entering a name for it. I suggest using \u201CRuby Word\u201D for the
name.`),xe.forEach(t),ve=f(e),C=n(e,"P",{});var Re=i(C);nt=s(Re,`I also find myself moving ruby strings around a lot. Wouldn\u2019t it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression:\xA0`),ne=n(Re,"CODE",{});var Zt=i(ne);it=s(Zt,`(['"]).*?\\1`),Zt.forEach(t),at=s(Re,`. Make sure to check the \u2018M\u2019 flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The \u2018\\1\u2019 means to
match the value from the first parenthetical match, so the quotes will line up
properly. The \u2019.*?\u2019 means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),Re.forEach(t),we=f(e),S=n(e,"H2",{id:!0});var Jt=i(S);st=s(Jt,"Come Together"),Jt.forEach(t),_e=f(e),F=n(e,"P",{});var Ut=i(F);rt=s(Ut,`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),Ut.forEach(t),be=f(e),q=n(e,"H4",{id:!0});var Qt=i(q);ut=s(Qt,"Selection Rules"),Qt.forEach(t),ke=f(e),p=n(e,"UL",{});var x=i(p);N=n(x,"LI",{});var Te=i(N);ct=s(Te,"Ruby Word:\xA0"),ie=n(Te,"CODE",{});var Bt=i(ie);dt=s(Bt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),Bt.forEach(t),ft=s(Te," \xA0 \xA0(Flags: None)"),Te.forEach(t),ht=f(x),W=n(x,"LI",{});var It=i(W);pt=s(It,"Full Quote:\xA0"),ae=n(It,"CODE",{});var Vt=i(ae);mt=s(Vt,`(['"]).*?\\1 (Flags: M)`),Vt.forEach(t),It.forEach(t),gt=f(x),se=n(x,"LI",{});var Kt=i(se);yt=s(Kt,"Single-Line Quote \xA0(Flags: None)"),Kt.forEach(t),vt=f(x),Y=n(x,"LI",{});var Ct=i(Y);wt=s(Ct,"Haml Word:\xA0"),re=n(Ct,"CODE",{});var Xt=i(re);_t=s(Xt,"(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),Xt.forEach(t),Ct.forEach(t),x.forEach(t),this.h()},h(){R(G,"id","i-gotta-have-it"),R(A,"href","http://code.google.com/p/gedit-click-config/"),R(A,"rel","nofollow"),R(O,"id","you-mentioned-ruby-on-rails"),R(L,"href","http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Variables_and_Constants"),R(L,"rel","nofollow"),R(S,"id","come-together"),R(q,"id","selection-rules")},m(e,r){u(e,c,r),o(c,g),u(e,y,r),u(e,v,r),o(v,h),o(h,m),u(e,T,r),u(e,M,r),o(M,Ge),u(e,ue,r),u(e,w,r),o(w,$),o($,J),o(J,Ae),o($,Oe),o(w,Le),o(w,P),o(P,U),o(U,Se),o(P,qe),o(w,Ne),o(w,z),o(z,Q),o(Q,De),o(z,Me),u(e,ce,r),u(e,H,r),o(H,$e),u(e,de,r),u(e,G,r),o(G,Pe),u(e,fe,r),u(e,b,r),o(b,ze),o(b,A),o(A,He),o(b,Fe),u(e,he,r),u(e,O,r),o(O,We),u(e,pe,r),u(e,k,r),o(k,Ye),o(k,L),o(L,je),o(k,Ze),u(e,me,r),u(e,_,r),o(_,B),o(B,V),o(V,Je),o(_,Ue),o(_,K),o(K,X),o(X,Qe),o(_,Be),o(_,ee),o(ee,te),o(te,Ve),u(e,ge,r),u(e,E,r),o(E,Ke),o(E,oe),o(oe,Xe),o(E,et),u(e,ye,r),u(e,I,r),o(I,tt),o(I,le),o(le,ot),o(I,lt),u(e,ve,r),u(e,C,r),o(C,nt),o(C,ne),o(ne,it),o(C,at),u(e,we,r),u(e,S,r),o(S,st),u(e,_e,r),u(e,F,r),o(F,rt),u(e,be,r),u(e,q,r),o(q,ut),u(e,ke,r),u(e,p,r),o(p,N),o(N,ct),o(N,ie),o(ie,dt),o(N,ft),o(p,ht),o(p,W),o(W,pt),o(W,ae),o(ae,mt),o(p,gt),o(p,se),o(se,yt),o(p,vt),o(p,Y),o(Y,wt),o(Y,re),o(re,_t)},p:po,d(e){e&&t(c),e&&t(y),e&&t(v),e&&t(T),e&&t(M),e&&t(ue),e&&t(w),e&&t(ce),e&&t(H),e&&t(de),e&&t(G),e&&t(fe),e&&t(b),e&&t(he),e&&t(O),e&&t(pe),e&&t(k),e&&t(me),e&&t(_),e&&t(ge),e&&t(E),e&&t(ye),e&&t(I),e&&t(ve),e&&t(C),e&&t(we),e&&t(S),e&&t(_e),e&&t(F),e&&t(be),e&&t(q),e&&t(ke),e&&t(p)}}}function yo(D){let c,g;const y=[D[0],oo];let v={$$slots:{default:[go]},$$scope:{ctx:D}};for(let h=0;h<y.length;h+=1)v=xt(v,y[h]);return c=new mo({props:v}),{c(){ao(c.$$.fragment)},l(h){so(c.$$.fragment,h)},m(h,m){ro(c,h,m),g=!0},p(h,[m]){const T=m&1?uo(y,[m&1&&eo(h[0]),m&0&&eo(oo)]):{};m&2&&(T.$$scope={dirty:m,ctx:h}),c.$set(T)},i(h){g||(co(c.$$.fragment,h),g=!0)},o(h){fo(c.$$.fragment,h),g=!1},d(h){ho(c,h)}}}const oo={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Simple Rails Development Part I: Gedit Click Config",description:"Configuring GEdit Click Config Plugin",excerpt:"I installed a few plugins, but only one of them took me by surprise\\: Click Config.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails","IDE"],created_at:"2012-08-30T23:29:00.000Z",updated_at:"2012-08-30T23:29:00.000Z",readingTime:{text:"4 min read",minutes:3.52,time:211200,words:704},preview:`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development.`,previewHtml:"<p>After evaluating all editors and IDEs I could ahold of for Ruby On Rails development in Linux, I decided none were really up to my expectations. I was really looking for something as powerful for Rails development as Eclipse is for Java development. ...</p>",textContent:`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them...`};function vo(D,c,g){return D.$$set=y=>{g(0,c=xt(xt({},c),to(y)))},c=to(c),[c]}class Eo extends lo{constructor(c){super(),no(this,c,vo,yo,io,{})}}export{Eo as default,oo as metadata};
