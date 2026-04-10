<script lang="ts">
	let { size = 'md', message = 'Էջը բեռնվում է․․․' } = $props<{
		size?: 'sm' | 'md' | 'lg';
		message?: string;
	}>();

	const _size = size as 'sm' | 'md' | 'lg';

	const sizeClasses: Record<'sm' | 'md' | 'lg', string> = {
		sm: 'h-6 w-6',
		md: 'h-10 w-10',
		lg: 'h-14 w-14'
	};
</script>

<div class="flex flex-col items-center justify-center gap-4 p-6 text-gray-600">
	<div class={`relative ${sizeClasses[_size]} rounded-full`} role="status" aria-label="loading">
		<div class="absolute inset-0 rounded-full border-4 border-gray-200"></div>

		<div
			class="absolute inset-0 animate-spin rounded-full border-4 border-t-gray-700 border-r-gray-400 border-b-transparent border-l-transparent"
		></div>
	</div>

	<p class="text-sm font-medium text-gray-500">{message}</p>
</div>
