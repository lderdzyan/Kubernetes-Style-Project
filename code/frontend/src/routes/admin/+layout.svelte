<script lang="ts">
	import Sheet from '$lib/components/sheet/Sheet.svelte';
	import { UserRole } from '$lib/types/user';
	import { verifyUserSession } from '$lib/utils/userSessionVerification';
	import { onMount } from 'svelte';

	let { children } = $props();

	let ready = $state(false);
	let navigating = $state(false);

	onMount(async () => {
		if (!ready) {
			const verifiedUser = await verifyUserSession(UserRole.ADMIN);
			if (verifiedUser) ready = true;
		}
	});
</script>

{#if ready}
	<div
		class="flex min-h-screen flex-col lg:z-10 lg:flex-row opacity-{navigating
			? 50
			: 100} transition-opacity duration-200"
	>
		<div class="print:hidden">
			<Sheet />
		</div>
		<main class="w-full max-sm:px-4">{@render children?.()}</main>
	</div>
{/if}
