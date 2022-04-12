import { Fragment, useEffect } from 'react';
import validator from 'validator';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useCoinContext } from '../context/CoinProvider';
import AmountCounter from '../components/AmountCounter';
import Loading from '../components/Loading';
import { useRouter } from 'next/router';

export default function Purchase() {
	const router = useRouter();
	const { selectedCoin, setSelectedCoin, amount, setAmount } = useCoinContext();

	useEffect(() => {
		if (!selectedCoin) {
			setSelectedCoin(JSON.parse(sessionStorage.getItem('purchase')));
			setAmount(JSON.parse(sessionStorage.getItem('amount')));
		}
	}, []);

	if (!selectedCoin || !amount) {
		return <Loading />;
	}

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
		sessionStorage.clear();
		setSubmitting(false);
	};

	const handleReset = () => {
		sessionStorage.clear();
		setAmount(0);
		setSelectedCoin(null);
		router.push('/');
	};

	return (
		<main className="container px-4 mx-auto">
			<h1>Please fill out the form below</h1>
			<p>Name: {selectedCoin.name}</p>
			<AmountCounter />
			<Formik
				initialValues={initialValues}
				validate={validate}
				onSubmit={handleSubmit}
				onReset={handleReset}>
				{({ isSubmitting }) => (
					<Form className="flex flex-col">
						{displayFormFields}
						<button type="submit" disabled={isSubmitting}>
							Submit
						</button>
						<button type="reset" disabled={isSubmitting}>
							Cancel
						</button>
					</Form>
				)}
			</Formik>
		</main>
	);
}
