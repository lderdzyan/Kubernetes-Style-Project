<script lang="ts">
	import { goto } from '$app/navigation';
	import { createCategory, getCategoryById, updateCategory } from '$lib/api/category';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import type { ICategory } from '$lib/types/categories';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let { id } = $props<{ id?: string }>();

	const toEdit = $derived(Boolean(id));
	let isLoading: boolean = $state(false);
	let errorMessage: string = $state('');
	let categoryForm: Omit<ICategory, 'id'> = $state({
		name: ''
	});

	onMount(async () => {
		if (!id) return;
		isLoading = true;

		try {
			const category = await getCategoryById(id);
			categoryForm = { ...category };
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});
	const handleSave = async (e: Event) => {
		e.preventDefault();
		try {
			if (toEdit && id) {
				await updateCategory(id, categoryForm);
			} else {
				await createCategory(categoryForm);
			}
			goto('/admin/categories');
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		}
	};
</script>

<div class="max-md:px-0 lg:ml-64">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else if isLoading}
		<Spinner />
	{:else}
		<div class="flex w-full flex-col gap-6 px-4 py-8 max-md:px-0">
			<div class="flex gap-4">
				<BackBtn onRedirect={() => goto('/admin/categories')} />
				<h2 class="text-left text-xl font-bold">
					{toEdit ? $t('category.form.editTitle') : $t('category.form.addTitle')}
				</h2>
			</div>
			<div class="mt-4 flex w-full flex-col gap-4">
				<Label for="name">{$t('category.form.label')}</Label>
				<Input
					id="name"
					bind:value={categoryForm.name}
					placeholder={$t('category.form.namePlaceholder')}
					class="col-span-3"
				/>
			</div>

			<div class="flex justify-end gap-8 p-2">
				<Button onclick={handleSave} variant="submit" type="submit" class="p-4">
					{toEdit ? $t('global.editBtn') : $t('global.addBtn')}</Button
				>
			</div>
		</div>
	{/if}
</div>
