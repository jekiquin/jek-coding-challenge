import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { UNITS, useUnitContext } from '../context/UnitProvider';

export default function Header() {
	const [unitChanged, setUnitChanged] = useState(false);
	const { setUnit } = useUnitContext();

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

	return (
		<header className="p-4 flex justify-between">
			<Link href="/">
				<a>Coin Market</a>
			</Link>
			<div className="flex">
				<p>{UNITS.CAD}</p>
				<div
					className="mx-4 w-8 h-full  rounded-lg cursor-pointer overflow-hidden bg-slate-200"
					onClick={handleClick}>
					<div
						className={`w-4 h-full rounded-xl border bg-slate-800 transition-all${translate}`}></div>
				</div>
				<p>{UNITS.USD}</p>
			</div>
		</header>
	);
}
