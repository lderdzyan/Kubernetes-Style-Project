<script lang="ts">
	import CategoryAddEdit from '$lib/components/adminComponents/categories/CategoryAddEdit.svelte';

	let { data } = $props();
	let { id } = data;
</script>

<CategoryAddEdit {id} />
