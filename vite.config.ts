import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, type Plugin } from 'vite';

export default defineConfig({
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
	plugins: [tailwindcss() as Plugin[], sveltekit()]
});
