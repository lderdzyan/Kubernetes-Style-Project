<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';

	let { rows = 10 } = $props<{
		rows?: number;
	}>();
</script>

<div class="flex flex-col gap-6 p-6">
	<div class="flex items-center justify-between">
		<Skeleton class="h-6 w-48 rounded-md" />
		<Skeleton class="h-8 w-28 rounded-md" />
	</div>

	<div class="rounded-md border border-gray-200">
		{#each Array(rows) as _}
			<div class="flex items-center justify-between border-b px-4 py-3 last:border-b-0">
				<div class="flex gap-4">
					<Skeleton class="h-4 w-32 rounded-md" />
					<Skeleton class="h-4 w-24 rounded-md" />
					<Skeleton class="h-4 w-20 rounded-md" />
				</div>
				<div class="flex gap-2">
					<Skeleton class="h-8 w-8 rounded-md" />
					<Skeleton class="h-8 w-8 rounded-md" />
					<Skeleton class="h-5 w-10 rounded-full" />
				</div>
			</div>
		{/each}
	</div>
</div>
