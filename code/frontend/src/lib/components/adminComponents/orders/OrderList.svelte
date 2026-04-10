<script lang="ts">
	import { deleteOrder, getOrderList, updateOrderStatus } from '$lib/api/orders';
	import Skeleton from '$lib/components/shared/Skeleton.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import { OrderStatus, type IOrder } from '$lib/types/orders';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { orderColsForAdmin } from '$lib/utils/orderTableCols';
	import { onMount, type Snippet } from 'svelte';
	import { t } from 'svelte-i18n';
	import { formatInTimeZone } from 'date-fns-tz';
	import { hy } from 'date-fns/locale';
	import { goto } from '$app/navigation';
	import Pagination from '$lib/components/pagination/Pagination.svelte';
	import FilterByManagerName from './FilterByManagerName.svelte';
	import ListData from '$lib/components/list/ListData.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import TableRowTools from '$lib/components/shared/TableRowTools.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';
	import PrintOrders from './PrintOrders.svelte';
	import Tooltip from '$lib/components/shared/Tooltip.svelte';
	import Select from '$lib/components/shared/Select.svelte';
	import { statusOptions } from '$lib/utils/statusOptions';
	import { getStatusColor } from '$lib/utils/statusColors';
	import { translateStatus } from '$lib/utils/generateColTranslations';
	import DeleteModal from '$lib/components/dialog/DeleteModal.svelte';
	import { formatPrice } from '$lib/utils/priceFormatter';
	import Search from '$lib/components/shared/Search.svelte';
	import { filterByKeys } from '$lib/utils/filterByKeys';

	let orders: IOrder[] = $state([]);
	let isLoading: boolean = $state(false);
	let errorMessage: string | null = $state(null);
	let filterByManager: string = $state('');
	let selectedOrder: string[] = $state([]);
	let statusFilter: OrderStatus | '' = $state('');
	let searchOrderByShop: string = $state('');
	let currentPage: number = $state(1);

	let perPage = 20;

	onMount(() => {
		let cancelled = false;

		const refreshOrders = async () => {
			try {
				isLoading = true;
				orders = await getOrderList();
				console.log(orders);
			} catch (err) {
				errorMessage = getErrorMessage(err, $t);
			} finally {
				isLoading = false;
			}

			if (!cancelled) {
				setTimeout(refreshOrders, 60000);
			}
		};

		refreshOrders();

		return () => (cancelled = true);
	});

	const filteredOrders = $derived<IOrder[]>(
		!filterByManager ? orders : orders.filter((order) => order.managerId === filterByManager)
	);

	const filterByStatus = $derived(
		!statusFilter ? filteredOrders : filteredOrders.filter((order) => order.status === statusFilter)
	);

	const searchOrders = $derived(filterByKeys(filterByStatus, searchOrderByShop, ['shopName']));
	const formattedOrders = $derived(
		searchOrders.slice((currentPage - 1) * perPage, currentPage * perPage).map((order) => ({
			...order,
			createdAt: formatInTimeZone(new Date(order.createdAt), 'Asia/Yerevan', 'dd MMM yyyy, HH:mm', {
				locale: hy
			})
		}))
	);

	$effect(() => {
		filterByManager;
		statusFilter;
		searchOrders;
		currentPage = 1;
	});

	const getSelectedOrders = (orderId: string, checked: boolean) => {
		if (checked) {
			if (!selectedOrder.includes(orderId)) {
				selectedOrder = [...selectedOrder, orderId];
			}
		} else {
			selectedOrder = selectedOrder.filter((id) => id !== orderId);
		}
	};

	const deleteOrders = async () => {
		if (!selectedOrder.length) return;
		try {
			await Promise.all(selectedOrder.map((id) => deleteOrder(id)));
			orders = orders.filter((order) => !selectedOrder.includes(order.id));
			selectedOrder = [];
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		}
	};
	const updateStatusToPrinted = async () => {
		if (!selectedOrder.length) return;
		for (const id of selectedOrder) {
			await updateOrderStatus(id, OrderStatus.PRINTED);
			orders = orders.map((order) =>
				order.id === id ? { ...order, status: OrderStatus.PRINTED } : order
			);
			selectedOrder = [];
		}
	};

	const updateStatusToDelivered = async () => {
		if (!selectedOrder.length) return;
		for (const id of selectedOrder) {
			await updateOrderStatus(id, OrderStatus.DELIVERED);
			orders = orders.map((order) =>
				order.id === id ? { ...order, status: OrderStatus.DELIVERED } : order
			);
			selectedOrder = [];
		}
	};

	const generateNew = $derived(orders.filter((order) => order.status === OrderStatus.NEW).length);

	const goToEdit = (order: IOrder) => goto(`/admin/order-edit/${order.id}`);
</script>

