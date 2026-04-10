<script lang="ts">
	import { getCategoryList } from '$lib/api/category';
	import Select from '$lib/components/shared/Select.svelte';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';

	let categories: { label: string; value: string }[] = $state([]);
	let errorMessage: string | null = $state(null);
	let { value = $bindable('') } = $props<{
		value?: string;
	}>();

	onMount(async () => {
		try {
			const categoryList = await getCategoryList();
			categories = [...categoryList].map((category) => ({
				label: category.name,
				value: category.id
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

<Select
	bind:value
	placeholder={$t('category.form.label')}
	options={categories}
	showAllOption={true}
/>
