import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

export const useCoins = () => {
	const { data, error } = useSWR('/api/get-coins', fetcher);

	return {
		coins: data,
		isLoading: !error && !data,
		isError: error
	};
};
