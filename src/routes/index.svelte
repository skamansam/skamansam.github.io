<script lang="ts">
  import Card from '../components/Card.svelte'
	let clazz = '';
	export { clazz as class };
</script>

<svelete:head><title>Welcome to Rude Boy Solutions!</title></svelete:head>
<div class={clazz}>
  <Card title="Welcome to Rude Boy Solutions!">
    <p>This site is the online home of me, Samuel "Skaman Sam" Tyler. It outlines my adventures 
    in learning; its many problems and its many solutions. I hope you take this adventure with 
    me, at least one small one, and I hope it benefits you greatly... or only a little, as the case may be.</p>
  </Card>
  <h2>Latest Posts</h2>

  <h2>Latest Projects</h2>
</div>

