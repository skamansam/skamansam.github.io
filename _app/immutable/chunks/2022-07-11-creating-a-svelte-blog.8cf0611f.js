import{S as ae,i as oe,s as ne,C as R,y as se,z as re,A as le,H as ie,a0 as F,g as de,d as ue,B as pe,L as J,k as l,q as k,a as P,l as i,m as d,r as q,h as s,c as y,n as c,b as ce,G as t,I as he}from"./index.8495bde4.js";import{P as me}from"./post.46c75fab.js";function ge(m){let e,r,u,h,a,n,p,j,E,x,g,$,T,_,H,L,f,X=`<code class="language-undefined"># make sure you are using the right version:
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
code-insiders .</code>`,O,v,A,B,w,Y='<code class="language-undefined">pnpx svelte-add@latest mdsvex</code>',C,S,I;return{c(){e=l("nav"),r=l("h2"),u=k("On This Page"),h=P(),a=l("ul"),n=l("li"),p=l("a"),j=k("Project Setup"),E=l("ul"),x=l("li"),g=l("a"),$=k("add markdown support"),T=P(),_=l("h2"),H=k("Project Setup"),L=P(),f=l("pre"),O=P(),v=l("h3"),A=k("add markdown support"),B=P(),w=l("pre"),C=P(),S=l("p"),I=k('reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"'),this.h()},l(b){e=i(b,"NAV",{class:!0});var o=d(e);r=i(o,"H2",{id:!0});var N=d(r);u=q(N,"On This Page"),N.forEach(s),h=y(o),a=i(o,"UL",{});var U=d(a);n=i(U,"LI",{});var M=d(n);p=i(M,"A",{href:!0});var V=d(p);j=q(V,"Project Setup"),V.forEach(s),E=i(M,"UL",{});var z=d(E);x=i(z,"LI",{});var G=d(x);g=i(G,"A",{href:!0});var K=d(g);$=q(K,"add markdown support"),K.forEach(s),G.forEach(s),z.forEach(s),M.forEach(s),U.forEach(s),T=y(o),_=i(o,"H2",{id:!0});var W=d(_);H=q(W,"Project Setup"),W.forEach(s),L=y(o),f=i(o,"PRE",{class:!0});var ee=d(f);ee.forEach(s),O=y(o),v=i(o,"H3",{id:!0});var Z=d(v);A=q(Z,"add markdown support"),Z.forEach(s),B=y(o),w=i(o,"PRE",{class:!0});var te=d(w);te.forEach(s),C=y(o),S=i(o,"P",{});var D=d(S);I=q(D,'reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"'),D.forEach(s),o.forEach(s),this.h()},h(){c(r,"id","on-this-page"),c(p,"href","#project-setup"),c(g,"href","#add-markdown-support"),c(_,"id","project-setup"),c(f,"class","language-undefined"),c(v,"id","add-markdown-support"),c(w,"class","language-undefined"),c(e,"class","toc")},m(b,o){ce(b,e,o),t(e,r),t(r,u),t(e,h),t(e,a),t(a,n),t(n,p),t(p,j),t(n,E),t(E,x),t(x,g),t(g,$),t(e,T),t(e,_),t(_,H),t(e,L),t(e,f),f.innerHTML=X,t(e,O),t(e,v),t(v,A),t(e,B),t(e,w),w.innerHTML=Y,t(e,C),t(e,S),t(S,I)},p:he,d(b){b&&s(e)}}}function _e(m){let e,r;const u=[m[0],Q];let h={$$slots:{default:[ge]},$$scope:{ctx:m}};for(let a=0;a<u.length;a+=1)h=R(h,u[a]);return e=new me({props:h}),{c(){se(e.$$.fragment)},l(a){re(e.$$.fragment,a)},m(a,n){le(e,a,n),r=!0},p(a,[n]){const p=n&1?ie(u,[n&1&&F(a[0]),n&0&&F(Q)]):{};n&2&&(p.$$scope={dirty:n,ctx:a}),e.$set(p)},i(a){r||(de(e.$$.fragment,a),r=!0)},o(a){ue(e.$$.fragment,a),r=!1},d(a){pe(e,a)}}}const Q={draft:!0,comments:!0,view:"post",layout:"post",author:"skamansam",title:"Creating a Blog in Svelte",description:"We are going to go step by step and see how to create a markdown-based blog using SvelteKit. (up-to-date as of 07-11-22)",excerpt:null,categories:["programming","Svelte","Blog"],tags:["blog","how to","Rude Boy Solutions"],created_at:"2022-07-11T09:50:16.000Z",preview:`On This Page

- Project Setup
- add markdown support`,previewHtml:"<h2>On This Page</h2>",textContent:`On This Page

- Project Setup
- add markdown support


Project Setup



add markdown support



reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"`};function fe(m,e,r){return m.$$set=u=>{r(0,e=R(R({},e),J(u)))},e=J(e),[e]}class ke extends ae{constructor(e){super(),oe(this,e,fe,_e,ne,{})}}export{ke as default,Q as metadata};
