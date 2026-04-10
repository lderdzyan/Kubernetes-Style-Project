<script lang="ts">
	import type { IOrder } from '$lib/types/orders';
	import { onMount, type Snippet } from 'svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { goto } from '$app/navigation';
	import { t } from 'svelte-i18n';
	import TableData from '$lib/components/table/TableData.svelte';
	import { orderColumns } from '$lib/utils/orderTableCols';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import { getOrderList } from '$lib/api/orders';
	import { formatInTimeZone } from 'date-fns-tz';
	import { hy } from 'date-fns/locale';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import ListData from '$lib/components/list/ListData.svelte';
	import Pagination from '$lib/components/pagination/Pagination.svelte';
	import { translateStatus } from '$lib/utils/generateColTranslations';
	import { getStatusColor } from '$lib/utils/statusColors';

	let orders: IOrder[] = $state([]);
	let isLoading: boolean = $state(false);
	let errorMessage: string | null = $state(null);
	let currentPage: number = $state(1);
	let perPage = 20;

	const paginateOrderList: IOrder[] = $derived(
		orders.slice((currentPage - 1) * perPage, currentPage * perPage)
	);
	
	onMount(async () => {
		isLoading = true;
		try {
			orders = await getOrderList();
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const ordersWithFormattedDate = $derived(
		paginateOrderList.map((order) => ({
			...order,

			createdAt: formatInTimeZone(
				new Date(order.createdAt),
				'Asia/Yerevan',
				'dd MMM., yyyy, HH:mm',
				{ locale: hy }
			)
		}))
	);
	const redirect = () => goto('/manager/add/shops');
	const viewDetails = (order: IOrder) => goto(`/manager/${order.id}`);
</script>

<div class="w-full">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else if isLoading}
		<Skeleton rows={20} />
	{:else if orders.length > 0}
		<div class="flex justify-between gap-4 pb-8 max-sm:px-4">
			<h1 class="text-xl font-bold">
				{$t('order.title')}
			</h1>
			<Button variant="submit" size="default" onclick={redirect}>{$t('order.addBtn')}</Button>
		</div>
		<div>
			{#snippet renderCell({ colKey, row }: { colKey: keyof IOrder; row: IOrder })}
				{#if colKey === 'status'}
					<span class={getStatusColor(row.status)}>
						{translateStatus(row.status)}
					</span>
				{:else}
					{row[colKey]}
				{/if}
			{/snippet}

			<TableData
				columns={orderColumns}
				data={ordersWithFormattedDate}
				onRowClick={viewDetails}
				renderCell={renderCell as Snippet<[ctx: { colKey: string | number | symbol; row: any }]>}
			/>

			{#snippet orderItem({ row, index }: { row: IOrder; index: number })}
				<div class="flex flex-col justify-between gap-4">
					<p class="text-md font-bold">{row.shopName}</p>
					<p>{row.shopAddress}</p>
					<p class={getStatusColor(row.status)}>
						{translateStatus(row.status)}
					</p>

					<small>{row.createdAt}</small>
				</div>
			{/snippet}

			<ListData data={ordersWithFormattedDate} onRowClick={viewDetails} renderItem={orderItem} />

			<div class="flex justify-end pb-28 sm:pb-0">
				<Pagination count={orders.length} {perPage} siblingCount={1} bind:page={currentPage} />
			</div>
		</div>
	{:else}
		<div
			class="mx-auto mt-30 flex h-[530px] w-[495px] flex-col items-center justify-center gap-2 p-4 max-sm:h-[350px] max-sm:w-[300px]"
		>
			<img
				src="/Illustration.png"
				alt="No Items Yet"
				class="h-[400px] w-[495px] max-sm:h-[225px] max-sm:w-[280px]"
			/>
			<div class="flex flex-col gap-6 px-4 pt-10">
				<p class="text-[24px] font-normal text-[#020618] max-sm:text-[20px]">
					{$t('order.noOrder')}
				</p>
				<Button variant="submit" size="sm" onclick={redirect}>{$t('order.addBtn')}</Button>
			</div>
		</div>
	{/if}
</div>
