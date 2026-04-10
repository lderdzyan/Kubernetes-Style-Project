<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		deleteOrder,
		downloadInvoice,
		getOrderDetails,
		getOrderList,
		updateOrder
	} from '$lib/api/orders';
	import DeleteModal from '$lib/components/dialog/DeleteModal.svelte';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import TableRowTools from '$lib/components/shared/TableRowTools.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { IOrder, IOrderDetails, IOrderingItem } from '$lib/types/orders';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { itemCols } from '$lib/utils/orderTableCols';
	import { onMount, type Snippet } from 'svelte';
	import { t } from 'svelte-i18n';
	import { selectMeasurement, translateData } from '$lib/utils/generateColTranslations';
	import { formatInTimeZone } from 'date-fns-tz';
	import { hy } from 'date-fns/locale';
	import type { IShop } from '$lib/types/shops';
	import { getShopById } from '$lib/api/shops';
	import { deleteOrderItem } from '$lib/utils/orderDetailHelpers';
	import { auth } from '$lib/stores/users.svelte';
	import QuantityButtons from '$lib/components/shared/QuantityButtons.svelte';
	import ListData from '$lib/components/list/ListData.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';
	import IconTooltip from '$lib/components/shared/Tooltip.svelte';
	import { formatPrice } from '$lib/utils/priceFormatter';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let { id } = $props<{ id?: string }>();
	let orderDetail = $state<IOrderDetails | null>(null);
	let orderList: IOrder[] = $state([]);
	let shop: IShop | null = $state(null);
	let isLoading: boolean = $state(false);
	let errorMessage: string | null = $state(null);

	onMount(async () => {
		isLoading = true;
		try {
			orderDetail = await getOrderDetails(id);
			orderList = await getOrderList();
			shop = await getShopById(orderDetail.shopId);
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const recalcTotal = () => {
		if (!orderDetail) return;
		orderDetail.totalAmount = orderDetail.items.reduce((sum, item) => sum + (item.total ?? 0), 0);
	};
	const increaseQuantity = (productId: string) => {
		if (!orderDetail) return;

		orderDetail.items = orderDetail.items.map((item) =>
			item.productId === productId
				? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * (item.price ?? 0) }
				: item
		);

		recalcTotal();
	};
	const decreaseQuantity = (productId: string) => {
		if (!orderDetail) return;
		orderDetail.items = orderDetail.items.map((item) =>
			item.productId === productId && item.quantity > 1
				? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * (item.price ?? 0) }
				: item
		);
		recalcTotal();
	};
	const tableData = () => orderDetail?.items ?? [];

	const handleSave = async () => {
		if (!orderDetail) return;
		try {
			const payload = {
				shopId: orderDetail.shopId,
				items: orderDetail.items.map((item) => ({
					productId: item.productId,
					quantity: item.quantity
				})),
				notes: orderDetail.notes ?? ''
			};

			await updateOrder(payload, orderDetail.id);
			goto('/admin');
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		}
	};
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
		goto('/admin');
	};
	const backToOrders = () => goto('/admin');

	const downloadExcel = async () => {
		if (!orderDetail || !auth.user?.token) return;
		try {
			await downloadInvoice(orderDetail.id, orderDetail.orderNumber, auth.user.token);
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		}
	};
</script>

