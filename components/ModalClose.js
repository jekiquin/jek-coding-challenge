import PropTypes from 'prop-types';
import { useCoinContext } from '../context/CoinProvider';
export default function ModalClose({ setShowModal }) {
	const { setSelectedCoin, setPurchaseAmount } = useCoinContext();

	const handleClick = () => {
		setSelectedCoin(null);
		setPurchaseAmount(0);
		setShowModal(false);
	};

	return (
		<button
			title="close"
			className="absolute top-2 right-4 hover:font-bold transition-all"
			onClick={handleClick}>
			X
		</button>
	);
}

ModalClose.propTypes = {
	setShowModal: PropTypes.func.isRequired
};
