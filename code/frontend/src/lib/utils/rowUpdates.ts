export const findItemIndex = <T extends { id: string }>(list: T[], id: string): number => {
	return list.findIndex((item) => item.id === id);
};

export const canMoveDown = <T>(list: T[], index: number): boolean => {
	return index !== -1 && index < list.length - 1;
};

export const canMoveUp = (index: number): boolean => {
	return index > 0;
};
export const moveRowDown = <T extends { id: string }>(list: T[], id: string): T[] => {
	const index = findItemIndex(list, id);
	if (!canMoveDown(list, index)) return list;

	const result = [...list];
	[result[index], result[index + 1]] = [result[index + 1], result[index]];

	return result;
};

export const moveRowUp = <T extends { id: string }>(list: T[], id: string): T[] => {
	const index = findItemIndex(list, id);
	if (!canMoveUp(index)) return list;

	const result = [...list];
	[result[index], result[index - 1]] = [result[index - 1], result[index]];

	return result;
};
