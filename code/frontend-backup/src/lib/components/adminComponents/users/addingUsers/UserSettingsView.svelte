<script lang="ts">
	import UserForm from '$lib/components/adminComponents/users/addingUsers/UserForm.svelte';
	import ShopListTable from './ShopListTable.svelte';
	import AssigningToUserTable from './AssigningToUserTable.svelte';
	import { onMount } from 'svelte';
	import { type UserFormValues } from '$lib/types/userFormValues';
	import Button from '$lib/components/ui/button/button.svelte';
	import { attachShopsToUser, createUser, getUserById, updateUser } from '$lib/api/users';
	import { goto } from '$app/navigation';
	import type { IShop } from '$lib/types/shops';
	import { getAllShops } from '$lib/api/shops';
	import { t } from 'svelte-i18n';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { userSchema } from '$lib/utils/zodValidation';
	import Spinner from '$lib/components/shared/Spinner.svelte';

	let { id } = $props<{
		id?: string;
	}>();

	const toEdit = $derived(Boolean(id));
	let availableShops: IShop[] = $state([]);
	let assignedShops: IShop[] = $state([]);
	let searchState: string = $state('');
	let loading: boolean = $state(false);
	let saving: boolean = $state(false);
	let errors: Partial<Record<keyof UserFormValues, string>> = $state({});
	let globalError: string | null = $state(null);

	let userForm: UserFormValues = $state({
		name: '',
		username: '',
		password: '',
		role: '',
		status: false,
		shopIds: []
	});

	const assignShop = (shop: IShop) => {
		availableShops = availableShops.filter((s) => s.code !== shop.code);
		assignedShops = [...assignedShops, shop];
	};

	const unassignShop = (shop: IShop) => {
		assignedShops = assignedShops.filter((s) => s.code !== shop.code);
		availableShops = [...availableShops, shop];
	};

	onMount(async () => {
		loading = true;

		try {
			const shops = await getAllShops();
			if (toEdit && id) {
				const user = await getUserById(id);
				userForm = { ...user };

				const set = new Set(user.shopIds ?? []);
				assignedShops = shops.filter((shop) => set.has(shop.id));
				availableShops = shops.filter((shop) => !set.has(shop.id));
			} else {
				availableShops = shops;
			}
		} catch (err) {
			globalError = getErrorMessage(err, $t);
		} finally {
			loading = false;
		}
	});

	const handleSave = async (e: Event) => {
		e.preventDefault();
		saving = true;
		errors = {};
		globalError = null;
		let resultData = userForm;

		if (!toEdit) {
			const result = userSchema.safeParse(userForm);
			if (!result.success) {
				errors = Object.fromEntries(
					result.error.issues.map((issue) => [issue.path[0], $t(issue.message)])
				);
				saving = false;
				return;
			}
			resultData = result.data;
		}

		try {
			let userId: string;

			if (toEdit && id) {
				await updateUser(id, resultData);
				userId = id;
			} else {
				const newUser = await createUser(resultData);
				userId = newUser.id;
			}

			const refreshed = await getUserById(userId);
			if (refreshed.role === 'manager' && refreshed.status) {
				await attachShopsToUser(userId, {
					shopIds: assignedShops.map((shop) => shop.id)
				});
			}
			goto('/admin/users');
		} catch (err) {
			globalError = getErrorMessage(err, $t);
		} finally {
			saving = false;
		}
	};
</script>

<div class="max-md:px-0 lg:ml-64">
	{#if globalError}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{globalError}
			</p>
		</div>
	{:else if loading}
		<Spinner />
	{:else}
		<div class="flex flex-col space-y-8 px-4 py-8 max-md:px-0">
			<div class="flex gap-6">
				<BackBtn onRedirect={() => goto('/admin/users')} />
				<h2 class="text-left text-xl font-bold">
					{toEdit ? $t('user.form.editTitle') : $t('user.form.addTitle')}
				</h2>
			</div>
			<UserForm bind:values={userForm} showPassword={!toEdit} {errors} />

			{#if toEdit && userForm.role === 'manager'}
				<div class="flex flex-col gap-10 md:flex-row">
					<div class="flex flex-1">
						<ShopListTable {availableShops} {assignShop} {searchState} />
					</div>

					<div class="h-8 md:hidden"></div>
					<div class="flex flex-1">
						<AssigningToUserTable {assignedShops} {unassignShop} {searchState} />
					</div>
				</div>
			{/if}
			<div class="flex justify-end">
				<Button onclick={handleSave} variant="submit" type="submit" disabled={saving}
					>{saving ? $t('user.form.savingBtn') : $t('user.form.saveBtn')}</Button
				>
			</div>
		</div>
	{/if}
</div>
