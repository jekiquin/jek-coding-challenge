import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

export function useCoin(unit) {
	const { data, error } = useSWR(`/api/get-coins?unit=${unit}`, fetcher);
	return {
		coins: data,
		isLoading: !data && !error,
		isError: error
	};
}
