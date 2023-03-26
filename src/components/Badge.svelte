<script>
	import { capitalize } from "$lib/util";

  export let text = '',
             color = 'tertiary';
  /** @type string|null */
  export let to = null;
</script>

<style>

</style>

<div class="badge inline-block bg-tertiaryBg text-onTertiaryBg text-xs">
  {#if to}
      <a href="{to}" class="bg-inherit text-inherit decoration-transparent">{text}</a>
    {:else}
      {text}
  {/if}
</div>