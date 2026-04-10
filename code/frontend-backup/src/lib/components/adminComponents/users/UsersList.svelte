<script lang="ts">
	import { goto } from '$app/navigation';
	import UserTable from '$lib/components/adminComponents/users/UserTable.svelte';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { IUser } from '$lib/types/user';
	import { onMount } from 'svelte';
	import Pagination from '../../pagination/Pagination.svelte';
	import { getAllUsers } from '$lib/api/users';
	import { t } from 'svelte-i18n';
	import Search from '../../shared/Search.svelte';
	import { filterItems } from '$lib/utils/filterShops';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';

	let users: IUser[] = $state([]);
	let isLoading: boolean = $state(true);
	let searchState: string = $state('');
	let errorMessage: string | null = $state(null);

	let currentPage: number = $state(1);
	const perPage = 50;

	const filteredUsers: IUser[] = $derived(filterItems(users, searchState));
	const paginateUserList = $derived(
		filteredUsers.slice((currentPage - 1) * perPage, currentPage * perPage)
	);

	onMount(async () => {
		isLoading = true;
		try {
			const userList: IUser[] = await getAllUsers();
			users = [...userList];
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});
	const redirect = () => {
		goto('/admin/users/add');
	};
</script>

<div class="px-4 py-8 max-md:px-0 lg:ml-64">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else if isLoading}
		<Skeleton rows={15} />
	{:else}
		<div class="flex justify-between gap-2 pb-8">
			<h1 class="text-xl font-bold">{$t('user.table.tableTitle')}</h1>
			<Button onclick={redirect} type="submit" variant="submit">{$t('global.addBtn')}</Button>
		</div>

		<div class="pb-8">
			<Search bind:value={searchState} />
		</div>

		<UserTable users={paginateUserList} />

		<div class="mt-4 flex justify-end">
			<Pagination count={filteredUsers.length} {perPage} siblingCount={1} bind:page={currentPage} />
		</div>
	{/if}
</div>
