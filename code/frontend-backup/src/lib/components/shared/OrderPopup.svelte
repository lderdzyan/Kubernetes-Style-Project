<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { t } from 'svelte-i18n';
	import Button from '../ui/button/button.svelte';
	import { Minus, Plus } from 'lucide-svelte';
	import { formatPrice } from '$lib/utils/priceFormatter';
	import PriceDropdown from './PriceDropdown.svelte';

	let {
		open = $bindable(false),
		title,
		price,
		initialQuantity = 1,
		initialPrice,
		onConfirm,
		onCancel
	} = $props<{
		open: boolean;
		title: string;
		initialQuantity?: number;
		initialPrice?: number;
		price: number;
		onConfirm: (quantity: number, total: number, price: number) => void;
		onCancel: (quantity: number, total: number) => void;
	}>();

	let quantity: number = $state(initialQuantity);
	let currentPrice: number = $state(initialPrice ?? price);

	let total = $derived(currentPrice * quantity);

	const quantityUp = (selected: number) => {
		quantity = selected;
	};
</script>

<div class="no-zoom">
	<Dialog.Root
		{open}
		onOpenChange={(isOpen) => {
			open = isOpen;
		}}
	>
		<Dialog.Content class="w-80">
			<Dialog.Header>
				<Dialog.Title>{title}</Dialog.Title>
			</Dialog.Header>

			<div class="mt-2 grid gap-2">
				<div class="grid grid-cols-3 items-center gap-4">
					<Label>{$t('order.popup.quantity')}</Label>
					<div class="col-span-2 flex items-center">
						<div class="relative flex items-center">
							<Button
								size="icon"
								variant="link"
								onclick={() => (quantity = Math.max(1, quantity - 1))}
								class="no-zoom absolute "
							>
								<Minus size={4} />
							</Button>

							<Input
								type="number"
								min="1"
								step="1"
								bind:value={quantity}
								class="h-8 w-44 pr-14 pl-8 text-center"
							/>

							<Button
								size="icon"
								variant="link"
								onclick={() => (quantity = quantity + 1)}
								class="no-zoom absolute right-6 pr-6"
							>
								<Plus size={4} />
							</Button>
							<span class="absolute top-1/2 right-[30px] h-4 w-px -translate-y-1/2 bg-gray-300"
							></span>
							<PriceDropdown class="absolute left-35" onQuantityUp={quantityUp} />
						</div>
					</div>
				</div>

				<div class="grid grid-cols-3 items-center gap-4">
					<Label>{$t('order.popup.price')}</Label>
					<Input bind:value={currentPrice} min="1" step="10" class="col-span-2 h-8" />
				</div>
				<div class="grid grid-cols-3 items-center gap-4">
					<Label>{$t('order.popup.total')}</Label>
					<Input readonly value={formatPrice(total)} class="col-span-2 h-8" />
				</div>

				<div class="mt-3 grid grid-cols-2 items-center gap-4">
					<Button
						variant="outline"
						onclick={() => {
							onCancel(quantity, total);
							open = false;
						}}>{$t('global.modal.cancelBtn')}</Button
					>
					<Button
						variant="default"
						onclick={() => {
							onConfirm(quantity, total, currentPrice);
							open = false;
						}}>{$t('global.modal.confirmBtn')}</Button
					>
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Root>
</div>

<style>
	:global(.no-zoom input),
	:global(.no-zoom button) {
		font-size: 16px !important;
	}
</style>
