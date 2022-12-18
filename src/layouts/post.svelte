<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import Settings from '$lib/settings';
  import { readingTime } from 'reading-time-estimator';

  export let data;
  console.log('DATA', data);
  export let slug;
  console.log('PROPS', $$props)
  // export let preview;
  // export let previewHtml;
  export let textContent;
  /** @type {import('reading-time-estimator').readingTime} */
  console.log('text',textContent);
  export let timeToRead = readingTime(textContent || '', 30);
	export let title = '';
	export let author = '';
	export let description = '';
	/** @type {Array.<Object.<string, string>>} */
	export let meta = [];
	export let updated_at = '';
	export let created_at = '';
	// /** @type {Array.<string>} */
	// export let tags = [];
	// /** @type {Array.<string>} */
	// export let categories = [];
	// export let coverAlt = '';
	/** @type {?string} */
	export let coverImage = null;
	// export let excerpt = '';
	// export let comments = '';
	// export let view = '';
	// export let layout = '';
	// export let lang = '';
	export let articleType = 'BlogPosting';

	// /** @type {boolean} */
	// export let cover = false;
	/** @type string|null */
	export let opengraphImage = null;
	/** @type string|null */
	export let twitterImage = null;

	if (!twitterImage) twitterImage = opengraphImage || Settings.posts.default_image;
	if (!opengraphImage) opengraphImage = twitterImage || Settings.posts.default_image;

	let pageUrl = $page.url.toString();
	let siteUrl = $page.url.origin;
	let socialCardType =
		opengraphImage || twitterImage || coverImage ? 'summary_large_image' : 'summary';

	onMount(() => {
		// siteUrl = window.location.href;
		// pageUrl = siteUrl + page.path;
	});

	// /** @type {remarkHeadingPlugin[]} */
	// export let headings = [];

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
		articleBody: textContent
	};
  const ldjsonTag = `<script type="application/ld+json">${JSON.stringify(ldjson)}\<\/script>`
</script>

<svelte:head>
	<!-- TODO: add OpenGraph stuff here to fill in more metadata for each og:* entry. https://css-tricks.com/essential-meta-tags-social-media/ -->
	{#each meta as prop}
		<meta property={prop.property} content={prop.content} />
	{/each}
	<link rel="canonical" href={pageUrl} />
	<!-- Facebook Meta Tags -->
	<meta property="og:site_name" content={Settings.site.title} />
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
	{ @html ldjsonTag }
</svelte:head>

<main>
	<article itemscope itemtype="https://schema.org/Article">
		<meta itemprop="url" content={pageUrl} />
		<hgroup>
			<h1 itemprop="name">{title}</h1>
			<p class="date created_at">
				posted on: <span itemprop="pubDate">{new Date(created_at).toLocaleString()}</span>
			</p>
			{#if updated_at ?? updated_at !== created_at}
				<p class="date updated_at">
					last updated: <span itemprop="datemodified"
						>{new Date(updated_at).toLocaleString()}</span
					>
				</p>
			{/if}
			<p class="author">by: <span itemprop="author" content="@{author}" />{author}</p>
			<p class="readingTime"><span itemprop="readingTime" />Reading Time: {timeToRead.text}</p>
		</hgroup>
		<div class="description hidden" itemprop="description">{description}</div>
		<slot />
	</article>
</main>
