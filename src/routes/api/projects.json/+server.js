import { sortedProjects } from '$lib/projects';
import { json } from '@sveltejs/kit'

export const GET = async () => {
  return json(sortedProjects)
}
