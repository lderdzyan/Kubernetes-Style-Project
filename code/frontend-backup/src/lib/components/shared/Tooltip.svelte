<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import type { Snippet } from 'svelte';
	import { Button } from '../ui/button';

	let {
		innerText,
		onClick,
		message,
		variant = 'default',
		size = 'icon',
		class: classname = ' ',
		disabled
	} = $props<{
		innerText: Snippet;
		onClick?: () => void;
		message: string;
		variant?: 'default' | 'outline' | 'ghost' | 'submit' | 'destructive';
		size?: 'icon' | 'sm' | 'lg';
		class?: string;
		disabled?: boolean;
	}>();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button class={classname} {variant} {size} {disabled} onclick={() => onClick()}>
				{@render innerText()}
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			<p>{message}</p>
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
