<script>
  // import mermaid from 'mermaid';
  import { onMount } from 'svelte';
  // import { browser } from '$app/environment';

  onMount(() => {
    // if(browser)
    //     window.mermaid.initialize({
    //     startOnLoad: true,
    //     theme: 'forest',
    // });  
  });

  </script>
  <div class="mermaid">
    <slot/>
  </div>