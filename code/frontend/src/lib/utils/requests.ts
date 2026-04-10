import { BASE_URL } from '$lib/config/url';
import { auth } from '$lib/stores/users.svelte';

export const apiRequest = async <T>(path: string, options: RequestInit = {}): Promise<T> => {
	const response = await fetch(`${BASE_URL}${path}`, {
		headers: {
			'Content-Type': 'application/json',
			...(auth.user?.token ? { Authorization: `Bearer ${auth.user?.token}` } : {}),
			...(options.headers || {})
		},
		...options
	});

	let data: T | undefined = undefined;
	try {
		data = (await response.json()) as T;
	} catch {
		data = undefined;
	}

	if (!response.ok) {
		const errorData = data as { code: string; error: string } | undefined;
		throw {
			status: response.status,
			code: errorData?.code,
			message: errorData?.error || response.statusText
		};
	}

	return data as T;
};
