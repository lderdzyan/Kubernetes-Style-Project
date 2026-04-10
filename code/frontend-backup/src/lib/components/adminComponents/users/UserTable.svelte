<script lang="ts">
	import { goto } from '$app/navigation';
	import { deleteUser, updateUserStatus } from '$lib/api/users';
	import ListData from '$lib/components/list/ListData.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';
	import TableRowTools from '$lib/components/shared/TableRowTools.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import type { IUser } from '$lib/types/user';
	import { generateColumnData } from '$lib/utils/generateColTranslations';
	import { userColumns } from '$lib/utils/userTableCols';

	let { users } = $props<{ users: IUser[] }>();

	const handleDelete = (id: string) => {
		deleteUser(id);
		users = users.filter((user: IUser) => user.id !== id);
	};

	const redirectToEdit = (id: string) => {
		goto(`/admin/users/edit/${id}`);
	};
</script>

{#snippet tools({ row }: { row: IUser })}
	<div class="hidden justify-end sm:flex print:hidden">
		<TableRowTools
			id={row.id}
			status={row.status}
			onEdit={redirectToEdit}
			onDelete={handleDelete}
			onToggleStatus={async (id, newStatus) => {
				try {
					await updateUserStatus(id, { status: newStatus });
					row.status = newStatus;
				} catch (err) {
					console.error(err);
				}
			}}
		/>
	</div>

	<div class="absolute top-1 right-1 z-10 sm:hidden print:hidden">
		<DropDown
			id={row.id}
			status={row.status}
			onEdit={redirectToEdit}
			onDelete={handleDelete}
			onToggleStatus={async (id, newStatus) => {
				try {
					await updateUserStatus(id, { status: newStatus });
					row.status = newStatus;
				} catch (err) {
					console.error(err);
				}
			}}
		/>
	</div>
{/snippet}

<TableData columns={userColumns} data={users} renderTools={tools} />

{#snippet orderItem({ row, index }: { row: IUser; index: number })}
	<div class="relative flex flex-col justify-between gap-4">
		<p class="text-md font-bold">{row.name}</p>
		<p>{row.username}</p>
		<p>{generateColumnData(row, 'role')}</p>

		{@render tools({ row })}
	</div>
{/snippet}

<ListData data={users} renderItem={orderItem} />
