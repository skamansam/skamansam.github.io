/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  const posts = await fetch('/api/posts.json');
  const latestPosts = await posts.json();
  const projects = await fetch('/api/projects.json');
  const latestProjects = await projects.json();
  return {
    latestPosts: latestPosts.slice(0, 3),
    latestProjects: latestProjects.slice(0, 3)
  };
};
