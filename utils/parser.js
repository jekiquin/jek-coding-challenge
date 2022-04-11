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
