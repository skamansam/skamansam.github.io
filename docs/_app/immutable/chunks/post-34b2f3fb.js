import{W as ge,S as Ee,i as be,s as ve,e as f,c as h,b as l,g as ne,d as c,t as p,a as U,h as q,F as i,j as Z,P as ye,k as X,U as we,m as Y,Q as Ae,R as Te,T as Me,r as Ie,p as Re,L as Se,w as Pe}from"./index-f095e7d9.js";const ke=()=>{const n=ge("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session,updated:n.updated}},Le={subscribe(n){return ke().page.subscribe(n)}};function he(n,e,o){const s=n.slice();return s[25]=e[o],s}function _e(n){let e,o,s;return{c(){e=f("meta"),this.h()},l(u){e=h(u,"META",{property:!0,content:!0}),this.h()},h(){l(e,"property",o=n[25].property),l(e,"content",s=n[25].content)},m(u,m){ne(u,e,m)},p(u,m){m&32&&o!==(o=u[25].property)&&l(e,"property",o),m&32&&s!==(s=u[25].content)&&l(e,"content",s)},d(u){u&&c(e)}}}function de(n){let e,o,s=new Date(n[6]||null).toLocaleString()+"",u;return{c(){e=f("p"),o=p("last updated: "),u=p(s),this.h()},l(m){e=h(m,"P",{class:!0});var E=U(e);o=q(E,"last updated: "),u=q(E,s),E.forEach(c),this.h()},h(){l(e,"class","date updated_at")},m(m,E){ne(m,e,E),i(e,o),i(e,u)},p(m,E){E&64&&s!==(s=new Date(m[6]||null).toLocaleString()+"")&&Z(u,s)},d(m){m&&c(e)}}}function Be(n){let e,o,s,u,m,E,H,T,N,M,P,k,I,j,R,F,G,S,O,L,y,d,A,Q,W,B,z,a=new Date(n[7]||null).toLocaleString()+"",x,ae,$,V,le,ee,oe,J,te,re,_,K=n[5],b=[];for(let t=0;t<K.length;t+=1)b[t]=_e(he(n,K,t));document.title=G=n[2]+" | RBE";let v=n[6]!==n[7]&&de(n);const ie=n[23].default,w=ye(ie,n,n[22],null);return{c(){for(let t=0;t<b.length;t+=1)b[t].c();e=f("meta"),o=f("meta"),s=f("meta"),u=f("meta"),m=f("meta"),E=f("meta"),T=f("meta"),M=f("meta"),P=f("meta"),k=f("meta"),I=f("meta"),R=f("meta"),S=f("meta"),O=X(),L=f("main"),y=f("article"),d=f("hgroup"),A=f("h1"),Q=p(n[2]),W=X(),B=f("p"),z=p("posted on: "),x=p(a),ae=X(),v&&v.c(),$=X(),V=f("p"),le=p("by: "),ee=p(n[3]),oe=X(),J=f("div"),te=p(n[4]),re=X(),w&&w.c(),this.h()},l(t){const r=we('[data-svelte="svelte-gwb5t8"]',document.head);for(let se=0;se<b.length;se+=1)b[se].l(r);e=h(r,"META",{property:!0,content:!0}),o=h(r,"META",{property:!0,content:!0}),s=h(r,"META",{property:!0,content:!0}),u=h(r,"META",{property:!0,content:!0}),m=h(r,"META",{property:!0,content:!0}),E=h(r,"META",{property:!0,content:!0}),T=h(r,"META",{property:!0,content:!0}),M=h(r,"META",{property:!0,content:!0}),P=h(r,"META",{name:!0,content:!0}),k=h(r,"META",{property:!0,content:!0}),I=h(r,"META",{name:!0,content:!0}),R=h(r,"META",{name:!0,content:!0}),S=h(r,"META",{name:!0,content:!0}),r.forEach(c),O=Y(t),L=h(t,"MAIN",{});var g=U(L);y=h(g,"ARTICLE",{});var D=U(y);d=h(D,"HGROUP",{});var C=U(d);A=h(C,"H1",{});var me=U(A);Q=q(me,n[2]),me.forEach(c),W=Y(C),B=h(C,"P",{class:!0});var ce=U(B);z=q(ce,"posted on: "),x=q(ce,a),ce.forEach(c),ae=Y(C),v&&v.l(C),$=Y(C),V=h(C,"P",{class:!0});var ue=U(V);le=q(ue,"by: "),ee=q(ue,n[3]),ue.forEach(c),C.forEach(c),oe=Y(D),J=h(D,"DIV",{class:!0});var fe=U(J);te=q(fe,n[4]),fe.forEach(c),re=Y(D),w&&w.l(D),D.forEach(c),g.forEach(c),this.h()},h(){l(e,"property","og:site_name"),l(e,"content","Rude Boy Solutions"),l(o,"property","article:published_time"),l(o,"content",n[6]),l(s,"property","article:author"),l(s,"content",n[3]),l(u,"property","og:url"),l(u,"content",n[9]),l(m,"property","og:type"),l(m,"content","article"),l(E,"property","og:title"),l(E,"content",H=n[2]+" - RBE"),l(T,"property","og:image"),l(T,"content",N=n[0]||n[1]||n[8]),l(M,"property","og:description"),l(M,"content",n[4]),l(P,"name","twitter:card"),l(P,"content",n[10]),l(k,"property","twitter:site"),l(k,"content","@skamansam"),l(I,"name","twitter:creator"),l(I,"content",j="@"+n[3]),l(R,"name","twitter:image"),l(R,"content",F=n[1]||n[0]||n[8]),l(S,"name","description"),l(S,"content",n[4]),l(B,"class","date created_at"),l(V,"class","author"),l(J,"class","description hidden")},m(t,r){for(let g=0;g<b.length;g+=1)b[g].m(document.head,null);i(document.head,e),i(document.head,o),i(document.head,s),i(document.head,u),i(document.head,m),i(document.head,E),i(document.head,T),i(document.head,M),i(document.head,P),i(document.head,k),i(document.head,I),i(document.head,R),i(document.head,S),ne(t,O,r),ne(t,L,r),i(L,y),i(y,d),i(d,A),i(A,Q),i(d,W),i(d,B),i(B,z),i(B,x),i(d,ae),v&&v.m(d,null),i(d,$),i(d,V),i(V,le),i(V,ee),i(y,oe),i(y,J),i(J,te),i(y,re),w&&w.m(y,null),_=!0},p(t,[r]){if(r&32){K=t[5];let g;for(g=0;g<K.length;g+=1){const D=he(t,K,g);b[g]?b[g].p(D,r):(b[g]=_e(D),b[g].c(),b[g].m(e.parentNode,e))}for(;g<b.length;g+=1)b[g].d(1);b.length=K.length}(!_||r&64)&&l(o,"content",t[6]),(!_||r&8)&&l(s,"content",t[3]),(!_||r&512)&&l(u,"content",t[9]),(!_||r&4&&H!==(H=t[2]+" - RBE"))&&l(E,"content",H),(!_||r&259&&N!==(N=t[0]||t[1]||t[8]))&&l(T,"content",N),(!_||r&16)&&l(M,"content",t[4]),(!_||r&8&&j!==(j="@"+t[3]))&&l(I,"content",j),(!_||r&259&&F!==(F=t[1]||t[0]||t[8]))&&l(R,"content",F),(!_||r&4)&&G!==(G=t[2]+" | RBE")&&(document.title=G),(!_||r&16)&&l(S,"content",t[4]),(!_||r&4)&&Z(Q,t[2]),(!_||r&128)&&a!==(a=new Date(t[7]||null).toLocaleString()+"")&&Z(x,a),t[6]!==t[7]?v?v.p(t,r):(v=de(t),v.c(),v.m(d,$)):v&&(v.d(1),v=null),(!_||r&8)&&Z(ee,t[3]),(!_||r&16)&&Z(te,t[4]),w&&w.p&&(!_||r&4194304)&&Ae(w,ie,t,t[22],_?Me(ie,t[22],r,null):Te(t[22]),null)},i(t){_||(Ie(w,t),_=!0)},o(t){Re(w,t),_=!1},d(t){Se(b,t),c(e),c(o),c(s),c(u),c(m),c(E),c(T),c(M),c(P),c(k),c(I),c(R),c(S),t&&c(O),t&&c(L),v&&v.d(),w&&w.d(t)}}}function De(n,e,o){let{$$slots:s={},$$scope:u}=e,{title:m=""}=e,{author:E=""}=e,{lastmod:H=""}=e,{description:T=""}=e,{meta:N=[]}=e,{updated_at:M=""}=e,{created_at:P=""}=e,{tags:k=[]}=e,{categories:I=[]}=e,{coverAlt:j=""}=e,{coverImage:R=""}=e,{excerpt:F=""}=e,{comments:G=""}=e,{view:S=""}=e,{layout:O=""}=e,{lang:L=""}=e,{cover:y=null}=e,{opengraphImage:d=null}=e,{twitterImage:A=null}=e;A||(A=d||y),d||(d=A||y);let Q="",W="",B=d||A||y?"summary_large_image":"summary";Pe(()=>{W=window.location.href,o(9,Q=W+Le.path)});let{headings:z=[]}=e;return n.$$set=a=>{"title"in a&&o(2,m=a.title),"author"in a&&o(3,E=a.author),"lastmod"in a&&o(11,H=a.lastmod),"description"in a&&o(4,T=a.description),"meta"in a&&o(5,N=a.meta),"updated_at"in a&&o(6,M=a.updated_at),"created_at"in a&&o(7,P=a.created_at),"tags"in a&&o(12,k=a.tags),"categories"in a&&o(13,I=a.categories),"coverAlt"in a&&o(14,j=a.coverAlt),"coverImage"in a&&o(15,R=a.coverImage),"excerpt"in a&&o(16,F=a.excerpt),"comments"in a&&o(17,G=a.comments),"view"in a&&o(18,S=a.view),"layout"in a&&o(19,O=a.layout),"lang"in a&&o(20,L=a.lang),"cover"in a&&o(8,y=a.cover),"opengraphImage"in a&&o(0,d=a.opengraphImage),"twitterImage"in a&&o(1,A=a.twitterImage),"headings"in a&&o(21,z=a.headings),"$$scope"in a&&o(22,u=a.$$scope)},[d,A,m,E,T,N,M,P,y,Q,B,H,k,I,j,R,F,G,S,O,L,z,u,s]}class Ue extends Ee{constructor(e){super(),be(this,e,De,Be,ve,{title:2,author:3,lastmod:11,description:4,meta:5,updated_at:6,created_at:7,tags:12,categories:13,coverAlt:14,coverImage:15,excerpt:16,comments:17,view:18,layout:19,lang:20,cover:8,opengraphImage:0,twitterImage:1,headings:21})}}export{Ue as P};
