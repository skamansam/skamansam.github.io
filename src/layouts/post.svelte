<script>
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

  /** @type {remarkHeadingPlugin[]} */
	export let headings = [];
</script>

<svelte:head>
  <!-- TODO: add OpenGraph stuff here to fill in more metadata for each og:* entry. https://css-tricks.com/essential-meta-tags-social-media/ -->
  {#each meta as prop}
    <meta property="{prop.property}" content="{prop.content}" />
  {/each}
  <!-- <meta property="og:title" content="{title}" />
  <meta property="og:type" content="video.movie" />
  <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
  <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" /> -->

  <title>{title} | RBE</title>
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