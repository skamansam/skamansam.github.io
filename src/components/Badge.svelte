<script>
	import { capitalize } from "$lib/util";

  export let text = '';
  export let color = 'tertiary';
  /** @type string|null */
  export let to = null;
  
  // Create dynamic class based on color
  $: bgClass = `bg-${color}Bg`;
  $: textClass = `text-on${capitalize(color)}Bg`;
</script>

<style>

</style>

<div class="badge inline-block {bgClass} {textClass} text-xs">
  {#if to}
      <a href="{to}" class="bg-inherit text-inherit decoration-transparent">{text}</a>
    {:else}
      {text}
  {/if}
</div>