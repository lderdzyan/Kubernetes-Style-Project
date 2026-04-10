import { addMessages, init } from 'svelte-i18n';
import hy from '$lib/locales/hy.json';
import en from '$lib/locales/en.json';

export function setupI18n(lang: string) {
	addMessages('hy', hy);
	addMessages('en', en);

	init({
		fallbackLocale: 'hy',
		initialLocale: lang
	});
}
