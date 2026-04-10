<script lang="ts">
	import OrderDetails from '$lib/components/managerComponents/orders/OrderDetails.svelte';

	let { data } = $props();
	let { id } = data;
</script>

<OrderDetails {id} />
