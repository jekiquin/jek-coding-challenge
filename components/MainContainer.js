export default function MainContainer({ children }) {
	const styles = {
		main: 'container mx-auto px-4 md:px-8'
	};

	return <main className={styles.main}>{children}</main>;
}
