import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('/api/projects.json');
  const projects = await response.json();
  return {
    projects
  };
};
