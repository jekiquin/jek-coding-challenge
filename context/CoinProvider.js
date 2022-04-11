import { createContext, useState, useEffect, useContext } from 'react';
import useSWR from 'swr';
import axios from 'axios';

const CoinsContext = createContext();

export const useCoinsContext = () => {
	return useContext(CoinsContext);
};

const fetcher = async (url) => {
	const response = await axios.get(url);
	return response.data;
};

export default function CoinsProvider({ children }) {
	const [coins, setCoins] = useState(null);
	const { data } = useSWR('api/get-coins', fetcher);

	useEffect(() => {
		setCoins(data);
	}, [data]);

	return <CoinsContext.Provider value={coins}>{children}</CoinsContext.Provider>;
}
