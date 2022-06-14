[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/skamansam/skamansam.github.io) 
[![pages-build-deployment](https://github.com/skamansam/skamansam.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/skamansam/skamansam.github.io/actions/workflows/pages/pages-build-deployment)

# Rudeboy.dev

Hello, all! This is the blog for "Skaman Sam" Tyler, founder of Rude Boy
Enterprises. I love to code and fix problems. This blog is all about my code and
solutions to problems relating to Linux, Windows (probably not much there), and
other computer-related issues. I hope this will be as educational for you as for
me!


## Source Branch
The main branch is used for serving up the site. The source branch is `svelte`.

## Roll Your Own with Svelte

I rolled this site in about a day, using Svelte, MDSvex, and Tailwind. It has the following features:

* [X]Markdown-it compatibility (_mostly_)
  * [X] CommonMark (), Extramark, GitHub, and Pandoc mostly supported
  * [X] [working on 100% across ALL flavors](https://gist.github.com/vimtaai/99f8c89e7d3d02a362117284684baa0f)
* [X] Dark-mode aware, and selectable
* [X] Themes! (selector is working, but themes aren't done yet)
* [X] Checkboxes! (user-editable, but not remembered)
* [X] Tasklists (non-editable)
* [X] Table of Contents (custom placement inside markdown files)
* [X] Math/LaTeX support using KaTeX
* [X] OpenGraph support (including images form articles)
* [X] Good integration with VSCode / FrontMatter

## Still TODO:

* [ ] Automatic deployment when pushing to `svelte` branch
* [ ] Algolia search integration
* [ ] [accessible site validation](https://usabilitygeek.com/10-free-web-based-web-site-accessibility-evaluation-tools)
  * [WAVE](https://wave.webaim.org/report#/https://rudeboy.dev)
* [ ] abbreviation support
* [ ] footnote support
* [ ] definition list support
* [ ] figures and charts with mermaid (initial tests failed. needs more work/debugging)
* [ ] Theme implementation:
  * [ ] [Neumorphic](https://www.justinmind.com/ui-design/neumorphism)
  * [ ] [Glassmorphic](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9)
  * [ ] [Brutalistic](https://brutalistwebsites.com/)
  * [ ] [More Krazy design elements i might throw together](https://99designs.com/blog/trends/web-design-trends/)
  * [ ] [Techniques I may implement, some of which I already have](https://www.theedigital.com/blog/web-design-trends)
