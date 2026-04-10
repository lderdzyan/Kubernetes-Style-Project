<script lang="ts">
	import { Pencil } from 'lucide-svelte';
	import { Button } from '../ui/button';
	import DeleteModal from '../dialog/DeleteModal.svelte';
	import Switch from '../ui/switch/switch.svelte';
	import { t } from 'svelte-i18n';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	let { id, status, onEdit, onDelete, onToggleStatus } = $props<{
		id?: string;
		status?: boolean;
		onEdit?: (id: string) => void;
		onDelete?: (id: string) => void;
		onToggleStatus?: (id: string, newStatus: boolean) => Promise<void> | void;
	}>();
	let currentStatus: boolean = $state(status);

	$effect(() => {
		if (status !== undefined && currentStatus !== status) {
			currentStatus = status;
			onToggleStatus?.(id, currentStatus);
		}
	});
</script>

<div class="flex items-center justify-end gap-2">
	{#if onEdit}
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Button
						onclick={() => onEdit(id)}
						size="sm"
						variant="default"
						class="bg-[#FFAB00] hover:bg-[#E69900]"><Pencil /></Button
					></Tooltip.Trigger
				>
				<Tooltip.Content>
					<p>{$t('global.editIcon')}</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	{/if}

	{#if onDelete}
		<DeleteModal title={$t('global.modal.deleteTxt')} onDelete={() => onDelete(id)} />
	{/if}
	{#if status !== undefined}
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger><Switch bind:checked={currentStatus} /></Tooltip.Trigger>
				<Tooltip.Content>
					<p>{$t('global.statusChange')}</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	{/if}
</div>
