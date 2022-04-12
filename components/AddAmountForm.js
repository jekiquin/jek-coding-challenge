import { useRouter } from 'next/router';
import { useCoinContext } from '../context/CoinProvider';

export default function AddAmountForm() {
	const { amount, setAmount } = useCoinContext();
	const router = useRouter();

	const handleIncrement = () => {
		setAmount((prevAmount) => ++prevAmount);
	};

	const handleDecrement = () => {
		if (amount !== 0) {
			setAmount((prevAmount) => --prevAmount);
		}
	};

	const handleSubmit = () => {
		router.push('/purchase');
	};

	return (
		<div>
			<div className="flex">
				<button onClick={handleDecrement}>-</button>
				<p>{amount}</p>
				<button onClick={handleIncrement}>+</button>
			</div>

			<button onClick={handleSubmit} disabled={!amount}>
				Purchase
			</button>
		</div>
	);
}
