import { createContext, useContext, useState } from 'react';

const CoinContext = createContext();

export const useCoinContext = () => {
	return useContext(CoinContext);
};

export default function CoinProvider({ children }) {
	const [selectedCoin, setSelectedCoin] = useState(null);
	const [purchaseAmount, setPurchaseAmount] = useState(0);

	const value = { selectedCoin, setSelectedCoin, purchaseAmount, setPurchaseAmount };

	return <CoinContext.Provider value={value}>{children}</CoinContext.Provider>;
}
