import Head from 'next/head';
import { useEffect } from 'react';
import CoinTable from '../components/CoinTable';
import Header from '../components/Header';
import MainContainer from '../components/MainContainer';

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
			<MainContainer>
				<CoinTable />
			</MainContainer>
		</div>
	);
}
