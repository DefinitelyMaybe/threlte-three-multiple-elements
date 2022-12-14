import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import seq from 'svelte-sequential-preprocessor';
import { preprocessThrelte } from '@threlte/preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: seq([
		preprocess({
			postcss: true,
			typescript: true
		}),
		preprocessThrelte()
	]),
	kit: {
		adapter: adapter()
	}
};

export default config;
