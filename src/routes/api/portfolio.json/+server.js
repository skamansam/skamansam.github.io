import { sortedPortfolios } from '$lib/portfolio';
import { json } from '@sveltejs/kit'
export const GET = async () => {
  return json(sortedPortfolios)
}
