<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { CircleX } from 'lucide-svelte';
	import { Button } from '../ui/button';
	import { t } from 'svelte-i18n';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { cn } from '$lib/utils';

	let {
		open = $bindable(false),
		title,
		onDelete,
		trigger = 'icon',
		className = '',
		disabled = false
	} = $props<{
		open?: boolean;
		title?: string;
		onDelete: () => void;
		trigger?: 'icon' | 'button' | 'trash' | 'none';
		className?: string;
		disabled?: boolean;
	}>();

	let isDeleting = $state(false);
</script>

<Dialog.Root {open} onOpenChange={(isOpen) => (open = isOpen)}>
	{#if trigger === 'icon'}
		<Dialog.Trigger>
			<Tooltip.Provider>
				<Tooltip.Root>
					<Tooltip.Trigger
						><Button variant="destructive" size="sm" class={cn('hover:bg-red-900', className)}
							><CircleX /></Button
						></Tooltip.Trigger
					>
					<Tooltip.Content>
						<p>{$t('global.modal.deleteBtn')}</p>
					</Tooltip.Content>
				</Tooltip.Root>
			</Tooltip.Provider>
		</Dialog.Trigger>
	{:else if trigger === 'button'}
		<Button onclick={() => (open = true)} variant="destructive" size="default"
			>{$t('order.details.deleteBtn')}</Button
		>
	{:else if trigger === 'trash'}
		{#if disabled}
			<Button disabled size="icon" variant="outline" class="border border-[#FF5630]">
				<img src="/Trash.svg" alt="trash icon" />
			</Button>
		{:else}
			<Dialog.Trigger>
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger
							><Button
								onclick={() => (open = true)}
								size="icon"
								variant="outline"
								class="border border-[#FF5630] hover:bg-[#a0290e1a]"
							>
								<img src="/Trash.svg" alt="trash icon" />
							</Button></Tooltip.Trigger
						>
						<Tooltip.Content>
							<p>{$t('global.modal.deleteBtn')}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			</Dialog.Trigger>
		{/if}
	{/if}

	<Dialog.Content class="w-[90vw] max-w-[320px] sm:max-w-[400px]">
		<Dialog.Header>
			<Dialog.Title>{title}</Dialog.Title>
		</Dialog.Header>

		<Dialog.Footer class="mt-4 flex flex-col-reverse justify-end gap-3 sm:flex-row sm:gap-2">
			<Dialog.Close>
				<Button class="w-full sm:w-auto" size="sm" variant="outline"
					>{$t('global.modal.cancelBtn')}</Button
				>
			</Dialog.Close>
			<Button
				class="w-full sm:w-auto"
				size="sm"
				variant="destructive"
				disabled={isDeleting}
				onclick={async () => {
					isDeleting = true;
					await onDelete();
					isDeleting = false;
					open = false;
				}}
				>{#if isDeleting}
					{$t('global.modal.deleting')}
				{:else}
					{$t('global.modal.deleteBtn')}
				{/if}</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
