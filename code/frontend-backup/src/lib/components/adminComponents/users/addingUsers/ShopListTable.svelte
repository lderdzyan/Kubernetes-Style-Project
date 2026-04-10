<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import { ShopTableRows } from '$lib/utils/shopTableCols';
	import Search from '../../../shared/Search.svelte';
	import { filterItems } from '$lib/utils/filterShops';
	import { ArrowRight } from 'lucide-svelte';
	import type { IShop } from '$lib/types/shops';
	import { t } from 'svelte-i18n';
	import ListData from '$lib/components/list/ListData.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';

	let { availableShops, assignShop, searchState } = $props<{
		availableShops: IShop[];
		assignShop: (shop: IShop) => void;
		searchState: string;
	}>();

	const filteredShops: IShop[] = $derived(filterItems(availableShops, searchState));
</script>

{#snippet tools({ row }: { row: IShop })}
	<div class="hidden justify-end sm:flex">
		<Button size="sm" variant="submit" onclick={() => assignShop(row)}>
			<ArrowRight />
		</Button>
	</div>

	<div class="absolute top-1 right-1 z-10 sm:hidden">
		<DropDown id={row.id} onAssign={() => assignShop(row)} />
	</div>
{/snippet}

<div class="w-full">
	<h2 class="text-md text-left font-bold max-sm:text-center">{$t('shop.table.title')}</h2>
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
