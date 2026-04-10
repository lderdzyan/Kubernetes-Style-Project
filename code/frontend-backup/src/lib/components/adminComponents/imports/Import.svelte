<script lang="ts">
	import { importCategory } from '$lib/api/category';
	import { importProd11, importProd12, importProd20, importProd22 } from '$lib/api/product';
	import { importShop } from '$lib/api/shops';
	import { importUsers } from '$lib/api/users';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { t } from 'svelte-i18n';

	let isLoading: boolean = $state(false);

	const handleImport11 = async () => {
		try {
			await importProd11();
		} catch (err) {
			console.error('Import req is not sent');
		}
	};
	const handleImport12 = async () => {
		try {
			await importProd12();
		} catch (err) {
			console.error('Import req is not sent');
		}
	};
	const handleImport20 = async () => {
		try {
			await importProd20();
		} catch (err) {
			console.error('Import req is not sent');
		}
	};
	const handleImport22 = async () => {
		try {
			await importProd22();
		} catch (err) {
			console.error('Import req is not sent');
		}
	};

	const handleShopImport = async () => {
		try {
			await importShop();
		} catch (err) {
			console.error('Import req is not sent');
		}
	};

	const handleUserImport = async () => {
		try {
			await importUsers();
		} catch (err) {
			console.error('Import req is not sent');
		}
	};

	const handleCategoryImport = async () => {
		try {
			await importCategory();
		} catch (err) {
			console.error('Import req is not sent');
		}
	};
</script>

<div class=" gap- 10 flex flex-col p-8 lg:ml-64">
	{#if isLoading}
		<Spinner />
	{:else}
		<h1 class="mb-8 text-center text-xl font-bold lg:text-left">{$t('import.title')}</h1>
		<div
			class="mb-6 flex w-full max-w-xl flex-col
	       items-center rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm"
		>
			<h2 class="mb-4 text-center text-lg font-medium text-gray-700">
				{$t('import.productTitle')}
			</h2>
			<div class="flex flex-wrap justify-center gap-4">
				<Button onclick={handleImport11}>11</Button>
				<Button onclick={handleImport12}>12</Button>
				<Button onclick={handleImport20}>20</Button>
				<Button onclick={handleImport22}>22</Button>
			</div>
		</div>

		<div
			class="mb-6 flex w-full max-w-xl flex-col
	       items-center rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm"
		>
			<h2 class="mb-4 text-lg font-medium text-gray-700">{$t('import.shopTitle')}</h2>
			<div>
				<Button variant="default" onclick={handleShopImport}>{$t('import.importBtn')}</Button>
			</div>
		</div>

		<div
			class="mb-6 flex w-full max-w-xl flex-col
	       items-center rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm"
		>
			<h2 class="mb-4 text-lg font-medium text-gray-700">{$t('import.userTitle')}</h2>
			<div>
				<Button variant="default" onclick={handleUserImport}>{$t('import.importBtn')}</Button>
			</div>
		</div>

		<div
			class="mb-6 flex w-full max-w-xl flex-col
	       items-center rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm"
		>
			<h2 class="mb-4 text-lg font-medium text-gray-700">{$t('import.categoryTitle')}</h2>
			<div>
				<Button variant="default" onclick={handleCategoryImport}>{$t('import.importBtn')}</Button>
			</div>
		</div>
	{/if}
</div>
