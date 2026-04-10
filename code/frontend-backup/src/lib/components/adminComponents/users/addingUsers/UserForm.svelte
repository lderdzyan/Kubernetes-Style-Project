<script lang="ts">
	import Input from '$lib/components/ui/input/input.svelte';
	import type { UserFormValues } from '$lib/types/userFormValues';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import { UserRole } from '$lib/types/user';
	import { t } from 'svelte-i18n';
	import Select from '$lib/components/shared/Select.svelte';

	let {
		values = $bindable<UserFormValues>(),
		showPassword = false,
		errors = {}
	} = $props<{
		values: UserFormValues;
		showPassword?: boolean;
		errors?: Partial<Record<keyof UserFormValues, string>>;
	}>();
</script>

<div class="flex w-full flex-col gap-6 pb-8">
	<div class="flex w-full flex-col gap-4">
		<Label for="name">{$t('user.form.label.name')}</Label>
		<Input
			id="name"
			placeholder={$t('user.form.namePlaceholder')}
			bind:value={values.name}
			class="flex-1"
		/>
		{#if errors.name}
			<p class="text-sm text-red-500">{errors.name}</p>
		{/if}
	</div>

	<div class="flex w-full flex-col gap-4">
		<Label for="username">{$t('user.form.label.username')}</Label>
		<Input
			id="username"
			placeholder={$t('user.form.usernamePlaceholder')}
			bind:value={values.username}
			class="flex-1"
		/>
		{#if errors.username}
			<p class="text-sm text-red-500">{errors.username}</p>
		{/if}
	</div>
	{#if showPassword}
		<div class="flex w-full flex-col gap-4">
			<Label for="password">{$t('user.form.label.password')}</Label>
			<Input
				id="password"
				type="password"
				placeholder={$t('user.form.userPassPlaceholder')}
				bind:value={values.password}
				class="flex-1"
			/>
			{#if errors.password}
				<p class="text-sm text-red-500">{errors.password}</p>
			{/if}
		</div>
	{/if}

	<div class="flex items-center space-x-2">
		<Label class="mr-8">{$t('shop.form.label.status')}</Label>
		<Switch id="status" bind:checked={values.status} />
		<Label for="status" class={values.status ? 'text-gray-900' : 'text-gray-500'}
			>{values.status ? $t('global.switcher.on') : $t('global.switcher.off')}</Label
		>

		{#if errors.status}
			<p class="text-sm text-red-500">{errors.status}</p>
		{/if}
	</div>

	<div class="flex items-center gap-8">
		<Select
			bind:value={values.role}
			placeholder={$t('user.form.rolePlaceholder')}
			options={[
				{ value: UserRole.ADMIN, label: $t('user.form.role.admin') },
				{ value: UserRole.MANAGER, label: $t('user.form.role.manager') }
			]}
		/>
		{#if errors.role}
			<p class="text-sm text-red-500">{errors.role}</p>
		{/if}
	</div>
</div>
