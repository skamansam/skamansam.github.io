<script lang="js">
  import Card from '../components/Card.svelte'
  import Badge from '../components/Badge.svelte';
	import Avatar from '../components/Avatar.svelte';

  /** @type {import('./$types').PageData} */
 export let data;

  let clazz = '';
	export { clazz as class };
  /** @type {PostJSON[]} */
	const {latestPosts, latestProjects} = data;
</script>

<svelete:head>
  <title>Welcome to Rude Boy Solutions!</title>
</svelete:head>

<div class="text-center flex justify-center my-2">
  <Avatar scale=".66"/>
</div>

<div class={clazz}>
  <Card title="Welcome to RudeBoy.dev!">
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
		metadata="Published {new Date(post.meta.created_at).toLocaleString()} {post.meta.readingTime}"
    badges={post.meta?.categories}
    tags={post.meta?.tags}
	>		{post.meta.excerpt}
	</Card>
{/each}
<h2>Latest Projects</h2>
</div>
