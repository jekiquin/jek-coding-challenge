import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

const url = {
	test: '/api/test',
	production: '/api/get-coins'
};

export function useCoins(unit) {
	const { data, error } = useSWR(`${url.test}?unit=${unit}`, fetcher);
	return {
		coins: data,
		isLoading: !data && !error,
		isError: error
	};
}
