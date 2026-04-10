import type { UserRole } from './user';

export interface ILoginResponse {
	token: string;
	user: {
		id: string;
		username: string;
		name: string;
		role: UserRole;
		status: string;
	};
}
