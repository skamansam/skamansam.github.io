import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import a11yEmoji from '@fec/remark-a11y-emoji';
import { remarkDefinitionList, defListHastHandlers } from 'remark-definition-list';
import emoji from 'remark-emoji';
import remarkGithub from 'remark-github';
import remarkMath from 'remark-math';
// import oembed from '@agentofuser/remark-oembed';
import oembed from 'remark-oembed';
import remarkGfm from 'remark-gfm';
import remarkTypographer from './src/util/remarkTypographer.js';
import remarkReferenceLinks from 'remark-reference-links';
import remarkInlineLinks from 'remark-inline-links';
import remarkMermaid from 'remark-mermaid';

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
		dashes: 'oldschool'
	},

	remarkPlugins: [
    remarkMermaid,
    remarkGfm,
		[oembed, { syncWidget: true }],
		remarkMath,
		a11yEmoji,
		remarkDefinitionList,
		[emoji, { emoticon: true }],
		[remarkGithub, { repository: 'https://github.com/skamansam/skamansam.github.io/' }],
    remarkTypographer,
    // remarkReferenceLinks,
    remarkInlineLinks,
	],
	rehypePlugins: [rehypeKatexSvelte, rehypeSlug, rehypeTOC, defListHastHandlers]
});

export default config;
