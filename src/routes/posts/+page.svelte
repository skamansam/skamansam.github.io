<script context="module">
	import Card from '../../components/Card.svelte';
  import Badge from '../../components/Badge.svelte';

</script>

<script lang="js">
  export let data;
  /** @type {{posts:PostJSON[]}} */
	export let {posts=[]} = data;
</script>
<h2>Posts</h2>

{#each posts as post}
	<Card
		title={post.meta.title}
		to={post.path}
		subtitle={post.meta.description}
		metadata="Published {new Date(post.meta.created_at).toLocaleString()}"
    class="my-3 rounded-xl border p-2"
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
