import { useMemo } from 'react';
import { useFormikContext } from 'formik';
import { useRouter } from 'next/router';
import { useCoinContext } from '../context/CoinProvider';
import { useUnitContext } from '../context/UnitProvider';
import { toCurrency } from '../utils/parser';
import FormField from './FormField';
import StyledForm from './StyledForm';

export default function AddAmountForm() {
	const { selectedCoin, setPurchaseAmount } = useCoinContext();
	const { unit } = useUnitContext();
	const router = useRouter();

	const formikProps = {
		initialValues: {
			amount: 0
		},
		validate: (values) => {
			const errors = {};
			if (values.amount <= 0) {
				errors.amount = 'Please enter value higher than 0 to purchase';
			}
			return errors;
		},
		onSubmit: (values, { setSubmitting }) => {
			setPurchaseAmount(values.amount);
			sessionStorage.setItem('purchase', JSON.stringify(selectedCoin));
			sessionStorage.setItem('amount', JSON.stringify(values.amount));
			setSubmitting(false);
			router.push('/purchase');
		}
	};

	const styles = {
		form: 'flex flex-col items-end'
	};

	return (
		<StyledForm formikProps={formikProps} submitLabel="Purchase" formStyles={styles.form}>
			<FormField label="Amount to Purchase" type="number" name="amount" />
			<FormObserver flatPrice={selectedCoin.quote[unit].price} />
		</StyledForm>
	);
}

function FormObserver({ flatPrice }) {
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
