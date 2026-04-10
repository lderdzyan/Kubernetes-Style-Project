<script lang="ts">
	import ShopForm from '$lib/components/adminComponents/shops/ShopForm.svelte';

	let { data } = $props();
	let { id } = data;
</script>

<ShopForm {id} />
