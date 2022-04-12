import Head from 'next/head';
import CoinTable from '../components/CoinTable';
import CoinModal from '../components/CoinModal';
import CoinProvider from '../context/CoinProvider';

export default function Home() {
	return (
		<div className="container mx-auto px-4">
			<Head>
				<title>BalloonBox Coding Challenge</title>
				<meta name="description" content="Technical Challenge from BalloonBox" />
			</Head>

			<main>
				<CoinProvider>
					<CoinTable />
					<CoinModal />
				</CoinProvider>
			</main>
		</div>
	);
}
