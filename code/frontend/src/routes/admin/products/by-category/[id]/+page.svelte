<script lang="ts">
	import ProductList from '$lib/components/adminComponents/products/ProductList.svelte';

	let { data } = $props();
	let { id } = data;
</script>

<ProductList {id} />
