<script lang="ts">
	import Card from '../../components/Card.svelte';
  import Badge from '../../components/Badge.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  const portfolios = $derived(data.portfolios || []);
</script>

{#each portfolios as portfolio}
	<Card
		title={portfolio.meta.title}
		to={portfolio.path}
		subtitle={portfolio.meta.description}
		metadata="Published {new Date(portfolio.meta.created_at).toLocaleString()}"
    class="my-3 rounded-xl border p-2"
	>
    <span slot="badges">
      {#each (portfolio.meta?.categories || []) as category}
        <Badge text={category} to="/categories/{category}"/>
      {/each}
    </span>
    <span slot="metadata">
      Published {new Date(portfolio.meta.created_at).toLocaleString()}
      {#each (portfolio.meta?.tags || []) as tag}
        <a href="/tags/{tag}">#{tag}</a>
      {/each}
    </span>		{portfolio.meta.excerpt}
	</Card>
{/each}