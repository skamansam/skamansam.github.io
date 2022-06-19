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

	/** @type string|null */
	export let cover = null;
	/** @type string|null */
	export let opengraphImage = null;
	/** @type string|null */
	export let twitterImage = null;

	if (!twitterImage) twitterImage = opengraphImage || cover;
	if (!opengraphImage) opengraphImage = twitterImage || cover;

	let pageUrl = '';
	let siteUrl = '';
	let socialCardType = opengraphImage || twitterImage || cover ? 'summary_large_image' : 'summary';

	onMount(() => {
		siteUrl = window.location.href;
		pageUrl = siteUrl + page.path;
	});

	/** @type {remarkHeadingPlugin[]} */
	export let headings = [];
</script>

<svelte:head>
	<!-- TODO: add OpenGraph stuff here to fill in more metadata for each og:* entry. https://css-tricks.com/essential-meta-tags-social-media/ -->
	{#each meta as prop}
		<meta property={prop.property} content={prop.content} />
	{/each}

	<!-- Facebook Meta Tags -->
	<meta property="og:site_name" content="Rude Boy Solutions" />
	<meta property="article:published_time" content={updated_at} />
	<meta property="article:author" content={author} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{title} - RBE" />
	<meta property="og:image" content={opengraphImage || twitterImage || cover} />
	<meta property="og:description" content={description} />

	<!-- Twitter Meta Tags (twitter also uses og tags) -->
	<meta name="twitter:card" content={socialCardType} />
	<meta property="twitter:site" content="@skamansam" />
	<meta name="twitter:creator" content="@{author}" />
	<meta name="twitter:image" content={twitterImage || opengraphImage || cover} />

	<title>{title} | RBE</title>
	<meta name="description" content={description} />
</svelte:head>

<!-- <meta property="og:site_name" content="Rude Boy Solutions" />
<div itemscope itemtype="http://schema.org/Article" class="hidden">
    <meta itemprop="url" content="{pageUrl}" />
    <span itemprop="name" content="{title} - RBE" />
    by <span itemprop="author" content="@{author}" />
    {#if opengraphImage}
    <img itemprop="image" src="{opengraphImage}" alt="{coverAlt}" />
    {/if}
    <span itemprop="description">{description}</span>
    <div itemprop="relatedItem" itemscope itemtype="http://schema.org/Article">
        <a itemprop="url" href="{pageUrl}">
    </div>
    <div itemprop="realatedItem" itemscope itemtype="http://schema.org/Article">
        <a itemprop="url" href="{siteUrl}/categories/{categories[0]}">
    </div>
    <span itemprop="datePublished" content="{new Date(updated_at).toString()}"></span>
</div> -->

<main>
	<article>
		<hgroup>
			<h1>{title}</h1>
			<p class="date created_at">posted on: {new Date(created_at || null).toLocaleString()}</p>
			{#if updated_at !== created_at}
				<p class="date updated_at">last updated: {new Date(updated_at || null).toLocaleString()}</p>
			{/if}
			<p class="author">by: {author}</p>
		</hgroup>
		<div class="description hidden">{description}</div>
		<slot />
	</article>
</main>
