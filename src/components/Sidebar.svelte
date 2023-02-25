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
    let xDown = null;
    let yDown = null;

    function handleTouchStart(evt) {
        const firstTouch = evt.touches[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        const xDiff = xDown - xUp;
        const yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 10 ) {
                /* right swipe */
                navOpen = false;
            } else {
                /* left swipe */
                navOpen = true;
            }
        } else {
            if ( yDiff > 0 ) {
                /* down swipe */
            } else {
                /* up swipe */
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
  }

</script>

<nav class="sidebar {clazz}" class:nav-open={navOpen}>
	<div class="menuButton" on:click={toggleNav}>
		<div class="hamburger"/>
	</div>
	<ul class="navMenu">
		{#each nav as navItem}
			<li class:active={isActive(navItem)}>
				<a href={navItem.link} on:click={toggleNav}>
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
