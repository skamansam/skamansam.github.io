import{S as pe,i as _e,s as ve,D as ee,x as Ee,y as ye,z as ge,A as we,B as de,r as be,p as Ne,C as Te,L as ue,e as s,t as u,k as p,c as r,a as d,h as m,d as t,m as _,b as L,g as o,I as l,n as Oe}from"../../chunks/index-fb0fe4b0.js";import{P as Se}from"../../chunks/post-72541c77.js";function xe(N){let a,h,I,f,i,c,v,V,k,T,X,A,E,H,x,K,q,R,O,W,B,S,$,C,y,D,j,z,G,w,ce=`<code class="language-undefined">BYTEmark* Native Mode Benchmark ver. 2 (10/95)
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
* Trademarks are property of their respective holder.</code>`,P,g,M,Y,J,U,b,he=`<code class="language-undefined">BYTEmark* Native Mode Benchmark ver. 2 (10/95)
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
* Trademarks are property of their respective holder.</code>`;return{c(){a=s("h1"),h=u("Why I Need A Virtual OS"),I=p(),f=s("p"),i=u(`I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into
virtual machines, as Fedora has qemu and a nice graphical virtd client for managing virtual machines. While deciding
on my mainstay distro (in 2000), I evaluated the gamut of Linux distros, so I decided to install Gentoo linux on my
virtual machine because it rebuilds everyting on the fly.`),c=p(),v=s("p"),V=u("I went to the Gentoo site and downloaded the minimal install CD for ia64. No luck here - it won\u2019t even boot, just hangs."),k=p(),T=s("p"),X=u(`Then I downloaded the minimal install CD for amd64. I got into the boot loader and booted the system, but it hung on the
kernel module loading step.`),A=p(),E=s("p"),H=u(`I finally decided to try a LiveCD. This worked beautifully. However, I couldn\u2019t start an X session, as the appropriate
driver was not included on the CD. No real need, as I was installing it on my disk image. So I ran `),x=s("code"),K=u("/opt/installer/bin/install"),q=u(`
and now it is installing fine. It is taking quite a while to install, however, and I hope to have it finished by the
end of the day. (I have classes all day, and will resume install this evening.)`),R=p(),O=s("p"),W=u("[more to come later\u2026]"),B=p(),S=s("p"),$=u(`So I scrapped the idea of installing Gentoo on qemu. I t was just too slow and too much of a pain. So I decided to
try out Sun\u2019s VirtualBox for the first time. I really like it! On my machine, it is faster than qemu and VMWare. The
reason for testing on VBox is that qemu doesn\u2019t really support 64 bit OSs. I also wanted something that could take
advantage of my hardware, and VMware does an OK job, but not at the level I want. It seems that VBox is everything I
wanted, and i get speeds of almost the same as my host platform. I am running a benchmark program, nbench, and will
post the results here when I finish.`),C=p(),y=s("h2"),D=s("code"),j=u("nbench"),z=u(" result for host OS (Fedora 10 x86_64 on Intel Core 2 Duo w/ 4Gb RAM):"),G=p(),w=s("pre"),P=p(),g=s("h2"),M=s("code"),Y=u("nbench"),J=u(" result for Gentoo 2008 x86_64 on Sun VirtualBox (w/ 768 Mb RAM):"),U=p(),b=s("pre"),this.h()},l(e){a=r(e,"H1",{id:!0});var n=d(a);h=m(n,"Why I Need A Virtual OS"),n.forEach(t),I=_(e),f=r(e,"P",{});var te=d(f);i=m(te,`I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into
virtual machines, as Fedora has qemu and a nice graphical virtd client for managing virtual machines. While deciding
on my mainstay distro (in 2000), I evaluated the gamut of Linux distros, so I decided to install Gentoo linux on my
virtual machine because it rebuilds everyting on the fly.`),te.forEach(t),c=_(e),v=r(e,"P",{});var ae=d(v);V=m(ae,"I went to the Gentoo site and downloaded the minimal install CD for ia64. No luck here - it won\u2019t even boot, just hangs."),ae.forEach(t),k=_(e),T=r(e,"P",{});var ne=d(T);X=m(ne,`Then I downloaded the minimal install CD for amd64. I got into the boot loader and booted the system, but it hung on the
kernel module loading step.`),ne.forEach(t),A=_(e),E=r(e,"P",{});var F=d(E);H=m(F,`I finally decided to try a LiveCD. This worked beautifully. However, I couldn\u2019t start an X session, as the appropriate
driver was not included on the CD. No real need, as I was installing it on my disk image. So I ran `),x=r(F,"CODE",{});var oe=d(x);K=m(oe,"/opt/installer/bin/install"),oe.forEach(t),q=m(F,`
and now it is installing fine. It is taking quite a while to install, however, and I hope to have it finished by the
end of the day. (I have classes all day, and will resume install this evening.)`),F.forEach(t),R=_(e),O=r(e,"P",{});var ie=d(O);W=m(ie,"[more to come later\u2026]"),ie.forEach(t),B=_(e),S=r(e,"P",{});var le=d(S);$=m(le,`So I scrapped the idea of installing Gentoo on qemu. I t was just too slow and too much of a pain. So I decided to
try out Sun\u2019s VirtualBox for the first time. I really like it! On my machine, it is faster than qemu and VMWare. The
reason for testing on VBox is that qemu doesn\u2019t really support 64 bit OSs. I also wanted something that could take
advantage of my hardware, and VMware does an OK job, but not at the level I want. It seems that VBox is everything I
wanted, and i get speeds of almost the same as my host platform. I am running a benchmark program, nbench, and will
post the results here when I finish.`),le.forEach(t),C=_(e),y=r(e,"H2",{id:!0});var Q=d(y);D=r(Q,"CODE",{});var se=d(D);j=m(se,"nbench"),se.forEach(t),z=m(Q," result for host OS (Fedora 10 x86_64 on Intel Core 2 Duo w/ 4Gb RAM):"),Q.forEach(t),G=_(e),w=r(e,"PRE",{class:!0});var Ie=d(w);Ie.forEach(t),P=_(e),g=r(e,"H2",{id:!0});var Z=d(g);M=r(Z,"CODE",{});var re=d(M);Y=m(re,"nbench"),re.forEach(t),J=m(Z," result for Gentoo 2008 x86_64 on Sun VirtualBox (w/ 768 Mb RAM):"),Z.forEach(t),U=_(e),b=r(e,"PRE",{class:!0});var fe=d(b);fe.forEach(t),this.h()},h(){L(a,"id","why-i-need-a-virtual-os"),L(y,"id","nbench-result-for-host-os-fedora-10-x86_64-on-intel-core-2-duo-w-4gb-ram"),L(w,"class","language-undefined"),L(g,"id","nbench-result-for-gentoo-2008-x86_64-on-sun-virtualbox-w-768-mb-ram"),L(b,"class","language-undefined")},m(e,n){o(e,a,n),l(a,h),o(e,I,n),o(e,f,n),l(f,i),o(e,c,n),o(e,v,n),l(v,V),o(e,k,n),o(e,T,n),l(T,X),o(e,A,n),o(e,E,n),l(E,H),l(E,x),l(x,K),l(E,q),o(e,R,n),o(e,O,n),l(O,W),o(e,B,n),o(e,S,n),l(S,$),o(e,C,n),o(e,y,n),l(y,D),l(D,j),l(y,z),o(e,G,n),o(e,w,n),w.innerHTML=ce,o(e,P,n),o(e,g,n),l(g,M),l(M,Y),l(g,J),o(e,U,n),o(e,b,n),b.innerHTML=he},p:Oe,d(e){e&&t(a),e&&t(I),e&&t(f),e&&t(c),e&&t(v),e&&t(k),e&&t(T),e&&t(A),e&&t(E),e&&t(R),e&&t(O),e&&t(B),e&&t(S),e&&t(C),e&&t(y),e&&t(G),e&&t(w),e&&t(P),e&&t(g),e&&t(U),e&&t(b)}}}function De(N){let a,h;const I=[N[0],me];let f={$$slots:{default:[xe]},$$scope:{ctx:N}};for(let i=0;i<I.length;i+=1)f=ee(f,I[i]);return a=new Se({props:f}),{c(){Ee(a.$$.fragment)},l(i){ye(a.$$.fragment,i)},m(i,c){ge(a,i,c),h=!0},p(i,[c]){const v=c&1?we(I,[c&1&&de(i[0]),c&0&&de(me)]):{};c&2&&(v.$$scope={dirty:c,ctx:i}),a.$set(v)},i(i){h||(be(a.$$.fragment,i),h=!0)},o(i){Ne(a.$$.fragment,i),h=!1},d(i){Te(a,i)}}}const me={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Installing Gentoo 2008 in (qemu) Sun's VirtualBox on Fedora 10",description:"Information on virtual OSs and benchmarks",excerpt:"I am currently taking a class on Operating System design and need to do some kernel hacking for the class.",cover:!1,coverImage:"/images/GSoC-logo-horizontal-800.png",coverAlt:"RBE Logo",categories:["linux"],tags:["Fedora","VirtualBox","Gentoo"],created_at:"2009-02-02 08:31",updated_at:"2009-02-02 08:31"};function Me(N,a,h){return N.$$set=I=>{h(0,a=ee(ee({},a),ue(I)))},a=ue(a),[a]}class Ae extends pe{constructor(a){super(),_e(this,a,Me,De,ve,{})}}export{Ae as default,me as metadata};
