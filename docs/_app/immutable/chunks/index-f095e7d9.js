function P(){}function z(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function N(){return Object.create(null)}function p(t){t.forEach(T)}function F(t){return typeof t=="function"}function ot(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let x;function lt(t,n){return x||(x=document.createElement("a")),x.href=n,t===x.href}function H(t){return Object.keys(t).length===0}function ut(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?z(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(n.dirty.length,r.length);for(let l=0;l<o;l+=1)s[l]=n.dirty[l]|r[l];return s}return n.dirty|r}return n.dirty}function at(t,n,e,i,r,s){if(r){const o=B(n,e,i,s);t.p(o,r)}}function ft(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function dt(t){return t==null?"":t}let E=!1;function W(){E=!0}function G(){E=!1}function J(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const f=n[u];f.claim_order!==void 0&&c.push(f)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,f=(r>0&&n[e[r]].claim_order<=u?r+1:J(1,r,g=>n[e[g]].claim_order,u))-1;i[c]=e[f]+1;const a=f+1;e[a]=c,r=Math.max(a,r)}const s=[],o=[];let l=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(s.push(n[c-1]);l>=c;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);s.reverse(),o.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<o.length;c++){for(;u<s.length&&o[c].claim_order>=s[u].claim_order;)u++;const f=u<s.length?s[u]:null;t.insertBefore(o[c],f)}}function Q(t,n){if(E){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){E&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function U(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function pt(){return S(" ")}function yt(){return S("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,r=!1){X(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const c=e(l);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const c=e(l);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Y(t,n,e,i){return L(t,r=>r.nodeName===n,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];e[l.name]||s.push(l.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(n))}function bt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function $t(t){return Z(t," ")}function vt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Et(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function kt(t,n){for(let e=0;e<t.options.length;e+=1){const i=t.options[e];if(i.__value===n){i.selected=!0;return}}t.selectedIndex=-1}function wt(t){const n=t.querySelector(":checked")||t.options[0];return n&&n.__value}function tt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,e,i,n),r}function At(t,n=document.body){return Array.from(n.querySelectorAll(t))}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function St(t){y().$$.on_mount.push(t)}function jt(t){y().$$.after_update.push(t)}function Ct(){const t=y();return(n,e,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[n];if(r){const s=tt(n,e,{cancelable:i});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}function Nt(t,n){return y().$$.context.set(t,n),n}function qt(t){return y().$$.context.get(t)}const d=[],q=[],$=[],M=[],O=Promise.resolve();let w=!1;function D(){w||(w=!0,O.then(I))}function Mt(){return D(),O}function A(t){$.push(t)}const k=new Set;let b=0;function I(){const t=m;do{for(;b<d.length;){const n=d[b];b++,h(n),nt(n.$$)}for(h(null),d.length=0,b=0;q.length;)q.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];k.has(e)||(k.add(e),e())}$.length=0}while(d.length);for(;M.length;)M.pop()();w=!1,k.clear(),h(t)}function nt(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(A)}}const v=new Set;let _;function Pt(){_={r:0,c:[],p:_}}function Tt(){_.r||p(_.c),_=_.p}function et(t,n){t&&t.i&&(v.delete(t),t.i(n))}function Bt(t,n,e,i){if(t&&t.o){if(v.has(t))return;v.add(t),_.c.push(()=>{v.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Lt(t,n){const e={},i={},r={$$scope:1};let s=t.length;for(;s--;){const o=t[s],l=n[s];if(l){for(const c in o)c in l||(i[c]=1);for(const c in l)r[c]||(e[c]=l[c],r[c]=1);t[s]=l}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Ot(t){return typeof t=="object"&&t!==null?t:{}}function Dt(t){t&&t.c()}function It(t,n){t&&t.l(n)}function it(t,n,e,i){const{fragment:r,on_mount:s,on_destroy:o,after_update:l}=t.$$;r&&r.m(n,e),i||A(()=>{const c=s.map(T).filter(F);o?o.push(...c):p(c),t.$$.on_mount=[]}),l.forEach(A)}function rt(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){t.$$.dirty[0]===-1&&(d.push(t),D(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function zt(t,n,e,i,r,s,o,l=[-1]){const c=m;h(t);const u=t.$$={fragment:null,ctx:null,props:s,update:P,not_equal:r,bound:N(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:N(),dirty:l,skip_bound:!1,root:n.target||c.$$.root};o&&o(u.root);let f=!1;if(u.ctx=e?e(t,n.props||{},(a,g,...j)=>{const C=j.length?j[0]:g;return u.ctx&&r(u.ctx[a],u.ctx[a]=C)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](C),f&&ct(t,a)),g}):[],u.update(),f=!0,p(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){W();const a=V(n.target);u.fragment&&u.fragment.l(a),a.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&et(t.$$.fragment),it(t,n.target,n.anchor,n.customElement),G(),I()}h(c)}class Ft{$destroy(){rt(this,1),this.$destroy=P}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!H(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Lt as A,Ot as B,rt as C,z as D,Mt as E,Q as F,lt as G,A as H,dt as I,kt as J,gt as K,mt as L,p as M,Ct as N,wt as O,ut as P,at as Q,ft as R,Ft as S,st as T,At as U,_t as V,qt as W,V as a,xt as b,bt as c,R as d,U as e,Et as f,ht as g,Z as h,zt as i,vt as j,pt as k,yt as l,$t as m,P as n,Pt as o,Bt as p,Tt as q,et as r,ot as s,S as t,Nt as u,jt as v,St as w,Dt as x,It as y,it as z};