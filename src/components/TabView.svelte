<script lang="ts">
  let activeTab = $state(0);
  let tabElements = $state<HTMLElement | null>(null);
  let tabNames = $state<string[]>([]);

  $effect(() => {
    if (tabElements) {
      console.log(tabElements.children);
      tabNames = Array.from(tabElements.children).map(el => el.getAttribute('title') || '');
      Array.from(tabElements.children).forEach(el => el.setAttribute('role', 'tabpanel'));
      const tab = tabElements.children[activeTab];
      if (tab) {
        tab.classList.add('active');
      }
    }
  });

  const setActiveTab = (idx: number) => {
    if (!tabElements) return;
    const tab = tabElements.children[idx];
    const currentTab = tabElements.children[activeTab];
    if (currentTab) {
      currentTab.classList.remove('active');
    }
    if (tab) {
      tab.classList.add('active');
    }
    activeTab = idx;
  }
</script>

<div>
  <ul role="tablist" class="tabList">
    {#each tabNames as tabName, idx}
      <li role="tab" class="tab {idx === activeTab && 'active' }" onclick={() => setActiveTab(idx)}>{tabName}</li>
    {/each }
  </ul>
  <div class="tabPanels border rounded-sm p-2" bind:this={tabElements}>
    <slot></slot>
  </div>
</div>


<style type="text/postcss">
  @reference "../styles/default.css";
  .tabList {
    @apply flex justify-start align-middle list-none p-0 m-0;
  }
  .tabList li {
    @apply inline-block font-bold text-lg p-2 pb-1 mr-1 cursor-pointer border border-b-0 rounded-t-lg;
  }
  .tabList li:hover {
    @apply bg-secondaryBg text-onSecondaryBg border-secondaryBg;
  }
  .tabList li.active {
    @apply bg-tertiaryBg text-onTertiaryBg border-tertiaryBg;
  }
  .tabPanels > :global(*) {
    @apply hidden;
  }
  .tabPanels > :global(.active) {
    @apply block;
  }

  </style>