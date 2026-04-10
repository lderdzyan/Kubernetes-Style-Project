import { type IOrderDraft, type IOrderingItem } from '$lib/types/orders';

export const createOrder = $state<IOrderDraft>({
	shopId: '',
	categoryId: null,
	items: [] as IOrderingItem[],
	notes: ''
});

export const resetOrder = () => {
	createOrder.shopId = '';
	createOrder.categoryId = null;
	createOrder.items = [];
	createOrder.notes = '';
};

export const increaseQuantity = (id: string) => {
	const item = createOrder.items.find((item) => item.productId === id);
	if (!item) return;
	item.quantity += 1;
	item.total = item.quantity * (item.price ?? 0);
};

export const decreaseQuantity = (id: string) => {
	const item = createOrder.items.find((item) => item.productId === id);
	if (!item) return;
	if (item.quantity > 1) {
		item.quantity -= 1;
		item.total = item.quantity * (item.price ?? 0);
	}
};
