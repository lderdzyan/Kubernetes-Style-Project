export type TableColumn<T> = {
	key: keyof T;
	label: string;
	class?: string;
};
