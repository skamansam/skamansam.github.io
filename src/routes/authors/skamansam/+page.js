import { sortedPosts } from '$lib/posts';

export async function load({ params }) {
	const nickname = 'skamansam';
	
	// Filter posts by author
	const authorPosts = sortedPosts.filter(post => post.meta.author === nickname);
	
	return {
		authorPosts
	};
}
