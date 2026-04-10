export interface IUser {
	id: string;
	username: string;
	email: string;
	name: string;
	role: UserRole;
	status: boolean;
	shopIds: string[];
}

export enum UserRole {
	ADMIN = 'admin',
	MANAGER = 'manager'
}
