<script>
	import BuyMeACoffee from './BuyMeACoffee.svelte';
	let clazz = '';
	export { clazz as class };
</script>

<div class="{clazz} footer flex w-full border-t-2 py-0 flex-grow-0" style="height: 80px;">
	<div class="self-center ml-1">
		Made with 💖 by "Skaman Sam" Tyler<br />
    <a rel="me" href="https://fosstodon.org/@skamansam">Find me on Mastodon</a>
	</div>
  <a class="hover:bg-transparent m-0 ml-auto mr-1" href="https://buymeacoffee.com/skamansamV">
    <BuyMeACoffee />
  </a>
</div>
