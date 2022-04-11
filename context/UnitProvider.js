import { createContext, useContext, useState } from 'react';

const UnitContext = createContext();

export const useUnit = () => {
	return useContext(UnitContext);
};

const UNITS = {
	USD: 'USD',
	CAD: 'CAD'
};

export default function UnitProvider({ children }) {
	const [unit, setUnit] = useState(UNITS.USD);

	return <UnitContext.Provider value={[unit, setUnit]}>{children}</UnitContext.Provider>;
}
