import { useMemo } from 'react';
import { useCoin } from '../custom-hook/useCoin';
import { useUnit } from '../context/UnitProvider';
import CoinRow from './CoinRow';
import Loading from './Loading';

export default function CoinTable() {
	const [unit] = useUnit();
	const { coins, isLoading } = useCoin(unit);

	const displayTableHeaders = useMemo(() => {
		const tableHeaders = ['Name', 'Price', '24h%', '7d%', 'Market Cap'];
		return tableHeaders.map((header, idx) => (
			<td key={idx} className="font-medium px-4">
				{header}
			</td>
		));
	}, []);

	const displayCoinSummary = useMemo(() => {
		if (isLoading) return;
		return coins.map((coin) => <CoinRow key={coin.id} coin={coin} />);
	}, [coins, isLoading]);

	return (
		<table className="w-full border-collapse table-fixed">
			<thead className="border-b-4">
				<tr>{displayTableHeaders}</tr>
			</thead>
			<tbody>{displayCoinSummary}</tbody>
		</table>
	);
}
