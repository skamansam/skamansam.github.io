import"./DsnmJJEf.js";import"./DUAmNnRy.js";import"./7VeBLrFP.js";import{s as n,c as a,r as e,n as c}from"./zEET8Voz.js";import{f as b,a as w}from"./6j56-UlN.js";import{P as v,h as i}from"./DyPJOxdm.js";import{l as _,s as R}from"./DLHvm563.js";const d={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Data Migrations and You!",description:"Best Practices for Data Migrations",excerpt:"Here was the chance to lose some old, bad habits, and replace them with new _Patterns_!",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["programming","Ruby"],tags:["best practices","design patterns","Rude Boy Solutions"],created_at:"2016-09-14T10:06:59.000Z",updated_at:"2016-09-14T10:06:59.000Z",opengraphImage:null,twitterImage:null,preview:`On This Page

- A Little Background
- Migrations Are Only For Modifying The Database
- Introducing Rails Runner
- Flow for Data Migrations`,previewHtml:"<h2>On This Page</h2>",textContent:`On This Page

- A Little Background
- Migrations Are Only For Modifying The Database
- Introducing Rails Runner
- Flow for Data Migrations


A Little Background

The university from which I graduated did not teach any programming patterns, so when I entered the job market, I was not 
sure what...`},{comments:P,view:$,layout:S,lang:B,author:L,title:Y,description:j,excerpt:C,cover:N,coverImage:H,coverAlt:q,categories:z,tags:U,created_at:V,updated_at:W,opengraphImage:Z,twitterImage:G,preview:J,previewHtml:K,textContent:Q}=d;var T=b(`<nav class="toc"><h2 id="on-this-page">On This Page</h2> <ul><li><a href="#a-little-background">A Little Background</a></li> <li><a href="#migrations-are-only-for-modifying-the-database">Migrations Are Only For Modifying The Database</a> <ul><li><a href="#introducing-rails-runner">Introducing Rails Runner</a></li> <li><a href="#flow-for-data-migrations">Flow for Data Migrations</a></li></ul></li></ul> <h2 id="a-little-background">A Little Background</h2> <p>The university from which I graduated did not teach any programming patterns, so when I entered the job market, I was not
sure what <em>programming patterns</em> (a.k.a. "<em>design patterns</em>") even were. My first job was definitely a learning experience,
but since I was on a small team with other newbies, I didn't have many opportunities to grow well as a developer. So when
I got my second job, with developers of all walks and experiences, I was thrown into many, many discussions about what
pattern to apply to what idea. It was a little confusing at first, but very exhilarating! Here was the chance to lose
some old, bad habits, and replace them with new <em>Patterns</em>! This post is about some patterns I really really like.
I will add references and information about each pattern so you can learn as much about them them as you want!</p> <h2 id="migrations-are-only-for-modifying-the-database">Migrations Are Only For Modifying The Database</h2> <p>This is a difficult rule to follow for lots of Rails developers, experienced and not so. Since migrations are usually
automated, it is easy to get in the mindset of adding data changes to migrations. This violates the <strong>Single Responsibility Principle</strong>, which states, <em>A class should have a responsibility over a single feature of your application</em>.</p> <blog-note><div class="note"><p>Scenario: You have a nice chat app and you want to add the ability for users to 'favorite' certain messages.
At first, you have a boolean field in your database, so your original migration looks like this:</p> <pre class="language-ruby"><!></pre> <p>After a few months, and many <em>many</em> messages (6 million!), you decide you want the 'favorite' button to handle
a few more emotions, such as "makes me happy," "makes me sad," "makes me angry," "makes me crazy," and "meh,
just a note."</p></div></blog-note> <p>There are several ways of going about doing this. Once you analyze your requirements, you decide to use the
existing <code>MessageFavorite#favorite</code> field to store the new information.Your immediate thought is to use a
migration as such:</p> <pre class="language-ruby"><!></pre> <p>There are a few problems with this approach, chiefly, running a data migration in the middle of a Rails
migration like this is going to grind things to a halt. Your deploy is going to take forever! There is also an
issue of what happens when there is an error in your data migration which will prevent everything from happening
and could leave you with dangling data that another migration won't be able to fix.</p> <p>Change in environment is also a big issue. You may have this thoroughly tested while in development or in testing
environments, but production is known to throw a wrench into the works. This untested environment means you need
to baby-sit your data migration, which you won't be able to do while it's in a deploy migration. You will need
to run this separately, in a production console.</p> <p>Finally, there is the obvious issue of violations to the <strong>SRP</strong>. This migration does three things:</p> <ol><li>creates a new temporary column</li> <li>creates the new data based on the existing data</li> <li>replaces the original column with the new column</li></ol> <p>The best way to address all these issues is to just break the migration up into its distinct pieces, by doing the following:</p> <ol><li>create and run a migration to create a new column in the Db</li> <li>run the data migration (in the production console)</li> <li>create and run a migration to replace the old column with the new one</li></ol> <p>For many of us, step 2 is a very daunting task. Rails consoles in production are a hairy endeavor and can lead to bad
data integrity and other sorts of bad things, including deleting all data! Fortunately for you guys, Rails already
has a solution for this.</p> <h3 id="introducing-rails-runner">Introducing Rails Runner</h3> <p>Rails runner is a great tool for running data migrations and other one-shot data changes in your Rails application. Rails
runner runs a given file in the context of your Rails app. You can execute Rails runner as <code>rails runner bin/file.rb</code> or <code>rails r bin/file.rb</code>. While this won't solve data integrity issues, it will allow you to run a script in the current
Rails context. This means you can have tested and peer reviewed data migrations! Amazing!</p> <p>For ease of organization, you can put all your data migrations in <code>db/migrate/data/</code>. Another common place is <code>bin/one-shot/:year/:month/</code>. If this is a hotfix for a tech support ticket, it is helpful to put the ticket number
in the name of the file, for instance <code>bin/one-shot/2016/09/TS-432098-update-bad-data.rb</code>. The point is, your team
should agree on a place to put all these tickets so everyone can keep track of the changes. Developers can add a <code>post_checkout</code> git hook to automatically run all new scripts in the agreed-upon directory.</p> <h3 id="flow-for-data-migrations">Flow for Data Migrations</h3> <pre class="language-mermaid"><!></pre> <div class="mermaid"></div> <p>If you want to run any migration in Rails, just follow these easy steps:</p> <ol><li><p>For data migrations, create a one-shot and use <code>rails runner</code>. This is a best practice because it allows your
team to test and review your changes. <strong>NEVER EVER EVER RUN A PRODUCTION CONSOLE!</strong></p></li> <li><p>Use <code>rails migrations</code> <strong>FOR DATABASE MODEL CHANGES ONLY</strong></p></li> <li><p>Apply rules <em>1</em> and <em>2</em> as liberally as possible.</p></li></ol> <p>If you want to create a data migration, use one-shots. If you want to create a data migration with a database
change, separate the two concerns into a Rails migration, then a data migration, then a cleanup migration if
needed. Of course, YMMV, as with any best practice, just make sure your team is onboard with it and, above all,
remember that agreeing on standard practices is the core of a happy team!</p></nav>`,2);function X(u,h){const g=_(h,["children","$$slots","$$events","$$legacy"]);v(u,R(()=>g,()=>d,{children:(m,I)=>{var t=T(),s=n(a(t),12),r=a(s),l=n(a(r),2),y=a(l);i(y,()=>`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">CreateMessageFavorites</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration
  <span class="token keyword">def</span> <span class="token method-definition"><span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">up</span></span>
    create_table <span class="token symbol">:message_favorites</span> <span class="token keyword">do</span> <span class="token operator">|</span>t<span class="token operator">|</span>
      t<span class="token punctuation">.</span>references <span class="token symbol">:message</span>
      t<span class="token punctuation">.</span>references <span class="token symbol">:user</span>
      t<span class="token punctuation">.</span>boolean    <span class="token symbol">:favorite</span>
      t<span class="token punctuation">.</span>timestamps  null<span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>

  <span class="token keyword">def</span> <span class="token method-definition"><span class="token keyword">self</span><span class="token punctuation">.</span><span class="token function">down</span></span>
    drop_table <span class="token symbol">:message_favorites</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span></code>`),e(l),c(2),e(r),e(s);var o=n(s,4),f=a(o);i(f,()=>`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">UpdateMessageFavoritesToHandleMoreEmotions</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration
  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">change</span></span>
    add_column <span class="token symbol">:message_favorites</span><span class="token punctuation">,</span> <span class="token symbol">:favorite_int</span><span class="token punctuation">,</span> <span class="token symbol">:int</span>

    MessageFavorite<span class="token punctuation">.</span>all<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>mf<span class="token operator">|</span>
      mf<span class="token punctuation">.</span>update_attributes<span class="token punctuation">(</span><span class="token symbol">favorite_int</span><span class="token operator">:</span> MessageFavorite<span class="token double-colon punctuation">::</span><span class="token constant">EMOTIONS</span><span class="token punctuation">[</span>mf<span class="token punctuation">.</span>favorite <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">end</span>

    remove_column <span class="token symbol">:message_favorites</span><span class="token punctuation">,</span> <span class="token symbol">:favorite</span>
    rename_column <span class="token symbol">:message_favorites</span><span class="token punctuation">,</span> <span class="token symbol">:favorite_int</span><span class="token punctuation">,</span> <span class="token symbol">:favorite</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span></code>`),e(o);var p=n(o,24),k=a(p);i(k,()=>`<code class="language-mermaid">%% Waiting for the following chart to load...
graph TB;
  db?&#123;database needs to be changed?&#125;
  done[Done.]
  db[&quot;Run database migration (rails migration)&quot;]
  data?&#123;data need to be changed?&#125;
  data[&quot;run script to change data (one-shot)&quot;]
  db_cleanup?&#123;database needs cleanup?&#125;
  db? -- yes --&gt; db
  db? -- no  --&gt; done
  db  --&gt; data?
  data? -- no --&gt;done
  data? -- yes --&gt; data
  data --&gt; db_cleanup?
  db_cleanup? -- yes --&gt; db
  db_cleanup? -- no --&gt; done</code>`),e(p),c(8),e(t),w(m,t)},$$slots:{default:!0}}))}export{X as default,d as metadata};
