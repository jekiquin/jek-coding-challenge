import axios from 'axios';

const LIMIT = 10;
const SORT_DIR = 'desc';
const BASEURL = process.env.API_KEY
	? 'https://pro-api.coinmarketcap.com/v1'
	: 'https://sandbox-api.coinmarketcap.com/v1';
const API_KEY = process.env.API_KEY || 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c';

const instance = axios.create({
	baseURL: BASEURL,
	headers: {
		'X-CMC_PRO_API_KEY': API_KEY
	}
});

export const getTopCoins = async (unit = 'CAD') => {
	const response = await instance.get(
		`/cryptocurrency/listings/latest?sort_dir=${SORT_DIR}&limit=${LIMIT}&convert=${unit}`
	);
	return response.data;
};

export const getCoin = async (id, unit = 'CAD') => {
	const response = await instance.get(`cryptocurrency/quotes/latest?id=${id}&convert=${unit}`);
	return response.data;
};
