export const filterByKeys = <T>(
	items: T[],
	searchTerm: string,
	keys: (keyof T)[]
): T[] => {
	const term = searchTerm.trim().toLowerCase();
	if (!term) return items;

	return items.filter((item) =>
		keys.some((key) => {
			const value = item[key];
			return value != null && String(value).toLowerCase().includes(term);
		})
	);
};
