import { browser } from '$app/environment';
import { goto } from '$app/navigation';
import { createOrder } from '$lib/stores/orders.svelte';

export const checkFlow = (pathname: string) => {
	if (!browser) return true;

	if (!createOrder.shopId) {
		goto('/manager/add/shops');
		return false;
	}

	if (pathname.includes('/add/products') && !createOrder.categoryId) {
		goto('manager/add/shops');
		return false;
	}

	if (pathname.includes('/add/order-preview') && createOrder.items.length === 0) {
		goto('/manager/add/shops');
		return false;
	}

	return true;
};
