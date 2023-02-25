import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import preprocess from 'svelte-preprocess';
import mdsvexConfig from './mdsvex.config.js';
import { preprocessor as documentPreprocessor } from '@sveltekit-addons/document'

/** @type {import('./$types').Config} */
const config = {
  compilerOptions: {
    dev: true
  },
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
    preprocess({postcss: true, preserve: ['ld+json']}),
    mdsvex(mdsvexConfig),
    documentPreprocessor(), // this needs to be last
  ],

	kit: {
		adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
    }),
	}
};

export default config;
