import{S as O,i as Q,s as R,k as S,q as $,a as j,e as L,l as w,m as B,r as b,h as m,c as P,b as p,G as g,g as d,f as H,d as v,J as A,y as J,z as F,A as I,B as K,v as M,u as D,n as E}from"../chunks/index.8495bde4.js";import{C as U,B as V}from"../chunks/Card.a73e53d4.js";function N(i,e,n){const t=i.slice();return t[1]=e[n],t}function C(i,e,n){const t=i.slice();return t[7]=e[n],t}function G(i,e,n){const t=i.slice();return t[4]=e[n],t}function q(i){let e,n;return{c(){e=S("p"),n=$("There are no projects entered here. See my Github Page or my Portfolio for current projects.")},l(t){e=w(t,"P",{});var a=B(e);n=b(a,"There are no projects entered here. See my Github Page or my Portfolio for current projects."),a.forEach(m)},m(t,a){p(t,e,a),g(e,n)},d(t){t&&m(e)}}}function W(i){let e=i[1].meta.excerpt+"",n,t;return{c(){n=$(e),t=j()},l(a){n=b(a,e),t=P(a)},m(a,o){p(a,n,o),p(a,t,o)},p(a,o){o&1&&e!==(e=a[1].meta.excerpt+"")&&D(n,e)},d(a){a&&m(n),a&&m(t)}}}function T(i){let e,n;return e=new V({props:{text:i[7],to:"/categories/"+i[7]}}),{c(){J(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){I(e,t,a),n=!0},p(t,a){const o={};a&1&&(o.text=t[7]),a&1&&(o.to="/categories/"+t[7]),e.$set(o)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function X(i){var h;let e,n,t,a=((h=i[1].meta)==null?void 0:h.categories)||[],o=[];for(let r=0;r<a.length;r+=1)o[r]=T(C(i,a,r));const _=r=>v(o[r],1,1,()=>{o[r]=null});return{c(){e=S("span");for(let r=0;r<o.length;r+=1)o[r].c();n=j(),this.h()},l(r){e=w(r,"SPAN",{slot:!0});var s=B(e);for(let u=0;u<o.length;u+=1)o[u].l(s);n=P(s),s.forEach(m),this.h()},h(){E(e,"slot","badges")},m(r,s){p(r,e,s);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null);g(e,n),t=!0},p(r,s){var u;if(s&1){a=((u=r[1].meta)==null?void 0:u.categories)||[];let l;for(l=0;l<a.length;l+=1){const f=C(r,a,l);o[l]?(o[l].p(f,s),d(o[l],1)):(o[l]=T(f),o[l].c(),d(o[l],1),o[l].m(e,n))}for(M(),l=a.length;l<o.length;l+=1)_(l);H()}},i(r){if(!t){for(let s=0;s<a.length;s+=1)d(o[s]);t=!0}},o(r){o=o.filter(Boolean);for(let s=0;s<o.length;s+=1)v(o[s]);t=!1},d(r){r&&m(e),A(o,r)}}}function y(i){let e,n,t=i[4]+"",a,o;return{c(){e=S("a"),n=$("#"),a=$(t),this.h()},l(_){e=w(_,"A",{href:!0});var h=B(e);n=b(h,"#"),a=b(h,t),h.forEach(m),this.h()},h(){E(e,"href",o="/tags/"+i[4])},m(_,h){p(_,e,h),g(e,n),g(e,a)},p(_,h){h&1&&t!==(t=_[4]+"")&&D(a,t),h&1&&o!==(o="/tags/"+_[4])&&E(e,"href",o)},d(_){_&&m(e)}}}function Y(i){var s;let e,n,t=new Date(i[1].meta.created_at).toLocaleString()+"",a,o,_,h=((s=i[1].meta)==null?void 0:s.tags)||[],r=[];for(let u=0;u<h.length;u+=1)r[u]=y(G(i,h,u));return{c(){e=S("span"),n=$("Published "),a=$(t),o=j();for(let u=0;u<r.length;u+=1)r[u].c();_=j(),this.h()},l(u){e=w(u,"SPAN",{slot:!0});var l=B(e);n=b(l,"Published "),a=b(l,t),o=P(l);for(let f=0;f<r.length;f+=1)r[f].l(l);_=P(l),l.forEach(m),this.h()},h(){E(e,"slot","metadata")},m(u,l){p(u,e,l),g(e,n),g(e,a),g(e,o);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(e,null);g(e,_)},p(u,l){var f;if(l&1&&t!==(t=new Date(u[1].meta.created_at).toLocaleString()+"")&&D(a,t),l&1){h=((f=u[1].meta)==null?void 0:f.tags)||[];let c;for(c=0;c<h.length;c+=1){const k=G(u,h,c);r[c]?r[c].p(k,l):(r[c]=y(k),r[c].c(),r[c].m(e,_))}for(;c<r.length;c+=1)r[c].d(1);r.length=h.length}},d(u){u&&m(e),A(r,u)}}}function z(i){let e,n;return e=new U({props:{title:i[1].meta.title,to:i[1].path,subtitle:i[1].meta.description,metadata:"Published "+new Date(i[1].meta.created_at).toLocaleString(),class:"my-3 rounded-xl border p-2",$$slots:{metadata:[Y],badges:[X],default:[W]},$$scope:{ctx:i}}}),{c(){J(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,a){I(e,t,a),n=!0},p(t,a){const o={};a&1&&(o.title=t[1].meta.title),a&1&&(o.to=t[1].path),a&1&&(o.subtitle=t[1].meta.description),a&1&&(o.metadata="Published "+new Date(t[1].meta.created_at).toLocaleString()),a&1025&&(o.$$scope={dirty:a,ctx:t}),e.$set(o)},i(t){n||(d(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){K(e,t)}}}function Z(i){let e,n,t,a,o,_,h=i[0].length<1&&q(),r=i[0],s=[];for(let l=0;l<r.length;l+=1)s[l]=z(N(i,r,l));const u=l=>v(s[l],1,1,()=>{s[l]=null});return{c(){e=S("h1"),n=$("Projects"),t=j(),h&&h.c(),a=j();for(let l=0;l<s.length;l+=1)s[l].c();o=L()},l(l){e=w(l,"H1",{});var f=B(e);n=b(f,"Projects"),f.forEach(m),t=P(l),h&&h.l(l),a=P(l);for(let c=0;c<s.length;c+=1)s[c].l(l);o=L()},m(l,f){p(l,e,f),g(e,n),p(l,t,f),h&&h.m(l,f),p(l,a,f);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(l,f);p(l,o,f),_=!0},p(l,[f]){if(l[0].length<1?h||(h=q(),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null),f&1){r=l[0];let c;for(c=0;c<r.length;c+=1){const k=N(l,r,c);s[c]?(s[c].p(k,f),d(s[c],1)):(s[c]=z(k),s[c].c(),d(s[c],1),s[c].m(o.parentNode,o))}for(M(),c=r.length;c<s.length;c+=1)u(c);H()}},i(l){if(!_){for(let f=0;f<r.length;f+=1)d(s[f]);_=!0}},o(l){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)v(s[f]);_=!1},d(l){l&&m(e),l&&m(t),h&&h.d(l),l&&m(a),A(s,l),l&&m(o)}}}const le=async({fetch:i})=>({props:{projects:await(await i("/api/projects.json")).json()}});function x(i,e,n){let{projects:t=[]}=e;return i.$$set=a=>{"projects"in a&&n(0,t=a.projects)},[t]}class ae extends O{constructor(e){super(),Q(this,e,x,Z,R,{projects:0})}}export{ae as default,le as load};
