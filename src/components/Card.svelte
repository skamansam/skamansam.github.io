<script>
	let clazz = '';
	export { clazz as class };
	import Badge from './Badge.svelte';
	/** @type string|null */
	export let title = 'Test Title',
		/** @type string|null */
		subtitle = null,
		/** @type string|null */
		metadata = null,
		/** @type string[]|null */
		badges = [],
		/** @type string|null */
		to = null,
    /** @type string|null */
    style="";
</script>

<div class="card {clazz}" {style}>
  <section>
    <div class="card-head">
      <div class="card-badges">
        <slot name="badges">
          {#each badges as badge}
            <Badge text={badge} />
          {/each}
        </slot>
      </div>
      <div class="card-title text-xl font-bold">
        {#if to}
          <a href={to} class="decoration-transparent">{title}</a>
        {:else}
          {title}
        {/if}
      </div>
      {#if subtitle}
      <div class="card-subtitle text-xs">
        <slot name="subtitle">{subtitle}</slot>
      </div>
      {/if}
      {#if metadata}
      <div class="card-metadata text-xs ">
        <slot name="metadata">{metadata}</slot>
      </div>
      {/if}
    </div>
    <div class="card-body">
      <slot />
    </div>
  </section>
</div>
