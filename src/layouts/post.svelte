<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
	
  export let title = '';
	export let author = '';
	export let lastmod = '';
	export let description = '';
  export let meta = [];  
	export let updated_at = '';
	export let created_at = '';
	export let tags = [];
	export let categories = [];
	export let coverAlt = '';
	export let coverImage = '';
  export let excerpt = '';
  export let comments = '';
  export let view = '';
  export let layout = '';
  export let lang = '';
  export let cover = '';
  export let opengraphImage = '';
  export let twitterImage = '';
  let siteUrl = '';

  onMount(() => siteUrl = window.location.href);
  
  /** @type {remarkHeadingPlugin[]} */
	export let headings = [];
</script>

<svelte:head>
  <!-- TODO: add OpenGraph stuff here to fill in more metadata for each og:* entry. https://css-tricks.com/essential-meta-tags-social-media/ -->
  {#each meta as prop}
    <meta property="{prop.property}" content="{prop.content}" />
  {/each}
  
  <!-- Facebook Meta Tags -->
  <meta property="og:url" content="{siteUrl}{page.path}" />
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="{title}" />
  <meta property="og:image" content="{opengraphImage || twitterImage || cover}" />
  <meta property="og:description" content="{description}"/>

  <!-- Twitter Meta Tags (twitter also uses og tags) -->
  <meta name="twitter:card" content="summary_large_image"/>
  <meta property="twitter:site" content="@skamansam"/>
  <meta name="twitter:creator" content="@{author}"/>
  <meta name="twitter:image" content="{twitterImage || opengraphImage || cover}"/>

  <title>{title} | RBE</title>
  <meta name="description" content="{description}"/>
</svelte:head>
<main>
  <h1>Post: {title}</h1>
  <p class="date">on: {new Date(created_at || null).toLocaleString()}</p>
  <p class="author">by: {author}</p>
  <div class="description hidden">{description}</div>
  {#each headings as heading}
    <div>{heading.value} ({heading.depth})</div>
  {/each}
    <slot>
      <!-- the mdsvex content will be slotted in here -->
    </slot>
  </main>