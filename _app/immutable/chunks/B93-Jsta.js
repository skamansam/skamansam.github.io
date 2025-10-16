import"./DsnmJJEf.js";import"./DUAmNnRy.js";import"./7VeBLrFP.js";import{s as l,f as i,c as r,r as d}from"./zEET8Voz.js";import{f as k,a as m}from"./6j56-UlN.js";import{P as u,h as y}from"./CmIlZZNg.js";import{l as h,s as f}from"./DLHvm563.js";const n={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Dynamic Models in Rails 3",description:"How to create dynamic Models in Rails 3",excerpt:"Rails 3 has a lot of nifty new features.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2016-09-06T09:45:57.000Z",updated_at:"2016-09-06T09:45:57.000Z",preview:`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.

`,previewHtml:"<p>Rails 3 has a lot of nifty new features. However, this is not about those features. This article is a short description on how to create dynamic models in any version of Rails.</p> <pre><code>class CreateMyDynamicModel &lt; ActiveRecord::Migration def change create_ta...</code></pre>",textContent:`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.

`},{draft:H,comments:T,view:A,layout:C,lang:D,author:E,title:I,description:P,excerpt:z,cover:B,coverImage:N,coverAlt:Z,categories:j,tags:L,created_at:q,updated_at:F,preview:G,previewHtml:J,textContent:K}=n;var w=k(`<p>Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.</p> <pre class="language-ruby"><!></pre>`,1);function O(e,t){const o=h(t,["children","$$slots","$$events","$$legacy"]);u(e,f(()=>o,()=>n,{children:(p,g)=>{var s=w(),a=l(i(s),2),c=r(a);y(c,()=>`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">CreateMyDynamicModel</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration
  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">change</span></span>
    create_table <span class="token symbol">:dynamic_models</span> <span class="token keyword">do</span> <span class="token operator">|</span>t<span class="token operator">|</span>
      t<span class="token punctuation">.</span>string <span class="token symbol">:name</span><span class="token punctuation">,</span> <span class="token symbol">:null</span><span class="token operator">=></span><span class="token boolean">false</span>
      t<span class="token punctuation">.</span>string <span class="token symbol">:description</span>
      t<span class="token punctuation">.</span>text <span class="token symbol">:dynamic_methods</span>

      t<span class="token punctuation">.</span>timestamps
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>

<span class="token keyword">class</span> <span class="token class-name">MyDynamicModel</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Base

  serialize <span class="token symbol">:dynamic_methods</span><span class="token punctuation">,</span> <span class="token builtin">Hash</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">method_missing</span></span><span class="token punctuation">(</span>sym<span class="token punctuation">,</span><span class="token operator">*</span>args<span class="token punctuation">,</span><span class="token operator">&amp;</span>block<span class="token punctuation">)</span>
    <span class="token comment">#call the super so we can have access to all normal methods/fields/etc.</span>
    <span class="token keyword">unless</span> <span class="token variable">@meth_miss</span>
      <span class="token variable">@meth_miss</span><span class="token operator">=</span><span class="token boolean">true</span>   <span class="token comment">#prevent an infinite call chain. only run once</span>
      super_method_missing<span class="token punctuation">(</span>sym<span class="token punctuation">,</span>args<span class="token punctuation">,</span>block<span class="token punctuation">)</span>
    <span class="token keyword">end</span>

    <span class="token comment">#if we already havde this method, return. This should never happen, but just in case...</span>
    <span class="token keyword">return</span> <span class="token keyword">if</span> <span class="token keyword">defined</span><span class="token operator">?</span><span class="token punctuation">(</span>sym<span class="token punctuation">.</span>to_sym<span class="token punctuation">)</span>

    <span class="token comment">#if the method passed in is an assignment, create the method and assign a value to it</span>
    <span class="token keyword">if</span> sym <span class="token operator">=~</span> <span class="token regex-literal"><span class="token regex">/^(w+)=$/</span></span>
      <span class="token keyword">self</span><span class="token punctuation">.</span>dynamic_methods<span class="token punctuation">[</span>$<span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>args<span class="token punctuation">.</span>to_s

    <span class="token comment">#if the method is already assigned something, return it</span>
    <span class="token keyword">elsif</span> actions<span class="token punctuation">.</span>keys<span class="token punctuation">.</span><span class="token keyword">include</span><span class="token operator">?</span> sym
      <span class="token keyword">return</span> <span class="token keyword">self</span><span class="token punctuation">.</span>dynamic_methods<span class="token punctuation">[</span>sym<span class="token punctuation">.</span>to_s<span class="token punctuation">]</span>

    <span class="token comment">#If the method has not been assigned anything, we officially have a NoMethodError!</span>
    <span class="token keyword">else</span>
      <span class="token keyword">raise</span> NoMethodError

    <span class="token keyword">end</span> <span class="token comment">#/if</span>

  <span class="token keyword">end</span> <span class="token comment">#/method_missing()</span>

<span class="token keyword">end</span> <span class="token comment">#/end class</span></code>`),d(a),m(p,s)},$$slots:{default:!0}}))}export{O as default,n as metadata};
