import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { UNITS, useUnitContext } from '../context/UnitProvider';

function Header() {
	const { unit, setUnit } = useUnitContext();
	const [unitChanged, setUnitChanged] = useState(unit !== UNITS.CAD);

	useEffect(() => {
		if (unitChanged) {
			setUnit(UNITS.USD);
		} else {
			setUnit(UNITS.CAD);
		}
	}, [unitChanged, setUnit]);

	const handleClick = () => {
		setUnitChanged((prevUnitChanged) => !prevUnitChanged);
	};

	const translate = useMemo(
		() => (unitChanged ? ' translate-x-full' : ' translate-x-none'),
		[unitChanged]
	);

	const styles = {
		header: 'p-4 flex justify-between shadow mb-4 md:mb-8',
		switcher: 'flex',
		switchContainer: 'mx-4 w-8 h-full  rounded-lg cursor-pointer overflow-hidden bg-slate-200',
		switch: `w-4 h-full rounded-xl border bg-slate-800 transition-all${translate}`
	};

	return (
		<header className={styles.header}>
			<Link href="/">
				<a>Coin Market</a>
			</Link>
			<div className={styles.switcher}>
				<p>{UNITS.CAD}</p>
				<div className={styles.switchContainer} onClick={handleClick}>
					<div className={styles.switch}></div>
				</div>
				<p>{UNITS.USD}</p>
			</div>
		</header>
	);
}

export default React.memo(Header);
