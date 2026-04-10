import type { IProduct } from '$lib/types/product';
import type { TableColumn } from '$lib/types/table';

export const productColumns: TableColumn<IProduct>[] = [
	{key: 'id', label: ''},
	{ key: 'name', label: 'product.table.row.name' },
	{ key: 'code', label: 'product.table.row.code' },
	{ key: 'measurement', label: 'print.measurement' },
	{ key: 'price', label: 'product.table.row.price' },
	{ key: 'category', label: 'product.table.row.category' }
];
