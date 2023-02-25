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
  import NotFoundScreen from '../components/screens/NotFoundScreen.svelte'; // your own 404 screen component
  import { page } from '$app/stores';

  export let message:string = $page.error?.message;
  export let status:number = $page.status;
</script>
<svelte:head><title>OOps, {status}</title></svelte:head>

{#if status == 404} <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
  <NotFoundScreen />
{:else}
  <h1>{status}</h1>
  <p>{message}</p>
  <!-- <ErrorScreen {message} {status} /> -->
{/if}
