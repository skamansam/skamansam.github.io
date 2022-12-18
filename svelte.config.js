import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({postcss: true, preserve: ['ld+json']}), mdsvex(mdsvexConfig)],

	kit: {
		adapter: adapter({
      pages: 'build', 
      assets: 'build',
      fallback: 'index.html',
    }),
	}
};

export default config;
