import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.rybanata.art',
	// base: '/rybanata-portfolio',
	vite: {
		resolve: {
		  alias: {
			 "svgo": import.meta.env.PROD ? "svgo/dist/svgo.browser.js" : "svgo"
		  }
		}
	}
});

