import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

export default function FormField({ label, type, name }) {
	const styles = {
		container: 'mt-4',
		label: 'capitalize block',
		field: 'mr-4 border w-full max-w-xs pl-2',
		error: 'italic text-red-400 font-medium'
	};
	return (
		<div className={styles.container}>
			<label className={styles.label} htmlFor={name}>
				{label}
			</label>
			<ErrorMessage className={styles.error} name={name} component="p" />
			<Field className={styles.field} type={type} name={name} id={name} />
		</div>
	);
}

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
