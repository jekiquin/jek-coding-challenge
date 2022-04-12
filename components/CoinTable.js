import React, { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import { useUnitContext } from '../context/UnitProvider';
import CoinRow from './CoinRow';
import CoinModal from './CoinModal';

function CoinTable() {
	const [coins, setCoins] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const { unit } = useUnitContext();

	useEffect(() => {
		const getCoins = async (unit) => {
			const response = await axios.get(`/api/get-coins?unit=${unit}`);
			setCoins(response.data);
		};
		getCoins(unit);
	}, [unit]);

	const displayTableHeaders = useMemo(() => {
		const tableHeaders = ['Name', 'Price', '24h%', '7d%', 'Market Cap'];
		return tableHeaders.map((header, idx) => (
			<td key={idx} className="font-medium px-4">
				{header}
			</td>
		));
	}, []);

	const displayCoinSummary = useMemo(() => {
		if (!coins) return;
		return coins.map((coin) => (
			<CoinRow key={coin.id} coin={coin} setShowModal={setShowModal} />
		));
	}, [coins]);

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
