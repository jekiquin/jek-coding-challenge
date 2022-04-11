import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useUnit } from '../context/UnitProvider';
import { toCurrency, toFinancial } from '../utils/parser';

export default function CoinRow({ coin }) {
	const [unit] = useUnit();

	const displayInformation = useMemo(() => {
		const { name, quote } = coin;
		const { price, percent_change_24h, percent_change_7d, market_cap } = quote[unit];
		const values = [
			name,
			toCurrency(unit, price),
			toFinancial(percent_change_24h),
			toFinancial(percent_change_7d),
			toCurrency(unit, market_cap)
		];
		return values.map((value, idx) => (
			<td key={idx} className="p-4 ">
				{value}
			</td>
		));
	}, [coin, unit]);

	return <tr className="border-b-2 cursor-pointer hover:bg-slate-200">{displayInformation}</tr>;
}

CoinRow.propTypes = {
	coin: PropTypes.object.isRequired
};
