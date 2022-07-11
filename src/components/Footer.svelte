<script>
	import BuyMeACoffee from './BuyMeACoffee.svelte';
	let clazz = '';
	export { clazz as class };
</script>

<div class="{clazz} footer flex w-full border-t-2 py-2">
	<div class="self-center ml-1">
		Made with 💖 by "Skaman Sam" Tyler<br />
	</div>
  <a class="hover:bg-transparent m-0 ml-auto mr-1" href="https://buymeacoffee.com/skamansamV">
    <BuyMeACoffee scale={0.9}/>
  </a>
</div>
