import type { IShop } from '$lib/types/shops';
import type { TableColumn } from '$lib/types/table';

export const shopColumns: TableColumn<IShop>[] = [
	{ key: 'code', label: 'shop.table.row.code' },
	{ key: 'name', label: 'shop.table.row.name' },
	{ key: 'vat', label: 'shop.table.row.vat' },
	{ key: 'phone', label: 'shop.table.row.phone' },
	{ key: 'address', label: 'shop.table.row.address' }
];

export const ShopTableRows: TableColumn<IShop>[] = [
	{ key: 'name', label: 'shop.table.row.name' },
	{ key: 'code', label: 'shop.table.row.code' }
];
