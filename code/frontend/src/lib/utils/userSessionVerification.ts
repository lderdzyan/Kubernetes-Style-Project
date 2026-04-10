import { goto } from '$app/navigation';
import { getUserById } from '$lib/api/users';
import { auth, clearAuthUser, isTokenExpired } from '$lib/stores/users.svelte';
import { UserRole, type IUser } from '$lib/types/user';

export const verifyUserSession = async (expectedRole?: UserRole): Promise<IUser | null> => {
	const user = auth.user;
	if (!user?.token || isTokenExpired(user.token)) {
		clearAuthUser();
		goto('/');
		return null;
	}

	try {
		const verifiedUser = await getUserById(user.id);

		if (expectedRole && verifiedUser.role !== expectedRole) {
			if (verifiedUser.role === UserRole.ADMIN) goto('/admin');
			else if (verifiedUser.role === UserRole.MANAGER) goto('/manager');
			else goto('/');
			return null;
		}
		auth.user = { ...user, ...verifiedUser };
		return verifiedUser;
	} catch (err) {
		console.error(err, 'User verification failed');
		clearAuthUser();
		goto('/');
		return null;
	}
};

export const redirectIfAuthenticated = async () => {
	const user = auth.user;

	if (user?.token && !isTokenExpired(user.token)) {
		switch (user.role) {
			case UserRole.ADMIN:
				await goto('/admin');
				break;
			case UserRole.MANAGER:
				await goto('/manager');
				break;
			default:
				await goto('/');
				break;
		}
	}
};
