import { goto } from '$app/navigation';
import type { UserRole } from '$lib/types/user';
import {
	getLocalStorageData,
	removeLocalStorageData,
	setLocalStorageData
} from '$lib/utils/localStorageActions';
import { jwtDecode } from 'jwt-decode';

export interface IAuthUser {
	id: string;
	role: UserRole;
	token: string;
}

export const auth = $state<{ user: IAuthUser | null }>({ user: null });

export const decodeJWT = (token: string) => {
	try {
		return jwtDecode<{ exp: number }>(token);
	} catch {
		return null;
	}
};

export const isTokenExpired = (token: string): boolean => {
	const payload = decodeJWT(token);
	if (!payload?.exp) return true;
	return Date.now() / 1000 > payload.exp;
};

const saved = getLocalStorageData<IAuthUser>('authUser');
if (saved && !isTokenExpired(saved.token)) {
	auth.user = saved;
} else {
	clearAuthUser();
}

export function saveAuthUser(user: IAuthUser) {
	auth.user = user;
	setLocalStorageData('authUser', user);
}

export function clearAuthUser() {
	auth.user = null;
	removeLocalStorageData('authUser');
}

export const logOut = () => {
	clearAuthUser();
	goto('/');
};
