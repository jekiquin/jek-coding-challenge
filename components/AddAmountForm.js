import { useState } from 'react';
import { useRouter } from 'next/router';
import { useCoinContext } from '../context/CoinProvider';
import AmountCounter from './AmountCounter';

export default function AddAmountForm() {
	const [currentAmount, setCurrentAmount] = useState(0);
	const { selectedCoin, setPurchaseAmount } = useCoinContext();
	const router = useRouter();

	const handleSubmit = () => {
		setPurchaseAmount(currentAmount);
		sessionStorage.setItem('purchase', JSON.stringify(selectedCoin));
		sessionStorage.setItem('amount', JSON.stringify(currentAmount));
		router.push('/purchase');
	};

	return (
		<div>
			<AmountCounter amount={currentAmount} setAmount={setCurrentAmount} />
			<button onClick={handleSubmit} disabled={!currentAmount}>
				Purchase
			</button>
		</div>
	);
}
