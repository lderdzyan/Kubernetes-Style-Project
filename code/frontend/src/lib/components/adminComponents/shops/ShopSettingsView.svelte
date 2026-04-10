<script lang="ts">
	import { goto } from '$app/navigation';
	import { getAllShops } from '$lib/api/shops';
	import ShopTable from '$lib/components/adminComponents/shops/ShopTable.svelte';
	import Pagination from '$lib/components/pagination/Pagination.svelte';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { IShop } from '$lib/types/shops';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import Search from '../../shared/Search.svelte';
	import { filterItems } from '$lib/utils/filterShops';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';

	let shops: IShop[] = $state([]);
	let isLoading: boolean = $state(true);
	let errorMessage: string | null = $state(null);

	let searchState: string = $state('');

	let currentPage: number = $state(1);
	const perPage = 50;

	const filteredShops: IShop[] = $derived(filterItems(shops, searchState));
	const paginateShopList = $derived(
		filteredShops.slice((currentPage - 1) * perPage, currentPage * perPage)
	);

	onMount(async () => {
		isLoading = true;

		try {
			const shopList: IShop[] = await getAllShops();
			shopList.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
			shops = [...shopList];
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
			console.error(err, 'No available shops');
		} finally {
			isLoading = false;
		}
	});

	const redirectToAdd = () => {
		goto('/admin/shops/add');
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
		<Skeleton rows={12} />
	{:else}
		<div class="flex justify-between gap-2 pb-8">
			<h1 class="text-xl font-bold">{$t('shop.table.title')}</h1>
			<Button onclick={redirectToAdd} type="submit" variant="submit">{$t('global.addBtn')}</Button>
		</div>

		<div class="pb-8">
			<Search bind:value={searchState} />
		</div>

		<ShopTable shops={paginateShopList} />

		<div class="mt-4 flex justify-end">
			<Pagination count={filteredShops.length} {perPage} siblingCount={1} bind:page={currentPage} />
		</div>
	{/if}
</div>
