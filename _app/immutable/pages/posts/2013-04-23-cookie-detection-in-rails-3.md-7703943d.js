import{S as C,i as D,s as B,D as R,x as F,y as q,z as H,A as J,B as A,r as L,p as N,C as S,X as E,e as f,t as y,k as v,c as _,a as h,h as w,d as o,m as g,b as U,g as r,F as x,n as V}from"../../chunks/index-1458cd2c.js";import{P as Y}from"../../chunks/post-a3452a60.js";function Z(u){let e,p,l,t,a=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">ApplicationController</span> <span class="token operator">&lt;</span> ActionController<span class="token double-colon punctuation">::</span>Base

  before_filter <span class="token symbol">:check_cookie</span>

  <span class="token operator">...</span>

  <span class="token keyword">private</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">check_cookie</span></span>
    cookie_name <span class="token operator">=</span> Rails<span class="token punctuation">.</span>application<span class="token punctuation">.</span>config<span class="token punctuation">.</span>session_options<span class="token punctuation">[</span><span class="token symbol">:key</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">[</span>cookie_name<span class="token punctuation">]</span><span class="token punctuation">.</span>to_s<span class="token punctuation">.</span>blank<span class="token operator">?</span>
      flash<span class="token punctuation">[</span><span class="token symbol">:error</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"To use this site, you must enable cookies in your browser's settings."</span></span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

<span class="token keyword">end</span></code>`,n,c,m,k,d,b;return{c(){e=f("p"),p=y(`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application\u2019s cookie.`),l=v(),t=f("pre"),n=v(),c=f("p"),m=y("..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),k=v(),d=f("p"),b=y(`UPDATE 8-30-2016: Rails apps should use cookies. If users don\u2019t have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),this.h()},l(s){e=_(s,"P",{});var i=h(e);p=w(i,`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application\u2019s cookie.`),i.forEach(o),l=g(s),t=_(s,"PRE",{class:!0});var T=h(t);T.forEach(o),n=g(s),c=_(s,"P",{});var P=h(c);m=w(P,"..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),P.forEach(o),k=g(s),d=_(s,"P",{});var $=h(d);b=w($,`UPDATE 8-30-2016: Rails apps should use cookies. If users don\u2019t have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),$.forEach(o),this.h()},h(){U(t,"class","language-ruby")},m(s,i){r(s,e,i),x(e,p),r(s,l,i),r(s,t,i),t.innerHTML=a,r(s,n,i),r(s,c,i),x(c,m),r(s,k,i),r(s,d,i),x(d,b)},p:V,d(s){s&&o(e),s&&o(l),s&&o(t),s&&o(n),s&&o(c),s&&o(k),s&&o(d)}}}function j(u){let e,p;const l=[u[0],I];let t={$$slots:{default:[Z]},$$scope:{ctx:u}};for(let a=0;a<l.length;a+=1)t=R(t,l[a]);return e=new Y({props:t}),{c(){F(e.$$.fragment)},l(a){q(e.$$.fragment,a)},m(a,n){H(e,a,n),p=!0},p(a,[n]){const c=n&1?J(l,[n&1&&A(a[0]),n&0&&A(I)]):{};n&2&&(c.$$scope={dirty:n,ctx:a}),e.$set(c)},i(a){p||(L(e.$$.fragment,a),p=!0)},o(a){N(e.$$.fragment,a),p=!1},d(a){S(e,a)}}}const I={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Cookie Detection in Rails 3",description:"How to detect cookies in Rails 3",excerpt:"I believe this may be a bad idea, in general, but here is a cheap way",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2013-04-23T17:14:12.000Z",updated_at:"2016-08-30T00:00:00.000Z"};function z(u,e,p){return u.$$set=l=>{p(0,e=R(R({},e),E(l)))},e=E(e),[e]}class G extends C{constructor(e){super(),D(this,e,z,j,B,{})}}export{G as default,I as metadata};
