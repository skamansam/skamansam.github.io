/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ fetch }) => {
	const posts = await fetch('/api/posts.json');
	/** @type {Post[]} */
	const allPosts = await posts.json();
	return {
		posts: allPosts
	};
};
