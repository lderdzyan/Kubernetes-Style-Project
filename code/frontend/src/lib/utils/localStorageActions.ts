export const checkLocalStorage = (): boolean =>
	typeof window !== 'undefined' && typeof window.localStorage !== 'undefined';

export const setLocalStorageData = <T>(key: string, value: T) => {
	if (checkLocalStorage()) {
		localStorage.setItem(key, JSON.stringify(value));
	}
};

export const getLocalStorageData = <T>(key: string): T | null => {
	if (checkLocalStorage()) {
		const item = localStorage.getItem(key);
		return item ? (JSON.parse(item) as T) : null;
	}
	return null;
};

export const removeLocalStorageData = (key: string) => {
	if (checkLocalStorage()) {
		localStorage.removeItem(key);
	}
};
