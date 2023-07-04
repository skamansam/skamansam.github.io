import{s as nn,N as ln,f as d,a as C,g as f,h as w,d as n,c as $,j as h,i as p,x as H,P as on,Q as cn,R as un,z as rn,o as kn,l as sn,m as en,E as dn,n as fn,p as vn,r as yt,B as Zt,C as y,y as at}from"./scheduler.28ea7184.js";import{S as an,i as pn,a as Q,t as G,b as O,d as tt,m as nt,e as st}from"./index.8021bc93.js";import{g as mn,a as Kt}from"./spread.8a54911c.js";import{P as hn}from"./post.e3899d02.js";import{e as Qt}from"./each.e59479a4.js";function Gt(_,s,o){const g=_.slice();return g[8]=s[o],g[10]=o,g}function Ot(_){let s,o=_[8]+"",g,k,e,a;function r(){return _[6](_[10])}return{c(){s=d("li"),g=sn(o),this.h()},l(v){s=f(v,"LI",{role:!0,class:!0});var l=w(s);g=en(l,o),l.forEach(n),this.h()},h(){h(s,"role","tab"),h(s,"class",k="tab "+(_[10]===_[0]&&"active")+" svelte-5h3dpd")},m(v,l){p(v,s,l),H(s,g),e||(a=dn(s,"click",r),e=!0)},p(v,l){_=v,l&4&&o!==(o=_[8]+"")&&fn(g,o),l&1&&k!==(k="tab "+(_[10]===_[0]&&"active")+" svelte-5h3dpd")&&h(s,"class",k)},d(v){v&&n(s),e=!1,a()}}}function gn(_){let s,o,g,k,e,a=Qt(_[2]),r=[];for(let m=0;m<a.length;m+=1)r[m]=Ot(Gt(_,a,m));const v=_[5].default,l=ln(v,_,_[4],null);return{c(){s=d("div"),o=d("ul");for(let m=0;m<r.length;m+=1)r[m].c();g=C(),k=d("div"),l&&l.c(),this.h()},l(m){s=f(m,"DIV",{});var i=w(s);o=f(i,"UL",{role:!0,class:!0});var u=w(o);for(let b=0;b<r.length;b+=1)r[b].l(u);u.forEach(n),g=$(i),k=f(i,"DIV",{class:!0});var x=w(k);l&&l.l(x),x.forEach(n),i.forEach(n),this.h()},h(){h(o,"role","tablist"),h(o,"class","tabList svelte-5h3dpd"),h(k,"class","tabPanels border rounded-sm p-2 svelte-5h3dpd")},m(m,i){p(m,s,i),H(s,o);for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(o,null);H(s,g),H(s,k),l&&l.m(k,null),_[7](k),e=!0},p(m,[i]){if(i&13){a=Qt(m[2]);let u;for(u=0;u<a.length;u+=1){const x=Gt(m,a,u);r[u]?r[u].p(x,i):(r[u]=Ot(x),r[u].c(),r[u].m(o,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=a.length}l&&l.p&&(!e||i&16)&&on(l,v,m,m[4],e?un(v,m[4],i,null):cn(m[4]),null)},i(m){e||(Q(l,m),e=!0)},o(m){G(l,m),e=!1},d(m){m&&n(s),rn(r,m),l&&l.d(m),_[7](null)}}}function _n(_,s,o){let{$$slots:g={},$$scope:k}=s,e=0,a=null,r=[];kn(()=>{console.log(a.children),o(2,r=Array.from(a.children).map(u=>u.getAttribute("title"))),Array.from(a.children).forEach(u=>u.setAttribute("role","tabpanel")),a.children[e].classList.add("active")});const v=i=>{const u=a.children[i];a.children[e].classList.remove("active"),u.classList.add("active"),o(0,e=i)},l=i=>v(i);function m(i){vn[i?"unshift":"push"](()=>{a=i,o(1,a)})}return _.$$set=i=>{"$$scope"in i&&o(4,k=i.$$scope)},[e,a,r,v,k,g,l,m]}class et extends an{constructor(s){super(),pn(this,s,_n,gn,nn,{})}}function Cn(_){let s,o,g,k=`<code class="language-sh"><span class="token function">pnpm</span> create vite
<span class="token comment"># follow the prompts!</span></code>`,e,a,r,v=`<code class="language-sh"><span class="token function">pnpm</span> create svelte@latest my-app
<span class="token builtin class-name">cd</span> my-app
<span class="token function">pnpm</span> <span class="token function">install</span>
<span class="token function">pnpm</span> dev</code>`,l,m,i,u='<code class="language-sh">pnpx create-next-app</code>';return{c(){s=d("div"),o=sn(`You can create Vite-based apps using the vite skaffold tool. This is the recommended way, as Vite is 
much faster and easier to use than webpack-based projects like create-react-app and create-svelte.
`),g=d("pre"),e=C(),a=d("div"),r=d("pre"),l=C(),m=d("div"),i=d("pre"),this.h()},l(x){s=f(x,"DIV",{title:!0});var b=w(s);o=en(b,`You can create Vite-based apps using the vite skaffold tool. This is the recommended way, as Vite is 
much faster and easier to use than webpack-based projects like create-react-app and create-svelte.
`),g=f(b,"PRE",{class:!0});var j=w(g);j.forEach(n),b.forEach(n),e=$(x),a=f(x,"DIV",{title:!0});var U=w(a);r=f(U,"PRE",{class:!0});var E=w(r);E.forEach(n),U.forEach(n),l=$(x),m=f(x,"DIV",{title:!0});var X=w(m);i=f(X,"PRE",{class:!0});var M=w(i);M.forEach(n),X.forEach(n),this.h()},h(){h(g,"class","language-sh"),h(s,"title","Vite"),h(r,"class","language-sh"),h(a,"title","Svelte/Kit"),h(i,"class","language-sh"),h(m,"title","React (Next.js)")},m(x,b){p(x,s,b),H(s,o),H(s,g),g.innerHTML=k,p(x,e,b),p(x,a,b),H(a,r),r.innerHTML=v,p(x,l,b),p(x,m,b),H(m,i),i.innerHTML=u},p:at,d(x){x&&(n(s),n(e),n(a),n(l),n(m))}}}function $n(_){let s,o,g=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-component<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Hello World!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,k,e,a,r=`<code class="language-js"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"my-component"</span><span class="token operator">></span>
      Hello World<span class="token operator">!</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){s=d("div"),o=d("pre"),k=C(),e=d("div"),a=d("pre"),this.h()},l(v){s=f(v,"DIV",{title:!0});var l=w(s);o=f(l,"PRE",{class:!0});var m=w(o);m.forEach(n),l.forEach(n),k=$(v),e=f(v,"DIV",{title:!0});var i=w(e);a=f(i,"PRE",{class:!0});var u=w(a);u.forEach(n),i.forEach(n),this.h()},h(){h(o,"class","language-html"),h(s,"title","Svelte"),h(a,"class","language-js"),h(e,"title","React")},m(v,l){p(v,s,l),H(s,o),o.innerHTML=g,p(v,k,l),p(v,e,l),H(e,a),a.innerHTML=r},p:at,d(v){v&&(n(s),n(k),n(e))}}}function bn(_){let s,o,g=`<code class="language-jsx"><span class="token comment">/* myComponent.js */</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-component<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  Hello World!
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">/* app.js */</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token plain-text">
  import MyComponent from './myComponent';
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
  This is an app!
  </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,k,e,a,r=`<code class="language-jsx"><span class="token comment">/* myComponent.jsx */</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my-component<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      Hello World!
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* app.jsx */</span>
<span class="token keyword">import</span> MyComponent <span class="token keyword">from</span> <span class="token string">'./myComponent.js'</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      This is an app!
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">MyComponent</span></span><span class="token punctuation">/></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span>
</code>`;return{c(){s=d("div"),o=d("pre"),k=C(),e=d("div"),a=d("pre"),this.h()},l(v){s=f(v,"DIV",{title:!0});var l=w(s);o=f(l,"PRE",{class:!0});var m=w(o);m.forEach(n),l.forEach(n),k=$(v),e=f(v,"DIV",{title:!0});var i=w(e);a=f(i,"PRE",{class:!0});var u=w(a);u.forEach(n),i.forEach(n),this.h()},h(){h(o,"class","language-jsx"),h(s,"title","Svelte"),h(a,"class","language-jsx"),h(e,"title","React")},m(v,l){p(v,s,l),H(s,o),o.innerHTML=g,p(v,k,l),p(v,e,l),H(e,a),a.innerHTML=r},p:at,d(v){v&&(n(s),n(k),n(e))}}}function xn(_){let s,o,g=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
  Hello World!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>
  Nice to meet you! 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></code>`,k,e,a,r=`JSX requires a return of only one element, so you need to nest multiple elements inside a single element,
such as the <code>&lt;React.Fragment&gt;...&lt;/React.Fragment&gt;</code> element or the null-element (<code>&lt;&gt;...&lt;/&gt;</code>)`,v,l,m=`<code class="language-js"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>
        Hello World<span class="token operator">!</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
      <span class="token operator">&lt;</span>p<span class="token operator">></span>
        Nice to meet you<span class="token operator">!</span> 
      <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){s=d("div"),o=d("pre"),k=C(),e=d("div"),a=d("p"),a.innerHTML=r,v=C(),l=d("pre"),this.h()},l(i){s=f(i,"DIV",{title:!0});var u=w(s);o=f(u,"PRE",{class:!0});var x=w(o);x.forEach(n),u.forEach(n),k=$(i),e=f(i,"DIV",{title:!0});var b=w(e);a=f(b,"P",{["data-svelte-h"]:!0}),y(a)!=="svelte-1nw1lis"&&(a.innerHTML=r),v=$(b),l=f(b,"PRE",{class:!0});var j=w(l);j.forEach(n),b.forEach(n),this.h()},h(){h(o,"class","language-html"),h(s,"title","Svelte"),h(l,"class","language-js"),h(e,"title","React")},m(i,u){p(i,s,u),H(s,o),o.innerHTML=g,p(i,k,u),p(i,e,u),H(e,a),H(e,v),H(e,l),l.innerHTML=m},p:at,d(i){i&&(n(s),n(k),n(e))}}}function wn(_){let s,o,g=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">let</span> borderColor <span class="token operator">=</span> <span class="token string">'blue'</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red-text<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">style:</span>borderColor</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>background-color: black; border-color: &#123;borderColor&#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  Hello World!
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span>
  p.red-text &#123;color: red;&#125;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></code>`,k,e,a,r=`You can&#39;t use <code>class</code> in JSX, as it is a reserved word in ECMAScript. Use <code>className</code> instead. If you want
to use inline styles, you need to use the JS properties of the <code>style</code> object instead of the html/css properties
used in normal HTML. the <code>style</code> attribute takes an object, so you can pass an object`,v,l,m=`<code class="language-jsx"><span class="token keyword">function</span> <span class="token function">MyComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> borderColor <span class="token operator">=</span> <span class="token string">'blue'</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> styles<span class="token operator">=</span><span class="token punctuation">&#123;</span> borderColor <span class="token punctuation">&#125;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>red-text<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;&#123;...styles, background-color: 'black' &#125;&#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        Hello World!
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`;return{c(){s=d("div"),o=d("pre"),k=C(),e=d("div"),a=d("p"),a.innerHTML=r,v=C(),l=d("pre"),this.h()},l(i){s=f(i,"DIV",{title:!0});var u=w(s);o=f(u,"PRE",{class:!0});var x=w(o);x.forEach(n),u.forEach(n),k=$(i),e=f(i,"DIV",{title:!0});var b=w(e);a=f(b,"P",{["data-svelte-h"]:!0}),y(a)!=="svelte-1svzoqq"&&(a.innerHTML=r),v=$(b),l=f(b,"PRE",{class:!0});var j=w(l);j.forEach(n),b.forEach(n),this.h()},h(){h(o,"class","language-html"),h(s,"title","Svelte"),h(l,"class","language-jsx"),h(e,"title","React")},m(i,u){p(i,s,u),H(s,o),o.innerHTML=g,p(i,k,u),p(i,e,u),H(e,a),H(e,v),H(e,l),l.innerHTML=m},p:at,d(i){i&&(n(s),n(k),n(e))}}}function yn(_){let s,o="Contents",g,k,e="Creating a Web App Skaffold",a,r,v,l,m="Defining a Component",i,u,x,b,j="Nesting Components",U,E,X,M,Ht="Returning Multiple Components",pt,T,lt,L,Et="Styling Components",ot,R,ct,S,Mt="Displaying Variables",it,P,jt="Conditional Rendering",ut,V,Tt="Rendering Data Structures",rt,D,Lt="Passing Props to Components",kt,I,Rt="Event Raising and Handling",dt,q,St="Handling Component State",ft,W,Pt="Using Framework-Specific Features",vt,Y,Vt="<code>use*</code> function in react.",mt,z,Dt='<a href="https://github.com/joshnuss/react-hooks-in-svelte" title="">https://github.com/joshnuss/react-hooks-in-svelte</a>',ht,A,It="Render Caching",gt,B,qt="<code>useCallback</code> in react. Completely not necessary in svelte. use stores to save state.",_t,N,Wt="Sharing State Between Components",Ct,F,At="Fallbacks While Loading Data",$t,Z,Nt="React&#39;s <code>&lt;Suspense&gt;</code> element",bt,J,Ft="Server-Side Components",xt,K,Jt="<code>use client/server</code> in react. <code>+server.js</code> in sveltekit.",wt;return r=new et({props:{$$slots:{default:[Cn]},$$scope:{ctx:_}}}),u=new et({props:{$$slots:{default:[$n]},$$scope:{ctx:_}}}),E=new et({props:{$$slots:{default:[bn]},$$scope:{ctx:_}}}),T=new et({props:{$$slots:{default:[xn]},$$scope:{ctx:_}}}),R=new et({props:{$$slots:{default:[wn]},$$scope:{ctx:_}}}),{c(){s=d("h1"),s.textContent=o,g=C(),k=d("h2"),k.textContent=e,a=C(),O(r.$$.fragment),v=C(),l=d("h2"),l.textContent=m,i=C(),O(u.$$.fragment),x=C(),b=d("h2"),b.textContent=j,U=C(),O(E.$$.fragment),X=C(),M=d("h2"),M.textContent=Ht,pt=C(),O(T.$$.fragment),lt=C(),L=d("h2"),L.textContent=Et,ot=C(),O(R.$$.fragment),ct=C(),S=d("h2"),S.textContent=Mt,it=C(),P=d("h2"),P.textContent=jt,ut=C(),V=d("h2"),V.textContent=Tt,rt=C(),D=d("h2"),D.textContent=Lt,kt=C(),I=d("h2"),I.textContent=Rt,dt=C(),q=d("h2"),q.textContent=St,ft=C(),W=d("h2"),W.textContent=Pt,vt=C(),Y=d("p"),Y.innerHTML=Vt,mt=C(),z=d("p"),z.innerHTML=Dt,ht=C(),A=d("h2"),A.textContent=It,gt=C(),B=d("p"),B.innerHTML=qt,_t=C(),N=d("h2"),N.textContent=Wt,Ct=C(),F=d("h2"),F.textContent=At,$t=C(),Z=d("p"),Z.innerHTML=Nt,bt=C(),J=d("h2"),J.textContent=Ft,xt=C(),K=d("p"),K.innerHTML=Jt,this.h()},l(t){s=f(t,"H1",{id:!0,["data-svelte-h"]:!0}),y(s)!=="svelte-1hjiaj8"&&(s.textContent=o),g=$(t),k=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(k)!=="svelte-15s2rxc"&&(k.textContent=e),a=$(t),tt(r.$$.fragment,t),v=$(t),l=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(l)!=="svelte-yv9r2i"&&(l.textContent=m),i=$(t),tt(u.$$.fragment,t),x=$(t),b=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(b)!=="svelte-1brfag9"&&(b.textContent=j),U=$(t),tt(E.$$.fragment,t),X=$(t),M=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(M)!=="svelte-nako40"&&(M.textContent=Ht),pt=$(t),tt(T.$$.fragment,t),lt=$(t),L=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(L)!=="svelte-kpe3rh"&&(L.textContent=Et),ot=$(t),tt(R.$$.fragment,t),ct=$(t),S=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(S)!=="svelte-1hs16en"&&(S.textContent=Mt),it=$(t),P=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(P)!=="svelte-1mo9hbx"&&(P.textContent=jt),ut=$(t),V=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(V)!=="svelte-82jdho"&&(V.textContent=Tt),rt=$(t),D=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(D)!=="svelte-jgmowj"&&(D.textContent=Lt),kt=$(t),I=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(I)!=="svelte-rpcnv9"&&(I.textContent=Rt),dt=$(t),q=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(q)!=="svelte-dsujre"&&(q.textContent=St),ft=$(t),W=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(W)!=="svelte-1mvfp3s"&&(W.textContent=Pt),vt=$(t),Y=f(t,"P",{["data-svelte-h"]:!0}),y(Y)!=="svelte-1tp47eu"&&(Y.innerHTML=Vt),mt=$(t),z=f(t,"P",{["data-svelte-h"]:!0}),y(z)!=="svelte-3ub4hx"&&(z.innerHTML=Dt),ht=$(t),A=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(A)!=="svelte-68vncv"&&(A.textContent=It),gt=$(t),B=f(t,"P",{["data-svelte-h"]:!0}),y(B)!=="svelte-1hfc41r"&&(B.innerHTML=qt),_t=$(t),N=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(N)!=="svelte-qcn1gh"&&(N.textContent=Wt),Ct=$(t),F=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(F)!=="svelte-6yeedh"&&(F.textContent=At),$t=$(t),Z=f(t,"P",{["data-svelte-h"]:!0}),y(Z)!=="svelte-1cbf1j7"&&(Z.innerHTML=Nt),bt=$(t),J=f(t,"H2",{id:!0,["data-svelte-h"]:!0}),y(J)!=="svelte-1axw3vl"&&(J.textContent=Ft),xt=$(t),K=f(t,"P",{["data-svelte-h"]:!0}),y(K)!=="svelte-1bg77nb"&&(K.innerHTML=Jt),this.h()},h(){h(s,"id","contents"),h(k,"id","creating-a-web-app-skaffold"),h(l,"id","defining-a-component"),h(b,"id","nesting-components"),h(M,"id","returning-multiple-components"),h(L,"id","styling-components"),h(S,"id","displaying-variables"),h(P,"id","conditional-rendering"),h(V,"id","rendering-data-structures"),h(D,"id","passing-props-to-components"),h(I,"id","event-raising-and-handling"),h(q,"id","handling-component-state"),h(W,"id","using-framework-specific-features"),h(A,"id","render-caching"),h(N,"id","sharing-state-between-components"),h(F,"id","fallbacks-while-loading-data"),h(J,"id","server-side-components")},m(t,c){p(t,s,c),p(t,g,c),p(t,k,c),p(t,a,c),nt(r,t,c),p(t,v,c),p(t,l,c),p(t,i,c),nt(u,t,c),p(t,x,c),p(t,b,c),p(t,U,c),nt(E,t,c),p(t,X,c),p(t,M,c),p(t,pt,c),nt(T,t,c),p(t,lt,c),p(t,L,c),p(t,ot,c),nt(R,t,c),p(t,ct,c),p(t,S,c),p(t,it,c),p(t,P,c),p(t,ut,c),p(t,V,c),p(t,rt,c),p(t,D,c),p(t,kt,c),p(t,I,c),p(t,dt,c),p(t,q,c),p(t,ft,c),p(t,W,c),p(t,vt,c),p(t,Y,c),p(t,mt,c),p(t,z,c),p(t,ht,c),p(t,A,c),p(t,gt,c),p(t,B,c),p(t,_t,c),p(t,N,c),p(t,Ct,c),p(t,F,c),p(t,$t,c),p(t,Z,c),p(t,bt,c),p(t,J,c),p(t,xt,c),p(t,K,c),wt=!0},p(t,c){const Ut={};c&2&&(Ut.$$scope={dirty:c,ctx:t}),r.$set(Ut);const Xt={};c&2&&(Xt.$$scope={dirty:c,ctx:t}),u.$set(Xt);const Yt={};c&2&&(Yt.$$scope={dirty:c,ctx:t}),E.$set(Yt);const zt={};c&2&&(zt.$$scope={dirty:c,ctx:t}),T.$set(zt);const Bt={};c&2&&(Bt.$$scope={dirty:c,ctx:t}),R.$set(Bt)},i(t){wt||(Q(r.$$.fragment,t),Q(u.$$.fragment,t),Q(E.$$.fragment,t),Q(T.$$.fragment,t),Q(R.$$.fragment,t),wt=!0)},o(t){G(r.$$.fragment,t),G(u.$$.fragment,t),G(E.$$.fragment,t),G(T.$$.fragment,t),G(R.$$.fragment,t),wt=!1},d(t){t&&(n(s),n(g),n(k),n(a),n(v),n(l),n(i),n(x),n(b),n(U),n(X),n(M),n(pt),n(lt),n(L),n(ot),n(ct),n(S),n(it),n(P),n(ut),n(V),n(rt),n(D),n(kt),n(I),n(dt),n(q),n(ft),n(W),n(vt),n(Y),n(mt),n(z),n(ht),n(A),n(gt),n(B),n(_t),n(N),n(Ct),n(F),n($t),n(Z),n(bt),n(J),n(xt),n(K)),st(r,t),st(u,t),st(E,t),st(T,t),st(R,t)}}}function Hn(_){let s,o;const g=[_[0],tn];let k={$$slots:{default:[yn]},$$scope:{ctx:_}};for(let e=0;e<g.length;e+=1)k=yt(k,g[e]);return s=new hn({props:k}),{c(){O(s.$$.fragment)},l(e){tt(s.$$.fragment,e)},m(e,a){nt(s,e,a),o=!0},p(e,[a]){const r=a&1?mn(g,[a&1&&Kt(e[0]),a&0&&Kt(tn)]):{};a&2&&(r.$$scope={dirty:a,ctx:e}),s.$set(r)},i(e){o||(Q(s.$$.fragment,e),o=!0)},o(e){G(s.$$.fragment,e),o=!1},d(e){st(s,e)}}}const tn={title:"From Svelte to React",description:"Learning React for Svelte Developers",excerpt:"",created_at:"2023-07-03T20:42:50.725Z",updated_at:"2023-07-04T21:07:01.191Z",coverImage:"/images/cover/from-svelte-to-react.jpg",coverImageAlt:"a programmer sitting  at a desk with two laptops in front of him. on the left laptop screen, there is the svelte logo. on the right laptop screen there is the react logo",draft:!1,tags:["programming","react","svelte","learning"],categories:[],twitterImage:"/images/cover/from-svelte-to-react.jpg",opengraphImage:"/images/cover/from-svelte-to-react.jpg",meta:"",layout:"post",keywords:[],preview:`Contents

Creating a Web App Skaffold`,previewHtml:"<h1>Contents</h1> <h2>Creating a Web App Skaffold</h2>",textContent:`Contents

Creating a Web App Skaffold















Defining a Component











Nesting Components











Returning Multiple Components







JSX requires a return of only one element, so you need to nest multiple elements inside a single element, 
such as the  element or the null-element...`};function En(_,s,o){return _.$$set=g=>{o(0,s=yt(yt({},s),Zt(g)))},s=Zt(s),[s]}class Sn extends an{constructor(s){super(),pn(this,s,En,Hn,nn,{})}}export{Sn as default,tn as metadata};
