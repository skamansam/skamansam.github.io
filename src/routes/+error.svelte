<script context="module" lang="ts">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = ({ error, status }) => ({
    props: {
      message: `${status}: ${error?.message}`,
      status,
    }
  });
</script>

<script lang="ts">
  // import ErrorScreen from '../components/screens/ErrorScreen.svelte'; // your own Error screen component
  // import NotFoundScreen from '../components/screens/NotFoundScreen.svelte'; // your own 404 screen component

  export let message:string;
  export let status:number;
</script>
<svelte:head><title>{status}</title></svelte:head>

<h1>{status}</h1>
<p>{message}</p>
{#if status == 404} <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
  <!-- <NotFoundScreen /> -->
{:else}
  <!-- <ErrorScreen {message} {status} /> -->
{/if}
