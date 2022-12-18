import{S as C,i as q,s as B,C as R,w as D,x as H,y as Z,H as F,Z as E,f as J,t as L,z as N,K as I,k as f,q as y,a as v,l as _,m as h,r as w,h as o,c as g,n as S,b as r,G as x,B as U}from"./index-6a3f2268.js";import{P as V}from"./post-3c5a9cb3.js";function Y(u){let e,l,p,t,a=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">ApplicationController</span> <span class="token operator">&lt;</span> ActionController<span class="token double-colon punctuation">::</span>Base

  before_filter <span class="token symbol">:check_cookie</span>

  <span class="token operator">...</span>

  <span class="token keyword">private</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">check_cookie</span></span>
    cookie_name <span class="token operator">=</span> Rails<span class="token punctuation">.</span>application<span class="token punctuation">.</span>config<span class="token punctuation">.</span>session_options<span class="token punctuation">[</span><span class="token symbol">:key</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">[</span>cookie_name<span class="token punctuation">]</span><span class="token punctuation">.</span>to_s<span class="token punctuation">.</span>blank<span class="token operator">?</span>
      flash<span class="token punctuation">[</span><span class="token symbol">:error</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"To use this site, you must enable cookies in your browser's settings."</span></span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

<span class="token keyword">end</span></code>`,n,c,m,k,d,b;return{c(){e=f("p"),l=y(`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application's cookie.`),p=v(),t=f("pre"),n=v(),c=f("p"),m=y("..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),k=v(),d=f("p"),b=y(`UPDATE 8-30-2016: Rails apps should use cookies. If users don't have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),this.h()},l(s){e=_(s,"P",{});var i=h(e);l=w(i,`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application's cookie.`),i.forEach(o),p=g(s),t=_(s,"PRE",{class:!0});var T=h(t);T.forEach(o),n=g(s),c=_(s,"P",{});var P=h(c);m=w(P,"..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),P.forEach(o),k=g(s),d=_(s,"P",{});var $=h(d);b=w($,`UPDATE 8-30-2016: Rails apps should use cookies. If users don't have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),$.forEach(o),this.h()},h(){S(t,"class","language-ruby")},m(s,i){r(s,e,i),x(e,l),r(s,p,i),r(s,t,i),t.innerHTML=a,r(s,n,i),r(s,c,i),x(c,m),r(s,k,i),r(s,d,i),x(d,b)},p:U,d(s){s&&o(e),s&&o(p),s&&o(t),s&&o(n),s&&o(c),s&&o(k),s&&o(d)}}}function j(u){let e,l;const p=[u[0],A];let t={$$slots:{default:[Y]},$$scope:{ctx:u}};for(let a=0;a<p.length;a+=1)t=R(t,p[a]);return e=new V({props:t}),{c(){D(e.$$.fragment)},l(a){H(e.$$.fragment,a)},m(a,n){Z(e,a,n),l=!0},p(a,[n]){const c=n&1?F(p,[n&1&&E(a[0]),n&0&&E(A)]):{};n&2&&(c.$$scope={dirty:n,ctx:a}),e.$set(c)},i(a){l||(J(e.$$.fragment,a),l=!0)},o(a){L(e.$$.fragment,a),l=!1},d(a){N(e,a)}}}const A={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Cookie Detection in Rails 3",description:"How to detect cookies in Rails 3",excerpt:"I believe this may be a bad idea, in general, but here is a cheap way",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2013-04-23T17:14:12.000Z",updated_at:"2016-08-30T00:00:00.000Z"};function z(u,e,l){return u.$$set=p=>{l(0,e=R(R({},e),I(p)))},e=I(e),[e]}class M extends C{constructor(e){super(),q(this,e,z,j,B,{})}}export{M as default,A as metadata};
