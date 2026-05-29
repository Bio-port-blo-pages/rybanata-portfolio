import { defineConfig } from 'astro/config';
import { Icon } from 'astro-icon/components';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.rybanata.art',
	// base: '/rybanata-portfolio',
	integrations: [Icon()],
});
