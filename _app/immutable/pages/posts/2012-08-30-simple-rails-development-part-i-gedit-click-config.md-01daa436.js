import{S as io,i as lo,s as no,D as xt,x as ao,y as so,z as ro,A as uo,B as eo,r as co,p as ho,C as fo,L as to,e as i,t as a,k as h,c as l,a as n,h as s,d as t,m as f,b as T,g as u,I as o,n as po}from"../../chunks/index-b2db4ebb.js";import{P as mo}from"../../chunks/post-faf59b49.js";function go($){let c,g,y,v,d,m,R,M,Ge,ue,w,P,Q,Ae,Oe,Se,D,U,qe,Le,Ne,z,B,$e,Me,ce,F,Pe,he,G,De,fe,b,ze,A,Fe,He,de,O,We,pe,k,Ye,S,je,Ze,me,_,J,V,Qe,Ue,K,X,Be,Je,ee,te,Ve,ge,E,Ke,oe,Xe,et,ye,I,tt,ie,ot,it,ve,C,lt,le,nt,at,we,q,st,_e,H,rt,be,L,ut,ke,p,N,ct,ne,ht,ft,dt,W,pt,ae,mt,gt,se,yt,vt,Y,wt,re,_t;return{c(){c=i("p"),g=a(`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit.\xA0In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),y=h(),v=i("p"),d=i("strong"),m=a("NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),R=h(),M=i("p"),Ge=a("Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),ue=h(),w=i("ul"),P=i("li"),Q=i("strong"),Ae=a("Single-Click"),Oe=a(": Move the editing cursor to the mouse cursor\u2019s location"),Se=h(),D=i("li"),U=i("strong"),qe=a("Double-Click"),Le=a(": Select the word that is under the mouse cursor"),Ne=h(),z=i("li"),B=i("strong"),$e=a("Triple-Click"),Me=a(": Select the entire line that is under the mouse cursor"),ce=h(),F=i("p"),Pe=a(`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression (\u201Cregex\u201D for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),he=h(),G=i("h2"),De=a("I Gotta Have It!"),fe=h(),b=i("p"),ze=a(`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro\u2019s repository or already
installed it.\xA0\xA0If you don\u2019t have it already, you can pick it up from
`),A=i("a"),Fe=a("the google code repo"),He=a(`, and it doesn\u2019t require root
access, so setup should be really simple, just follow the directions.`),de=h(),O=i("h2"),We=a("You mentioned Ruby on Rails?"),pe=h(),k=i("p"),Ye=a(`Yes\u2026 yes I did. \xA0You can find out more about Ruby words, constants, and other
things
`),S=i("a"),je=a("here"),Ze=a(`.
Ruby words are pretty simple: they:`),me=h(),_=i("ol"),J=i("li"),V=i("strong"),Qe=a("can begin with a single $ sign"),Ue=h(),K=i("li"),X=i("strong"),Be=a("can begin with a single or double @ sign, a"),Je=h(),ee=i("li"),te=i("strong"),Ve=a("can contain any letter a-z, case insensitive"),ge=h(),E=i("p"),Ke=a(`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),oe=i("strong"),Xe=a("can contain two colons in a row"),et=a("."),ye=h(),I=i("p"),tt=a(`To put all that in simple regular
expressions:\xA0`),ie=i("code"),ot=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),it=a(`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
\u201CAdd\u201D button and entering a name for it. I suggest using \u201CRuby Word\u201D for the
name.`),ve=h(),C=i("p"),lt=a(`I also find myself moving ruby strings around a lot. Wouldn\u2019t it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression:\xA0`),le=i("code"),nt=a(`(['"]).*?\\1`),at=a(`. Make sure to check the \u2018M\u2019 flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The \u2018\\1\u2019 means to
match the value from the first parenthetical match, so the quotes will line up
properly. The \u2019.*?\u2019 means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),we=h(),q=i("h2"),st=a("Come Together"),_e=h(),H=i("p"),rt=a(`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),be=h(),L=i("h4"),ut=a("Selection Rules"),ke=h(),p=i("ul"),N=i("li"),ct=a("Ruby Word:\xA0"),ne=i("code"),ht=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),ft=a(" \xA0 \xA0(Flags: None)"),dt=h(),W=i("li"),pt=a("Full Quote:\xA0"),ae=i("code"),mt=a(`(['"]).*?\\1 (Flags: M)`),gt=h(),se=i("li"),yt=a("Single-Line Quote \xA0(Flags: None)"),vt=h(),Y=i("li"),wt=a("Haml Word:\xA0"),re=i("code"),_t=a("(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),this.h()},l(e){c=l(e,"P",{});var r=n(c);g=s(r,`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit.\xA0In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),r.forEach(t),y=f(e),v=l(e,"P",{});var Tt=n(v);d=l(Tt,"STRONG",{});var Rt=n(d);m=s(Rt,"NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),Rt.forEach(t),Tt.forEach(t),R=f(e),M=l(e,"P",{});var Gt=n(M);Ge=s(Gt,"Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),Gt.forEach(t),ue=f(e),w=l(e,"UL",{});var j=n(w);P=l(j,"LI",{});var bt=n(P);Q=l(bt,"STRONG",{});var At=n(Q);Ae=s(At,"Single-Click"),At.forEach(t),Oe=s(bt,": Move the editing cursor to the mouse cursor\u2019s location"),bt.forEach(t),Se=f(j),D=l(j,"LI",{});var kt=n(D);U=l(kt,"STRONG",{});var Ot=n(U);qe=s(Ot,"Double-Click"),Ot.forEach(t),Le=s(kt,": Select the word that is under the mouse cursor"),kt.forEach(t),Ne=f(j),z=l(j,"LI",{});var Et=n(z);B=l(Et,"STRONG",{});var St=n(B);$e=s(St,"Triple-Click"),St.forEach(t),Me=s(Et,": Select the entire line that is under the mouse cursor"),Et.forEach(t),j.forEach(t),ce=f(e),F=l(e,"P",{});var qt=n(F);Pe=s(qt,`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression (\u201Cregex\u201D for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),qt.forEach(t),he=f(e),G=l(e,"H2",{id:!0});var Lt=n(G);De=s(Lt,"I Gotta Have It!"),Lt.forEach(t),fe=f(e),b=l(e,"P",{});var Ee=n(b);ze=s(Ee,`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro\u2019s repository or already
installed it.\xA0\xA0If you don\u2019t have it already, you can pick it up from
`),A=l(Ee,"A",{href:!0,rel:!0});var Nt=n(A);Fe=s(Nt,"the google code repo"),Nt.forEach(t),He=s(Ee,`, and it doesn\u2019t require root
access, so setup should be really simple, just follow the directions.`),Ee.forEach(t),de=f(e),O=l(e,"H2",{id:!0});var $t=n(O);We=s($t,"You mentioned Ruby on Rails?"),$t.forEach(t),pe=f(e),k=l(e,"P",{});var Ie=n(k);Ye=s(Ie,`Yes\u2026 yes I did. \xA0You can find out more about Ruby words, constants, and other
things
`),S=l(Ie,"A",{href:!0,rel:!0});var Mt=n(S);je=s(Mt,"here"),Mt.forEach(t),Ze=s(Ie,`.
Ruby words are pretty simple: they:`),Ie.forEach(t),me=f(e),_=l(e,"OL",{});var Z=n(_);J=l(Z,"LI",{});var Pt=n(J);V=l(Pt,"STRONG",{});var Dt=n(V);Qe=s(Dt,"can begin with a single $ sign"),Dt.forEach(t),Pt.forEach(t),Ue=f(Z),K=l(Z,"LI",{});var zt=n(K);X=l(zt,"STRONG",{});var Ft=n(X);Be=s(Ft,"can begin with a single or double @ sign, a"),Ft.forEach(t),zt.forEach(t),Je=f(Z),ee=l(Z,"LI",{});var Ht=n(ee);te=l(Ht,"STRONG",{});var Wt=n(te);Ve=s(Wt,"can contain any letter a-z, case insensitive"),Wt.forEach(t),Ht.forEach(t),Z.forEach(t),ge=f(e),E=l(e,"P",{});var Ce=n(E);Ke=s(Ce,`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),oe=l(Ce,"STRONG",{});var Yt=n(oe);Xe=s(Yt,"can contain two colons in a row"),Yt.forEach(t),et=s(Ce,"."),Ce.forEach(t),ye=f(e),I=l(e,"P",{});var xe=n(I);tt=s(xe,`To put all that in simple regular
expressions:\xA0`),ie=l(xe,"CODE",{});var jt=n(ie);ot=s(jt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),jt.forEach(t),it=s(xe,`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
\u201CAdd\u201D button and entering a name for it. I suggest using \u201CRuby Word\u201D for the
name.`),xe.forEach(t),ve=f(e),C=l(e,"P",{});var Te=n(C);lt=s(Te,`I also find myself moving ruby strings around a lot. Wouldn\u2019t it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression:\xA0`),le=l(Te,"CODE",{});var Zt=n(le);nt=s(Zt,`(['"]).*?\\1`),Zt.forEach(t),at=s(Te,`. Make sure to check the \u2018M\u2019 flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The \u2018\\1\u2019 means to
match the value from the first parenthetical match, so the quotes will line up
properly. The \u2019.*?\u2019 means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),Te.forEach(t),we=f(e),q=l(e,"H2",{id:!0});var Qt=n(q);st=s(Qt,"Come Together"),Qt.forEach(t),_e=f(e),H=l(e,"P",{});var Ut=n(H);rt=s(Ut,`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),Ut.forEach(t),be=f(e),L=l(e,"H4",{id:!0});var Bt=n(L);ut=s(Bt,"Selection Rules"),Bt.forEach(t),ke=f(e),p=l(e,"UL",{});var x=n(p);N=l(x,"LI",{});var Re=n(N);ct=s(Re,"Ruby Word:\xA0"),ne=l(Re,"CODE",{});var Jt=n(ne);ht=s(Jt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),Jt.forEach(t),ft=s(Re," \xA0 \xA0(Flags: None)"),Re.forEach(t),dt=f(x),W=l(x,"LI",{});var It=n(W);pt=s(It,"Full Quote:\xA0"),ae=l(It,"CODE",{});var Vt=n(ae);mt=s(Vt,`(['"]).*?\\1 (Flags: M)`),Vt.forEach(t),It.forEach(t),gt=f(x),se=l(x,"LI",{});var Kt=n(se);yt=s(Kt,"Single-Line Quote \xA0(Flags: None)"),Kt.forEach(t),vt=f(x),Y=l(x,"LI",{});var Ct=n(Y);wt=s(Ct,"Haml Word:\xA0"),re=l(Ct,"CODE",{});var Xt=n(re);_t=s(Xt,"(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),Xt.forEach(t),Ct.forEach(t),x.forEach(t),this.h()},h(){T(G,"id","i-gotta-have-it"),T(A,"href","http://code.google.com/p/gedit-click-config/"),T(A,"rel","nofollow"),T(O,"id","you-mentioned-ruby-on-rails"),T(S,"href","http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Variables_and_Constants"),T(S,"rel","nofollow"),T(q,"id","come-together"),T(L,"id","selection-rules")},m(e,r){u(e,c,r),o(c,g),u(e,y,r),u(e,v,r),o(v,d),o(d,m),u(e,R,r),u(e,M,r),o(M,Ge),u(e,ue,r),u(e,w,r),o(w,P),o(P,Q),o(Q,Ae),o(P,Oe),o(w,Se),o(w,D),o(D,U),o(U,qe),o(D,Le),o(w,Ne),o(w,z),o(z,B),o(B,$e),o(z,Me),u(e,ce,r),u(e,F,r),o(F,Pe),u(e,he,r),u(e,G,r),o(G,De),u(e,fe,r),u(e,b,r),o(b,ze),o(b,A),o(A,Fe),o(b,He),u(e,de,r),u(e,O,r),o(O,We),u(e,pe,r),u(e,k,r),o(k,Ye),o(k,S),o(S,je),o(k,Ze),u(e,me,r),u(e,_,r),o(_,J),o(J,V),o(V,Qe),o(_,Ue),o(_,K),o(K,X),o(X,Be),o(_,Je),o(_,ee),o(ee,te),o(te,Ve),u(e,ge,r),u(e,E,r),o(E,Ke),o(E,oe),o(oe,Xe),o(E,et),u(e,ye,r),u(e,I,r),o(I,tt),o(I,ie),o(ie,ot),o(I,it),u(e,ve,r),u(e,C,r),o(C,lt),o(C,le),o(le,nt),o(C,at),u(e,we,r),u(e,q,r),o(q,st),u(e,_e,r),u(e,H,r),o(H,rt),u(e,be,r),u(e,L,r),o(L,ut),u(e,ke,r),u(e,p,r),o(p,N),o(N,ct),o(N,ne),o(ne,ht),o(N,ft),o(p,dt),o(p,W),o(W,pt),o(W,ae),o(ae,mt),o(p,gt),o(p,se),o(se,yt),o(p,vt),o(p,Y),o(Y,wt),o(Y,re),o(re,_t)},p:po,d(e){e&&t(c),e&&t(y),e&&t(v),e&&t(R),e&&t(M),e&&t(ue),e&&t(w),e&&t(ce),e&&t(F),e&&t(he),e&&t(G),e&&t(fe),e&&t(b),e&&t(de),e&&t(O),e&&t(pe),e&&t(k),e&&t(me),e&&t(_),e&&t(ge),e&&t(E),e&&t(ye),e&&t(I),e&&t(ve),e&&t(C),e&&t(we),e&&t(q),e&&t(_e),e&&t(H),e&&t(be),e&&t(L),e&&t(ke),e&&t(p)}}}function yo($){let c,g;const y=[$[0],oo];let v={$$slots:{default:[go]},$$scope:{ctx:$}};for(let d=0;d<y.length;d+=1)v=xt(v,y[d]);return c=new mo({props:v}),{c(){ao(c.$$.fragment)},l(d){so(c.$$.fragment,d)},m(d,m){ro(c,d,m),g=!0},p(d,[m]){const R=m&1?uo(y,[m&1&&eo(d[0]),m&0&&eo(oo)]):{};m&2&&(R.$$scope={dirty:m,ctx:d}),c.$set(R)},i(d){g||(co(c.$$.fragment,d),g=!0)},o(d){ho(c.$$.fragment,d),g=!1},d(d){fo(c,d)}}}const oo={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Simple Rails Development Part I: Gedit Click Config",description:"Configuring GEdit Click Config Plugin",excerpt:"I installed a few plugins, but only one of them took me by surprise\\: Click Config.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails","IDE"],created_at:"2012-08-30T23:29:00.000Z",updated_at:"2012-08-30T23:29:00.000Z"};function vo($,c,g){return $.$$set=y=>{g(0,c=xt(xt({},c),to(y)))},c=to(c),[c]}class bo extends io{constructor(c){super(),lo(this,c,vo,yo,no,{})}}export{bo as default,oo as metadata};
