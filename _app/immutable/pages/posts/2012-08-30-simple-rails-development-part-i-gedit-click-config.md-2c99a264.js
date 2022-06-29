import{S as io,i as no,s as lo,D as xt,x as ao,y as so,z as ro,A as uo,B as eo,r as co,p as ho,C as fo,X as to,e as i,t as a,k as h,c as n,a as l,h as s,d as t,m as f,b as G,g as u,F as o,n as po}from"../../chunks/index-1458cd2c.js";import{P as mo}from"../../chunks/post-c3a2329e.js";function go($){let c,g,y,v,d,m,T,M,Re,ue,w,P,Q,Ae,Se,Oe,D,U,qe,Le,Ne,z,B,$e,Me,ce,F,Pe,he,R,De,fe,b,ze,A,Fe,He,de,S,We,pe,k,Ye,O,je,Ze,me,_,J,V,Qe,Ue,X,K,Be,Je,ee,te,Ve,ge,E,Xe,oe,Ke,et,ye,I,tt,ie,ot,it,ve,C,nt,ne,lt,at,we,q,st,_e,H,rt,be,L,ut,ke,p,N,ct,le,ht,ft,dt,W,pt,ae,mt,gt,se,yt,vt,Y,wt,re,_t;return{c(){c=i("p"),g=a(`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit.\xA0In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),y=h(),v=i("p"),d=i("strong"),m=a("NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),T=h(),M=i("p"),Re=a("Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),ue=h(),w=i("ul"),P=i("li"),Q=i("strong"),Ae=a("Single-Click"),Se=a(": Move the editing cursor to the mouse cursor\u2019s location"),Oe=h(),D=i("li"),U=i("strong"),qe=a("Double-Click"),Le=a(": Select the word that is under the mouse cursor"),Ne=h(),z=i("li"),B=i("strong"),$e=a("Triple-Click"),Me=a(": Select the entire line that is under the mouse cursor"),ce=h(),F=i("p"),Pe=a(`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression (\u201Cregex\u201D for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),he=h(),R=i("h2"),De=a("I Gotta Have It!"),fe=h(),b=i("p"),ze=a(`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro\u2019s repository or already
installed it.\xA0\xA0If you don\u2019t have it already, you can pick it up from
`),A=i("a"),Fe=a("the google code repo"),He=a(`, and it doesn\u2019t require root
access, so setup should be really simple, just follow the directions.`),de=h(),S=i("h2"),We=a("You mentioned Ruby on Rails?"),pe=h(),k=i("p"),Ye=a(`Yes\u2026 yes I did. \xA0You can find out more about Ruby words, constants, and other
things
`),O=i("a"),je=a("here"),Ze=a(`.
Ruby words are pretty simple: they:`),me=h(),_=i("ol"),J=i("li"),V=i("strong"),Qe=a("can begin with a single $ sign"),Ue=h(),X=i("li"),K=i("strong"),Be=a("can begin with a single or double @ sign, a"),Je=h(),ee=i("li"),te=i("strong"),Ve=a("can contain any letter a-z, case insensitive"),ge=h(),E=i("p"),Xe=a(`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),oe=i("strong"),Ke=a("can contain two colons in a row"),et=a("."),ye=h(),I=i("p"),tt=a(`To put all that in simple regular
expressions:\xA0`),ie=i("code"),ot=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),it=a(`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
\u201CAdd\u201D button and entering a name for it. I suggest using \u201CRuby Word\u201D for the
name.`),ve=h(),C=i("p"),nt=a(`I also find myself moving ruby strings around a lot. Wouldn\u2019t it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression:\xA0`),ne=i("code"),lt=a(`(['"]).*?\\1`),at=a(`. Make sure to check the \u2018M\u2019 flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The \u2018\\1\u2019 means to
match the value from the first parenthetical match, so the quotes will line up
properly. The \u2019.*?\u2019 means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),we=h(),q=i("h2"),st=a("Come Together"),_e=h(),H=i("p"),rt=a(`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),be=h(),L=i("h4"),ut=a("Selection Rules"),ke=h(),p=i("ul"),N=i("li"),ct=a("Ruby Word:\xA0"),le=i("code"),ht=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),ft=a(" \xA0 \xA0(Flags: None)"),dt=h(),W=i("li"),pt=a("Full Quote:\xA0"),ae=i("code"),mt=a(`(['"]).*?\\1 (Flags: M)`),gt=h(),se=i("li"),yt=a("Single-Line Quote \xA0(Flags: None)"),vt=h(),Y=i("li"),wt=a("Haml Word:\xA0"),re=i("code"),_t=a("(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),this.h()},l(e){c=n(e,"P",{});var r=l(c);g=s(r,`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit.\xA0In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),r.forEach(t),y=f(e),v=n(e,"P",{});var Gt=l(v);d=n(Gt,"STRONG",{});var Tt=l(d);m=s(Tt,"NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),Tt.forEach(t),Gt.forEach(t),T=f(e),M=n(e,"P",{});var Rt=l(M);Re=s(Rt,"Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),Rt.forEach(t),ue=f(e),w=n(e,"UL",{});var j=l(w);P=n(j,"LI",{});var bt=l(P);Q=n(bt,"STRONG",{});var At=l(Q);Ae=s(At,"Single-Click"),At.forEach(t),Se=s(bt,": Move the editing cursor to the mouse cursor\u2019s location"),bt.forEach(t),Oe=f(j),D=n(j,"LI",{});var kt=l(D);U=n(kt,"STRONG",{});var St=l(U);qe=s(St,"Double-Click"),St.forEach(t),Le=s(kt,": Select the word that is under the mouse cursor"),kt.forEach(t),Ne=f(j),z=n(j,"LI",{});var Et=l(z);B=n(Et,"STRONG",{});var Ot=l(B);$e=s(Ot,"Triple-Click"),Ot.forEach(t),Me=s(Et,": Select the entire line that is under the mouse cursor"),Et.forEach(t),j.forEach(t),ce=f(e),F=n(e,"P",{});var qt=l(F);Pe=s(qt,`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression (\u201Cregex\u201D for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),qt.forEach(t),he=f(e),R=n(e,"H2",{id:!0});var Lt=l(R);De=s(Lt,"I Gotta Have It!"),Lt.forEach(t),fe=f(e),b=n(e,"P",{});var Ee=l(b);ze=s(Ee,`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro\u2019s repository or already
installed it.\xA0\xA0If you don\u2019t have it already, you can pick it up from
`),A=n(Ee,"A",{href:!0,rel:!0});var Nt=l(A);Fe=s(Nt,"the google code repo"),Nt.forEach(t),He=s(Ee,`, and it doesn\u2019t require root
access, so setup should be really simple, just follow the directions.`),Ee.forEach(t),de=f(e),S=n(e,"H2",{id:!0});var $t=l(S);We=s($t,"You mentioned Ruby on Rails?"),$t.forEach(t),pe=f(e),k=n(e,"P",{});var Ie=l(k);Ye=s(Ie,`Yes\u2026 yes I did. \xA0You can find out more about Ruby words, constants, and other
things
`),O=n(Ie,"A",{href:!0,rel:!0});var Mt=l(O);je=s(Mt,"here"),Mt.forEach(t),Ze=s(Ie,`.
Ruby words are pretty simple: they:`),Ie.forEach(t),me=f(e),_=n(e,"OL",{});var Z=l(_);J=n(Z,"LI",{});var Pt=l(J);V=n(Pt,"STRONG",{});var Dt=l(V);Qe=s(Dt,"can begin with a single $ sign"),Dt.forEach(t),Pt.forEach(t),Ue=f(Z),X=n(Z,"LI",{});var zt=l(X);K=n(zt,"STRONG",{});var Ft=l(K);Be=s(Ft,"can begin with a single or double @ sign, a"),Ft.forEach(t),zt.forEach(t),Je=f(Z),ee=n(Z,"LI",{});var Ht=l(ee);te=n(Ht,"STRONG",{});var Wt=l(te);Ve=s(Wt,"can contain any letter a-z, case insensitive"),Wt.forEach(t),Ht.forEach(t),Z.forEach(t),ge=f(e),E=n(e,"P",{});var Ce=l(E);Xe=s(Ce,`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),oe=n(Ce,"STRONG",{});var Yt=l(oe);Ke=s(Yt,"can contain two colons in a row"),Yt.forEach(t),et=s(Ce,"."),Ce.forEach(t),ye=f(e),I=n(e,"P",{});var xe=l(I);tt=s(xe,`To put all that in simple regular
expressions:\xA0`),ie=n(xe,"CODE",{});var jt=l(ie);ot=s(jt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),jt.forEach(t),it=s(xe,`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
\u201CAdd\u201D button and entering a name for it. I suggest using \u201CRuby Word\u201D for the
name.`),xe.forEach(t),ve=f(e),C=n(e,"P",{});var Ge=l(C);nt=s(Ge,`I also find myself moving ruby strings around a lot. Wouldn\u2019t it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression:\xA0`),ne=n(Ge,"CODE",{});var Zt=l(ne);lt=s(Zt,`(['"]).*?\\1`),Zt.forEach(t),at=s(Ge,`. Make sure to check the \u2018M\u2019 flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The \u2018\\1\u2019 means to
match the value from the first parenthetical match, so the quotes will line up
properly. The \u2019.*?\u2019 means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),Ge.forEach(t),we=f(e),q=n(e,"H2",{id:!0});var Qt=l(q);st=s(Qt,"Come Together"),Qt.forEach(t),_e=f(e),H=n(e,"P",{});var Ut=l(H);rt=s(Ut,`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),Ut.forEach(t),be=f(e),L=n(e,"H4",{id:!0});var Bt=l(L);ut=s(Bt,"Selection Rules"),Bt.forEach(t),ke=f(e),p=n(e,"UL",{});var x=l(p);N=n(x,"LI",{});var Te=l(N);ct=s(Te,"Ruby Word:\xA0"),le=n(Te,"CODE",{});var Jt=l(le);ht=s(Jt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),Jt.forEach(t),ft=s(Te," \xA0 \xA0(Flags: None)"),Te.forEach(t),dt=f(x),W=n(x,"LI",{});var It=l(W);pt=s(It,"Full Quote:\xA0"),ae=n(It,"CODE",{});var Vt=l(ae);mt=s(Vt,`(['"]).*?\\1 (Flags: M)`),Vt.forEach(t),It.forEach(t),gt=f(x),se=n(x,"LI",{});var Xt=l(se);yt=s(Xt,"Single-Line Quote \xA0(Flags: None)"),Xt.forEach(t),vt=f(x),Y=n(x,"LI",{});var Ct=l(Y);wt=s(Ct,"Haml Word:\xA0"),re=n(Ct,"CODE",{});var Kt=l(re);_t=s(Kt,"(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),Kt.forEach(t),Ct.forEach(t),x.forEach(t),this.h()},h(){G(R,"id","i-gotta-have-it"),G(A,"href","http://code.google.com/p/gedit-click-config/"),G(A,"rel","nofollow"),G(S,"id","you-mentioned-ruby-on-rails"),G(O,"href","http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Variables_and_Constants"),G(O,"rel","nofollow"),G(q,"id","come-together"),G(L,"id","selection-rules")},m(e,r){u(e,c,r),o(c,g),u(e,y,r),u(e,v,r),o(v,d),o(d,m),u(e,T,r),u(e,M,r),o(M,Re),u(e,ue,r),u(e,w,r),o(w,P),o(P,Q),o(Q,Ae),o(P,Se),o(w,Oe),o(w,D),o(D,U),o(U,qe),o(D,Le),o(w,Ne),o(w,z),o(z,B),o(B,$e),o(z,Me),u(e,ce,r),u(e,F,r),o(F,Pe),u(e,he,r),u(e,R,r),o(R,De),u(e,fe,r),u(e,b,r),o(b,ze),o(b,A),o(A,Fe),o(b,He),u(e,de,r),u(e,S,r),o(S,We),u(e,pe,r),u(e,k,r),o(k,Ye),o(k,O),o(O,je),o(k,Ze),u(e,me,r),u(e,_,r),o(_,J),o(J,V),o(V,Qe),o(_,Ue),o(_,X),o(X,K),o(K,Be),o(_,Je),o(_,ee),o(ee,te),o(te,Ve),u(e,ge,r),u(e,E,r),o(E,Xe),o(E,oe),o(oe,Ke),o(E,et),u(e,ye,r),u(e,I,r),o(I,tt),o(I,ie),o(ie,ot),o(I,it),u(e,ve,r),u(e,C,r),o(C,nt),o(C,ne),o(ne,lt),o(C,at),u(e,we,r),u(e,q,r),o(q,st),u(e,_e,r),u(e,H,r),o(H,rt),u(e,be,r),u(e,L,r),o(L,ut),u(e,ke,r),u(e,p,r),o(p,N),o(N,ct),o(N,le),o(le,ht),o(N,ft),o(p,dt),o(p,W),o(W,pt),o(W,ae),o(ae,mt),o(p,gt),o(p,se),o(se,yt),o(p,vt),o(p,Y),o(Y,wt),o(Y,re),o(re,_t)},p:po,d(e){e&&t(c),e&&t(y),e&&t(v),e&&t(T),e&&t(M),e&&t(ue),e&&t(w),e&&t(ce),e&&t(F),e&&t(he),e&&t(R),e&&t(fe),e&&t(b),e&&t(de),e&&t(S),e&&t(pe),e&&t(k),e&&t(me),e&&t(_),e&&t(ge),e&&t(E),e&&t(ye),e&&t(I),e&&t(ve),e&&t(C),e&&t(we),e&&t(q),e&&t(_e),e&&t(H),e&&t(be),e&&t(L),e&&t(ke),e&&t(p)}}}function yo($){let c,g;const y=[$[0],oo];let v={$$slots:{default:[go]},$$scope:{ctx:$}};for(let d=0;d<y.length;d+=1)v=xt(v,y[d]);return c=new mo({props:v}),{c(){ao(c.$$.fragment)},l(d){so(c.$$.fragment,d)},m(d,m){ro(c,d,m),g=!0},p(d,[m]){const T=m&1?uo(y,[m&1&&eo(d[0]),m&0&&eo(oo)]):{};m&2&&(T.$$scope={dirty:m,ctx:d}),c.$set(T)},i(d){g||(co(c.$$.fragment,d),g=!0)},o(d){ho(c.$$.fragment,d),g=!1},d(d){fo(c,d)}}}const oo={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Simple Rails Development Part I: Gedit Click Config",description:"Configuring GEdit Click Config Plugin",excerpt:"I installed a few plugins, but only one of them took me by surprise\\: Click Config.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails","IDE"],created_at:"2012-08-30T23:29:00.000Z",updated_at:"2012-08-30T23:29:00.000Z",meta:[{property:"og:image",content:"/images/GSoC-logo-horizontal-800.png"},{name:"twitter:image",content:"/images/GSoC-logo-horizontal-800.png"}]};function vo($,c,g){return $.$$set=y=>{g(0,c=xt(xt({},c),to(y)))},c=to(c),[c]}class bo extends io{constructor(c){super(),no(this,c,vo,yo,lo,{})}}export{bo as default,oo as metadata};
