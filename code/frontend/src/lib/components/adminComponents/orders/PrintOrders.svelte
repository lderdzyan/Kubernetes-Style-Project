<script lang="ts">
	import { getOrderDetails } from '$lib/api/orders';
	import { getAllShops } from '$lib/api/shops';
	import TableData from '$lib/components/table/TableData.svelte';
	import type { IOrderDetails, IOrderingItem } from '$lib/types/orders';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { selectMeasurement, translateData } from '$lib/utils/generateColTranslations';
	import { itemCols } from '$lib/utils/orderTableCols';
	import { formatPrice } from '$lib/utils/priceFormatter';
	import { formatInTimeZone } from 'date-fns-tz';
	import { hy } from 'date-fns/locale';
	import { type Snippet } from 'svelte';
	import { t } from 'svelte-i18n';

	type IOrderPrint = IOrderDetails & {
		shopVAT: number | null;
		shopCode: number | null;
	};
	let ordersToPrint: IOrderPrint[] = $state([]);
	let errorMessage: string | null = $state(null);

	let { selectedOrders } = $props<{ selectedOrders: string[] }>();

	$effect(() => {
		if (!selectedOrders.length) {
			ordersToPrint = [];
			return;
		}

		const load = async () => {
			try {
				const orders = await Promise.all(selectedOrders.map((id: string) => getOrderDetails(id)));
				const allShops = await getAllShops();

				ordersToPrint = orders.map((order) => {
					const shop = allShops.find((s) => s.id === order.shopId);
					return {
						...order,
						shopVAT: shop?.vat ?? null,
						shopCode: shop?.code ?? null
					};
				});
			} catch (err) {
				errorMessage = getErrorMessage(err, $t);
			}
		};

		load();
	});
</script>

<div>
	{#each ordersToPrint as order}
		<div class="page-break flex flex-col justify-between gap-2 p-6">
			<p>
				{formatInTimeZone(new Date(order.createdAt), 'Asia/Yerevan', 'dd MMM., yyyy, HH:mm', {
					locale: hy
				})}
			</p>
			<p class="text-base">
				<span class="mr-2 text-base font-bold">{$t('user.form.role.manager')}:</span
				>{order.managerName}
			</p>
			<p class="text-base">
				<span class="mr-2 text-base font-bold">{$t('print.payer')}:</span>{order.shopName}
			</p>
			{#if order.shopVAT}
				<p class="text-base">
					<span class="mr-2 text-base font-bold">{$t('print.vat')}:</span>{order.shopVAT}
				</p>
			{/if}
			<p class="text-base">
				<span class="mr-2 text-base font-bold">{$t('shop.table.row.code')}:</span>{order.shopCode}
			</p>

			<p class="text-base">
				<span class="mr-2 text-base font-bold">{$t('print.address')}:</span>{order.shopAddress}
			</p>
			<p class="text-base">
				<span class="mr-2 text-base font-bold">{$t('global.payment')}:</span>{translateData(
					order.notes
				)}
			</p>
			<div class="py-2">
				{#snippet renderCell({ colKey, row }: { colKey: keyof IOrderingItem; row: IOrderingItem })}
					{#if colKey === 'price'}
						{#if row.price !== row.originalPrice}
							<span class="font-bold text-red-600 underline">{formatPrice(row.price)}</span>
						{:else}
							<span>{formatPrice(row.originalPrice)}</span>
						{/if}
					{:else if colKey === 'measurement'}
						<span>{selectMeasurement(row.measurement)}</span>
					{:else}
						{row[colKey]}
					{/if}
				{/snippet}
				<TableData
					columns={itemCols}
					data={order.items}
					renderCell={renderCell as Snippet<[ctx: { colKey: string | number | symbol; row: any }]>}
				/>
			</div>
			<p class="text-base print:mt-2">
				<span class="mr-2 text-base font-bold">{$t('order.popup.total')}:</span>{formatPrice(
					order.totalAmount
				)}
			</p>
		</div>
	{/each}
</div>
