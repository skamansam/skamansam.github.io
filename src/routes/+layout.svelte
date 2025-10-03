<script lang="ts">
	import Sidebar from '../components/Sidebar.svelte';
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
  import Waves from '../components/Waves.svelte';
	import '../app.css';
	import { browser } from '$app/environment';
  // import Mermaid from '../components/Mermaid.svelte';

	let brightness = $state<'light' | 'dark'>('light');
	let theme = $state('');
	const themes = [
		{ name: 'plain', value: '' },
		{ name: 'neumorphic', value: 'neumorphic' },
		{ name: 'glassmorphic', value: 'glassmorphic' },
		{ name: 'claymorphic', value: 'claymorphic' },
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

	const setBrightness = (newBrightness: 'light' | 'dark') => {
		if (!browser) return;
		if (['dark', 'light'].includes(newBrightness))
			window.localStorage.setItem('brightness', newBrightness);
		brightness = newBrightness;
	};

	const setTheme = (newTheme: string) => {
		console.log(newTheme);
		if (!browser) return;
		if (themes.find((t) => t.name === newTheme)) window.localStorage.setItem('theme', newTheme);
		else window.localStorage.removeItem('theme');
		theme = newTheme;
	};

	// Initialize on mount
	$effect(() => {
		detectBrightness();
		detectTheme();
	});
</script>

<style>

</style>

<svelte:body class="{brightness} m-0" data-theme={theme}/>
<Waves/>
<div class="layout-container m-0 p-0">
  <div class="md:w-md mx-auto my-0 center">
    <Header
      bind:theme
      {themes}
      {brightness}
      onbrightnessChange={setBrightness}
      onthemeChange={setTheme}
      class="pr-5"
    />
    <Sidebar />
  </div>
  <div class="center md:w-md mx-auto my-0">
    <main class="content-area p-3">
      <slot />
    </main>
    <Footer />
  </div>
</div>