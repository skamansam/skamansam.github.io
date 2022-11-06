<script context="module">

  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ params, fetch }) => {
    const currentTag = params.tag
    const response = await fetch('/api/posts.json')

    const posts = await response.json()

    /** @type {PostJSON} */
    const taggedPosts = posts
      .filter((/** @type {PostJSON} */ post) => post.meta.tags?.includes(currentTag) || post.meta.categories?.includes(currentTag))

    return {
      props: {
        posts: taggedPosts
      }
    }
  }
</script>