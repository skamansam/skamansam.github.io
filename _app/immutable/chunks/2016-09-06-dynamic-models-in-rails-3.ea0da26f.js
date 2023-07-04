import{s as f,r,B as u,f as d,a as h,g as k,C as _,c as w,h as g,d as l,j as v,i,y as b}from"./scheduler.28ea7184.js";import{S as R,i as x,b as M,d as $,m as C,a as H,t as T,e as E}from"./index.8021bc93.js";import{g as A,a as m}from"./spread.8a54911c.js";import{P as D}from"./post.60382223.js";function P(c){let s,o=`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.`,t,e,a=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">CreateMyDynamicModel</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration
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

<span class="token keyword">end</span> <span class="token comment">#/end class</span></code>`;return{c(){s=d("p"),s.textContent=o,t=h(),e=d("pre"),this.h()},l(n){s=k(n,"P",{["data-svelte-h"]:!0}),_(s)!=="svelte-bzy54f"&&(s.textContent=o),t=w(n),e=k(n,"PRE",{class:!0});var p=g(e);p.forEach(l),this.h()},h(){v(e,"class","language-ruby")},m(n,p){i(n,s,p),i(n,t,p),i(n,e,p),e.innerHTML=a},p:b,d(n){n&&(l(s),l(t),l(e))}}}function j(c){let s,o;const t=[c[0],y];let e={$$slots:{default:[P]},$$scope:{ctx:c}};for(let a=0;a<t.length;a+=1)e=r(e,t[a]);return s=new D({props:e}),{c(){M(s.$$.fragment)},l(a){$(s.$$.fragment,a)},m(a,n){C(s,a,n),o=!0},p(a,[n]){const p=n&1?A(t,[n&1&&m(a[0]),n&0&&m(y)]):{};n&2&&(p.$$scope={dirty:n,ctx:a}),s.$set(p)},i(a){o||(H(s.$$.fragment,a),o=!0)},o(a){T(s.$$.fragment,a),o=!1},d(a){E(s,a)}}}const y={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Dynamic Models in Rails 3",description:"How to create dynamic Models in Rails 3",excerpt:"Rails 3 has a lot of nifty new features.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2016-09-06T09:45:57.000Z",updated_at:"2016-09-06T09:45:57.000Z",preview:`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.

`,previewHtml:"<p>Rails 3 has a lot of nifty new features. However, this is not about those features. This article is a short description on how to create dynamic models in any version of Rails.</p> <pre><code>class CreateMyDynamicModel &#x3C; ActiveRecord::Migration def change crea...</code></pre>",textContent:`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.

`};function B(c,s,o){return c.$$set=t=>{o(0,s=r(r({},s),u(t)))},s=u(s),[s]}class S extends R{constructor(s){super(),x(this,s,B,j,f,{})}}export{S as default,y as metadata};
