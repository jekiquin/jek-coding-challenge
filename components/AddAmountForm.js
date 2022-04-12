import { useRouter } from 'next/router';
import { useCoinContext } from '../context/CoinProvider';
import AmountCounter from './AmountCounter';

export default function AddAmountForm() {
	const { amount } = useCoinContext();
	const { selectedCoin } = useCoinContext();
	const router = useRouter();

	const handleSubmit = () => {
		sessionStorage.setItem('purchase', JSON.stringify(selectedCoin));
		sessionStorage.setItem('amount', JSON.stringify(amount));
		router.push('/purchase');
	};

	return (
		<div>
			<AmountCounter />
			<button onClick={handleSubmit} disabled={!amount}>
				Purchase
			</button>
		</div>
	);
}
