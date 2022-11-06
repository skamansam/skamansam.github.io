<script lang="ts">
  export const prerender = true;
	import Sidebar from '../components/Sidebar.svelte';
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
	import '../app.css';
	import { browser } from '$app/environment';
  // import Mermaid from '../components/Mermaid.svelte';

	let brightness = 'light';
	let theme = '';
	let themes = [
		{ name: 'plain', value: '' },
		{ name: 'neumorphic', value: 'neumorphic' },
		{ name: 'glassmorphic', value: 'glassmorphic' },
		{ name: 'brutal', value: 'brutal' }
	];

	const detectBrightness = () => {
		if (!browser) return;
		const storedBrightness = window.localStorage.getItem('brightness');
		const prefersDark =
			!storedBrightness && window.matchMedia('(prefers-color-scheme: dark)').matches;
		if (storedBrightness === 'dark' || prefersDark) brightness = 'dark';
		else brightness = 'light';
	};

	const detectTheme = () => {
		if (!browser) return;
		const storedTheme = window.localStorage.getItem('theme') || '';
		if (themes.find((t) => t.name === storedTheme)) theme = storedTheme;
		else theme = '';
	};

	const setBrightness = (brightness: string) => {
		if (!browser) return;
		if (['dark', 'light'].includes(brightness))
			window.localStorage.setItem('brightness', brightness);
		if (brightness === 'none') window.localStorage.removeItem('brightness');
		detectBrightness();
	};

	const setTheme = (theme: string) => {
		if (!browser) return;
		if (themes.find((t) => t.name === theme)) window.localStorage.setItem('theme', theme);
		else window.localStorage.removeItem('theme');
		detectTheme();
	};

	detectBrightness();
</script>

<div class="theme-wrapper {brightness} theme-{theme} h-screen w-full p-0 m-0 flex flex-col items-stretch">
	<Header
		{theme}
		{themes}
		{brightness}
		on:brightnessChange={(evt) => setBrightness(evt.detail)}
		on:themeChange={(evt) => setTheme(evt.detail)}
	/>
  <Sidebar />
  <div class="content-area flex-1 p-3">
    <slot />
  </div>
  <Footer />
</div>
