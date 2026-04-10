<script lang="ts">
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import { SearchIcon, X as XIcon } from 'lucide-svelte';
	import { t } from 'svelte-i18n';

	let {
		value = $bindable(''),
		class: className = '',
		delay = 400
	} = $props<{
		value?: string;
		class?: string;
		delay?: number;
	}>();

	let query = $state(value);
	let debounceTimer: number | undefined;

	$effect(() => {
		query;

		if (debounceTimer) clearTimeout(debounceTimer);
		debounceTimer = window.setTimeout(() => {
			value = query.trim();
		}, delay);

		return () => clearTimeout(debounceTimer);
	});

	const clearSearch = () => {
		value = '';
		query = '';
	};
</script>

<InputGroup.Root class="relative w-full sm:max-w-xs">
	<InputGroup.Input placeholder={$t('global.search.placeholder')} bind:value={query} />
	<InputGroup.Addon>
		<SearchIcon class="relative z-11" />
	</InputGroup.Addon>
	<InputGroup.Addon align="inline-end">
		<XIcon
			class="absolute top-1/2 right-3 z-50 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
			onclick={clearSearch}
		/>
	</InputGroup.Addon>
</InputGroup.Root>
