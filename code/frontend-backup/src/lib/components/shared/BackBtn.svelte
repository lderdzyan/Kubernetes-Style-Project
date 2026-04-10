<script lang="ts">
	import { ArrowLeft } from 'lucide-svelte';
	import { t } from 'svelte-i18n';
	import Tooltip from '$lib/components/shared/Tooltip.svelte';

	let { onRedirect } = $props<{ onRedirect: () => void }>();
</script>

{#snippet innerText()}
	<ArrowLeft />
{/snippet}
<Tooltip
	{innerText}
	message={$t('global.redirectBtn')}
	onClick={onRedirect}
	size="sm"
	variant="outline"
	class="border border-gray-800"
/>
