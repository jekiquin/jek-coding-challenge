import { Fragment } from 'react';
import { useFormikContext, Formik, Form, Field, ErrorMessage } from 'formik';
import validator from 'validator';

export default function Purchase() {
	const formFields = {
		name: 'text',
		email: 'email',
		number: 'tel',
		address: 'text'
	};

	const initialValues = {
		name: '',
		email: '',
		number: '',
		address: ''
	};

	const displayFormFields = Object.entries(formFields).map((field, idx) => (
		<Fragment key={idx}>
			<label className="mr-4" htmlFor={field[0]}>
				{field[0]}
			</label>
			<Field className="border " type={field[1]} name={field[0]} id={field[0]} />

			<ErrorMessage className="text-red-400 font-bold" name={field[0]} component="p" />
		</Fragment>
	));

	const validate = (values) => {
		const errors = {};
		if (validator.isEmpty(values.name)) {
			errors.name = 'Please enter name!';
		}

		if (validator.isEmpty(values.email)) {
			errors.email = 'Please enter email!';
		} else if (!validator.isEmail(values.email)) {
			errors.email = 'Please enter valid email';
		}

		if (validator.isEmpty(values.number)) {
			errors.number = 'Please enter number!';
		} else if (!validator.isMobilePhone(values.number, 'en-US')) {
			errors.number = 'Please enter valid number';
		}

		if (validator.isEmpty(values.address)) {
			errors.address = 'Please enter address!';
		}

		return errors;
	};

	const handleSubmit = (values, { setSubmitting }) => {
		console.log(values);
		setSubmitting(false);
	};

	return (
		<main className="container px-4 mx-auto">
			<h1>Please fill out the form below</h1>
			<Formik initialValues={initialValues} validate={validate} onSubmit={handleSubmit}>
				{({ isSubmitting }) => (
					<Form className="flex flex-col">
						{displayFormFields}
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</main>
	);
}
