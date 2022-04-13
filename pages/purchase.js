import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useCoinContext } from '../context/CoinProvider';
import { useUnitContext } from '../context/UnitProvider';
import { toCurrency } from '../utils/parser';
import PurchaseForm from '../components/PurchaseForm';
import MainContainer from '../components/MainContainer';
import Loading from '../components/Loading';

export default function Purchase() {
	const { unit } = useUnitContext();
	const { selectedCoin, setSelectedCoin, purchaseAmount, setPurchaseAmount } = useCoinContext();
	const router = useRouter();

	useEffect(() => {
		if (!selectedCoin) {
			setSelectedCoin(JSON.parse(sessionStorage.getItem('purchase')));
			setPurchaseAmount(JSON.parse(sessionStorage.getItem('amount')));
		}
		sessionStorage.removeItem('success-rate');
	}, []);

	const displayPurchaseInfo = useMemo(() => {
		const flatPrice = selectedCoin?.quote[unit]?.price || 0;
		const totalPrice = toCurrency(unit, purchaseAmount * flatPrice);
		const infoList = [
			{
				label: 'Unit Price',
				value: toCurrency(unit, flatPrice)
			},
			{
				label: 'Amount',
				value: purchaseAmount
			},
			{
				label: 'Total',
				value: totalPrice
			}
		];

		return infoList.map((info, idx) => (
			<p key={idx}>
				<span>{info.label}: </span>
				{info.value}
			</p>
		));
	}, [unit, selectedCoin, purchaseAmount]);

	if (!selectedCoin || !purchaseAmount) {
		return <Loading />;
	}

	const styles = {
		container: 'paper mt-4 mx-auto max-w-2xl md:mt-8',
		header: 'text-2xl md:text3-xl'
	};

	return (
		<MainContainer>
			<div className={styles.container}>
				<section>
					<h1 className={styles.header}>Purchasing: {selectedCoin.name}</h1>
					{displayPurchaseInfo}
				</section>
				<section>
					<PurchaseForm />
				</section>
			</div>
		</MainContainer>
	);
}
