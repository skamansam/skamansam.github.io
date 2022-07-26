<script lang="ts">
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Rss } from '@steeze-ui/heroicons';
	let clazz = '';
	export { clazz as class };
</script>

<nav class="sidebar {clazz}">
	<ul class="">
		<li>
			<a href="/portfolio">Portfolio</a>
		</li>
		<li>
			<a href="/posts">Blog</a>
		</li>
    <li>
			<a href="/projects">Projects</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/contact">Contact</a>
		</li>
		<li>
			<a href="/demo">MD Demo</a>
		</li>
    <li>
      <a href="/rss.xml"
			><Icon src={Rss} theme="solid" width="" height="20" class="color-gray-900" /></a
      >
    </li>
  </ul>
</nav>
