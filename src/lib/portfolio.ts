export const allPortfolioFiles = import.meta.glob('../routes/portfolio/**/*.md');

export const allPortfolios:PortfolioJSON[] = await Promise.all(
  Object.entries(allPortfolioFiles).map(async ([path, resolver]) => {
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

export const publishedPortfolios = allPortfolios.filter((portfolio) => !(portfolio.meta.draft))

export const sortedPortfolios = publishedPortfolios.sort((a, b) => {
  return new Date(a.meta.created_at) < new Date(b.meta.created_at) ? 1 : -1 
})

export default {
  sortedPortfolios,
  publishedPortfolios,
  allPortfolioFiles,
  allPortfolios,
}