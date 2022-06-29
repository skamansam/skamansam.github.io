import{S as T,i as D,s as S,D as R,x as z,y as B,z as F,A as q,B as A,r as G,p as H,C as J,X as E,e as f,t as b,k as g,c as _,a as h,h as v,d as o,m as w,b as L,g as c,F as x,n as N}from"../../chunks/index-1458cd2c.js";import{P as U}from"../../chunks/post-3074b800.js";function V(u){let e,p,l,t,a=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">ApplicationController</span> <span class="token operator">&lt;</span> ActionController<span class="token double-colon punctuation">::</span>Base

  before_filter <span class="token symbol">:check_cookie</span>

  <span class="token operator">...</span>

  <span class="token keyword">private</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">check_cookie</span></span>
    cookie_name <span class="token operator">=</span> Rails<span class="token punctuation">.</span>application<span class="token punctuation">.</span>config<span class="token punctuation">.</span>session_options<span class="token punctuation">[</span><span class="token symbol">:key</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">[</span>cookie_name<span class="token punctuation">]</span><span class="token punctuation">.</span>to_s<span class="token punctuation">.</span>blank<span class="token operator">?</span>
      flash<span class="token punctuation">[</span><span class="token symbol">:error</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"To use this site, you must enable cookies in your browser's settings."</span></span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

<span class="token keyword">end</span></code>`,n,r,m,k,d,y;return{c(){e=f("p"),p=b(`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application\u2019s cookie.`),l=g(),t=f("pre"),n=g(),r=f("p"),m=b("..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),k=g(),d=f("p"),y=b(`UPDATE 8-30-2016: Rails apps should use cookies. If users don\u2019t have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),this.h()},l(s){e=_(s,"P",{});var i=h(e);p=v(i,`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application\u2019s cookie.`),i.forEach(o),l=w(s),t=_(s,"PRE",{class:!0});var C=h(t);C.forEach(o),n=w(s),r=_(s,"P",{});var P=h(r);m=v(P,"..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),P.forEach(o),k=w(s),d=_(s,"P",{});var $=h(d);y=v($,`UPDATE 8-30-2016: Rails apps should use cookies. If users don\u2019t have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),$.forEach(o),this.h()},h(){L(t,"class","language-ruby")},m(s,i){c(s,e,i),x(e,p),c(s,l,i),c(s,t,i),t.innerHTML=a,c(s,n,i),c(s,r,i),x(r,m),c(s,k,i),c(s,d,i),x(d,y)},p:N,d(s){s&&o(e),s&&o(l),s&&o(t),s&&o(n),s&&o(r),s&&o(k),s&&o(d)}}}function Y(u){let e,p;const l=[u[0],I];let t={$$slots:{default:[V]},$$scope:{ctx:u}};for(let a=0;a<l.length;a+=1)t=R(t,l[a]);return e=new U({props:t}),{c(){z(e.$$.fragment)},l(a){B(e.$$.fragment,a)},m(a,n){F(e,a,n),p=!0},p(a,[n]){const r=n&1?q(l,[n&1&&A(a[0]),n&0&&A(I)]):{};n&2&&(r.$$scope={dirty:n,ctx:a}),e.$set(r)},i(a){p||(G(e.$$.fragment,a),p=!0)},o(a){H(e.$$.fragment,a),p=!1},d(a){J(e,a)}}}const I={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Cookie Detection in Rails 3",description:"How to detect cookies in Rails 3",excerpt:"I believe this may be a bad idea, in general, but here is a cheap way",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2013-04-23T17:14:12.000Z",updated_at:"2016-08-30T00:00:00.000Z",meta:[{property:"og:image",content:"/images/GSoC-logo-horizontal-800.png"},{name:"twitter:image",content:"/images/GSoC-logo-horizontal-800.png"}]};function Z(u,e,p){return u.$$set=l=>{p(0,e=R(R({},e),E(l)))},e=E(e),[e]}class X extends T{constructor(e){super(),D(this,e,Z,Y,S,{})}}export{X as default,I as metadata};
