import{S as C,i as J,s as D,D as x,x as B,y as H,z as L,A as N,B as A,r as V,p as q,C as F,L as $,e as k,t as y,k as w,c as f,a as b,h as v,d as o,m as g,b as S,g as c,I,n as U}from"../../chunks/index-f4167289.js";import{P as Y}from"../../chunks/post-f1d237ea.js";import"../../chunks/stores-306c3674.js";import"../../chunks/settings-69239d06.js";function Z(u){let e,i,r,n,s=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">ApplicationController</span> <span class="token operator">&lt;</span> ActionController<span class="token double-colon punctuation">::</span>Base

  before_filter <span class="token symbol">:check_cookie</span>

  <span class="token operator">...</span>

  <span class="token keyword">private</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">check_cookie</span></span>
    cookie_name <span class="token operator">=</span> Rails<span class="token punctuation">.</span>application<span class="token punctuation">.</span>config<span class="token punctuation">.</span>session_options<span class="token punctuation">[</span><span class="token symbol">:key</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">[</span>cookie_name<span class="token punctuation">]</span><span class="token punctuation">.</span>to_s<span class="token punctuation">.</span>blank<span class="token operator">?</span>
      flash<span class="token punctuation">[</span><span class="token symbol">:error</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"To use this site, you must enable cookies in your browser's settings."</span></span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

<span class="token keyword">end</span></code>`,t,p,_,h,d,m;return{c(){e=k("p"),i=y(`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application\u2019s cookie.`),r=w(),n=k("pre"),t=w(),p=k("p"),_=y("..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),h=w(),d=k("p"),m=y(`UPDATE 8-30-2016: Rails apps should use cookies. If users don\u2019t have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),this.h()},l(a){e=f(a,"P",{});var l=b(e);i=v(l,`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application\u2019s cookie.`),l.forEach(o),r=g(a),n=f(a,"PRE",{class:!0});var T=b(n);T.forEach(o),t=g(a),p=f(a,"P",{});var R=b(p);_=v(R,"..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),R.forEach(o),h=g(a),d=f(a,"P",{});var P=b(d);m=v(P,`UPDATE 8-30-2016: Rails apps should use cookies. If users don\u2019t have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),P.forEach(o),this.h()},h(){S(n,"class","language-ruby")},m(a,l){c(a,e,l),I(e,i),c(a,r,l),c(a,n,l),n.innerHTML=s,c(a,t,l),c(a,p,l),I(p,_),c(a,h,l),c(a,d,l),I(d,m)},p:U,d(a){a&&o(e),a&&o(r),a&&o(n),a&&o(t),a&&o(p),a&&o(h),a&&o(d)}}}function j(u){let e,i;const r=[u[0],E];let n={$$slots:{default:[Z]},$$scope:{ctx:u}};for(let s=0;s<r.length;s+=1)n=x(n,r[s]);return e=new Y({props:n}),{c(){B(e.$$.fragment)},l(s){H(e.$$.fragment,s)},m(s,t){L(e,s,t),i=!0},p(s,[t]){const p=t&1?N(r,[t&1&&A(s[0]),t&0&&A(E)]):{};t&2&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){i||(V(e.$$.fragment,s),i=!0)},o(s){q(e.$$.fragment,s),i=!1},d(s){F(e,s)}}}const E={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Cookie Detection in Rails 3",description:"How to detect cookies in Rails 3",excerpt:"I believe this may be a bad idea, in general, but here is a cheap way",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2013-04-23T17:14:12.000Z",updated_at:"2016-08-30T00:00:00.000Z",readingTime:{text:"1 min read",minutes:.69,time:41400,words:138},preview:`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the...`,previewHtml:"<p>I have seen a lot of posts on cookie detection in Rails. I believe this may be a bad idea, in general, but here is a cheap way to detect whether or not cookies are enabled in the browser. Just add a before_filter that checks for the presence of the a...</p>",textContent:`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application\u2019s cookie.



..And Voila! Now if your...`};function z(u,e,i){return u.$$set=r=>{i(0,e=x(x({},e),$(r)))},e=$(e),[e]}class Q extends C{constructor(e){super(),J(this,e,z,j,D,{})}}export{Q as default,E as metadata};
