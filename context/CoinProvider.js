import { createContext, useContext, useState } from 'react';

const CoinContext = createContext();

export const useCoinContext = () => {
	return useContext(CoinContext);
};

export default function CoinProvider({ children }) {
	const [selectedCoin, setSelectedCoin] = useState(null);
	const [amount, setAmount] = useState(0);

	const value = { selectedCoin, setSelectedCoin, amount, setAmount };

	return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
}
