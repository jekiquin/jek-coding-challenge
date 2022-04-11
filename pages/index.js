import Head from 'next/head';
import { useCoinsContext } from '../context/CoinProvider';

export default function Home() {
	const coins = useCoinsContext();

	return (
		<div>
			<Head>
				<title>BalloonBox Coding Challenge</title>
				<meta name="description" content="Technical Challenge from BalloonBox" />
			</Head>

			<main></main>
		</div>
	);
}
