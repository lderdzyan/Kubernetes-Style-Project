<script lang="ts">
	import { goto } from '$app/navigation';
	import { getCategoryList } from '$lib/api/category';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { ICategory } from '$lib/types/categories';
	import { onMount } from 'svelte';
	import CategoriesTable from './CategoriesTable.svelte';
	import Pagination from '$lib/components/pagination/Pagination.svelte';
	import { t } from 'svelte-i18n';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';

	let categories: ICategory[] = $state([]);
	let isLoading: boolean = $state(true);
	let errorMessage: string = $state('');

	let currentPage: number = $state(1);
	const perPage = 10;

	const paginateCategoryList: ICategory[] = $derived(
		categories.slice((currentPage - 1) * perPage, currentPage * perPage)
	);

	onMount(async () => {
		isLoading = true;

		try {
			let categoryList: ICategory[] = await getCategoryList();
			categories = [...categoryList];
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const redirect = () => {
		goto('/admin/categories/add');
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
			<h1 class="text-xl font-bold">{$t('category.table.title')}</h1>
			<Button onclick={redirect} type="submit" variant="submit">{$t('global.addBtn')}</Button>
		</div>
		<CategoriesTable categories={paginateCategoryList} />

		<div class="mt-4 flex justify-end">
			<Pagination count={categories.length} {perPage} siblingCount={1} bind:page={currentPage} />
		</div>
	{/if}
</div>
