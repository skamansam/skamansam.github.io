import{S as T,i as J,s as H,C as R,y as q,z as B,A as D,H as L,a0 as A,g as N,d as V,B as F,L as $,k,q as y,a as w,l as f,m as b,r as v,h as o,c as g,n as S,b as c,G as I,I as U}from"./index.8495bde4.js";import{P as Y}from"./post.98a719d8.js";function Z(u){let e,i,l,n,s=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">ApplicationController</span> <span class="token operator">&lt;</span> ActionController<span class="token double-colon punctuation">::</span>Base

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
presence of the application's cookie.`),l=w(),n=k("pre"),t=w(),p=k("p"),_=y("..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),h=w(),d=k("p"),m=y(`UPDATE 8-30-2016: Rails apps should use cookies. If users don't have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),this.h()},l(a){e=f(a,"P",{});var r=b(e);i=v(r,`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application's cookie.`),r.forEach(o),l=g(a),n=f(a,"PRE",{class:!0});var C=b(n);C.forEach(o),t=g(a),p=f(a,"P",{});var x=b(p);_=v(x,"..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!"),x.forEach(o),h=g(a),d=f(a,"P",{});var P=b(d);m=v(P,`UPDATE 8-30-2016: Rails apps should use cookies. If users don't have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`),P.forEach(o),this.h()},h(){S(n,"class","language-ruby")},m(a,r){c(a,e,r),I(e,i),c(a,l,r),c(a,n,r),n.innerHTML=s,c(a,t,r),c(a,p,r),I(p,_),c(a,h,r),c(a,d,r),I(d,m)},p:U,d(a){a&&o(e),a&&o(l),a&&o(n),a&&o(t),a&&o(p),a&&o(h),a&&o(d)}}}function j(u){let e,i;const l=[u[0],E];let n={$$slots:{default:[Z]},$$scope:{ctx:u}};for(let s=0;s<l.length;s+=1)n=R(n,l[s]);return e=new Y({props:n}),{c(){q(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,t){D(e,s,t),i=!0},p(s,[t]){const p=t&1?L(l,[t&1&&A(s[0]),t&0&&A(E)]):{};t&2&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){i||(N(e.$$.fragment,s),i=!0)},o(s){V(e.$$.fragment,s),i=!1},d(s){F(e,s)}}}const E={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Cookie Detection in Rails 3",description:"How to detect cookies in Rails 3",excerpt:"I believe this may be a bad idea, in general, but here is a cheap way",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2013-04-23T17:14:12.000Z",updated_at:"2016-08-30T00:00:00.000Z",preview:`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the...`,previewHtml:"<p>I have seen a lot of posts on cookie detection in Rails. I believe this may be a bad idea, in general, but here is a cheap way to detect whether or not cookies are enabled in the browser. Just add a before_filter that checks for the presence of the a...</p>",textContent:`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application's cookie.



..And Voila! Now if your...`};function z(u,e,i){return u.$$set=l=>{i(0,e=R(R({},e),$(l)))},e=$(e),[e]}class K extends T{constructor(e){super(),J(this,e,z,j,H,{})}}export{K as default,E as metadata};
