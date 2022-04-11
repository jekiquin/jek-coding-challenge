import axios from 'axios';

const LIMIT = 10;
const SORT_DIR = 'desc';

const instance = axios.create({
	baseURL: 'https://pro-api.coinmarketcap.com/v1',
	headers: {
		'X-CMC_PRO_API_KEY': process.env.REACT_APP_X_CMC_PRO_API_KEY
	}
});

export const getTopCoins = async () =>
	await instance.get(`/cryptocurrency/listings/latest?sort_dir=${SORT_DIR}&limit=${LIMIT}`);
