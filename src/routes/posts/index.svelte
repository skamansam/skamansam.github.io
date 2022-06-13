<script context="module">
	import Card from '../../components/Card.svelte';
  import Badge from '../../components/Badge.svelte';
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();
		console.log(allPosts);
		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

{#each posts as post}
	<Card
		title={post.meta.title}
		to={post.path}
		subtitle={post.meta.description}
		metadata="Published {new Date(post.meta.created_at).toLocaleString()}"
	>
    <span slot="badges">
      {#each (post.meta?.categories || []) as category}
        <Badge text={category} to="/categories/{category}"/>
      {/each}
    </span>
    <span slot="metadata">
      Published {new Date(post.meta.created_at).toLocaleString()}
      {#each (post.meta?.tags || []) as tag}
        <a href="/tags/{tag}">#{tag}</a>
      {/each}
    </span>		{post.meta.excerpt}
	</Card>
{/each}
