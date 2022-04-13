import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { useCoinContext } from '../context/CoinProvider';
import FormField from './FormField';
import StyledForm from './StyledForm';

export default function AddAmountForm() {
	const { selectedCoin, setPurchaseAmount } = useCoinContext();
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

	return (
		<StyledForm formikProps={formikProps} submitLabel="Purchase">
			<FormField label="Amount" type="number" name="amount" />
		</StyledForm>
	);
}
