import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		// Kit 3 no longer reads svelte.config.js; SvelteKit options are passed to the plugin here.
		sveltekit({
			preprocess: vitePreprocess(),
			adapter: adapter()
		}),
		tailwindcss()
	]
});
