import './exports-CgQJUv15.js';
import { V as writable } from './index-D86wc3w8.js';
import './state.svelte-CKcNBPmG.js';

function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
function goto(url, opts = {}) {
  {
    throw new Error("Cannot call goto(...) on the server");
  }
}

export { goto as g, stores as s };
//# sourceMappingURL=client2-D3SYLe3u.js.map
