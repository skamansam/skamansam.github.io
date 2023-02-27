<script lang="ts">
	import { Moon, Sun } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { createEventDispatcher } from 'svelte';
	import RBELogo from './RBELogo.svelte';
	let clazz = '';
	export { clazz as class };
	export let theme = '';
	export let themes = [{ value: '', name: 'Plain' }];
	export let brightness = 'light';
	let isDark = brightness === 'dark';

	const dispatch = createEventDispatcher();
	const updateBrightness = () => (isDark = !isDark);

	$: dispatch('brightnessChange', isDark ? 'dark' : 'light');
	$: dispatch('themeChange', theme);
</script>

<header class={`site-head flex ${clazz || ''}`}>
	<div class="header-logo inline-block text-onPrimaryBg">
		<a href="/" class="text-inherit hover:text-inherit"><RBELogo width={100} height={100} /></a>
		<!-- <img src="/rbe-logo.svg" alt="Rude Boy Enterprises Logo" width="100" height="100"> -->
	</div>
	<div class="flex flex-col grow justify-center ml-3">
		<div class="text-4xl text-onPrimaryBg"><a href="/" class="text-inherit no-underline">Rude Boy Solutions</a></div>
		<div class=" indent-5">Solutions. For Life.</div>
	</div>
	<div class="mt-2 mr-2 text-sm">
		<span on:click={updateBrightness} on:keypress={updateBrightness}
			><Icon src={isDark ? Sun : Moon} width={18} height={18} class="inline mr-1" /></span
		>
		<select bind:value={theme} style="width: 16px;height: 18px;" id="themeSelector">
			{#each themes as pTheme}
				<option value={pTheme.value}>{pTheme.name}</option>
			{/each}
		</select>
	</div>
</header>

<style lang="postcss">
</style>
