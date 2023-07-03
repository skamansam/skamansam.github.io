<script lang="ts">
	import Sidebar from '../components/Sidebar.svelte';
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';
  import Waves from '../components/Waves.svelte';
	import '../app.css';
	import { browser } from '$app/environment';
  // import Mermaid from '../components/Mermaid.svelte';

	let brightness = 'light';
	let theme = '';
	let themes = [
		{ name: 'plain', value: '' },
		{ name: 'neumorphic', value: 'neumorphic' },
		{ name: 'glassmorphic', value: 'glassmorphic' },
		{ name: 'claymorphic', value: 'claymorphic' },
		{ name: 'brutal', value: 'brutal' }
	];

  let systemBrightness = 'light';
  if (browser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    systemBrightness = 'dark';
  }
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

<style>

</style>

<svelte:body class="{brightness} theme-{theme} m-0"/>
<Waves/>
<div class="layout-container m-0 p-0">
  <div class="md:w-md mx-auto my-0 center">
    <Header
      {theme}
      {themes}
      {brightness}
      on:brightnessChange={(evt) => setBrightness(evt.detail)}
      on:themeChange={(evt) => setTheme(evt.detail)}
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