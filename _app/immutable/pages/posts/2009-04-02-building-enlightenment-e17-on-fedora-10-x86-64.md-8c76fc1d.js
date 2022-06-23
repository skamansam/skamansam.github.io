import{S as Is,i as Ts,s as Ps,D as jl,x as Os,y as Ds,z as Hs,A as As,B as us,r as Cs,p as js,C as Ls,V as ps,e as l,t as a,k as d,c as i,a as s,h as n,d as t,m as h,b as p,g as f,F as e,n as Ss}from"../../chunks/index-f095e7d9.js";import{P as Fs}from"../../chunks/post-34b2f3fb.js";function Rs(ee){let b,I,T,_,v,w,te,so,Mt,M,ro,Nt,P,ho,N,co,uo,B,po,fo,Bt,U,mo,Ut,oe,bo,Gt,O,j,qe,go,vo,Me,yo,Eo,wo,ae,Ne,_o,ko,xo,ne,Be,Io,To,Wt,L,Po,Ue,Oo,Yt,D,Ge,Do,Ho,le,ms=`<code class="language-bash"><span class="token builtin class-name">cd</span> ~/Download/e17/ememoa/
./configure --libdir<span class="token operator">=</span>/usr/lib64 --prefix<span class="token operator">=</span>/usr --enable-pthread --enable-use64
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></code>`,Ao,S,Co,We,jo,Lo,Ye,So,$t,G,Fo,Kt,k,H,Ro,$e,Xo,qo,Ke,Mo,No,Bo,ie,bs=`<code class="language-bash"><span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/e/trunk/imlib2
./configure --prefix<span class="token operator">=</span>/usr --libdir<span class="token operator">=</span>/usr/lib64</code>`,Uo,A,Go,ze,Wo,Yo,Ve,$o,Ko,zo,se,gs=`<code class="language-bash"><span class="token function">make</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span></code>`,zt,F,Vo,Qe,Qo,Vt,re,Je,Jo,Qt,W,Zo,Jt,r,Ze,ea,ta,de,oa,aa,et,na,la,he,ia,sa,tt,ra,da,ce,ha,ca,ot,ua,pa,Y,fa,at,ma,ba,x,ga,nt,va,ya,lt,Ea,wa,it,_a,ka,xa,ue,Ia,Ta,st,Pa,Oa,pe,Da,Ha,rt,Aa,Ca,$,ja,dt,La,Sa,C,Fa,ht,Ra,Xa,ct,qa,Ma,Na,K,Ba,ut,Ua,Ga,pt,Wa,Ya,fe,$a,Ka,ft,za,Va,me,Qa,Ja,mt,Za,en,be,tn,on,bt,an,nn,z,ln,gt,sn,rn,vt,dn,hn,ge,cn,un,yt,pn,fn,ve,mn,bn,Et,gn,vn,ye,yn,En,wt,wn,_n,Ee,kn,xn,_t,In,Tn,we,Pn,On,kt,Dn,Hn,_e,An,Cn,xt,jn,Ln,ke,Sn,Fn,It,Rn,Zt,V,Xn,eo,m,Tt,qn,Mn,xe,Nn,Bn,Pt,Un,Gn,Ie,Wn,Yn,Ot,$n,Kn,Te,zn,Vn,Q,Qn,Dt,Jn,Zn,el,Pe,vs=`<code class="language-bash">failsafe<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.code here<span class="token punctuation">..</span><span class="token punctuation">..</span>
gnome<span class="token operator">|</span>gnome-session<span class="token punctuation">)</span>
<span class="token punctuation">..</span>.code here<span class="token punctuation">..</span><span class="token punctuation">..</span></code>`,tl,Ht,ol,al,Oe,ys=`<code class="language-bash">enlightenment<span class="token punctuation">)</span>
<span class="token builtin class-name">exec</span> <span class="token variable">$SSH_AGENT</span> /bin/sh -c <span class="token string">"exec -l <span class="token environment constant">$SHELL</span> -c <span class="token entity" title="&quot;">"</span>enlightenment<span class="token entity" title="&quot;">"</span>"</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span></code>`,nl,R,ll,At,il,sl,Ct,rl,to,J,dl,oo,De,hl,ao,Z,cl,no,y,jt,ul,pl,He,fl,ml,Lt,bl,gl,Ae,vl,yl,St,El,wl,Ce,_l,kl,Ft,xl;return{c(){b=l("p"),I=a(`DISCLAIMER: The following did NOT work correctly for me. The applications worked
correctly, but the desktop fails. When I find out what went wrong, I will modify
this post to suit.`),T=d(),_=l("p"),v=a(`Today i have begun to build and install Enlightenment e17 on my Fedora 10 x86_64
laptop. I have Googled for a few sites to help me get started, only to discover
their directions are very lacking. VERY lacking. So to compensate, i am writing
this article on the things you need to get started with Enlightenment e17. If
you would like to try out e17, you can use yum to install some of the base
componenets, but remember to erase them with `),w=l("code"),te=a("yum -e enlightenment"),so=a(` before you
start building e17 or some severe nastiness could occur. The packages I have
installed for my evaluation are: bitmap_fonts, e_dbus, edje, efreet, embryo,
enlightenment, eterm, and libast. The reason I didn\u2019t just use the yum packages
is that I know e17 has a lot of dependencies and a lot of hidden features. I
like to have a lot of features! Read on to find out about some of those
features.`),Mt=d(),M=l("h2"),ro=a("Step 1: Preparations"),Nt=d(),P=l("p"),ho=a(`You are going to need a few dependencies for this. Some you can get via yum, and others you need to get from a version control repository. Here are the command you need to execute:
sudo yum install libjpeg-devel libtiff-devel libpng-devel giflib-devel freetype-devel libXext-devel libid3tag-devel subversion imlib2-devel libxcb libxcb-devel libxcb-util libxcb-util libxcb-util-devel glew-devel libXrender-devel directfb-devel xine-lib-devel gstreamer-devel gstreamer-plugins-base-devel vlc-devel
mkdir ~/Download/e17
cd ~/Download/e17
svn co `),N=l("a"),co=a("http://svn.enlightenment.org/svn/e"),uo=a(`
svn co `),B=l("a"),po=a("http://ememoa.googlecode.com/svn/trunk/"),fo=a(" ememoa-read-only"),Bt=d(),U=l("h2"),mo=a("Step 2: The long drive home"),Ut=d(),oe=l("p"),bo=a("Ok. Now that we have our tools, we can start the dirty work: building e17. I am listing this in the order you should build. Just follow along and shout, \u201CHoo-Raaahhhh!!!\u201D at the appropriate times. For brevity, I will be listing the package names in bold font, then the directory in which it can be found in brackets. Then I will give a hort description of the file, and any options to be passed to ./configure. You should run three commands with each step:"),Gt=d(),O=l("ol"),j=l("li"),qe=l("code"),go=a("cd"),vo=a(" to change into that directory. All directory names will be relative to "),Me=l("sub"),yo=a("/Download/e17/e/trunk/, except the ememoa package, which should be "),Eo=a("/Download/e17/ememoa-read-only/"),wo=d(),ae=l("li"),Ne=l("code"),_o=a("./configure --libdir=/usr/lib64 --prefix=/usr"),ko=a(" with the config options appended to the end, seperated by spaces. See the first two examples to see what I mean. (NOTE: If you are missing the ./configure script for any of the following steps, run ./autogen.sh first.)"),xo=d(),ne=l("li"),Be=l("code"),Io=a("<code>gmake && sudo gmake install</code>"),To=a(" This command builds the package, prompts for your password, if you are in the sudoers file, and installs it. This step may take some time before prompting for your password."),Wt=d(),L=l("h3"),Po=a("Ememoa [ ememoa-read-only/ ]  "),Ue=l("code"),Oo=a("--enable-pthread --enable-use64"),Yt=d(),D=l("blockquote"),Ge=l("p"),Do=a(`We are going to build ememoa first. From the ememoa website, it is a \u201Cmemory pool
allocator that helps to improve memory allocation speed and memory usage by improving
memory locality during data manipulation.\u201D What this means is that ememoa helps speed
up memory access, which will make e17 faster.
So if you\u2019re following along, you should execute the following:`),Ho=d(),le=l("pre"),Ao=d(),S=l("p"),Co=a(`This package may not install a file in the correct place, so we need to make sure
it is. Run `),We=l("code"),jo=a("ls /usr/lib64/pkgconfig/ememoa.pc"),Lo=a(`. If it says there is no file,
then issue: `),Ye=l("code"),So=a("mv /usr/lib/pkgconfig/ememoa* /usr/lib64/pkgconfig/"),$t=d(),G=l("h3"),Fo=a("Imlib2 [ imlib2/ ]"),Kt=d(),k=l("blockquote"),H=l("p"),Ro=a(`This is a tricky one. So much software depends on imlib that is will be nearly
impossible to uninstall. You can, however, build imlib and simply install it over
existing files. If you want to do this, just run
`),$e=l("code"),Xo=a("cd ~ && yumdownloader imlib2 imlib2-devel"),qo=a(`. If you have problems after
building imlib2, simply login in a terminal and issue
`),Ke=l("code"),Mo=a("sudo rpm -ivh --force ~/imlib2*.rpm"),No=a(` (replace \u2018user\u2019 with your username) to
restore the old files. OK - now that the disclaimer is over with, on to the
next commands:`),Bo=d(),ie=l("pre"),Uo=d(),A=l("p"),Go=a(`The end of the output of this last command will give you a asummary of what
is going to be included in the build. You should see a list of \u201CImage Loaders\u201D
with all yes\u2019s. If you don\u2019t, then issue `),ze=l("code"),Wo=a("yum install libXXX-devel"),Yo=a(` for each
one. For instance, if you see that TIFF and ID3 are \u201Cno,\u201D then run
`),Ve=l("code"),$o=a("sudo yum install libtiff-devel libid3-devel"),Ko=a(`. \u201CUse AMD64 for speed\u201D
should be yes and \u201Cuse MMX\u2026\u201D should be no. I am not sure what \u201Cvisibility hiding\u201D
is, so leave it as-is. Now issue:`),zo=d(),se=l("pre"),zt=d(),F=l("h3"),Vo=a("eina [ eina/ ] "),Qe=l("code"),Qo=a("--enable-ememoa"),Vt=d(),re=l("blockquote"),Je=l("p"),Jo=a(`From the web site: \u201CEina is a multi-platform library that provides optimized
data types and a few tools that could be used for projects.\u201D To build:`),Qt=d(),W=l("h3"),Zo=a("Eet [ eet/ ]"),Jt=d(),r=l("blockquote"),Ze=l("p"),ea=a(`Eet is a cool little library used
for data input/output that is written very little and read very much.`),ta=d(),de=l("h3"),oa=a("Edb [ OLD/edb/ ]"),aa=d(),et=l("p"),na=a(`The edb library is in the OLD
directory, but some packages look for it and may use it. If you want to use
this library, charge on!`),la=d(),he=l("h3"),ia=a("Imlib2 Extras [ imlib2_loaders/ ]"),sa=d(),tt=l("p"),ra=a(`Now that we have some libs installed, we can build
some more imlib2 image loaders.`),da=d(),ce=l("h3"),ha=a("Imlib2 Extras [ imlib2_tools/ ]"),ca=d(),ot=l("p"),ua=a("This package contains some extra tools for developing with Imlib."),pa=d(),Y=l("h3"),fa=a("Evas [ evas/ ] "),at=l("code"),ma=a("--enable-gl-x11 --enable-gl-glew --enable-software-xcb --enable-buffer --enable-xrender-x11 --enable-software-sdl --enable-directfb --enable-fb"),ba=d(),x=l("p"),ga=a(`From the wiki: \u201CEvas is a hardware-accelerated canvas API for X-Windows
that can draw anti-aliased text, smooth super and sub-sampled images,
alpha-blend, as well as drop down to using normal X11 primitives such as
pixmaps, lines and rectangles for speed if your CPU or graphics hardware are
too slow. \u201D This is how e17 gets its speed for its cool effects. The following
lines are for installing it with all the backends enabled. There is one
problem in the current SVN: glew support is not working. If you try the
following `),nt=l("code"),va=a("./configure"),ya=a(` line and make gives you an error, remove the
`),lt=l("code"),Ea=a("--enable-gl-glew"),wa=a(" from the "),it=l("code"),_a=a("./configure"),ka=a(` command and run it again. If you get
errors while building, it means that the correct devel packages aren\u2019t
installed, and you should check Step 1 for the correct packages to install.`),xa=d(),ue=l("h3"),Ia=a("Ecore [ ecore/ ]"),Ta=d(),st=l("p"),Pa=a(`This is the core library
for Enlightenment. It handles events, draws the GUI, and does a lot of graphic
stuff.  Just a simple few commands should pick up all the previous
configuration information:`),Oa=d(),pe=l("h3"),Da=a("Efreet [ efreet/ ]"),Ha=d(),rt=l("p"),Aa=a(`Efreet implements a bunch of protocols set by freedesktop.org. This
includes icon themes, .desktop file support, and menus.`),Ca=d(),$=l("h3"),ja=a("Embryo [ embryo/ ] "),dt=l("code"),La=a("--enable-doc"),Sa=d(),C=l("p"),Fa=a(`Embryo is a
C-like scripting language used by enlightenment. Add `),ht=l("code"),Ra=a("--enable-doc"),Xa=a(` to the
`),ct=l("code"),qa=a("./configure"),Ma=a(" line if you want to install documentation for this."),Na=d(),K=l("h3"),Ba=a("Edje [edje/] "),ut=l("code"),Ua=a("--enable-doc --enable-edje-program-cache"),Ga=d(),pt=l("p"),Wa=a(`From the wiki: \u201CEdje is an attempt to
find a middleground between theming and programming without turning the theme
itself into just yet another program.\u201D It is the awesome theming engine for
enlightenment.`),Ya=d(),fe=l("h3"),$a=a("E_DBus [ e_dbus/ ]"),Ka=d(),ft=l("p"),za=a(`This is
the D-Bus connection for e17. It is used to get and set system information,
using an interface common to a lot of applications.`),Va=d(),me=l("h3"),Qa=a("ETK [ etk/ ]"),Ja=d(),mt=l("p"),Za=a(`Etk is the enlightenment toolit,
which is based on EFL. If you managed to enable framebuffer support in ecore,
this will automatically enable framebuffer support in etk.`),en=d(),be=l("h3"),tn=a("EXML [ exml/ ]"),on=d(),bt=l("p"),an=a("A neat library for dealing with XML files."),nn=d(),z=l("h3"),ln=a("Epsilon [ epsilon/ ] "),gt=l("code"),sn=a("--enable-thumbnailer-xine"),rn=d(),vt=l("p"),dn=a("A library for creating quick thumbnails."),hn=d(),ge=l("h3"),cn=a("Emotion [ epsilon/ ]"),un=d(),yt=l("p"),pn=a("A library for videos."),fn=d(),ve=l("h3"),mn=a("Enity [ enity/ ]"),bn=d(),Et=l("p"),gn=a("A library for creating dialogs, much like xdialog."),vn=d(),ye=l("h3"),yn=a("Etk Extras [ etk_extra/ ]"),En=d(),wt=l("p"),wn=a("Extra libs for etk."),_n=d(),Ee=l("h3"),kn=a("Evolve [ evolve/ ]"),xn=d(),_t=l("p"),In=a("Allows you to theme your windows using an edje-like syntax."),Tn=d(),we=l("h3"),Pn=a("Enlightenment Widget Library [ ewl/ ]"),On=d(),kt=l("p"),Dn=a("A toolkit for creating EFL-based GUIs."),Hn=d(),_e=l("h3"),An=a("Expedite [ expedite/ ]"),Cn=d(),xt=l("p"),jn=a("Benchmarking suite for e17."),Ln=d(),ke=l("h3"),Sn=a("Enhance [ enhance/ ]"),Fn=d(),It=l("p"),Rn=a("Allows you to use glade files with e17 libs for easier UI development!"),Zt=d(),V=l("h3"),Xn=a("Exchange [ PROTO/exchange/ ]"),eo=d(),m=l("blockquote"),Tt=l("p"),qn=a(`Enlightenment looks for this lib and uses it if it is installed. The README says \u201CThe
enlightened way to exchange stuffs!\u201D I\u2019m not sure what this is, but we\u2019re
going to use it anyway! NOTE: this is a prototype library, and may not
function when you download it. If the build fails with an odd error, it may be
fixed by the following day.`),Mn=d(),xe=l("h3"),Nn=a("Esmart [ esmart/ ]"),Bn=d(),Pt=l("p"),Un=a("A collection of smarter evas objects."),Gn=d(),Ie=l("h3"),Wn=a("Enlightenment [ e/ ]"),Yn=d(),Ot=l("p"),$n=a("The actual enlightenment desktop environment."),Kn=d(),Te=l("h3"),zn=a("Entrance [ entrance/ ]"),Vn=d(),Q=l("p"),Qn=a(`An enlightenment login manager, to replace gdm, kdm, or xdm. In order to
be able to run entrance as your display manager, you must edit a few files as
root. In `),Dt=l("code"),Jn=a("/etc/X11/xdm/Xsession"),Zn=a(", find the area that looks like:\xA0"),el=d(),Pe=l("pre"),tl=d(),Ht=l("p"),ol=a("and add the following lines before \u201Cfailsafe)\u201C:"),al=d(),Oe=l("pre"),nl=d(),R=l("p"),ll=a("Then open "),At=l("code"),il=a("/etc/sysconfig/desktop"),sl=a(" and make sure it says "),Ct=l("code"),rl=a("DISPLAYMANAGER=enlightenment"),to=d(),J=l("h2"),dl=a("Step 3: EApps"),oo=d(),De=l("p"),hl=a(`Now that we\u2019ve built our main libraries and software - on to the fun stuff! We
are now going to build more apps for use with enlightenment.`),ao=d(),Z=l("h3"),cl=a("Edje Editor [ edje_editor/ ]"),no=d(),y=l("blockquote"),jt=l("p"),ul=a("This is an editor for theme files. Really awesome!"),pl=d(),He=l("h3"),fl=a("Edje Viewer [ edje_editor/ ]"),ml=d(),Lt=l("p"),bl=a("This is an editor for theme files. Really awesome!"),gl=d(),Ae=l("h3"),vl=a("Elicit [ elicit/ ]"),yl=d(),St=l("p"),El=a("A screen zoomer. and color picker."),wl=d(),Ce=l("h3"),_l=a("Elitaire [ elitaire/ ]"),kl=d(),Ft=l("p"),xl=a("Solitaire game for e17."),this.h()},l(o){b=i(o,"P",{});var u=s(b);I=n(u,`DISCLAIMER: The following did NOT work correctly for me. The applications worked
correctly, but the desktop fails. When I find out what went wrong, I will modify
this post to suit.`),u.forEach(t),T=h(o),_=i(o,"P",{});var lo=s(_);v=n(lo,`Today i have begun to build and install Enlightenment e17 on my Fedora 10 x86_64
laptop. I have Googled for a few sites to help me get started, only to discover
their directions are very lacking. VERY lacking. So to compensate, i am writing
this article on the things you need to get started with Enlightenment e17. If
you would like to try out e17, you can use yum to install some of the base
componenets, but remember to erase them with `),w=i(lo,"CODE",{});var Ll=s(w);te=n(Ll,"yum -e enlightenment"),Ll.forEach(t),so=n(lo,` before you
start building e17 or some severe nastiness could occur. The packages I have
installed for my evaluation are: bitmap_fonts, e_dbus, edje, efreet, embryo,
enlightenment, eterm, and libast. The reason I didn\u2019t just use the yum packages
is that I know e17 has a lot of dependencies and a lot of hidden features. I
like to have a lot of features! Read on to find out about some of those
features.`),lo.forEach(t),Mt=h(o),M=i(o,"H2",{id:!0});var Sl=s(M);ro=n(Sl,"Step 1: Preparations"),Sl.forEach(t),Nt=h(o),P=i(o,"P",{});var je=s(P);ho=n(je,`You are going to need a few dependencies for this. Some you can get via yum, and others you need to get from a version control repository. Here are the command you need to execute:
sudo yum install libjpeg-devel libtiff-devel libpng-devel giflib-devel freetype-devel libXext-devel libid3tag-devel subversion imlib2-devel libxcb libxcb-devel libxcb-util libxcb-util libxcb-util-devel glew-devel libXrender-devel directfb-devel xine-lib-devel gstreamer-devel gstreamer-plugins-base-devel vlc-devel
mkdir ~/Download/e17
cd ~/Download/e17
svn co `),N=i(je,"A",{href:!0,rel:!0});var Fl=s(N);co=n(Fl,"http://svn.enlightenment.org/svn/e"),Fl.forEach(t),uo=n(je,`
svn co `),B=i(je,"A",{href:!0,rel:!0});var Rl=s(B);po=n(Rl,"http://ememoa.googlecode.com/svn/trunk/"),Rl.forEach(t),fo=n(je," ememoa-read-only"),je.forEach(t),Bt=h(o),U=i(o,"H2",{id:!0});var Xl=s(U);mo=n(Xl,"Step 2: The long drive home"),Xl.forEach(t),Ut=h(o),oe=i(o,"P",{});var ql=s(oe);bo=n(ql,"Ok. Now that we have our tools, we can start the dirty work: building e17. I am listing this in the order you should build. Just follow along and shout, \u201CHoo-Raaahhhh!!!\u201D at the appropriate times. For brevity, I will be listing the package names in bold font, then the directory in which it can be found in brackets. Then I will give a hort description of the file, and any options to be passed to ./configure. You should run three commands with each step:"),ql.forEach(t),Gt=h(o),O=i(o,"OL",{});var Le=s(O);j=i(Le,"LI",{});var Rt=s(j);qe=i(Rt,"CODE",{});var Ml=s(qe);go=n(Ml,"cd"),Ml.forEach(t),vo=n(Rt," to change into that directory. All directory names will be relative to "),Me=i(Rt,"SUB",{});var Nl=s(Me);yo=n(Nl,"/Download/e17/e/trunk/, except the ememoa package, which should be "),Nl.forEach(t),Eo=n(Rt,"/Download/e17/ememoa-read-only/"),Rt.forEach(t),wo=h(Le),ae=i(Le,"LI",{});var Il=s(ae);Ne=i(Il,"CODE",{});var Bl=s(Ne);_o=n(Bl,"./configure --libdir=/usr/lib64 --prefix=/usr"),Bl.forEach(t),ko=n(Il," with the config options appended to the end, seperated by spaces. See the first two examples to see what I mean. (NOTE: If you are missing the ./configure script for any of the following steps, run ./autogen.sh first.)"),Il.forEach(t),xo=h(Le),ne=i(Le,"LI",{});var Tl=s(ne);Be=i(Tl,"CODE",{});var Ul=s(Be);Io=n(Ul,"<code>gmake && sudo gmake install</code>"),Ul.forEach(t),To=n(Tl," This command builds the package, prompts for your password, if you are in the sudoers file, and installs it. This step may take some time before prompting for your password."),Tl.forEach(t),Le.forEach(t),Wt=h(o),L=i(o,"H3",{id:!0});var Pl=s(L);Po=n(Pl,"Ememoa [ ememoa-read-only/ ]  "),Ue=i(Pl,"CODE",{});var Gl=s(Ue);Oo=n(Gl,"--enable-pthread --enable-use64"),Gl.forEach(t),Pl.forEach(t),Yt=h(o),D=i(o,"BLOCKQUOTE",{});var Se=s(D);Ge=i(Se,"P",{});var Wl=s(Ge);Do=n(Wl,`We are going to build ememoa first. From the ememoa website, it is a \u201Cmemory pool
allocator that helps to improve memory allocation speed and memory usage by improving
memory locality during data manipulation.\u201D What this means is that ememoa helps speed
up memory access, which will make e17 faster.
So if you\u2019re following along, you should execute the following:`),Wl.forEach(t),Ho=h(Se),le=i(Se,"PRE",{class:!0});var Es=s(le);Es.forEach(t),Ao=h(Se),S=i(Se,"P",{});var Xt=s(S);Co=n(Xt,`This package may not install a file in the correct place, so we need to make sure
it is. Run `),We=i(Xt,"CODE",{});var Yl=s(We);jo=n(Yl,"ls /usr/lib64/pkgconfig/ememoa.pc"),Yl.forEach(t),Lo=n(Xt,`. If it says there is no file,
then issue: `),Ye=i(Xt,"CODE",{});var $l=s(Ye);So=n($l,"mv /usr/lib/pkgconfig/ememoa* /usr/lib64/pkgconfig/"),$l.forEach(t),Xt.forEach(t),Se.forEach(t),$t=h(o),G=i(o,"H3",{id:!0});var Kl=s(G);Fo=n(Kl,"Imlib2 [ imlib2/ ]"),Kl.forEach(t),Kt=h(o),k=i(o,"BLOCKQUOTE",{});var X=s(k);H=i(X,"P",{});var Fe=s(H);Ro=n(Fe,`This is a tricky one. So much software depends on imlib that is will be nearly
impossible to uninstall. You can, however, build imlib and simply install it over
existing files. If you want to do this, just run
`),$e=i(Fe,"CODE",{});var zl=s($e);Xo=n(zl,"cd ~ && yumdownloader imlib2 imlib2-devel"),zl.forEach(t),qo=n(Fe,`. If you have problems after
building imlib2, simply login in a terminal and issue
`),Ke=i(Fe,"CODE",{});var Vl=s(Ke);Mo=n(Vl,"sudo rpm -ivh --force ~/imlib2*.rpm"),Vl.forEach(t),No=n(Fe,` (replace \u2018user\u2019 with your username) to
restore the old files. OK - now that the disclaimer is over with, on to the
next commands:`),Fe.forEach(t),Bo=h(X),ie=i(X,"PRE",{class:!0});var ws=s(ie);ws.forEach(t),Uo=h(X),A=i(X,"P",{});var Re=s(A);Go=n(Re,`The end of the output of this last command will give you a asummary of what
is going to be included in the build. You should see a list of \u201CImage Loaders\u201D
with all yes\u2019s. If you don\u2019t, then issue `),ze=i(Re,"CODE",{});var Ql=s(ze);Wo=n(Ql,"yum install libXXX-devel"),Ql.forEach(t),Yo=n(Re,` for each
one. For instance, if you see that TIFF and ID3 are \u201Cno,\u201D then run
`),Ve=i(Re,"CODE",{});var Jl=s(Ve);$o=n(Jl,"sudo yum install libtiff-devel libid3-devel"),Jl.forEach(t),Ko=n(Re,`. \u201CUse AMD64 for speed\u201D
should be yes and \u201Cuse MMX\u2026\u201D should be no. I am not sure what \u201Cvisibility hiding\u201D
is, so leave it as-is. Now issue:`),Re.forEach(t),zo=h(X),se=i(X,"PRE",{class:!0});var _s=s(se);_s.forEach(t),X.forEach(t),zt=h(o),F=i(o,"H3",{id:!0});var Ol=s(F);Vo=n(Ol,"eina [ eina/ ] "),Qe=i(Ol,"CODE",{});var Zl=s(Qe);Qo=n(Zl,"--enable-ememoa"),Zl.forEach(t),Ol.forEach(t),Vt=h(o),re=i(o,"BLOCKQUOTE",{});var ei=s(re);Je=i(ei,"P",{});var ti=s(Je);Jo=n(ti,`From the web site: \u201CEina is a multi-platform library that provides optimized
data types and a few tools that could be used for projects.\u201D To build:`),ti.forEach(t),ei.forEach(t),Qt=h(o),W=i(o,"H3",{id:!0});var oi=s(W);Zo=n(oi,"Eet [ eet/ ]"),oi.forEach(t),Jt=h(o),r=i(o,"BLOCKQUOTE",{});var c=s(r);Ze=i(c,"P",{});var ai=s(Ze);ea=n(ai,`Eet is a cool little library used
for data input/output that is written very little and read very much.`),ai.forEach(t),ta=h(c),de=i(c,"H3",{id:!0});var ni=s(de);oa=n(ni,"Edb [ OLD/edb/ ]"),ni.forEach(t),aa=h(c),et=i(c,"P",{});var li=s(et);na=n(li,`The edb library is in the OLD
directory, but some packages look for it and may use it. If you want to use
this library, charge on!`),li.forEach(t),la=h(c),he=i(c,"H3",{id:!0});var ii=s(he);ia=n(ii,"Imlib2 Extras [ imlib2_loaders/ ]"),ii.forEach(t),sa=h(c),tt=i(c,"P",{});var si=s(tt);ra=n(si,`Now that we have some libs installed, we can build
some more imlib2 image loaders.`),si.forEach(t),da=h(c),ce=i(c,"H3",{id:!0});var ri=s(ce);ha=n(ri,"Imlib2 Extras [ imlib2_tools/ ]"),ri.forEach(t),ca=h(c),ot=i(c,"P",{});var di=s(ot);ua=n(di,"This package contains some extra tools for developing with Imlib."),di.forEach(t),pa=h(c),Y=i(c,"H3",{id:!0});var Dl=s(Y);fa=n(Dl,"Evas [ evas/ ] "),at=i(Dl,"CODE",{});var hi=s(at);ma=n(hi,"--enable-gl-x11 --enable-gl-glew --enable-software-xcb --enable-buffer --enable-xrender-x11 --enable-software-sdl --enable-directfb --enable-fb"),hi.forEach(t),Dl.forEach(t),ba=h(c),x=i(c,"P",{});var q=s(x);ga=n(q,`From the wiki: \u201CEvas is a hardware-accelerated canvas API for X-Windows
that can draw anti-aliased text, smooth super and sub-sampled images,
alpha-blend, as well as drop down to using normal X11 primitives such as
pixmaps, lines and rectangles for speed if your CPU or graphics hardware are
too slow. \u201D This is how e17 gets its speed for its cool effects. The following
lines are for installing it with all the backends enabled. There is one
problem in the current SVN: glew support is not working. If you try the
following `),nt=i(q,"CODE",{});var ci=s(nt);va=n(ci,"./configure"),ci.forEach(t),ya=n(q,` line and make gives you an error, remove the
`),lt=i(q,"CODE",{});var ui=s(lt);Ea=n(ui,"--enable-gl-glew"),ui.forEach(t),wa=n(q," from the "),it=i(q,"CODE",{});var pi=s(it);_a=n(pi,"./configure"),pi.forEach(t),ka=n(q,` command and run it again. If you get
errors while building, it means that the correct devel packages aren\u2019t
installed, and you should check Step 1 for the correct packages to install.`),q.forEach(t),xa=h(c),ue=i(c,"H3",{id:!0});var fi=s(ue);Ia=n(fi,"Ecore [ ecore/ ]"),fi.forEach(t),Ta=h(c),st=i(c,"P",{});var mi=s(st);Pa=n(mi,`This is the core library
for Enlightenment. It handles events, draws the GUI, and does a lot of graphic
stuff.  Just a simple few commands should pick up all the previous
configuration information:`),mi.forEach(t),Oa=h(c),pe=i(c,"H3",{id:!0});var bi=s(pe);Da=n(bi,"Efreet [ efreet/ ]"),bi.forEach(t),Ha=h(c),rt=i(c,"P",{});var gi=s(rt);Aa=n(gi,`Efreet implements a bunch of protocols set by freedesktop.org. This
includes icon themes, .desktop file support, and menus.`),gi.forEach(t),Ca=h(c),$=i(c,"H3",{id:!0});var Hl=s($);ja=n(Hl,"Embryo [ embryo/ ] "),dt=i(Hl,"CODE",{});var vi=s(dt);La=n(vi,"--enable-doc"),vi.forEach(t),Hl.forEach(t),Sa=h(c),C=i(c,"P",{});var Xe=s(C);Fa=n(Xe,`Embryo is a
C-like scripting language used by enlightenment. Add `),ht=i(Xe,"CODE",{});var yi=s(ht);Ra=n(yi,"--enable-doc"),yi.forEach(t),Xa=n(Xe,` to the
`),ct=i(Xe,"CODE",{});var Ei=s(ct);qa=n(Ei,"./configure"),Ei.forEach(t),Ma=n(Xe," line if you want to install documentation for this."),Xe.forEach(t),Na=h(c),K=i(c,"H3",{id:!0});var Al=s(K);Ba=n(Al,"Edje [edje/] "),ut=i(Al,"CODE",{});var wi=s(ut);Ua=n(wi,"--enable-doc --enable-edje-program-cache"),wi.forEach(t),Al.forEach(t),Ga=h(c),pt=i(c,"P",{});var _i=s(pt);Wa=n(_i,`From the wiki: \u201CEdje is an attempt to
find a middleground between theming and programming without turning the theme
itself into just yet another program.\u201D It is the awesome theming engine for
enlightenment.`),_i.forEach(t),Ya=h(c),fe=i(c,"H3",{id:!0});var ki=s(fe);$a=n(ki,"E_DBus [ e_dbus/ ]"),ki.forEach(t),Ka=h(c),ft=i(c,"P",{});var xi=s(ft);za=n(xi,`This is
the D-Bus connection for e17. It is used to get and set system information,
using an interface common to a lot of applications.`),xi.forEach(t),Va=h(c),me=i(c,"H3",{id:!0});var Ii=s(me);Qa=n(Ii,"ETK [ etk/ ]"),Ii.forEach(t),Ja=h(c),mt=i(c,"P",{});var Ti=s(mt);Za=n(Ti,`Etk is the enlightenment toolit,
which is based on EFL. If you managed to enable framebuffer support in ecore,
this will automatically enable framebuffer support in etk.`),Ti.forEach(t),en=h(c),be=i(c,"H3",{id:!0});var Pi=s(be);tn=n(Pi,"EXML [ exml/ ]"),Pi.forEach(t),on=h(c),bt=i(c,"P",{});var Oi=s(bt);an=n(Oi,"A neat library for dealing with XML files."),Oi.forEach(t),nn=h(c),z=i(c,"H3",{id:!0});var Cl=s(z);ln=n(Cl,"Epsilon [ epsilon/ ] "),gt=i(Cl,"CODE",{});var Di=s(gt);sn=n(Di,"--enable-thumbnailer-xine"),Di.forEach(t),Cl.forEach(t),rn=h(c),vt=i(c,"P",{});var Hi=s(vt);dn=n(Hi,"A library for creating quick thumbnails."),Hi.forEach(t),hn=h(c),ge=i(c,"H3",{id:!0});var Ai=s(ge);cn=n(Ai,"Emotion [ epsilon/ ]"),Ai.forEach(t),un=h(c),yt=i(c,"P",{});var Ci=s(yt);pn=n(Ci,"A library for videos."),Ci.forEach(t),fn=h(c),ve=i(c,"H3",{id:!0});var ji=s(ve);mn=n(ji,"Enity [ enity/ ]"),ji.forEach(t),bn=h(c),Et=i(c,"P",{});var Li=s(Et);gn=n(Li,"A library for creating dialogs, much like xdialog."),Li.forEach(t),vn=h(c),ye=i(c,"H3",{id:!0});var Si=s(ye);yn=n(Si,"Etk Extras [ etk_extra/ ]"),Si.forEach(t),En=h(c),wt=i(c,"P",{});var Fi=s(wt);wn=n(Fi,"Extra libs for etk."),Fi.forEach(t),_n=h(c),Ee=i(c,"H3",{id:!0});var Ri=s(Ee);kn=n(Ri,"Evolve [ evolve/ ]"),Ri.forEach(t),xn=h(c),_t=i(c,"P",{});var Xi=s(_t);In=n(Xi,"Allows you to theme your windows using an edje-like syntax."),Xi.forEach(t),Tn=h(c),we=i(c,"H3",{id:!0});var qi=s(we);Pn=n(qi,"Enlightenment Widget Library [ ewl/ ]"),qi.forEach(t),On=h(c),kt=i(c,"P",{});var Mi=s(kt);Dn=n(Mi,"A toolkit for creating EFL-based GUIs."),Mi.forEach(t),Hn=h(c),_e=i(c,"H3",{id:!0});var Ni=s(_e);An=n(Ni,"Expedite [ expedite/ ]"),Ni.forEach(t),Cn=h(c),xt=i(c,"P",{});var Bi=s(xt);jn=n(Bi,"Benchmarking suite for e17."),Bi.forEach(t),Ln=h(c),ke=i(c,"H3",{id:!0});var Ui=s(ke);Sn=n(Ui,"Enhance [ enhance/ ]"),Ui.forEach(t),Fn=h(c),It=i(c,"P",{});var Gi=s(It);Rn=n(Gi,"Allows you to use glade files with e17 libs for easier UI development!"),Gi.forEach(t),c.forEach(t),Zt=h(o),V=i(o,"H3",{id:!0});var Wi=s(V);Xn=n(Wi,"Exchange [ PROTO/exchange/ ]"),Wi.forEach(t),eo=h(o),m=i(o,"BLOCKQUOTE",{});var g=s(m);Tt=i(g,"P",{});var Yi=s(Tt);qn=n(Yi,`Enlightenment looks for this lib and uses it if it is installed. The README says \u201CThe
enlightened way to exchange stuffs!\u201D I\u2019m not sure what this is, but we\u2019re
going to use it anyway! NOTE: this is a prototype library, and may not
function when you download it. If the build fails with an odd error, it may be
fixed by the following day.`),Yi.forEach(t),Mn=h(g),xe=i(g,"H3",{id:!0});var $i=s(xe);Nn=n($i,"Esmart [ esmart/ ]"),$i.forEach(t),Bn=h(g),Pt=i(g,"P",{});var Ki=s(Pt);Un=n(Ki,"A collection of smarter evas objects."),Ki.forEach(t),Gn=h(g),Ie=i(g,"H3",{id:!0});var zi=s(Ie);Wn=n(zi,"Enlightenment [ e/ ]"),zi.forEach(t),Yn=h(g),Ot=i(g,"P",{});var Vi=s(Ot);$n=n(Vi,"The actual enlightenment desktop environment."),Vi.forEach(t),Kn=h(g),Te=i(g,"H3",{id:!0});var Qi=s(Te);zn=n(Qi,"Entrance [ entrance/ ]"),Qi.forEach(t),Vn=h(g),Q=i(g,"P",{});var io=s(Q);Qn=n(io,`An enlightenment login manager, to replace gdm, kdm, or xdm. In order to
be able to run entrance as your display manager, you must edit a few files as
root. In `),Dt=i(io,"CODE",{});var Ji=s(Dt);Jn=n(Ji,"/etc/X11/xdm/Xsession"),Ji.forEach(t),Zn=n(io,", find the area that looks like:\xA0"),io.forEach(t),el=h(g),Pe=i(g,"PRE",{class:!0});var ks=s(Pe);ks.forEach(t),tl=h(g),Ht=i(g,"P",{});var Zi=s(Ht);ol=n(Zi,"and add the following lines before \u201Cfailsafe)\u201C:"),Zi.forEach(t),al=h(g),Oe=i(g,"PRE",{class:!0});var xs=s(Oe);xs.forEach(t),nl=h(g),R=i(g,"P",{});var qt=s(R);ll=n(qt,"Then open "),At=i(qt,"CODE",{});var es=s(At);il=n(es,"/etc/sysconfig/desktop"),es.forEach(t),sl=n(qt," and make sure it says "),Ct=i(qt,"CODE",{});var ts=s(Ct);rl=n(ts,"DISPLAYMANAGER=enlightenment"),ts.forEach(t),qt.forEach(t),g.forEach(t),to=h(o),J=i(o,"H2",{id:!0});var os=s(J);dl=n(os,"Step 3: EApps"),os.forEach(t),oo=h(o),De=i(o,"P",{});var as=s(De);hl=n(as,`Now that we\u2019ve built our main libraries and software - on to the fun stuff! We
are now going to build more apps for use with enlightenment.`),as.forEach(t),ao=h(o),Z=i(o,"H3",{id:!0});var ns=s(Z);cl=n(ns,"Edje Editor [ edje_editor/ ]"),ns.forEach(t),no=h(o),y=i(o,"BLOCKQUOTE",{});var E=s(y);jt=i(E,"P",{});var ls=s(jt);ul=n(ls,"This is an editor for theme files. Really awesome!"),ls.forEach(t),pl=h(E),He=i(E,"H3",{id:!0});var is=s(He);fl=n(is,"Edje Viewer [ edje_editor/ ]"),is.forEach(t),ml=h(E),Lt=i(E,"P",{});var ss=s(Lt);bl=n(ss,"This is an editor for theme files. Really awesome!"),ss.forEach(t),gl=h(E),Ae=i(E,"H3",{id:!0});var rs=s(Ae);vl=n(rs,"Elicit [ elicit/ ]"),rs.forEach(t),yl=h(E),St=i(E,"P",{});var ds=s(St);El=n(ds,"A screen zoomer. and color picker."),ds.forEach(t),wl=h(E),Ce=i(E,"H3",{id:!0});var hs=s(Ce);_l=n(hs,"Elitaire [ elitaire/ ]"),hs.forEach(t),kl=h(E),Ft=i(E,"P",{});var cs=s(Ft);xl=n(cs,"Solitaire game for e17."),cs.forEach(t),E.forEach(t),this.h()},h(){p(M,"id","step-1-preparations"),p(N,"href","http://svn.enlightenment.org/svn/e"),p(N,"rel","nofollow"),p(B,"href","http://ememoa.googlecode.com/svn/trunk/"),p(B,"rel","nofollow"),p(U,"id","step-2-the-long-drive-home"),p(L,"id","ememoa--ememoa-read-only-----enable-pthread---enable-use64"),p(le,"class","language-bash"),p(G,"id","imlib2--imlib2-"),p(ie,"class","language-bash"),p(se,"class","language-bash"),p(F,"id","eina--eina----enable-ememoa"),p(W,"id","eet--eet-"),p(de,"id","edb--oldedb-"),p(he,"id","imlib2-extras--imlib2_loaders-"),p(ce,"id","imlib2-extras--imlib2_tools-"),p(Y,"id","evas--evas----enable-gl-x11---enable-gl-glew---enable-software-xcb---enable-buffer---enable-xrender-x11---enable-software-sdl---enable-directfb---enable-fb"),p(ue,"id","ecore--ecore-"),p(pe,"id","efreet--efreet-"),p($,"id","embryo--embryo----enable-doc"),p(K,"id","edje-edje---enable-doc---enable-edje-program-cache"),p(fe,"id","e_dbus--e_dbus-"),p(me,"id","etk--etk-"),p(be,"id","exml--exml-"),p(z,"id","epsilon--epsilon----enable-thumbnailer-xine"),p(ge,"id","emotion--epsilon-"),p(ve,"id","enity--enity-"),p(ye,"id","etk-extras--etk_extra-"),p(Ee,"id","evolve--evolve-"),p(we,"id","enlightenment-widget-library--ewl-"),p(_e,"id","expedite--expedite-"),p(ke,"id","enhance--enhance-"),p(V,"id","exchange--protoexchange-"),p(xe,"id","esmart--esmart-"),p(Ie,"id","enlightenment--e-"),p(Te,"id","entrance--entrance-"),p(Pe,"class","language-bash"),p(Oe,"class","language-bash"),p(J,"id","step-3-eapps"),p(Z,"id","edje-editor--edje_editor-"),p(He,"id","edje-viewer--edje_editor-"),p(Ae,"id","elicit--elicit-"),p(Ce,"id","elitaire--elitaire-")},m(o,u){f(o,b,u),e(b,I),f(o,T,u),f(o,_,u),e(_,v),e(_,w),e(w,te),e(_,so),f(o,Mt,u),f(o,M,u),e(M,ro),f(o,Nt,u),f(o,P,u),e(P,ho),e(P,N),e(N,co),e(P,uo),e(P,B),e(B,po),e(P,fo),f(o,Bt,u),f(o,U,u),e(U,mo),f(o,Ut,u),f(o,oe,u),e(oe,bo),f(o,Gt,u),f(o,O,u),e(O,j),e(j,qe),e(qe,go),e(j,vo),e(j,Me),e(Me,yo),e(j,Eo),e(O,wo),e(O,ae),e(ae,Ne),e(Ne,_o),e(ae,ko),e(O,xo),e(O,ne),e(ne,Be),e(Be,Io),e(ne,To),f(o,Wt,u),f(o,L,u),e(L,Po),e(L,Ue),e(Ue,Oo),f(o,Yt,u),f(o,D,u),e(D,Ge),e(Ge,Do),e(D,Ho),e(D,le),le.innerHTML=ms,e(D,Ao),e(D,S),e(S,Co),e(S,We),e(We,jo),e(S,Lo),e(S,Ye),e(Ye,So),f(o,$t,u),f(o,G,u),e(G,Fo),f(o,Kt,u),f(o,k,u),e(k,H),e(H,Ro),e(H,$e),e($e,Xo),e(H,qo),e(H,Ke),e(Ke,Mo),e(H,No),e(k,Bo),e(k,ie),ie.innerHTML=bs,e(k,Uo),e(k,A),e(A,Go),e(A,ze),e(ze,Wo),e(A,Yo),e(A,Ve),e(Ve,$o),e(A,Ko),e(k,zo),e(k,se),se.innerHTML=gs,f(o,zt,u),f(o,F,u),e(F,Vo),e(F,Qe),e(Qe,Qo),f(o,Vt,u),f(o,re,u),e(re,Je),e(Je,Jo),f(o,Qt,u),f(o,W,u),e(W,Zo),f(o,Jt,u),f(o,r,u),e(r,Ze),e(Ze,ea),e(r,ta),e(r,de),e(de,oa),e(r,aa),e(r,et),e(et,na),e(r,la),e(r,he),e(he,ia),e(r,sa),e(r,tt),e(tt,ra),e(r,da),e(r,ce),e(ce,ha),e(r,ca),e(r,ot),e(ot,ua),e(r,pa),e(r,Y),e(Y,fa),e(Y,at),e(at,ma),e(r,ba),e(r,x),e(x,ga),e(x,nt),e(nt,va),e(x,ya),e(x,lt),e(lt,Ea),e(x,wa),e(x,it),e(it,_a),e(x,ka),e(r,xa),e(r,ue),e(ue,Ia),e(r,Ta),e(r,st),e(st,Pa),e(r,Oa),e(r,pe),e(pe,Da),e(r,Ha),e(r,rt),e(rt,Aa),e(r,Ca),e(r,$),e($,ja),e($,dt),e(dt,La),e(r,Sa),e(r,C),e(C,Fa),e(C,ht),e(ht,Ra),e(C,Xa),e(C,ct),e(ct,qa),e(C,Ma),e(r,Na),e(r,K),e(K,Ba),e(K,ut),e(ut,Ua),e(r,Ga),e(r,pt),e(pt,Wa),e(r,Ya),e(r,fe),e(fe,$a),e(r,Ka),e(r,ft),e(ft,za),e(r,Va),e(r,me),e(me,Qa),e(r,Ja),e(r,mt),e(mt,Za),e(r,en),e(r,be),e(be,tn),e(r,on),e(r,bt),e(bt,an),e(r,nn),e(r,z),e(z,ln),e(z,gt),e(gt,sn),e(r,rn),e(r,vt),e(vt,dn),e(r,hn),e(r,ge),e(ge,cn),e(r,un),e(r,yt),e(yt,pn),e(r,fn),e(r,ve),e(ve,mn),e(r,bn),e(r,Et),e(Et,gn),e(r,vn),e(r,ye),e(ye,yn),e(r,En),e(r,wt),e(wt,wn),e(r,_n),e(r,Ee),e(Ee,kn),e(r,xn),e(r,_t),e(_t,In),e(r,Tn),e(r,we),e(we,Pn),e(r,On),e(r,kt),e(kt,Dn),e(r,Hn),e(r,_e),e(_e,An),e(r,Cn),e(r,xt),e(xt,jn),e(r,Ln),e(r,ke),e(ke,Sn),e(r,Fn),e(r,It),e(It,Rn),f(o,Zt,u),f(o,V,u),e(V,Xn),f(o,eo,u),f(o,m,u),e(m,Tt),e(Tt,qn),e(m,Mn),e(m,xe),e(xe,Nn),e(m,Bn),e(m,Pt),e(Pt,Un),e(m,Gn),e(m,Ie),e(Ie,Wn),e(m,Yn),e(m,Ot),e(Ot,$n),e(m,Kn),e(m,Te),e(Te,zn),e(m,Vn),e(m,Q),e(Q,Qn),e(Q,Dt),e(Dt,Jn),e(Q,Zn),e(m,el),e(m,Pe),Pe.innerHTML=vs,e(m,tl),e(m,Ht),e(Ht,ol),e(m,al),e(m,Oe),Oe.innerHTML=ys,e(m,nl),e(m,R),e(R,ll),e(R,At),e(At,il),e(R,sl),e(R,Ct),e(Ct,rl),f(o,to,u),f(o,J,u),e(J,dl),f(o,oo,u),f(o,De,u),e(De,hl),f(o,ao,u),f(o,Z,u),e(Z,cl),f(o,no,u),f(o,y,u),e(y,jt),e(jt,ul),e(y,pl),e(y,He),e(He,fl),e(y,ml),e(y,Lt),e(Lt,bl),e(y,gl),e(y,Ae),e(Ae,vl),e(y,yl),e(y,St),e(St,El),e(y,wl),e(y,Ce),e(Ce,_l),e(y,kl),e(y,Ft),e(Ft,xl)},p:Ss,d(o){o&&t(b),o&&t(T),o&&t(_),o&&t(Mt),o&&t(M),o&&t(Nt),o&&t(P),o&&t(Bt),o&&t(U),o&&t(Ut),o&&t(oe),o&&t(Gt),o&&t(O),o&&t(Wt),o&&t(L),o&&t(Yt),o&&t(D),o&&t($t),o&&t(G),o&&t(Kt),o&&t(k),o&&t(zt),o&&t(F),o&&t(Vt),o&&t(re),o&&t(Qt),o&&t(W),o&&t(Jt),o&&t(r),o&&t(Zt),o&&t(V),o&&t(eo),o&&t(m),o&&t(to),o&&t(J),o&&t(oo),o&&t(De),o&&t(ao),o&&t(Z),o&&t(no),o&&t(y)}}}function Xs(ee){let b,I;const T=[ee[0],fs];let _={$$slots:{default:[Rs]},$$scope:{ctx:ee}};for(let v=0;v<T.length;v+=1)_=jl(_,T[v]);return b=new Fs({props:_}),{c(){Os(b.$$.fragment)},l(v){Ds(b.$$.fragment,v)},m(v,w){Hs(b,v,w),I=!0},p(v,[w]){const te=w&1?As(T,[w&1&&us(v[0]),w&0&&us(fs)]):{};w&2&&(te.$$scope={dirty:w,ctx:v}),b.$set(te)},i(v){I||(Cs(b.$$.fragment,v),I=!0)},o(v){js(b.$$.fragment,v),I=!1},d(v){Ls(b,v)}}}const fs={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Building Enlightenment e17 on Fedora 10 x86_64",description:"How to Build Enlightenment Desktop on Fedora 10",excerpt:"i have begun to build and install Enlightenment e17 on my Fedora 10 x86_64 laptop",cover:!1,coverImage:"/images/GSoC-logo-horizontal-800.png",coverAlt:"RBE Logo",categories:["linux"],tags:["Fedora"],created_at:"2009-04-02 21:34",updated_at:"2009-04-02 21:34",meta:[{property:"og:image",content:"/images/GSoC-logo-horizontal-800.png"},{name:"twitter:image",content:"/images/GSoC-logo-horizontal-800.png"}]};function qs(ee,b,I){return ee.$$set=T=>{I(0,b=jl(jl({},b),ps(T)))},b=ps(b),[b]}class Bs extends Is{constructor(b){super(),Ts(this,b,qs,Xs,Ps,{})}}export{Bs as default,fs as metadata};
