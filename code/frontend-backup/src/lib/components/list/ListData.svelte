<script lang="ts">
	import { type IOrder } from '$lib/types/orders';
	import { type IProduct } from '$lib/types/product';
	import type { TableColumn } from '$lib/types/table';
	import { type IUser } from '$lib/types/user';
	import { generateColumnData } from '$lib/utils/generateColTranslations';
	import type { Snippet } from 'svelte';

	type TableDataProps<TRow> = {
		columns?: readonly TableColumn<TRow>[];
		data: TRow[];
		renderTools?: Snippet<[ctx: { row: TRow }]>;
		renderCell?: Snippet<[ctx: { colKey: keyof TRow; row: TRow }]>;
		onRowClick?: (row: TRow) => void;
		renderItem?: Snippet<[ctx: { row: TRow; index: number }]>;
	};

	let { columns, data, renderTools, onRowClick, renderCell, renderItem }: TableDataProps<any> =
		$props();
</script>

<div class="block overflow-hidden rounded-md border border-gray-200 lg:hidden print:hidden">
	{#each data as row, i}
		<div
			role="button"
			tabindex="0"
			onclick={() => onRowClick?.(row)}
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') onRowClick?.(row);
			}}
			class="rounded-smshadow-sm flex cursor-pointer flex-col border p-4
				   hover:bg-gray-50 focus:outline-none"
			class:bg-gray-50={i % 2 !== 0}
			class:bg-white={i % 2 === 0}
		>
			{#if renderItem}
				{@render renderItem({ row, index: i })}
			{:else}
				<div class="flex justify-between text-sm font-semibold text-gray-700">
					{#if renderTools}
						<div>{@render renderTools({ row })}</div>
					{/if}
				</div>
			{/if}
			{#if columns}
				{#each columns as col}
					{#if renderCell}
						<span class="text-sm">{@render renderCell({ colKey: col.key, row })}</span>
					{:else}
						<span class="text-sm">
							{generateColumnData(row, col.key as keyof (IUser & IProduct & IOrder))}
						</span>
					{/if}
				{/each}
			{/if}
		</div>
	{/each}
</div>
