import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import a11yEmoji from '@fec/remark-a11y-emoji';
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list';
import emoji from 'remark-emoji';
import remarkGithub from 'remark-github';
import remarkMath from 'remark-math';
// import oembed from '@agentofuser/remark-oembed';
import oembed from 'remark-oembed';
import remarkGfm from 'remark-gfm';
import remarkReferenceLinks from 'remark-reference-links';
import remarkInlineLinks from 'remark-inline-links';
import * as remarkMermaid from 'remark-mermaid';
import remarkTOC from 'remark-toc';
import preview, { htmlFormatter, textFormatter } from 'remark-preview';
import readingTime from 'remark-reading-time';
import readingMdxTime from "remark-reading-time/mdx.js";
import rehypeKatex from 'rehype-katex';
import remarkTypographer from './src/util/remarkTypographer.js';

// XXX: NOT WORKING!
// import remarkHeadings from '@vcarl/remark-headings'; // adds to teh processing data. no way to get data out

// XXX: more plugins


import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeTOC from 'rehype-toc';
import rehypeSlug from 'rehype-slug';

const oembedOptions = {
  usePrefix: false,
  providers: {
    include: ['Twitter', 'Instagram'],
    settings: {
      // Ex. Show all Twitter embeds with the dark theme, and disables ad tracking
      Twitter: {
        theme: 'dark',
        dnt: true
      },
      // Ex. Hide all Instagram comments by default, and
      // add a facebook access token
      Instagram: {
        hidecaption: true,
        access_token: 'a-facebook-access-token'
      }
    }
  }
}

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx', '.mdx'],
	layout: {
		post: './src/layouts/post.svelte',
		posts: './src/layouts/posts.svelte',
		portfolio: './src/layouts/portfolio.svelte',
		_: './src/layouts/post.svelte'
	},
	smartypants: {
    quotes: false,
		dashes: 'oldschool'
	},

	remarkPlugins: [
    // remarkMermaid, // for diagrams
    // remarkGfm,  
		// [oembed, { syncWidget: true }],
		// remarkDefinitionList,
		// [emoji, { emoticon: true }],
		// [remarkGithub, { repository: 'https://github.com/skamansam/skamansam.github.io/' }],
    // remarkTypographer,
    // remarkReferenceLinks,
    // remarkInlineLinks,
    // [remarkTOC, {
    //   heading: 'toc|(table[ -]of[ -])?contents|on this page',
    //   tight: true,
    // }],
    // a11yEmoji,
    // [readingTime, {key: 'readingTime'}],
    // // readingMdxTime,
    // // remarkMath,  // for latex support
    // preview(textFormatter({ length: 250, maxBlocks: 2 })),
    // preview(
    //   htmlFormatter({
    //     length: 250,
    //     maxBlocks: 2,
    //   }),
    //   {
    //     attribute: 'previewHtml',
    //   }
    // ),
    // preview(
    //   textFormatter({
    //     // length: 250,
    //     // maxBlocks: 2,
    //   }),
    //   {
    //     attribute: 'textContent',
    //   },
    // ),
	],
	rehypePlugins: [
    // rehypeKatex,
    // rehypeSlug,
    // defListHastHandlers
  ]
});

export default config;
