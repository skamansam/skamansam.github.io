import{S as pe,i as ge,s as ye,D as ee,x as ve,y as _e,z as be,A as Ee,B as de,r as we,p as Ne,C as Se,L as ue,e as l,t as u,k as p,c as r,a as d,h as m,d as t,m as g,b as M,g as o,I as s,n as Oe}from"../../chunks/index-f0cd6aaa.js";import{P as Te}from"../../chunks/post-d11a0746.js";import"../../chunks/stores-707f9fa0.js";import"../../chunks/settings-69239d06.js";function ke(N){let a,c,I,f,i,h,y,V,L,S,X,A,v,H,k,K,q,R,O,W,B,T,$,C,_,x,j,z,G,E,he=`<code class="language-undefined">BYTEmark* Native Mode Benchmark ver. 2 (10/95)
Index-split by Andrew D. Balsa (11/97)
Linux/Unix* port by Uwe F. Mayer (12/96,11/97)

TEST                : Iterations/sec.  : Old Index   : New Index
                    :                  : Pentium 90* : AMD K6/233*
--------------------:------------------:-------------:------------
NUMERIC SORT        :          1165.6  :      29.89  :       9.82
STRING SORT         :          258.88  :     115.67  :      17.90
BITFIELD            :      4.6794e+08  :      80.27  :      16.77
FP EMULATION        :          251.44  :     120.65  :      27.84
FOURIER             :           25958  :      29.52  :      16.58
ASSIGNMENT          :          34.798  :     132.41  :      34.34
IDEA                :            7068  :     108.10  :      32.10
HUFFMAN             :          2325.1  :      64.48  :      20.59
NEURAL NET          :          50.819  :      81.64  :      34.34
LU DECOMPOSITION    :            1652  :      85.58  :      61.80
==========================ORIGINAL BYTEMARK RESULTS==========================
INTEGER INDEX       : 84.556
FLOATING-POINT INDEX: 59.082
Baseline (MSDOS*)   : Pentium* 90, 256 KB L2-cache, Watcom* compiler 10.0
==============================LINUX DATA BELOW===============================
CPU                 : Dual GenuineIntel Intel(R) Core(TM)2 Duo CPU     T8300  @ 2.40GHz 800MHz
L2 Cache            : 3072 KB
OS                  : Linux 2.6.27.12-170.2.5.fc10.x86_64
C compiler          : gcc version 4.3.2 20081105 (Red Hat 4.3.2-7) (GCC)
libc                : libc-2.9.so
MEMORY INDEX        : 21.765
INTEGER INDEX       : 20.615
FLOATING-POINT INDEX: 32.769
Baseline (LINUX)    : AMD K6/233*, 512 KB L2-cache, gcc 2.7.2.3, libc-5.4.38
* Trademarks are property of their respective holder.</code>`,F,b,D,Y,J,P,w,ce=`<code class="language-undefined">BYTEmark* Native Mode Benchmark ver. 2 (10/95)
Index-split by Andrew D. Balsa (11/97)
Linux/Unix* port by Uwe F. Mayer (12/96,11/97)

TEST                : Iterations/sec.  : Old Index   : New Index
                    :                  : Pentium 90* : AMD K6/233*
--------------------:------------------:-------------:------------
NUMERIC SORT        :          1139.8  :      29.23  :       9.60
STRING SORT         :          250.16  :     111.78  :      17.30
BITFIELD            :      4.2657e+08  :      73.17  :      15.28
FP EMULATION        :          108.16  :      51.90  :      11.98
FOURIER             :           20163  :      22.93  :      12.88
ASSIGNMENT          :          34.385  :     130.84  :      33.94
IDEA                :            4207  :      64.34  :      19.10
HUFFMAN             :          2259.9  :      62.67  :      20.01
NEURAL NET          :          44.636  :      71.70  :      30.16
LU DECOMPOSITION    :          1589.6  :      82.35  :      59.46
==========================ORIGINAL BYTEMARK RESULTS==========================
INTEGER INDEX       : 67.742
FLOATING-POINT INDEX: 51.348
Baseline (MSDOS*)   : Pentium* 90, 256 KB L2-cache, Watcom* compiler 10.0
==============================LINUX DATA BELOW===============================
CPU                 : Dual GenuineIntel Intel(R) Core(TM)2 Duo CPU     T8300  @ 2.40GHz 2399MHz
L2 Cache            : 64 KB
OS                  : Linux 2.6.27-gentoo-r8
C compiler          : x86_64-pc-linux-gnu-gcc
libc                :
MEMORY INDEX        : 20.781
INTEGER INDEX       : 14.479
FLOATING-POINT INDEX: 28.480
Baseline (LINUX)    : AMD K6/233*, 512 KB L2-cache, gcc 2.7.2.3, libc-5.4.38
* Trademarks are property of their respective holder.</code>`;return{c(){a=l("h1"),c=u("Why I Need A Virtual OS"),I=p(),f=l("p"),i=u(`I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into
virtual machines, as Fedora has qemu and a nice graphical virtd client for managing virtual machines. While deciding
on my mainstay distro (in 2000), I evaluated the gamut of Linux distros, so I decided to install Gentoo linux on my
virtual machine because it rebuilds everyting on the fly.`),h=p(),y=l("p"),V=u("I went to the Gentoo site and downloaded the minimal install CD for ia64. No luck here - it won\u2019t even boot, just hangs."),L=p(),S=l("p"),X=u(`Then I downloaded the minimal install CD for amd64. I got into the boot loader and booted the system, but it hung on the
kernel module loading step.`),A=p(),v=l("p"),H=u(`I finally decided to try a LiveCD. This worked beautifully. However, I couldn\u2019t start an X session, as the appropriate
driver was not included on the CD. No real need, as I was installing it on my disk image. So I ran `),k=l("code"),K=u("/opt/installer/bin/install"),q=u(`
and now it is installing fine. It is taking quite a while to install, however, and I hope to have it finished by the
end of the day. (I have classes all day, and will resume install this evening.)`),R=p(),O=l("p"),W=u("[more to come later\u2026]"),B=p(),T=l("p"),$=u(`So I scrapped the idea of installing Gentoo on qemu. I t was just too slow and too much of a pain. So I decided to
try out Sun\u2019s VirtualBox for the first time. I really like it! On my machine, it is faster than qemu and VMWare. The
reason for testing on VBox is that qemu doesn\u2019t really support 64 bit OSs. I also wanted something that could take
advantage of my hardware, and VMware does an OK job, but not at the level I want. It seems that VBox is everything I
wanted, and i get speeds of almost the same as my host platform. I am running a benchmark program, nbench, and will
post the results here when I finish.`),C=p(),_=l("h2"),x=l("code"),j=u("nbench"),z=u(" result for host OS (Fedora 10 x86_64 on Intel Core 2 Duo w/ 4Gb RAM):"),G=p(),E=l("pre"),F=p(),b=l("h2"),D=l("code"),Y=u("nbench"),J=u(" result for Gentoo 2008 x86_64 on Sun VirtualBox (w/ 768 Mb RAM):"),P=p(),w=l("pre"),this.h()},l(e){a=r(e,"H1",{id:!0});var n=d(a);c=m(n,"Why I Need A Virtual OS"),n.forEach(t),I=g(e),f=r(e,"P",{});var te=d(f);i=m(te,`I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into
virtual machines, as Fedora has qemu and a nice graphical virtd client for managing virtual machines. While deciding
on my mainstay distro (in 2000), I evaluated the gamut of Linux distros, so I decided to install Gentoo linux on my
virtual machine because it rebuilds everyting on the fly.`),te.forEach(t),h=g(e),y=r(e,"P",{});var ae=d(y);V=m(ae,"I went to the Gentoo site and downloaded the minimal install CD for ia64. No luck here - it won\u2019t even boot, just hangs."),ae.forEach(t),L=g(e),S=r(e,"P",{});var ne=d(S);X=m(ne,`Then I downloaded the minimal install CD for amd64. I got into the boot loader and booted the system, but it hung on the
kernel module loading step.`),ne.forEach(t),A=g(e),v=r(e,"P",{});var U=d(v);H=m(U,`I finally decided to try a LiveCD. This worked beautifully. However, I couldn\u2019t start an X session, as the appropriate
driver was not included on the CD. No real need, as I was installing it on my disk image. So I ran `),k=r(U,"CODE",{});var oe=d(k);K=m(oe,"/opt/installer/bin/install"),oe.forEach(t),q=m(U,`
and now it is installing fine. It is taking quite a while to install, however, and I hope to have it finished by the
end of the day. (I have classes all day, and will resume install this evening.)`),U.forEach(t),R=g(e),O=r(e,"P",{});var ie=d(O);W=m(ie,"[more to come later\u2026]"),ie.forEach(t),B=g(e),T=r(e,"P",{});var se=d(T);$=m(se,`So I scrapped the idea of installing Gentoo on qemu. I t was just too slow and too much of a pain. So I decided to
try out Sun\u2019s VirtualBox for the first time. I really like it! On my machine, it is faster than qemu and VMWare. The
reason for testing on VBox is that qemu doesn\u2019t really support 64 bit OSs. I also wanted something that could take
advantage of my hardware, and VMware does an OK job, but not at the level I want. It seems that VBox is everything I
wanted, and i get speeds of almost the same as my host platform. I am running a benchmark program, nbench, and will
post the results here when I finish.`),se.forEach(t),C=g(e),_=r(e,"H2",{id:!0});var Q=d(_);x=r(Q,"CODE",{});var le=d(x);j=m(le,"nbench"),le.forEach(t),z=m(Q," result for host OS (Fedora 10 x86_64 on Intel Core 2 Duo w/ 4Gb RAM):"),Q.forEach(t),G=g(e),E=r(e,"PRE",{class:!0});var Ie=d(E);Ie.forEach(t),F=g(e),b=r(e,"H2",{id:!0});var Z=d(b);D=r(Z,"CODE",{});var re=d(D);Y=m(re,"nbench"),re.forEach(t),J=m(Z," result for Gentoo 2008 x86_64 on Sun VirtualBox (w/ 768 Mb RAM):"),Z.forEach(t),P=g(e),w=r(e,"PRE",{class:!0});var fe=d(w);fe.forEach(t),this.h()},h(){M(a,"id","why-i-need-a-virtual-os"),M(_,"id","nbench-result-for-host-os-fedora-10-x86_64-on-intel-core-2-duo-w-4gb-ram"),M(E,"class","language-undefined"),M(b,"id","nbench-result-for-gentoo-2008-x86_64-on-sun-virtualbox-w-768-mb-ram"),M(w,"class","language-undefined")},m(e,n){o(e,a,n),s(a,c),o(e,I,n),o(e,f,n),s(f,i),o(e,h,n),o(e,y,n),s(y,V),o(e,L,n),o(e,S,n),s(S,X),o(e,A,n),o(e,v,n),s(v,H),s(v,k),s(k,K),s(v,q),o(e,R,n),o(e,O,n),s(O,W),o(e,B,n),o(e,T,n),s(T,$),o(e,C,n),o(e,_,n),s(_,x),s(x,j),s(_,z),o(e,G,n),o(e,E,n),E.innerHTML=he,o(e,F,n),o(e,b,n),s(b,D),s(D,Y),s(b,J),o(e,P,n),o(e,w,n),w.innerHTML=ce},p:Oe,d(e){e&&t(a),e&&t(I),e&&t(f),e&&t(h),e&&t(y),e&&t(L),e&&t(S),e&&t(A),e&&t(v),e&&t(R),e&&t(O),e&&t(B),e&&t(T),e&&t(C),e&&t(_),e&&t(G),e&&t(E),e&&t(F),e&&t(b),e&&t(P),e&&t(w)}}}function xe(N){let a,c;const I=[N[0],me];let f={$$slots:{default:[ke]},$$scope:{ctx:N}};for(let i=0;i<I.length;i+=1)f=ee(f,I[i]);return a=new Te({props:f}),{c(){ve(a.$$.fragment)},l(i){_e(a.$$.fragment,i)},m(i,h){be(a,i,h),c=!0},p(i,[h]){const y=h&1?Ee(I,[h&1&&de(i[0]),h&0&&de(me)]):{};h&2&&(y.$$scope={dirty:h,ctx:i}),a.$set(y)},i(i){c||(we(a.$$.fragment,i),c=!0)},o(i){Ne(a.$$.fragment,i),c=!1},d(i){Se(a,i)}}}const me={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Installing Gentoo 2008 in (qemu) Sun's VirtualBox on Fedora 10",description:"Information on virtual OSs and benchmarks",excerpt:"I am currently taking a class on Operating System design and need to do some kernel hacking for the class.",cover:!1,coverImage:"/images/GSoC-logo-horizontal-800.png",coverAlt:"RBE Logo",categories:["linux"],tags:["Fedora","VirtualBox","Gentoo"],created_at:"2009-02-02 08:31",updated_at:"2009-02-02 08:31",readingTime:{text:"4 min read",minutes:3.865,time:231900,words:773},preview:`Why I Need A Virtual OS

I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about 
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in.`,previewHtml:"<h1>Why I Need A Virtual OS</h1> <p>I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So ...</p>",textContent:`Why I Need A Virtual OS

I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about 
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into 
virtual machines, as Fedora has...`};function De(N,a,c){return N.$$set=I=>{c(0,a=ee(ee({},a),ue(I)))},a=ue(a),[a]}class Be extends pe{constructor(a){super(),ge(this,a,De,xe,ye,{})}}export{Be as default,me as metadata};
