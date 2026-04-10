<script lang="ts">
	import { Minus, Plus } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import Input from '../ui/input/input.svelte';
	import { t } from 'svelte-i18n';

	let { quantity, onIncrease, onDecrease, measurement } = $props<{
		quantity: number;
		measurement?: string;
		onIncrease: () => void;
		onDecrease: () => void;
	}>();
</script>

<div class="flex items-center gap-3">
	<span class="font-bold whitespace-nowrap">{$t('order.popup.quantity')}:</span>

	<div class="relative flex items-center gap-2">
		<Button
			size="icon"
			variant="link"
			onclick={onDecrease}
			class="no-zoom absolute left-1"
			aria-label="Decrease quantity"
		>
			<Minus size={6} />
		</Button>

		<Input
			type="number"
			min="1"
			step="1"
			bind:value={quantity}
			class="h-8 w-30 pr-6 pl-6 text-center"
		/>

		<Button
			size="icon"
			variant="link"
			onclick={onIncrease}
			class="no-zoom absolute right-1"
			aria-label="Increase quantity"
		>
			<Plus size={6} />
		</Button>
	</div>
	{#if measurement}
		<span class="font-medium whitespace-nowrap">{measurement}</span>
	{/if}
</div>
