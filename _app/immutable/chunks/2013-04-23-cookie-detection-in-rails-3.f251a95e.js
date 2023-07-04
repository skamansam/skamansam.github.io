import{s as R,r as y,B as g,f as k,a as _,g as f,C as m,c as b,h as I,d as c,j as $,i as u,y as P}from"./scheduler.28ea7184.js";import{S as A,i as T,b as E,d as J,m as q,a as B,t as H,e as j}from"./index.8021bc93.js";import{g as D,a as x}from"./spread.8a54911c.js";import{P as L}from"./post.60382223.js";function N(d){let e,l=`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application's cookie.`,o,n,t=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">ApplicationController</span> <span class="token operator">&lt;</span> ActionController<span class="token double-colon punctuation">::</span>Base

  before_filter <span class="token symbol">:check_cookie</span>

  <span class="token operator">...</span>

  <span class="token keyword">private</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">check_cookie</span></span>
    cookie_name <span class="token operator">=</span> Rails<span class="token punctuation">.</span>application<span class="token punctuation">.</span>config<span class="token punctuation">.</span>session_options<span class="token punctuation">[</span><span class="token symbol">:key</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">[</span>cookie_name<span class="token punctuation">]</span><span class="token punctuation">.</span>to_s<span class="token punctuation">.</span>blank<span class="token operator">?</span>
      flash<span class="token punctuation">[</span><span class="token symbol">:error</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"To use this site, you must enable cookies in your browser's settings."</span></span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

<span class="token keyword">end</span></code>`,s,i,v="..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!",h,r,w=`UPDATE 8-30-2016: Rails apps should use cookies. If users don't have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!`;return{c(){e=k("p"),e.textContent=l,o=_(),n=k("pre"),s=_(),i=k("p"),i.textContent=v,h=_(),r=k("p"),r.textContent=w,this.h()},l(a){e=f(a,"P",{["data-svelte-h"]:!0}),m(e)!=="svelte-16tsmwx"&&(e.textContent=l),o=b(a),n=f(a,"PRE",{class:!0});var p=I(n);p.forEach(c),s=b(a),i=f(a,"P",{["data-svelte-h"]:!0}),m(i)!=="svelte-12hwzwi"&&(i.textContent=v),h=b(a),r=f(a,"P",{["data-svelte-h"]:!0}),m(r)!=="svelte-qfpara"&&(r.textContent=w),this.h()},h(){$(n,"class","language-ruby")},m(a,p){u(a,e,p),u(a,o,p),u(a,n,p),n.innerHTML=t,u(a,s,p),u(a,i,p),u(a,h,p),u(a,r,p)},p:P,d(a){a&&(c(e),c(o),c(n),c(s),c(i),c(h),c(r))}}}function S(d){let e,l;const o=[d[0],C];let n={$$slots:{default:[N]},$$scope:{ctx:d}};for(let t=0;t<o.length;t+=1)n=y(n,o[t]);return e=new L({props:n}),{c(){E(e.$$.fragment)},l(t){J(e.$$.fragment,t)},m(t,s){q(e,t,s),l=!0},p(t,[s]){const i=s&1?D(o,[s&1&&x(t[0]),s&0&&x(C)]):{};s&2&&(i.$$scope={dirty:s,ctx:t}),e.$set(i)},i(t){l||(B(e.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),l=!1},d(t){j(e,t)}}}const C={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Cookie Detection in Rails 3",description:"How to detect cookies in Rails 3",excerpt:"I believe this may be a bad idea, in general, but here is a cheap way",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2013-04-23T17:14:12.000Z",updated_at:"2016-08-30T00:00:00.000Z",preview:`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the...`,previewHtml:"<p>I have seen a lot of posts on cookie detection in Rails. I believe this may be a bad idea, in general, but here is a cheap way to detect whether or not cookies are enabled in the browser. Just add a before_filter that checks for the presence of the a...</p>",textContent:`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application's cookie.



..And Voila! Now if your...`};function V(d,e,l){return d.$$set=o=>{l(0,e=y(y({},e),g(o)))},e=g(e),[e]}class U extends A{constructor(e){super(),T(this,e,V,S,R,{})}}export{U as default,C as metadata};
