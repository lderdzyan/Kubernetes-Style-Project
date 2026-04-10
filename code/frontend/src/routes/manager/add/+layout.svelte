<script lang="ts">
	import { page } from '$app/state';
	import { checkFlow } from '$lib/utils/guardOrderFlow';
	import { onMount } from 'svelte';
	import { Toaster } from '$lib/components/ui/sonner/index.js';

	let { children } = $props();
	let pathname = $derived(page.url.pathname);

	onMount(() => {
		checkFlow(pathname);
	});
</script>

<Toaster />

{@render children?.()}
