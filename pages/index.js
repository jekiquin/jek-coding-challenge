import Head from 'next/head';
import CoinTable from '../components/CoinTable';

export default function Home() {
	return (
		<div className="container mx-auto px-4">
			<Head>
				<title>BalloonBox Coding Challenge</title>
				<meta name="description" content="Technical Challenge from BalloonBox" />
			</Head>

			<main>
				<CoinTable />
			</main>
		</div>
	);
}
