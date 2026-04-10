<script lang="ts">
	import { goto } from '$app/navigation';
	import { createShop, getShopById, updateShopData } from '$lib/api/shops';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import Label from '$lib/components/ui/label/label.svelte';
	import Switch from '$lib/components/ui/switch/switch.svelte';
	import type { IShopInputValues, ValidateShopInputs } from '$lib/types/shops';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { shopSchema } from '$lib/utils/zodValidation';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let { id } = $props<{ id?: string }>();
	const toEdit = $derived(Boolean(id));
	let isLoading: boolean = $state(false);

	let shopForm: IShopInputValues = $state({
		name: '',
		code: '',
		address: '',
		status: false,
		vat: '',
		phone: '',
		managerId: ''
	});

	let errors = $state<Partial<Record<keyof ValidateShopInputs | 'global', string>>>({});

	onMount(async () => {
		if (!id) return;
		isLoading = true;

		try {
			const shop = await getShopById(id);
			shopForm = { ...shop };
		} catch (err) {
			errors.global = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const handleSave = async (e: Event) => {
		e.preventDefault();
		errors = {};
		let resultData = shopForm;
		if (!toEdit) {
			const result = shopSchema.safeParse(shopForm);
			if (!result.success) {
				errors = Object.fromEntries(
					result.error.issues.map((issue) => [issue.path[0], $t(issue.message)])
				);
				return;
			}
			resultData = result.data;
		}

		isLoading = true;

		try {
			if (toEdit && id) {
				await updateShopData(id, resultData);
			} else {
				await createShop(resultData);
			}
			goto('/admin/shops');
		} catch (err) {
			errors.global = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	};
</script>

<div class="max-md:px-0 lg:ml-64">
	{#if errors.global}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errors.global}
			</p>
		</div>
	{:else if isLoading}
		<Spinner />
	{:else}
		<div class="flex w-full flex-col gap-6 px-4 py-8 max-md:px-0">
			<div class="flex gap-4">
				<BackBtn onRedirect={() => goto('/admin/shops')} />
				<h2 class="text-left text-xl font-bold">
					{toEdit ? $t('shop.form.editTitle') : $t('shop.form.addTitle')}
				</h2>
			</div>
			<div class="flex w-full flex-col gap-4">
				<Label for="name">{$t('shop.form.label.name')}</Label>
				<Input
					id="name"
					bind:value={shopForm.name}
					placeholder={$t('shop.form.namePH')}
					class="col-span-3"
				/>
				{#if errors.name}
					<p class="text-sm text-red-500">{errors.name}</p>
				{/if}
			</div>
			<div class="flex w-full flex-col gap-4">
				<Label for="code">{$t('shop.form.label.code')}</Label>
				<Input
					id="code"
					type="text"
					bind:value={shopForm.code}
					placeholder={$t('shop.form.codePH')}
					class="col-span-3"
				/>
				{#if errors.code}
					<p class="text-sm text-red-500">{errors.code}</p>
				{/if}
			</div>
			<div class="flex w-full flex-col gap-4">
				<Label for="address">{$t('shop.form.label.address')}</Label>

				<Input
					id="address"
					type="text"
					bind:value={shopForm.address}
					placeholder={$t('shop.form.addressPH')}
					class="col-span-3"
				/>
				{#if errors.address}
					<p class="text-sm text-red-500">{errors.address}</p>
				{/if}
			</div>
			<div class="flex w-full flex-col gap-4">
				<Label for="phone">{$t('shop.form.label.phone')}</Label>
				<Input
					id="phone"
					type="phone"
					bind:value={shopForm.phone}
					placeholder={$t('shop.form.phonePH')}
					class="col-span-3"
				/>
			</div>
			<div class="flex w-full flex-col gap-4">
				<Label for="vat">{$t('shop.form.label.vat')}</Label>
				<Input
					id="vat"
					type="text"
					bind:value={shopForm.vat}
					placeholder={$t('shop.form.vatPH')}
					class="col-span-3"
				/>
			</div>
			<div class="flex items-center space-x-2">
				<Label class="mr-8">{$t('shop.form.label.status')}</Label>
				<Switch id="status" bind:checked={shopForm.status} />
				<Label for="status" class={shopForm.status ? 'text-gray-900' : 'text-gray-500'}
					>{shopForm.status ? $t('global.switcher.on') : $t('global.switcher.off')}</Label
				>
			</div>

			<div class="flex justify-end gap-8 p-2">
				<Button onclick={handleSave} variant="submit" type="submit" class="p-4">
					{toEdit ? $t('global.editBtn') : $t('global.addBtn')}</Button
				>
			</div>
		</div>
	{/if}
</div>
