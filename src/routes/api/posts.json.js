import { sortedPosts } from '$lib/posts';

export const get = async () => {
  return {
    body: sortedPosts
  }
}
