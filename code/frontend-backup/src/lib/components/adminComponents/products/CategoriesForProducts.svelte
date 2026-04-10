<script lang="ts">
	import { goto } from '$app/navigation';
	import { getCategoryList } from '$lib/api/category';
	import ListData from '$lib/components/list/ListData.svelte';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import { Row } from '$lib/components/ui/table';
	import type { ICategory } from '$lib/types/categories';
	import { categoryColumns } from '$lib/utils/categoryTableCols';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let categoryList: ICategory[] = $state([]);
	let isLoading: boolean = $state(true);
	let errorMessage: string = $state('');

	onMount(async () => {
		isLoading = true;

		try {
			categoryList = await getCategoryList();
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});
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
			<h1 class="text-xl font-bold">{$t('product.byCategory')}</h1>
		</div>
	{/if}

	<TableData
		columns={categoryColumns}
		data={categoryList}
		onRowClick={(row) => goto(`/admin/products/by-category/${row.id}`)}
	/>

	{#snippet orderItem({ row, index }: { row: ICategory; index: number })}
		<div class="relative flex flex-col justify-between gap-2">
			<p class="text-md pr-8 font-bold whitespace-normal">{row.name}</p>
		</div>
	{/snippet}
	<ListData
		data={categoryList}
		renderItem={orderItem}
		onRowClick={(row) => goto(`/admin/products/by-category/${row.id}`)}
	/>
</div>
