export type ErrorResponse = {
	error: string;
	code: string;
	details?: Record<string, unknown>;
};
