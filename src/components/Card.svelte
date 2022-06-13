<script>
  let clazz = '';
	export { clazz as class };
  import Badge from './Badge.svelte';

  export let title = 'Test Title', 
             subtitle ='Subtitle goes here',
             metadata = 'published on Tuesday',
             badges = ['cat1', 'cat2'],
             to = null;

</script>

<div class="card mx-2 my-3 rounded-xl border p-2 {clazz}">
  <div class="card-head">
    <div class="card-badges">
        <slot name="badges">
          {#each badges as badge}
            <Badge text={badge}/>
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
    <div class="card-subtitle text-xs">
      <slot name="subtitle">{subtitle}</slot>
    </div>
    <div class="card-metadata text-xs ">
      <slot name="metadata">{metadata}</slot>
    </div>
  </div>
  <div class="card-body">
    <slot></slot>
  </div>
</div>