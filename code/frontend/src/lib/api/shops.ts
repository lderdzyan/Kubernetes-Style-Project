import { API_PATHS } from '$lib/config/api';
import type { IShop, IShopInputValues } from '$lib/types/shops';
import { apiRequest } from '$lib/utils/requests';

export const createShop = (data: IShopInputValues): Promise<IShop> =>
	apiRequest<IShop>(API_PATHS.shops.base, {
		method: 'POST',
		body: JSON.stringify(data)
	});

export const getAllShops = (): Promise<IShop[]> => apiRequest<IShop[]>(API_PATHS.shops.base);

export const getShopById = (id: string): Promise<IShop> =>
	apiRequest<IShop>(API_PATHS.shops.byId(id));

export const updateShopData = (id: string, data: Partial<IShopInputValues>): Promise<IShop> =>
	apiRequest<IShop>(API_PATHS.shops.byId(id), {
		method: 'PATCH',
		body: JSON.stringify(data)
	});

export const deleteShop = (id: string): Promise<void> =>
	apiRequest<void>(API_PATHS.shops.byId(id), { method: 'DELETE' });

export const updateShopStatus = (id: string, data: Partial<IShopInputValues>): Promise<IShop> =>
	apiRequest<IShop>(API_PATHS.shops.status(id), {
		method: 'PATCH',
		body: JSON.stringify(data)
	});

export const getAssignedShops = (): Promise<IShop[]> =>
	apiRequest<IShop[]>(API_PATHS.shops.assigned);

export const importShop = (): Promise<any> =>
	apiRequest(API_PATHS.shops.import, {
		method: 'POST'
	});
