<script lang="ts">
	import { goto } from '$app/navigation';
	import { getAssignedShops } from '$lib/api/shops';
	import Search from '$lib/components/shared/Search.svelte';
	import Pagination from '$lib/components/pagination/Pagination.svelte';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import { createOrder } from '$lib/stores/orders.svelte';
	import type { IShop } from '$lib/types/shops';
	import { filterItems } from '$lib/utils/filterShops';
	import { shopColumns } from '$lib/utils/shopTableCols';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import ListData from '$lib/components/list/ListData.svelte';

	let shops: IShop[] = $state([]);
	let searchState: string = $state('');
	let isLoading: boolean = $state(false);
	let errorMessage: string | null = $state(null);
	let currentPage: number = $state(1);
	let perPage = 30;

	const filteredShops: IShop[] = $derived(filterItems(shops, searchState));
	const paginateShopList = $derived(
		filteredShops.slice((currentPage - 1) * perPage, currentPage * perPage)
	);

	onMount(async () => {
		try {
			isLoading = true;
			shops = await getAssignedShops();
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const handleClick = (shop: IShop) => {
		createOrder.shopId = shop.id;
		createOrder.categoryId = null;
		createOrder.items = [];
		goto('/manager/add/categories');
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
		<Skeleton rows={12} />
	{:else}
		<div class="flex gap-4 pb-8 max-md:mt-6 max-md:mb-0 max-md:px-4 max-md:pb-0">
			<BackBtn onRedirect={() => goto('/manager')} />
			<h1 class="text-xl font-bold">{$t('order.assignedShops')}</h1>
		</div>

		<div class="flex justify-between gap-4 pb-8 max-sm:px-4">
			<div class="top-20 z-50 w-84 bg-white max-md:fixed max-md:left-0 max-md:w-full max-sm:px-4">
				<Search bind:value={searchState} />
			</div>
		</div>

		<TableData columns={shopColumns} data={paginateShopList} onRowClick={handleClick} />

		{#snippet orderItem({ row, index }: { row: IShop; index: number })}
			<div class="flex flex-col justify-between gap-2">
				<p class="text-md font-bold">{row.name}</p>
				<p class="text-md">{row.address}</p>
				<p class="text-sm">
					<span class="mr-1 font-bold">{$t('shop.table.row.code')}:</span>
					{row.code}
				</p>
				<p class="text-sm">
					<span class="mr-1 font-bold">{$t('shop.table.row.vat')}:</span>{row.vat}
				</p>
				<p class="text-sm">{row.phone}</p>
			</div>
		{/snippet}
		<ListData data={paginateShopList} onRowClick={handleClick} renderItem={orderItem} />

		<div class=" flex justify-end px-4">
			<Pagination count={filteredShops.length} {perPage} siblingCount={1} bind:page={currentPage} />
		</div>
	{/if}
</div>
