import type { ICategory } from '$lib/types/categories';
import type { TableColumn } from '$lib/types/table';

export const categoryColumns: TableColumn<ICategory>[] = [
	{ key: 'name', label: 'category.table.row.name' }
];
