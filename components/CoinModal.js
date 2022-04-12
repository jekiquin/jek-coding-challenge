import { useEffect } from 'react';
import { useCoinContext } from '../context/CoinProvider';

export default function CoinModal() {
	const { selectedCoin, showModal, setShowModal } = useCoinContext();

	const handleClick = () => {
		setShowModal(false);
	};

	return showModal ? (
		<section className="absolute top-0 left-0 w-full h-full bg-modal flex justify-center items-center">
			<article className="relative bg-white h-3/4 w-3/4">
				<button
					className="absolute top-2 right-2 bg-slate-400 py-2 px-4 rounded-md hover:bg-slate-600 hover:scale-125 transition-all"
					onClick={handleClick}>
					X
				</button>
			</article>
		</section>
	) : (
		<></>
	);
}
