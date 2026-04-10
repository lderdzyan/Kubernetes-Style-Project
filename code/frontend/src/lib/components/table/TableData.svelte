<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { t } from 'svelte-i18n';
	import Switch from '../ui/switch/switch.svelte';
	import { type Snippet } from 'svelte';
	import { generateColumnData } from '$lib/utils/generateColTranslations';
	import type { IUser } from '$lib/types/user';
	import type { IProduct } from '$lib/types/product';
	import type { TableColumn } from '$lib/types/table';
	import { type IOrder } from '$lib/types/orders';

	type TableDataProps<TRow> = {
		columns: readonly TableColumn<TRow>[];
		data: TRow[];
		renderTools?: Snippet<[ctx: { row: TRow }]>;
		renderCell?: Snippet<[ctx: { colKey: keyof TRow; row: TRow }]>;
		onRowClick?: (row: TRow) => void;
		withQuantityMargin?: boolean;
		renderHeaderCell?: Snippet<[ctx: { colKey: keyof TRow }]>;
	};

	let {
		columns,
		data,
		renderTools,
		onRowClick,
		renderCell,
		withQuantityMargin,
		renderHeaderCell
	}: TableDataProps<any> = $props();
</script>

<div
	class="custom-scrollbar hidden overflow-hidden rounded-lg border border-gray-200 shadow-sm lg:block print:block
"
>
	<Table.Root class="min-w-full text-sm">
		<Table.Header class="bg-gray-300">
			<Table.Row>
				<Table.Head class="px-4 py-2 text-left hidden print:table-cell">№</Table.Head>
				{#each columns as col}
					<Table.Head
						class={'px-4 py-2' +
							(col.key === 'quantity' && withQuantityMargin ? 'pl-10' : 'text-left') +
							' ' +
							(col.class ?? '')}
					>
						{$t(col.label)}
					</Table.Head>
				{/each}

				{#if renderTools}
					<Table.Head class="px-4 py-2 text-left print:hidden"></Table.Head>
				{/if}
			</Table.Row>
		</Table.Header>

		<Table.Body>
			{#each data as row, i}
				<Table.Row
					class={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
					onclick={() => onRowClick?.(row)}
				>
					<Table.Cell class="px-4 py-2 font-semibold hidden print:table-cell">
						{i + 1}
					</Table.Cell>
					{#each columns as col}
						<Table.Cell class="wrap-break-words cursor-pointer px-4 py-2 whitespace-normal">
							{#if renderCell}
								{@render renderCell({ colKey: col.key, row })}
							{:else if col.key === 'status' && typeof row.status === 'boolean'}
								<Switch checked={row.status} />
							{:else}
								{generateColumnData(row, col.key as keyof (IUser & IProduct & IOrder))}
							{/if}
						</Table.Cell>
					{/each}

					{#if renderTools}
						<Table.Cell class="px-4 py-2 print:hidden">
							{@render renderTools({ row })}
						</Table.Cell>
					{/if}
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
