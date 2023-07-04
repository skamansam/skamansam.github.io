import{s as ce,r as Z,B as re,f as a,a as u,g as s,C as r,c as d,j as Y,i as n,y as fe,d as i}from"./scheduler.28ea7184.js";import{S as he,i as pe,b as me,d as ge,m as ve,a as ye,t as _e,e as we}from"./index.8021bc93.js";import{g as xe,a as ue}from"./spread.8a54911c.js";import{P as Ce}from"./post.60382223.js";function be(R){let l,m=`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them were close,
but all lacked some key ingredient necessary to make my life a little easier.
However, I did find a great solution which required learning a little more about
an undiscovered basic text editor in Fedora: GEdit. In order to make my rails
development a little easier, I installed a few plugins, but only one of them
took me by surprise: Click Config.`,h,f,o="<strong>NOTE: This article is written for GEdit 3+. A simple Google search will yield many articles for Gedit 2.</strong>",c,p,J="Most IDEs and editors have different functions when multi-clicking in an editor pane. Most of them have the following selection actions:",E,w,U="<li><strong>Single-Click</strong>: Move the editing cursor to the mouse cursor&#39;s location</li> <li><strong>Double-Click</strong>: Select the word that is under the mouse cursor</li> <li><strong>Triple-Click</strong>: Select the entire line that is under the mouse cursor</li>",q,x,B=`Only a few editors have a quad-click option for selecting an entire paragraph.
GEdit Click Config not only has a quad-click option, but has a quit-click (five
clicks in quick succession) option as well. Amazing! Not only can you configure
what click-types are available in GEdit, but you can configure the click
parameters based on a given regular expression ("regex" for short). And to top
it all off, you can configure which click options are activated based on what
language GEdit is set to.`,P,g,Q="I Gotta Have It!",A,C,V=`I have not found a distro yet which ships with GNOME and does not have GEdit as
well, so it should be in your local *nix distro&#39;s repository or already
installed it.  If you don&#39;t have it already, you can pick it up from
<a href="http://code.google.com/p/gedit-click-config/" title="">the google code repo</a>, and it doesn&#39;t require root
access, so setup should be really simple, just follow the directions.`,G,v,K="You mentioned Ruby on Rails?",$,b,X=`Yes… yes I did.  You can find out more about Ruby words, constants, and other
things
<a href="http://en.wikibooks.org/wiki/Ruby_Programming/Syntax/Variables_and_Constants" title="">here</a>.
Ruby words are pretty simple: they:`,S,k,ee="<li><strong>can begin with a single $ sign</strong></li> <li><strong>can begin with a single or double @ sign, a</strong></li> <li><strong>can contain any letter a-z, case insensitive</strong></li>",j,I,te=`I like to add a fourth rule, just for constants, because when i select a part of
a constant, i want the whole thing: <strong>can contain two colons in a row</strong>.`,z,T,ne=`To put all that in simple regular
expressions: <code>((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+</code>. I am sure you can write that in
a thousand different ways, but that is the one I like best, because it is really
clear what is going on. Also - the matches almost line up at \\2,\\3,\\4.\\5 This
regex should be newly defined in the Click Config settings. You can get there by
menu, at Edit-&gt;Click Config-&gt;Configure. You can create a new selection
rule by adding it in the only editable inoput field at the bottom, clicking the
&quot;Add&quot; button and entering a name for it. I suggest using &quot;Ruby Word&quot; for the
name.`,D,L,ie=`I also find myself moving ruby strings around a lot. Wouldn&#39;t it be great if you
could just triple-click and select the entire string? With GEdit Click Config,
you can! All you have to do is create a new selection rule, with the following
regular expression: <code>([&#39;&quot;]).*?\\1</code>. Make sure to check the &#39;M&#39; flag to the right
of the input field, in prder to make it multi-line, if you wish. To break down
the pattern, the first paren matches either single- or double-quotes. Then match
anything until you get to the next single- or double-quote. The &#39;\\1&#39; means to
match the value from the first parenthetical match, so the quotes will line up
properly. The &#39;.*?&#39; means to match anything, but only until the next regex
portion matches. If we leave out the question mark, we will match anything until
the last next-character match, This is called a non-greedy search, and is
necessary for this type of pattern-matching.`,O,y,le="Come Together",F,M,oe=`I hope you learn to enjoy some of the basics as I have. To close this entry out,
I will list all the Click Configs I have for all my Languages:`,N,_,ae="Selection Rules",W,H,se="<li>Ruby Word: <code>((\\$?)|(@?@?))([_a-zA-Z]+(::)?)+</code>    (Flags: None)</li> <li>Full Quote: <code>([&#39;&quot;]).*?\\1 (Flags: M)</code></li> <li>Single-Line Quote  (Flags: None)</li> <li>Haml Word: <code>(\\.|\\#|\\$?|(@?@?))([_a-zA-Z]+(::)?)+</code></li>";return{c(){l=a("p"),l.textContent=m,h=u(),f=a("p"),f.innerHTML=o,c=u(),p=a("p"),p.textContent=J,E=u(),w=a("ul"),w.innerHTML=U,q=u(),x=a("p"),x.textContent=B,P=u(),g=a("h2"),g.textContent=Q,A=u(),C=a("p"),C.innerHTML=V,G=u(),v=a("h2"),v.textContent=K,$=u(),b=a("p"),b.innerHTML=X,S=u(),k=a("ol"),k.innerHTML=ee,j=u(),I=a("p"),I.innerHTML=te,z=u(),T=a("p"),T.innerHTML=ne,D=u(),L=a("p"),L.innerHTML=ie,O=u(),y=a("h2"),y.textContent=le,F=u(),M=a("p"),M.textContent=oe,N=u(),_=a("h4"),_.textContent=ae,W=u(),H=a("ul"),H.innerHTML=se,this.h()},l(e){l=s(e,"P",{["data-svelte-h"]:!0}),r(l)!=="svelte-1hgvf0c"&&(l.textContent=m),h=d(e),f=s(e,"P",{["data-svelte-h"]:!0}),r(f)!=="svelte-11oz5tf"&&(f.innerHTML=o),c=d(e),p=s(e,"P",{["data-svelte-h"]:!0}),r(p)!=="svelte-174uup"&&(p.textContent=J),E=d(e),w=s(e,"UL",{["data-svelte-h"]:!0}),r(w)!=="svelte-vxu4vx"&&(w.innerHTML=U),q=d(e),x=s(e,"P",{["data-svelte-h"]:!0}),r(x)!=="svelte-19byw2c"&&(x.textContent=B),P=d(e),g=s(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(g)!=="svelte-tkhqc"&&(g.textContent=Q),A=d(e),C=s(e,"P",{["data-svelte-h"]:!0}),r(C)!=="svelte-1forr1v"&&(C.innerHTML=V),G=d(e),v=s(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(v)!=="svelte-lfh963"&&(v.textContent=K),$=d(e),b=s(e,"P",{["data-svelte-h"]:!0}),r(b)!=="svelte-1jros2b"&&(b.innerHTML=X),S=d(e),k=s(e,"OL",{["data-svelte-h"]:!0}),r(k)!=="svelte-juwz8q"&&(k.innerHTML=ee),j=d(e),I=s(e,"P",{["data-svelte-h"]:!0}),r(I)!=="svelte-12ump1a"&&(I.innerHTML=te),z=d(e),T=s(e,"P",{["data-svelte-h"]:!0}),r(T)!=="svelte-pn8p1i"&&(T.innerHTML=ne),D=d(e),L=s(e,"P",{["data-svelte-h"]:!0}),r(L)!=="svelte-4sbgrz"&&(L.innerHTML=ie),O=d(e),y=s(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(y)!=="svelte-4ww1h3"&&(y.textContent=le),F=d(e),M=s(e,"P",{["data-svelte-h"]:!0}),r(M)!=="svelte-vynhxf"&&(M.textContent=oe),N=d(e),_=s(e,"H4",{id:!0,["data-svelte-h"]:!0}),r(_)!=="svelte-1r85ht7"&&(_.textContent=ae),W=d(e),H=s(e,"UL",{["data-svelte-h"]:!0}),r(H)!=="svelte-5tni38"&&(H.innerHTML=se),this.h()},h(){Y(g,"id","i-gotta-have-it"),Y(v,"id","you-mentioned-ruby-on-rails"),Y(y,"id","come-together"),Y(_,"id","selection-rules")},m(e,t){n(e,l,t),n(e,h,t),n(e,f,t),n(e,c,t),n(e,p,t),n(e,E,t),n(e,w,t),n(e,q,t),n(e,x,t),n(e,P,t),n(e,g,t),n(e,A,t),n(e,C,t),n(e,G,t),n(e,v,t),n(e,$,t),n(e,b,t),n(e,S,t),n(e,k,t),n(e,j,t),n(e,I,t),n(e,z,t),n(e,T,t),n(e,D,t),n(e,L,t),n(e,O,t),n(e,y,t),n(e,F,t),n(e,M,t),n(e,N,t),n(e,_,t),n(e,W,t),n(e,H,t)},p:fe,d(e){e&&(i(l),i(h),i(f),i(c),i(p),i(E),i(w),i(q),i(x),i(P),i(g),i(A),i(C),i(G),i(v),i($),i(b),i(S),i(k),i(j),i(I),i(z),i(T),i(D),i(L),i(O),i(y),i(F),i(M),i(N),i(_),i(W),i(H))}}}function ke(R){let l,m;const h=[R[0],de];let f={$$slots:{default:[be]},$$scope:{ctx:R}};for(let o=0;o<h.length;o+=1)f=Z(f,h[o]);return l=new Ce({props:f}),{c(){me(l.$$.fragment)},l(o){ge(l.$$.fragment,o)},m(o,c){ve(l,o,c),m=!0},p(o,[c]){const p=c&1?xe(h,[c&1&&ue(o[0]),c&0&&ue(de)]):{};c&2&&(p.$$scope={dirty:c,ctx:o}),l.$set(p)},i(o){m||(ye(l.$$.fragment,o),m=!0)},o(o){_e(l.$$.fragment,o),m=!1},d(o){we(l,o)}}}const de={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Simple Rails Development Part I: Gedit Click Config",description:"Configuring GEdit Click Config Plugin",excerpt:"I installed a few plugins, but only one of them took me by surprise\\: Click Config.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails","IDE"],created_at:"2012-08-30T23:29:00.000Z",updated_at:"2012-08-30T23:29:00.000Z",preview:`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development.`,previewHtml:"<p>After evaluating all editors and IDEs I could ahold of for Ruby On Rails development in Linux, I decided none were really up to my expectations. I was really looking for something as powerful for Rails development as Eclipse is for Java development. ...</p>",textContent:`After evaluating all editors and IDEs I could ahold of for Ruby On Rails
development in Linux, I decided none were really up to my expectations. I was
really looking for something as powerful for Rails development as Eclipse is for
Java development. Unfortunately, there were not any. Most of them...`};function Ie(R,l,m){return R.$$set=h=>{m(0,l=Z(Z({},l),re(h)))},l=re(l),[l]}class Re extends he{constructor(l){super(),pe(this,l,Ie,ke,ce,{})}}export{Re as default,de as metadata};
