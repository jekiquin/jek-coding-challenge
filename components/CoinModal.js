import { useCoinContext } from '../context/CoinProvider';
import { useUnitContext } from '../context/UnitProvider';
import { useSelectedCoin } from '../custom-hook/coins-hook';
import AddAmountForm from './AddAmountForm';
import ModalClose from './ModalClose';
import SelectedCoinInformation from './SelectedCoinInformation';

export default function CoinModal() {
	const { selectedCoin } = useCoinContext();
	const { unit } = useUnitContext();
	const { coin, isLoading } = useSelectedCoin(unit, selectedCoin);

	return (
		<section className="absolute top-0 left-0 w-full h-full bg-modal flex justify-center items-center">
			<article className="relative bg-white w-3/4 pt-12 pb-8 px-8">
				<ModalClose />
				{isLoading ? (
					<h1>Loading</h1>
				) : (
					<>
						<SelectedCoinInformation coin={coin[selectedCoin]} />
						<AddAmountForm />
					</>
				)}
			</article>
		</section>
	);
}
