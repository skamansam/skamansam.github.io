import{s as H,r as b,B as M,f,a as k,g,C as v,c as y,h as T,d as o,j as A,i,y as R}from"./scheduler.28ea7184.js";import{S as B,i as E,b as F,d as L,m as O,a as Z,t as q,e as G}from"./index.8021bc93.js";import{g as U,a as j}from"./spread.8a54911c.js";import{P as V}from"./post.d4e0232c.js";function z(h){let t,c=`I have been doing a lot of importing of photos on my photo site, and have noticed some images do not display properly.
Since I love ImageMagick so much, I set up  my gallery to use it. However, there appears to be a check in the Coppermine
software that aborts reading the file upon errors in the image. So I typed the command "display imagename.jpg" for some
of the files that did not import properly, and everything appeared to be fine. But I did notice something peculiar about
the images: they were taken with my phone's camera and all had errors printed out when I tried to open them, but seem to
display correctly.`,r,p,a=`Since these files could be opened by ImageMagick, I figured if I saved them again, I would be able to fix the errors. I
ran "convert image1.jpg image1.jpg", got the familiar errors printed and opened the file again. This time, no errors!
But since I have a  lot of files I want to import, I needed a way to convert a bunch at once.`,s,l,x=`I created a neat little Perl script to do just that. All you need is ImageMagick and perl installed. This script does
not rely on PerlMagick, as it runs the convert command. So here it is:`,_,u,S=`<code class="language-perl"><span class="token comment">#!/usr/bin/perl</span>

processFile<span class="token punctuation">(</span><span class="token string">"$_"</span><span class="token punctuation">)</span> <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">@ARGV</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">#recursively fix images</span>
<span class="token keyword">sub</span> <span class="token function">processFile</span> <span class="token punctuation">&#123;</span>
   <span class="token keyword">my</span> <span class="token variable">$file</span><span class="token operator">=</span>shift<span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">-d</span> <span class="token string">"$file"</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token punctuation">(</span> <span class="token keyword">do</span><span class="token punctuation">&#123;</span> processFile<span class="token punctuation">(</span><span class="token string">"$_"</span><span class="token punctuation">)</span> <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token string">"$file"</span><span class="token operator">/</span><span class="token operator">*</span><span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">&#125;</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token string">&#96;convert "$file" "$file"&#96;</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`,I,m,C=`I saved this file as $HOME/bin/fiximage. All you need to do to run it is type "fiximage file1 file2 directory1 directory2 …".
One other thing to note is that this script has been purposefully shortened. I like to use the ternary operator whenever
possible in my scripts for just this reason. As such, it does not print anything to the command line itself, but if the
convert command encounters an error, that will be printed.`,w,d,$="I hope you have found this article useful!";return{c(){t=f("p"),t.textContent=c,r=k(),p=f("p"),p.textContent=a,s=k(),l=f("p"),l.textContent=x,_=k(),u=f("pre"),I=k(),m=f("p"),m.textContent=C,w=k(),d=f("p"),d.textContent=$,this.h()},l(e){t=g(e,"P",{["data-svelte-h"]:!0}),v(t)!=="svelte-2hpfjo"&&(t.textContent=c),r=y(e),p=g(e,"P",{["data-svelte-h"]:!0}),v(p)!=="svelte-67mcmj"&&(p.textContent=a),s=y(e),l=g(e,"P",{["data-svelte-h"]:!0}),v(l)!=="svelte-1f2a69y"&&(l.textContent=x),_=y(e),u=g(e,"PRE",{class:!0});var n=T(u);n.forEach(o),I=y(e),m=g(e,"P",{["data-svelte-h"]:!0}),v(m)!=="svelte-1l5p1y"&&(m.textContent=C),w=y(e),d=g(e,"P",{["data-svelte-h"]:!0}),v(d)!=="svelte-14kd5jv"&&(d.textContent=$),this.h()},h(){A(u,"class","language-perl")},m(e,n){i(e,t,n),i(e,r,n),i(e,p,n),i(e,s,n),i(e,l,n),i(e,_,n),i(e,u,n),u.innerHTML=S,i(e,I,n),i(e,m,n),i(e,w,n),i(e,d,n)},p:R,d(e){e&&(o(t),o(r),o(p),o(s),o(l),o(_),o(u),o(I),o(m),o(w),o(d))}}}function D(h){let t,c;const r=[h[0],P];let p={$$slots:{default:[z]},$$scope:{ctx:h}};for(let a=0;a<r.length;a+=1)p=b(p,r[a]);return t=new V({props:p}),{c(){F(t.$$.fragment)},l(a){L(t.$$.fragment,a)},m(a,s){O(t,a,s),c=!0},p(a,[s]){const l=s&1?U(r,[s&1&&j(a[0]),s&0&&j(P)]):{};s&2&&(l.$$scope={dirty:s,ctx:a}),t.$set(l)},i(a){c||(Z(t.$$.fragment,a),c=!0)},o(a){q(t.$$.fragment,a),c=!1},d(a){G(t,a)}}}const P={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"How To Repair Images with ImageMagick",description:"Using ImageMagick to repair corrupted images",excerpt:"the images [...] were taken with my phone's camera and all had errors",cover:!1,coverImage:!1,coverAlt:"RBE Logo",categories:["web-development"],tags:["Coppermine","Image Repair"],created_at:"2009-06-15T11:23:00.000Z",updated_at:"2009-06-15T11:23:00.000Z",preview:`I have been doing a lot of importing of photos on my photo site, and have noticed some images do not display properly. 
Since I love ImageMagick so much, I set up  my gallery to use it. However, there appears to be a check in the Coppermine...`,previewHtml:"<p>I have been doing a lot of importing of photos on my photo site, and have noticed some images do not display properly. Since I love ImageMagick so much, I set up my gallery to use it. However, there appears to be a check in the Coppermine software th...</p>",textContent:`I have been doing a lot of importing of photos on my photo site, and have noticed some images do not display properly. 
Since I love ImageMagick so much, I set up  my gallery to use it. However, there appears to be a check in the Coppermine 
software that aborts reading the file upon errors in the...`};function J(h,t,c){return h.$$set=r=>{c(0,t=b(b({},t),M(r)))},t=M(t),[t]}class X extends B{constructor(t){super(),E(this,t,J,D,H,{})}}export{X as default,P as metadata};
