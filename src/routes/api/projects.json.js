import { sortedProjects } from '$lib/projects';

export const get = async () => {
  return {
    body: sortedProjects
  }
}
