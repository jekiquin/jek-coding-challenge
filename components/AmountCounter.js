import { useUnitContext } from '../context/UnitProvider';
import { useCoinContext } from '../context/CoinProvider';
import { toCurrency } from '../utils/parser';

export default function AmountCounter() {
	const { unit } = useUnitContext();
	const { selectedCoin, amount, setAmount } = useCoinContext();

	const handleIncrement = () => {
		setAmount((prevAmount) => ++prevAmount);
	};

	const handleDecrement = () => {
		if (amount !== 0) {
			setAmount((prevAmount) => --prevAmount);
		}
	};

	const totalPrice = toCurrency(unit, amount * selectedCoin.quote[unit].price);
	const unitPrice = toCurrency(unit, selectedCoin.quote[unit].price);

	return (
		<div className="flex">
			<button onClick={handleDecrement}>-</button>
			<p>{amount}</p>
			<button onClick={handleIncrement}>+</button>
			<p>@ {unitPrice}</p>
			<p>Total: {totalPrice}</p>
		</div>
	);
}
