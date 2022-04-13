import PropTypes from 'prop-types';
import { Form, Formik } from 'formik';

export default function CustomForm({ formikProps, submitLabel, resetLabel, formStyles, children }) {
	const styles = {
		button: 'btn',
		buttonGroup: 'mt-4 flex gap-4 flex-wrap'
	};

	return (
		<Formik {...formikProps}>
			{({ isSubmitting }) => (
				<Form className={formStyles}>
					{children}
					<div className={styles.buttonGroup}>
						{formikProps.onSubmit && (
							<button className={styles.button} type="submit" disabled={isSubmitting}>
								{submitLabel}
							</button>
						)}
						{formikProps.onReset && (
							<button className={styles.button} type="reset" disabled={isSubmitting}>
								{resetLabel}
							</button>
						)}
					</div>
				</Form>
			)}
		</Formik>
	);
}

CustomForm.propTypes = {
	formikProps: PropTypes.object.isRequired,
	submitLabel: PropTypes.string,
	resetLabel: PropTypes.string,
	formStyles: PropTypes.string
};

CustomForm.defaultProps = {
	submitLabel: 'Submit',
	resetLabel: 'Reset',
	formStyles: ''
};
