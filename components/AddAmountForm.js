import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function AddAmountForm() {
	const validate = (values) => {
		const errors = {};
		if (!values.amount || Number(values.amount) <= 0) {
			errors.amount = 'Amount should be not lower than 1!';
		}
		return errors;
	};

	const handleSubmit = (values, { setSubmitting }) => {
		console.log(values);
		setSubmitting(false);
	};

	return (
		<Formik initialValues={{ amount: '1' }} validate={validate} onSubmit={handleSubmit}>
			{({ isSubmitting }) => (
				<Form>
					<Field type="number" step="1" name="amount" />

					<button type="submit" disabled={isSubmitting}>
						Purchase
					</button>
					<ErrorMessage name="amount" component="p" />
				</Form>
			)}
		</Formik>
	);
}
