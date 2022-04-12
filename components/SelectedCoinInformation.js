import { useMemo } from 'react';
import { useUnitContext } from '../context/UnitProvider';
import { toCurrency, toFinancial } from '../utils/parser';

export default function SelectedCoinInformation({ coin }) {
	const { unit } = useUnitContext();

	const displayInfo = useMemo(() => {
		if (!coin) return <></>;
		const { name, circulating_supply, total_supply, max_supply, last_updated, quote } = coin;
		const {
			price,
			market_cap,
			market_cap_dominance,
			fully_diluted_market_cap,
			percent_change_24h,
			percent_change_7d,
			volume_24h
		} = quote[unit];

		const values = {
			Name: name,
			'Circulating Supply': circulating_supply,
			'Total Supply': total_supply,
			'Max Supply': max_supply,
			Price: toCurrency(unit, price),
			'Market Cap': toCurrency(unit, market_cap),
			'Market Cap Dominance': market_cap_dominance,
			'Fully Diluted Market Cap': toCurrency(unit, fully_diluted_market_cap),
			'24h%': toFinancial(percent_change_24h),
			'7d%': toFinancial(percent_change_7d),
			'Volume 24h': toCurrency(unit, volume_24h)
		};

		return Object.entries(values).map((value, idx) => (
			<p key={idx}>
				{value[0]}: {value[1]}
			</p>
		));
	}, [coin, unit]);

	return <div className="grid grid-cols-2 gap-4">{displayInfo}</div>;
}
