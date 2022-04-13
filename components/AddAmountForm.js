import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validator from 'validator';
import { useCoinContext } from '../context/CoinProvider';

export default function AddAmountForm() {
	const { selectedCoin, setPurchaseAmount } = useCoinContext();
	const router = useRouter();

	const initialValues = {
		amount: 0
	};

	const validate = (values) => {
		const errors = {};
		if (values.amount <= 0) {
			errors.amount = 'Please enter value higher than 0';
		}
		return errors;
	};

	const handleSubmit = (values, { setSubmitting }) => {
		setPurchaseAmount(values.amount);
		sessionStorage.setItem('purchase', JSON.stringify(selectedCoin));
		sessionStorage.setItem('amount', JSON.stringify(values.amount));
		setSubmitting(false);
		router.push('/purchase');
	};

	return (
		<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
			{({ isSubmitting }) => (
				<Form>
					<label htmlFor="amount">Amount</label>
					<Field className="border" type="number" id="amount" name="amount" step="1" />
					<ErrorMessage className="text-red-400 font-bold" name="amount" component="p" />
					<button type="submit">Purchase</button>
				</Form>
			)}
		</Formik>
	);
}
