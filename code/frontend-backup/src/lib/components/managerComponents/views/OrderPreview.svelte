<script lang="ts">
	import { goto } from '$app/navigation';
	import { createNewOrder } from '$lib/api/orders';
	import ListData from '$lib/components/list/ListData.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';
	import QuantityBtnsForMobile from '$lib/components/shared/QuantityBtnsForMobile.svelte';
	import QuantityButtons from '$lib/components/shared/QuantityButtons.svelte';
	import RadioButtons from '$lib/components/shared/RadioButtons.svelte';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import TableRowTools from '$lib/components/shared/TableRowTools.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import {
		createOrder,
		decreaseQuantity,
		increaseQuantity,
		resetOrder
	} from '$lib/stores/orders.svelte';
	import type { IOrderingItem } from '$lib/types/orders';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { selectMeasurement } from '$lib/utils/generateColTranslations';
	import { orderTableCols } from '$lib/utils/previewTableCols';
	import { formatPrice } from '$lib/utils/priceFormatter';
	import { type Snippet } from 'svelte';
	import { t } from 'svelte-i18n';

	let isLoading: boolean = $state(false);
	let errorMessage: string | null = $state(null);
	let paymentMethod: string = $state('cash');

	const submitOrder = async () => {
		if (!createOrder.items.length) return;
		isLoading = true;

		try {
			const payload = {
				shopId: createOrder.shopId,
				items: createOrder.items.map((item) => ({
					productId: item.productId,
					quantity: item.quantity,
					price: item.price
				})),
				notes: paymentMethod
			};
			await createNewOrder(payload);
			resetOrder();
			goto('/manager');
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	};

	const handleDelete = (id: string) => {
		createOrder.items = createOrder.items.filter((item) => item.productId !== id);
	};
</script>

<div class="flex w-full flex-col">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-md">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else if isLoading}
		<Spinner message={$t('global.modal.deleting')} />
	{:else}
		<div class="flex gap-4 pb-8 max-sm:px-4">
			<h1 class="text-xl font-bold max-sm:ml-0">{$t('order.previewTitle')}</h1>
		</div>
		<div
			class="fixed bottom-0 left-0 z-50 flex w-full
	       flex-col gap-4 border-t border-gray-200 bg-white px-4 py-4
	       md:static md:left-auto md:ml-auto md:w-auto
	       md:flex-row md:justify-end md:gap-4 md:self-end
	       md:border-0 md:bg-transparent md:p-0 md:pb-8"
		>
			<Button onclick={() => goto('/manager/add/categories')} variant="default" size="default"
				>{$t('import.categoryTitle')}</Button
			>
			<div class="flex justify-between gap-2">
				<Button variant="destructive" size="default" class="flex-1" onclick={() => goto('/manager')}
					>{$t('global.modal.cancelBtn')}</Button
				>
				<Button onclick={submitOrder} variant="submit" size="default" class="flex-1"
					>{$t('order.submitOrder')}</Button
				>
			</div>
		</div>

		{#snippet tools({ row }: { row: IOrderingItem })}
			<div class="hidden justify-end md:flex">
				<TableRowTools id={row.productId} onDelete={() => handleDelete(row.productId)} />
			</div>

			<div class="absolute top-1 right-1 z-10 md:hidden">
				<DropDown id={row.productId} onDelete={() => handleDelete(row.productId)} />
			</div>
		{/snippet}

		{#snippet renderCell({ colKey, row }: { colKey: keyof IOrderingItem; row: IOrderingItem })}
			{#if colKey === 'quantity'}
				<QuantityButtons
					quantity={row.quantity}
					onIncrease={() => increaseQuantity(row.productId)}
					onDecrease={() => decreaseQuantity(row.productId)}
				/>
			{:else}
				{row[colKey]}
			{/if}
		{/snippet}

		<TableData
			withQuantityMargin
			columns={orderTableCols}
			data={createOrder.items}
			renderTools={tools}
			renderCell={renderCell as Snippet<[ctx: { colKey: string | number | symbol; row: any }]>}
		/>
		{#snippet orderItem({ row, index }: { row: IOrderingItem; index: number })}
			<div class="relative flex flex-col justify-between gap-2">
				<p class=" pr-8 font-bold whitespace-normal">{row.productName}</p>
				<QuantityBtnsForMobile
					quantity={row.quantity}
					onIncrease={() => increaseQuantity(row.productId)}
					onDecrease={() => decreaseQuantity(row.productId)}
					measurement={selectMeasurement(row.measurement || undefined).toLowerCase()}
				/>

				<p>
					<span class="font-bold">{$t('order.popup.price')}:</span>
					{formatPrice(row.price ?? 0)}
				</p>
				<p>
					<span class="font-bold">{$t('order.popup.total')}:</span>
					{formatPrice(row.total ?? 0)}
				</p>

				{@render tools({ row })}
			</div>
		{/snippet}

		<ListData
			data={createOrder.items}
			renderItem={orderItem}
			renderCell={renderCell as Snippet<[ctx: { colKey: string | number | symbol; row: any }]>}
		/>
	{/if}

	<div class="flex py-4 max-md:justify-center max-md:mb-24">
		<RadioButtons bind:value={paymentMethod} />
	</div>
</div>
