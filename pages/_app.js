import CoinProvider from '../context/CoinProvider';
import UnitProvider from '../context/UnitProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<UnitProvider>
			<CoinProvider>
				<Component {...pageProps} />
			</CoinProvider>
		</UnitProvider>
	);
}

export default MyApp;
