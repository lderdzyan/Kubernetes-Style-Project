<script lang="ts">
	import TableData from '$lib/components/table/TableData.svelte';
	import { shopColumns } from '$lib/utils/shopTableCols';
	import type { IShop } from '$lib/types/shops';
	import { deleteShop, updateShopStatus } from '$lib/api/shops';
	import { goto } from '$app/navigation';
	import TableRowTools from '$lib/components/shared/TableRowTools.svelte';
	import { t } from 'svelte-i18n';
	import ListData from '$lib/components/list/ListData.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';

	let { shops } = $props<{ shops: IShop[] }>();

	const handleDelete = (id: string) => {
		deleteShop(id);
		shops = shops.filter((shop: IShop) => shop.id !== id);
	};

	const redirectToEdit = (id: string) => {
		goto(`/admin/shops/edit/${id}`);
	};
</script>

<div>
	{#snippet tools({ row }: { row: IShop })}
		<div class="hidden justify-end sm:flex">
			<TableRowTools
				id={row.id}
				status={row.status}
				onEdit={redirectToEdit}
				onDelete={handleDelete}
				onToggleStatus={async (id, newStatus) => {
					try {
						await updateShopStatus(id, { status: newStatus });
						row.status = newStatus;
					} catch (err) {
						console.error(err);
					}
				}}
			/>
		</div>

		<div class="absolute top-1 right-1 z-10 sm:hidden">
			<DropDown
				id={row.id}
				status={row.status}
				onEdit={redirectToEdit}
				onDelete={handleDelete}
				onToggleStatus={async (id, newStatus) => {
					try {
						await updateShopStatus(id, { status: newStatus });
						row.status = newStatus;
					} catch (err) {
						console.error(err);
					}
				}}
			/>
		</div>
	{/snippet}

	<TableData columns={shopColumns} data={shops} renderTools={tools} />

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
	<ListData data={shops} renderItem={orderItem} />
</div>
