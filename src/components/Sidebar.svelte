<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Rss } from '@steeze-ui/heroicons';
  import { browser } from '$app/environment';

  interface Props {
    class?: string;
    nav?: NavLink[];
  }

	let { 
    class: clazz = '',
    nav = [
      { name: 'Portfolio', link: '/portfolio' },
      { name: 'Blog', link: '/posts' },
      { name: 'Projects', link: '/projects' },
      { name: 'About', link: '/about' },
      { name: 'Contact', link: '/contact' },
      { name: 'MD Demo', link: '/demo' },
      { icon: Rss, link: '/rss.xml' }
    ]
  }: Props = $props();

  let navOpen = $state(false);
  const toggleNav = () => {
    navOpen = !navOpen;
  }

	const isActive = ({ link }: NavLink) => {
		return link === $page.url.pathname;
	};
  let supportsTouch = $state(false);

  $effect(() => {
    if (browser) {
      supportsTouch = !!('ontouchstart' in window || navigator.maxTouchPoints);

      let xDown : number | null = null;

      function handleTouchStart(evt:TouchEvent) {
          const firstTouch = evt.touches[0];
          xDown = firstTouch.clientX;
      }

      function handleTouchMove(evt:TouchEvent) {
          if ( !xDown) return;

          const xUp = evt.touches[0].clientX;
          const xDiff = xUp - xDown;

          if ( Math.abs( xDiff ) > 7 ) { // swipe tolerance
                navOpen = xDiff > 0;
          }
          xDown = null;
      }

      document.addEventListener('touchstart', handleTouchStart, false);
      document.addEventListener('touchmove', handleTouchMove, false);

      return () => {
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
      };
    }
  });

</script>

<nav class="sidebar {clazz}" class:nav-open={navOpen}>
	<div class="menuButton" onclick={toggleNav} onkeypress={toggleNav}>
		<div class="hamburger"/>
	</div>
	<ul class="navMenu">
		{#each nav as navItem}
			<li class:active={isActive(navItem)}>
				<a href={navItem.link} onclick={toggleNav} onkeypress={toggleNav} class="text-onPrimaryBg">
					{#if navItem.icon}
						<Icon src={Rss} theme="solid" width="20" height="20" />
					{/if}
					{navItem.name || ''}</a
				>
			</li>
		{/each}
	</ul>
  {#if supportsTouch}
    <div class="open-text">Slide right to open menu. --&gt;</div>
  {/if}
</nav>

<style>
</style>
