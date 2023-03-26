import{S as lo,i as io,s as no,C as xt,y as ao,z as so,A as ro,H as uo,a0 as eo,g as co,d as fo,B as ho,L as to,k as l,q as a,a as d,l as i,m as n,r as s,h as t,c as f,n as R,b as u,G as o,I as po}from"./index.8495bde4.js";import{P as mo}from"./post.98a719d8.js";function go(M){let c,g,y,v,h,m,T,$,Ge,ue,w,D,J,Ae,Oe,Le,P,U,qe,Se,Ne,H,Q,Me,$e,ce,z,De,de,G,Pe,fe,b,He,A,ze,Fe,he,O,We,pe,k,Ye,L,je,Ze,me,_,B,V,Je,Ue,K,X,Qe,Be,ee,te,Ve,ge,E,Ke,oe,Xe,et,ye,I,tt,le,ot,lt,ve,C,it,ie,nt,at,we,q,st,_e,F,rt,be,S,ut,ke,p,N,ct,ne,dt,ft,ht,W,pt,ae,mt,gt,se,yt,vt,Y,wt,re,_t;return{c(){c=l("p"),g=a(`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit. In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),y=d(),v=l("p"),h=l("strong"),m=a("NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),T=d(),$=l("p"),Ge=a("Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),ue=d(),w=l("ul"),D=l("li"),J=l("strong"),Ae=a("Single-Click"),Oe=a(": Move the editing cursor to the mouse cursor's location"),Le=d(),P=l("li"),U=l("strong"),qe=a("Double-Click"),Se=a(": Select the word that is under the mouse cursor"),Ne=d(),H=l("li"),Q=l("strong"),Me=a("Triple-Click"),$e=a(": Select the entire line that is under the mouse cursor"),ce=d(),z=l("p"),De=a(`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression ("regex" for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),de=d(),G=l("h2"),Pe=a("I Gotta Have It!"),fe=d(),b=l("p"),He=a(`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro's repository or already
installed it.  If you don't have it already, you can pick it up from
`),A=l("a"),ze=a("the google code repo"),Fe=a(`, and it doesn't require root
access, so setup should be really simple, just follow the directions.`),he=d(),O=l("h2"),We=a("You mentioned Ruby on Rails?"),pe=d(),k=l("p"),Ye=a(`Yes… yes I did.  You can find out more about Ruby words, constants, and other
things
`),L=l("a"),je=a("here"),Ze=a(`.
Ruby words are pretty simple: they:`),me=d(),_=l("ol"),B=l("li"),V=l("strong"),Je=a("can begin with a single $ sign"),Ue=d(),K=l("li"),X=l("strong"),Qe=a("can begin with a single or double @ sign, a"),Be=d(),ee=l("li"),te=l("strong"),Ve=a("can contain any letter a-z, case insensitive"),ge=d(),E=l("p"),Ke=a(`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),oe=l("strong"),Xe=a("can contain two colons in a row"),et=a("."),ye=d(),I=l("p"),tt=a(`To put all that in simple regular
expressions: `),le=l("code"),ot=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),lt=a(`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
"Add" button and entering a name for it. I suggest using "Ruby Word" for the
name.`),ve=d(),C=l("p"),it=a(`I also find myself moving ruby strings around a lot. Wouldn't it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression: `),ie=l("code"),nt=a(`(['"]).*?\\1`),at=a(`. Make sure to check the 'M' flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The '\\1' means to
match the value from the first parenthetical match, so the quotes will line up
properly. The '.*?' means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),we=d(),q=l("h2"),st=a("Come Together"),_e=d(),F=l("p"),rt=a(`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),be=d(),S=l("h4"),ut=a("Selection Rules"),ke=d(),p=l("ul"),N=l("li"),ct=a("Ruby Word: "),ne=l("code"),dt=a("((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),ft=a("    (Flags: None)"),ht=d(),W=l("li"),pt=a("Full Quote: "),ae=l("code"),mt=a(`(['"]).*?\\1 (Flags: M)`),gt=d(),se=l("li"),yt=a("Single-Line Quote  (Flags: None)"),vt=d(),Y=l("li"),wt=a("Haml Word: "),re=l("code"),_t=a("(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),this.h()},l(e){c=i(e,"P",{});var r=n(c);g=s(r,`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit. In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`),r.forEach(t),y=f(e),v=i(e,"P",{});var Rt=n(v);h=i(Rt,"STRONG",{});var Tt=n(h);m=s(Tt,"NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2."),Tt.forEach(t),Rt.forEach(t),T=f(e),$=i(e,"P",{});var Gt=n($);Ge=s(Gt,"Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:"),Gt.forEach(t),ue=f(e),w=i(e,"UL",{});var j=n(w);D=i(j,"LI",{});var bt=n(D);J=i(bt,"STRONG",{});var At=n(J);Ae=s(At,"Single-Click"),At.forEach(t),Oe=s(bt,": Move the editing cursor to the mouse cursor's location"),bt.forEach(t),Le=f(j),P=i(j,"LI",{});var kt=n(P);U=i(kt,"STRONG",{});var Ot=n(U);qe=s(Ot,"Double-Click"),Ot.forEach(t),Se=s(kt,": Select the word that is under the mouse cursor"),kt.forEach(t),Ne=f(j),H=i(j,"LI",{});var Et=n(H);Q=i(Et,"STRONG",{});var Lt=n(Q);Me=s(Lt,"Triple-Click"),Lt.forEach(t),$e=s(Et,": Select the entire line that is under the mouse cursor"),Et.forEach(t),j.forEach(t),ce=f(e),z=i(e,"P",{});var qt=n(z);De=s(qt,`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression ("regex" for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`),qt.forEach(t),de=f(e),G=i(e,"H2",{id:!0});var St=n(G);Pe=s(St,"I Gotta Have It!"),St.forEach(t),fe=f(e),b=i(e,"P",{});var Ee=n(b);He=s(Ee,`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro's repository or already
installed it.  If you don't have it already, you can pick it up from
`),A=i(Ee,"A",{href:!0,title:!0});var Nt=n(A);ze=s(Nt,"the google code repo"),Nt.forEach(t),Fe=s(Ee,`, and it doesn't require root
access, so setup should be really simple, just follow the directions.`),Ee.forEach(t),he=f(e),O=i(e,"H2",{id:!0});var Mt=n(O);We=s(Mt,"You mentioned Ruby on Rails?"),Mt.forEach(t),pe=f(e),k=i(e,"P",{});var Ie=n(k);Ye=s(Ie,`Yes… yes I did.  You can find out more about Ruby words, constants, and other
things
`),L=i(Ie,"A",{href:!0,title:!0});var $t=n(L);je=s($t,"here"),$t.forEach(t),Ze=s(Ie,`.
Ruby words are pretty simple: they:`),Ie.forEach(t),me=f(e),_=i(e,"OL",{});var Z=n(_);B=i(Z,"LI",{});var Dt=n(B);V=i(Dt,"STRONG",{});var Pt=n(V);Je=s(Pt,"can begin with a single $ sign"),Pt.forEach(t),Dt.forEach(t),Ue=f(Z),K=i(Z,"LI",{});var Ht=n(K);X=i(Ht,"STRONG",{});var zt=n(X);Qe=s(zt,"can begin with a single or double @ sign, a"),zt.forEach(t),Ht.forEach(t),Be=f(Z),ee=i(Z,"LI",{});var Ft=n(ee);te=i(Ft,"STRONG",{});var Wt=n(te);Ve=s(Wt,"can contain any letter a-z, case insensitive"),Wt.forEach(t),Ft.forEach(t),Z.forEach(t),ge=f(e),E=i(e,"P",{});var Ce=n(E);Ke=s(Ce,`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: `),oe=i(Ce,"STRONG",{});var Yt=n(oe);Xe=s(Yt,"can contain two colons in a row"),Yt.forEach(t),et=s(Ce,"."),Ce.forEach(t),ye=f(e),I=i(e,"P",{});var xe=n(I);tt=s(xe,`To put all that in simple regular
expressions: `),le=i(xe,"CODE",{});var jt=n(le);ot=s(jt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),jt.forEach(t),lt=s(xe,`. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit->Click Config->Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
"Add" button and entering a name for it. I suggest using "Ruby Word" for the
name.`),xe.forEach(t),ve=f(e),C=i(e,"P",{});var Re=n(C);it=s(Re,`I also find myself moving ruby strings around a lot. Wouldn't it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression: `),ie=i(Re,"CODE",{});var Zt=n(ie);nt=s(Zt,`(['"]).*?\\1`),Zt.forEach(t),at=s(Re,`. Make sure to check the 'M' flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The '\\1' means to
match the value from the first parenthetical match, so the quotes will line up
properly. The '.*?' means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`),Re.forEach(t),we=f(e),q=i(e,"H2",{id:!0});var Jt=n(q);st=s(Jt,"Come Together"),Jt.forEach(t),_e=f(e),F=i(e,"P",{});var Ut=n(F);rt=s(Ut,`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`),Ut.forEach(t),be=f(e),S=i(e,"H4",{id:!0});var Qt=n(S);ut=s(Qt,"Selection Rules"),Qt.forEach(t),ke=f(e),p=i(e,"UL",{});var x=n(p);N=i(x,"LI",{});var Te=n(N);ct=s(Te,"Ruby Word: "),ne=i(Te,"CODE",{});var Bt=n(ne);dt=s(Bt,"((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+"),Bt.forEach(t),ft=s(Te,"    (Flags: None)"),Te.forEach(t),ht=f(x),W=i(x,"LI",{});var It=n(W);pt=s(It,"Full Quote: "),ae=i(It,"CODE",{});var Vt=n(ae);mt=s(Vt,`(['"]).*?\\1 (Flags: M)`),Vt.forEach(t),It.forEach(t),gt=f(x),se=i(x,"LI",{});var Kt=n(se);yt=s(Kt,"Single-Line Quote  (Flags: None)"),Kt.forEach(t),vt=f(x),Y=i(x,"LI",{});var Ct=n(Y);wt=s(Ct,"Haml Word: "),re=i(Ct,"CODE",{});var Xt=n(re);_t=s(Xt,"(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+"),Xt.forEach(t),Ct.forEach(t),x.forEach(t),this.h()},h(){R(G,"id","i-gotta-have-it"),R(A,"href","http://code.google.com/p/gedit-click-config/"),R(A,"title",""),R(O,"id","you-mentioned-ruby-on-rails"),R(L,"href","http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Variables_and_Constants"),R(L,"title",""),R(q,"id","come-together"),R(S,"id","selection-rules")},m(e,r){u(e,c,r),o(c,g),u(e,y,r),u(e,v,r),o(v,h),o(h,m),u(e,T,r),u(e,$,r),o($,Ge),u(e,ue,r),u(e,w,r),o(w,D),o(D,J),o(J,Ae),o(D,Oe),o(w,Le),o(w,P),o(P,U),o(U,qe),o(P,Se),o(w,Ne),o(w,H),o(H,Q),o(Q,Me),o(H,$e),u(e,ce,r),u(e,z,r),o(z,De),u(e,de,r),u(e,G,r),o(G,Pe),u(e,fe,r),u(e,b,r),o(b,He),o(b,A),o(A,ze),o(b,Fe),u(e,he,r),u(e,O,r),o(O,We),u(e,pe,r),u(e,k,r),o(k,Ye),o(k,L),o(L,je),o(k,Ze),u(e,me,r),u(e,_,r),o(_,B),o(B,V),o(V,Je),o(_,Ue),o(_,K),o(K,X),o(X,Qe),o(_,Be),o(_,ee),o(ee,te),o(te,Ve),u(e,ge,r),u(e,E,r),o(E,Ke),o(E,oe),o(oe,Xe),o(E,et),u(e,ye,r),u(e,I,r),o(I,tt),o(I,le),o(le,ot),o(I,lt),u(e,ve,r),u(e,C,r),o(C,it),o(C,ie),o(ie,nt),o(C,at),u(e,we,r),u(e,q,r),o(q,st),u(e,_e,r),u(e,F,r),o(F,rt),u(e,be,r),u(e,S,r),o(S,ut),u(e,ke,r),u(e,p,r),o(p,N),o(N,ct),o(N,ne),o(ne,dt),o(N,ft),o(p,ht),o(p,W),o(W,pt),o(W,ae),o(ae,mt),o(p,gt),o(p,se),o(se,yt),o(p,vt),o(p,Y),o(Y,wt),o(Y,re),o(re,_t)},p:po,d(e){e&&t(c),e&&t(y),e&&t(v),e&&t(T),e&&t($),e&&t(ue),e&&t(w),e&&t(ce),e&&t(z),e&&t(de),e&&t(G),e&&t(fe),e&&t(b),e&&t(he),e&&t(O),e&&t(pe),e&&t(k),e&&t(me),e&&t(_),e&&t(ge),e&&t(E),e&&t(ye),e&&t(I),e&&t(ve),e&&t(C),e&&t(we),e&&t(q),e&&t(_e),e&&t(F),e&&t(be),e&&t(S),e&&t(ke),e&&t(p)}}}function yo(M){let c,g;const y=[M[0],oo];let v={$$slots:{default:[go]},$$scope:{ctx:M}};for(let h=0;h<y.length;h+=1)v=xt(v,y[h]);return c=new mo({props:v}),{c(){ao(c.$$.fragment)},l(h){so(c.$$.fragment,h)},m(h,m){ro(c,h,m),g=!0},p(h,[m]){const T=m&1?uo(y,[m&1&&eo(h[0]),m&0&&eo(oo)]):{};m&2&&(T.$$scope={dirty:m,ctx:h}),c.$set(T)},i(h){g||(co(c.$$.fragment,h),g=!0)},o(h){fo(c.$$.fragment,h),g=!1},d(h){ho(c,h)}}}const oo={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Simple Rails Development Part I: Gedit Click Config",description:"Configuring GEdit Click Config Plugin",excerpt:"I installed a few plugins, but only one of them took me by surprise\\: Click Config.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails","IDE"],created_at:"2012-08-30T23:29:00.000Z",updated_at:"2012-08-30T23:29:00.000Z",preview:`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development.`,previewHtml:"<p>After evaluating all editors and IDEs I could ahold of for Ruby On Rails development in Linux, I decided none were really up to my expectations. I was really looking for something as powerful for Rails development as Eclipse is for Java development. ...</p>",textContent:`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them...`};function vo(M,c,g){return M.$$set=y=>{g(0,c=xt(xt({},c),to(y)))},c=to(c),[c]}class bo extends lo{constructor(c){super(),io(this,c,vo,yo,no,{})}}export{bo as default,oo as metadata};
