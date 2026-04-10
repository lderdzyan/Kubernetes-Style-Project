import { API_PATHS } from '$lib/config/api';
import type { ICategory } from '$lib/types/categories';
import { apiRequest } from '$lib/utils/requests';

export const getCategoryList = (): Promise<ICategory[]> =>
	apiRequest<ICategory[]>(API_PATHS.categories.base);

export const createCategory = (data: Omit<ICategory, 'id'>): Promise<ICategory> =>
	apiRequest<ICategory>(API_PATHS.categories.base, {
		method: 'POST',
		body: JSON.stringify(data)
	});

export const getCategoryById = (id: string): Promise<ICategory> =>
	apiRequest<ICategory>(API_PATHS.categories.byId(id));

export const updateCategory = (id: string, data: Partial<ICategory>): Promise<ICategory> =>
	apiRequest<ICategory>(API_PATHS.categories.byId(id), {
		method: 'PATCH',
		body: JSON.stringify(data)
	});

export const deleteCategory = (id: string): Promise<void> =>
	apiRequest<void>(API_PATHS.categories.byId(id), { method: 'DELETE' });

export const importCategory = (): Promise<any> =>
	apiRequest(API_PATHS.categories.import, {
		method: 'POST'
	});
