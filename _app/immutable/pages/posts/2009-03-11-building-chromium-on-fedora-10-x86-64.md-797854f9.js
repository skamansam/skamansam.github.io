import{S as H,i as T,s as z,D as P,x as D,y as R,z as j,A as q,B as I,r as G,p as M,C as J,X as L,e as p,t as b,k as C,c as f,a as h,h as x,d as n,m as E,b as $,g as d,F as g,n as K}from"../../chunks/index-1458cd2c.js";import{P as N}from"../../chunks/post-d6c55913.js";function O(_){let e,s,i,l,a,o,r,X=`<code class="language-bash">yum <span class="token function">install</span> cairo.i386 cairo-devel.i386 cairomm.i386 cairomm-devel.i386 pango-devel.i386 <span class="token punctuation"></span>
    atk-devel.i386 gperf freetype-devel.i386 glib2-devel.i386 glibc-devel.i386 dwdiff <span class="token punctuation"></span>
    gtk-devel.i386 gtk2-devel.i386 fontconfig-devel.i386 libX11-devel.i386 <span class="token punctuation"></span>
    libXrender-devel.i386 libXext-devel.i386</code>`,v,m,k,c,w;return{c(){e=p("p"),s=b("I am working on installing Chromium for Fedora 10 x86_64 bit. Here\u2019s how you do it:"),i=C(),l=p("p"),a=b("make sure a bunch of i386 libs are installed, by running the command:"),o=C(),r=p("pre"),v=C(),m=p("p"),k=b("Then follow the same instructions listed on the "),c=p("a"),w=b("Chromium Linux Build Page"),this.h()},l(t){e=f(t,"P",{});var u=h(e);s=x(u,"I am working on installing Chromium for Fedora 10 x86_64 bit. Here\u2019s how you do it:"),u.forEach(n),i=E(t),l=f(t,"P",{});var F=h(l);a=x(F,"make sure a bunch of i386 libs are installed, by running the command:"),F.forEach(n),o=E(t),r=f(t,"PRE",{class:!0});var A=h(r);A.forEach(n),v=E(t),m=f(t,"P",{});var y=h(m);k=x(y,"Then follow the same instructions listed on the "),c=f(y,"A",{href:!0,rel:!0});var B=h(c);w=x(B,"Chromium Linux Build Page"),B.forEach(n),y.forEach(n),this.h()},h(){$(r,"class","language-bash"),$(c,"href","http://code.google.com/p/chromium/wiki/LinuxBuildInstructions"),$(c,"rel","nofollow")},m(t,u){d(t,e,u),g(e,s),d(t,i,u),d(t,l,u),g(l,a),d(t,o,u),d(t,r,u),r.innerHTML=X,d(t,v,u),d(t,m,u),g(m,k),g(m,c),g(c,w)},p:K,d(t){t&&n(e),t&&n(i),t&&n(l),t&&n(o),t&&n(r),t&&n(v),t&&n(m)}}}function Q(_){let e,s;const i=[_[0],S];let l={$$slots:{default:[O]},$$scope:{ctx:_}};for(let a=0;a<i.length;a+=1)l=P(l,i[a]);return e=new N({props:l}),{c(){D(e.$$.fragment)},l(a){R(e.$$.fragment,a)},m(a,o){j(e,a,o),s=!0},p(a,[o]){const r=o&1?q(i,[o&1&&I(a[0]),o&0&&I(S)]):{};o&2&&(r.$$scope={dirty:o,ctx:a}),e.$set(r)},i(a){s||(G(e.$$.fragment,a),s=!0)},o(a){M(e.$$.fragment,a),s=!1},d(a){J(e,a)}}}const S={comments:!0,view:"post",layout:"post",lang:"en",author:"skamansam",title:"Building Chromium on Fedora 10 x86_64",description:"Installing Chromium for Fedora 10 x86_64 bit",excerpt:"Chromium for Fedora 10 x86_64 bit",cover:!1,coverImage:"/images/GSoC-logo-horizontal-800.png",coverAlt:"RBE Logo",categories:["web-development","linux"],tags:["CSS","Fedora","IDE","Editor"],created_at:"2009-03-11 7:50",updated_at:"2009-03-11 7:50"};function U(_,e,s){return _.$$set=i=>{s(0,e=P(P({},e),L(i)))},e=L(e),[e]}class Y extends H{constructor(e){super(),T(this,e,U,Q,z,{})}}export{Y as default,S as metadata};