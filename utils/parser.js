export const toCurrency = (unit, number) => {
	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: unit.toUpperCase()
	});
	return formatter.format(number);
};

export const toFinancial = (number) => {
	return Number.parseFloat(number).toFixed(2);
};

export const dateFormatter = (dateRaw) => {
	const date = new Date(dateRaw);
	const options = { month: 'long', day: 'numeric', year: 'numeric' };
	return date.toLocaleDateString('en-US', options);
};
