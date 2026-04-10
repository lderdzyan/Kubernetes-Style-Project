<script lang="ts">
	import { goto } from '$app/navigation';
	import { deleteCategory } from '$lib/api/category';
	import ListData from '$lib/components/list/ListData.svelte';
	import DropDown from '$lib/components/shared/DropDown.svelte';
	import TableRowTools from '$lib/components/shared/TableRowTools.svelte';
	import TableData from '$lib/components/table/TableData.svelte';
	import { type ICategory } from '$lib/types/categories';
	import { categoryColumns } from '$lib/utils/categoryTableCols';

	let { categories } = $props<{ categories: ICategory[] }>();

	const redirectToEdit = (id: string) => goto(`/admin/categories/edit/${id}`);

	const handleDelete = (id: string) => {
		deleteCategory(id);
		categories = categories.filter((category: ICategory) => category.id !== id);
	};
</script>

<div>
	{#snippet tools({ row }: { row: ICategory })}
		<div class="hidden justify-end sm:flex">
			<TableRowTools id={row.id} onEdit={redirectToEdit} onDelete={handleDelete} />
		</div>

		<div class="absolute top-1 right-1 z-10 sm:hidden">
			<DropDown id={row.id} onEdit={redirectToEdit} onDelete={handleDelete} />
		</div>
	{/snippet}

	<TableData columns={categoryColumns} data={categories} renderTools={tools} />
	{#snippet orderItem({ row, index }: { row: ICategory; index: number })}
		<div class="relative flex flex-col justify-between gap-2">
			<p class="text-md pr-8 font-bold whitespace-normal">{row.name}</p>
			{@render tools({ row })}
		</div>
	{/snippet}
	<ListData data={categories} renderItem={orderItem} />
</div>
