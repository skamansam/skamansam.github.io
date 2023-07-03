import{s as re,r as U,B as ne,f as a,a as d,g as i,C as l,c as u,j as F,i as n,y as ae,d as o}from"./scheduler.28ea7184.js";import{S as ie,i as le,b as de,d as ue,m as he,a as pe,t as me,e as fe}from"./index.8021bc93.js";import{g as ce,a as oe}from"./spread.8a54911c.js";import{P as we}from"./post.d4e0232c.js";function ve(T){let s,c=`When I built my desktop/server in 2005, I used as many MSI (Micro-Satr
International) parts as I could find. They were a little more expensive, but
some trusted friends told me MSI was the way to go. I have been overly impressed
with the hardware, especially after an uptime of 500+ days. The systemwas
extremely stable. Now I try to buy MSI products whenever possible.`,m,p,r=`So - Last summer I knew I would have enough money to finally buy a laptop of my
own. I was looking for a Desktop replacement for school.  So naturally, I went
in search of an MSI laptop. Since you can&#39;t buy from the MSI web site, I had to
go to a reseller, and RK Computers was MSI&#39;s suggested reseller. For months, I
looked at all the models and researched their specifications, as it had to run
Linux <strong>and</strong> Windows. After my thorough evaluation, i decided to
purchase a MSI GX700. Here are the specs:`,h,f,$="<em>MSI MS-1719 (GX700)</em>",L,y,j="<li><strong>Display</strong>: WUXGA 1920 x 1200 Non-Glare-9 Cell Main Battery</li> <li><strong>MXM II Graphics Module</strong>: NVIDIA® GeForce® 8600M-GT 512MB VRAM + Turbo Cache-DX 10</li> <li><strong>Optical-DVD Or Blu-ray</strong>: Integrated Super-Multi Drive-Dual Layer</li> <li><strong>Core 2 Duo Processor</strong>: Intel Core™2 45nm T8300 2.40Ghz 3MB 800MHz</li> <li><strong>Compound-Heat Sink</strong>: Wet Arctic Silver 5 High-Density CPU Thermal Compound</li> <li><strong>2.5 Hard Drive</strong>: 320GB WD SATA II 5400 RPM 3Gbs 8MB Cache</li> <li><strong>Turbo Memory</strong>: No Turbo Memory-Windows Vista Support Only</li> <li><strong>Memory-DDR2 667</strong>: 4GB OCZ DDR2 667 PC2-5400 CL5 Dual Channel Kit</li> <li><strong>Wireless</strong>: Intel PRO Wireless 3945 802.11 a/b/g 11/54Mbps</li> <li><strong>Bluetooth</strong>: Integrated MS-6837D Bluetooth 2.0 + EDR USB Module</li> <li><strong>ExpressCard Remote</strong>: No Media Remote</li> <li><strong>NoteBook Cooler</strong>: Cooler Master Notebook Cooler Widscreen-USB Powered-Black</li> <li><strong>Operating System</strong>: No Operating System</li> <li><strong>Microsoft Office MLK</strong>: No Software</li> <li><strong>Warranty Options</strong>: 3 Year Parts-Lifetime Labor Warranty<em>-Lifetime Tech Support</em></li> <li><em><strong>Total</strong></em>: $1878.04</li>",D,w,X="Windows Vista 64bit",P,I,E=`Since I was a student when I purchased this fine machine, I could get Windows
Vista through the MSDNAA (Microsoft Develepers Network Academic Alliance). So I
got down to it and installed Vista 32bit, because I thought programs would be
more compatable. This turned out to be a mistake. Even though all of the
software and drivers seemed to work fine, after only a few short days, I ran
into problems (including a BSOD). I can't remember exactly what those problems
were, but I decided to switch to 64bit Vista. Now that I have experienced it,
Vista seems to have been made for 64bit architectures. Everything ran so much
faster and much more stable than its 32bit counterpart.`,H,v,z="Problems",A,x,K=`The only problem I encountered is that the software for the special buttons
(MSVCtrl) won't work under 64bit, even though they are 64bit versions. One other
mention is that you have to use the nVidia graphics drivers from MSI's web site,
as nVidia's version won't work properly.`,V,b,q="Fedora 10 x86_64",W,C,Y=`After installing Vista, I moved on to Linux. My first Linux distribution
("distro" for short) was RedHat 5, and I have been using RedHat or Fedora ever
since. Fedora 9 installed and worked fine, but I will only be covering Fedora 10
here, as it is the current release and is a LOT more stable. Fedora 10 is a
great distro, with a lot of features and software for just about anything. All
of the laptop's hardware works great in Fedora.`,B,_,Z=`After installing Fedora, I went straight to the nVidia web site to get drivers
for the graphics card. Since I am interested in programming, I downloaded the
CUDA-enabled drivers. (Note: you do not need any special nVidia drivers like
with Vista - just use the standard Linux drivers.) 
<a href="http://www.nvidia.com/object/cuda_home.html" title="">CUDA</a> is a technology,
created by nVidia, which allows programs to use the graphics card processor
(GPU) as if it were another CPU. These drivers were extremely stable, even
though they were a beta release. As of now, CUDA support is enabled, by default,
for all of nVidia&#39;s stable drivers (greater than version 1.80).`,G,M,J=`I was expecting to have a few problems with the wireless card, as Linux support
for wireless cards is a little limited, but it works great with the default
drivers. The integrated bluetooth works, as well.`,N,g,Q="Problems",O,S,ee=`There are a few problems with Linux in general on this Laptop. The on-board
sound chip is an Intel High-Definition audio chip, and Linux doesn't have the
proper drivers for this yet. The sound works, but when you plug in headphones,
the laptop's speakers do not mute as expected. (I am currently pouring over
Intel's driver guide for this chip, and may end up hacking the current driver to
fix this problem.) There are also no working drivers available for the
integrated webcam.`,R,k,te=`So that's it! This laptop is a great buy for anyone - whether you want to play
games or just want a nice big screen to type up your latest best-selling novel.`;return{c(){s=a("p"),s.textContent=c,m=d(),p=a("p"),p.innerHTML=r,h=d(),f=a("p"),f.innerHTML=$,L=d(),y=a("ul"),y.innerHTML=j,D=d(),w=a("h2"),w.textContent=X,P=d(),I=a("p"),I.textContent=E,H=d(),v=a("h3"),v.textContent=z,A=d(),x=a("p"),x.textContent=K,V=d(),b=a("h2"),b.textContent=q,W=d(),C=a("p"),C.textContent=Y,B=d(),_=a("p"),_.innerHTML=Z,G=d(),M=a("p"),M.textContent=J,N=d(),g=a("h3"),g.textContent=Q,O=d(),S=a("p"),S.textContent=ee,R=d(),k=a("p"),k.textContent=te,this.h()},l(e){s=i(e,"P",{["data-svelte-h"]:!0}),l(s)!=="svelte-xo3lk4"&&(s.textContent=c),m=u(e),p=i(e,"P",{["data-svelte-h"]:!0}),l(p)!=="svelte-17pjz9q"&&(p.innerHTML=r),h=u(e),f=i(e,"P",{["data-svelte-h"]:!0}),l(f)!=="svelte-9ei2jc"&&(f.innerHTML=$),L=u(e),y=i(e,"UL",{["data-svelte-h"]:!0}),l(y)!=="svelte-1sk3b3r"&&(y.innerHTML=j),D=u(e),w=i(e,"H2",{id:!0,["data-svelte-h"]:!0}),l(w)!=="svelte-cnbxuc"&&(w.textContent=X),P=u(e),I=i(e,"P",{["data-svelte-h"]:!0}),l(I)!=="svelte-1bae50o"&&(I.textContent=E),H=u(e),v=i(e,"H3",{id:!0,["data-svelte-h"]:!0}),l(v)!=="svelte-khkl90"&&(v.textContent=z),A=u(e),x=i(e,"P",{["data-svelte-h"]:!0}),l(x)!=="svelte-1b5hlns"&&(x.textContent=K),V=u(e),b=i(e,"H2",{id:!0,["data-svelte-h"]:!0}),l(b)!=="svelte-xut5lk"&&(b.textContent=q),W=u(e),C=i(e,"P",{["data-svelte-h"]:!0}),l(C)!=="svelte-o9m5kc"&&(C.textContent=Y),B=u(e),_=i(e,"P",{["data-svelte-h"]:!0}),l(_)!=="svelte-1c66vap"&&(_.innerHTML=Z),G=u(e),M=i(e,"P",{["data-svelte-h"]:!0}),l(M)!=="svelte-1evaffe"&&(M.textContent=J),N=u(e),g=i(e,"H3",{id:!0,["data-svelte-h"]:!0}),l(g)!=="svelte-wbcwmi"&&(g.textContent=Q),O=u(e),S=i(e,"P",{["data-svelte-h"]:!0}),l(S)!=="svelte-1th0a96"&&(S.textContent=ee),R=u(e),k=i(e,"P",{["data-svelte-h"]:!0}),l(k)!=="svelte-e1nhrx"&&(k.textContent=te),this.h()},h(){F(w,"id","windows-vista-64bit"),F(v,"id","problems"),F(b,"id","fedora-10-x86_64"),F(g,"id","problems-1")},m(e,t){n(e,s,t),n(e,m,t),n(e,p,t),n(e,h,t),n(e,f,t),n(e,L,t),n(e,y,t),n(e,D,t),n(e,w,t),n(e,P,t),n(e,I,t),n(e,H,t),n(e,v,t),n(e,A,t),n(e,x,t),n(e,V,t),n(e,b,t),n(e,W,t),n(e,C,t),n(e,B,t),n(e,_,t),n(e,G,t),n(e,M,t),n(e,N,t),n(e,g,t),n(e,O,t),n(e,S,t),n(e,R,t),n(e,k,t)},p:ae,d(e){e&&(o(s),o(m),o(p),o(h),o(f),o(L),o(y),o(D),o(w),o(P),o(I),o(H),o(v),o(A),o(x),o(V),o(b),o(W),o(C),o(B),o(_),o(G),o(M),o(N),o(g),o(O),o(S),o(R),o(k))}}}function be(T){let s,c;const m=[T[0],se];let p={$$slots:{default:[ve]},$$scope:{ctx:T}};for(let r=0;r<m.length;r+=1)p=U(p,m[r]);return s=new we({props:p}),{c(){de(s.$$.fragment)},l(r){ue(s.$$.fragment,r)},m(r,h){he(s,r,h),c=!0},p(r,[h]){const f=h&1?ce(m,[h&1&&oe(r[0]),h&0&&oe(se)]):{};h&2&&(f.$$scope={dirty:h,ctx:r}),s.$set(f)},i(r){c||(pe(s.$$.fragment,r),c=!0)},o(r){me(s.$$.fragment,r),c=!1},d(r){fe(s,r)}}}const se={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Windows vs. Linux on MSI GX700",description:"Comparing Windows and Linux on MSI GX700",excerpt:"I try to buy MSI products whenever possible",cover:!1,coverImage:"/images/GSoC-logo-horizontal-800.png",coverAlt:"RBE Logo",categories:["linux"],tags:["Fedora","Hardware"],created_at:"2009-03-21 9:32",updated_at:"2009-03-21 9:32",preview:`When I built my desktop/server in 2005, I used as many MSI (Micro-Satr
International) parts as I could find. They were a little more expensive, but
some trusted friends told me MSI was the way to go. I have been overly impressed
with the hardware...`,previewHtml:"<p>When I built my desktop/server in 2005, I used as many MSI (Micro-Satr International) parts as I could find. They were a little more expensive, but some trusted friends told me MSI was the way to go. I have been overly impressed with the hardware, es...</p>",textContent:`When I built my desktop/server in 2005, I used as many MSI (Micro-Satr
International) parts as I could find. They were a little more expensive, but
some trusted friends told me MSI was the way to go. I have been overly impressed
with the hardware, especially after an uptime of 500+ days. The...`};function ge(T,s,c){return T.$$set=m=>{c(0,s=U(U({},s),ne(m)))},s=ne(s),[s]}class _e extends ie{constructor(s){super(),le(this,s,ge,be,re,{})}}export{_e as default,se as metadata};
