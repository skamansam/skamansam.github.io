import"./DsnmJJEf.js";import"./DUAmNnRy.js";import"./7VeBLrFP.js";import{s,c as a,r as o,n as g}from"./Dhn-IdaH.js";import{f as h,a as v}from"./B988bg3s.js";import{P as w,h as r}from"./BFPr3XtU.js";import{l as f,s as k}from"./9VelmjdU.js";const i={draft:!0,comments:!0,view:"post",layout:"post",author:"skamansam",title:"Creating a Blog in Svelte",description:"We are going to go step by step and see how to create a markdown-based blog using SvelteKit. (up-to-date as of 07-11-22)",excerpt:null,categories:["programming","Svelte","Blog"],tags:["blog","how to","Rude Boy Solutions"],created_at:"2022-07-11T09:50:16.000Z",preview:`On This Page

- Project Setup
- add markdown support`,previewHtml:"<h2>On This Page</h2>",textContent:`On This Page

- Project Setup
- add markdown support


Project Setup



add markdown support



reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"`},{draft:O,comments:T,view:B,layout:C,author:H,title:z,description:A,excerpt:I,categories:K,tags:M,created_at:N,preview:R,previewHtml:V,textContent:W}=i;var _=h('<nav class="toc"><h2 id="on-this-page">On This Page</h2> <ul><li><a href="#project-setup">Project Setup</a> <ul><li><a href="#add-markdown-support">add markdown support</a></li></ul></li></ul> <h2 id="project-setup">Project Setup</h2> <pre class="language-undefined"><!></pre> <h3 id="add-markdown-support">add markdown support</h3> <pre class="language-undefined"><!></pre> <p>reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"</p></nav>');function Z(p,l){const d=f(l,["children","$$slots","$$events","$$legacy"]);w(p,k(()=>d,()=>i,{children:(u,q)=>{var e=_(),t=s(a(e),6),m=a(t);r(m,()=>`<code class="language-undefined"># make sure you are using the right version:
# install nvm
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
# make sure you are using the new/updated NVM:
. ~/.bashrc
# install node latest (18.5.0) at the time of thsi writing
nvm install node
# install pnpm:
npm install -g pnpm
# Step 1: skaffold with sveltekit:
pnpm create svelte blog-example
# select &quot;demo app&quot;, &quot;typescript&quot;, &quot;eslint&quot;, &quot;prettier&quot;, &quot;playwright&quot;
cd blog-example
pnpm i
make sure we save the current version of node so we can get back to it
echo &#96;node --version&#96; &gt; .nvmrc
# save with git
git init &amp;&amp; git add -A &amp;&amp; git commit -m &quot;Initial commit&quot;
# open the sample app
pnpm run dev --open
# open up your favorite editor (mine is the insiders version of vscode)
code-insiders .</code>`),o(t);var n=s(t,4),c=a(n);r(c,()=>'<code class="language-undefined">pnpx svelte-add@latest mdsvex</code>'),o(n),g(2),o(e),v(u,e)},$$slots:{default:!0}}))}export{Z as default,i as metadata};
