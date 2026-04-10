export const formatPrice = (amount?: number | string): string => {
	const num = typeof amount === 'string'
		? Number(amount)
		: amount ?? 0;

	if (isNaN(num)) return '0';

	return new Intl.NumberFormat('hy-AM', {
		style: 'decimal',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(num);
};
