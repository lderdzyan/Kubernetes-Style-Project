<script lang="ts">
	import '../app.css';
	import { locale } from 'svelte-i18n';
	import { setupI18n } from '$lib/i18n';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import { Toaster } from '$lib/components/ui/sonner';

	let { children, data } = $props();

	setupI18n(data.lang);
	$locale = data.lang;
	$locale = data?.lang ?? 'hy';

	const ready = $derived(!!$locale);
</script>

<Toaster
	position="top-center"
	richColors
	theme="light"
	toastOptions={{
		style: 'border-radius: 10px;'
	}}
/>

{#if ready}
	{@render children?.()}
{:else}
	<div class="p-6 text-center text-gray-500">
		<Spinner />
	</div>
{/if}
