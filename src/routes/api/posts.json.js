export const get = async () => {
  const allPostFiles = import.meta.glob('../posts/*.md')

  const allPosts = await Promise.all(
    Object.entries(allPostFiles).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const postPath = path.slice(2, -3)

      return {
        meta: metadata,
        path: postPath,
      }
    })
  )
  const publishedPosts = allPosts.filter((post) => !(post.meta.draft))

  const sortedPosts = publishedPosts.sort((a, b) => {
    return new Date(b.meta.created_at) - new Date(a.meta.created_at)
  })

  return {
    body: sortedPosts
  }
}
