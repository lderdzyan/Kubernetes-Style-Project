<script lang="ts">
	import { goto } from '$app/navigation';
	import { setLanguage } from '$lib/utils/setLanguage';
	import { t } from 'svelte-i18n';

	const redirectToSignin = () => {
		goto('/sign-in');
	};
</script>

<div class="flex items-center justify-between p-4">
	<div class="flex gap-4 p-4">
		<button onclick={() => setLanguage('en')}>EN</button>
		<button onclick={() => setLanguage('hy')}>ՀՅ</button>
	</div>
	<button
		onclick={redirectToSignin}
		class="cursor-pointer rounded-full border border-gray-200 px-5 py-2 hover:bg-gray-200"
		>{$t('home.btn')}</button
	>
</div>
