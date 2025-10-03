<script lang="ts">
	import Badge from './Badge.svelte';

  interface Props {
    class?: string;
    title?: string;
    subtitle?: string | null;
    metadata?: string | null;
    badges?: string[];
    markers?: string[];
    to?: string | null;
    style?: string;
    tags?: string[];
  }

	let { 
    class: clazz = '',
    title = 'Test Title',
    subtitle = null,
    metadata = null,
    badges = [],
    markers = [],
    to = null,
    style = "",
    tags = []
  }: Props = $props();

  const cardClass = $derived(markers.length > 0 || badges.length > 0 ? `${clazz} mt-6` : clazz);
</script>

<style>
  @reference "../styles/default.css";
  a.tag {
    @apply text-tertiary bg-quaternary rounded-element mx-2 px-2 py-1 inline-block;
    text-decoration: none;
  }
</style>

<div class="card {cardClass} text-onSecondaryBg bg-secondaryBg rounded-element p-4 my-4 drop-shadow-element" {style}>
  <section>
    <div class="card-head">
      <div class="card-markers">
        <slot name="marker">
          {#each markers as marker}
          <Badge text={marker} />
          {/each}
        </slot>
      </div>
      <div class="card-badges">
        <slot name="badges">
          {#each badges as badge}
            <Badge text={badge} />
          {/each}
        </slot>
      </div>
      <div class="card-title text-2xl font-bold">
        {#if to}
          <a href={to} class="decoration-transparent">{title}</a>
        {:else}
          {title}
        {/if}
      </div>
      {#if subtitle}
      <div class="card-subtitle text-md">
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
        <!-- <span slot="badges">
      {#each (post.meta?.categories || []) as category}
        <Badge text={category} to="/categories/{category}"/>
      {/each}
    </span> -->
    <!-- <span slot="metadata">
      Published {new Date(post.meta.created_at).toLocaleString()}
    </span> -->
    <div class="tags my-3">
      <slot name="tags">
      {#each (tags || []) as tag}
        <a href="/tags/{tag}" class="tag">#{tag}</a>
      {/each}
      </slot>
    </div>

  </section>
</div>
