<script lang="ts">
	import { Label } from '$lib/components/ui/label/index.js';
	import * as RadioGroup from '$lib/components/ui/radio-group/index.js';
	import { t } from 'svelte-i18n';

	let { value = $bindable('cash') } = $props<{ value: string }>();
</script>

<RadioGroup.Root bind:value>
	<div class="flex gap-10 p-4">
		<div
			class={`flex cursor-pointer items-center space-x-2 rounded-md px-4 py-2 transition
				${value === 'cash' ? 'bg-gray-200' : 'bg-transparent'}`}
		>
			<RadioGroup.Item
				onclick={() => console.log(value)}
				value="cash"
				id="cash"
				class="cursor-pointer border-2 border-gray-600 data-[state=checked]:border-gray-800"
			/>
			<Label for="cash">{$t('global.cash')}</Label>
		</div>
		<div
			class={`flex cursor-pointer items-center space-x-2 rounded-md px-4 py-2 transition
				${value === 'cashless' ? 'bg-gray-200' : 'bg-transparent'}`}
		>
			<RadioGroup.Item
				onclick={() => console.log(value)}
				value="cashless"
				id="cashless"
				class="cursor-pointer border-2 border-gray-600 data-[state=checked]:border-gray-800"
			/>
			<Label for="cashless">{$t('global.cashless')}</Label>
		</div>
	</div>
</RadioGroup.Root>
