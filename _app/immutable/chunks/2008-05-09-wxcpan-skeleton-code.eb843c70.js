import{s as m,r,B as d,f,g as h,C as _,i as p,y as g,d as y}from"./scheduler.28ea7184.js";import{S as v,i as x,b as w,d as b,m as C,a as I,t as P,e as $}from"./index.8021bc93.js";import{g as k,a as c}from"./spread.8a54911c.js";import{P as A}from"./post.d4e0232c.js";function S(o){let e,s=`I have started doing heavy-duty research into wxPerl, and have created a bit of
skeleton code for subclasses, as well as cpan-ready file layout. I am starting
on the documentation of the classes I am using (mainly subclasses of wxTreeCtrl
to display the data).  At this rate, my documentation will be mostly finished
before I even have one line of handwritten code!`;return{c(){e=f("p"),e.textContent=s},l(a){e=h(a,"P",{["data-svelte-h"]:!0}),_(e)!=="svelte-bxlkmc"&&(e.textContent=s)},m(a,l){p(a,e,l)},p:g,d(a){a&&y(e)}}}function T(o){let e,s;const a=[o[0],u];let l={$$slots:{default:[S]},$$scope:{ctx:o}};for(let t=0;t<a.length;t+=1)l=r(l,a[t]);return e=new A({props:l}),{c(){w(e.$$.fragment)},l(t){b(e.$$.fragment,t)},m(t,n){C(e,t,n),s=!0},p(t,[n]){const i=n&1?k(a,[n&1&&c(t[0]),n&0&&c(u)]):{};n&2&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){s||(I(e.$$.fragment,t),s=!0)},o(t){P(e.$$.fragment,t),s=!1},d(t){$(e,t)}}}const u={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"wxCPAN Skeleton Code",description:"wxCPAN is underway!",excerpt:"I have started doing heavy-duty research into wxPerl",cover:!1,coverImage:"/images/GSoC-logo-horizontal-800.png",coverAlt:"RBE Logo",categories:["perl"],tags:["gSoC"],created_at:"2008-05-09 14:40",updated_at:"2008-05-09 14:40",preview:`I have started doing heavy-duty research into wxPerl, and have created a bit of 
skeleton code for subclasses, as well as cpan-ready file layout. I am starting 
on the documentation of the classes I am using (mainly subclasses of wxTreeCtrl 
to...`,previewHtml:"<p>I have started doing heavy-duty research into wxPerl, and have created a bit of skeleton code for subclasses, as well as cpan-ready file layout. I am starting on the documentation of the classes I am using (mainly subclasses of wxTreeCtrl to display ...</p>",textContent:`I have started doing heavy-duty research into wxPerl, and have created a bit of 
skeleton code for subclasses, as well as cpan-ready file layout. I am starting 
on the documentation of the classes I am using (mainly subclasses of wxTreeCtrl 
to display the data).  At this rate, my documentation...`};function B(o,e,s){return o.$$set=a=>{s(0,e=r(r({},e),d(a)))},e=d(e),[e]}class E extends v{constructor(e){super(),x(this,e,B,T,m,{})}}export{E as default,u as metadata};
