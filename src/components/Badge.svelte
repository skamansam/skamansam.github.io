<script>
  export let text = '',
             color = 'secondary';
  /** @type string|null */
  export let to = null;
</script>

<style>
  
</style>

<div class="badge inline-block bg-{color} text-xs">
  {#if to}
      <a href="{to}" class="bg-inherit text-inherit decoration-transparent">{text}</a>
    {:else}
      {text}
  {/if}
</div>