import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

export default function FormField({ label, type, name }) {
	return (
		<>
			<label className="mr-4" htmlFor={label}>
				{label}
			</label>
			<Field className="border" type={type} name={name} id={name} />
			<ErrorMessage className="text-red-400 font-medium" name={name} component="p" />
		</>
	);
}

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
