import{Y as ge,S as de,i as _e,s as Ee,e as f,c as h,b as l,g as te,d as c,t as q,a as U,h as G,F as i,j as Z,G as be,k as W,L as ve,m as X,H as ye,I as Ae,J as we,r as Te,p as Ie,T as Me,w as Se}from"./index-1458cd2c.js";const Re=()=>{const a=ge("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session,updated:a.updated}},ke={subscribe(a){return Re().page.subscribe(a)}};function me(a,e,o){const s=a.slice();return s[25]=e[o],s}function fe(a){let e,o,s;return{c(){e=f("meta"),this.h()},l(u){e=h(u,"META",{property:!0,content:!0}),this.h()},h(){l(e,"property",o=a[25].property),l(e,"content",s=a[25].content)},m(u,m){te(u,e,m)},p(u,m){m&32&&o!==(o=u[25].property)&&l(e,"property",o),m&32&&s!==(s=u[25].content)&&l(e,"content",s)},d(u){u&&c(e)}}}function he(a){let e,o,s=new Date(a[6]||null).toLocaleString()+"",u;return{c(){e=f("p"),o=q("last updated: "),u=q(s),this.h()},l(m){e=h(m,"P",{class:!0});var _=U(e);o=G(_,"last updated: "),u=G(_,s),_.forEach(c),this.h()},h(){l(e,"class","date updated_at")},m(m,_){te(m,e,_),i(e,o),i(e,u)},p(m,_){_&64&&s!==(s=new Date(m[6]||null).toLocaleString()+"")&&Z(u,s)},d(m){m&&c(e)}}}function Le(a){let e,o,s,u,m,_,N,T,I,P,B,M,j,S,F,R,J,D,A,v,C,w,k,L,z,O=new Date(a[7]||null).toLocaleString()+"",V,n,x,Y,ne,$,ae,K,ee,le,g,Q=a[5],E=[];for(let t=0;t<Q.length;t+=1)E[t]=fe(me(a,Q,t));document.title=F=a[2]+" | RBE";let b=a[6]!==a[7]&&he(a);const oe=a[23].default,y=be(oe,a,a[22],null);return{c(){for(let t=0;t<E.length;t+=1)E[t].c();e=f("meta"),o=f("meta"),s=f("meta"),u=f("meta"),m=f("meta"),_=f("meta"),T=f("meta"),I=f("meta"),P=f("meta"),B=f("meta"),M=f("meta"),S=f("meta"),R=f("meta"),J=W(),D=f("main"),A=f("article"),v=f("hgroup"),C=f("h1"),w=q(a[2]),k=W(),L=f("p"),z=q("posted on: "),V=q(O),n=W(),b&&b.c(),x=W(),Y=f("p"),ne=q("by: "),$=q(a[3]),ae=W(),K=f("div"),ee=q(a[4]),le=W(),y&&y.c(),this.h()},l(t){const r=ve('[data-svelte="svelte-197a3ph"]',document.head);for(let ce=0;ce<E.length;ce+=1)E[ce].l(r);e=h(r,"META",{property:!0,content:!0}),o=h(r,"META",{property:!0,content:!0}),s=h(r,"META",{property:!0,content:!0}),u=h(r,"META",{property:!0,content:!0}),m=h(r,"META",{property:!0,content:!0}),_=h(r,"META",{property:!0,content:!0}),T=h(r,"META",{property:!0,content:!0}),I=h(r,"META",{property:!0,content:!0}),P=h(r,"META",{name:!0,content:!0}),B=h(r,"META",{property:!0,content:!0}),M=h(r,"META",{name:!0,content:!0}),S=h(r,"META",{name:!0,content:!0}),R=h(r,"META",{name:!0,content:!0}),r.forEach(c),J=X(t),D=h(t,"MAIN",{});var d=U(D);A=h(d,"ARTICLE",{});var p=U(A);v=h(p,"HGROUP",{});var H=U(v);C=h(H,"H1",{});var ue=U(C);w=G(ue,a[2]),ue.forEach(c),k=X(H),L=h(H,"P",{class:!0});var re=U(L);z=G(re,"posted on: "),V=G(re,O),re.forEach(c),n=X(H),b&&b.l(H),x=X(H),Y=h(H,"P",{class:!0});var ie=U(Y);ne=G(ie,"by: "),$=G(ie,a[3]),ie.forEach(c),H.forEach(c),ae=X(p),K=h(p,"DIV",{class:!0});var se=U(K);ee=G(se,a[4]),se.forEach(c),le=X(p),y&&y.l(p),p.forEach(c),d.forEach(c),this.h()},h(){l(e,"property","og:site_name"),l(e,"content","Rude Boy Solutions"),l(o,"property","article:published_time"),l(o,"content",a[6]),l(s,"property","article:author"),l(s,"content",a[3]),l(u,"property","og:url"),l(u,"content",a[8]),l(m,"property","og:type"),l(m,"content","article"),l(_,"property","og:title"),l(_,"content",N=a[2]+" - RBE"),l(T,"property","og:image"),l(T,"content",a[0]),l(I,"property","og:description"),l(I,"content",a[4]),l(P,"name","twitter:card"),l(P,"content",a[9]),l(B,"property","twitter:site"),l(B,"content","@skamansam"),l(M,"name","twitter:creator"),l(M,"content",j="@"+a[3]),l(S,"name","twitter:image"),l(S,"content",a[1]),l(R,"name","description"),l(R,"content",a[4]),l(L,"class","date created_at"),l(Y,"class","author"),l(K,"class","description hidden")},m(t,r){for(let d=0;d<E.length;d+=1)E[d].m(document.head,null);i(document.head,e),i(document.head,o),i(document.head,s),i(document.head,u),i(document.head,m),i(document.head,_),i(document.head,T),i(document.head,I),i(document.head,P),i(document.head,B),i(document.head,M),i(document.head,S),i(document.head,R),te(t,J,r),te(t,D,r),i(D,A),i(A,v),i(v,C),i(C,w),i(v,k),i(v,L),i(L,z),i(L,V),i(v,n),b&&b.m(v,null),i(v,x),i(v,Y),i(Y,ne),i(Y,$),i(A,ae),i(A,K),i(K,ee),i(A,le),y&&y.m(A,null),g=!0},p(t,[r]){if(r&32){Q=t[5];let d;for(d=0;d<Q.length;d+=1){const p=me(t,Q,d);E[d]?E[d].p(p,r):(E[d]=fe(p),E[d].c(),E[d].m(e.parentNode,e))}for(;d<E.length;d+=1)E[d].d(1);E.length=Q.length}(!g||r&64)&&l(o,"content",t[6]),(!g||r&8)&&l(s,"content",t[3]),(!g||r&256)&&l(u,"content",t[8]),(!g||r&4&&N!==(N=t[2]+" - RBE"))&&l(_,"content",N),(!g||r&1)&&l(T,"content",t[0]),(!g||r&16)&&l(I,"content",t[4]),(!g||r&8&&j!==(j="@"+t[3]))&&l(M,"content",j),(!g||r&2)&&l(S,"content",t[1]),(!g||r&4)&&F!==(F=t[2]+" | RBE")&&(document.title=F),(!g||r&16)&&l(R,"content",t[4]),(!g||r&4)&&Z(w,t[2]),(!g||r&128)&&O!==(O=new Date(t[7]||null).toLocaleString()+"")&&Z(V,O),t[6]!==t[7]?b?b.p(t,r):(b=he(t),b.c(),b.m(v,x)):b&&(b.d(1),b=null),(!g||r&8)&&Z($,t[3]),(!g||r&16)&&Z(ee,t[4]),y&&y.p&&(!g||r&4194304)&&ye(y,oe,t,t[22],g?we(oe,t[22],r,null):Ae(t[22]),null)},i(t){g||(Te(y,t),g=!0)},o(t){Ie(y,t),g=!1},d(t){Me(E,t),c(e),c(o),c(s),c(u),c(m),c(_),c(T),c(I),c(P),c(B),c(M),c(S),c(R),t&&c(J),t&&c(D),b&&b.d(),y&&y.d(t)}}}function Pe(a,e,o){let{$$slots:s={},$$scope:u}=e,{title:m=""}=e,{author:_=""}=e,{lastmod:N=""}=e,{description:T=""}=e,{meta:I=[]}=e,{updated_at:P=""}=e,{created_at:B=""}=e,{tags:M=[]}=e,{categories:j=[]}=e,{coverAlt:S=""}=e,{coverImage:F=""}=e,{excerpt:R=""}=e,{comments:J=""}=e,{view:D=""}=e,{layout:A=""}=e,{lang:v=""}=e,{cover:C=null}=e,{opengraphImage:w=null}=e,{twitterImage:k=null}=e;k||(k=w||"/rbe_logo.gif"),w||(w=k||"/rbe_logo.gif");let L="",z="",O=w||k||C?"summary_large_image":"summary";Se(()=>{z=window.location.href,o(8,L=z+ke.path)});let{headings:V=[]}=e;return a.$$set=n=>{"title"in n&&o(2,m=n.title),"author"in n&&o(3,_=n.author),"lastmod"in n&&o(10,N=n.lastmod),"description"in n&&o(4,T=n.description),"meta"in n&&o(5,I=n.meta),"updated_at"in n&&o(6,P=n.updated_at),"created_at"in n&&o(7,B=n.created_at),"tags"in n&&o(11,M=n.tags),"categories"in n&&o(12,j=n.categories),"coverAlt"in n&&o(13,S=n.coverAlt),"coverImage"in n&&o(14,F=n.coverImage),"excerpt"in n&&o(15,R=n.excerpt),"comments"in n&&o(16,J=n.comments),"view"in n&&o(17,D=n.view),"layout"in n&&o(18,A=n.layout),"lang"in n&&o(19,v=n.lang),"cover"in n&&o(20,C=n.cover),"opengraphImage"in n&&o(0,w=n.opengraphImage),"twitterImage"in n&&o(1,k=n.twitterImage),"headings"in n&&o(21,V=n.headings),"$$scope"in n&&o(22,u=n.$$scope)},[w,k,m,_,T,I,P,B,L,O,N,M,j,S,F,R,J,D,A,v,C,V,u,s]}class De extends de{constructor(e){super(),_e(this,e,Pe,Le,Ee,{title:2,author:3,lastmod:10,description:4,meta:5,updated_at:6,created_at:7,tags:11,categories:12,coverAlt:13,coverImage:14,excerpt:15,comments:16,view:17,layout:18,lang:19,cover:20,opengraphImage:0,twitterImage:1,headings:21})}}export{De as P};