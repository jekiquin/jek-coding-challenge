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
	const [unit] = useUnit();
	const { data, error } = useSWR(`api/get-coins?unit=${unit}`, fetcher);

	const value = {
		coins: data,
		isLoading: !data && !error,
		isError: error
	};

	return <CoinsContext.Provider value={value}>{children}</CoinsContext.Provider>;
}
