import{S as r,i as c,s as i}from"../../chunks/index-f095e7d9.js";const d=async({params:t,fetch:s})=>{const e=t.category;return{props:{posts:(await(await s("/api/posts.json")).json()).filter(o=>{var a,n;return((a=o.meta.tags)==null?void 0:a.includes(e))||((n=o.meta.categories)==null?void 0:n.includes(e))})}}};class m extends r{constructor(s){super(),c(this,s,null,null,i,{})}}export{m as default,d as load};