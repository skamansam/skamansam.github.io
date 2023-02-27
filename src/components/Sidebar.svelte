<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Rss } from '@steeze-ui/heroicons';
  import { browser } from '$app/environment';
	let clazz = '';
	export { clazz as class };

	export let nav: NavLink[] = [
		{ name: 'Portfolio', link: '/portfolio' },
		{ name: 'Blog', link: '/posts' },
		{ name: 'Projects', link: '/projects' },
		{ name: 'About', link: '/about' },
		{ name: 'Contact', link: '/contact' },
		{ name: 'MD Demo', link: '/demo' },
		{ icon: Rss, link: '/rss.xml' }
	];

  let navOpen = false;
  const toggleNav = () => {
    navOpen = !navOpen;
  }

	const isActive = ({ link }: NavLink) => {
		return link === $page.url.pathname;
	};

  if (browser) {
    let xDown : number | null = null;
    // let yDown : number | null = null;

    function handleTouchStart(evt:TouchEvent) {
        const firstTouch = evt.touches[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt:TouchEvent) {
        if ( !xDown) return;

        const xUp = evt.touches[0].clientX;
        const xDiff = xUp - xDown;

        if ( Math.abs( xDiff ) > 7 ) { // swipe tolerance
              navOpen = xDiff > 0;
        }
        xDown = null;
    };

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
  }

</script>

<nav class="sidebar {clazz}" class:nav-open={navOpen}>
	<div class="menuButton" on:click={toggleNav} on:keypress={toggleNav}>
		<div class="hamburger"/>
	</div>
	<ul class="navMenu">
		{#each nav as navItem}
			<li class:active={isActive(navItem)}>
				<a href={navItem.link} on:click={toggleNav} on:keypress={toggleNav}>
					{#if navItem.icon}
						<Icon src={Rss} theme="solid" width="20" height="20" class="color-gray-900" />
					{/if}
					{navItem.name || ''}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
</style>
