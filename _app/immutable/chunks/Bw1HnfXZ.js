import"./DsnmJJEf.js";import"./DUAmNnRy.js";import"./7VeBLrFP.js";import{s as r,f as c,c as l,r as d,n as u}from"./Dhn-IdaH.js";import{f as k,a as h}from"./B988bg3s.js";import{P as b,h as f}from"./BFPr3XtU.js";import{l as m,s as y}from"./9VelmjdU.js";const s={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Cookie Detection in Rails 3",description:"How to detect cookies in Rails 3",excerpt:"I believe this may be a bad idea, in general, but here is a cheap way",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2013-04-23T17:14:12.000Z",updated_at:"2016-08-30T00:00:00.000Z",preview:`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the...`,previewHtml:"<p>I have seen a lot of posts on cookie detection in Rails. I believe this may be a bad idea, in general, but here is a cheap way to detect whether or not cookies are enabled in the browser. Just add a before_filter that checks for the presence of the a...</p>",textContent:`I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application's cookie.



..And Voila! Now if your...`},{comments:C,view:P,layout:J,lang:T,author:H,title:B,description:D,excerpt:E,cover:N,coverImage:V,coverAlt:Z,categories:q,tags:z,created_at:F,updated_at:L,preview:U,previewHtml:Y,textContent:j}=s;var w=k(`<p>I have seen a lot of posts on cookie detection in Rails. I believe this may be a
bad idea, in general, but here is a cheap way to detect whether or not cookies
are enabled in the browser. Just add a before_filter that checks for the
presence of the application's cookie.</p> <pre class="language-ruby"><!></pre> <p>..And Voila! Now if your users try to view any page, they will see a nice Flash message about their cookies!</p> <p>UPDATE 8-30-2016: Rails apps should use cookies. If users don't have cookies
enabled, they should not be using your app. Plan for the future and leave behind
older browsers. You are not expected to support everyone!</p>`,1);function G(o,t){const n=m(t,["children","$$slots","$$events","$$legacy"]);b(o,y(()=>n,()=>s,{children:(i,_)=>{var e=w(),a=r(c(e),2),p=l(a);f(p,()=>`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">ApplicationController</span> <span class="token operator">&lt;</span> ActionController<span class="token double-colon punctuation">::</span>Base

  before_filter <span class="token symbol">:check_cookie</span>

  <span class="token operator">...</span>

  <span class="token keyword">private</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">check_cookie</span></span>
    cookie_name <span class="token operator">=</span> Rails<span class="token punctuation">.</span>application<span class="token punctuation">.</span>config<span class="token punctuation">.</span>session_options<span class="token punctuation">[</span><span class="token symbol">:key</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> request<span class="token punctuation">.</span>cookies<span class="token punctuation">[</span>cookie_name<span class="token punctuation">]</span><span class="token punctuation">.</span>to_s<span class="token punctuation">.</span>blank<span class="token operator">?</span>
      flash<span class="token punctuation">[</span><span class="token symbol">:error</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string-literal"><span class="token string">"To use this site, you must enable cookies in your browser's settings."</span></span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

<span class="token keyword">end</span></code>`),d(a),u(4),h(i,e)},$$slots:{default:!0}}))}export{G as default,s as metadata};
