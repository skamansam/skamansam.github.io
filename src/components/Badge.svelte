<script lang="ts">
	import { capitalize } from "$lib/util";

  interface Props {
    text?: string;
    color?: string;
    to?: string | null;
  }

  let { text = '', color = 'tertiary', to = null }: Props = $props();
  
  // Create dynamic class based on color
  const bgClass = $derived(`bg-${color}Bg`);
  const textClass = $derived(`text-on${capitalize(color)}Bg`);
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