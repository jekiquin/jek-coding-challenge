import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { useCoinContext } from '../context/CoinProvider';
import { useUnitContext } from '../context/UnitProvider';
import { toCurrency, toFinancial } from '../utils/parser';

export default function CoinRow({ coin, setShowModal }) {
	const { setSelectedCoin } = useCoinContext();
	const { unit } = useUnitContext();

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
		return values.map((value, idx) => <p key={idx}>{value}</p>);
	}, [coin]);

	const handleClick = () => {
		setSelectedCoin(coin);
		setShowModal(true);
	};

	const styles = {
		container: 'border-b-2 p-4 min-w-table grid grid-cols-5 cursor-pointer hover:bg-slate-200'
	};

	return (
		<div className={styles.container} onClick={handleClick}>
			{displayInformation}
		</div>
	);
}

CoinRow.propTypes = {
	coin: PropTypes.object.isRequired,
	setShowModal: PropTypes.func.isRequired
};
