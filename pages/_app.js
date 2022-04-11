import CoinsProvider from '../context/CoinProvider';
import UnitProvider from '../context/UnitProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<UnitProvider>
			<CoinsProvider>
				<Component {...pageProps} />
			</CoinsProvider>
		</UnitProvider>
	);
}

export default MyApp;
