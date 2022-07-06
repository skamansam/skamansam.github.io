import{S as _,i as w,s as g,D as r,x as b,y as v,z as x,A as R,B as u,r as $,p as M,C as T,L as k,e as d,t as E,k as H,c as m,a as y,h as A,d as l,m as D,b as P,g as i,I as B,n as C}from"../../chunks/index-a5078a7d.js";import{P as I}from"../../chunks/post-ac48aa50.js";function L(c){let s,t,o,e,n=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">CreateMyDynamicModel</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration
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

<span class="token keyword">end</span> <span class="token comment">#/end class</span></code>`;return{c(){s=d("p"),t=E(`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.`),o=H(),e=d("pre"),this.h()},l(a){s=m(a,"P",{});var p=y(s);t=A(p,`Rails 3 has a lot of nifty new features. However, this is not about those
features. This article is a short description on how to create dynamic models in
any version of Rails.`),p.forEach(l),o=D(a),e=m(a,"PRE",{class:!0});var h=y(e);h.forEach(l),this.h()},h(){P(e,"class","language-ruby")},m(a,p){i(a,s,p),B(s,t),i(a,o,p),i(a,e,p),e.innerHTML=n},p:C,d(a){a&&l(s),a&&l(o),a&&l(e)}}}function Z(c){let s,t;const o=[c[0],f];let e={$$slots:{default:[L]},$$scope:{ctx:c}};for(let n=0;n<o.length;n+=1)e=r(e,o[n]);return s=new I({props:e}),{c(){b(s.$$.fragment)},l(n){v(s.$$.fragment,n)},m(n,a){x(s,n,a),t=!0},p(n,[a]){const p=a&1?R(o,[a&1&&u(n[0]),a&0&&u(f)]):{};a&2&&(p.$$scope={dirty:a,ctx:n}),s.$set(p)},i(n){t||($(s.$$.fragment,n),t=!0)},o(n){M(s.$$.fragment,n),t=!1},d(n){T(s,n)}}}const f={draft:!0,comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Dynamic Models in Rails 3",description:"How to create dynamic Models in Rails 3",excerpt:"Rails 3 has a lot of nifty new features.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["ruby"],tags:["Ruby on Rails"],created_at:"2016-09-06T09:45:57.000Z",updated_at:"2016-09-06T09:45:57.000Z",lastmod:"2022-06-13T01:54:22.847Z"};function j(c,s,t){return c.$$set=o=>{t(0,s=r(r({},s),k(o)))},s=k(s),[s]}class S extends _{constructor(s){super(),w(this,s,j,Z,g,{})}}export{S as default,f as metadata};
