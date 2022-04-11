import Head from 'next/head';
import { useCoins } from '../custom-hooks/useCoins';

export default function Home() {
	const { coins, isLoading, isError } = useCoins();

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
