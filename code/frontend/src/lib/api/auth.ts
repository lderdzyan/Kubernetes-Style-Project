import { API_PATHS } from '$lib/config/api';
import type { ILoginResponse } from '$lib/types/auth';
import { apiRequest } from '$lib/utils/requests';

export const login = (username: string, password: string) =>
	apiRequest<ILoginResponse>(API_PATHS.auth.login, {
		method: 'POST',
		body: JSON.stringify({ username, password })
	});
