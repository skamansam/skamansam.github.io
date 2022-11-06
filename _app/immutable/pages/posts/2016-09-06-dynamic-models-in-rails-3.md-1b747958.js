import{S as _,i as w,s as g,D as r,x as v,y as b,z as R,A as x,B as u,r as M,p as $,C as T,L as d,e as m,t as H,k as C,c as k,a as y,h as E,d as l,m as A,b as D,g as i,I as P,n as B}from"../../chunks/index-f0cd6aaa.js";import{P as I}from"../../chunks/post-d11a0746.js";import"../../chunks/stores-707f9fa0.js";import"../../chunks/settings-69239d06.js";function L(c){let s,t,o,e,n=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">CreateMyDynamicModel</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration
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

<span class="token keyword">end</span> <span class="token comment">#/end class</span></code>`;return{c(){s=m("p"),t=H(`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.`),o=C(),e=m("pre"),this.h()},l(a){s=k(a,"P",{});var p=y(s);t=E(p,`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.`),p.forEach(l),o=A(a),e=k(a,"PRE",{class:!0});var h=y(e);h.forEach(l),this.h()},h(){D(e,"class","language-ruby")},m(a,p){i(a,s,p),P(s,t),i(a,o,p),i(a,e,p),e.innerHTML=n},p:B,d(a){a&&l(s),a&&l(o),a&&l(e)}}}function j(c){let s,t;const o=[c[0],f];let e={$$slots:{default:[L]},$$scope:{ctx:c}};for(let n=0;n<o.length;n+=1)e=r(e,o[n]);return s=new I({props:e}),{c(){v(s.$$.fragment)},l(n){b(s.$$.fragment,n)},m(n,a){R(s,n,a),t=!0},p(n,[a]){const p=a&1?x(o,[a&1&&u(n[0]),a&0&&u(f)]):{};a&2&&(p.$$scope={dirty:a,ctx:n}),s.$set(p)},i(n){t||(M(s.$$.fragment,n),t=!0)},o(n){$(s.$$.fragment,n),t=!1},d(n){T(s,n)}}}const f={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Dynamic Models in Rails 3",description:"How to create dynamic Models in Rails 3",excerpt:"Rails 3 has a lot of nifty new features.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2016-09-06T09:45:57.000Z",updated_at:"2016-09-06T09:45:57.000Z",readingTime:{text:"1 min read",minutes:.82,time:49200,words:164},preview:`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.

`,previewHtml:"<p>Rails 3 has a lot of nifty new features. However, this is not about those features. This article is a short description on how to create dynamic models in any version of Rails.</p> <pre><code>class CreateMyDynamicModel &#x3C; ActiveRecord::Migration def change crea...</code></pre>",textContent:`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.

`};function z(c,s,t){return c.$$set=o=>{t(0,s=r(r({},s),d(o)))},s=d(s),[s]}class F extends _{constructor(s){super(),w(this,s,z,j,g,{})}}export{F as default,f as metadata};
