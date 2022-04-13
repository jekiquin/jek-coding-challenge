import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import { toProperCase } from '../utils/parser';

export default function FormField({ label, type, name }) {
	return (
		<div className="mt-4">
			<label className="capitalize block" htmlFor={name}>
				{label}
			</label>
			<div className="flex">
				<Field className="mr-4 border" type={type} name={name} id={name} />
				<ErrorMessage className="text-red-400 font-medium" name={name} component="p" />
			</div>
		</div>
	);
}

FormField.propTypes = {
	label: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
