<script context="module">
  export const load = async ({ params, fetch }) => {
    const currentTag = params.tag
    const response = await fetch('/api/posts.json')
    const posts = await response.json()

    const taggedPosts = posts
      .filter(post => post.meta.tags?.includes(currentTag) || post.meta.categories?.includes(currentTag))

    return {
      props: {
        posts: taggedPosts
      }
    }
  }
</script>