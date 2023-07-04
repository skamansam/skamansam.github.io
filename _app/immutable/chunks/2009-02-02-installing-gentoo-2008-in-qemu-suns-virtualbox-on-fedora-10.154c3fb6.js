import{s as z,r as D,B as X,f as r,a as m,g as d,C as p,c as h,h as K,d as a,j as b,i as o,y as Y}from"./scheduler.28ea7184.js";import{S as J,i as Q,b as Z,d as ee,m as te,a as ne,t as ae,e as oe}from"./index.8021bc93.js";import{g as ie,a as V}from"./spread.8a54911c.js";import{P as le}from"./post.e3899d02.js";function se(E){let t,I="Why I Need A Virtual OS",u,s,i=`I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into
virtual machines, as Fedora has qemu and a nice graphical virtd client for managing virtual machines. While deciding
on my mainstay distro (in 2000), I evaluated the gamut of Linux distros, so I decided to install Gentoo linux on my
virtual machine because it rebuilds everyting on the fly.`,l,c,R="I went to the Gentoo site and downloaded the minimal install CD for ia64. No luck here - it won't even boot, just hangs.",O,_,B=`Then I downloaded the minimal install CD for amd64. I got into the boot loader and booted the system, but it hung on the
kernel module loading step.`,S,v,G=`I finally decided to try a LiveCD. This worked beautifully. However, I couldn&#39;t start an X session, as the appropriate
driver was not included on the CD. No real need, as I was installing it on my disk image. So I ran <code>/opt/installer/bin/install</code>
and now it is installing fine. It is taking quite a while to install, however, and I hope to have it finished by the
end of the day. (I have classes all day, and will resume install this evening.)`,w,x,P="[more to come later…]",C,T,U=`So I scrapped the idea of installing Gentoo on qemu. I t was just too slow and too much of a pain. So I decided to
try out Sun's VirtualBox for the first time. I really like it! On my machine, it is faster than qemu and VMWare. The
reason for testing on VBox is that qemu doesn't really support 64 bit OSs. I also wanted something that could take
advantage of my hardware, and VMware does an OK job, but not at the level I want. It seems that VBox is everything I
wanted, and i get speeds of almost the same as my host platform. I am running a benchmark program, nbench, and will
post the results here when I finish.`,L,f,F="<code>nbench</code> result for host OS (Fedora 10 x86_64 on Intel Core 2 Duo w/ 4Gb RAM):",M,y,$=`<code class="language-undefined">BYTEmark* Native Mode Benchmark ver. 2 (10/95)
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
* Trademarks are property of their respective holder.</code>`,k,g,H="<code>nbench</code> result for Gentoo 2008 x86_64 on Sun VirtualBox (w/ 768 Mb RAM):",A,N,q=`<code class="language-undefined">BYTEmark* Native Mode Benchmark ver. 2 (10/95)
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
* Trademarks are property of their respective holder.</code>`;return{c(){t=r("h1"),t.textContent=I,u=m(),s=r("p"),s.textContent=i,l=m(),c=r("p"),c.textContent=R,O=m(),_=r("p"),_.textContent=B,S=m(),v=r("p"),v.innerHTML=G,w=m(),x=r("p"),x.textContent=P,C=m(),T=r("p"),T.textContent=U,L=m(),f=r("h2"),f.innerHTML=F,M=m(),y=r("pre"),k=m(),g=r("h2"),g.innerHTML=H,A=m(),N=r("pre"),this.h()},l(e){t=d(e,"H1",{id:!0,["data-svelte-h"]:!0}),p(t)!=="svelte-1xupn8v"&&(t.textContent=I),u=h(e),s=d(e,"P",{["data-svelte-h"]:!0}),p(s)!=="svelte-1ifhcvj"&&(s.textContent=i),l=h(e),c=d(e,"P",{["data-svelte-h"]:!0}),p(c)!=="svelte-1iyx0f5"&&(c.textContent=R),O=h(e),_=d(e,"P",{["data-svelte-h"]:!0}),p(_)!=="svelte-8nrww8"&&(_.textContent=B),S=h(e),v=d(e,"P",{["data-svelte-h"]:!0}),p(v)!=="svelte-1w16upo"&&(v.innerHTML=G),w=h(e),x=d(e,"P",{["data-svelte-h"]:!0}),p(x)!=="svelte-13gzs4k"&&(x.textContent=P),C=h(e),T=d(e,"P",{["data-svelte-h"]:!0}),p(T)!=="svelte-1boxwim"&&(T.textContent=U),L=h(e),f=d(e,"H2",{id:!0,["data-svelte-h"]:!0}),p(f)!=="svelte-18h0sx0"&&(f.innerHTML=F),M=h(e),y=d(e,"PRE",{class:!0});var n=K(y);n.forEach(a),k=h(e),g=d(e,"H2",{id:!0,["data-svelte-h"]:!0}),p(g)!=="svelte-ofd70d"&&(g.innerHTML=H),A=h(e),N=d(e,"PRE",{class:!0});var j=K(N);j.forEach(a),this.h()},h(){b(t,"id","why-i-need-a-virtual-os"),b(f,"id","nbench-result-for-host-os-fedora-10-x86_64-on-intel-core-2-duo-w-4gb-ram"),b(y,"class","language-undefined"),b(g,"id","nbench-result-for-gentoo-2008-x86_64-on-sun-virtualbox-w-768-mb-ram"),b(N,"class","language-undefined")},m(e,n){o(e,t,n),o(e,u,n),o(e,s,n),o(e,l,n),o(e,c,n),o(e,O,n),o(e,_,n),o(e,S,n),o(e,v,n),o(e,w,n),o(e,x,n),o(e,C,n),o(e,T,n),o(e,L,n),o(e,f,n),o(e,M,n),o(e,y,n),y.innerHTML=$,o(e,k,n),o(e,g,n),o(e,A,n),o(e,N,n),N.innerHTML=q},p:Y,d(e){e&&(a(t),a(u),a(s),a(l),a(c),a(O),a(_),a(S),a(v),a(w),a(x),a(C),a(T),a(L),a(f),a(M),a(y),a(k),a(g),a(A),a(N))}}}function re(E){let t,I;const u=[E[0],W];let s={$$slots:{default:[se]},$$scope:{ctx:E}};for(let i=0;i<u.length;i+=1)s=D(s,u[i]);return t=new le({props:s}),{c(){Z(t.$$.fragment)},l(i){ee(t.$$.fragment,i)},m(i,l){te(t,i,l),I=!0},p(i,[l]){const c=l&1?ie(u,[l&1&&V(i[0]),l&0&&V(W)]):{};l&2&&(c.$$scope={dirty:l,ctx:i}),t.$set(c)},i(i){I||(ne(t.$$.fragment,i),I=!0)},o(i){ae(t.$$.fragment,i),I=!1},d(i){oe(t,i)}}}const W={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Installing Gentoo 2008 in (qemu) Sun's VirtualBox on Fedora 10",description:"Information on virtual OSs and benchmarks",excerpt:"I am currently taking a class on Operating System design and need to do some kernel hacking for the class.",cover:!1,coverImage:"/images/GSoC-logo-horizontal-800.png",coverAlt:"RBE Logo",categories:["linux"],tags:["Fedora","VirtualBox","Gentoo"],created_at:"2009-02-02 08:31",updated_at:"2009-02-02 08:31",preview:`Why I Need A Virtual OS

I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about 
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in.`,previewHtml:"<h1>Why I Need A Virtual OS</h1> <p>I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So ...</p>",textContent:`Why I Need A Virtual OS

I am currently taking a class on Operating System design and need to do some kernel hacking for the class. I thought about 
modifying the Fedora kernel, but decided against it, as I still want a stable system to operate in. So I looked into 
virtual machines, as Fedora has...`};function de(E,t,I){return E.$$set=u=>{I(0,t=D(D({},t),X(u)))},t=X(t),[t]}class Ie extends J{constructor(t){super(),Q(this,t,de,re,z,{})}}export{Ie as default,W as metadata};
