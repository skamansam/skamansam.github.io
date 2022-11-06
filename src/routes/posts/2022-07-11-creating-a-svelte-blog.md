---
draft: true
comments: true
view: post
layout: post
author: skamansam
title: Creating a Blog in Svelte
description: We are going to go step by step and see how to create a markdown-based blog using SvelteKit. (up-to-date as of 07-11-22)
excerpt: 
categories:
  - programming
  - Svelte
  - Blog
tags:
  - blog
  - how to
  - Rude Boy Solutions
created_at: 2022-07-11 09:50:16
---

<nav class="toc">

## On This Page

</nav>

> In this series, I will be using `pnpm` instead of `npm` as my package manager.

## Project Setup
```
# make sure you are using the right version:
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
# select "demo app", "typescript", "eslint", "prettier", "playwright"
cd blog-example
pnpm i
make sure we save the current version of node so we can get back to it
echo `node --version` > .nvmrc
# save with git
git init && git add -A && git commit -m "Initial commit"
# open the sample app
pnpm run dev --open
# open up your favorite editor (mine is the insiders version of vscode)
code-insiders .
```

### add markdown support
```
pnpx svelte-add@latest mdsvex
```
reload your editor to make sure the intellisense picks up all the changes: ctrl+shift+p, "reload window"

