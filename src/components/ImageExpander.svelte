<script>
	export let src = '',
		title = '',
    /** @type {string|null} */
		caption = null,
		alt= '';
  /** @type {HTMLDialogElement|null} */
  let dialog = null;

  const showImage = () => dialog?.showModal();
  const close = () => dialog?.close()

  let clazz = '';
	export { clazz as class };

</script>

<style>
  dialog {
    @apply bg-secondarySoft
  }
  dialog::backdrop {
    background-color: black;
    opacity: 0.65;
  }
  img {
    cursor: zoom-in;
  }
  dialog img {
    cursor: zoom-out;
  }
</style>

<div class={clazz}>
	{#if caption != null}
		<figure>
			<img {src} {alt} {title} on:click={showImage} on:keydown={close}/>
			<figcaption>{caption}</figcaption>
		</figure>
  {:else}
    <img {src} {alt} {title} />
  {/if}
</div>

<dialog bind:this={dialog} on:click={close} on:keydown={close}>
  <img {src} {alt} {title} />
</dialog>