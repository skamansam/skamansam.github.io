import type { PostJSON } from '$lib/types';
import readingTime from 'reading-time';
export const allPostFiles = import.meta.glob('../routes/posts/**/*.md');

export const allPosts:PostJSON[] = await Promise.all(
  Object.entries(allPostFiles).map(async ([path, resolver]) => {
    const fileData = await resolver();
    const { metadata } = fileData;
    const pathAry = path.split('/');
    const sitePath = pathAry.slice(-2).join('/').slice(0,-3);
    metadata.readingTime = readingTime(metadata.textContent).text

    return {
      meta: metadata,
      path: sitePath,
      slug: metadata?.slug || pathAry.slice(-1).join('').slice(0,-3),
    }
  })
)

export const publishedPosts = allPosts.filter((post) => !(post.meta.draft))

export const sortedPosts = publishedPosts.sort((a, b) => {
  return new Date(a.meta.created_at) < new Date(b.meta.created_at) ? 1 : -1
})

export default {
  sortedPosts,
  publishedPosts,
  allPostFiles,
  allPosts,
}