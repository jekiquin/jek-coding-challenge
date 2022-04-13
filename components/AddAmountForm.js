import { useRouter } from 'next/router';
import { useCoinContext } from '../context/CoinProvider';
import { useUnitContext } from '../context/UnitProvider';
import FormObserver from './FormObserver';
import FormField from './FormField';
import CustomForm from './CustomForm';

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
		<CustomForm formikProps={formikProps} submitLabel="Purchase" formStyles={styles.form}>
			<FormField label="Amount to Purchase" type="number" name="amount" />
			<FormObserver flatPrice={selectedCoin.quote[unit].price} />
		</CustomForm>
	);
}
