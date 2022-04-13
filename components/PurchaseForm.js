import { Fragment, useMemo } from 'react';
import { useRouter } from 'next/router';
import validator from 'validator';
import { useCoinContext } from '../context/CoinProvider';
import FormField from './FormField';
import CustomForm from './CustomForm';

export default function PurchaseForm() {
	const { setSelectedCoin, setPurchaseAmount } = useCoinContext();
	const router = useRouter();

	const sessionValues = JSON.parse(sessionStorage.getItem('form'));

	const displayFormFields = useMemo(() => {
		const formFields = {
			name: 'text',
			email: 'email',
			number: 'tel',
			address: 'text'
		};
		return Object.entries(formFields).map((field, idx) => (
			<Fragment key={idx}>
				<FormField label={field[0]} type={field[1]} name={field[0]} />
			</Fragment>
		));
	}, []);

	const formikProps = {
		initialValues: sessionValues || {
			name: '',
			email: '',
			number: '',
			address: ''
		},
		validate: (values) => {
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
		},
		onSubmit: (values, { setSubmitting }) => {
			sessionStorage.setItem('form', JSON.stringify(values));
			setSubmitting(false);
			router.push('/result-page');
		},
		onReset: () => {
			sessionStorage.clear();
			setPurchaseAmount(0);
			setSelectedCoin(null);
			router.push('/');
		}
	};

	return (
		<CustomForm formikProps={formikProps} submitLabel="Submit" resetLabel="Cancel">
			{displayFormFields}
		</CustomForm>
	);
}
