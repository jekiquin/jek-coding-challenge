import PropTypes from 'prop-types';
import { useCoinContext } from '../context/CoinProvider';
import AddAmountForm from './AddAmountForm';
import ModalClose from './ModalClose';
import SelectedCoinInformation from './SelectedCoinInformation';

export default function CoinModal({ setShowModal }) {
	const { selectedCoin } = useCoinContext();

	return (
		<section className="absolute top-0 left-0 w-full h-full bg-modal flex justify-center items-center">
			<article className="relative bg-white w-3/4 pt-12 pb-8 px-8">
				<ModalClose setShowModal={setShowModal} />
				<SelectedCoinInformation coin={selectedCoin} />
				<AddAmountForm />
			</article>
		</section>
	);
}

CoinModal.propTypes = {
	setShowModal: PropTypes.func.isRequired
};
