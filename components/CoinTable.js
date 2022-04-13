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
			<p key={idx} className="font-medium">
				{header}
			</p>
		));
	}, []);

	const displayCoinSummary = useMemo(() => {
		if (!coins) return;
		return coins.map((coin) => (
			<CoinRow key={coin.id} coin={coin} setShowModal={setShowModal} />
		));
	}, [coins]);

	const styles = {
		container: 'paper',
		table: 'w-full overflow-x-auto',
		header: 'border-b-4 grid grid-cols-5 px-4 min-w-table'
	};

	return (
		<div className={styles.container}>
			<section className={styles.table}>
				<div className={styles.header}>{displayTableHeaders}</div>
				{displayCoinSummary}
			</section>
			{showModal && <CoinModal setShowModal={setShowModal} />}
		</div>
	);
}

export default React.memo(CoinTable);
