import{S as pe,i as _e,s as ve,C as Q,w as Ee,x as ye,y as ge,H as we,Z as re,f as Ne,t as be,z as Te,K as de,k as s,q as u,a as p,l as r,m as d,r as m,h as t,c as _,n as ue,b as o,G as l,B as Oe}from"./index-6a3f2268.js";import{P as Se}from"./post-3c5a9cb3.js";function xe(b){let n,h,I,f,i,c,v,F,L,T,V,k,E,X,x,H,K,R,O,q,A,S,W,B,y,D,$,j,G,g,ce=`<code class="language-undefined">BYTEmark* Native Mode Benchmark ver. 2 (10/95)
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
* Trademarks are property of their respective holder.</code>`,C,w,M,z,Y,P,N,he=`<code class="language-undefined">BYTEmark* Native Mode Benchmark ver. 2 (10/95)
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
* Trademarks are property of their respective holder.</code>`;return{c(){n=s("h1"),h=u("Why I Need A Virtual OS"),I=p(),f=s("p"),i=u(`I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into
virtual machines, as Fedora has qemu and a nice graphical virtd client for managing virtual machines. While deciding
on my mainstay distro (in 2000), I evaluated the gamut of Linux distros, so I decided to install Gentoo linux on my
virtual machine because it rebuilds everyting on the fly.`),c=p(),v=s("p"),F=u("I went to the Gentoo site and downloaded the minimal install CD for ia64. No luck here - it won't even boot, just hangs."),L=p(),T=s("p"),V=u(`Then I downloaded the minimal install CD for amd64. I got into the boot loader and booted the system, but it hung on the
kernel module loading step.`),k=p(),E=s("p"),X=u(`I finally decided to try a LiveCD. This worked beautifully. However, I couldn't start an X session, as the appropriate
driver was not included on the CD. No real need, as I was installing it on my disk image. So I ran `),x=s("code"),H=u("/opt/installer/bin/install"),K=u(`
and now it is installing fine. It is taking quite a while to install, however, and I hope to have it finished by the
end of the day. (I have classes all day, and will resume install this evening.)`),R=p(),O=s("p"),q=u("[more to come later…]"),A=p(),S=s("p"),W=u(`So I scrapped the idea of installing Gentoo on qemu. I t was just too slow and too much of a pain. So I decided to
try out Sun's VirtualBox for the first time. I really like it! On my machine, it is faster than qemu and VMWare. The
reason for testing on VBox is that qemu doesn't really support 64 bit OSs. I also wanted something that could take
advantage of my hardware, and VMware does an OK job, but not at the level I want. It seems that VBox is everything I
wanted, and i get speeds of almost the same as my host platform. I am running a benchmark program, nbench, and will
post the results here when I finish.`),B=p(),y=s("h2"),D=s("code"),$=u("nbench"),j=u(" result for host OS (Fedora 10 x86_64 on Intel Core 2 Duo w/ 4Gb RAM):"),G=p(),g=s("pre"),C=p(),w=s("h2"),M=s("code"),z=u("nbench"),Y=u(" result for Gentoo 2008 x86_64 on Sun VirtualBox (w/ 768 Mb RAM):"),P=p(),N=s("pre"),this.h()},l(e){n=r(e,"H1",{});var a=d(n);h=m(a,"Why I Need A Virtual OS"),a.forEach(t),I=_(e),f=r(e,"P",{});var ee=d(f);i=m(ee,`I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into
virtual machines, as Fedora has qemu and a nice graphical virtd client for managing virtual machines. While deciding
on my mainstay distro (in 2000), I evaluated the gamut of Linux distros, so I decided to install Gentoo linux on my
virtual machine because it rebuilds everyting on the fly.`),ee.forEach(t),c=_(e),v=r(e,"P",{});var te=d(v);F=m(te,"I went to the Gentoo site and downloaded the minimal install CD for ia64. No luck here - it won't even boot, just hangs."),te.forEach(t),L=_(e),T=r(e,"P",{});var ae=d(T);V=m(ae,`Then I downloaded the minimal install CD for amd64. I got into the boot loader and booted the system, but it hung on the
kernel module loading step.`),ae.forEach(t),k=_(e),E=r(e,"P",{});var U=d(E);X=m(U,`I finally decided to try a LiveCD. This worked beautifully. However, I couldn't start an X session, as the appropriate
driver was not included on the CD. No real need, as I was installing it on my disk image. So I ran `),x=r(U,"CODE",{});var ne=d(x);H=m(ne,"/opt/installer/bin/install"),ne.forEach(t),K=m(U,`
and now it is installing fine. It is taking quite a while to install, however, and I hope to have it finished by the
end of the day. (I have classes all day, and will resume install this evening.)`),U.forEach(t),R=_(e),O=r(e,"P",{});var oe=d(O);q=m(oe,"[more to come later…]"),oe.forEach(t),A=_(e),S=r(e,"P",{});var ie=d(S);W=m(ie,`So I scrapped the idea of installing Gentoo on qemu. I t was just too slow and too much of a pain. So I decided to
try out Sun's VirtualBox for the first time. I really like it! On my machine, it is faster than qemu and VMWare. The
reason for testing on VBox is that qemu doesn't really support 64 bit OSs. I also wanted something that could take
advantage of my hardware, and VMware does an OK job, but not at the level I want. It seems that VBox is everything I
wanted, and i get speeds of almost the same as my host platform. I am running a benchmark program, nbench, and will
post the results here when I finish.`),ie.forEach(t),B=_(e),y=r(e,"H2",{});var Z=d(y);D=r(Z,"CODE",{});var le=d(D);$=m(le,"nbench"),le.forEach(t),j=m(Z," result for host OS (Fedora 10 x86_64 on Intel Core 2 Duo w/ 4Gb RAM):"),Z.forEach(t),G=_(e),g=r(e,"PRE",{class:!0});var Ie=d(g);Ie.forEach(t),C=_(e),w=r(e,"H2",{});var J=d(w);M=r(J,"CODE",{});var se=d(M);z=m(se,"nbench"),se.forEach(t),Y=m(J," result for Gentoo 2008 x86_64 on Sun VirtualBox (w/ 768 Mb RAM):"),J.forEach(t),P=_(e),N=r(e,"PRE",{class:!0});var fe=d(N);fe.forEach(t),this.h()},h(){ue(g,"class","language-undefined"),ue(N,"class","language-undefined")},m(e,a){o(e,n,a),l(n,h),o(e,I,a),o(e,f,a),l(f,i),o(e,c,a),o(e,v,a),l(v,F),o(e,L,a),o(e,T,a),l(T,V),o(e,k,a),o(e,E,a),l(E,X),l(E,x),l(x,H),l(E,K),o(e,R,a),o(e,O,a),l(O,q),o(e,A,a),o(e,S,a),l(S,W),o(e,B,a),o(e,y,a),l(y,D),l(D,$),l(y,j),o(e,G,a),o(e,g,a),g.innerHTML=ce,o(e,C,a),o(e,w,a),l(w,M),l(M,z),l(w,Y),o(e,P,a),o(e,N,a),N.innerHTML=he},p:Oe,d(e){e&&t(n),e&&t(I),e&&t(f),e&&t(c),e&&t(v),e&&t(L),e&&t(T),e&&t(k),e&&t(E),e&&t(R),e&&t(O),e&&t(A),e&&t(S),e&&t(B),e&&t(y),e&&t(G),e&&t(g),e&&t(C),e&&t(w),e&&t(P),e&&t(N)}}}function De(b){let n,h;const I=[b[0],me];let f={$$slots:{default:[xe]},$$scope:{ctx:b}};for(let i=0;i<I.length;i+=1)f=Q(f,I[i]);return n=new Se({props:f}),{c(){Ee(n.$$.fragment)},l(i){ye(n.$$.fragment,i)},m(i,c){ge(n,i,c),h=!0},p(i,[c]){const v=c&1?we(I,[c&1&&re(i[0]),c&0&&re(me)]):{};c&2&&(v.$$scope={dirty:c,ctx:i}),n.$set(v)},i(i){h||(Ne(n.$$.fragment,i),h=!0)},o(i){be(n.$$.fragment,i),h=!1},d(i){Te(n,i)}}}const me={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Installing Gentoo 2008 in (qemu) Sun's VirtualBox on Fedora 10",description:"Information on virtual OSs and benchmarks",excerpt:"I am currently taking a class on Operating System design and need to do some kernel hacking for the class.",cover:!1,coverImage:"/images/GSoC-logo-horizontal-800.png",coverAlt:"RBE Logo",categories:["linux"],tags:["Fedora","VirtualBox","Gentoo"],created_at:"2009-02-02 08:31",updated_at:"2009-02-02 08:31"};function Me(b,n,h){return b.$$set=I=>{h(0,n=Q(Q({},n),de(I)))},n=de(n),[n]}class Re extends pe{constructor(n){super(),_e(this,n,Me,De,ve,{})}}export{Re as default,me as metadata};
