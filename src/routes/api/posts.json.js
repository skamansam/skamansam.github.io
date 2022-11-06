import { sortedPosts } from '$lib/posts';

export const GET = async () => {
  return {
    body: sortedPosts
  }
}
