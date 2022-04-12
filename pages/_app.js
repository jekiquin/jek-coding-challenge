import Header from '../components/Header';
import UnitProvider from '../context/UnitProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<UnitProvider>
			<Header />
			<Component {...pageProps} />
		</UnitProvider>
	);
}

export default MyApp;
