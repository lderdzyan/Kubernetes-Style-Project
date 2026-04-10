import type { IOrderingItem } from '$lib/types/orders';
import type { TableColumn } from '$lib/types/table';

export const orderTableCols: TableColumn<IOrderingItem>[] = [
	{ key: 'productName', label: 'product.table.row.name' },
	{ key: 'productCode', label: 'product.table.row.code' },
	{ key: 'quantity', label: 'order.popup.quantity' },
	{ key: 'price', label: 'order.popup.price' },
	{ key: 'total', label: 'order.popup.total' }
];
