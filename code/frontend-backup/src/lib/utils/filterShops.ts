export const filterItems = <
	T extends { code?: string | number; name: string; vat?: string | number }
>(
	items: T[],
	searchTerm: string
): T[] => {
	if (!searchTerm) return items;

	const lower = searchTerm.toLowerCase();

	return items.filter((item) => {
		const nameMatch = item.name?.toLowerCase().includes(lower);
		const codeMatch = item.code?.toString().toLowerCase().includes(lower);
		const vatMatch = item.vat?.toString().toLowerCase().includes(lower);
		return nameMatch || codeMatch || vatMatch;
	});
};
