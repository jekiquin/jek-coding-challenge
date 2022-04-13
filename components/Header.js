import React from 'react';
import Link from 'next/link';
import UnitSwitcher from './UnitSwitcher';

function Header() {
	const styles = {
		header: 'p-4 flex justify-between shadow mb-4 md:mb-8'
	};

	return (
		<header className={styles.header}>
			<Link href="/">
				<a>Coin Market</a>
			</Link>
			<UnitSwitcher />
		</header>
	);
}

export default React.memo(Header);
