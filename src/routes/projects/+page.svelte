<script lang="ts">
	import Card from '../../components/Card.svelte';
  import Badge from '../../components/Badge.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  const projects = $derived(data.projects || []);
</script>

<h1>Projects</h1>

{#if projects.length < 1}
  <p>There are no projects entered here. See my Github Page or my Portfolio for current projects.</p>
{/if}

{#each projects as project}
	<Card
		title={project.meta.title}
		to={project.path}
		subtitle={project.meta.description}
		metadata="Published {new Date(project.meta.created_at).toLocaleString()}"
    class="my-3 rounded-xl border p-2"
	>
    <span slot="badges">
      {#each (project.meta?.categories || []) as category}
        <Badge text={category} to="/categories/{category}"/>
      {/each}
    </span>
    <span slot="metadata">
      Published {new Date(project.meta.created_at).toLocaleString()}
      {#each (project.meta?.tags || []) as tag}
        <a href="/tags/{tag}">#{tag}</a>
      {/each}
    </span>		{project.meta.excerpt}
	</Card>
{/each}