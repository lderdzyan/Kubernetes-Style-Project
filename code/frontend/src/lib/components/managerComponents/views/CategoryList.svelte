<script lang="ts">
	import { goto } from '$app/navigation';
	import { getCategoryList } from '$lib/api/category';
	import ListData from '$lib/components/list/ListData.svelte';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import { createOrder } from '$lib/stores/orders.svelte';
	import type { ICategory } from '$lib/types/categories';
	import { categoryColumns } from '$lib/utils/categoryTableCols';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let categories: ICategory[] = $state([]);
	let isLoading: boolean = $state(false);
	let errorMessage: string | null = $state(null);

	onMount(async () => {
		try {
			isLoading = true;
			categories = await getCategoryList();
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const handleClick = (category: ICategory) => {
		createOrder.categoryId = category.id;
		goto('/manager/add/products');
	};
</script>

<div class="w-full">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else if isLoading}
		<Spinner />
	{:else}
		<div class="flex gap-4 pb-8 max-sm:px-4">
			<BackBtn onRedirect={() => goto('/manager')} />
			<h1 class="text-xl font-bold">{$t('category.table.title')}</h1>
		</div>
		<div>
			<TableData columns={categoryColumns} data={categories} onRowClick={handleClick} />
			{#snippet orderItem({ row, index }: { row: ICategory; index: number })}
				<div class="flex flex-col justify-between gap-2">
					<p class="text-md font-bold">{row.name}</p>
				</div>
			{/snippet}
			<ListData data={categories} onRowClick={handleClick} renderItem={orderItem} />
		</div>
	{/if}
</div>
