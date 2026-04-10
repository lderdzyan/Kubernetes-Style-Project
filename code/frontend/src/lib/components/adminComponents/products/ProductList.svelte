<script lang="ts">
	import { goto } from '$app/navigation';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { MovingDirection, type IProduct } from '$lib/types/product';
	import { t } from 'svelte-i18n';
	import ProductTable from './ProductTable.svelte';
	import Pagination from '$lib/components/pagination/Pagination.svelte';
	import Search from '../../shared/Search.svelte';
	import { filterItems } from '$lib/utils/filterShops';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import {
		deleteProduct,
		getProductsByCategory,
		moveProductDown,
		moveProductUp
	} from '$lib/api/product';
	import { onMount } from 'svelte';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { moveRowDown, moveRowUp } from '$lib/utils/rowUpdates';

	let products: IProduct[] = $state([]);
	let isLoading: boolean = $state(false);
	let currentPage: number = $state(1);
	let searchState: string = $state('');
	let errorMessage: string | null = $state(null);
	let itemPositionUpdateLoading: boolean = $state(false);

	let { id } = $props<{ id: string }>();

	const perPage = 50;

	onMount(async () => {
		if (!id) return;
		isLoading = true;
		try {
			products = await getProductsByCategory(id);
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const filteredProducts: IProduct[] = $derived(filterItems(products, searchState));
	const paginateProductList: IProduct[] = $derived(
		filteredProducts.slice((currentPage - 1) * perPage, currentPage * perPage)
	);

	const updateItemPosition = async (id: string, direction: MovingDirection) => {
		try {
			itemPositionUpdateLoading = true;
			if (direction === MovingDirection.DOWN) {
				await moveProductDown(id);
				products = moveRowDown(products, id);
			} else {
				await moveProductUp(id);
				products = moveRowUp(products, id);
			}
		} catch (err) {
			console.error(err, 'Cannot swap');
		} finally {
			itemPositionUpdateLoading = false;
		}
	};

	const handleDelete = (id: string) => {
		deleteProduct(id);
		products = products.filter((product: IProduct) => product.id !== id);
	};
	const redirect = () => goto(`/admin/products/add?categoryId=${id}`);
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
			<div class="flex items-center justify-center gap-4">
				<BackBtn onRedirect={() => goto('/admin/products')} />
				<h1 class="text-xl font-bold">{$t('product.table.title')}</h1>
			</div>

			<Button onclick={redirect} type="submit" variant="submit">{$t('global.addBtn')}</Button>
		</div>

		<div class="flex flex-col gap-4 pb-8 sm:flex-row sm:items-center sm:justify-between">
			<Search bind:value={searchState} class="w-full sm:w-auto" />
		</div>

		<ProductTable
			products={paginateProductList}
			allProducts={products}
			onMovingItem={updateItemPosition}
			onDelete={handleDelete}
			movingLoading={itemPositionUpdateLoading}
		/>

		<div class=" flex justify-end">
			<Pagination
				count={filteredProducts.length}
				{perPage}
				siblingCount={1}
				bind:page={currentPage}
			/>
		</div>
	{/if}
</div>
