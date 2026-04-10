<script lang="ts">
	import { goto } from '$app/navigation';
	import ListData from '$lib/components/list/ListData.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';
	import TableRowTools from '$lib/components/shared/TableRowTools.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { MovingDirection, type IProduct } from '$lib/types/product';
	import { selectMeasurement } from '$lib/utils/generateColTranslations';
	import { formatPrice } from '$lib/utils/priceFormatter';
	import { productColumns } from '$lib/utils/productTableCols';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import { ChevronDown } from 'lucide-svelte';
	import { type Snippet } from 'svelte';
	import { t } from 'svelte-i18n';

	let { products, allProducts, onDelete, onMovingItem, movingLoading } = $props<{
		products: IProduct[];
		allProducts: IProduct[];
		onMovingItem: (id: string, direction: MovingDirection) => Promise<void>;
		onDelete: (id: string) => void;
		movingLoading: boolean;
	}>();

	const displayProducts = $derived(
		products.map((product: IProduct) => ({
			...product,
			category: product.category?.name ?? ''
		}))
	);

	const redirectToEdit = (id: string) => {
		goto(`/admin/products/edit/${id}`);
	};

	const handleDelete = (id: string) => {
		onDelete(id);
	};
</script>

<div>
	{#snippet tools({ row }: { row: IProduct })}
		<div class="hidden justify-end sm:flex">
			<TableRowTools id={row.id} onEdit={redirectToEdit} onDelete={handleDelete} />
		</div>

		<div class="absolute top-1 right-1 z-10 sm:hidden">
			<DropDown id={row.id} onEdit={redirectToEdit} onDelete={handleDelete} />
		</div>
	{/snippet}

	{#snippet renderCell({ colKey, row }: { colKey: keyof IProduct; row: IProduct })}
		{#if colKey === 'id'}
			{@const globalIndex = allProducts.findIndex((p: IProduct) => p.id === row.id)}
			{@const isFirst = globalIndex === 0}
			{@const isLast = globalIndex === allProducts.length - 1}
			<div class="flex flex-col items-center gap-1.5">
				{#if !isFirst}
					<Button
						disabled={movingLoading}
						onclick={() => onMovingItem(row.id, MovingDirection.UP)}
						variant="ghost"
						size="icon"
						class="h-4 w-4 text-gray-500"
					>
						<ChevronUp />
					</Button>
				{/if}
				{#if !isLast}
					<Button
						disabled={movingLoading}
						onclick={() => onMovingItem(row.id, MovingDirection.DOWN)}
						variant="ghost"
						size="icon"
						class="h-4 w-4 text-gray-500"
					>
						<ChevronDown />
					</Button>
				{/if}
			</div>
		{:else if colKey === 'price'}
			<span>{formatPrice(row.price)}</span>
		{:else if colKey === 'measurement'}
			<span>{selectMeasurement(row.measurement || undefined)}</span>
		{:else}
			{row[colKey]}
		{/if}
	{/snippet}
	<TableData
		columns={productColumns}
		data={displayProducts}
		renderTools={tools}
		renderCell={renderCell as Snippet<[ctx: { colKey: string | number | symbol; row: any }]>}
	/>

	{#snippet orderItem({ row, index }: { row: IProduct; index: number })}
		<div class="relative flex flex-col justify-between gap-2">
			<p class="text-md mr-8 font-bold whitespace-normal">{row.name}</p>
			<p class="text-sm">{$t('product.table.row.code')}: {row.code}</p>
			<p class="text-sm">{selectMeasurement(row.measurement || undefined)}</p>
			<p class="text-sm">{$t('product.table.row.price')}: {formatPrice(row.price)}</p>
			<p class="text-sm">{row.category}</p>
			{@render tools({ row })}
		</div>
	{/snippet}
	<ListData data={displayProducts} renderItem={orderItem} />
</div>
