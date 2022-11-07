import { sortedProjects } from '$lib/projects';

export const GET = async () => {
  return {
    body: sortedProjects
  }
}
