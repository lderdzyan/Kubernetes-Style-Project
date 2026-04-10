import { API_PATHS } from '$lib/config/api';
import {
	OrderStatus,
	type ICreateOrderResponse,
	type IOrder,
	type IOrderUpdateResponse,
	type INewOrder,
	type IOrderDetails
} from '$lib/types/orders';
import { apiRequest } from '$lib/utils/requests';
import { BASE_URL } from '$lib/config/url';

export const getOrderList = (): Promise<IOrder[]> => apiRequest<IOrder[]>(API_PATHS.orders.base);

export const createNewOrder = (data: INewOrder): Promise<ICreateOrderResponse> =>
	apiRequest<ICreateOrderResponse>(API_PATHS.orders.base, {
		method: 'POST',
		body: JSON.stringify(data)
	});

export const getOrderDetails = (id: string): Promise<IOrderDetails> =>
	apiRequest<IOrderDetails>(API_PATHS.orders.byId(id));

export const updateOrder = (data: Partial<INewOrder>, id: string): Promise<IOrderUpdateResponse> =>
	apiRequest<IOrderUpdateResponse>(API_PATHS.orders.byId(id), {
		method: 'PATCH',
		body: JSON.stringify(data)
	});

export const deleteOrder = (id: string): Promise<void> =>
	apiRequest<void>(API_PATHS.orders.byId(id), {
		method: 'DELETE'
	});

export const updateOrderStatus = (id: string, status: OrderStatus): Promise<IOrder> =>
	apiRequest<IOrder>(API_PATHS.orders.orderStatus(id), {
		method: 'PATCH',
		body: JSON.stringify({ status })
	});

export async function downloadInvoice(orderId: string, orderNumber: string, token: string) {
	const res = await fetch(`${BASE_URL}/orders/${orderId}/invoice`, {
		method: 'GET',
		headers: { Authorization: `Bearer ${token}` }
	});

	if (!res.ok) throw new Error(`Download failed: ${res.status}`);

	const cd = res.headers.get('Content-Disposition') || '';
	const match = cd.match(/filename="?([^"]+)"?/);
	const filename = match?.[1] ?? `invoice_${orderNumber}.xlsm`;

	const blob = await res.blob();
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();

	URL.revokeObjectURL(url);
}
