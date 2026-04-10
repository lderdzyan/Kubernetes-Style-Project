<script lang="ts">
	import { getAllUsers } from '$lib/api/users';
	import Select from '$lib/components/shared/Select.svelte';
	import { UserRole } from '$lib/types/user';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let managerList: { label: string; value: string }[] = $state([]);
	let errorMessage: string = $state('');
	let { value = $bindable('') } = $props<{ value?: string }>();

	onMount(async () => {
		try {
			const data = await getAllUsers();
			managerList = data
				.filter((user) => user.role === UserRole.MANAGER)
				.map((user) => ({
					label: user.name,
					value: user.id
				}));
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		}
	});
</script>

{#if errorMessage}
	<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
		<p class="text-md text-destructive-foreground font-medium text-neutral-50">
			{errorMessage}
		</p>
	</div>
{/if}
<Select bind:value placeholder={$t('order.filter')} options={managerList} showAllOption={true} />
