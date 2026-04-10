<script lang="ts">
	import { goto } from '$app/navigation';
	import { getProductsByCategory } from '$lib/api/product';
	import Search from '$lib/components/shared/Search.svelte';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { createOrder } from '$lib/stores/orders.svelte';
	import type { IProduct } from '$lib/types/product';
	import { filterItems } from '$lib/utils/filterShops';
	import { productColumns } from '$lib/utils/productTableCols';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import OrderPopup from '$lib/components/shared/OrderPopup.svelte';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import ListData from '$lib/components/list/ListData.svelte';
	import { formatPrice } from '$lib/utils/priceFormatter';
	import { selectMeasurement } from '$lib/utils/generateColTranslations';

	interface IProductDisplay extends Omit<IProduct, 'category'> {
		category: string;
		selectedQuantity: number;
		selectedPrice: number | null;
	}

	let isLoading: boolean = $state(false);
	let products = $state<IProductDisplay[]>([]);
	let searchState: string = $state('');
	let orderPopup: boolean = $state(false);
	let selectedProduct: IProductDisplay | null = $state(null);
	let errorMessage: string | null = $state(null);

	const filteredProducts: IProductDisplay[] = $derived(filterItems(products, searchState));

	const addQuantity = (
		productList: IProductDisplay[],
		productId: string,
		quantity: number,
		selectedPrice: number
	): IProductDisplay[] => {
		return productList.map((product) =>
			product.id === productId ? { ...product, selectedQuantity: quantity, selectedPrice } : product
		);
	};

	onMount(async () => {
		const id = createOrder.categoryId;
		if (!id) return;
		try {
			isLoading = true;
			const apiProducts: IProduct[] = await getProductsByCategory(id);
			products = apiProducts.map(
				(product): IProductDisplay => ({
					...product,
					category: product.category?.name ?? '',
					selectedQuantity: 0,
					selectedPrice: null
				})
			);
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const handleClick = (product: IProductDisplay) => {
		selectedProduct = product;
		orderPopup = true;
	};
	const handleCancel = () => {
		selectedProduct = null;
		orderPopup = false;
	};

	const handleOrderSubmission = (quantity: number, total: number, newPrice: number) => {
		if (!selectedProduct) return;

		const newItem = {
			productId: selectedProduct.id,
			productName: selectedProduct.name,
			measurement: selectedProduct.measurement || undefined,
			productCode: selectedProduct.code,
			quantity,
			price: newPrice,
			originalPrice: selectedProduct.price,
			total
		};

		const itemIndex = createOrder.items.findIndex((item) => item.productId === selectedProduct?.id);
		if (itemIndex !== -1) {
			createOrder.items[itemIndex] = newItem;
		} else {
			createOrder.items.push(newItem);
		}

		products = addQuantity(products, selectedProduct.id, quantity, newPrice);

		orderPopup = false;
		selectedProduct = null;
	};

	const redirectToCategories = () => goto('/manager/add/categories');
	const redirectToPreview = () => goto('/manager/add/order-preview');
</script>

<div class="flex w-full flex-col">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-md">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else if isLoading}
		<Skeleton rows={15} />
	{:else}
		<div class="flex gap-4 pb-8 max-md:mt-6 max-md:mb-0 max-md:px-4 max-md:pb-0">
			<BackBtn onRedirect={() => goto('/manager')} />
			<h1 class="text-xl font-bold">{$t('product.table.title')}</h1>
		</div>

		<div class="flex flex-col justify-between gap-4 pb-8 max-md:px-4 md:flex-row">
			<div class="top-20 z-50 w-84 bg-white max-md:fixed max-md:left-0 max-md:w-full max-sm:px-4">
				<Search bind:value={searchState} />
			</div>

			<div
				class="fixed bottom-0 left-0 z-50 flex w-full
	       flex-col gap-4 border-t border-gray-200 bg-white px-4 py-4
	       md:static md:left-auto md:ml-auto md:w-auto
	       md:flex-row md:justify-end md:gap-4 md:self-end
	       md:border-0 md:bg-transparent md:p-0"
			>
				<Button variant="default" onclick={redirectToCategories}>{$t('order.categoryBtn')}</Button>
				<Button variant="submit" onclick={redirectToPreview}>{$t('order.previewBtn')}</Button>
			</div>
		</div>

		<TableData columns={productColumns} data={filteredProducts} onRowClick={handleClick} />
		{#snippet orderItem({ row, index }: { row: IProductDisplay; index: number })}
			<div class="flex items-start justify-between gap-2">
				<div class="flex flex-col justify-between gap-2">
					<p class="text-md font-bold whitespace-normal">{row.name}</p>
					<p class="text-md">
						<span class="mr-1 font-bold">{$t('product.table.row.code')}:</span>{row.code}
					</p>
					<p class="text-md">
						<span class="mr-1 font-bold">{$t('product.table.row.price')}</span>: {formatPrice(
							row.price
						)}
					</p>
					<p class="text-md">{row.category}</p>
				</div>
				{#if row.selectedQuantity > 0}
					<div class="flex rounded-md border-2 border-[#014598] px-2">
						<p class="text-center text-[#014598]">
							{row.selectedQuantity}<span class="ml-2"
								>{selectMeasurement(row.measurement || undefined).toLowerCase()}</span
							>
						</p>
					</div>
				{/if}
			</div>
		{/snippet}
		<ListData data={filteredProducts} onRowClick={handleClick} renderItem={orderItem} />
		{#if selectedProduct}
			<OrderPopup
				bind:open={orderPopup}
				title={$t('order.popup.title')}
				onConfirm={handleOrderSubmission}
				onCancel={handleCancel}
				price={selectedProduct?.price}
				initialQuantity={selectedProduct.selectedQuantity || 1}
				initialPrice={selectedProduct.selectedPrice ?? selectedProduct.price}
			/>
		{/if}
		<div class="h-28 md:hidden"></div>
	{/if}
</div>
