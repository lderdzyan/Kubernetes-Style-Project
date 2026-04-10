<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import ChevronUp from '@lucide/svelte/icons/chevron-up';
	import { ChevronDown } from 'lucide-svelte';
	import { Button } from '../ui/button';

	let {
		value = $bindable(''),
		options = [10, 20, 30, 40, 50, 100],
		onQuantityUp,
		class: className = ''
	} = $props<{
		value?: string;
		options?: number[];
		onQuantityUp: (quantity: number) => void;
		class?: string;
	}>();

	let open: boolean = $state(false);
</script>

<div class={className}>
	<Select.Root type="single" bind:open onOpenChange={(isOpen) => (open = isOpen)} bind:value>
		<Select.Trigger
			size="sm"
			class="flex  cursor-pointer items-center justify-center rounded-md border-0 
		   bg-transparent hover:bg-transparent focus-visible:ring-0 [&>svg:not(.keep)]:hidden"
		>
			{#if open}
				<ChevronUp class="keep h-4 w-4 text-gray-700" />
			{:else}
				<ChevronDown class="keep h-4 w-4 text-gray-700" />
			{/if}
		</Select.Trigger>

		<Select.Content
			align="end"
			sideOffset={-4}
			class="z-50 w-auto! max-w-fit! min-w-0! rounded-md border bg-white p-1 shadow-md
					   data-[state=closed]:animate-out data-[state=closed]:fade-out-0
					   data-[state=open]:animate-in data-[state=open]:fade-in-0"
		>
			<div class="flex flex-col gap-2">
				{#each options as option}
					<Select.Item
						value={option.toString()}
						class="m-0 p-0 data-radix-select-item-indicator:hidden "
					>
						<Button
							onclick={() => onQuantityUp(option)}
							size="sm"
							variant="outline"
							class="text-md h-7 min-w-10 justify-center rounded-sm border px-1 shadow-none hover:bg-primary hover:text-white focus-visible:ring-0"
						>
							{option}
						</Button>
					</Select.Item>
				{/each}
			</div>
		</Select.Content>
	</Select.Root>
</div>

<style>
	:global([data-slot='select-item'] > span.absolute) {
		display: none !important;
	}
</style>
