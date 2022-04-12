import Head from 'next/head';
import CoinTable from '../components/CoinTable';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<title>BalloonBox Coding Challenge</title>
				<meta name="description" content="Technical Challenge from BalloonBox" />
			</Head>
			<Header />
			<main className="container mx-auto px-4">
				<CoinTable />
			</main>
		</div>
	);
}
