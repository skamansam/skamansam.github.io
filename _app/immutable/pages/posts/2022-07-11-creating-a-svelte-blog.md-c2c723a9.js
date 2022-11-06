import{S as ae,i as oe,s as ne,D as R,x as se,y as re,z as le,A as ie,B as G,r as de,p as pe,C as ue,L as J,e as l,t as k,k as P,c as i,a as d,h as x,d as s,m as y,b as c,g as ce,I as t,n as me}from"../../chunks/index-f0cd6aaa.js";import{P as he}from"../../chunks/post-d11a0746.js";import"../../chunks/stores-707f9fa0.js";import"../../chunks/settings-69239d06.js";function ge(h){let e,r,p,m,a,n,u,j,E,q,g,T,$,_,L,H,f,X=`<code class="language-undefined"># make sure you are using the right version:
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
code-insiders .</code>`,O,v,A,B,w,Y='<code class="language-undefined">pnpx svelte-add@latest mdsvex</code>',C,S,I;return{c(){e=l("nav"),r=l("h2"),p=k("On This Page"),m=P(),a=l("ul"),n=l("li"),u=l("a"),j=k("Project Setup"),E=l("ul"),q=l("li"),g=l("a"),T=k("add markdown support"),$=P(),_=l("h2"),L=k("Project Setup"),H=P(),f=l("pre"),O=P(),v=l("h3"),A=k("add markdown support"),B=P(),w=l("pre"),C=P(),S=l("p"),I=k("reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, \u201Creload window\u201D"),this.h()},l(b){e=i(b,"NAV",{class:!0});var o=d(e);r=i(o,"H2",{id:!0});var N=d(r);p=x(N,"On This Page"),N.forEach(s),m=y(o),a=i(o,"UL",{});var U=d(a);n=i(U,"LI",{});var M=d(n);u=i(M,"A",{href:!0});var V=d(u);j=x(V,"Project Setup"),V.forEach(s),E=i(M,"UL",{});var z=d(E);q=i(z,"LI",{});var D=d(q);g=i(D,"A",{href:!0});var K=d(g);T=x(K,"add markdown support"),K.forEach(s),D.forEach(s),z.forEach(s),M.forEach(s),U.forEach(s),$=y(o),_=i(o,"H2",{id:!0});var W=d(_);L=x(W,"Project Setup"),W.forEach(s),H=y(o),f=i(o,"PRE",{class:!0});var ee=d(f);ee.forEach(s),O=y(o),v=i(o,"H3",{id:!0});var Z=d(v);A=x(Z,"add markdown support"),Z.forEach(s),B=y(o),w=i(o,"PRE",{class:!0});var te=d(w);te.forEach(s),C=y(o),S=i(o,"P",{});var F=d(S);I=x(F,"reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, \u201Creload window\u201D"),F.forEach(s),o.forEach(s),this.h()},h(){c(r,"id","on-this-page"),c(u,"href","#project-setup"),c(g,"href","#add-markdown-support"),c(_,"id","project-setup"),c(f,"class","language-undefined"),c(v,"id","add-markdown-support"),c(w,"class","language-undefined"),c(e,"class","toc")},m(b,o){ce(b,e,o),t(e,r),t(r,p),t(e,m),t(e,a),t(a,n),t(n,u),t(u,j),t(n,E),t(E,q),t(q,g),t(g,T),t(e,$),t(e,_),t(_,L),t(e,H),t(e,f),f.innerHTML=X,t(e,O),t(e,v),t(v,A),t(e,B),t(e,w),w.innerHTML=Y,t(e,C),t(e,S),t(S,I)},p:me,d(b){b&&s(e)}}}function _e(h){let e,r;const p=[h[0],Q];let m={$$slots:{default:[ge]},$$scope:{ctx:h}};for(let a=0;a<p.length;a+=1)m=R(m,p[a]);return e=new he({props:m}),{c(){se(e.$$.fragment)},l(a){re(e.$$.fragment,a)},m(a,n){le(e,a,n),r=!0},p(a,[n]){const u=n&1?ie(p,[n&1&&G(a[0]),n&0&&G(Q)]):{};n&2&&(u.$$scope={dirty:n,ctx:a}),e.$set(u)},i(a){r||(de(e.$$.fragment,a),r=!0)},o(a){pe(e.$$.fragment,a),r=!1},d(a){ue(e,a)}}}const Q={draft:!0,comments:!0,view:"post",layout:"post",author:"skamansam",title:"Creating a Blog in Svelte",description:"We are going to go step by step and see how to create a markdown-based blog using SvelteKit. (up-to-date as of 07-11-22)",excerpt:null,categories:["programming","Svelte","Blog"],tags:["blog","how to","Rude Boy Solutions"],created_at:"2022-07-11T09:50:16.000Z",readingTime:{text:"1 min read",minutes:.785,time:47100,words:157},preview:`On This Page

- Project Setup
- add markdown support`,previewHtml:"<h2>On This Page</h2>",textContent:`On This Page

- Project Setup
- add markdown support


Project Setup



add markdown support



reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, \u201Creload window\u201D`};function fe(h,e,r){return h.$$set=p=>{r(0,e=R(R({},e),J(p)))},e=J(e),[e]}class xe extends ae{constructor(e){super(),oe(this,e,fe,_e,ne,{})}}export{xe as default,Q as metadata};
