<script>
	export let title = '';
	export let author = '';
	export let lastmod = '';
	export let description = '';
  export let metadata = {};
  export let data = {};
  /** @type {remarkHeadingPlugin[]} */
	export let headings = [];
  // console.log('post data:', $$props);
</script>

<svelte:head><title>{title} | RBE</title></svelte:head>
<main>
  <h1>Post: {title}</h1>
  <p class="date">on: {lastmod}</p>
  <p class="date">by: {author}</p>
  <div class="description hidden">{description}</div>
  {#each headings as heading}
    <div>{heading.value} ({heading.depth})</div>
  {/each}
    <slot>
      <!-- the mdsvex content will be slotted in here -->
    </slot>
  </main>