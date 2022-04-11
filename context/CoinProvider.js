import { createContext, useState, useEffect, useContext } from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { useUnit } from './UnitProvider';

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
	const [unit] = useUnit();
	const { data } = useSWR(`api/get-coins?unit=${unit}`, fetcher);

	useEffect(() => {
		setCoins(data);
	}, [data]);

	return <CoinsContext.Provider value={[coins, setCoins]}>{children}</CoinsContext.Provider>;
}
