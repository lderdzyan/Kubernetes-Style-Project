import type { PageLoad } from '../../../users/edit/[id]/$types';

export const load: PageLoad = async ({ params }) => {
	const { id } = params;
	return { id };
};
