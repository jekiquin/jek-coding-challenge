import { useMemo } from 'react';
import { useFormikContext } from 'formik';
import { toCurrency } from '../utils/parser';
import { useUnitContext } from '../context/UnitProvider';

export default function FormObserver({ flatPrice }) {
	const { values } = useFormikContext();
	const { unit } = useUnitContext();

	const total = useMemo(() => {
		if (values.amount <= 0) {
			return toCurrency(unit, 0);
		}

		return toCurrency(unit, flatPrice * values.amount);
	}, [values, flatPrice, unit]);

	const styles = {
		container: 'my-2'
	};

	return (
		<div className={styles.container}>
			<p>Total: {total}</p>
		</div>
	);
}
