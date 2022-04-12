import React, { useMemo, useState } from 'react';
import { useCoins } from '../custom-hook/coins-hook';
import { useUnitContext } from '../context/UnitProvider';
import CoinRow from './CoinRow';
import CoinModal from './CoinModal';

function CoinTable() {
	const [showModal, setShowModal] = useState(false);
	const { unit } = useUnitContext();
	const { coins, isLoading } = useCoins(unit);

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
		return coins.map((coin) => (
			<CoinRow key={coin.id} coin={coin} setShowModal={setShowModal} />
		));
	}, [coins, isLoading]);

	return (
		<>
			<table className="w-full border-collapse table-fixed">
				<thead className="border-b-4">
					<tr>{displayTableHeaders}</tr>
				</thead>
				<tbody>{displayCoinSummary}</tbody>
			</table>
			{showModal && <CoinModal setShowModal={setShowModal} />}
		</>
	);
}

export default React.memo(CoinTable);
