const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["logo.jpg","robots.txt"]),
	mimeTypes: {".jpg":"image/jpeg",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.UVMjU7rU.js",app:"_app/immutable/entry/app.D4ZrAQfq.js",imports:["_app/immutable/entry/start.UVMjU7rU.js","_app/immutable/chunks/B0Symvci.js","_app/immutable/chunks/Pm1Ak9zc.js","_app/immutable/chunks/DiTrXzu_.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/entry/app.D4ZrAQfq.js","_app/immutable/chunks/DiTrXzu_.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Pm1Ak9zc.js","_app/immutable/chunks/it19iygR.js","_app/immutable/chunks/BUOtWdq-.js","_app/immutable/chunks/NSTti45z.js","_app/immutable/chunks/io8qTNTN.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:true},
		nodes: [
			__memo(() => import('./chunks/0-BACrGHTW.js')),
			__memo(() => import('./chunks/1-DcoSQBKe.js')),
			__memo(() => import('./chunks/2-C-OgUnXR.js')),
			__memo(() => import('./chunks/3-DMNjyN2a.js')),
			__memo(() => import('./chunks/4-D6xUtK3a.js')),
			__memo(() => import('./chunks/5-CMZqpWSI.js')),
			__memo(() => import('./chunks/6-jKLMQ1ZY.js')),
			__memo(() => import('./chunks/7-BXEAiM3h.js')),
			__memo(() => import('./chunks/8-DRnwtvNg.js')),
			__memo(() => import('./chunks/9-CIIyPTAz.js')),
			__memo(() => import('./chunks/10-B6Bi-okO.js')),
			__memo(() => import('./chunks/11-saE6wcAr.js')),
			__memo(() => import('./chunks/12-Np8ykGQc.js')),
			__memo(() => import('./chunks/13-DKHXIqJu.js')),
			__memo(() => import('./chunks/14-CZKuta6k.js')),
			__memo(() => import('./chunks/15--XEB7wXJ.js')),
			__memo(() => import('./chunks/16-BK-_R72r.js')),
			__memo(() => import('./chunks/17-gsof8-3x.js')),
			__memo(() => import('./chunks/18-C9blrb9a.js')),
			__memo(() => import('./chunks/19-Dvk44ryh.js')),
			__memo(() => import('./chunks/20-BWdm2-DC.js')),
			__memo(() => import('./chunks/21-BhN6uRjs.js')),
			__memo(() => import('./chunks/22-B7EIIM_C.js')),
			__memo(() => import('./chunks/23-BozmWVjS.js')),
			__memo(() => import('./chunks/24-Da-krDi4.js')),
			__memo(() => import('./chunks/25-Dgxclr10.js')),
			__memo(() => import('./chunks/26-DQrAcxRs.js')),
			__memo(() => import('./chunks/27-CD1NJKNg.js')),
			__memo(() => import('./chunks/28-DnfE9uZS.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/categories",
				pattern: /^\/admin\/categories\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/admin/categories/add",
				pattern: /^\/admin\/categories\/add\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/admin/categories/edit/[id]",
				pattern: /^\/admin\/categories\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/admin/import",
				pattern: /^\/admin\/import\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/admin/order-edit",
				pattern: /^\/admin\/order-edit\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/admin/order-edit/[id]",
				pattern: /^\/admin\/order-edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/admin/products",
				pattern: /^\/admin\/products\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/admin/products/add",
				pattern: /^\/admin\/products\/add\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/admin/products/edit/[id]",
				pattern: /^\/admin\/products\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/admin/shops",
				pattern: /^\/admin\/shops\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/admin/shops/add",
				pattern: /^\/admin\/shops\/add\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/admin/shops/edit/[id]",
				pattern: /^\/admin\/shops\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/admin/users",
				pattern: /^\/admin\/users\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/admin/users/add",
				pattern: /^\/admin\/users\/add\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/admin/users/edit",
				pattern: /^\/admin\/users\/edit\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/admin/users/edit/[id]",
				pattern: /^\/admin\/users\/edit\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/manager",
				pattern: /^\/manager\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/manager/add/categories",
				pattern: /^\/manager\/add\/categories\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/manager/add/order-preview",
				pattern: /^\/manager\/add\/order-preview\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 26 },
				endpoint: null
			},
			{
				id: "/manager/add/products",
				pattern: /^\/manager\/add\/products\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 27 },
				endpoint: null
			},
			{
				id: "/manager/add/shops",
				pattern: /^\/manager\/add\/shops\/?$/,
				params: [],
				page: { layouts: [0,3,4,], errors: [1,,,], leaf: 28 },
				endpoint: null
			},
			{
				id: "/manager/[id]",
				pattern: /^\/manager\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,,], leaf: 24 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
