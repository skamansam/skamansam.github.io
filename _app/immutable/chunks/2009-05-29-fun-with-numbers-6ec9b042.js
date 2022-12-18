import{S as Rl,i as Cl,s as Sl,C as us,w as Zl,x as Al,y as Gl,H as Kl,Z as Hl,f as Vl,t as Wl,z as ql,K as jl,k as r,a as $,q as s,l as u,c as b,m as f,r as l,h as e,n as Y,b as p,G as t,B as Ul}from"./index-6a3f2268.js";import{P as Yl}from"./post-3c5a9cb3.js";function zl(z){let c,I,d,Z,_,P,X,Ra,J,Ht,Ca,O,jt,Sa,Q,Bt,Za,A,g,Fl=`<code class="language-undefined">1
1  1
1  2  1
1  3  3  1
1  4  6  4  1
1  5 10 10  5  1
1  6 15 20 15  6  1
...</code>`,Aa,aa,Ft,Ga,G,Ll=`<code class="language-cpp">vector<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> <span class="token function">pascal</span><span class="token punctuation">(</span>
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

<span class="token punctuation">&#125;</span></code>`,Ka,ta,Lt,Va,ea,Nt,Wa,F,Dt,fs="( x + 3 )^3 = x^3 + 9x^2 + 27x + 27 ",Rt,Ct,qa,na,St,Ua,m,Zt,$s="(a+b)^n = ",At,Gt,bs=n-1+"",Kt,Vt,cs=n-2+"",Wt,qt,ms=n-2+"",Ut,Yt,da,zt,Xt,xa,Jt,Ot,ks=n-1+"",Qt,gt,vs=n-1+"",ae,te,Ya,sa,ee,za,x,ne,_s=n-6+"",se,le,ws=n-6+"",oe,pe,ys=n-6+"",ie,re,Xa,la,ue,Ja,k,fe,hs=n-6+"",$e,be,Ta,ce,me,Ia,ke,ve,Ma,_e,we,Ha,ye,he,Es=n-6+"",Ee,Pe,Ps="( ( a^4 + 2a^3b+ a^2b^2 + 2a^3b + 4a^2b^2 + 2ab^3 + b^2a^2 + 2ab^3+ b^4) (a+b) )(a+b)^{n-6} =",de,xe,ds="( ( a^4 + 4a^3b + 6a2b^2 + 4ab^3+b^4) (a+b) )(a+b)^{n-6} = ",Te,Ie,Oa,v,Me,ja,He,je,Ba,Be,Fe,Fa,Le,Ne,La,De,Re,Na,Ce,Se,xs=n-6+"",Ze,Ae,Ts=n-6+"",Ge,Ke,Is=n-6+"",Ve,We,Qa,oa,qe,ga,pa,Ue,at,ia,Ye,tt,ra,ze,et,ua,Xe,nt,M,Je,fa,Ms=(i=0)+"",Oe,Qe,ge,an,Hs=n-i+"",tn,en,st,H,nn,js=(i=1)+"",sn,ln,Bs=n(n+1)(2n+1)+"",on,Fs=6+"",pn,rn,lt,j,un,$a,fn,$n,bn,cn,Ls=n-i+"",mn,kn,ot,L,vn,Ns="sum<em>{i=0}^{3}(P</em>{3i}a^{3-i}b^i) = ",_n,wn,pt,N,yn,Ds="(P<em>{(3,0)}a^{3-0}b^0) + (P</em>{(3,1)}a^{3-1}b^1) + (P<em>{(3,2)}a^{3-2}b^2) + (P</em>{(3,3)}a^{3-3}b^3) = ",hn,En,it,ba,Pn,rt,D,dn,Rs="((1)a^{3-0}b^0) + ((3)a^{3-1}b^1) + ((3)a^{3-2}b^2) + ((1)a^{3-3}b^3) ",xn,Tn,ut,ca,In,ft,ma,Mn,$t,ka,Hn,bt,va,jn,ct,_a,Bn,mt,wa,Fn,kt,B,Ln,R,Cs=(i=0)+"",Nn,Dn,Rn,Cn,Sn,Zn,Ss=n-i+"",An,Gn,vt,ya,Kn,_t,C,Vn,Zs="sum<em>{i=0}^{n}(P</em>{3i}(x^{n-i}y^{i})a^{n-i}b^i) ",Wn,qn,wt,ha,Un,yt,E,Yn,As=3+"",zn,Xn,Gs=2+"",Jn,On,K,Qn,Ks=2+"",gn,as,ts,Vs=2+"",es,ns,Ws=2+"",ss,ls,ht,Ea,os,Et,Pa,ps;return{c(){c=r("link"),I=$(),d=r("div"),Z=s("This post is heavy with math formualae, so may take a few seconds to format correctly."),_=$(),P=r("div"),X=s(`This post was originally written 2009/05/29, but was never finished. I just
  finished the revisions on 2016/09/14 and it is now complete.`),Ra=$(),J=r("p"),Ht=s("I have always had a certain love for math and the neat things you can do with it. Here is a bit of information and shortcuts I have picked up in a few of my math classes."),Ca=$(),O=r("h2"),jt=s("Pascal's Triangle"),Sa=$(),Q=r("p"),Bt=s("Pascal's Triangle is a pretty neat thing. It is very simple to construct and can be used to understand a lot of different ideas. It follows a very simple form: start with a '1' and add the two digits above  to get the next number. The first few line look like this:"),Za=$(),A=r("div"),g=r("pre"),Aa=$(),aa=r("p"),Ft=s("The line numbers start at 0, and continue on ad infinitum. In order to generate this triangle, programmatically, you would use something like this:"),Ga=$(),G=r("pre"),Ka=$(),ta=r("h2"),Lt=s("Binomial Expansion"),Va=$(),ea=r("p"),Nt=s("Remember binomials from algebra? They were the pair of numbers used to create or simplify polynomial expressions, something like:"),Wa=$(),F=r("p"),Dt=s(`$$
`),Rt=s(fs),Ct=s(`
$$`),qa=$(),na=r("p"),St=s("You can use Pascal's triangle to find the coefficients of the polynomials. Let's begin by solving for the generic  case:"),Ua=$(),m=r("p"),Zt=s(`$$
`),At=s($s),Gt=s(`
$$
$$
(a+b)^`),Kt=s(bs),Vt=s(`(a+b) =
$$
$$
(a+b)^`),Wt=s(cs),qt=s(`(a+b)^2 =
$$
$$
(a+b)^`),Ut=s(ms),Yt=s(`((a+b)(a+b)) =
$$
$$
( (a`),da=r("em"),zt=s("a) + (a"),Xt=s("b) + (b"),xa=r("em"),Jt=s("a) + (b"),Ot=s("b) )(a+b)^"),Qt=s(ks),gt=s(` =
$$
$$
(a^2+2ab+b^2)(a+b)^`),ae=s(vs),te=s(` =
$$`),Ya=$(),sa=r("p"),ee=s(`See the coefficients so far, with $n = 2$ ? They are $[1 2 1]$, which corresponds
to the second row in Pascal's triangle. But this could be a fluke, right, so
let's jump ahead to $n = 5$ to see if that works as well.`),za=$(),x=r("p"),ne=s(`$$
(a+b)^n =
$$
$$
(a+b)^`),se=s(_s),le=s(`(a+b)^5 =
$$
$$
(a+b)^`),oe=s(ws),pe=s(`( (a+b) (a+b) (a+b) (a+b) (a+b) ) =
$$
$$
(a+b)^`),ie=s(ys),re=s(`( ( (a+b)(a+b) )( (a+b)(a+b) ) (a+b) ) =
$$`),Xa=$(),la=r("p"),ue=s("[we know what $(a+b)^2$ is, so: ]"),Ja=$(),k=r("p"),fe=s(`$$
(( a^2+2ab+b^2 )( a^2+2ab+b^2 )(a+b) )(a+b)^`),$e=s(hs),be=s(` =
$$
$$
( ( (a^2`),Ta=r("em"),ce=s("a^2)+(a^2"),me=s("2ab) + (a^2"),Ia=r("em"),ke=s("b^2) + ( 2ab"),ve=s("a^2) + (2ab"),Ma=r("em"),_e=s("2ab) + (2ab"),we=s("b^2) + (b^2"),Ha=r("em"),ye=s("a^2)+(b^2"),he=s("2ab) + (b^2*b^2) ) (a+b) )(a+b)^"),Ee=s(Es),Pe=s(` =
$$
$$
`),de=s(Ps),xe=s(`
$$
$$
`),Te=s(ds),Ie=s(`
$$`),Oa=$(),v=r("p"),Me=s(`[note: notice that the coefficients of $(a+b)^4$ are (1 4 6 4 1) ! ]
$$
( ( a^4`),ja=r("em"),He=s("a + a^4"),je=s("b + 4a^3b"),Ba=r("em"),Be=s("a + 4a^3b"),Fe=s("b + 6a^2b^2"),Fa=r("em"),Le=s("a + 6a^2b^2"),Ne=s("b + 4ab^3"),La=r("em"),De=s("a + 4ab^3"),Re=s("b + b^4"),Na=r("em"),Ce=s("a+b^4"),Se=s("b))(a+b)^"),Ze=s(xs),Ae=s(` =
$$
$$
( ( a^5 + a^4b + 4a^4b + 4a^3b^2 + 6a^3b^2 + 6a^2b^3 + 4a^2b^3 + 4ab^4 + ab^4+b^5))(a+b)^`),Ge=s(Ts),Ke=s(`=
$$
$$
( ( a^5 +5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5)(a+b)^`),Ve=s(Is),We=s(`
$$`),Qa=$(),oa=r("p"),qe=s("There it is! The coefficients correspond to the rows on Pascal's Triangle!"),ga=$(),pa=r("h3"),Ue=s("Features"),at=$(),ia=r("p"),Ye=s('Now, to make things a little simpler, I will note some interesting "features" about what we just did.'),tt=$(),ra=r("h4"),ze=s("General Formula for Binomial Expansion"),et=$(),ua=r("p"),Xe=s("The general formula for binomial expansion is:"),nt=$(),M=r("p"),Je=s(`$$
(a+b)^n = \\sum`),fa=r("em"),Oe=s(Ms),Qe=s("^n (P"),ge=s(ni),an=s("a^"),tn=s(Hs),en=s(`b^i)
$$`),st=$(),H=r("p"),nn=s(`$$
\\sum\\limits_`),sn=s(js),ln=s("^n i^2 = \\frac"),on=s(Bs),pn=s(Fs),rn=s(`
$$`),lt=$(),j=r("p"),un=s("Where $P"),$a=r("em"),fn=s(ni),$n=s(`$ is the coefficient at row $n$ (starting from 0) and column $i$ in
Pascal's Triangle. The formula means to add from $i=0$ to $n$ all the terms
$(P`),bn=s(ni),cn=s("a^"),mn=s(Ls),kn=s(`b^i)$ , replacing $i$ with the number you are at. For example,
supposing $i=3$, you would get:`),ot=$(),L=r("p"),vn=s(`$$
`),_n=s(Ns),wn=s(`
$$`),pt=$(),N=r("p"),yn=s(`$$
`),hn=s(Ds),En=s(`
$$`),it=$(),ba=r("p"),Pn=s("since $P_3 = [1 3 3 1]$ , we finally get:"),rt=$(),D=r("p"),dn=s(`$$
`),xn=s(Rs),Tn=s(`
$$`),ut=$(),ca=r("p"),In=s("cleaning up a bit :"),ft=$(),ma=r("p"),Mn=s(`$$
a^3 + 3a^2b + 3ab^2 + b^3
$$`),$t=$(),ka=r("h4"),Hn=s("Exponents"),bt=$(),va=r("p"),jn=s("Note in all the expansions, the first variable counts down from $n$ to $0$, while the second variable counts up from $0$ to $n$."),ct=$(),_a=r("h3"),Bn=s("Does your binomial already have coefficients?"),mt=$(),wa=r("p"),Fn=s("If your binomial already has coefficients, simply put them with their terms like so:"),kt=$(),B=r("p"),Ln=s(`$$
\\sum`),R=r("em"),Nn=s(Cs),Dn=s("^"),Rn=s(n),Cn=s("(P"),Sn=s(ni),Zn=s("(xa)^"),An=s(Ss),Gn=s(`(yb)^i)
$$`),vt=$(),ya=r("p"),Kn=s("Using the commutative property, it can be rewritten as such:"),_t=$(),C=r("p"),Vn=s(`$$
`),Wn=s(Zs),qn=s(`
$$`),wt=$(),ha=r("p"),Un=s("Let's try an example!"),yt=$(),E=r("p"),Yn=s(`$$
(3a+2b)^3 =
(1)(3a)^`),zn=s(As),Xn=s("(2b)^0 + (3)(3a)^"),Jn=s(Gs),On=s(`(2b) + (3)(3a)(2b)^2 + (1)(2b)^3 =
(1)(3^3)a^3 + (3)(3^2`),K=r("em"),Qn=s("2)a^"),gn=s(Ks),as=s("b + (3)(3"),ts=s(`2^2)ab^2 + (1)(2^3)b^3 =
(1)(27)a^3 + (3)(18)a^`),es=s(Vs),ns=s(`b + (3)(12)ab^2 + (1)(8)b^3 =
27a^3 + 54a^`),ss=s(Ws),ls=s(`b + 36ab^2 + 8b^3
$$`),ht=$(),Ea=r("h1"),os=s("Conclusion"),Et=$(),Pa=r("p"),ps=s(`As you can see, it is fairly easy to use Pascal's Triagel as a lookup table for
binomial exapnsion's coefficients. I hope you have much more fun in your maths!`),this.h()},l(a){c=u(a,"LINK",{rel:!0,href:!0}),I=b(a),d=u(a,"DIV",{class:!0});var o=f(d);Z=l(o,"This post is heavy with math formualae, so may take a few seconds to format correctly."),o.forEach(e),_=b(a),P=u(a,"DIV",{class:!0});var qs=f(P);X=l(qs,`This post was originally written 2009/05/29, but was never finished. I just
  finished the revisions on 2016/09/14 and it is now complete.`),qs.forEach(e),Ra=b(a),J=u(a,"P",{});var Us=f(J);Ht=l(Us,"I have always had a certain love for math and the neat things you can do with it. Here is a bit of information and shortcuts I have picked up in a few of my math classes."),Us.forEach(e),Ca=b(a),O=u(a,"H2",{});var Ys=f(O);jt=l(Ys,"Pascal's Triangle"),Ys.forEach(e),Sa=b(a),Q=u(a,"P",{});var zs=f(Q);Bt=l(zs,"Pascal's Triangle is a pretty neat thing. It is very simple to construct and can be used to understand a lot of different ideas. It follows a very simple form: start with a '1' and add the two digits above  to get the next number. The first few line look like this:"),zs.forEach(e),Za=b(a),A=u(a,"DIV",{class:!0});var Xs=f(A);g=u(Xs,"PRE",{class:!0});var Nl=f(g);Nl.forEach(e),Xs.forEach(e),Aa=b(a),aa=u(a,"P",{});var Js=f(aa);Ft=l(Js,"The line numbers start at 0, and continue on ad infinitum. In order to generate this triangle, programmatically, you would use something like this:"),Js.forEach(e),Ga=b(a),G=u(a,"PRE",{class:!0});var Dl=f(G);Dl.forEach(e),Ka=b(a),ta=u(a,"H2",{});var Os=f(ta);Lt=l(Os,"Binomial Expansion"),Os.forEach(e),Va=b(a),ea=u(a,"P",{});var Qs=f(ea);Nt=l(Qs,"Remember binomials from algebra? They were the pair of numbers used to create or simplify polynomial expressions, something like:"),Qs.forEach(e),Wa=b(a),F=u(a,"P",{});var Pt=f(F);Dt=l(Pt,`$$
`),Rt=l(Pt,fs),Ct=l(Pt,`
$$`),Pt.forEach(e),qa=b(a),na=u(a,"P",{});var gs=f(na);St=l(gs,"You can use Pascal's triangle to find the coefficients of the polynomials. Let's begin by solving for the generic  case:"),gs.forEach(e),Ua=b(a),m=u(a,"P",{});var w=f(m);Zt=l(w,`$$
`),At=l(w,$s),Gt=l(w,`
$$
$$
(a+b)^`),Kt=l(w,bs),Vt=l(w,`(a+b) =
$$
$$
(a+b)^`),Wt=l(w,cs),qt=l(w,`(a+b)^2 =
$$
$$
(a+b)^`),Ut=l(w,ms),Yt=l(w,`((a+b)(a+b)) =
$$
$$
( (a`),da=u(w,"EM",{});var al=f(da);zt=l(al,"a) + (a"),al.forEach(e),Xt=l(w,"b) + (b"),xa=u(w,"EM",{});var tl=f(xa);Jt=l(tl,"a) + (b"),tl.forEach(e),Ot=l(w,"b) )(a+b)^"),Qt=l(w,ks),gt=l(w,` =
$$
$$
(a^2+2ab+b^2)(a+b)^`),ae=l(w,vs),te=l(w,` =
$$`),w.forEach(e),Ya=b(a),sa=u(a,"P",{});var el=f(sa);ee=l(el,`See the coefficients so far, with $n = 2$ ? They are $[1 2 1]$, which corresponds
to the second row in Pascal's triangle. But this could be a fluke, right, so
let's jump ahead to $n = 5$ to see if that works as well.`),el.forEach(e),za=b(a),x=u(a,"P",{});var S=f(x);ne=l(S,`$$
(a+b)^n =
$$
$$
(a+b)^`),se=l(S,_s),le=l(S,`(a+b)^5 =
$$
$$
(a+b)^`),oe=l(S,ws),pe=l(S,`( (a+b) (a+b) (a+b) (a+b) (a+b) ) =
$$
$$
(a+b)^`),ie=l(S,ys),re=l(S,`( ( (a+b)(a+b) )( (a+b)(a+b) ) (a+b) ) =
$$`),S.forEach(e),Xa=b(a),la=u(a,"P",{});var nl=f(la);ue=l(nl,"[we know what $(a+b)^2$ is, so: ]"),nl.forEach(e),Ja=b(a),k=u(a,"P",{});var y=f(k);fe=l(y,`$$
(( a^2+2ab+b^2 )( a^2+2ab+b^2 )(a+b) )(a+b)^`),$e=l(y,hs),be=l(y,` =
$$
$$
( ( (a^2`),Ta=u(y,"EM",{});var sl=f(Ta);ce=l(sl,"a^2)+(a^2"),sl.forEach(e),me=l(y,"2ab) + (a^2"),Ia=u(y,"EM",{});var ll=f(Ia);ke=l(ll,"b^2) + ( 2ab"),ll.forEach(e),ve=l(y,"a^2) + (2ab"),Ma=u(y,"EM",{});var ol=f(Ma);_e=l(ol,"2ab) + (2ab"),ol.forEach(e),we=l(y,"b^2) + (b^2"),Ha=u(y,"EM",{});var pl=f(Ha);ye=l(pl,"a^2)+(b^2"),pl.forEach(e),he=l(y,"2ab) + (b^2*b^2) ) (a+b) )(a+b)^"),Ee=l(y,Es),Pe=l(y,` =
$$
$$
`),de=l(y,Ps),xe=l(y,`
$$
$$
`),Te=l(y,ds),Ie=l(y,`
$$`),y.forEach(e),Oa=b(a),v=u(a,"P",{});var h=f(v);Me=l(h,`[note: notice that the coefficients of $(a+b)^4$ are (1 4 6 4 1) ! ]
$$
( ( a^4`),ja=u(h,"EM",{});var il=f(ja);He=l(il,"a + a^4"),il.forEach(e),je=l(h,"b + 4a^3b"),Ba=u(h,"EM",{});var rl=f(Ba);Be=l(rl,"a + 4a^3b"),rl.forEach(e),Fe=l(h,"b + 6a^2b^2"),Fa=u(h,"EM",{});var ul=f(Fa);Le=l(ul,"a + 6a^2b^2"),ul.forEach(e),Ne=l(h,"b + 4ab^3"),La=u(h,"EM",{});var fl=f(La);De=l(fl,"a + 4ab^3"),fl.forEach(e),Re=l(h,"b + b^4"),Na=u(h,"EM",{});var $l=f(Na);Ce=l($l,"a+b^4"),$l.forEach(e),Se=l(h,"b))(a+b)^"),Ze=l(h,xs),Ae=l(h,` =
$$
$$
( ( a^5 + a^4b + 4a^4b + 4a^3b^2 + 6a^3b^2 + 6a^2b^3 + 4a^2b^3 + 4ab^4 + ab^4+b^5))(a+b)^`),Ge=l(h,Ts),Ke=l(h,`=
$$
$$
( ( a^5 +5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5)(a+b)^`),Ve=l(h,Is),We=l(h,`
$$`),h.forEach(e),Qa=b(a),oa=u(a,"P",{});var bl=f(oa);qe=l(bl,"There it is! The coefficients correspond to the rows on Pascal's Triangle!"),bl.forEach(e),ga=b(a),pa=u(a,"H3",{});var cl=f(pa);Ue=l(cl,"Features"),cl.forEach(e),at=b(a),ia=u(a,"P",{});var ml=f(ia);Ye=l(ml,'Now, to make things a little simpler, I will note some interesting "features" about what we just did.'),ml.forEach(e),tt=b(a),ra=u(a,"H4",{});var kl=f(ra);ze=l(kl,"General Formula for Binomial Expansion"),kl.forEach(e),et=b(a),ua=u(a,"P",{});var vl=f(ua);Xe=l(vl,"The general formula for binomial expansion is:"),vl.forEach(e),nt=b(a),M=u(a,"P",{});var V=f(M);Je=l(V,`$$
(a+b)^n = \\sum`),fa=u(V,"EM",{});var is=f(fa);Oe=l(is,Ms),Qe=l(is,"^n (P"),is.forEach(e),ge=l(V,ni),an=l(V,"a^"),tn=l(V,Hs),en=l(V,`b^i)
$$`),V.forEach(e),st=b(a),H=u(a,"P",{});var W=f(H);nn=l(W,`$$
\\sum\\limits_`),sn=l(W,js),ln=l(W,"^n i^2 = \\frac"),on=l(W,Bs),pn=l(W,Fs),rn=l(W,`
$$`),W.forEach(e),lt=b(a),j=u(a,"P",{});var q=f(j);un=l(q,"Where $P"),$a=u(q,"EM",{});var rs=f($a);fn=l(rs,ni),$n=l(rs,`$ is the coefficient at row $n$ (starting from 0) and column $i$ in
Pascal's Triangle. The formula means to add from $i=0$ to $n$ all the terms
$(P`),rs.forEach(e),bn=l(q,ni),cn=l(q,"a^"),mn=l(q,Ls),kn=l(q,`b^i)$ , replacing $i$ with the number you are at. For example,
supposing $i=3$, you would get:`),q.forEach(e),ot=b(a),L=u(a,"P",{});var dt=f(L);vn=l(dt,`$$
`),_n=l(dt,Ns),wn=l(dt,`
$$`),dt.forEach(e),pt=b(a),N=u(a,"P",{});var xt=f(N);yn=l(xt,`$$
`),hn=l(xt,Ds),En=l(xt,`
$$`),xt.forEach(e),it=b(a),ba=u(a,"P",{});var _l=f(ba);Pn=l(_l,"since $P_3 = [1 3 3 1]$ , we finally get:"),_l.forEach(e),rt=b(a),D=u(a,"P",{});var Tt=f(D);dn=l(Tt,`$$
`),xn=l(Tt,Rs),Tn=l(Tt,`
$$`),Tt.forEach(e),ut=b(a),ca=u(a,"P",{});var wl=f(ca);In=l(wl,"cleaning up a bit :"),wl.forEach(e),ft=b(a),ma=u(a,"P",{});var yl=f(ma);Mn=l(yl,`$$
a^3 + 3a^2b + 3ab^2 + b^3
$$`),yl.forEach(e),$t=b(a),ka=u(a,"H4",{});var hl=f(ka);Hn=l(hl,"Exponents"),hl.forEach(e),bt=b(a),va=u(a,"P",{});var El=f(va);jn=l(El,"Note in all the expansions, the first variable counts down from $n$ to $0$, while the second variable counts up from $0$ to $n$."),El.forEach(e),ct=b(a),_a=u(a,"H3",{});var Pl=f(_a);Bn=l(Pl,"Does your binomial already have coefficients?"),Pl.forEach(e),mt=b(a),wa=u(a,"P",{});var dl=f(wa);Fn=l(dl,"If your binomial already has coefficients, simply put them with their terms like so:"),dl.forEach(e),kt=b(a),B=u(a,"P",{});var U=f(B);Ln=l(U,`$$
\\sum`),R=u(U,"EM",{});var Da=f(R);Nn=l(Da,Cs),Dn=l(Da,"^"),Rn=l(Da,n),Cn=l(Da,"(P"),Da.forEach(e),Sn=l(U,ni),Zn=l(U,"(xa)^"),An=l(U,Ss),Gn=l(U,`(yb)^i)
$$`),U.forEach(e),vt=b(a),ya=u(a,"P",{});var xl=f(ya);Kn=l(xl,"Using the commutative property, it can be rewritten as such:"),xl.forEach(e),_t=b(a),C=u(a,"P",{});var It=f(C);Vn=l(It,`$$
`),Wn=l(It,Zs),qn=l(It,`
$$`),It.forEach(e),wt=b(a),ha=u(a,"P",{});var Tl=f(ha);Un=l(Tl,"Let's try an example!"),Tl.forEach(e),yt=b(a),E=u(a,"P",{});var T=f(E);Yn=l(T,`$$
(3a+2b)^3 =
(1)(3a)^`),zn=l(T,As),Xn=l(T,"(2b)^0 + (3)(3a)^"),Jn=l(T,Gs),On=l(T,`(2b) + (3)(3a)(2b)^2 + (1)(2b)^3 =
(1)(3^3)a^3 + (3)(3^2`),K=u(T,"EM",{});var Mt=f(K);Qn=l(Mt,"2)a^"),gn=l(Mt,Ks),as=l(Mt,"b + (3)(3"),Mt.forEach(e),ts=l(T,`2^2)ab^2 + (1)(2^3)b^3 =
(1)(27)a^3 + (3)(18)a^`),es=l(T,Vs),ns=l(T,`b + (3)(12)ab^2 + (1)(8)b^3 =
27a^3 + 54a^`),ss=l(T,Ws),ls=l(T,`b + 36ab^2 + 8b^3
$$`),T.forEach(e),ht=b(a),Ea=u(a,"H1",{});var Il=f(Ea);os=l(Il,"Conclusion"),Il.forEach(e),Et=b(a),Pa=u(a,"P",{});var Ml=f(Pa);ps=l(Ml,`As you can see, it is fairly easy to use Pascal's Triagel as a lookup table for
binomial exapnsion's coefficients. I hope you have much more fun in your maths!`),Ml.forEach(e),this.h()},h(){Y(c,"rel","stylesheet"),Y(c,"href","https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"),Y(d,"class","notice"),Y(P,"class","notice"),Y(g,"class","language-undefined"),Y(A,"class","center"),Y(G,"class","language-cpp")},m(a,o){p(a,c,o),p(a,I,o),p(a,d,o),t(d,Z),p(a,_,o),p(a,P,o),t(P,X),p(a,Ra,o),p(a,J,o),t(J,Ht),p(a,Ca,o),p(a,O,o),t(O,jt),p(a,Sa,o),p(a,Q,o),t(Q,Bt),p(a,Za,o),p(a,A,o),t(A,g),g.innerHTML=Fl,p(a,Aa,o),p(a,aa,o),t(aa,Ft),p(a,Ga,o),p(a,G,o),G.innerHTML=Ll,p(a,Ka,o),p(a,ta,o),t(ta,Lt),p(a,Va,o),p(a,ea,o),t(ea,Nt),p(a,Wa,o),p(a,F,o),t(F,Dt),t(F,Rt),t(F,Ct),p(a,qa,o),p(a,na,o),t(na,St),p(a,Ua,o),p(a,m,o),t(m,Zt),t(m,At),t(m,Gt),t(m,Kt),t(m,Vt),t(m,Wt),t(m,qt),t(m,Ut),t(m,Yt),t(m,da),t(da,zt),t(m,Xt),t(m,xa),t(xa,Jt),t(m,Ot),t(m,Qt),t(m,gt),t(m,ae),t(m,te),p(a,Ya,o),p(a,sa,o),t(sa,ee),p(a,za,o),p(a,x,o),t(x,ne),t(x,se),t(x,le),t(x,oe),t(x,pe),t(x,ie),t(x,re),p(a,Xa,o),p(a,la,o),t(la,ue),p(a,Ja,o),p(a,k,o),t(k,fe),t(k,$e),t(k,be),t(k,Ta),t(Ta,ce),t(k,me),t(k,Ia),t(Ia,ke),t(k,ve),t(k,Ma),t(Ma,_e),t(k,we),t(k,Ha),t(Ha,ye),t(k,he),t(k,Ee),t(k,Pe),t(k,de),t(k,xe),t(k,Te),t(k,Ie),p(a,Oa,o),p(a,v,o),t(v,Me),t(v,ja),t(ja,He),t(v,je),t(v,Ba),t(Ba,Be),t(v,Fe),t(v,Fa),t(Fa,Le),t(v,Ne),t(v,La),t(La,De),t(v,Re),t(v,Na),t(Na,Ce),t(v,Se),t(v,Ze),t(v,Ae),t(v,Ge),t(v,Ke),t(v,Ve),t(v,We),p(a,Qa,o),p(a,oa,o),t(oa,qe),p(a,ga,o),p(a,pa,o),t(pa,Ue),p(a,at,o),p(a,ia,o),t(ia,Ye),p(a,tt,o),p(a,ra,o),t(ra,ze),p(a,et,o),p(a,ua,o),t(ua,Xe),p(a,nt,o),p(a,M,o),t(M,Je),t(M,fa),t(fa,Oe),t(fa,Qe),t(M,ge),t(M,an),t(M,tn),t(M,en),p(a,st,o),p(a,H,o),t(H,nn),t(H,sn),t(H,ln),t(H,on),t(H,pn),t(H,rn),p(a,lt,o),p(a,j,o),t(j,un),t(j,$a),t($a,fn),t($a,$n),t(j,bn),t(j,cn),t(j,mn),t(j,kn),p(a,ot,o),p(a,L,o),t(L,vn),t(L,_n),t(L,wn),p(a,pt,o),p(a,N,o),t(N,yn),t(N,hn),t(N,En),p(a,it,o),p(a,ba,o),t(ba,Pn),p(a,rt,o),p(a,D,o),t(D,dn),t(D,xn),t(D,Tn),p(a,ut,o),p(a,ca,o),t(ca,In),p(a,ft,o),p(a,ma,o),t(ma,Mn),p(a,$t,o),p(a,ka,o),t(ka,Hn),p(a,bt,o),p(a,va,o),t(va,jn),p(a,ct,o),p(a,_a,o),t(_a,Bn),p(a,mt,o),p(a,wa,o),t(wa,Fn),p(a,kt,o),p(a,B,o),t(B,Ln),t(B,R),t(R,Nn),t(R,Dn),t(R,Rn),t(R,Cn),t(B,Sn),t(B,Zn),t(B,An),t(B,Gn),p(a,vt,o),p(a,ya,o),t(ya,Kn),p(a,_t,o),p(a,C,o),t(C,Vn),t(C,Wn),t(C,qn),p(a,wt,o),p(a,ha,o),t(ha,Un),p(a,yt,o),p(a,E,o),t(E,Yn),t(E,zn),t(E,Xn),t(E,Jn),t(E,On),t(E,K),t(K,Qn),t(K,gn),t(K,as),t(E,ts),t(E,es),t(E,ns),t(E,ss),t(E,ls),p(a,ht,o),p(a,Ea,o),t(Ea,os),p(a,Et,o),p(a,Pa,o),t(Pa,ps)},p:Ul,d(a){a&&e(c),a&&e(I),a&&e(d),a&&e(_),a&&e(P),a&&e(Ra),a&&e(J),a&&e(Ca),a&&e(O),a&&e(Sa),a&&e(Q),a&&e(Za),a&&e(A),a&&e(Aa),a&&e(aa),a&&e(Ga),a&&e(G),a&&e(Ka),a&&e(ta),a&&e(Va),a&&e(ea),a&&e(Wa),a&&e(F),a&&e(qa),a&&e(na),a&&e(Ua),a&&e(m),a&&e(Ya),a&&e(sa),a&&e(za),a&&e(x),a&&e(Xa),a&&e(la),a&&e(Ja),a&&e(k),a&&e(Oa),a&&e(v),a&&e(Qa),a&&e(oa),a&&e(ga),a&&e(pa),a&&e(at),a&&e(ia),a&&e(tt),a&&e(ra),a&&e(et),a&&e(ua),a&&e(nt),a&&e(M),a&&e(st),a&&e(H),a&&e(lt),a&&e(j),a&&e(ot),a&&e(L),a&&e(pt),a&&e(N),a&&e(it),a&&e(ba),a&&e(rt),a&&e(D),a&&e(ut),a&&e(ca),a&&e(ft),a&&e(ma),a&&e($t),a&&e(ka),a&&e(bt),a&&e(va),a&&e(ct),a&&e(_a),a&&e(mt),a&&e(wa),a&&e(kt),a&&e(B),a&&e(vt),a&&e(ya),a&&e(_t),a&&e(C),a&&e(wt),a&&e(ha),a&&e(yt),a&&e(E),a&&e(ht),a&&e(Ea),a&&e(Et),a&&e(Pa)}}}function Xl(z){let c,I;const d=[z[0],Bl];let Z={$$slots:{default:[zl]},$$scope:{ctx:z}};for(let _=0;_<d.length;_+=1)Z=us(Z,d[_]);return c=new Yl({props:Z}),{c(){Zl(c.$$.fragment)},l(_){Al(c.$$.fragment,_)},m(_,P){Gl(c,_,P),I=!0},p(_,[P]){const X=P&1?Kl(d,[P&1&&Hl(_[0]),P&0&&Hl(Bl)]):{};P&2&&(X.$$scope={dirty:P,ctx:_}),c.$set(X)},i(_){I||(Vl(c.$$.fragment,_),I=!0)},o(_){Wl(c.$$.fragment,_),I=!1},d(_){ql(c,_)}}}const Bl={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Fun With Numbers! (revised)",description:"How to Find polynomial coefficients using Pascal's Triangle",excerpt:"I have always had a certain love for math and the neat things you can do with it.",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["programming"],tags:["Math","Pascal's Triangle","Polynomials"],created_at:"2009-05-29T08:48:00.000Z",updated_at:"2016-09-14T07:56:00.000Z",lastmod:"2022-11-06T21:44:22.048Z"};function Jl(z,c,I){return z.$$set=d=>{I(0,c=us(us({},c),jl(d)))},c=jl(c),[c]}class gl extends Rl{constructor(c){super(),Cl(this,c,Jl,Xl,Sl,{})}}export{gl as default,Bl as metadata};
