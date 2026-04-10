<script lang="ts">
	import * as Select from '$lib/components/ui/select/index.js';
	import { t } from 'svelte-i18n';

	let {
		value = $bindable(''),
		options = [] as { label: string; value: string }[],
		placeholder,
		showAllOption = false,
		class: className = '',
	} = $props<{
		value?: string;
		options?: { label: string; value: string }[];
		placeholder?: string;
		showAllOption?: boolean;
		class?: string;
	}>();
</script>

<div class={className}>
	<Select.Root type="single" bind:value>
		<Select.Trigger
			>{options.find((option: { label: string; value: string }) => option.value === value)?.label ||
				placeholder}</Select.Trigger
		>
		<Select.Content align="start">
			{#if showAllOption}
				<Select.Item value="">{$t('category.form.categoryAll')}</Select.Item>
			{/if}
			{#each options as option}
				<Select.Item value={option.value}>{option.label}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
