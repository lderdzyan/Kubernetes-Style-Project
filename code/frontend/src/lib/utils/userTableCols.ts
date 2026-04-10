import type { TableColumn } from '$lib/types/table';
import type { IUser } from '$lib/types/user';

export const userColumns: TableColumn<IUser>[] = [
	{ key: 'name', label: 'user.table.row.name' },
	{ key: 'username', label: 'user.table.row.username' },
	{ key: 'role', label: 'user.table.row.role' }
];
