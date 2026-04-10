<script lang="ts">
	import { getUserById } from '$lib/api/users';
	import { auth, logOut } from '$lib/stores/users.svelte';
	import type { IUser } from '$lib/types/user';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import { LogOut } from 'lucide-svelte';

	let user: IUser | null = $state(null);
	let errorMessage: string = $state('');
	let loading: boolean = $state(false);

	onMount(async () => {
		if (!auth.user?.id) return;
		loading = true;

		try {
			user = await getUserById(auth.user.id);
		} catch (err) {
			errorMessage = getErrorMessage(err, $t);
		} finally {
			loading = false;
		}
	});
</script>

<header class="flex w-full justify-between gap-4 border p-2 max-sm:px-0">
	{#if errorMessage}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errorMessage}
			</p>
		</div>
	{:else}
		<div class="flex items-center px-4">
			<img src="/Frame.svg" alt="MayerPlast logo" />
		</div>
		<div class="flex gap-4 p-4 max-sm:gap-2">
			{#if user}
				<p class="hidden text-[16px] font-semibold text-gray-800 max-sm:text-[14px] sm:block">
					{user.name}
				</p>
			{/if}

			<LogOut
				class="h-6 w-6 cursor-pointer text-gray-700 hover:text-gray-900 max-sm:h-5 max-sm:w-5"
				onclick={() => logOut()}
			/>
		</div>
	{/if}
</header>
