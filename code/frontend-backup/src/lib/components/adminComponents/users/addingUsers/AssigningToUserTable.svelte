<script lang="ts">
	import TableData from '$lib/components/table/TableData.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { filterItems } from '$lib/utils/filterShops';
	import { ShopTableRows } from '$lib/utils/shopTableCols';
	import { CircleX } from 'lucide-svelte';
	import Search from '../../../shared/Search.svelte';
	import type { IShop } from '$lib/types/shops';
	import { t } from 'svelte-i18n';
	import ListData from '$lib/components/list/ListData.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';

	let { assignedShops, unassignShop, searchState } = $props<{
		assignedShops: IShop[];
		unassignShop: (shop: IShop) => void;
		searchState: string;
	}>();

	const filteredShops: IShop[] = $derived(filterItems(assignedShops, searchState));
</script>

{#snippet tools({ row }: { row: IShop })}
	<div class="hidden justify-end sm:flex">
		<Button size="sm" variant="destructive" onclick={() => unassignShop(row)}>
			<CircleX />
		</Button>
	</div>

	<div class="absolute top-1 right-1 z-20 sm:hidden">
		<DropDown id={row.id} onDelete={() => unassignShop(row)} />
	</div>
{/snippet}

<div class="w-full">
	<h2 class="text-md text-left font-bold max-sm:text-center">{$t('shop.assignedShopTitle')}</h2>
	<div class="flex py-6">
		<Search bind:value={searchState} />
	</div>

	<div class="max-h-64 overflow-y-auto rounded-lg border">
		<TableData columns={ShopTableRows} data={filteredShops} renderTools={tools} />
		{#snippet orderItem({ row, index }: { row: IShop; index: number })}
			<div class="relative flex flex-col justify-between gap-2">
				<p class="text-md pr-8 font-bold whitespace-normal">{row.name}</p>
				<p class="text-md pr-8 whitespace-normal">{row.address}</p>
				<p class="text-sm">{$t('shop.table.row.code')}: {row.code}</p>
				<p class="text-sm">{$t('shop.table.row.vat')}: {row.vat}</p>
				<p class="text-sm">{row.phone}</p>
				{@render tools({ row })}
			</div>
		{/snippet}
		<ListData data={filteredShops} renderItem={orderItem} />
	</div>
</div>
