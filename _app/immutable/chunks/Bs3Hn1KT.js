import{D as i}from"./7VeBLrFP.js";import{aB as a}from"./Dhn-IdaH.js";function s(n){if(i){const e=new Error(`lifecycle_outside_component
\`${n}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);throw e.name="Svelte error",e}else throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function _(){const n=new Error(`await_invalid
Encountered asynchronous work while rendering synchronously.
https://svelte.dev/e/await_invalid`);throw n.name="Svelte error",n}function p(n){const e=new Error(`lifecycle_function_unavailable
\`${n}(...)\` is not available on the server
https://svelte.dev/e/lifecycle_function_unavailable`);throw e.name="Svelte error",e}var t=null;function v(n){t=n}function d(n){return o("getContext").get(n)}function h(n,e){return o("setContext").set(n,e),e}function m(n){return o("hasContext").has(n)}function w(){return o("getAllContexts")}function o(n){return t===null&&s(n),t.c??=new Map(c(t)||void 0)}function x(n){t={p:t,c:null,r:null},i&&(t.function=n,t.element=t.p?.element)}function g(){t=t.p}function c(n){let e=n.p;for(;e!==null;){const r=e.c;if(r!==null)return r;e=e.p}return null}let l=null;function y(){l?.abort(a),l=null}function b(){return(l??=new AbortController).signal}export{t as a,_ as b,g as c,y as d,h as e,b as f,d as g,w as h,m as i,p as l,x as p,v as s};
