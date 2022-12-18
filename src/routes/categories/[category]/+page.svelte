<script context="module">
  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const taggedPosts = posts
      .filter((/** @type {PostJSON} */ post) => post.meta.tags?.includes(currentCategory) || post.meta.categories?.includes(currentCategory))

    return {
      props: {
        posts: taggedPosts
      }
    }
  }
</script>