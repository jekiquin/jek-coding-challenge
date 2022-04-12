import PropTypes from 'prop-types';
import { useCoinContext } from '../context/CoinProvider';
export default function ModalClose({ setShowModal }) {
	const { setSelectedCoin, setAmount } = useCoinContext();

	const handleClick = () => {
		setSelectedCoin(null);
		setAmount(0);
		setShowModal(false);
	};

	return (
		<button
			className="absolute top-2 right-2 bg-slate-400 py-2 px-4 rounded-md hover:bg-slate-600 hover:scale-125 transition-all"
			onClick={handleClick}>
			X
		</button>
	);
}

ModalClose.propTypes = {
	setShowModal: PropTypes.func.isRequired
};
