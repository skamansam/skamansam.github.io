<script>
	import { page } from '$app/stores';
	import Settings from '$lib/settings';

	export let title = '';
	export let description = '';
	export let name = '';
	export let nickname = '';
	export let role = '';
	export let avatar = '';
	export let created_at = '';
	export let lang = 'en';
	/** @type {Array.<{name: string, url: string}>} */
	export let social = [];
	/** @type {Array.<{property?: string, name?: string, content: string}>} */
	export let meta = [];
	export let authorPosts = [];

	let pageUrl = $page.url.toString();
	let siteUrl = $page.url.origin;
</script>

<svelte:head>
	<title>{title} | RBE</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={pageUrl} />
	
	<!-- Open Graph Meta Tags -->
	<meta property="og:site_name" content={Settings.site.title} />
	<meta property="og:url" content={pageUrl} />
	<meta property="og:type" content="profile" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if avatar}
		<meta property="og:image" content={siteUrl + avatar} />
	{/if}
	
	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary" />
	<meta property="twitter:site" content="@skamansam" />
	
	<!-- Additional meta tags from frontmatter -->
	{#each meta as prop}
		{#if prop.property}
			<meta property={prop.property} content={prop.content} />
		{:else if prop.name}
			<meta name={prop.name} content={prop.content} />
		{/if}
	{/each}
</svelte:head>

<main>
	<article class="author-profile" itemscope itemtype="https://schema.org/Person">
		<header class="author-header">
			{#if avatar}
				<figure class="author-avatar">
					<img src={avatar} alt={name || nickname} itemprop="image" />
				</figure>
			{/if}
			
			<div class="author-info">
				<h1 itemprop="name">{name || nickname}</h1>
				{#if role}
					<p class="author-role" itemprop="jobTitle">{role}</p>
				{/if}
				{#if description}
					<p class="author-description" itemprop="description">{description}</p>
				{/if}
			</div>
		</header>

		{#if social && social.length > 0}
			<nav class="author-social">
				<h2>Connect</h2>
				<ul>
					{#each social as link}
						<li>
							<a href={link.url} rel="me noopener noreferrer" target="_blank" itemprop="url">
								{link.name}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		{/if}

		<section class="author-posts">
			<h2>Posts by {name || nickname}</h2>
			
			{#if authorPosts.length === 0}
				<p class="no-posts">No posts found by this author.</p>
			{:else}
				<ul class="posts-list">
					{#each authorPosts as post}
						<li class="post-item">
							<article>
								<h3>
									<a href="/posts/{post.path}">{post.meta.title}</a>
								</h3>
								<p class="post-meta">
									<time datetime={post.meta.created_at}>
										{new Date(post.meta.created_at).toLocaleDateString('en-US', { 
											year: 'numeric', 
											month: 'long', 
											day: 'numeric' 
										})}
									</time>
									{#if post.meta.readingTime}
										<span class="reading-time"> • {post.meta.readingTime}</span>
									{/if}
								</p>
								{#if post.meta.description}
									<p class="post-description">{post.meta.description}</p>
								{/if}
								{#if post.meta.tags && post.meta.tags.length > 0}
									<div class="post-tags">
										{#each post.meta.tags as tag}
											<span class="tag">{tag}</span>
										{/each}
									</div>
								{/if}
							</article>
						</li>
					{/each}
				</ul>
			{/if}
		</section>

		<section class="author-content">
			<slot />
		</section>
	</article>
</main>

<style>
	.author-profile {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	.author-header {
		display: flex;
		gap: 2rem;
		align-items: flex-start;
		margin-bottom: 3rem;
		flex-wrap: wrap;
	}

	.author-avatar {
		margin: 0;
		flex-shrink: 0;
	}

	.author-avatar img {
		width: 150px;
		height: 150px;
		border-radius: 50%;
		object-fit: cover;
		display: block;
	}

	.author-info {
		flex: 1;
		min-width: 250px;
	}

	.author-info h1 {
		margin: 0 0 0.5rem 0;
		font-size: 2rem;
	}

	.author-role {
		color: #666;
		font-style: italic;
		margin: 0 0 1rem 0;
	}

	.author-description {
		line-height: 1.6;
		margin: 0;
	}

	.author-social {
		margin-bottom: 3rem;
	}

	.author-social h2 {
		font-size: 1.25rem;
		margin-bottom: 1rem;
	}

	.author-social ul {
		list-style: none;
		padding: 0;
		display: flex;
		gap: 1.5rem;
		flex-wrap: wrap;
	}

	.author-social li {
		margin: 0;
	}

	.author-social a {
		text-decoration: none;
		color: #0066cc;
		font-weight: 500;
		text-transform: capitalize;
	}

	.author-social a:hover {
		text-decoration: underline;
	}

	.author-posts {
		margin-bottom: 3rem;
	}

	.author-posts h2 {
		font-size: 1.75rem;
		margin-bottom: 1.5rem;
	}

	.posts-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.post-item {
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 1px solid #e0e0e0;
	}

	.post-item:last-child {
		border-bottom: none;
	}

	.post-item h3 {
		margin: 0 0 0.5rem 0;
		font-size: 1.5rem;
	}

	.post-item h3 a {
		text-decoration: none;
		color: #333;
	}

	.post-item h3 a:hover {
		color: #0066cc;
	}

	.post-meta {
		color: #666;
		font-size: 0.9rem;
		margin: 0 0 0.75rem 0;
	}

	.post-description {
		line-height: 1.6;
		margin: 0 0 0.75rem 0;
	}

	.post-tags {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag {
		background: #f0f0f0;
		padding: 0.25rem 0.75rem;
		border-radius: 3px;
		font-size: 0.85rem;
		color: #555;
	}

	.loading,
	.error,
	.no-posts {
		padding: 2rem;
		text-align: center;
		color: #666;
		font-style: italic;
	}

	.error {
		color: #c00;
	}

	.author-content {
		border-top: 1px solid #e0e0e0;
		padding-top: 2rem;
	}

	@media (max-width: 600px) {
		.author-header {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}

		.author-avatar img {
			width: 120px;
			height: 120px;
		}

		.author-social ul {
			justify-content: center;
		}

		.post-item h3 {
			font-size: 1.25rem;
		}
	}
</style>
