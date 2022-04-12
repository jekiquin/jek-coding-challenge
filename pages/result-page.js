import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useCoinContext } from '../context/CoinProvider';

const FAILRATE = 0.2;

export default function Result() {
	const [isSuccess, setIsSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { setSelectedCoin, setAmount } = useCoinContext();
	const router = useRouter();

	useEffect(() => {
		const rate = Math.random();
		const timer = Math.random() * 3000;
		const timeOut = setTimeout(() => {
			if (rate > FAILRATE) {
				setIsSuccess(true);
				setSelectedCoin(null);
				setAmount(0);
				sessionStorage.clear();
			}
			setIsLoading(false);
		}, timer);

		return () => {
			clearTimeout(timeOut);
		};
	}, []);

	const handleHome = () => {
		router.push('/');
	};

	const handleBack = () => {
		router.push('/purchase');
	};

	if (isLoading) return <Loading />;

	return (
		<main className="container mx-auto">
			{isSuccess ? (
				<>
					<h1>Transaction Complete!</h1>
					<p>Thank You!</p>
					<button onClick={handleHome}>Home</button>
				</>
			) : (
				<>
					<h1>Error during transaction</h1>
					<button onClick={handleBack}>Back to Purchase</button>
				</>
			)}
		</main>
	);
}
