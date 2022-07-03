<script>
	import BuyMeACoffee from './BuyMeACoffee.svelte';
	let clazz = '';
	export { clazz as class };
</script>

<div class="{clazz} footer flex w-full border-t-2 py-2">
	<div class="self-center ml-1">
		Made with 💖 by "Skaman Sam" Tyler<br />
    <!-- add here so we have a link to the sitemap -->
    <a href="/sitemap.xml">Sitemap</a>
	</div>
  <BuyMeACoffee scale="0.9" class="m-0 ml-auto mr-1"/>
</div>
