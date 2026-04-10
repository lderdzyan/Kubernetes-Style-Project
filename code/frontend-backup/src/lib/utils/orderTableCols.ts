import type { IOrder, IOrderingItem } from '$lib/types/orders';
import type { TableColumn } from '$lib/types/table';

export const orderColumns: TableColumn<IOrder>[] = [
	{ key: 'shopName', label: 'order.table.name' },
	{ key: 'shopAddress', label: 'order.table.address' },
	{key: 'status', label: 'shop.form.label.status'},
	{ key: 'createdAt', label: 'order.table.date' }
];

export const orderColsForAdmin: TableColumn<IOrder>[] = [
	{ key: 'orderNumber', label: 'order.table.number' },
	{ key: 'managerName', label: 'order.table.managerName' },
	{ key: 'shopName', label: 'order.table.name' },
	{ key: 'shopAddress', label: 'order.table.address' },
	{ key: 'totalAmount', label: 'order.table.total' },
	{key: 'status', label: 'shop.form.label.status'},
	{ key: 'createdAt', label: 'order.table.date' }
];

export const itemCols: TableColumn<IOrderingItem>[] = [
	{ key: 'productCode', label: 'product.table.row.code' },
	{ key: 'productName', label: 'product.table.row.name' },
	{ key: 'measurement', label: 'print.measurement' },
	{ key: 'quantity', label: 'order.popup.quantity' },
	{ key: 'price', label: 'order.popup.price' },
	{ key: 'total', label: 'order.popup.total' }
];
