import { createContext, useContext, useState } from 'react';

const CoinContext = createContext();

export const useCoinContext = () => {
	return useContext(CoinContext);
};

export default function CoinProvider({ children }) {
	const [selectedCoin, setSelectedCoin] = useState(null);
	const [showModal, setShowModal] = useState(false);

	return (
		<CoinContext.Provider value={{ selectedCoin, setSelectedCoin, showModal, setShowModal }}>
			{children}
		</CoinContext.Provider>
	);
}
