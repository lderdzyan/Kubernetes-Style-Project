<script lang="ts">
	import { UserRole } from '$lib/types/user';
	import { verifyUserSession } from '$lib/utils/userSessionVerification';
	import { onMount } from 'svelte';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import Header from '$lib/components/managerComponents/Header.svelte';

	let { children } = $props();

	let ready = $state(false);
	let navigating = $state(false);

	beforeNavigate(() => (navigating = true));
	afterNavigate(() => (navigating = false));

	onMount(async () => {
		const verifiedUser = await verifyUserSession(UserRole.MANAGER);
		if (verifiedUser) ready = true;
	});
</script>

{#if ready}
	<div class="sticky top-0 z-50 bg-neutral-50">
		<Header />
	</div>
	<div
		class="flex min-h-screen flex-col lg:flex-row opacity-{navigating
			? 50
			: 100} transition-opacity duration-200"
	>
		<main class="flex-1 p-8 max-md:px-0">{@render children?.()}</main>
	</div>
{/if}
