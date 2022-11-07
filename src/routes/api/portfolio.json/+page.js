import { sortedPortfolios } from '$lib/portfolio';

export const GET = async () => {
  return {
    body: sortedPortfolios
  }
}
