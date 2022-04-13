import { useEffect } from 'react';
import { useCoinContext } from '../context/CoinProvider';
import { useUnitContext } from '../context/UnitProvider';
import { toCurrency } from '../utils/parser';
import Loading from '../components/Loading';
import PurchaseForm from '../components/PurchaseForm';
import MainContainer from '../components/MainContainer';

export default function Purchase() {
	const { unit } = useUnitContext();
	const { selectedCoin, setSelectedCoin, purchaseAmount, setPurchaseAmount } = useCoinContext();

	useEffect(() => {
		if (!selectedCoin) {
			setSelectedCoin(JSON.parse(sessionStorage.getItem('purchase')));
			setPurchaseAmount(JSON.parse(sessionStorage.getItem('amount')));
		}
	}, []);

	if (!selectedCoin || !purchaseAmount) {
		return <Loading />;
	}

	const totalPrice = toCurrency(unit, purchaseAmount * selectedCoin.quote[unit].price);

	return (
		<MainContainer>
			<h1>Please fill out the form below</h1>
			<p>Name: {selectedCoin.name}</p>
			<p>Unit Price: {toCurrency(unit, selectedCoin.quote[unit].price)}</p>
			<p>Amount: {purchaseAmount} units</p>
			<p>Total: {totalPrice}</p>
			<PurchaseForm />
		</MainContainer>
	);
}
