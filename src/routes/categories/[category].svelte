<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentCategory = params.category
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const taggedPosts = posts
      .filter(post => post.meta.tags?.includes(currentCategory) || post.meta.categories?.includes(currentCategory))

    return {
      props: {
        posts: taggedPosts
      }
    }
  }
</script>