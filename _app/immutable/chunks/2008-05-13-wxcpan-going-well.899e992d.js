import{s as I,r as w,B as y,f as h,a as g,g as _,C as x,c as P,h as N,d as c,j as $,i as p,y as T}from"./scheduler.28ea7184.js";import{S as b,i as M,b as U,d as H,m as Y,a as W,t as j,e as E}from"./index.8021bc93.js";import{g as G,a as k}from"./spread.8a54911c.js";import{P as B}from"./post.d4e0232c.js";function R(d){let e,i="I have successfully managed to implement a CPANPLUS::Shell.  You call the shell like:",o,n,a=`<code class="language-perl">perl <span class="token operator">-</span>MCPANPLUS <span class="token operator">-e</span> <span class="token string">'shell(Wx)'</span></code>`,l,r,C="I have created a perl script for testing this.",v,u,S="I have also created a new svn branch, <code>development</code>. This is the current working branch.",f,m,L=`You can view or download my current development code, via svn. <a href="http://code.google.com/p/wxcpan/source/browse" title="">See the googlecode
svn repo here</a>`;return{c(){e=h("p"),e.textContent=i,o=g(),n=h("pre"),l=g(),r=h("p"),r.textContent=C,v=g(),u=h("p"),u.innerHTML=S,f=g(),m=h("p"),m.innerHTML=L,this.h()},l(t){e=_(t,"P",{["data-svelte-h"]:!0}),x(e)!=="svelte-xrd9wj"&&(e.textContent=i),o=P(t),n=_(t,"PRE",{class:!0});var s=N(n);s.forEach(c),l=P(t),r=_(t,"P",{["data-svelte-h"]:!0}),x(r)!=="svelte-91lwcf"&&(r.textContent=C),v=P(t),u=_(t,"P",{["data-svelte-h"]:!0}),x(u)!=="svelte-13w2if3"&&(u.innerHTML=S),f=P(t),m=_(t,"P",{["data-svelte-h"]:!0}),x(m)!=="svelte-9coa8o"&&(m.innerHTML=L),this.h()},h(){$(n,"class","language-perl")},m(t,s){p(t,e,s),p(t,o,s),p(t,n,s),n.innerHTML=a,p(t,l,s),p(t,r,s),p(t,v,s),p(t,u,s),p(t,f,s),p(t,m,s)},p:T,d(t){t&&(c(e),c(o),c(n),c(l),c(r),c(v),c(u),c(f),c(m))}}}function q(d){let e,i;const o=[d[0],A];let n={$$slots:{default:[R]},$$scope:{ctx:d}};for(let a=0;a<o.length;a+=1)n=w(n,o[a]);return e=new B({props:n}),{c(){U(e.$$.fragment)},l(a){H(e.$$.fragment,a)},m(a,l){Y(e,a,l),i=!0},p(a,[l]){const r=l&1?G(o,[l&1&&k(a[0]),l&0&&k(A)]):{};l&2&&(r.$$scope={dirty:l,ctx:a}),e.$set(r)},i(a){i||(W(e.$$.fragment,a),i=!0)},o(a){j(e.$$.fragment,a),i=!1},d(a){E(e,a)}}}const A={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"wxCPAN Going Well",description:"wxCPAN Going Well",excerpt:"I have successfully managed to implement a CPANPLUS::Shell.",cover:!1,coverImage:"/images/GSoC-logo-horizontal-800.png",coverAlt:"RBE Logo",categories:["perl"],tags:["gSoC"],created_at:"2008-05-13 14:56",updated_at:"2022-11-11T03:50:25.290Z",preview:`I have successfully managed to implement a CPANPLUS::Shell.  You call the shell like:

`,previewHtml:"<p>I have successfully managed to implement a CPANPLUS::Shell. You call the shell like:</p> <pre><code>perl -MCPANPLUS -e 'shell(Wx)' </code></pre>",textContent:`I have successfully managed to implement a CPANPLUS::Shell.  You call the shell like:



I have created a perl script for testing this.

I have also created a new svn branch, . This is the current working branch.

You can view or download my current development code, via svn. See the googlecode...`};function z(d,e,i){return d.$$set=o=>{i(0,e=w(w({},e),y(o)))},e=y(e),[e]}class K extends b{constructor(e){super(),M(this,e,z,q,I,{})}}export{K as default,A as metadata};
