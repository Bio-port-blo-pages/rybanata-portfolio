import {frontmatter as illustrationsPageSettings} from './components/pages/illustrations.md';
import {frontmatter as projectsPageSettings} from './components/pages/projects.md';
import {frontmatter as aboutPageSettings} from './components/pages/about.md';

export const navigationLinks: { label: string; href: string }[] = [
	{ label: illustrationsPageSettings.label, href: '/' },
	{ label: projectsPageSettings.label, href: '/projects/' },
	{ label: aboutPageSettings.label, href: '/about/' },
];

export const socialLinks: { label: string; href: string; icon: keyof typeof iconPaths }[] = [
	{ label: 'Email',     href: 'mailto:contact.rybanata.art@gmail.com',   icon: 'ic:round-email' },
	{ label: 'Instagram', href: 'https://www.instagram.com/rybanata_',     icon: 'ri:instagram-fill' },
	{ label: 'Behance',   href: 'https://www.behance.net/natalisergeyeva', icon: 'ri:behance-fill' },
	{ label: 'Pinterest', href: 'https://pl.pinterest.com/rybanata/',      icon: 'ri:pinterest-fill' },
	{ label: 'YouTube',   href: 'https://www.youtube.com/@rybanata',       icon: 'ri:youtube-fill' },
];