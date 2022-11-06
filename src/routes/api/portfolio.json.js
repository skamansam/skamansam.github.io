import { sortedPortfolios } from '$lib/portfolio';

export const get = async () => {
  return {
    body: sortedPortfolios
  }
}
