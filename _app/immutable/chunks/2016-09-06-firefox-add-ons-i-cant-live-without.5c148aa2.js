import{s as v,r as h,B as d,f,a as g,g as m,C as _,c as b,i as l,y as w,d as c}from"./scheduler.28ea7184.js";import{S as x,i as I,b as W,d as T,m as y,a as L,t as C,e as $}from"./index.8021bc93.js";import{g as B,a as p}from"./spread.8a54911c.js";import{P as F}from"./post.c0381be7.js";function S(i){let e,s=`I have been a web developer since 1996, and have seen many things come and go in
web technologies. I have since read Tim Berners-Lee's book on how he started the
Web, "Weaving The Web". In it, he explains about his original ideas for
seperation of content and style - which is finally here - in XHTML and CSS.
Since Firefox is the best browser so far (Google's Chrome a close second), here
is a list of the best Firefox add-ons.`,o,a,t="<li>Firebug</li>";return{c(){e=f("p"),e.textContent=s,o=g(),a=f("ol"),a.innerHTML=t},l(n){e=m(n,"P",{["data-svelte-h"]:!0}),_(e)!=="svelte-16i1641"&&(e.textContent=s),o=b(n),a=m(n,"OL",{["data-svelte-h"]:!0}),_(a)!=="svelte-93hcof"&&(a.innerHTML=t)},m(n,r){l(n,e,r),l(n,o,r),l(n,a,r)},p:w,d(n){n&&(c(e),c(o),c(a))}}}function k(i){let e,s;const o=[i[0],u];let a={$$slots:{default:[S]},$$scope:{ctx:i}};for(let t=0;t<o.length;t+=1)a=h(a,o[t]);return e=new F({props:a}),{c(){W(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,n){y(e,t,n),s=!0},p(t,[n]){const r=n&1?B(o,[n&1&&p(t[0]),n&0&&p(u)]):{};n&2&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){s||(L(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){$(e,t)}}}const u={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Firefox Add-Ons I can't Live Without",description:"Firefox Add-Ons I can't Live Without",excerpt:"Since Firefox is the best browser so far (Google's Chrome a close second), here is a list of the best Firefox add-ons.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["web-development"],tags:["Browser Wars"],created_at:"2016-09-06T09:36:41.000Z",updated_at:"2016-09-06T09:36:41.000Z",preview:`I have been a web developer since 1996, and have seen many things come and go in
web technologies. I have since read Tim Berners-Lee's book on how he started the
Web, "Weaving The Web". In it, he explains about his original ideas for
seperation of...`,previewHtml:`<p>I have been a web developer since 1996, and have seen many things come and go in web technologies. I have since read Tim Berners-Lee's book on how he started the Web, "Weaving The Web". In it, he explains about his original ideas for seperation of co...</p>`,textContent:`I have been a web developer since 1996, and have seen many things come and go in
web technologies. I have since read Tim Berners-Lee's book on how he started the
Web, "Weaving The Web". In it, he explains about his original ideas for
seperation of content and style - which is finally here - in...`};function H(i,e,s){return i.$$set=o=>{s(0,e=h(h({},e),d(o)))},e=d(e),[e]}class G extends x{constructor(e){super(),I(this,e,H,k,v,{})}}export{G as default,u as metadata};