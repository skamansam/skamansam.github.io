import{S as ys,i as hs,s as Ps,C as pn,y as Es,z as Ts,A as xs,H as ds,$ as cs,g as Is,d as Hs,B as js,L as ms,k as p,a as u,q as n,l as i,c as f,m as r,r as s,h as a,n as G,b as o,G as e,I as Ls}from"./index.37f37dfa.js";import{P as Bs}from"./post.47922bc8.js";function Fs(V){let $,E,w,A,c,k,W,kt,Z,$a,vt,q,ca,_t,K,ma,wt,C,U,ks=`<code class="language-undefined">1
1  1
1  2  1
1  3  3  1
1  4  6  4  1
1  5 10 10  5  1
1  6 15 20 15  6  1
...</code>`,yt,Y,ba,ht,M,vs=`<code class="language-cpp">vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">pascal</span><span class="token punctuation">(</span>
      vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> prev<span class="token punctuation">,</span> <span class="token comment">//the current (old) row data</span>
      <span class="token keyword">int</span> <span class="token operator">*</span>len<span class="token punctuation">,</span>		<span class="token comment">//the length of the data</span>
      <span class="token keyword">int</span> end<span class="token punctuation">,</span>			<span class="token comment">//the row to retrieve</span>
      <span class="token keyword">int</span> cur<span class="token operator">=</span><span class="token number">0</span>		<span class="token comment">//the current row we are on</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">pascal</span><span class="token punctuation">(</span>vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> prev<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token operator">*</span>len<span class="token punctuation">,</span><span class="token keyword">int</span> end<span class="token punctuation">,</span><span class="token keyword">int</span> cur<span class="token punctuation">)</span><span class="token punctuation">&#123;</span>

       <span class="token comment">//return immediately if we are at the last row</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>cur<span class="token operator">==</span>end<span class="token punctuation">)</span> <span class="token keyword">return</span> prev<span class="token punctuation">;</span>

     	<span class="token comment">//if the current vector length is 0, then set it to 1</span>
      	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">*</span>len<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">*</span>len<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>

      	<span class="token comment">//create a temp vector (all 1's) to store the new row data</span>
      	vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">t</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">*</span>len<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      	<span class="token comment">//sum the two rows</span>
      	<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token operator">*</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
            t<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>prev<span class="token punctuation">[</span>i<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">+</span>prev<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

      	<span class="token comment">//increase the length by 1</span>
      	<span class="token operator">*</span>len<span class="token operator">=</span><span class="token punctuation">(</span><span class="token operator">*</span>len<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>

      	<span class="token comment">//return the new row data</span>
      	<span class="token keyword">return</span> <span class="token function">pascal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span>len<span class="token punctuation">,</span>end<span class="token punctuation">,</span>cur<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">&#125;</span></code>`,Pt,z,ka,Et,X,va,Tt,d,_a,rn="( x + 3 )^3 = x^3 + 9x^2 + 27x + 27 ",wa,ya,xt,J,ha,dt,m,Pa,un="(a+b)^n = ",Ea,Ta,fn="(a+b)^{n-1}(a+b)",xa,da,$n="(a+b)^{n-2}(a+b)^2",Ia,Ha,cn="(a+b)^{n-2}((a+b)(a+b))",ja,La,mn="( (a<em>a) + (a</em>b) + (b<em>a) + (b</em>b) )(a+b)^{n-1} ",Ba,Fa,bn="(a^2+2ab+b^2)(a+b)^{n-1}",Na,Da,It,O,Ra,Ht,y,Aa,kn="(a+b)^{n-6}(a+b)^5",Ca,Ma,vn="(a+b)^{n-6}( (a+b) (a+b) (a+b) (a+b) (a+b) )",Sa,Ga,_n="(a+b)^{n-6}( ( (a+b)(a+b) )( (a+b)(a+b) ) (a+b) )",Va,Wa,jt,Q,Za,Lt,v,qa,wn="(( a^2+2ab+b^2 )( a^2+2ab+b^2 )(a+b) )(a+b)^{n-6}",Ka,Ua,yn="( ( (a^2<em>a^2)+(a^2</em>2ab) + (a^2<em>b^2) + ( 2ab</em>a^2) + (2ab<em>2ab) + (2ab</em>b^2) + (b^2<em>a^2)+(b^2</em>2ab) + (b^2*b^2) ) (a+b) )(a+b)^{n-6}",Ya,za,hn="( ( a^4 + 2a^3b+ a^2b^2 + 2a^3b + 4a^2b^2 + 2ab^3 + b^2a^2 + 2ab^3+ b^4) (a+b) )(a+b)^{n-6} =",Xa,Ja,Pn="( ( a^4 + 4a^3b + 6a2b^2 + 4ab^3+b^4) (a+b) )(a+b)^{n-6} = ",Oa,Qa,Bt,h,ga,En="( ( a^4<em>a + a^4</em>b + 4a^3b<em>a + 4a^3b</em>b + 6a^2b^2<em>a + 6a^2b^2</em>b + 4ab^3<em>a + 4ab^3</em>b + b^4<em>a+b^4</em>b))(a+b)^{n-6}",te,ae,Tn="( ( a^5 + a^4b + 4a^4b + 4a^3b^2 + 6a^3b^2 + 6a^2b^3 + 4a^2b^3 + 4ab^4 + ab^4+b^5))(a+b)^{n-6}",ee,ne,xn="( ( a^5 +5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5)(a+b)^{n-6}",se,le,Ft,g,oe,Nt,tt,pe,Dt,at,ie,Rt,et,re,At,nt,ue,Ct,I,fe,dn="(a+b)^n = sum<em>{i=0}^n (P</em>{ni}a^{n-i}b^i)",$e,ce,Mt,H,me,In="sumlimits_{i=1}^n i^2 = \frac{n(n+1)(2n+1)}{6}",be,ke,St,T,ve,Hn="$P<em>{ni}$",_e,we,jn="$(P</em>{ni}a^{n-i}b^i)$",ye,he,Gt,j,Pe,Ln="sum<em>{i=0}^{3}(P</em>{3i}a^{3-i}b^i) = ",Ee,Te,Vt,L,xe,Bn="(P<em>{(3,0)}a^{3-0}b^0) + (P</em>{(3,1)}a^{3-1}b^1) + (P<em>{(3,2)}a^{3-2}b^2) + (P</em>{(3,3)}a^{3-3}b^3) = ",de,Ie,Wt,st,He,Zt,B,je,Fn="((1)a^{3-0}b^0) + ((3)a^{3-1}b^1) + ((3)a^{3-2}b^2) + ((1)a^{3-3}b^3) ",Le,Be,qt,lt,Fe,Kt,ot,Ne,Ut,pt,De,Yt,it,Re,zt,rt,Ae,Xt,ut,Ce,Jt,F,Me,Nn="sum<em>{i=0}^{n}(P</em>{ni}(xa)^{n-i}(yb)^i)",Se,Ge,Ot,ft,Ve,Qt,N,We,Dn="sum<em>{i=0}^{n}(P</em>{3i}(x^{n-i}y^{i})a^{n-i}b^i) ",Ze,qe,gt,$t,Ke,ta,b,Ue,Rn=3+"",Ye,ze,An=2+"",Xe,Je,S,Oe,Cn=2+"",Qe,ge,tn,Mn=2+"",an,en,Sn=2+"",nn,sn,aa,ct,ln,ea,mt,on;return{c(){$=p("link"),E=u(),w=p("div"),A=n("This post is heavy with math formualae, so may take a few seconds to format correctly."),c=u(),k=p("div"),W=n(`This post was originally written 2009/05/29, but was never finished. I just
  finished the revisions on 2016/09/14 and it is now complete.`),kt=u(),Z=p("p"),$a=n("I have always had a certain love for math and the neat things you can do with it. Here is a bit of information and shortcuts I have picked up in a few of my math classes."),vt=u(),q=p("h2"),ca=n("Pascal's Triangle"),_t=u(),K=p("p"),ma=n("Pascal's Triangle is a pretty neat thing. It is very simple to construct and can be used to understand a lot of different ideas. It follows a very simple form: start with a '1' and add the two digits above  to get the next number. The first few line look like this:"),wt=u(),C=p("div"),U=p("pre"),yt=u(),Y=p("p"),ba=n("The line numbers start at 0, and continue on ad infinitum. In order to generate this triangle, programmatically, you would use something like this:"),ht=u(),M=p("pre"),Pt=u(),z=p("h2"),ka=n("Binomial Expansion"),Et=u(),X=p("p"),va=n("Remember binomials from algebra? They were the pair of numbers used to create or simplify polynomial expressions, something like:"),Tt=u(),d=p("p"),_a=n(`$$
`),wa=n(rn),ya=n(`
$$`),xt=u(),J=p("p"),ha=n("You can use Pascal's triangle to find the coefficients of the polynomials. Let's begin by solving for the generic  case:"),dt=u(),m=p("p"),Pa=n(`$$
`),Ea=n(un),Ta=n(`
$$
$$
`),xa=n(fn),da=n(` =
$$
$$
`),Ia=n($n),Ha=n(` =
$$
$$
`),ja=n(cn),La=n(` =
$$
$$
`),Ba=n(mn),Fa=n(`=
$$
$$
`),Na=n(bn),Da=n(` =
$$`),It=u(),O=p("p"),Ra=n(`See the coefficients so far, with $n = 2$ ? They are $[1 2 1]$, which corresponds
to the second row in Pascal's triangle. But this could be a fluke, right, so
let's jump ahead to $n = 5$ to see if that works as well.`),Ht=u(),y=p("p"),Aa=n(`$$
(a+b)^n =
$$
$$
`),Ca=n(kn),Ma=n(` =
$$
$$
`),Sa=n(vn),Ga=n(` =
$$
$$
`),Va=n(_n),Wa=n(` =
$$`),jt=u(),Q=p("p"),Za=n("[we know what $(a+b)^2$ is, so: ]"),Lt=u(),v=p("p"),qa=n(`$$
`),Ka=n(wn),Ua=n(` =
$$
$$
`),Ya=n(yn),za=n(` =
$$
$$
`),Xa=n(hn),Ja=n(`
$$
$$
`),Oa=n(Pn),Qa=n(`
$$`),Bt=u(),h=p("p"),ga=n(`[note: notice that the coefficients of $(a+b)^4$ are (1 4 6 4 1) ! ]
$$
`),te=n(En),ae=n(` =
$$
$$
`),ee=n(Tn),ne=n(`=
$$
$$
`),se=n(xn),le=n(`
$$`),Ft=u(),g=p("p"),oe=n("There it is! The coefficients correspond to the rows on Pascal's Triangle!"),Nt=u(),tt=p("h3"),pe=n("Features"),Dt=u(),at=p("p"),ie=n('Now, to make things a little simpler, I will note some interesting "features" about what we just did.'),Rt=u(),et=p("h4"),re=n("General Formula for Binomial Expansion"),At=u(),nt=p("p"),ue=n("The general formula for binomial expansion is:"),Ct=u(),I=p("p"),fe=n(`$$
`),$e=n(dn),ce=n(`
$$`),Mt=u(),H=p("p"),me=n(`$$
`),be=n(In),ke=n(`
$$`),St=u(),T=p("p"),ve=n("Where "),_e=n(Hn),we=n(` is the coefficient at row $n$ (starting from 0) and column $i$ in
Pascal's Triangle. The formula means to add from $i=0$ to $n$ all the terms
`),ye=n(jn),he=n(` , replacing $i$ with the number you are at. For example,
supposing $i=3$, you would get:`),Gt=u(),j=p("p"),Pe=n(`$$
`),Ee=n(Ln),Te=n(`
$$`),Vt=u(),L=p("p"),xe=n(`$$
`),de=n(Bn),Ie=n(`
$$`),Wt=u(),st=p("p"),He=n("since $P_3 = [1 3 3 1]$ , we finally get:"),Zt=u(),B=p("p"),je=n(`$$
`),Le=n(Fn),Be=n(`
$$`),qt=u(),lt=p("p"),Fe=n("cleaning up a bit :"),Kt=u(),ot=p("p"),Ne=n(`$$
a^3 + 3a^2b + 3ab^2 + b^3
$$`),Ut=u(),pt=p("h4"),De=n("Exponents"),Yt=u(),it=p("p"),Re=n("Note in all the expansions, the first variable counts down from $n$ to $0$, while the second variable counts up from $0$ to $n$."),zt=u(),rt=p("h3"),Ae=n("Does your binomial already have coefficients?"),Xt=u(),ut=p("p"),Ce=n("If your binomial already has coefficients, simply put them with their terms like so:"),Jt=u(),F=p("p"),Me=n(`$$
`),Se=n(Nn),Ge=n(`
$$`),Ot=u(),ft=p("p"),Ve=n("Using the commutative property, it can be rewritten as such:"),Qt=u(),N=p("p"),We=n(`$$
`),Ze=n(Dn),qe=n(`
$$`),gt=u(),$t=p("p"),Ke=n("Let's try an example!"),ta=u(),b=p("p"),Ue=n(`$$
(3a+2b)^3 =
(1)(3a)^`),Ye=n(Rn),ze=n("(2b)^0 + (3)(3a)^"),Xe=n(An),Je=n(`(2b) + (3)(3a)(2b)^2 + (1)(2b)^3 =
(1)(3^3)a^3 + (3)(3^2`),S=p("em"),Oe=n("2)a^"),Qe=n(Cn),ge=n("b + (3)(3"),tn=n(`2^2)ab^2 + (1)(2^3)b^3 =
(1)(27)a^3 + (3)(18)a^`),an=n(Mn),en=n(`b + (3)(12)ab^2 + (1)(8)b^3 =
27a^3 + 54a^`),nn=n(Sn),sn=n(`b + 36ab^2 + 8b^3
$$`),aa=u(),ct=p("h1"),ln=n("Conclusion"),ea=u(),mt=p("p"),on=n(`As you can see, it is fairly easy to use Pascal's Triagel as a lookup table for
binomial exapnsion's coefficients. I hope you have much more fun in your maths!`),this.h()},l(t){$=i(t,"LINK",{rel:!0,href:!0}),E=f(t),w=i(t,"DIV",{class:!0});var l=r(w);A=s(l,"This post is heavy with math formualae, so may take a few seconds to format correctly."),l.forEach(a),c=f(t),k=i(t,"DIV",{class:!0});var Gn=r(k);W=s(Gn,`This post was originally written 2009/05/29, but was never finished. I just
  finished the revisions on 2016/09/14 and it is now complete.`),Gn.forEach(a),kt=f(t),Z=i(t,"P",{});var Vn=r(Z);$a=s(Vn,"I have always had a certain love for math and the neat things you can do with it. Here is a bit of information and shortcuts I have picked up in a few of my math classes."),Vn.forEach(a),vt=f(t),q=i(t,"H2",{});var Wn=r(q);ca=s(Wn,"Pascal's Triangle"),Wn.forEach(a),_t=f(t),K=i(t,"P",{});var Zn=r(K);ma=s(Zn,"Pascal's Triangle is a pretty neat thing. It is very simple to construct and can be used to understand a lot of different ideas. It follows a very simple form: start with a '1' and add the two digits above  to get the next number. The first few line look like this:"),Zn.forEach(a),wt=f(t),C=i(t,"DIV",{class:!0});var qn=r(C);U=i(qn,"PRE",{class:!0});var _s=r(U);_s.forEach(a),qn.forEach(a),yt=f(t),Y=i(t,"P",{});var Kn=r(Y);ba=s(Kn,"The line numbers start at 0, and continue on ad infinitum. In order to generate this triangle, programmatically, you would use something like this:"),Kn.forEach(a),ht=f(t),M=i(t,"PRE",{class:!0});var ws=r(M);ws.forEach(a),Pt=f(t),z=i(t,"H2",{});var Un=r(z);ka=s(Un,"Binomial Expansion"),Un.forEach(a),Et=f(t),X=i(t,"P",{});var Yn=r(X);va=s(Yn,"Remember binomials from algebra? They were the pair of numbers used to create or simplify polynomial expressions, something like:"),Yn.forEach(a),Tt=f(t),d=i(t,"P",{});var na=r(d);_a=s(na,`$$
`),wa=s(na,rn),ya=s(na,`
$$`),na.forEach(a),xt=f(t),J=i(t,"P",{});var zn=r(J);ha=s(zn,"You can use Pascal's triangle to find the coefficients of the polynomials. Let's begin by solving for the generic  case:"),zn.forEach(a),dt=f(t),m=i(t,"P",{});var _=r(m);Pa=s(_,`$$
`),Ea=s(_,un),Ta=s(_,`
$$
$$
`),xa=s(_,fn),da=s(_,` =
$$
$$
`),Ia=s(_,$n),Ha=s(_,` =
$$
$$
`),ja=s(_,cn),La=s(_,` =
$$
$$
`),Ba=s(_,mn),Fa=s(_,`=
$$
$$
`),Na=s(_,bn),Da=s(_,` =
$$`),_.forEach(a),It=f(t),O=i(t,"P",{});var Xn=r(O);Ra=s(Xn,`See the coefficients so far, with $n = 2$ ? They are $[1 2 1]$, which corresponds
to the second row in Pascal's triangle. But this could be a fluke, right, so
let's jump ahead to $n = 5$ to see if that works as well.`),Xn.forEach(a),Ht=f(t),y=i(t,"P",{});var D=r(y);Aa=s(D,`$$
(a+b)^n =
$$
$$
`),Ca=s(D,kn),Ma=s(D,` =
$$
$$
`),Sa=s(D,vn),Ga=s(D,` =
$$
$$
`),Va=s(D,_n),Wa=s(D,` =
$$`),D.forEach(a),jt=f(t),Q=i(t,"P",{});var Jn=r(Q);Za=s(Jn,"[we know what $(a+b)^2$ is, so: ]"),Jn.forEach(a),Lt=f(t),v=i(t,"P",{});var x=r(v);qa=s(x,`$$
`),Ka=s(x,wn),Ua=s(x,` =
$$
$$
`),Ya=s(x,yn),za=s(x,` =
$$
$$
`),Xa=s(x,hn),Ja=s(x,`
$$
$$
`),Oa=s(x,Pn),Qa=s(x,`
$$`),x.forEach(a),Bt=f(t),h=i(t,"P",{});var R=r(h);ga=s(R,`[note: notice that the coefficients of $(a+b)^4$ are (1 4 6 4 1) ! ]
$$
`),te=s(R,En),ae=s(R,` =
$$
$$
`),ee=s(R,Tn),ne=s(R,`=
$$
$$
`),se=s(R,xn),le=s(R,`
$$`),R.forEach(a),Ft=f(t),g=i(t,"P",{});var On=r(g);oe=s(On,"There it is! The coefficients correspond to the rows on Pascal's Triangle!"),On.forEach(a),Nt=f(t),tt=i(t,"H3",{});var Qn=r(tt);pe=s(Qn,"Features"),Qn.forEach(a),Dt=f(t),at=i(t,"P",{});var gn=r(at);ie=s(gn,'Now, to make things a little simpler, I will note some interesting "features" about what we just did.'),gn.forEach(a),Rt=f(t),et=i(t,"H4",{});var ts=r(et);re=s(ts,"General Formula for Binomial Expansion"),ts.forEach(a),At=f(t),nt=i(t,"P",{});var as=r(nt);ue=s(as,"The general formula for binomial expansion is:"),as.forEach(a),Ct=f(t),I=i(t,"P",{});var sa=r(I);fe=s(sa,`$$
`),$e=s(sa,dn),ce=s(sa,`
$$`),sa.forEach(a),Mt=f(t),H=i(t,"P",{});var la=r(H);me=s(la,`$$
`),be=s(la,In),ke=s(la,`
$$`),la.forEach(a),St=f(t),T=i(t,"P",{});var bt=r(T);ve=s(bt,"Where "),_e=s(bt,Hn),we=s(bt,` is the coefficient at row $n$ (starting from 0) and column $i$ in
Pascal's Triangle. The formula means to add from $i=0$ to $n$ all the terms
`),ye=s(bt,jn),he=s(bt,` , replacing $i$ with the number you are at. For example,
supposing $i=3$, you would get:`),bt.forEach(a),Gt=f(t),j=i(t,"P",{});var oa=r(j);Pe=s(oa,`$$
`),Ee=s(oa,Ln),Te=s(oa,`
$$`),oa.forEach(a),Vt=f(t),L=i(t,"P",{});var pa=r(L);xe=s(pa,`$$
`),de=s(pa,Bn),Ie=s(pa,`
$$`),pa.forEach(a),Wt=f(t),st=i(t,"P",{});var es=r(st);He=s(es,"since $P_3 = [1 3 3 1]$ , we finally get:"),es.forEach(a),Zt=f(t),B=i(t,"P",{});var ia=r(B);je=s(ia,`$$
`),Le=s(ia,Fn),Be=s(ia,`
$$`),ia.forEach(a),qt=f(t),lt=i(t,"P",{});var ns=r(lt);Fe=s(ns,"cleaning up a bit :"),ns.forEach(a),Kt=f(t),ot=i(t,"P",{});var ss=r(ot);Ne=s(ss,`$$
a^3 + 3a^2b + 3ab^2 + b^3
$$`),ss.forEach(a),Ut=f(t),pt=i(t,"H4",{});var ls=r(pt);De=s(ls,"Exponents"),ls.forEach(a),Yt=f(t),it=i(t,"P",{});var os=r(it);Re=s(os,"Note in all the expansions, the first variable counts down from $n$ to $0$, while the second variable counts up from $0$ to $n$."),os.forEach(a),zt=f(t),rt=i(t,"H3",{});var ps=r(rt);Ae=s(ps,"Does your binomial already have coefficients?"),ps.forEach(a),Xt=f(t),ut=i(t,"P",{});var is=r(ut);Ce=s(is,"If your binomial already has coefficients, simply put them with their terms like so:"),is.forEach(a),Jt=f(t),F=i(t,"P",{});var ra=r(F);Me=s(ra,`$$
`),Se=s(ra,Nn),Ge=s(ra,`
$$`),ra.forEach(a),Ot=f(t),ft=i(t,"P",{});var rs=r(ft);Ve=s(rs,"Using the commutative property, it can be rewritten as such:"),rs.forEach(a),Qt=f(t),N=i(t,"P",{});var ua=r(N);We=s(ua,`$$
`),Ze=s(ua,Dn),qe=s(ua,`
$$`),ua.forEach(a),gt=f(t),$t=i(t,"P",{});var us=r($t);Ke=s(us,"Let's try an example!"),us.forEach(a),ta=f(t),b=i(t,"P",{});var P=r(b);Ue=s(P,`$$
(3a+2b)^3 =
(1)(3a)^`),Ye=s(P,Rn),ze=s(P,"(2b)^0 + (3)(3a)^"),Xe=s(P,An),Je=s(P,`(2b) + (3)(3a)(2b)^2 + (1)(2b)^3 =
(1)(3^3)a^3 + (3)(3^2`),S=i(P,"EM",{});var fa=r(S);Oe=s(fa,"2)a^"),Qe=s(fa,Cn),ge=s(fa,"b + (3)(3"),fa.forEach(a),tn=s(P,`2^2)ab^2 + (1)(2^3)b^3 =
(1)(27)a^3 + (3)(18)a^`),an=s(P,Mn),en=s(P,`b + (3)(12)ab^2 + (1)(8)b^3 =
27a^3 + 54a^`),nn=s(P,Sn),sn=s(P,`b + 36ab^2 + 8b^3
$$`),P.forEach(a),aa=f(t),ct=i(t,"H1",{});var fs=r(ct);ln=s(fs,"Conclusion"),fs.forEach(a),ea=f(t),mt=i(t,"P",{});var $s=r(mt);on=s($s,`As you can see, it is fairly easy to use Pascal's Triagel as a lookup table for
binomial exapnsion's coefficients. I hope you have much more fun in your maths!`),$s.forEach(a),this.h()},h(){G($,"rel","stylesheet"),G($,"href","https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"),G(w,"class","notice"),G(k,"class","notice"),G(U,"class","language-undefined"),G(C,"class","center"),G(M,"class","language-cpp")},m(t,l){o(t,$,l),o(t,E,l),o(t,w,l),e(w,A),o(t,c,l),o(t,k,l),e(k,W),o(t,kt,l),o(t,Z,l),e(Z,$a),o(t,vt,l),o(t,q,l),e(q,ca),o(t,_t,l),o(t,K,l),e(K,ma),o(t,wt,l),o(t,C,l),e(C,U),U.innerHTML=ks,o(t,yt,l),o(t,Y,l),e(Y,ba),o(t,ht,l),o(t,M,l),M.innerHTML=vs,o(t,Pt,l),o(t,z,l),e(z,ka),o(t,Et,l),o(t,X,l),e(X,va),o(t,Tt,l),o(t,d,l),e(d,_a),e(d,wa),e(d,ya),o(t,xt,l),o(t,J,l),e(J,ha),o(t,dt,l),o(t,m,l),e(m,Pa),e(m,Ea),e(m,Ta),e(m,xa),e(m,da),e(m,Ia),e(m,Ha),e(m,ja),e(m,La),e(m,Ba),e(m,Fa),e(m,Na),e(m,Da),o(t,It,l),o(t,O,l),e(O,Ra),o(t,Ht,l),o(t,y,l),e(y,Aa),e(y,Ca),e(y,Ma),e(y,Sa),e(y,Ga),e(y,Va),e(y,Wa),o(t,jt,l),o(t,Q,l),e(Q,Za),o(t,Lt,l),o(t,v,l),e(v,qa),e(v,Ka),e(v,Ua),e(v,Ya),e(v,za),e(v,Xa),e(v,Ja),e(v,Oa),e(v,Qa),o(t,Bt,l),o(t,h,l),e(h,ga),e(h,te),e(h,ae),e(h,ee),e(h,ne),e(h,se),e(h,le),o(t,Ft,l),o(t,g,l),e(g,oe),o(t,Nt,l),o(t,tt,l),e(tt,pe),o(t,Dt,l),o(t,at,l),e(at,ie),o(t,Rt,l),o(t,et,l),e(et,re),o(t,At,l),o(t,nt,l),e(nt,ue),o(t,Ct,l),o(t,I,l),e(I,fe),e(I,$e),e(I,ce),o(t,Mt,l),o(t,H,l),e(H,me),e(H,be),e(H,ke),o(t,St,l),o(t,T,l),e(T,ve),e(T,_e),e(T,we),e(T,ye),e(T,he),o(t,Gt,l),o(t,j,l),e(j,Pe),e(j,Ee),e(j,Te),o(t,Vt,l),o(t,L,l),e(L,xe),e(L,de),e(L,Ie),o(t,Wt,l),o(t,st,l),e(st,He),o(t,Zt,l),o(t,B,l),e(B,je),e(B,Le),e(B,Be),o(t,qt,l),o(t,lt,l),e(lt,Fe),o(t,Kt,l),o(t,ot,l),e(ot,Ne),o(t,Ut,l),o(t,pt,l),e(pt,De),o(t,Yt,l),o(t,it,l),e(it,Re),o(t,zt,l),o(t,rt,l),e(rt,Ae),o(t,Xt,l),o(t,ut,l),e(ut,Ce),o(t,Jt,l),o(t,F,l),e(F,Me),e(F,Se),e(F,Ge),o(t,Ot,l),o(t,ft,l),e(ft,Ve),o(t,Qt,l),o(t,N,l),e(N,We),e(N,Ze),e(N,qe),o(t,gt,l),o(t,$t,l),e($t,Ke),o(t,ta,l),o(t,b,l),e(b,Ue),e(b,Ye),e(b,ze),e(b,Xe),e(b,Je),e(b,S),e(S,Oe),e(S,Qe),e(S,ge),e(b,tn),e(b,an),e(b,en),e(b,nn),e(b,sn),o(t,aa,l),o(t,ct,l),e(ct,ln),o(t,ea,l),o(t,mt,l),e(mt,on)},p:Ls,d(t){t&&a($),t&&a(E),t&&a(w),t&&a(c),t&&a(k),t&&a(kt),t&&a(Z),t&&a(vt),t&&a(q),t&&a(_t),t&&a(K),t&&a(wt),t&&a(C),t&&a(yt),t&&a(Y),t&&a(ht),t&&a(M),t&&a(Pt),t&&a(z),t&&a(Et),t&&a(X),t&&a(Tt),t&&a(d),t&&a(xt),t&&a(J),t&&a(dt),t&&a(m),t&&a(It),t&&a(O),t&&a(Ht),t&&a(y),t&&a(jt),t&&a(Q),t&&a(Lt),t&&a(v),t&&a(Bt),t&&a(h),t&&a(Ft),t&&a(g),t&&a(Nt),t&&a(tt),t&&a(Dt),t&&a(at),t&&a(Rt),t&&a(et),t&&a(At),t&&a(nt),t&&a(Ct),t&&a(I),t&&a(Mt),t&&a(H),t&&a(St),t&&a(T),t&&a(Gt),t&&a(j),t&&a(Vt),t&&a(L),t&&a(Wt),t&&a(st),t&&a(Zt),t&&a(B),t&&a(qt),t&&a(lt),t&&a(Kt),t&&a(ot),t&&a(Ut),t&&a(pt),t&&a(Yt),t&&a(it),t&&a(zt),t&&a(rt),t&&a(Xt),t&&a(ut),t&&a(Jt),t&&a(F),t&&a(Ot),t&&a(ft),t&&a(Qt),t&&a(N),t&&a(gt),t&&a($t),t&&a(ta),t&&a(b),t&&a(aa),t&&a(ct),t&&a(ea),t&&a(mt)}}}function Ns(V){let $,E;const w=[V[0],bs];let A={$$slots:{default:[Fs]},$$scope:{ctx:V}};for(let c=0;c<w.length;c+=1)A=pn(A,w[c]);return $=new Bs({props:A}),{c(){Es($.$$.fragment)},l(c){Ts($.$$.fragment,c)},m(c,k){xs($,c,k),E=!0},p(c,[k]){const W=k&1?ds(w,[k&1&&cs(c[0]),k&0&&cs(bs)]):{};k&2&&(W.$$scope={dirty:k,ctx:c}),$.$set(W)},i(c){E||(Is($.$$.fragment,c),E=!0)},o(c){Hs($.$$.fragment,c),E=!1},d(c){js($,c)}}}const bs={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Fun With Numbers! (revised)",description:"How to Find polynomial coefficients using Pascal's Triangle",excerpt:"I have always had a certain love for math and the neat things you can do with it.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["programming"],tags:["Math","Pascal's Triangle","Polynomials"],created_at:"2009-05-29T08:48:00.000Z",updated_at:"2016-09-14T07:56:00.000Z",lastmod:"2022-11-06T21:44:22.048Z"};function Ds(V,$,E){return V.$$set=w=>{E(0,$=pn(pn({},$),ms(w)))},$=ms($),[$]}class Cs extends ys{constructor($){super(),hs(this,$,Ds,Ns,Ps,{})}}export{Cs as default,bs as metadata};
