import{S as lo,i as no,s as io,C as xt,y as ao,z as so,A as ro,H as uo,$ as eo,g as co,d as ho,B as fo,L as to,k as l,q as a,a as h,l as n,m as i,r as s,h as t,c as f,n as Ge,b as u,G as o,I as po}from"./index.37f37dfa.js";import{P as mo}from"./post.47922bc8.js";function go(q){let c,g,y,v,d,m,T,O,Re,re,w,S,Z,Ae,qe,Oe,L,Q,Se,Le,Ne,N,U,$e,Me,ue,$,Pe,ce,M,De,he,b,ze,G,He,Fe,fe,P,We,de,k,Ye,R,je,Ze,pe,_,B,J,Qe,Ue,V,K,Be,Je,X,ee,Ve,me,E,Ke,te,Xe,et,ge,I,tt,oe,ot,lt,ye,C,nt,le,it,at,ve,D,st,we,z,rt,_e,H,ut,be,p,A,ct,ne,ht,ft,dt,F,pt,ie,mt,gt,ae,yt,vt,W,wt,se,_t;return{c(){c=l("p"),g=a(`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit. In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),y=h(),v=l("p"),d=l("strong"),m=a("NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),T=h(),O=l("p"),Re=a("Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),re=h(),w=l("ul"),S=l("li"),Z=l("strong"),Ae=a("Single-Click"),qe=a(": Move the editing cursor to the mouse cursor's location"),Oe=h(),L=l("li"),Q=l("strong"),Se=a("Double-Click"),Le=a(": Select the word that is under the mouse cursor"),Ne=h(),N=l("li"),U=l("strong"),$e=a("Triple-Click"),Me=a(": Select the entire line that is under the mouse cursor"),ue=h(),$=l("p"),Pe=a(`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression ("regex" for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),ce=h(),M=l("h2"),De=a("I Gotta Have It!"),he=h(),b=l("p"),ze=a(`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro's repository or already
installed it.  If you don't have it already, you can pick it up from
`),G=l("a"),He=a("the google code repo"),Fe=a(`, and it doesn't require root
access, so setup should be really simple, just follow the directions.`),fe=h(),P=l("h2"),We=a("You mentioned Ruby on Rails?"),de=h(),k=l("p"),Ye=a(`Yes… yes I did.  You can find out more about Ruby words, constants, and other
things
`),R=l("a"),je=a("here"),Ze=a(`.
Ruby words are pretty simple: they:`),pe=h(),_=l("ol"),B=l("li"),J=l("strong"),Qe=a("can begin with a single $ sign"),Ue=h(),V=l("li"),K=l("strong"),Be=a("can begin with a single or double @ sign, a"),Je=h(),X=l("li"),ee=l("strong"),Ve=a("can contain any letter a-z, case insensitive"),me=h(),E=l("p"),Ke=a(`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),te=l("strong"),Xe=a("can contain two colons in a row"),et=a("."),ge=h(),I=l("p"),tt=a(`To put all that in simple regular
expressions: `),oe=l("code"),ot=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),lt=a(`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
"Add" button and entering a name for it. I suggest using "Ruby Word" for the
name.`),ye=h(),C=l("p"),nt=a(`I also find myself moving ruby strings around a lot. Wouldn't it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression: `),le=l("code"),it=a(`(['"]).*?\\1`),at=a(`. Make sure to check the 'M' flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The '\\1' means to
match the value from the first parenthetical match, so the quotes will line up
properly. The '.*?' means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),ve=h(),D=l("h2"),st=a("Come Together"),we=h(),z=l("p"),rt=a(`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),_e=h(),H=l("h4"),ut=a("Selection Rules"),be=h(),p=l("ul"),A=l("li"),ct=a("Ruby Word: "),ne=l("code"),ht=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),ft=a("    (Flags: None)"),dt=h(),F=l("li"),pt=a("Full Quote: "),ie=l("code"),mt=a(`(['"]).*?\\1 (Flags: M)`),gt=h(),ae=l("li"),yt=a("Single-Line Quote  (Flags: None)"),vt=h(),W=l("li"),wt=a("Haml Word: "),se=l("code"),_t=a("(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),this.h()},l(e){c=n(e,"P",{});var r=i(c);g=s(r,`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit. In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),r.forEach(t),y=f(e),v=n(e,"P",{});var Tt=i(v);d=n(Tt,"STRONG",{});var Gt=i(d);m=s(Gt,"NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),Gt.forEach(t),Tt.forEach(t),T=f(e),O=n(e,"P",{});var Rt=i(O);Re=s(Rt,"Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),Rt.forEach(t),re=f(e),w=n(e,"UL",{});var Y=i(w);S=n(Y,"LI",{});var bt=i(S);Z=n(bt,"STRONG",{});var At=i(Z);Ae=s(At,"Single-Click"),At.forEach(t),qe=s(bt,": Move the editing cursor to the mouse cursor's location"),bt.forEach(t),Oe=f(Y),L=n(Y,"LI",{});var kt=i(L);Q=n(kt,"STRONG",{});var qt=i(Q);Se=s(qt,"Double-Click"),qt.forEach(t),Le=s(kt,": Select the word that is under the mouse cursor"),kt.forEach(t),Ne=f(Y),N=n(Y,"LI",{});var Et=i(N);U=n(Et,"STRONG",{});var Ot=i(U);$e=s(Ot,"Triple-Click"),Ot.forEach(t),Me=s(Et,": Select the entire line that is under the mouse cursor"),Et.forEach(t),Y.forEach(t),ue=f(e),$=n(e,"P",{});var St=i($);Pe=s(St,`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression ("regex" for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),St.forEach(t),ce=f(e),M=n(e,"H2",{});var Lt=i(M);De=s(Lt,"I Gotta Have It!"),Lt.forEach(t),he=f(e),b=n(e,"P",{});var ke=i(b);ze=s(ke,`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro's repository or already
installed it.  If you don't have it already, you can pick it up from
`),G=n(ke,"A",{href:!0,rel:!0});var Nt=i(G);He=s(Nt,"the google code repo"),Nt.forEach(t),Fe=s(ke,`, and it doesn't require root
access, so setup should be really simple, just follow the directions.`),ke.forEach(t),fe=f(e),P=n(e,"H2",{});var $t=i(P);We=s($t,"You mentioned Ruby on Rails?"),$t.forEach(t),de=f(e),k=n(e,"P",{});var Ee=i(k);Ye=s(Ee,`Yes… yes I did.  You can find out more about Ruby words, constants, and other
things
`),R=n(Ee,"A",{href:!0,rel:!0});var Mt=i(R);je=s(Mt,"here"),Mt.forEach(t),Ze=s(Ee,`.
Ruby words are pretty simple: they:`),Ee.forEach(t),pe=f(e),_=n(e,"OL",{});var j=i(_);B=n(j,"LI",{});var Pt=i(B);J=n(Pt,"STRONG",{});var Dt=i(J);Qe=s(Dt,"can begin with a single $ sign"),Dt.forEach(t),Pt.forEach(t),Ue=f(j),V=n(j,"LI",{});var zt=i(V);K=n(zt,"STRONG",{});var Ht=i(K);Be=s(Ht,"can begin with a single or double @ sign, a"),Ht.forEach(t),zt.forEach(t),Je=f(j),X=n(j,"LI",{});var Ft=i(X);ee=n(Ft,"STRONG",{});var Wt=i(ee);Ve=s(Wt,"can contain any letter a-z, case insensitive"),Wt.forEach(t),Ft.forEach(t),j.forEach(t),me=f(e),E=n(e,"P",{});var Ie=i(E);Ke=s(Ie,`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),te=n(Ie,"STRONG",{});var Yt=i(te);Xe=s(Yt,"can contain two colons in a row"),Yt.forEach(t),et=s(Ie,"."),Ie.forEach(t),ge=f(e),I=n(e,"P",{});var Ce=i(I);tt=s(Ce,`To put all that in simple regular
expressions: `),oe=n(Ce,"CODE",{});var jt=i(oe);ot=s(jt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),jt.forEach(t),lt=s(Ce,`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
"Add" button and entering a name for it. I suggest using "Ruby Word" for the
name.`),Ce.forEach(t),ye=f(e),C=n(e,"P",{});var xe=i(C);nt=s(xe,`I also find myself moving ruby strings around a lot. Wouldn't it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression: `),le=n(xe,"CODE",{});var Zt=i(le);it=s(Zt,`(['"]).*?\\1`),Zt.forEach(t),at=s(xe,`. Make sure to check the 'M' flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The '\\1' means to
match the value from the first parenthetical match, so the quotes will line up
properly. The '.*?' means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),xe.forEach(t),ve=f(e),D=n(e,"H2",{});var Qt=i(D);st=s(Qt,"Come Together"),Qt.forEach(t),we=f(e),z=n(e,"P",{});var Ut=i(z);rt=s(Ut,`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),Ut.forEach(t),_e=f(e),H=n(e,"H4",{});var Bt=i(H);ut=s(Bt,"Selection Rules"),Bt.forEach(t),be=f(e),p=n(e,"UL",{});var x=i(p);A=n(x,"LI",{});var Te=i(A);ct=s(Te,"Ruby Word: "),ne=n(Te,"CODE",{});var Jt=i(ne);ht=s(Jt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),Jt.forEach(t),ft=s(Te,"    (Flags: None)"),Te.forEach(t),dt=f(x),F=n(x,"LI",{});var It=i(F);pt=s(It,"Full Quote: "),ie=n(It,"CODE",{});var Vt=i(ie);mt=s(Vt,`(['"]).*?\\1 (Flags: M)`),Vt.forEach(t),It.forEach(t),gt=f(x),ae=n(x,"LI",{});var Kt=i(ae);yt=s(Kt,"Single-Line Quote  (Flags: None)"),Kt.forEach(t),vt=f(x),W=n(x,"LI",{});var Ct=i(W);wt=s(Ct,"Haml Word: "),se=n(Ct,"CODE",{});var Xt=i(se);_t=s(Xt,"(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),Xt.forEach(t),Ct.forEach(t),x.forEach(t),this.h()},h(){Ge(G,"href","http://code.google.com/p/gedit-click-config/"),Ge(G,"rel","nofollow"),Ge(R,"href","http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Variables_and_Constants"),Ge(R,"rel","nofollow")},m(e,r){u(e,c,r),o(c,g),u(e,y,r),u(e,v,r),o(v,d),o(d,m),u(e,T,r),u(e,O,r),o(O,Re),u(e,re,r),u(e,w,r),o(w,S),o(S,Z),o(Z,Ae),o(S,qe),o(w,Oe),o(w,L),o(L,Q),o(Q,Se),o(L,Le),o(w,Ne),o(w,N),o(N,U),o(U,$e),o(N,Me),u(e,ue,r),u(e,$,r),o($,Pe),u(e,ce,r),u(e,M,r),o(M,De),u(e,he,r),u(e,b,r),o(b,ze),o(b,G),o(G,He),o(b,Fe),u(e,fe,r),u(e,P,r),o(P,We),u(e,de,r),u(e,k,r),o(k,Ye),o(k,R),o(R,je),o(k,Ze),u(e,pe,r),u(e,_,r),o(_,B),o(B,J),o(J,Qe),o(_,Ue),o(_,V),o(V,K),o(K,Be),o(_,Je),o(_,X),o(X,ee),o(ee,Ve),u(e,me,r),u(e,E,r),o(E,Ke),o(E,te),o(te,Xe),o(E,et),u(e,ge,r),u(e,I,r),o(I,tt),o(I,oe),o(oe,ot),o(I,lt),u(e,ye,r),u(e,C,r),o(C,nt),o(C,le),o(le,it),o(C,at),u(e,ve,r),u(e,D,r),o(D,st),u(e,we,r),u(e,z,r),o(z,rt),u(e,_e,r),u(e,H,r),o(H,ut),u(e,be,r),u(e,p,r),o(p,A),o(A,ct),o(A,ne),o(ne,ht),o(A,ft),o(p,dt),o(p,F),o(F,pt),o(F,ie),o(ie,mt),o(p,gt),o(p,ae),o(ae,yt),o(p,vt),o(p,W),o(W,wt),o(W,se),o(se,_t)},p:po,d(e){e&&t(c),e&&t(y),e&&t(v),e&&t(T),e&&t(O),e&&t(re),e&&t(w),e&&t(ue),e&&t($),e&&t(ce),e&&t(M),e&&t(he),e&&t(b),e&&t(fe),e&&t(P),e&&t(de),e&&t(k),e&&t(pe),e&&t(_),e&&t(me),e&&t(E),e&&t(ge),e&&t(I),e&&t(ye),e&&t(C),e&&t(ve),e&&t(D),e&&t(we),e&&t(z),e&&t(_e),e&&t(H),e&&t(be),e&&t(p)}}}function yo(q){let c,g;const y=[q[0],oo];let v={$$slots:{default:[go]},$$scope:{ctx:q}};for(let d=0;d<y.length;d+=1)v=xt(v,y[d]);return c=new mo({props:v}),{c(){ao(c.$$.fragment)},l(d){so(c.$$.fragment,d)},m(d,m){ro(c,d,m),g=!0},p(d,[m]){const T=m&1?uo(y,[m&1&&eo(d[0]),m&0&&eo(oo)]):{};m&2&&(T.$$scope={dirty:m,ctx:d}),c.$set(T)},i(d){g||(co(c.$$.fragment,d),g=!0)},o(d){ho(c.$$.fragment,d),g=!1},d(d){fo(c,d)}}}const oo={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Simple Rails Development Part I: Gedit Click Config",description:"Configuring GEdit Click Config Plugin",excerpt:"I installed a few plugins, but only one of them took me by surprise\\: Click Config.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails","IDE"],created_at:"2012-08-30T23:29:00.000Z",updated_at:"2012-08-30T23:29:00.000Z"};function vo(q,c,g){return q.$$set=y=>{g(0,c=xt(xt({},c),to(y)))},c=to(c),[c]}class bo extends lo{constructor(c){super(),no(this,c,vo,yo,io,{})}}export{bo as default,oo as metadata};
