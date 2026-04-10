<script lang="ts">
	import ProductAddEdit from '$lib/components/adminComponents/products/ProductAddEdit.svelte';

	let { data } = $props();
	let { id } = data;
</script>

<ProductAddEdit {id} />
