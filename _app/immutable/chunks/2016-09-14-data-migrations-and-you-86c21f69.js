import{S as Es,i as Rs,s as Ts,C as Rt,w as Is,x as Os,y as xs,H as Ms,Z as hs,f as Ps,t as As,z as Ds,K as ms,k as o,q as s,a as c,l as i,m as r,r as n,h as t,c as u,n as se,b as p,G as a,B as Ss}from"./index-6a3f2268.js";import{P as Ls}from"./post-3c5a9cb3.js";function Fs(N){let d,f,T,O,h,w,S,y,ia,ne,ra,la,oe,pa,ca,ie,ua,da,Ce,Y,ha,Ne,g,ma,re,fa,ya,le,wa,ga,Ye,j,k,pe,ka,va,H,ys=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">CreateMessageFavorites</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration
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
<span class="token keyword">end</span></code>`,ba,L,_a,ce,Ea,Ra,je,x,Ta,ue,Ia,Oa,He,F,ws=`<code class="language-ruby"><span class="token keyword">class</span> <span class="token class-name">UpdateMessageFavoritesToHandleMoreEmotions</span> <span class="token operator">&lt;</span> ActiveRecord<span class="token double-colon punctuation">::</span>Migration
  <span class="token keyword">def</span> <span class="token method-definition"><span class="token function">change</span></span>
    add_column <span class="token symbol">:message_favorites</span><span class="token punctuation">,</span> <span class="token symbol">:favorite_int</span><span class="token punctuation">,</span> <span class="token symbol">:int</span>

    MessageFavorite<span class="token punctuation">.</span>all<span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>mf<span class="token operator">|</span>
      mf<span class="token punctuation">.</span>update_attributes<span class="token punctuation">(</span><span class="token symbol">favorite_int</span><span class="token operator">:</span> MessageFavorite<span class="token double-colon punctuation">::</span><span class="token constant">EMOTIONS</span><span class="token punctuation">[</span>mf<span class="token punctuation">.</span>favorite <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">end</span>

    remove_column <span class="token symbol">:message_favorites</span><span class="token punctuation">,</span> <span class="token symbol">:favorite</span>
    rename_column <span class="token symbol">:message_favorites</span><span class="token punctuation">,</span> <span class="token symbol">:favorite_int</span><span class="token punctuation">,</span> <span class="token symbol">:favorite</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span></code>`,Ve,V,xa,Be,B,Ma,ze,M,Pa,de,Aa,Da,$e,v,he,Sa,La,me,Fa,Ca,fe,Na,Ge,z,Ya,Ue,b,ye,ja,Ha,we,Va,Ba,ge,za,qe,$,$a,We,G,Ga,Ze,_,Ua,ke,qa,Wa,ve,Za,Ka,Ke,m,Ja,be,Qa,Xa,_e,et,at,Ee,tt,st,Re,nt,ot,Je,U,it,Qe,C,gs=`<code class="language-mermaid"><span class="token comment">%% Waiting for the following chart to load...</span>
<span class="token keyword">graph</span> TB<span class="token punctuation">;</span>
  db?<span class="token text string">&#123;database needs to be changed?&#125;</span>
  done<span class="token text string">[Done.]</span>
  db<span class="token text string">["Run database migration (rails migration)"]</span>
  data?<span class="token text string">&#123;data need to be changed?&#125;</span>
  data<span class="token text string">["run script to change data (one-shot)"]</span>
  db_cleanup?<span class="token text string">&#123;database needs cleanup?&#125;</span>
  db? <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">yes</span> <span class="token arrow operator">--></span></span> db
  db? <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">no</span>  <span class="token arrow operator">--></span></span> done
  db  <span class="token arrow operator">--></span> data?
  data? <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">no</span> <span class="token arrow operator">--></span></span>done
  data? <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">yes</span> <span class="token arrow operator">--></span></span> data
  data <span class="token arrow operator">--></span> db_cleanup?
  db_cleanup? <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">yes</span> <span class="token arrow operator">--></span></span> db
  db_cleanup? <span class="token inter-arrow-label"><span class="token arrow-head arrow operator">--</span> <span class="token label property">no</span> <span class="token arrow operator">--></span></span> done</code>`,Xe,q,ea,W,rt,aa,E,Te,P,lt,Ie,pt,ct,Oe,ut,dt,xe,A,ht,Me,mt,ft,Pe,yt,wt,Ae,I,gt,De,kt,vt,Se,bt,_t,ta,Z,Et;return{c(){d=o("nav"),f=o("h2"),T=s("On This Page"),O=c(),h=o("h2"),w=s("A Little Background"),S=c(),y=o("p"),ia=s(`The university from which I graduated did not teach any programming patterns, so when I entered the job market, I was not
sure what `),ne=o("em"),ra=s("programming patterns"),la=s(' (a.k.a. "'),oe=o("em"),pa=s("design patterns"),ca=s(`") even were. My first job was definitely a learning experience,
but since I was on a small team with other newbies, I didn't have many opportunities to grow well as a developer. So when
I got my second job, with developers of all walks and experiences, I was thrown into many, many discussions about what
pattern to apply to what idea. It was a little confusing at first, but very exhilarating! Here was the chance to lose
some old, bad habits, and replace them with new `),ie=o("em"),ua=s("Patterns"),da=s(`! This post is about some patterns I really really like.
I will add references and information about each pattern so you can learn as much about them them as you want!`),Ce=c(),Y=o("h2"),ha=s("Migrations Are Only For Modifying The Database"),Ne=c(),g=o("p"),ma=s(`This is a difficult rule to follow for lots of Rails developers, experienced and not so. Since migrations are usually
automated, it is easy to get in the mindset of adding data changes to migrations. This violates the
`),re=o("strong"),fa=s("Single Responsibility Principle"),ya=s(", which states, "),le=o("em"),wa=s("A class should have a responsibility over a single feature of your application"),ga=s("."),Ye=c(),j=o("blog-note"),k=o("div"),pe=o("p"),ka=s(`Scenario: You have a nice chat app and you want to add the ability for users to 'favorite' certain messages.
At first, you have a boolean field in your database, so your original migration looks like this:`),va=c(),H=o("pre"),ba=c(),L=o("p"),_a=s("After a few months, and many "),ce=o("em"),Ea=s("many"),Ra=s(` messages (6 million!), you decide you want the 'favorite' button to handle
a few more emotions, such as "makes me happy," "makes me sad," "makes me angry," "makes me crazy," and "meh,
just a note."`),je=c(),x=o("p"),Ta=s(`There are several ways of going about doing this. Once you analyze your requirements, you decide to use the
existing `),ue=o("code"),Ia=s("MessageFavorite#favorite"),Oa=s(` field to store the new information.Your immediate thought is to use a
migration as such:`),He=c(),F=o("pre"),Ve=c(),V=o("p"),xa=s(`There are a few problems with this approach, chiefly, running a data migration in the middle of a Rails
migration like this is going to grind things to a halt. Your deploy is going to take forever! There is also an
issue of what happens when there is an error in your data migration which will prevent everything from happening
and could leave you with dangling data that another migration won't be able to fix.`),Be=c(),B=o("p"),Ma=s(`Change in environment is also a big issue. You may have this thoroughly tested while in development or in testing
environments, but production is known to throw a wrench into the works. This untested environment means you need
to baby-sit your data migration, which you won't be able to do while it's in a deploy migration. You will need
to run this separately, in a production console.`),ze=c(),M=o("p"),Pa=s("Finally, there is the obvious issue of violations to the "),de=o("strong"),Aa=s("SRP"),Da=s(". This migration does three things:"),$e=c(),v=o("ol"),he=o("li"),Sa=s("creates a new temporary column"),La=c(),me=o("li"),Fa=s("creates the new data based on the existing data"),Ca=c(),fe=o("li"),Na=s("replaces the original column with the new column"),Ge=c(),z=o("p"),Ya=s("The best way to address all these issues is to just break the migration up into its distinct pieces, by doing the following:"),Ue=c(),b=o("ol"),ye=o("li"),ja=s("create and run a migration to create a new column in the Db"),Ha=c(),we=o("li"),Va=s("run the data migration (in the production console)"),Ba=c(),ge=o("li"),za=s("create and run a migration to replace the old column with the new one"),qe=c(),$=o("p"),$a=s(`For many of us, step 2 is a very daunting task. Rails consoles in production are a hairy endeavor and can lead to bad
data integrity and other sorts of bad things, including deleting all data! Fortunately for you guys, Rails already
has a solution for this.`),We=c(),G=o("h3"),Ga=s("Introducing Rails Runner"),Ze=c(),_=o("p"),Ua=s(`Rails runner is a great tool for running data migrations and other one-shot data changes in your Rails application. Rails
runner runs a given file in the context of your Rails app. You can execute Rails runner as `),ke=o("code"),qa=s("rails runner bin/file.rb"),Wa=s(` or
`),ve=o("code"),Za=s("rails r bin/file.rb"),Ka=s(`. While this won't solve data integrity issues, it will allow you to run a script in the current
Rails context. This means you can have tested and peer reviewed data migrations! Amazing!`),Ke=c(),m=o("p"),Ja=s("For ease of organization, you can put all your data migrations in "),be=o("code"),Qa=s("db/migrate/data/"),Xa=s(`. Another common place is
`),_e=o("code"),et=s("bin/one-shot/:year/:month/"),at=s(`. If this is a hotfix for a tech support ticket, it is helpful to put the ticket number
in the name of the file, for instance `),Ee=o("code"),tt=s("bin/one-shot/2016/09/TS-432098-update-bad-data.rb"),st=s(`. The point is, your team
should agree on a place to put all these tickets so everyone can keep track of the changes. Developers can add a
`),Re=o("code"),nt=s("post_checkout"),ot=s(" git hook to automatically run all new scripts in the agreed-upon directory."),Je=c(),U=o("h3"),it=s("Flow for Data Migrations"),Qe=c(),C=o("pre"),Xe=c(),q=o("div"),ea=c(),W=o("p"),rt=s("If you want to run any migration in Rails, just follow these easy steps:"),aa=c(),E=o("ol"),Te=o("li"),P=o("p"),lt=s("For data migrations, create a one-shot and use "),Ie=o("code"),pt=s("rails runner"),ct=s(`. This is a best practice because it allows your
team to test and review your changes. `),Oe=o("strong"),ut=s("NEVER EVER EVER RUN A PRODUCTION CONSOLE!"),dt=c(),xe=o("li"),A=o("p"),ht=s("Use "),Me=o("code"),mt=s("rails migrations"),ft=c(),Pe=o("strong"),yt=s("FOR DATABASE MODEL CHANGES ONLY"),wt=c(),Ae=o("li"),I=o("p"),gt=s("Apply rules "),De=o("em"),kt=s("1"),vt=s(" and "),Se=o("em"),bt=s("2"),_t=s(" as liberally as possible."),ta=c(),Z=o("p"),Et=s(`If you want to create a data migration, use one-shots. If you want to create a data migration with a database
change, separate the two concerns into a Rails migration, then a data migration, then a cleanup migration if
needed. Of course, YMMV, as with any best practice, just make sure your team is onboard with it and, above all,
remember that agreeing on standard practices is the core of a happy team!`),this.h()},l(e){d=i(e,"NAV",{class:!0});var l=r(d);f=i(l,"H2",{});var Tt=r(f);T=n(Tt,"On This Page"),Tt.forEach(t),l.forEach(t),O=u(e),h=i(e,"H2",{});var It=r(h);w=n(It,"A Little Background"),It.forEach(t),S=u(e),y=i(e,"P",{});var D=r(y);ia=n(D,`The university from which I graduated did not teach any programming patterns, so when I entered the job market, I was not
sure what `),ne=i(D,"EM",{});var Ot=r(ne);ra=n(Ot,"programming patterns"),Ot.forEach(t),la=n(D,' (a.k.a. "'),oe=i(D,"EM",{});var xt=r(oe);pa=n(xt,"design patterns"),xt.forEach(t),ca=n(D,`") even were. My first job was definitely a learning experience,
but since I was on a small team with other newbies, I didn't have many opportunities to grow well as a developer. So when
I got my second job, with developers of all walks and experiences, I was thrown into many, many discussions about what
pattern to apply to what idea. It was a little confusing at first, but very exhilarating! Here was the chance to lose
some old, bad habits, and replace them with new `),ie=i(D,"EM",{});var Mt=r(ie);ua=n(Mt,"Patterns"),Mt.forEach(t),da=n(D,`! This post is about some patterns I really really like.
I will add references and information about each pattern so you can learn as much about them them as you want!`),D.forEach(t),Ce=u(e),Y=i(e,"H2",{});var Pt=r(Y);ha=n(Pt,"Migrations Are Only For Modifying The Database"),Pt.forEach(t),Ne=u(e),g=i(e,"P",{});var K=r(g);ma=n(K,`This is a difficult rule to follow for lots of Rails developers, experienced and not so. Since migrations are usually
automated, it is easy to get in the mindset of adding data changes to migrations. This violates the
`),re=i(K,"STRONG",{});var At=r(re);fa=n(At,"Single Responsibility Principle"),At.forEach(t),ya=n(K,", which states, "),le=i(K,"EM",{});var Dt=r(le);wa=n(Dt,"A class should have a responsibility over a single feature of your application"),Dt.forEach(t),ga=n(K,"."),K.forEach(t),Ye=u(e),j=i(e,"BLOG-NOTE",{});var St=r(j);k=i(St,"DIV",{class:!0});var J=r(k);pe=i(J,"P",{});var Lt=r(pe);ka=n(Lt,`Scenario: You have a nice chat app and you want to add the ability for users to 'favorite' certain messages.
At first, you have a boolean field in your database, so your original migration looks like this:`),Lt.forEach(t),va=u(J),H=i(J,"PRE",{class:!0});var ks=r(H);ks.forEach(t),ba=u(J),L=i(J,"P",{});var sa=r(L);_a=n(sa,"After a few months, and many "),ce=i(sa,"EM",{});var Ft=r(ce);Ea=n(Ft,"many"),Ft.forEach(t),Ra=n(sa,` messages (6 million!), you decide you want the 'favorite' button to handle
a few more emotions, such as "makes me happy," "makes me sad," "makes me angry," "makes me crazy," and "meh,
just a note."`),sa.forEach(t),J.forEach(t),St.forEach(t),je=u(e),x=i(e,"P",{});var na=r(x);Ta=n(na,`There are several ways of going about doing this. Once you analyze your requirements, you decide to use the
existing `),ue=i(na,"CODE",{});var Ct=r(ue);Ia=n(Ct,"MessageFavorite#favorite"),Ct.forEach(t),Oa=n(na,` field to store the new information.Your immediate thought is to use a
migration as such:`),na.forEach(t),He=u(e),F=i(e,"PRE",{class:!0});var vs=r(F);vs.forEach(t),Ve=u(e),V=i(e,"P",{});var Nt=r(V);xa=n(Nt,`There are a few problems with this approach, chiefly, running a data migration in the middle of a Rails
migration like this is going to grind things to a halt. Your deploy is going to take forever! There is also an
issue of what happens when there is an error in your data migration which will prevent everything from happening
and could leave you with dangling data that another migration won't be able to fix.`),Nt.forEach(t),Be=u(e),B=i(e,"P",{});var Yt=r(B);Ma=n(Yt,`Change in environment is also a big issue. You may have this thoroughly tested while in development or in testing
environments, but production is known to throw a wrench into the works. This untested environment means you need
to baby-sit your data migration, which you won't be able to do while it's in a deploy migration. You will need
to run this separately, in a production console.`),Yt.forEach(t),ze=u(e),M=i(e,"P",{});var oa=r(M);Pa=n(oa,"Finally, there is the obvious issue of violations to the "),de=i(oa,"STRONG",{});var jt=r(de);Aa=n(jt,"SRP"),jt.forEach(t),Da=n(oa,". This migration does three things:"),oa.forEach(t),$e=u(e),v=i(e,"OL",{});var Q=r(v);he=i(Q,"LI",{});var Ht=r(he);Sa=n(Ht,"creates a new temporary column"),Ht.forEach(t),La=u(Q),me=i(Q,"LI",{});var Vt=r(me);Fa=n(Vt,"creates the new data based on the existing data"),Vt.forEach(t),Ca=u(Q),fe=i(Q,"LI",{});var Bt=r(fe);Na=n(Bt,"replaces the original column with the new column"),Bt.forEach(t),Q.forEach(t),Ge=u(e),z=i(e,"P",{});var zt=r(z);Ya=n(zt,"The best way to address all these issues is to just break the migration up into its distinct pieces, by doing the following:"),zt.forEach(t),Ue=u(e),b=i(e,"OL",{});var X=r(b);ye=i(X,"LI",{});var $t=r(ye);ja=n($t,"create and run a migration to create a new column in the Db"),$t.forEach(t),Ha=u(X),we=i(X,"LI",{});var Gt=r(we);Va=n(Gt,"run the data migration (in the production console)"),Gt.forEach(t),Ba=u(X),ge=i(X,"LI",{});var Ut=r(ge);za=n(Ut,"create and run a migration to replace the old column with the new one"),Ut.forEach(t),X.forEach(t),qe=u(e),$=i(e,"P",{});var qt=r($);$a=n(qt,`For many of us, step 2 is a very daunting task. Rails consoles in production are a hairy endeavor and can lead to bad
data integrity and other sorts of bad things, including deleting all data! Fortunately for you guys, Rails already
has a solution for this.`),qt.forEach(t),We=u(e),G=i(e,"H3",{});var Wt=r(G);Ga=n(Wt,"Introducing Rails Runner"),Wt.forEach(t),Ze=u(e),_=i(e,"P",{});var ee=r(_);Ua=n(ee,`Rails runner is a great tool for running data migrations and other one-shot data changes in your Rails application. Rails
runner runs a given file in the context of your Rails app. You can execute Rails runner as `),ke=i(ee,"CODE",{});var Zt=r(ke);qa=n(Zt,"rails runner bin/file.rb"),Zt.forEach(t),Wa=n(ee,` or
`),ve=i(ee,"CODE",{});var Kt=r(ve);Za=n(Kt,"rails r bin/file.rb"),Kt.forEach(t),Ka=n(ee,`. While this won't solve data integrity issues, it will allow you to run a script in the current
Rails context. This means you can have tested and peer reviewed data migrations! Amazing!`),ee.forEach(t),Ke=u(e),m=i(e,"P",{});var R=r(m);Ja=n(R,"For ease of organization, you can put all your data migrations in "),be=i(R,"CODE",{});var Jt=r(be);Qa=n(Jt,"db/migrate/data/"),Jt.forEach(t),Xa=n(R,`. Another common place is
`),_e=i(R,"CODE",{});var Qt=r(_e);et=n(Qt,"bin/one-shot/:year/:month/"),Qt.forEach(t),at=n(R,`. If this is a hotfix for a tech support ticket, it is helpful to put the ticket number
in the name of the file, for instance `),Ee=i(R,"CODE",{});var Xt=r(Ee);tt=n(Xt,"bin/one-shot/2016/09/TS-432098-update-bad-data.rb"),Xt.forEach(t),st=n(R,`. The point is, your team
should agree on a place to put all these tickets so everyone can keep track of the changes. Developers can add a
`),Re=i(R,"CODE",{});var es=r(Re);nt=n(es,"post_checkout"),es.forEach(t),ot=n(R," git hook to automatically run all new scripts in the agreed-upon directory."),R.forEach(t),Je=u(e),U=i(e,"H3",{});var as=r(U);it=n(as,"Flow for Data Migrations"),as.forEach(t),Qe=u(e),C=i(e,"PRE",{class:!0});var bs=r(C);bs.forEach(t),Xe=u(e),q=i(e,"DIV",{class:!0});var _s=r(q);_s.forEach(t),ea=u(e),W=i(e,"P",{});var ts=r(W);rt=n(ts,"If you want to run any migration in Rails, just follow these easy steps:"),ts.forEach(t),aa=u(e),E=i(e,"OL",{});var ae=r(E);Te=i(ae,"LI",{});var ss=r(Te);P=i(ss,"P",{});var Le=r(P);lt=n(Le,"For data migrations, create a one-shot and use "),Ie=i(Le,"CODE",{});var ns=r(Ie);pt=n(ns,"rails runner"),ns.forEach(t),ct=n(Le,`. This is a best practice because it allows your
team to test and review your changes. `),Oe=i(Le,"STRONG",{});var os=r(Oe);ut=n(os,"NEVER EVER EVER RUN A PRODUCTION CONSOLE!"),os.forEach(t),Le.forEach(t),ss.forEach(t),dt=u(ae),xe=i(ae,"LI",{});var is=r(xe);A=i(is,"P",{});var Fe=r(A);ht=n(Fe,"Use "),Me=i(Fe,"CODE",{});var rs=r(Me);mt=n(rs,"rails migrations"),rs.forEach(t),ft=u(Fe),Pe=i(Fe,"STRONG",{});var ls=r(Pe);yt=n(ls,"FOR DATABASE MODEL CHANGES ONLY"),ls.forEach(t),Fe.forEach(t),is.forEach(t),wt=u(ae),Ae=i(ae,"LI",{});var ps=r(Ae);I=i(ps,"P",{});var te=r(I);gt=n(te,"Apply rules "),De=i(te,"EM",{});var cs=r(De);kt=n(cs,"1"),cs.forEach(t),vt=n(te," and "),Se=i(te,"EM",{});var us=r(Se);bt=n(us,"2"),us.forEach(t),_t=n(te," as liberally as possible."),te.forEach(t),ps.forEach(t),ae.forEach(t),ta=u(e),Z=i(e,"P",{});var ds=r(Z);Et=n(ds,`If you want to create a data migration, use one-shots. If you want to create a data migration with a database
change, separate the two concerns into a Rails migration, then a data migration, then a cleanup migration if
needed. Of course, YMMV, as with any best practice, just make sure your team is onboard with it and, above all,
remember that agreeing on standard practices is the core of a happy team!`),ds.forEach(t),this.h()},h(){se(d,"class","toc"),se(H,"class","language-ruby"),se(k,"class","note"),se(F,"class","language-ruby"),se(C,"class","language-mermaid"),se(q,"class","mermaid")},m(e,l){p(e,d,l),a(d,f),a(f,T),p(e,O,l),p(e,h,l),a(h,w),p(e,S,l),p(e,y,l),a(y,ia),a(y,ne),a(ne,ra),a(y,la),a(y,oe),a(oe,pa),a(y,ca),a(y,ie),a(ie,ua),a(y,da),p(e,Ce,l),p(e,Y,l),a(Y,ha),p(e,Ne,l),p(e,g,l),a(g,ma),a(g,re),a(re,fa),a(g,ya),a(g,le),a(le,wa),a(g,ga),p(e,Ye,l),p(e,j,l),a(j,k),a(k,pe),a(pe,ka),a(k,va),a(k,H),H.innerHTML=ys,a(k,ba),a(k,L),a(L,_a),a(L,ce),a(ce,Ea),a(L,Ra),p(e,je,l),p(e,x,l),a(x,Ta),a(x,ue),a(ue,Ia),a(x,Oa),p(e,He,l),p(e,F,l),F.innerHTML=ws,p(e,Ve,l),p(e,V,l),a(V,xa),p(e,Be,l),p(e,B,l),a(B,Ma),p(e,ze,l),p(e,M,l),a(M,Pa),a(M,de),a(de,Aa),a(M,Da),p(e,$e,l),p(e,v,l),a(v,he),a(he,Sa),a(v,La),a(v,me),a(me,Fa),a(v,Ca),a(v,fe),a(fe,Na),p(e,Ge,l),p(e,z,l),a(z,Ya),p(e,Ue,l),p(e,b,l),a(b,ye),a(ye,ja),a(b,Ha),a(b,we),a(we,Va),a(b,Ba),a(b,ge),a(ge,za),p(e,qe,l),p(e,$,l),a($,$a),p(e,We,l),p(e,G,l),a(G,Ga),p(e,Ze,l),p(e,_,l),a(_,Ua),a(_,ke),a(ke,qa),a(_,Wa),a(_,ve),a(ve,Za),a(_,Ka),p(e,Ke,l),p(e,m,l),a(m,Ja),a(m,be),a(be,Qa),a(m,Xa),a(m,_e),a(_e,et),a(m,at),a(m,Ee),a(Ee,tt),a(m,st),a(m,Re),a(Re,nt),a(m,ot),p(e,Je,l),p(e,U,l),a(U,it),p(e,Qe,l),p(e,C,l),C.innerHTML=gs,p(e,Xe,l),p(e,q,l),p(e,ea,l),p(e,W,l),a(W,rt),p(e,aa,l),p(e,E,l),a(E,Te),a(Te,P),a(P,lt),a(P,Ie),a(Ie,pt),a(P,ct),a(P,Oe),a(Oe,ut),a(E,dt),a(E,xe),a(xe,A),a(A,ht),a(A,Me),a(Me,mt),a(A,ft),a(A,Pe),a(Pe,yt),a(E,wt),a(E,Ae),a(Ae,I),a(I,gt),a(I,De),a(De,kt),a(I,vt),a(I,Se),a(Se,bt),a(I,_t),p(e,ta,l),p(e,Z,l),a(Z,Et)},p:Ss,d(e){e&&t(d),e&&t(O),e&&t(h),e&&t(S),e&&t(y),e&&t(Ce),e&&t(Y),e&&t(Ne),e&&t(g),e&&t(Ye),e&&t(j),e&&t(je),e&&t(x),e&&t(He),e&&t(F),e&&t(Ve),e&&t(V),e&&t(Be),e&&t(B),e&&t(ze),e&&t(M),e&&t($e),e&&t(v),e&&t(Ge),e&&t(z),e&&t(Ue),e&&t(b),e&&t(qe),e&&t($),e&&t(We),e&&t(G),e&&t(Ze),e&&t(_),e&&t(Ke),e&&t(m),e&&t(Je),e&&t(U),e&&t(Qe),e&&t(C),e&&t(Xe),e&&t(q),e&&t(ea),e&&t(W),e&&t(aa),e&&t(E),e&&t(ta),e&&t(Z)}}}function Cs(N){let d,f;const T=[N[0],fs];let O={$$slots:{default:[Fs]},$$scope:{ctx:N}};for(let h=0;h<T.length;h+=1)O=Rt(O,T[h]);return d=new Ls({props:O}),{c(){Is(d.$$.fragment)},l(h){Os(d.$$.fragment,h)},m(h,w){xs(d,h,w),f=!0},p(h,[w]){const S=w&1?Ms(T,[w&1&&hs(h[0]),w&0&&hs(fs)]):{};w&2&&(S.$$scope={dirty:w,ctx:h}),d.$set(S)},i(h){f||(Ps(d.$$.fragment,h),f=!0)},o(h){As(d.$$.fragment,h),f=!1},d(h){Ds(d,h)}}}const fs={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Data Migrations and You!",description:"Best Practices for Data Migrations",excerpt:"Here was the chance to lose some old, bad habits, and replace them with new _Patterns_!",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["programming","Ruby"],tags:["best practices","design patterns","Rude Boy Solutions"],created_at:"2016-09-14T10:06:59.000Z",updated_at:"2016-09-14T10:06:59.000Z",opengraphImage:null,twitterImage:null};function Ns(N,d,f){return N.$$set=T=>{f(0,d=Rt(Rt({},d),ms(T)))},d=ms(d),[d]}class Hs extends Es{constructor(d){super(),Rs(this,d,Ns,Cs,Ts,{})}}export{Hs as default,fs as metadata};
