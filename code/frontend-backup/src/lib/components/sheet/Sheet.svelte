<script lang="ts">
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { navLinks } from '$lib/utils/navLinksFromAdminpage';
	import { page } from '$app/state';
	import { Menu } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import { logOut } from '$lib/stores/users.svelte';
	import { t } from 'svelte-i18n';

	let showImport = $derived(page.url.searchParams.get('import') === 'true');

	let filteredNavLinks = $derived(
		showImport ? navLinks : navLinks.filter((link) => link.path !== '/admin/import')
	);

	let open: boolean = $state(false);
	let pathname = $derived(page.url.pathname);

	const isActive = (linkPath: string) => {
		if (linkPath === '/admin') {
			return pathname === '/admin' || pathname.startsWith('/admin/order-edit/');
		}

		if (pathname === linkPath) return true;
		if (pathname.startsWith(linkPath + '/')) return true;

		return false;
	};
</script>

<div class="flex items-center border-b px-4 py-2 lg:hidden print:hidden">
	<button onclick={() => (open = true)} class="mr-2 p-2">
		<Menu class="h-6 w-6 cursor-pointer" />
	</button>

	<div class="mx-auto flex items-center justify-center gap-2 p-2">
		<img src="/Frame.svg" alt="MayerPlast logo" />
	</div>
</div>
<Sheet.Root {open} onOpenChange={(isOpen) => (open = isOpen)}>
	<Sheet.Content
		side="left"
		class="flex h-full w-64 flex-col border-r bg-white p-2 shadow-lg 
           data-[state=closed]:animate-out data-[state=open]:animate-in"
	>
		<h2 class="mx-2 text-left text-xl font-semibold">{$t('sheet.sheetTitle')}</h2>
		<hr class="my-4 border-gray-300" />

		<nav class="flex flex-col space-y-4">
			{#each filteredNavLinks as navLink}
				<Sheet.Close>
					<a
						href={navLink.path}
						class={'block w-full rounded px-3 py-2 ' +
							(isActive(navLink.path)
								? 'bg-[#5599EB]/20 text-left font-medium text-[#014598]'
								: 'cursor-pointer text-left  hover:bg-gray-100')}
					>
						{$t(navLink.key)}
					</a>
				</Sheet.Close>
			{/each}
		</nav>
		<Sheet.Footer>
			<Button onclick={logOut} variant="outline">{$t('sheet.logoutBtn')}</Button>
		</Sheet.Footer>
	</Sheet.Content>
</Sheet.Root>
<aside
	class="hidden bg-gray-100 lg:fixed lg:top-0 lg:left-0 lg:flex lg:h-screen lg:w-64 lg:flex-col lg:border-r lg:p-4"
>
	<div class="flex items-center gap-2 p-2">
		<img src="/Frame.svg" alt="MayerPlast logo" />
	</div>

	<hr class="border-gray-400 shadow-sm" />

	<nav class="mt-6 flex flex-col space-y-4">
		{#each filteredNavLinks as navLink}
			<a
				href={navLink.path}
				class={'rounded px-3 py-2 ' +
					(isActive(navLink.path)
						? 'bg-[#5599EB]/20 text-left font-semibold text-[#014598]'
						: 'cursor-pointer hover:bg-gray-100')}
			>
				{$t(navLink.key)}
			</a>
		{/each}
	</nav>
	<footer class="mt-auto border-t p-2">
		<Button onclick={logOut} variant="outline">{$t('sheet.logoutBtn')}</Button>
	</footer>
</aside>
