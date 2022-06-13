<script lang="ts">
	import Sidebar from '../components/Sidebar.svelte';
	import Header from '../components/Header.svelte';
	import '../app.css';
	import { browser } from '$app/env';
  import Mermaid from '../components/Mermaid.svelte';

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

<div class="theme-wrapper {brightness} theme-{theme} h-screen w-screen p-0 m-0 flex flex-col items-stretch">
	<Header
		{theme}
		{themes}
		{brightness}
		on:brightnessChange={(evt) => setBrightness(evt.detail)}
		on:themeChange={(evt) => setTheme(evt.detail)}
	/>
	<div class="container flex flex-row flex-1 items-stretch">
    <div class="left">
		  <Sidebar class="rounded border border-primaryBorder mr-3 ml-3 mt-3" />
    </div>
		<div class="pl-2  pt-2">
			<slot />
		</div>
	</div>
</div>
