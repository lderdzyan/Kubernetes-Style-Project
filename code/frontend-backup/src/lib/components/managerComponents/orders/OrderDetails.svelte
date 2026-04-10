<script lang="ts">
	import { goto } from '$app/navigation';
	import { deleteOrder, getOrderDetails, getOrderList } from '$lib/api/orders';
	import DeleteModal from '$lib/components/dialog/DeleteModal.svelte';
	import ListData from '$lib/components/list/ListData.svelte';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import TableRowTools from '$lib/components/shared/TableRowTools.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import type { IOrder, IOrderDetails, IOrderingItem } from '$lib/types/orders';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { selectMeasurement, translateData } from '$lib/utils/generateColTranslations';
	import { deleteOrderItem } from '$lib/utils/orderDetailHelpers';
	import { itemCols } from '$lib/utils/orderTableCols';
	import { formatPrice } from '$lib/utils/priceFormatter';
	import { onMount, type Snippet } from 'svelte';
	import { t } from 'svelte-i18n';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let { id } = $props<{ id: string }>();
	let orderDetail: IOrderDetails | null = $state(null);
	let orderList: IOrder[] = $state([]);
	let isLoading: boolean = $state(false);
	let errorMessage: string | null = $state(null);

	onMount(async () => {
		isLoading = true;
		try {
			if (id) {
				orderDetail = await getOrderDetails(id);
				orderList = await getOrderList();
			}
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const tableData = () => orderDetail?.items ?? [];

	const deleteOneOrder = async (productId: string) => {
		if (!orderDetail) return;
		try {
			orderDetail = await deleteOrderItem(orderDetail, productId);
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		}
	};
	const handleDelete = async (id: string) => {
		await deleteOrder(id);
		orderList = orderList.filter((order) => order.id !== id);
		goto('/manager');
	};

	const backToOrders = () => goto('/manager');
</script>

<div class="flex w-full flex-col">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else if isLoading || !orderDetail}
		<Spinner />
	{:else}
		<div class="flex gap-4 pb-8 max-sm:px-4">
			<BackBtn onRedirect={backToOrders} />
			<h1 class="text-xl font-bold">{$t('order.details.title')}</h1>
		</div>

		<div class="flex flex-col gap-2 rounded-md border-2 p-4 max-md:border-0 max-md:p-0">
			<div class="max-sm:px-4">

				<div class="flex flex-col gap-0 py-0 max-md:p-1 sm:flex-row sm:gap-2">
					<p class="text-[16px] font-semibold">
						{$t('order.details.number')}:
					</p>
					<p class="text-[16px] text-gray-600">{orderDetail.orderNumber}</p>
				</div>
				<div class="flex flex-col gap-0 py-0 max-md:p-1 sm:flex-row sm:gap-2">
					<p class="text-[16px] font-semibold">
						{$t('order.table.name')}:
					</p>
					<p class="text-[16px] text-gray-600">{orderDetail.shopName}</p>
				</div>
	
				<div class="flex flex-col gap-0 py-0 max-md:p-1 sm:flex-row sm:gap-2">
					<p class="text-[16px] font-semibold">
						{$t('order.table.address')}:
					</p>
					<p class="text-[16px] text-gray-600">{orderDetail.shopAddress}</p>
				</div>
				<div class="flex flex-col gap-0 py-0 max-md:p-1 sm:flex-row sm:gap-2">
					<p class="text-[16px] font-semibold">
						{$t('global.payment')}:
					</p>
					<p class="text-[16px] text-gray-600">{translateData(orderDetail.notes)}</p>
				</div>
			</div>

			<div class="py-2">
				{#snippet tools({ row }: { row: IOrderingItem })}
					<div class="hidden justify-end sm:flex">
						<TableRowTools id={row.productId} onDelete={() => deleteOneOrder(row.productId)} />
					</div>

					<div class="absolute top-1 right-1 z-10 sm:hidden">
						<DropDown id={row.productId} onDelete={() => deleteOneOrder(row.productId)} />
					</div>
				{/snippet}
				{#snippet renderCell({ colKey, row }: { colKey: keyof IOrderingItem; row: IOrderingItem })}
					{#if colKey === 'price'}
						{#if row.price !== row.originalPrice}
							<Tooltip.Provider>
								<Tooltip.Root>
									<Tooltip.Trigger
										><span class="font-bold text-red-600">{formatPrice(row.price)}</span
										></Tooltip.Trigger
									>
									<Tooltip.Content>
										<p>
											<span class="mr-2">{$t('global.initialPrice')}: </span>{formatPrice(
												row.originalPrice
											)}
										</p>
									</Tooltip.Content>
								</Tooltip.Root>
							</Tooltip.Provider>
						{:else}
							<span>{formatPrice(row.originalPrice)}</span>
						{/if}
					{:else if colKey === 'total'}
						<span>{formatPrice(row.total)}</span>
					{:else if colKey === 'measurement'}
						<span>{selectMeasurement(row.measurement || undefined)}</span>
					{:else}
						{row[colKey]}
					{/if}
				{/snippet}
				<TableData
					columns={itemCols}
					data={tableData()}
					renderTools={tools}
					renderCell={renderCell as Snippet<[ctx: { colKey: string | number | symbol; row: any }]>}
				/>

				{#snippet orderItem({ row, index }: { row: IOrderingItem; index: number })}
					<div class="relative flex flex-col justify-between gap-2">
						<p class="text-md pr-8 font-bold text-wrap whitespace-normal">{row.productName}</p>
						<p>
							<span class="mr-1 font-bold">{$t('product.table.row.code')}:</span>
							{row.productCode}
						</p>
						<p>
							<span class="mr-1 font-bold">{$t('order.popup.quantity')}:</span>{row.quantity}
							<span>{selectMeasurement(row.measurement || undefined)}</span>
						</p>
						{#if row.price && row.price !== row.originalPrice}
							<p class="text-red-500">
								<span class="mr-1 font-bold text-gray-900">{$t('product.table.row.price')}:</span
								>{formatPrice(row.price)}
							</p>
						{:else}
							<p>
								<span class="mr-1 font-bold">{$t('product.table.row.price')}:</span>
								{formatPrice(row.price)}
							</p>
						{/if}
						<p>
							<span class="mr-1 font-bold">{$t('order.popup.total')}:</span>
							{formatPrice(row.total)}
						</p>

						{@render tools({ row })}
					</div>
				{/snippet}

				<ListData data={tableData()} renderItem={orderItem} />
			</div>
			<div class="flex flex-col gap-4 py-2 max-md:px-4">
				<p class="text-[18px] font-semibold">
					{$t('order.popup.total')}:
					<span class="mt-6 ml-4 font-semibold text-gray-800"
						>{formatPrice(orderDetail.totalAmount)}</span
					>
				</p>
			</div>
		</div>
		<div class="flex justify-end py-4 max-sm:px-4">
			<DeleteModal
				title={$t('global.modal.deleteTxt')}
				onDelete={() => handleDelete(id)}
				trigger="button"
			/>
		</div>
	{/if}
</div>
