import { API_PATHS } from '$lib/config/api';
import { type IProduct } from '$lib/types/product';
import { apiRequest } from '$lib/utils/requests';

export const getProductList = (): Promise<IProduct[]> =>
	apiRequest<IProduct[]>(API_PATHS.products.base);

export const createNewProduct = (data: Partial<IProduct>): Promise<IProduct> =>
	apiRequest<IProduct>(API_PATHS.products.base, {
		method: 'POST',
		body: JSON.stringify(data)
	});
export const getProductById = (id: string): Promise<IProduct> =>
	apiRequest<IProduct>(API_PATHS.products.byId(id));

export const editProduct = (data: Partial<IProduct>, id: string): Promise<IProduct> =>
	apiRequest<IProduct>(API_PATHS.products.byId(id), {
		method: 'PATCH',
		body: JSON.stringify(data)
	});

export const deleteProduct = (id: string): Promise<void> =>
	apiRequest<void>(API_PATHS.products.byId(id), { method: 'DELETE' });

export const getProductsByCategory = (categoryId: string): Promise<IProduct[]> =>
	apiRequest<IProduct[]>(API_PATHS.products.byCategory(categoryId));

export const moveProductUp = (id: string): Promise<IProduct> =>
	apiRequest<IProduct>(API_PATHS.products.moveUp(id), {
		method: 'POST'
	});

export const moveProductDown = (id: string): Promise<IProduct> =>
	apiRequest<IProduct>(API_PATHS.products.moveDown(id), {
		method: 'POST'
	});

export const importProd11 = (): Promise<any> =>
	apiRequest(API_PATHS.products.import11, {
		method: 'POST'
	});

export const importProd12 = (): Promise<any> =>
	apiRequest(API_PATHS.products.import12, {
		method: 'POST'
	});

export const importProd20 = (): Promise<any> =>
	apiRequest(API_PATHS.products.import20, {
		method: 'POST'
	});

export const importProd22 = (): Promise<any> =>
	apiRequest(API_PATHS.products.import22, {
		method: 'POST'
	});
