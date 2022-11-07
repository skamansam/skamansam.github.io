import { sortedPosts } from '$lib/posts';
import { json } from '@sveltejs/kit'

export const GET = () => {
  return json(sortedPosts);
}
