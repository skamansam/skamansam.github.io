<script lang="ts">
	import { page } from '$app/stores';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Rss } from '@steeze-ui/heroicons';

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

	const isActive = ({ link }: NavLink) => {
		return link === $page.url.pathname;
	};
</script>

<nav class="sidebar {clazz}">
	<div class="menuButton">
		<div class="menuButtonBar TopBar" />
		<div class="menuButtonBar MiddleBar" />
		<div class="menuButtonBar BottomBar" />
	</div>
	<ul class="navMenu">
		{#each nav as navItem}
			<li class:active={isActive(navItem)}>
				<a href={navItem.link}>
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
	@media only screen and (max-width: 700px) {
		.navMenu {
      @apply hidden;
		}
		.menuButton {
      @apply inline-block !important;
		}
	}
	.menuButton {
    @apply p-1 rounded-lg border-2 border-slate-600 hidden cursor-pointer;
	}

	.menuButtonBar {
		width: 35px;
		height: 5px;
		background-color: #333;
		margin: 6px 0;
		transition: 0.4s;
	}
	.menuButton .menuButtonBar.MiddleBar,
	.menuButton .menuButtonBar.BottomBar {
		width: 70%;
		margin-left: 30%;
	}
	/* Rotate first bar */
	.menuButton:hover .menuButtonBar.TopBar {
		-webkit-transform: rotate(-45deg) translate(-9px, 6px);
		transform: rotate(-45deg) translate(-9px, 6px);
	}

	/* Fade out the second bar */
	.menuButton:hover .menuButtonBar.MiddleBar {
		opacity: 0;
	}

	/* Rotate last bar */
	.menuButton:hover .menuButtonBar.BottomBar {
		-webkit-transform: rotate(45deg) translate(-8px, -8px);
		transform: rotate(45deg) translate(-8px, -8px);
	}
</style>
