import useSWR from 'swr';

const fetcher = async (url) => {
	const response = await axios.get(url);
	console.log(response);
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
