import { API_PATHS } from '$lib/config/api';
import { type IUser } from '$lib/types/user';
import type { UserFormValues } from '$lib/types/userFormValues';
import { apiRequest } from '$lib/utils/requests';

export const createUser = (data: UserFormValues): Promise<IUser> =>
	apiRequest<IUser>(API_PATHS.users.base, {
		method: 'POST',
		body: JSON.stringify(data)
	});

export const getUserById = (id: string): Promise<IUser> =>
	apiRequest<IUser>(API_PATHS.users.byId(id));

export const updateUser = (id: string, data: Partial<UserFormValues>): Promise<IUser> =>
	apiRequest<IUser>(API_PATHS.users.byId(id), {
		method: 'PATCH',
		body: JSON.stringify(data)
	});

export const getAllUsers = (): Promise<IUser[]> => apiRequest<IUser[]>(API_PATHS.users.base);

export const deleteUser = (id: string): Promise<void> =>
	apiRequest<void>(API_PATHS.users.byId(id), { method: 'DELETE' });

export const attachShopsToUser = (id: string, data: Partial<UserFormValues>): Promise<IUser> =>
	apiRequest<IUser>(API_PATHS.users.shops(id), {
		method: 'POST',
		body: JSON.stringify(data)
	});

export const updateUserStatus = (id: string, data: Partial<UserFormValues>): Promise<IUser> =>
	apiRequest<IUser>(API_PATHS.users.status(id), {
		method: 'PATCH',
		body: JSON.stringify(data)
	});

export const importUsers = (): Promise<any> =>
	apiRequest(API_PATHS.users.import, {
		method: 'POST'
	});
