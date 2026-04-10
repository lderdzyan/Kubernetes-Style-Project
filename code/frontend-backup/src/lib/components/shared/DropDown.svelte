<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { ArrowRight, CircleX, EllipsisVertical, Pencil } from 'lucide-svelte';
	import { t } from 'svelte-i18n';
	import DeleteModal from '../dialog/DeleteModal.svelte';
	import Switch from '../ui/switch/switch.svelte';

	let {
		id,
		status,
		onEdit,
		onDelete,
		onToggleStatus,
		open = $bindable(false),
		onAssign
	} = $props<{
		id?: string;
		status?: boolean;
		open?: boolean;
		onEdit?: (id: string) => void;
		onDelete?: (id: string) => void;
		onToggleStatus?: (id: string, newStatus: boolean) => Promise<void> | void;
		onAssign?: (id: string) => void;
	}>();

	let currentStatus: boolean = $state(status);
	let openModal: boolean = $state(false);
	let selectedId: string | null = $state(null);

	$effect(() => {
		if (status !== undefined && currentStatus !== status) {
			currentStatus = status;
			onToggleStatus?.(id, currentStatus);
		}
	});
</script>

<DropdownMenu.Root {open} onOpenChange={(isOpen) => (open = isOpen)}>
	<DropdownMenu.Trigger class=" relative text-gray-500 hover:text-gray-700"
		><EllipsisVertical class="z-30 h-5 w-5" /></DropdownMenu.Trigger
	>
	<DropdownMenu.Content align="end" class="gap-2.5 p-2">
		<DropdownMenu.Group>
			{#if onEdit}
				<DropdownMenu.Item onclick={() => onEdit(id)}
					><Pencil class="text-[#020618]" /><span class="text-sm font-normal text-[#020618]"
						>{$t('global.editIcon')}</span
					></DropdownMenu.Item
				>
			{/if}

			{#if onDelete}
				<DropdownMenu.Item
					onclick={() => {
						selectedId = id;
						openModal = true;
					}}
					><CircleX class="text-[#FF5630]" />
					<span class="text-sm font-normal text-[#FF5630]">{$t('global.deleteIcon')}</span
					></DropdownMenu.Item
				>
			{/if}
			{#if status !== undefined}
				<DropdownMenu.Item
					><Switch bind:checked={currentStatus} /><span>{$t('global.statusChange')}</span
					></DropdownMenu.Item
				>
			{/if}

			{#if onAssign}
				<DropdownMenu.Item onclick={() => onAssign(id)}>
					<ArrowRight class="text-[#22C55E]" />
					<span class="text-[#22C55E]">{$t('shop.table.assign')}</span>
				</DropdownMenu.Item>
			{/if}
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>

<DeleteModal
	bind:open={openModal}
	trigger="none"
	title={$t('global.modal.deleteTxt')}
	onDelete={async () => {
		await onDelete?.(selectedId);
		openModal = false;
	}}
/>
