import type { UserRole } from './user';

export interface UserFormValues {
	id?: string;
	name: string;
	username: string;
	email?: string;
	password?: string;
	role: UserRole | '';
	status: boolean;
	shopIds?: string[];
}

export enum UserStatus {
	ACTIVE = 'active',
	INACTIVE = 'inactive'
}
