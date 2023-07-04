import{s as N,r as j,B as E,f as l,a as _,g as i,h as S,C as k,c as f,d as C,j as w,i as V,x as s,y as z}from"./scheduler.28ea7184.js";import{S as I,i as K,b as U,d as W,m as Z,a as D,t as F,e as G}from"./index.8021bc93.js";import{g as J,a as L}from"./spread.8a54911c.js";import{P as Q}from"./post.60382223.js";function X(c){let e,n,r="On This Page",d,t,o='<li><a href="#project-setup">Project Setup</a><ul><li><a href="#add-markdown-support">add markdown support</a></li></ul></li>',m,u,T="Project Setup",y,h,O=`<code class="language-undefined"># make sure you are using the right version:
# install nvm
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# make sure you are using the new/updated NVM:
. ~/.bashrc
# install node latest (18.5.0) at the time of thsi writing
nvm install node
# install pnpm:
npm install -g pnpm
# Step 1: skaffold with sveltekit:
pnpm create svelte blog-example
# select &quot;demo app&quot;, &quot;typescript&quot;, &quot;eslint&quot;, &quot;prettier&quot;, &quot;playwright&quot;
cd blog-example
pnpm i
make sure we save the current version of node so we can get back to it
echo &#96;node --version&#96; &gt; .nvmrc
# save with git
git init &amp;&amp; git add -A &amp;&amp; git commit -m &quot;Initial commit&quot;
# open the sample app
pnpm run dev --open
# open up your favorite editor (mine is the insiders version of vscode)
code-insiders .</code>`,b,p,$="add markdown support",q,g,B='<code class="language-undefined">pnpx svelte-add@latest mdsvex</code>',P,v,H='reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"';return{c(){e=l("nav"),n=l("h2"),n.textContent=r,d=_(),t=l("ul"),t.innerHTML=o,m=_(),u=l("h2"),u.textContent=T,y=_(),h=l("pre"),b=_(),p=l("h3"),p.textContent=$,q=_(),g=l("pre"),P=_(),v=l("p"),v.textContent=H,this.h()},l(x){e=i(x,"NAV",{class:!0});var a=S(e);n=i(a,"H2",{id:!0,["data-svelte-h"]:!0}),k(n)!=="svelte-1n0uvt0"&&(n.textContent=r),d=f(a),t=i(a,"UL",{["data-svelte-h"]:!0}),k(t)!=="svelte-3obx4a"&&(t.innerHTML=o),m=f(a),u=i(a,"H2",{id:!0,["data-svelte-h"]:!0}),k(u)!=="svelte-z9v2mh"&&(u.textContent=T),y=f(a),h=i(a,"PRE",{class:!0});var R=S(h);R.forEach(C),b=f(a),p=i(a,"H3",{id:!0,["data-svelte-h"]:!0}),k(p)!=="svelte-1t2exym"&&(p.textContent=$),q=f(a),g=i(a,"PRE",{class:!0});var A=S(g);A.forEach(C),P=f(a),v=i(a,"P",{["data-svelte-h"]:!0}),k(v)!=="svelte-1wmsi5d"&&(v.textContent=H),a.forEach(C),this.h()},h(){w(n,"id","on-this-page"),w(u,"id","project-setup"),w(h,"class","language-undefined"),w(p,"id","add-markdown-support"),w(g,"class","language-undefined"),w(e,"class","toc")},m(x,a){V(x,e,a),s(e,n),s(e,d),s(e,t),s(e,m),s(e,u),s(e,y),s(e,h),h.innerHTML=O,s(e,b),s(e,p),s(e,q),s(e,g),g.innerHTML=B,s(e,P),s(e,v)},p:z,d(x){x&&C(e)}}}function Y(c){let e,n;const r=[c[0],M];let d={$$slots:{default:[X]},$$scope:{ctx:c}};for(let t=0;t<r.length;t+=1)d=j(d,r[t]);return e=new Q({props:d}),{c(){U(e.$$.fragment)},l(t){W(e.$$.fragment,t)},m(t,o){Z(e,t,o),n=!0},p(t,[o]){const m=o&1?J(r,[o&1&&L(t[0]),o&0&&L(M)]):{};o&2&&(m.$$scope={dirty:o,ctx:t}),e.$set(m)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}const M={draft:!0,comments:!0,view:"post",layout:"post",author:"skamansam",title:"Creating a Blog in Svelte",description:"We are going to go step by step and see how to create a markdown-based blog using SvelteKit. (up-to-date as of 07-11-22)",excerpt:null,categories:["programming","Svelte","Blog"],tags:["blog","how to","Rude Boy Solutions"],created_at:"2022-07-11T09:50:16.000Z",preview:`On This Page

- Project Setup
- add markdown support`,previewHtml:"<h2>On This Page</h2>",textContent:`On This Page

- Project Setup
- add markdown support


Project Setup



add markdown support



reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"`};function ee(c,e,n){return c.$$set=r=>{n(0,e=j(j({},e),E(r)))},e=E(e),[e]}class oe extends I{constructor(e){super(),K(this,e,ee,Y,N,{})}}export{oe as default,M as metadata};
