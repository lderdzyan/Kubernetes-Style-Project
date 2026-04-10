<script lang="ts">
	import { Minus, Plus } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import { t } from 'svelte-i18n';

	let {
		quantity,
		onIncrease,
		onDecrease,
		size = 'md',
		showLabel = false
	} = $props<{
		quantity: number;
		onIncrease: () => void;
		onDecrease: () => void;
		size?: 'sm' | 'md';
		showLabel?: boolean;
	}>();

	const iconSize = size === 'sm' ? 10 : 12;
	const textClass = size === 'sm' ? 'text-xs' : 'text-sm';
	const gapClass = size === 'sm' ? 'gap-1' : 'gap-2';
</script>

<div class={`flex items-center ${gapClass}`}>
	{#if showLabel}
		<p class="mr-1 font-bold">{$t('order.popup.quantity')}:</p>
	{/if}

	<Button
		onclick={onDecrease}
		type="button"
		variant="ghost"
		size="icon"
		aria-label="Decrease quantity"
		class="print:hidden"
	>
		<Minus size={iconSize} />
	</Button>

	<span class={`${textClass} text-lg font-medium`}>{quantity}</span>

	<Button
		onclick={onIncrease}
		type="button"
		variant="ghost"
		size="icon"
		aria-label="Increase quantity"
		class="print:hidden"
	>
		<Plus size={iconSize} />
	</Button>
</div>