<div class="px-4 py-8 max-md:px-0 lg:ml-64 print:ml-0 print:p-2">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else if isLoading || !orderDetail}
		<Spinner />
	{:else}
		<div class="flex justify-between gap-8 pb-8 sm:gap-2 print:hidden print:py-0">
			<div class="flex gap-4 print:hidden">
				<BackBtn onRedirect={backToOrders} />

				<h2 class="text-left text-xl font-bold">
					{$t('order.details.title')}
				</h2>
			</div>
		</div>

		<div
			class="flex flex-col gap-4 rounded-md border-2 p-2 max-md:px-0 max-sm:mb-48 sm:gap-2 print:border-0"
		>
			<div
				class="hidden gap-0 py-0 sm:flex-row sm:gap-2 print:flex print:flex-row print:gap-2 print:py-0"
			>
				<p class="text-[16px] font-semibold">{$t('print.createdAt')}:</p>
				<p class="text-[16px] text-gray-600">
					{formatInTimeZone(
						new Date(orderDetail.createdAt),
						'Asia/Yerevan',
						'dd MMM., yyyy, HH:mm',
						{
							locale: hy
						}
					)}
				</p>
			</div>

			<div class="flex flex-col gap-0 py-0 sm:flex-row sm:gap-2 print:py-0">
				<p class="hidden text-[16px] font-semibold print:block">
					{$t('user.form.role.manager')}:
				</p>
				<p class="hidden text-[16px] text-gray-600 print:block">{orderDetail.managerName}</p>
			</div>

			<div class="flex flex-col gap-0 py-0 sm:flex-row sm:gap-2 print:hidden">
				<p class="text-[16px] font-semibold">
					{$t('order.details.number')}:
				</p>
				<p class="text-[16px] text-gray-600 print:hidden">{orderDetail.orderNumber}</p>
			</div>

			<div class="flex flex-col gap-0 py-0 sm:flex-row sm:gap-2 print:py-0">
				<p class="text-[16px] font-semibold print:hidden">
					{$t('order.table.name')}:
				</p>
				<p class="text-[16px] text-gray-600 print:hidden">{orderDetail.shopName}</p>

				<p class="hidden text-[16px] font-semibold print:block">
					{$t('print.payer')}:
				</p>
				<p class="hidden text-[16px] text-gray-600 print:block">{orderDetail.shopName}</p>
			</div>

			{#if shop?.vat}
				<div class="hidden gap-0 print:flex print:flex-row print:gap-2 print:py-0">
					<p class="text-[16px] font-semibold">{$t('print.vat')}:</p>
					<p class="text-[16px] text-gray-600">{shop.vat}</p>
				</div>
			{/if}
			{#if shop?.code}
				<div class="hidden gap-0 print:flex print:flex-row print:gap-2 print:py-0">
					<p class="text-[16px] font-semibold">{$t('shop.table.row.code')}:</p>
					<p class="text-[16px] text-gray-600">{shop.code}</p>
				</div>
			{/if}

			<div class="flex flex-col gap-0 py-0 sm:flex-row sm:gap-2 print:py-0">
				<p class="text-[16px] font-semibold print:hidden">
					{$t('order.table.address')}:
				</p>
				<p class="text-[16px] text-gray-600 print:hidden">{orderDetail.shopAddress}</p>
				<p class="hidden text-[16px] font-semibold print:block">
					{$t('print.address')}:
				</p>
				<p class="hidden text-[16px] text-gray-600 print:block">{orderDetail.shopAddress}</p>
			</div>
			<div class="flex flex-col gap-0 py-0 sm:flex-row sm:gap-2 print:py-0">
				<p class="text-[16px] font-semibold print:block">
					{$t('global.payment')}:
				</p>
				<p class="text-[16px] text-gray-600 print:block">{translateData(orderDetail.notes)}</p>
			</div>

			<div class="py-2">
				{#snippet tools({ row }: { row: IOrderingItem })}
					<div class="hidden justify-end sm:flex print:hidden">
						<TableRowTools id={row.productId} onDelete={() => deleteOneOrder(row.productId)} />
					</div>

					<div class="absolute top-1 right-1 z-10 sm:hidden print:hidden">
						<DropDown id={row.productId} onDelete={() => deleteOneOrder(row.productId)} />
					</div>
				{/snippet}

				{#snippet renderCell({ colKey, row }: { colKey: keyof IOrderingItem; row: IOrderingItem })}
					{#if colKey === 'quantity'}
						<div class="flex items-center gap-2">
							<div>
								<QuantityButtons
									quantity={row.quantity}
									onIncrease={() => increaseQuantity(row.productId)}
									onDecrease={() => decreaseQuantity(row.productId)}
								/>
							</div>
						</div>
					{:else if colKey === 'measurement'}
						<span>{selectMeasurement(row.measurement)}</span>
					{:else if colKey === 'price'}
						{#if row.price !== row.originalPrice}
							<Tooltip.Provider>
								<Tooltip.Root>
									<Tooltip.Trigger
										><span class="font-bold text-red-600 print:underline"
											>{formatPrice(row.price)}</span
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
					{:else}
						{row[colKey]}
					{/if}
				{/snippet}

				<TableData
					withQuantityMargin
					columns={itemCols}
					data={tableData()}
					renderTools={tools}
					renderCell={renderCell as Snippet<[ctx: { colKey: string | number | symbol; row: any }]>}
				/>

				{#snippet orderItem({ row, index }: { row: IOrderingItem; index: number })}
					<div class="relative flex flex-col justify-between gap-2">
						<p class="text-md pr-8 font-bold whitespace-normal">{row.productName}</p>
						<p>
							<span class="mr-1 font-bold">{$t('product.table.row.code')}:</span>
							{row.productCode}
						</p>
						<QuantityButtons
							quantity={row.quantity}
							onIncrease={() => increaseQuantity(row.productId)}
							onDecrease={() => decreaseQuantity(row.productId)}
						/>

						{#if row.price && row.price !== row.originalPrice}
							<p class="font-bold text-red-500">
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
							<span class="mr-1 font-bold">{$t('order.popup.total')}:</span>{formatPrice(row.total)}
						</p>

						{@render tools({ row })}
					</div>
				{/snippet}

				<ListData data={tableData()} renderItem={orderItem} />
			</div>

			<p class="mt-2 text-[18px] font-semibold sm:mt-6">
				{$t('order.popup.total')}:
				<span class="mt-6 ml-4 text-[18px] text-gray-800"
					>{formatPrice(orderDetail.totalAmount)}</span
				>
			</p>
		</div>
		<div
			class="fixed bottom-0 left-0 z-50 flex w-full
	       flex-col gap-4 border-t border-gray-200 bg-white px-4 py-4
	       sm:static sm:left-auto sm:ml-auto sm:w-auto
	       sm:flex-row sm:justify-end sm:gap-4 sm:self-end
	       sm:border-0 sm:bg-transparent sm:p-0 sm:py-4 print:hidden"
		>
			<div class="flex justify-between gap-2">
				<Button variant="outline" onclick={() => window.print()}>{$t('print.preview')}</Button>
				{#snippet excelIcon()}
					<img src="/excel_icon.svg" alt="delete icon" class="h-7 w-7" />
				{/snippet}
				<IconTooltip
					message={$t('global.excel')}
					innerText={excelIcon}
					size="icon"
					variant="outline"
					onClick={() => downloadExcel()}
				></IconTooltip>
			</div>
			<div class="flex justify-between gap-2 max-sm:flex-col">
				<Button variant="submit" onclick={handleSave}>{$t('global.editBtn')}</Button>
				<DeleteModal
					title={$t('global.modal.deleteTxt')}
					onDelete={() => handleDelete(id)}
					trigger="button"
				/>
			</div>
		</div>
	{/if}
</div>
