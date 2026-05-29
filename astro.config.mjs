import { defineConfig } from 'astro/config';
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	// site: 'https://www.rybanata.art',
	// base: '/rybanata-portfolio',
	site: 'https://bio-port-blo-pages.github.io/rybanata-portfolio',
	base: '/rybanata-portfolio',
	integrations: [icon({
		include: {
			ic: ['round-email'],
			ri: ['instagram-fill', 'behance-fill', 'pinterest-fill', 'youtube-fill'],
			ph: ['sun-bold', 'moon-stars-bold'],
			'line-md': ['email-opened'],
			typcn: ['th-menu'],
		},
	})],
});
