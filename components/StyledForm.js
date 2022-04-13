import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';

export default function CustomForm({ formikProps, submitLabel, resetLabel, children }) {
	return (
		<Formik {...formikProps}>
			{({ isSubmitting }) => (
				<Form>
					{children}
					{formikProps.onSubmit && (
						<button className="btn" type="submit" disabled={isSubmitting}>
							{submitLabel}
						</button>
					)}
					{formikProps.onReset && (
						<button className="btn" type="reset" disabled={isSubmitting}>
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
