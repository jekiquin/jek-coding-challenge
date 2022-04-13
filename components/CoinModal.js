import PropTypes from 'prop-types';
import { useCoinContext } from '../context/CoinProvider';
import AddAmountForm from './AddAmountForm';
import ModalClose from './ModalClose';
import SelectedCoinInformation from './SelectedCoinInformation';

export default function CoinModal({ setShowModal }) {
	const { selectedCoin } = useCoinContext();

	const styles = {
		container: 'absolute top-0 left-0 w-full h-full bg-modal flex justify-center items-center',
		article: 'relative paper w-full max-w-2xl pt-12 pb-8 px-8 md:w-3/4',
		header: 'text-2xl font-semibold  uppercase mb-4 md:text-3xl md:font-bold md:mb-8',
		symbol: 'text-base font-normal'
	};

	return (
		<section className={styles.container}>
			<article className={styles.article}>
				<h2 className={styles.header}>
					{selectedCoin.name}
					<span className={styles.symbol}>&nbsp;({selectedCoin.symbol})</span>
				</h2>
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
