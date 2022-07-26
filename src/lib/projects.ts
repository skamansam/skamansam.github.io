export const allProjectFiles = import.meta.glob('../routes/projects/**/*.md');

export const allProjects:ProjectJSON[] = await Promise.all(
  Object.entries(allProjectFiles).map(async ([path, resolver]) => {
    const { metadata } = await resolver()
    const pathAry = path.split('/');
    const sitePath = pathAry.slice(-2).join('/').slice(0,-3);

    return {
      meta: metadata,
      path: sitePath,
      slug: metadata?.slug || pathAry.slice(-1).join('').slice(0,-3),
    }
  })
)

export const publishedProjects = allProjects.filter((project) => !(project.meta.draft))

export const sortedProjects = publishedProjects.sort((a, b) => {
  return new Date(a.meta.created_at) < new Date(b.meta.created_at) ? 1 : -1 
})

export default {
  sortedProjects,
  publishedProjects,
  allProjectFiles,
  allProjects,
}