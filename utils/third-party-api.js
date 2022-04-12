import axios from 'axios';

const LIMIT = 10;
const SORT_DIR = 'desc';

const instance = axios.create({
	baseURL: 'https://pro-api.coinmarketcap.com/v1',
	headers: {
		'X-CMC_PRO_API_KEY': process.env.API_KEY
	}
});

export const getTopCoins = async (unit = 'USD') => {
	const response = await instance.get(
		`/cryptocurrency/listings/latest?sort_dir=${SORT_DIR}&limit=${LIMIT}&convert=${unit}`
	);
	return response.data;
};
