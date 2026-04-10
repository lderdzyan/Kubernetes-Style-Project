<script lang="ts">
	import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
	import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
	import * as Pagination from '$lib/components/ui/pagination/index.js';
	import { t } from 'svelte-i18n';

	let {
		count,
		perPage,
		siblingCount = 1,
		page = $bindable(1)
	} = $props<{
		count: number;
		perPage: number;
		siblingCount?: number;
		page: number;
	}>();
</script>

<div class="mt-8">
	<Pagination.Root {count} {perPage} {siblingCount} bind:page>
		{#snippet children({ pages, currentPage })}
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.PrevButton>
						<ChevronLeftIcon class="size-4" />
						<span class="hidden sm:block">{$t('global.previous')}</span>
					</Pagination.PrevButton>
				</Pagination.Item>

				{#each pages as page (page.key)}
					{#if page.type === 'ellipsis'}
						<Pagination.Item><Pagination.Ellipsis /></Pagination.Item>
					{:else}
						<Pagination.Item>
							<Pagination.Link {page} isActive={currentPage === page.value}>
								{page.value}
							</Pagination.Link>
						</Pagination.Item>
					{/if}
				{/each}

				<Pagination.Item>
					<Pagination.NextButton>
						<span class="hidden sm:block">{$t('global.next')}</span>
						<ChevronRightIcon class="size-4" />
					</Pagination.NextButton>
				</Pagination.Item>
			</Pagination.Content>
		{/snippet}
	</Pagination.Root>
</div>
