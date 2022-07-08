<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Settings from '$lib/settings';

	export let title = '';
	export let author = '';
	export let description = '';
	/** @type {Array.<Object.<string, string>>} */
	export let meta = [];
	export let updated_at = '';
	export let created_at = '';
	/** @type {Array.<string>} */
	export let tags = [];
	/** @type {Array.<string>} */
	export let categories = [];
	export let coverAlt = '';
	/** @type {?string} */
	export let coverImage = null;
	export let excerpt = '';
	export let comments = '';
	export let view = '';
	export let layout = '';
	export let lang = '';
	export let articleType = 'BlogPosting';

	/** @type {boolean} */
	export let cover = false;
	/** @type string|null */
	export let opengraphImage = null;
	/** @type string|null */
	export let twitterImage = null;

	if (!twitterImage) twitterImage = opengraphImage || Settings.posts.default_image;
	if (!opengraphImage) opengraphImage = twitterImage || Settings.posts.default_image;

	let pageUrl = '';
	let siteUrl = '';
	let socialCardType =
		opengraphImage || twitterImage || coverImage ? 'summary_large_image' : 'summary';

	onMount(() => {
		siteUrl = window.location.href;
		pageUrl = siteUrl + page.path;
	});

	/** @type {remarkHeadingPlugin[]} */
	export let headings = [];

	const ldjson = {
		'@context': 'https://schema.org',
		'@type': articleType,
		headline: title,
		description: description,
		datePublished: created_at,
		datemodified: updated_at,
		mainEntityOfPage: 'True',
		image: {
			'@type': 'imageObject',
			url: `${coverImage || opengraphImage || twitterImage}`,
			height: '600',
			width: '800'
		},
		publisher: {
			'@type': 'Organization',
			name: 'Rude Boy Enterprises',
			logo: {
				'@type': 'imageObject',
				url: `${siteUrl}/rbe-logo.png`
			}
		},
		author: {
			'@type': 'Person',
			name: author
		},
		sharedContent: [
			{
				'@type': 'WebPage',
				headline: title,
				url: pageUrl,
				author: {
					'@type': 'Person',
					name: author
				}
			}
		],
		articleBody: ''
	};
</script>

<svelte:head>
	<!-- TODO: add OpenGraph stuff here to fill in more metadata for each og:* entry. https://css-tricks.com/essential-meta-tags-social-media/ -->
	{#each meta as prop}
		<meta property={prop.property} content={prop.content} />
	{/each}
	<link rel="canonical" href={pageUrl} />
	<!-- Facebook Meta Tags -->
	<meta property="og:site_name" content="Rude Boy Solutions" />
	<meta property="article:published_time" content={updated_at} />
	<meta property="article:author" content={author} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{title} - RBE" />
	<meta property="og:image" content={opengraphImage} />
	<meta property="og:description" content={description} />

	<!-- Twitter Meta Tags (twitter also uses og tags) -->
	<meta name="twitter:card" content={socialCardType} />
	<meta property="twitter:site" content="@skamansam" />
	<meta name="twitter:creator" content="@{author}" />
	<meta name="twitter:image" content={twitterImage} />

	<title>{title} | RBE</title>
	<meta name="description" content={description} />
	<!-- /* prettier-ignore */ -->
	{@html `<script type="application/ld+json">${JSON.stringify(ldjson)}</script>`}
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
	<article itemscope itemtype="https://schema.org/Article">
		<meta itemprop="url" content={pageUrl} />
		<hgroup>
			<h1 itemprop="name">{title}</h1>
			<p class="date created_at">
				posted on: <span itemprop="pubDate">{new Date(created_at || null).toLocaleString()}</span>
			</p>
			{#if updated_at !== created_at}
				<p class="date updated_at">
					last updated: <span itemprop="datemodified"
						>{new Date(updated_at || null).toLocaleString()}</span
					>
				</p>
			{/if}
			<p class="author">by: <span itemprop="author" content="@{author}" />{author}</p>
		</hgroup>
		<div class="description hidden" itemprop="description">{description}</div>
		<slot />
	</article>
</main>
