import type { ErrorResponse } from "$lib/types/error"

export const getErrorMessage = (err: unknown, translate: (key: string) => string): string => {
    const data = err as ErrorResponse
    const key = data?.code ?? 'global.errors.unknown'
    return translate(key);
}