<div class="px-4 py-8 max-md:px-0 lg:ml-64 print:hidden">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else if isLoading}
		<Skeleton rows={20} />
	{:else}
		<div class="flex justify-between gap-4">
			<h2 class="text-xl font-bold">{$t('order.title')}</h2>
			<p
				class="'text-[#C87B00] w-fit' rounded-lg bg-[#FFAB0033] px-2 py-1.5 text-[12px] font-semibold"
			>
				{$t('print.new')}:<span class="ml-2">{generateNew}</span>
			</p>
		</div>
		<div class="flex flex-col justify-between gap-4 py-8 sm:flex-row">
			<div class="flex flex-col gap-4 sm:flex-row">
				<div class="w-full sm:w-auto ">
					<FilterByManagerName bind:value={filterByManager} />
				</div>
				<div class="w-full sm:w-auto">
					<Select
						bind:value={statusFilter}
						showAllOption={true}
						placeholder={$t('order.filterByStatus')}
						options={statusOptions.map((o) => ({ label: $t(o.label), value: o.value }))}
					/>
				</div>

				<div class="max-md:max-w-64">
					<Search bind:value={searchOrderByShop} />
				</div>
			</div>

			<div class="flex justify-between gap-2.5 max-sm:justify-start">
				{#snippet innerText()}
					<img src="/Printed.svg" alt="print icon" />
				{/snippet}
				<Tooltip
					message={$t('print.markAsPrinted')}
					{innerText}
					size="icon"
					variant="outline"
					onClick={async () => await updateStatusToPrinted()}
					disabled={!Boolean(selectedOrder.length)}
					class="border border-[#22C55E] hover:bg-[#22C55E1A]"
				/>

				{#snippet pdfIcon()}
					<img src="/PDF.svg" alt="pdf icon" />
				{/snippet}

				<Tooltip
					message={$t('print.preview')}
					innerText={pdfIcon}
					size="icon"
					variant="outline"
					onClick={() => window.print()}
					disabled={!Boolean(selectedOrder.length)}
					class="border border-[#FFAB00] hover:bg-[#FFAB001A]"
				></Tooltip>

				{#snippet deliverIcon()}
					<img src="/Sent.svg" alt="send icon" />
				{/snippet}

				<Tooltip
					innerText={deliverIcon}
					message={$t('print.deliver')}
					size="icon"
					variant="outline"
					onClick={async () => await updateStatusToDelivered()}
					disabled={!Boolean(selectedOrder.length)}
					class="border border-[#014598] hover:bg-[#0145981A]"
				></Tooltip>

				<DeleteModal
					trigger="trash"
					onDelete={() => deleteOrders()}
					disabled={!Boolean(selectedOrder.length)}
					title={$t('global.modal.deleteTxt')}
				/>
			</div>
		</div>
		<div>
			{#snippet renderCell({ colKey, row }: { colKey: keyof IOrder; row: IOrder })}
				{#if colKey === 'orderNumber'}
					<div class="flex items-center gap-2 print:hidden">
						<Checkbox
							checked={selectedOrder.includes(row.id)}
							onCheckedChange={(val) => getSelectedOrders(row.id, val)}
						/>

						<span>{row.orderNumber}</span>
					</div>
				{:else if colKey === 'status'}
					<span class={getStatusColor(row.status)}>
						{translateStatus(row.status)}
					</span>
				{:else if colKey === 'totalAmount'}
					<span class="flex justify-center">{formatPrice(row.totalAmount)}</span>
				{:else}
					{row[colKey]}
				{/if}
			{/snippet}

			{#snippet tools({ row }: { row: IOrder })}
				<div class="hidden justify-end sm:flex">
					<TableRowTools id={row.id} onEdit={() => goToEdit(row)} />
				</div>

				<div class="absolute top-1 right-1 z-10 sm:hidden">
					<DropDown id={row.id} onEdit={() => goToEdit(row)} />
				</div>
			{/snippet}

			<TableData
				data={formattedOrders}
				columns={orderColsForAdmin}
				renderTools={tools}
				renderCell={renderCell as Snippet<[ctx: { colKey: string | number | symbol; row: any }]>}
			/>

			{#snippet orderItem({ row, index }: { row: IOrder; index: number })}
				<div class="relative flex flex-col justify-between gap-4">
					<p>{row.orderNumber}</p>
					<p class="text-md font-bold">{row.shopName}</p>
					<p>{row.shopAddress}</p>
					<p>{row.totalAmount}</p>
					<p>{row.managerName}</p>
					<p class={getStatusColor(row.status)}>
						{translateStatus(row.status)}
					</p>
					<small>{row.createdAt}</small>
					{@render tools({ row })}
				</div>
			{/snippet}

			<ListData data={formattedOrders} onRowClick={goToEdit} renderItem={orderItem} />
		</div>
		<div class="mt-4 flex justify-end">
			<Pagination
				count={filterByStatus.length}
				{perPage}
				siblingCount={1}
				bind:page={currentPage}
			/>
		</div>
	{/if}
</div>

<div class="hidden print:block">
	<PrintOrders selectedOrders={selectedOrder} />
</div>
