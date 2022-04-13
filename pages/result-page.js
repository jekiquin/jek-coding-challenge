import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import MainContainer from '../components/MainContainer';
import { useCoinContext } from '../context/CoinProvider';

const FAILRATE = 0.2;

export default function Result() {
	const [isSuccess, setIsSuccess] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const { setSelectedCoin, setPurchaseAmount } = useCoinContext();
	const router = useRouter();

	useEffect(() => {
		let timeOut, successRate;
		const prevSuccessRate = sessionStorage.getItem('success-rate');

		const setStates = (successRate) => {
			if (successRate > FAILRATE) {
				setIsSuccess(true);
				setSelectedCoin(null);
				setPurchaseAmount(0);
				sessionStorage.clear();
			}
			setIsLoading(false);
		};

		if (prevSuccessRate) {
			successRate = Number(prevSuccessRate);
			setStates(successRate);
		} else {
			successRate = Math.random();
			const timer = Math.random() * 1000;
			const timeOut = setTimeout(() => {
				setStates(successRate);
			}, timer);
		}

		sessionStorage.setItem('success-rate', `${successRate}`);

		return () => {
			clearTimeout(timeOut);
		};
	}, []);

	const handleHome = () => {
		router.push('/');
		sessionStorage.clear();
	};

	const handleBack = () => {
		router.push('/purchase');
		sessionStorage.removeItem('success-rate');
	};

	if (isLoading) return <Loading />;

	const styles = {
		container: `paper mt-28 flex flex-col items-center ${isSuccess ? 'bg-success' : 'bg-fail'}`,
		button: 'btn'
	};

	return (
		<MainContainer>
			<section className={styles.container}>
				{isSuccess ? (
					<>
						<h1>Transaction Successful!</h1>
						<p>Thank You!</p>
						<button className={styles.button} onClick={handleHome}>
							Home
						</button>
					</>
				) : (
					<>
						<h1>Error During Transaction!</h1>
						<button className={styles.button} onClick={handleBack}>
							Back to Purchase
						</button>
					</>
				)}
			</section>
		</MainContainer>
	);
}
