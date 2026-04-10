export const API_PATHS = {
	auth: {
		login: '/auth/login'
	},
	users: {
		base: '/users',
		byId: (id: string) => `/users/${id}`,
		shops: (id: string) => `/users/${id}/shops`,
		status: (id: string) => `/users/${id}/status`,
		import: '/users/import'
	},
	shops: {
		base: '/shops',
		byId: (id: string) => `/shops/${id}`,
		status: (id: string) => `/shops/${id}/status`,
		assigned: '/shops/my',
		import: '/shops/import'
	},
	categories: {
		base: '/categories',
		byId: (id: string) => `/categories/${id}`,
		import: '/categories/import'
	},

	products: {
		base: '/products',
		byId: (id: string) => `/products/${id}`,
		byCategory: (categoryId: string) => `/products/by-category/${categoryId}`,
		moveUp: (id: string) => `/products/${id}/move-up`,
		moveDown: (id: string) => `/products/${id}/move-down`,
		import11: '/products/import/11',
		import12: '/products/import/12',
		import20: '/products/import/20',
		import22: '/products/import/22'
	},

	orders: {
		base: '/orders',
		byId: (id: string) => `/orders/${id}`,
		orderStatus: (id: string) => `/orders/${id}/status`,
		invoice: (id: string) => `/orders/${id}/invoice`
	}
} as const;
