import { OrderStatus } from '$lib/types/orders';

export const statusOptions = [
	{ label: 'print.new', value: OrderStatus.NEW },
	{ label: 'print.printed', value: OrderStatus.PRINTED },
	{ label: 'print.delivered', value: OrderStatus.DELIVERED }
];
