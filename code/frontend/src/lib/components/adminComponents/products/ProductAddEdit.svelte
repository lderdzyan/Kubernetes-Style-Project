<script lang="ts">
	import { goto } from '$app/navigation';
	import { getCategoryList } from '$lib/api/category';
	import { createNewProduct, editProduct, getProductById } from '$lib/api/product';
	import BackBtn from '$lib/components/shared/BackBtn.svelte';
	import Select from '$lib/components/shared/Select.svelte';
	import Spinner from '$lib/components/shared/Spinner.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import type { ICategory } from '$lib/types/categories';
	import { ProductMeasurement, type ProductFormValues } from '$lib/types/product';
	import { getErrorMessage } from '$lib/utils/errorHandlers/handleError';
	import { productSchema } from '$lib/utils/zodValidation';
	import { onMount } from 'svelte';
	import { t } from 'svelte-i18n';
	import { page } from '$app/state';

	let { id } = $props<{ id?: string }>();
	let toEdit = $derived(Boolean(id));
	let isLoading: boolean = $state(false);
	let categories: ICategory[] = $state([]);

	$effect(() => {
		const selectedCategory = page.url.searchParams.get('categoryId');
		if (selectedCategory && !toEdit) {
			productForm.categoryId = selectedCategory;
		}
	});

	const measurements = $derived(
		Object.values(ProductMeasurement).map((measurement) => ({
			value: measurement,
			label: $t(`product.measurement.${measurement}`)
		}))
	);

	let productForm: ProductFormValues = $state({
		name: '',
		code: '',
		measurement: '',
		categoryId: '',
		price: undefined
	});

	let errors = $state<Partial<Record<keyof ProductFormValues | 'global', string>>>({});

	onMount(async () => {
		isLoading = true;

		try {
			const categoryList = await getCategoryList();
			categories = [...categoryList];
			if (id) {
				const product = await getProductById(id);
				productForm = { ...product };
			}
		} catch (err) {
			errors.global = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	});

	const handleSave = async (e: Event) => {
		e.preventDefault();
		errors = {};
		let resultData = productForm;
		if (!toEdit) {
			const result = productSchema.safeParse(productForm);

			if (!result.success) {
				errors = Object.fromEntries(
					result.error.issues.map((issue) => [issue.path[0], $t(issue.message)])
				);
				return;
			}
			resultData = result.data;
		}

		isLoading = true;
		try {
			if (toEdit && id) {
				await editProduct(resultData, id);
			} else { 
				await createNewProduct(resultData);
			}
			goto(`/admin/products/by-category/${productForm.categoryId}`);
		} catch (err) {
			errors.global = getErrorMessage(err, $t);
		} finally {
			isLoading = false;
		}
	};
</script>

<div class="max-md:px-0 lg:ml-64">
	{#if errors.global}
		<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm">
			<p class="text-md text-destructive-foreground font-medium text-neutral-50">
				{errors.global}
			</p>
		</div>
	{:else if isLoading}
		<Spinner />
	{:else}
		<div class="flex w-full flex-col gap-6 px-4 py-8 max-md:px-0">
			<div class="flex gap-4">
				<BackBtn onRedirect={() => goto(`/admin/products/by-category/${productForm.categoryId}`)} />
				<h2 class="text-left text-xl font-bold">
					{toEdit ? $t('product.form.editTitle') : $t('product.form.addTitle')}
				</h2>
			</div>
			<div class="flex w-full flex-col gap-4">
				<Label for="name">{$t('product.form.label.name')}</Label>
				<Input
					id="name"
					bind:value={productForm.name}
					placeholder={$t('product.form.namePH')}
					class="col-span-3"
				/>

				{#if errors.name}
					<p class="text-sm text-red-500">{errors.name}</p>
				{/if}
			</div>
			<div class="flex w-full flex-col gap-4">
				<Label for="code">{$t('product.form.label.code')}</Label>
				<Input
					id="code"
					type="text"
					bind:value={productForm.code}
					placeholder={$t('product.form.codePH')}
					class="col-span-3 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
				/>
				{#if errors.code}
					<p class="text-sm text-red-500">{errors.code}</p>
				{/if}
			</div>
			<div class="flex flex-col gap-2">
				<Label for="measurement">{$t('product.form.label.measurement')}</Label>
				<Select
					bind:value={productForm.measurement}
					placeholder={$t('product.form.measureMentPH')}
					options={measurements}
				/>

				{#if errors.measurement}
					<p class="text-sm text-red-500">{errors.measurement}</p>
				{/if}
			</div>

			<div class="flex flex-col gap-2">
				<Label for="category">{$t('product.form.label.category')}</Label>

				<Select
					bind:value={productForm.categoryId}
					placeholder={$t('product.form.categoryPH')}
					options={categories.map((c) => ({ label: c.name, value: c.id }))}
					
				/>

				{#if errors.categoryId}
					<p class="text-sm text-red-500">{errors.categoryId}</p>
				{/if}
			</div>

			<div class="flex flex-col gap-2">
				<Label for="price">{$t('product.form.label.price')}</Label>

				<Input
					id="code"
					type="number"
					bind:value={productForm.price}
					placeholder={$t('product.form.pricePH')}
					class="col-span-3 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
				/>
				{#if errors.price}
					<p class="text-sm text-red-500">{errors.price}</p>
				{/if}
			</div>

			<div class="flex justify-end gap-8 p-2">
				<Button onclick={handleSave} variant="submit" type="submit" class="p-4">
					{toEdit ? $t('global.editBtn') : $t('global.addBtn')}</Button
				>
			</div>
		</div>
	{/if}
</div>
