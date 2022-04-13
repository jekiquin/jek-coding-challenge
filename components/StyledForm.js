import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';

export default function CustomForm({ formikProps, submitLabel, resetLabel, children }) {
	return (
		<Formik {...formikProps}>
			{({ isSubmitting }) => (
				<Form>
					{children}
					{formikProps.handleSubmit && (
						<button type="submit" disabled={isSubmitting}>
							{submitLabel}
						</button>
					)}
					{formikProps.handleReset && (
						<button type="reset" disabled={isSubmitting}>
							{resetLabel}
						</button>
					)}
				</Form>
			)}
		</Formik>
	);
}

CustomForm.propTypes = {
	formikProps: PropTypes.object.isRequired,
	submitLabel: PropTypes.string,
	resetLabel: PropTypes.string
};

CustomForm.propTypes = {
	submitLabel: 'Submit',
	resetLabel: 'Reset'
};
