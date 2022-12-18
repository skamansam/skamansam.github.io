<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const latestPosts = await posts.json();
		const projects = await fetch('/api/projects.json');
		const latestProjects = await projects.json();
		return {
			props: {
				latestPosts: latestPosts.slice(0, 3),
				latestProjects: latestProjects.slice(0, 3)
			}
		};
	};
</script>

<script lang="js">
  import Card from '../components/Card.svelte'
  import Badge from '../components/Badge.svelte';
	let clazz = '';
	export { clazz as class };
  /** @type {PostJSON[]} */
	export let latestPosts = [];
</script>

<svelete:head>
  <title>Welcome to Rude Boy Solutions!</title>
</svelete:head>

<div class={clazz}>
  <Card title="Welcome to Rude Boy Solutions!">
    <p>This site is the online home of me, Samuel "Skaman Sam" Tyler. It outlines my adventures 
    in learning; its many problems and its many solutions. I hope you take this adventure with 
    me, at least one small one, and I hope it benefits you greatly... or only a little, as the case may be.</p>
  </Card>
  <h2>Latest Posts</h2>


{#each latestPosts as post}
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
<h2>Latest Projects</h2>
</div>
