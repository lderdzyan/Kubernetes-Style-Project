<script lang="ts">
	import OrderDetail from '$lib/components/adminComponents/orders/OrderDetail.svelte';

	let { data } = $props<{ data: { id: string } }>();
	let { id } = data;
</script>

<OrderDetail {id} />
