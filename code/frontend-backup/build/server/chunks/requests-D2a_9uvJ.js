import { B as BASE_URL, a as auth } from './url-DBJznBgq.js';

const API_PATHS = {
  users: {
    base: "/users",
    byId: (id) => `/users/${id}`,
    shops: (id) => `/users/${id}/shops`,
    status: (id) => `/users/${id}/status`,
    import: "/users/import"
  },
  shops: {
    base: "/shops",
    byId: (id) => `/shops/${id}`,
    status: (id) => `/shops/${id}/status`,
    assigned: "/shops/my",
    import: "/shops/import"
  },
  categories: {
    base: "/categories",
    byId: (id) => `/categories/${id}`,
    import: "/categories/import"
  },
  products: {
    base: "/products",
    byId: (id) => `/products/${id}`,
    byCategory: (categoryId) => `/products/by-category/${categoryId}`,
    import11: "/products/import/11",
    import12: "/products/import/12",
    import20: "/products/import/20",
    import22: "/products/import/22"
  },
  orders: {
    base: "/orders"
  }
};
const apiRequest = async (path, options = {}) => {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...auth.user?.token ? { Authorization: `Bearer ${auth.user?.token}` } : {},
      ...options.headers || {}
    },
    ...options
  });
  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }
  if (!response.ok) {
    throw {
      status: response.status,
      code: data?.code,
      message: data?.error || response.statusText
    };
  }
  return data;
};

export { API_PATHS as A, apiRequest as a };
//# sourceMappingURL=requests-D2a_9uvJ.js.map
