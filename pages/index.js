import Head from 'next/head';
import { useEffect } from 'react';
import CoinTable from '../components/CoinTable';
import Header from '../components/Header';

export default function Home() {
	useEffect(() => {
		sessionStorage.clear(); // clear all the data for purchase
	}, []);
	return (
		<div>
			<Head>
				<title>BalloonBox Coding Challenge</title>
				<meta name="description" content="Technical Challenge from BalloonBox" />
			</Head>
			<Header />
			<main className="container mx-auto px-4 md:px-8">
				<CoinTable />
			</main>
		</div>
	);
}
