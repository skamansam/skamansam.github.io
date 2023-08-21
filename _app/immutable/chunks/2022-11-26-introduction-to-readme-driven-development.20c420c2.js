import{s as we,r as X,B as ce,f as a,a as d,g as l,C as r,c as u,j as m,i as o,y as xe,d as n}from"./scheduler.28ea7184.js";import{S as ge,i as Ce,b as be,d as Ee,m as He,a as Re,t as Ae,e as Me}from"./index.8021bc93.js";import{g as ke,a as De}from"./spread.8a54911c.js";import{P as Te}from"./posts.1b268b0f.js";function je(L){let i,y=`Do you HATE writing documentation for your awesome project and know that it's so awesome everyone is going to help,
but no one does? Have you ever had a great idea™ but aren't organized enough to really get a good start?
Ever wondered how to start organizing your ideas so your project is easier to manage? Ever
wondered why your undocumented project is getting nowhere, despite having an initial boost of momentum
that soon died down? Ever wondered how to get your app from idea to implementation quickly and efficiently?
Well, have I got a great tool for you - README-Driven Development!`,v,p,s="What is README-Driven Development (RDD)?",h,f,Y='README-Driven Development, or RDD for short, is a method of rapid organization of ideas using familiar tools. Everyone in software development is familiar with the README. It is the first thing anyone sees when visiting a code repository&#39;s main page. It has a vast history in software and can be traced back to at least 1975, included as <a href="http://pdp-10.trailing-edge.com/decuslib10-04/index.html" title="">a file in decuslib for the PDP-10</a>. README-Driven development leverages the familiarity of the README to help developers organize their ideas and help propel them into the development process.',z,M,ee="The idea is a fairly simple one - progress on the README shows progress in the app development cycle. As you complete the README, you get closer and closer to a 1.0 version release. No need for fancy issue trackers or other project management software, you just use the README to keep track of all the amazing features you want in your app!",P,c,te="Isn't this just Documentation-Driven Development?",S,k,oe='It very much sounds like Documentation-Driven Development, but differs in several ways. Firstly, the documentation does not have to be built beforehand. Secondly, the <a href="https://calhoun.nps.edu/bitstream/handle/10945/42338/Luqi_Documentation_Driven_Software_Development_for_Complex_Real-Time.pdf?sequence=1&amp;isAllowed=y" title="">original DDD paper</a> outlines many steps and tools for performance metrics, whereas RDD only has completion of the document (and maybe got commit history) as a performance metric.',q,D,ne="DDD vs RDD",$,_,ie="Have you heard of Feature-Driven Development?",F,T,ae='<a href="https://en.wikipedia.org/wiki/Feature-driven_development" title="">https://en.wikipedia.org/wiki/Feature-driven_development</a>',W,w,le="Core Philosophy of RDD",G,x,re="How Do I RDD?",N,g,se="Step 0: Grab an awesome template",O,C,de="Step 1: Summary. Really sell your great idea!",Z,b,ue="Step 2: Feature List",B,E,me="Step 3: Tools",U,H,pe="Step 4: Developer Info / Contributions / Etc.",J,R,he="How is this implementation different from others?",K,A,ve="Attributions / Other Ideas",Q,j,fe="While I came up with this idea independently, because this is the way I write open-source software, it should be noted that there are other less-detailed write-ups of similar approaches with the same name. the main difference between these approaches and mine is that you should NOT complete the README first for my approach.",V,I,ye='<li><a href="https://tom.preston-werner.com/2010/08/23/readme-driven-development.html" title="">Readme Driven Development</a> by Tom Preston-Werner, dated 23 August 2010</li> <li><a href="https://rathes.me/blog/en/readme-driven-development" title="">The power of Readme Driven Development</a> by Rathes Sachchithananthan, site copyright 2020, but article is not dated</li> <li><a href="https://gist.github.com/stefanbirkner/835b7d0c498b4026f65a" title="">Readme Driven Development</a> GitHub gist by <a href="https://github.com/stefanbirkner" title=""><strong>@stefanbirkner</strong></a>, date May 26, 2014</li> <li><a href="https://scilifelab.github.io/software-development/documentation/readme-driven-development/" title="">README Driven Development</a> by SciLifeLab, not dated</li> <li>there are many more, a quick Google search will return a lot of results, all slightly different.</li>';return{c(){i=a("p"),i.textContent=y,v=d(),p=a("h2"),p.textContent=s,h=d(),f=a("p"),f.innerHTML=Y,z=d(),M=a("p"),M.textContent=ee,P=d(),c=a("h3"),c.textContent=te,S=d(),k=a("p"),k.innerHTML=oe,q=d(),D=a("h3"),D.textContent=ne,$=d(),_=a("h3"),_.textContent=ie,F=d(),T=a("p"),T.innerHTML=ae,W=d(),w=a("h2"),w.textContent=le,G=d(),x=a("h2"),x.textContent=re,N=d(),g=a("h3"),g.textContent=se,O=d(),C=a("h3"),C.textContent=de,Z=d(),b=a("h3"),b.textContent=ue,B=d(),E=a("h3"),E.textContent=me,U=d(),H=a("h3"),H.textContent=pe,J=d(),R=a("h2"),R.textContent=he,K=d(),A=a("h2"),A.textContent=ve,Q=d(),j=a("p"),j.textContent=fe,V=d(),I=a("ul"),I.innerHTML=ye,this.h()},l(e){i=l(e,"P",{["data-svelte-h"]:!0}),r(i)!=="svelte-yqcpvk"&&(i.textContent=y),v=u(e),p=l(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(p)!=="svelte-1rqdh24"&&(p.textContent=s),h=u(e),f=l(e,"P",{["data-svelte-h"]:!0}),r(f)!=="svelte-1ukzzkr"&&(f.innerHTML=Y),z=u(e),M=l(e,"P",{["data-svelte-h"]:!0}),r(M)!=="svelte-1xs0o4t"&&(M.textContent=ee),P=u(e),c=l(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(c)!=="svelte-18j576w"&&(c.textContent=te),S=u(e),k=l(e,"P",{["data-svelte-h"]:!0}),r(k)!=="svelte-rv5n6v"&&(k.innerHTML=oe),q=u(e),D=l(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(D)!=="svelte-1sneete"&&(D.textContent=ne),$=u(e),_=l(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(_)!=="svelte-jv9b0m"&&(_.textContent=ie),F=u(e),T=l(e,"P",{["data-svelte-h"]:!0}),r(T)!=="svelte-1y0mg9x"&&(T.innerHTML=ae),W=u(e),w=l(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(w)!=="svelte-s5uqwl"&&(w.textContent=le),G=u(e),x=l(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(x)!=="svelte-1vl0rva"&&(x.textContent=re),N=u(e),g=l(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(g)!=="svelte-1l7iscz"&&(g.textContent=se),O=u(e),C=l(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(C)!=="svelte-qp5bx6"&&(C.textContent=de),Z=u(e),b=l(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(b)!=="svelte-278sjt"&&(b.textContent=ue),B=u(e),E=l(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(E)!=="svelte-181dnru"&&(E.textContent=me),U=u(e),H=l(e,"H3",{id:!0,["data-svelte-h"]:!0}),r(H)!=="svelte-189lyn"&&(H.textContent=pe),J=u(e),R=l(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(R)!=="svelte-4trjt1"&&(R.textContent=he),K=u(e),A=l(e,"H2",{id:!0,["data-svelte-h"]:!0}),r(A)!=="svelte-cgey0g"&&(A.textContent=ve),Q=u(e),j=l(e,"P",{["data-svelte-h"]:!0}),r(j)!=="svelte-1igu6xr"&&(j.textContent=fe),V=u(e),I=l(e,"UL",{["data-svelte-h"]:!0}),r(I)!=="svelte-1mfpev7"&&(I.innerHTML=ye),this.h()},h(){m(p,"id","what-is-readme-driven-development-rdd"),m(c,"id","isnt-this-just-documentation-driven-development"),m(D,"id","ddd-vs-rdd"),m(_,"id","have-you-heard-of-feature-driven-development"),m(w,"id","core-philosophy-of-rdd"),m(x,"id","how-do-i-rdd"),m(g,"id","step-0-grab-an-awesome-template"),m(C,"id","step-1-summary-really-sell-your-great-idea"),m(b,"id","step-2-feature-list"),m(E,"id","step-3-tools"),m(H,"id","step-4-developer-info--contributions--etc"),m(R,"id","how-is-this-implementation-different-from-others"),m(A,"id","attributions--other-ideas")},m(e,t){o(e,i,t),o(e,v,t),o(e,p,t),o(e,h,t),o(e,f,t),o(e,z,t),o(e,M,t),o(e,P,t),o(e,c,t),o(e,S,t),o(e,k,t),o(e,q,t),o(e,D,t),o(e,$,t),o(e,_,t),o(e,F,t),o(e,T,t),o(e,W,t),o(e,w,t),o(e,G,t),o(e,x,t),o(e,N,t),o(e,g,t),o(e,O,t),o(e,C,t),o(e,Z,t),o(e,b,t),o(e,B,t),o(e,E,t),o(e,U,t),o(e,H,t),o(e,J,t),o(e,R,t),o(e,K,t),o(e,A,t),o(e,Q,t),o(e,j,t),o(e,V,t),o(e,I,t)},p:xe,d(e){e&&(n(i),n(v),n(p),n(h),n(f),n(z),n(M),n(P),n(c),n(S),n(k),n(q),n(D),n($),n(_),n(F),n(T),n(W),n(w),n(G),n(x),n(N),n(g),n(O),n(C),n(Z),n(b),n(B),n(E),n(U),n(H),n(J),n(R),n(K),n(A),n(Q),n(j),n(V),n(I))}}}function Ie(L){let i,y;const v=[L[0],_e];let p={$$slots:{default:[je]},$$scope:{ctx:L}};for(let s=0;s<v.length;s+=1)p=X(p,v[s]);return i=new Te({props:p}),{c(){be(i.$$.fragment)},l(s){Ee(i.$$.fragment,s)},m(s,h){He(i,s,h),y=!0},p(s,[h]){const f=h&1?ke(v,[h&1&&De(s[0]),h&0&&De(_e)]):{};h&2&&(f.$$scope={dirty:h,ctx:s}),i.$set(f)},i(s){y||(Re(i.$$.fragment,s),y=!0)},o(s){Ae(i.$$.fragment,s),y=!1},d(s){Me(i,s)}}}const _e={title:"Introduction to README-Driven Development",description:"Learn about README-Driven Development - what it is, where it came from, and how to do it.",excerpt:"README-Driven Development, or RDD for short, is a method of rapid organization of ideas. ",created_at:"2022-11-26T20:27:03.147Z",updated_at:"2022-11-29T14:58:38.669Z",coverImage:"",coverImageAlt:"",draft:!0,tags:"",categories:"",twitterImage:"",opengraphImage:"",meta:"",layout:"",preview:`Do you HATE writing documentation for your awesome project and know that it's so awesome everyone is going to help, 
but no one does? Have you ever had a great idea&trade; but aren't organized enough to really get a good start? 
Ever wondered how to...`,previewHtml:"<p>Do you HATE writing documentation for your awesome project and know that it's so awesome everyone is going to help, but no one does? Have you ever had a great idea&#x26;trade; but aren't organized enough to really get a good start? Ever wondered how ...</p>",textContent:`Do you HATE writing documentation for your awesome project and know that it's so awesome everyone is going to help, 
but no one does? Have you ever had a great idea&trade; but aren't organized enough to really get a good start? 
Ever wondered how to start organizing your ideas so your project is...`};function Le(L,i,y){return L.$$set=v=>{y(0,i=X(X({},i),ce(v)))},i=ce(i),[i]}class $e extends ge{constructor(i){super(),Ce(this,i,Le,Ie,we,{})}}export{$e as default,_e as metadata};