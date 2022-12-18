import{S as ae,i as se,s as oe,C as D,w as le,x as ne,y as ie,H as re,Z as W,f as pe,t as ue,z as me,K as F,k as p,q as d,a as E,l as u,m,r as f,h as a,c as x,n as A,b as n,G as i,B as ce}from"./index-6a3f2268.js";import{P as de}from"./post-3c5a9cb3.js";function fe(g){let t,r,c,_,s,o,w,P,B,I,S,j,K,$,k,L,O,v,X=`<code class="language-undefined"># make sure you are using the right version:
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
code-insiders .</code>`,C,b,M,H,h,Y='<code class="language-undefined">pnpx svelte-add@latest mdsvex</code>',T,q,R;return{c(){t=p("nav"),r=p("h2"),c=d("On This Page"),_=E(),s=p("blockquote"),o=p("p"),w=d("In this series, I will be using "),P=p("code"),B=d("pnpm"),I=d(" instead of "),S=p("code"),j=d("npm"),K=d(" as my package manager."),$=E(),k=p("h2"),L=d("Project Setup"),O=E(),v=p("pre"),C=E(),b=p("h3"),M=d("add markdown support"),H=E(),h=p("pre"),T=E(),q=p("p"),R=d('reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"'),this.h()},l(e){t=u(e,"NAV",{class:!0});var l=m(t);r=u(l,"H2",{});var N=m(r);c=f(N,"On This Page"),N.forEach(a),l.forEach(a),_=x(e),s=u(e,"BLOCKQUOTE",{});var V=m(s);o=u(V,"P",{});var y=m(o);w=f(y,"In this series, I will be using "),P=u(y,"CODE",{});var Z=m(P);B=f(Z,"pnpm"),Z.forEach(a),I=f(y," instead of "),S=u(y,"CODE",{});var z=m(S);j=f(z,"npm"),z.forEach(a),K=f(y," as my package manager."),y.forEach(a),V.forEach(a),$=x(e),k=u(e,"H2",{});var G=m(k);L=f(G,"Project Setup"),G.forEach(a),O=x(e),v=u(e,"PRE",{class:!0});var ee=m(v);ee.forEach(a),C=x(e),b=u(e,"H3",{});var Q=m(b);M=f(Q,"add markdown support"),Q.forEach(a),H=x(e),h=u(e,"PRE",{class:!0});var te=m(h);te.forEach(a),T=x(e),q=u(e,"P",{});var U=m(q);R=f(U,'reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"'),U.forEach(a),this.h()},h(){A(t,"class","toc"),A(v,"class","language-undefined"),A(h,"class","language-undefined")},m(e,l){n(e,t,l),i(t,r),i(r,c),n(e,_,l),n(e,s,l),i(s,o),i(o,w),i(o,P),i(P,B),i(o,I),i(o,S),i(S,j),i(o,K),n(e,$,l),n(e,k,l),i(k,L),n(e,O,l),n(e,v,l),v.innerHTML=X,n(e,C,l),n(e,b,l),i(b,M),n(e,H,l),n(e,h,l),h.innerHTML=Y,n(e,T,l),n(e,q,l),i(q,R)},p:ce,d(e){e&&a(t),e&&a(_),e&&a(s),e&&a($),e&&a(k),e&&a(O),e&&a(v),e&&a(C),e&&a(b),e&&a(H),e&&a(h),e&&a(T),e&&a(q)}}}function _e(g){let t,r;const c=[g[0],J];let _={$$slots:{default:[fe]},$$scope:{ctx:g}};for(let s=0;s<c.length;s+=1)_=D(_,c[s]);return t=new de({props:_}),{c(){le(t.$$.fragment)},l(s){ne(t.$$.fragment,s)},m(s,o){ie(t,s,o),r=!0},p(s,[o]){const w=o&1?re(c,[o&1&&W(s[0]),o&0&&W(J)]):{};o&2&&(w.$$scope={dirty:o,ctx:s}),t.$set(w)},i(s){r||(pe(t.$$.fragment,s),r=!0)},o(s){ue(t.$$.fragment,s),r=!1},d(s){me(t,s)}}}const J={draft:!0,comments:!0,view:"post",layout:"post",author:"skamansam",title:"Creating a Blog in Svelte",description:"We are going to go step by step and see how to create a markdown-based blog using SvelteKit. (up-to-date as of 07-11-22)",excerpt:null,categories:["programming","Svelte","Blog"],tags:["blog","how to","Rude Boy Solutions"],created_at:"2022-07-11T09:50:16.000Z"};function ve(g,t,r){return g.$$set=c=>{r(0,t=D(D({},t),F(c)))},t=F(t),[t]}class we extends ae{constructor(t){super(),se(this,t,ve,_e,oe,{})}}export{we as default,J as metadata};
