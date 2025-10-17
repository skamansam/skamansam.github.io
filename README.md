[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/skamansam/skamansam.github.io) 
[![pages-build-deployment](https://github.com/skamansam/skamansam.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/skamansam/skamansam.github.io/actions/workflows/pages/pages-build-deployment)

# Rudeboy.dev

Hello, all! This is the blog for "Skaman Sam" Tyler, founder of Rude Boy
Enterprises. I love to code and fix problems. This blog is all about 
my code and solutions to problems relating to Linux, Windows (probably not much there), and other computer-related issues. I hope this will be as educational for you as for me!

## Source Branch
The `svelte` branch is the main git branch and is used for the development of this project. The deployed code is on the `gh-pages`` branch.

## Roll Your Own with Svelte

I rolled this site in about a day, using Svelte, MDSvex, and Tailwind. It has the following features:

* [X] 📚 Markdown-it compatibility (_mostly_)
  * [X] 📘 CommonMark (), 
  * [X] 📖 Extramark
  * [X] 😸 GitHub
  * [X] 📰 Pandoc
* [X] 🌔 Dark-mode aware, and selectable
* [X] 🖌️ Themes! (selector is working, but themes aren't done yet)
* [X] ✅ Checkboxes! (user-editable, but not remembered)
* [X] ✔️ Tasklists (non-editable)
* [X] 📑 Table of Contents (custom placement inside markdown files)
* [X] ➗ Math/LaTeX support using KaTeX
* [X] 🧑‍🤝‍🧑 OpenGraph support (including images form articles)
* [X] 🆚 Good integration with VSCode / FrontMatter
* [X] 😹 deploy to github pages
* [X] 🐰 use [bunny fonts](https://fonts.bunny.net/) instead of google fonts
* [X] 🗺️ Auto Generated sitemap
* [X] 🚀 Automatic deployment when pushing to `svelte` branch
* [X] [JSON Resume support](https://jsonresume.org/) - user info
* [X] 📻 Auto-generated RSS feed


## Still TODO:
* [ ] 🌳 Category browsing
* [ ] 🌲 Tag Browsing
* [ ] ☁️ Tag Cloud Generation
* [ ] 💯 [working on 100% Markdown compatibility across ALL flavors](https://gist.github.com/vimtaai/99f8c89e7d3d02a362117284684baa0f)
  * [ ] 🅰️ abbreviation support
  * [ ] ✳️ footnote support
  * [ ] 📑 definition list support
  * [ ] 📈 figures and charts with mermaid (initial tests failed. needs more work/debugging)
* [ ] 👨‍🦱 Auto Generated [humans.txt](https://humanstxt.org) support
* [ ] 🔍Algolia search integration
* [X] 💬 Comments using Github Discussions! (See [setup guide](docs/GITHUB_DISCUSSIONS_SETUP.md))
* [ ] ✔️ [accessible site validation](https://usabilitygeek.com/10-free-web-based-web-site-accessibility-evaluation-tools)
  * 👋 [WAVE](https://wave.webaim.org/report#/https://rudeboy.dev)
* [ ] 🖌️ Theme implementation:
  * [ ] 🆕 [Neumorphic](https://www.justinmind.com/ui-design/neumorphism) ([How To](https://dev.to/jackdomleo7/learning-neumorphic-design-3dj8))
  * [ ] 🆖 [Glassmorphic](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9) ([more...](https://hype4.academy/tools/glassmorphism-generator))
  * [ ] ⏹️ [Brutalistic](https://brutalistwebsites.com/)
  * [ ] 🔌 [More Krazy design elements i might throw together](https://99designs.com/blog/trends/web-design-trends/)
  * [ ] 🧰 [Techniques I may implement, some of which I already have](https://www.theedigital.com/blog/web-design-trends)
* [ ] Deployments to Netlify
* [ ] Deployments to Firebase
* [ ] Comments from Firebase
* [ ] Show Bookmarks/Highlights/etc from Raindrop.io using api.raindrop.io