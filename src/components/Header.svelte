<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let clazz = '';
	export { clazz as class };
	export let theme = '';
	export let themes = [{ value: '', name: 'Plain' }];
	export let brightness = 'light';
	let isDark = brightness === 'dark';

	const dispatch = createEventDispatcher();

	$: dispatch('brightnessChange', isDark ? 'dark' : 'light');
	$: dispatch('themeChange', theme);
</script>

<header class={`site-head flex ${clazz || ''}`}>
	<div class="flex flex-col grow">
		<div class="text-4xl text-onPrimaryBg">Rude Boy Enterprises</div>
		<div class=" indent-5">The Adventures of Samuel "Skaman Sam" Tyler</div>
	</div>
	<div class="mt-2 mr-2 text-sm">
		<label for="themeSelector">Theme: </label>
		<select bind:value={theme} id="themeSelector">
			{#each themes as pTheme}
				<option value={pTheme.value}>{pTheme.name}</option>
			{/each}
		</select>

		<label for="toggle-dark" class="flex items-center cursor-pointer relative mb-4">
			<span class="mr-3 text-gray-900 text-sm font-medium flex-grow">Dark Mode</span>
			<input type="checkbox" id="toggle-dark" class="sr-only" bind:checked={isDark} />
			<div
				class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 mr-5 w-11 rounded-full self-end"
			/>
		</label>
	</div>
</header>

<style lang="postcss">
	.toggle-bg:after {
		content: '';
		@apply absolute top-0.5 right-11 bg-white border border-gray-300 rounded-full h-5 w-5 transition shadow-sm;
	}
	input:checked + .toggle-bg:after {
		transform: translateX(100%);
		@apply border-white;
	}

	input:checked + .toggle-bg {
		@apply bg-blue-600 border-blue-600;
	}
</style>
