import { locale } from 'svelte-i18n';

export function setLanguage(lang: string) {
	document.cookie = `lang=${lang}; Path=/; Max-Age=31536000; SameSite=Lax`;
	locale.set(lang);
}
