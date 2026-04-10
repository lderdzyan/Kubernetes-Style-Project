import { T } from './button-D4P53Vk1.js';
import './client-DuPA9L0n.js';
import './url-DBJznBgq.js';
import './runtime-CCkVflQ7.js';
import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import './index2-DOUSrPB8.js';
import './index-D86wc3w8.js';
import './utils2-DeZkPw4J.js';
import './utils3-CULcwRUd.js';
import './client2-D3SYLe3u.js';
import 'jwt-decode';
import './shared-server-BU2DVf8Q.js';

T({
  base: "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  variants: {
    side: {
      top: "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
      bottom: "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
      left: "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
      right: "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"
    }
  },
  defaultVariants: { side: "right" }
});
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-BnMj1tvj.js.map
