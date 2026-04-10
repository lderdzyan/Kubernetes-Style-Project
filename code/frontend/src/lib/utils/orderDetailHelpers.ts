import type { IOrderDetails, IOrderingItem } from './../types/orders';
import { updateOrder } from '$lib/api/orders';

export const deleteOrderItem = async (
	orderDetail: IOrderDetails,
	productId: string
): Promise<IOrderDetails> => {
	const updatedItems: IOrderingItem[] = orderDetail.items.filter(
		(item) => item.productId !== productId
	);

	const totalAmount = updatedItems.reduce((sum, item) => sum + (item.total ?? 0), 0);

	const updatedOrder: IOrderDetails = {
		...orderDetail,
		items: updatedItems,
		totalAmount
	};

	const payload = {
		shopId: orderDetail.shopId,
		items: updatedItems.map((item) => ({
			productId: item.productId,
			quantity: item.quantity
		})),
		notes: orderDetail.notes ?? ''
	};

	await updateOrder(payload, orderDetail.id);
	return updatedOrder;
};
