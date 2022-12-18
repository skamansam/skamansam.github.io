/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ fetch }) => {
	const portfolios = await fetch('/api/portfolio.json');
	/** @type {Portfolio[]} */
	const allPortfolios = await portfolios.json();
	return {
			portfolios: allPortfolios
	};
};
