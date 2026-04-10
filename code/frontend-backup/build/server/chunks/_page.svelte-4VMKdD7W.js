import { a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import './url-DBJznBgq.js';
import { S as Skeleton_1 } from './Skeleton-BI59Ven4.js';
import './button-D4P53Vk1.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import './index-D86wc3w8.js';
import './utils2-DeZkPw4J.js';
import 'jwt-decode';
import './shared-server-BU2DVf8Q.js';
import './utils3-CULcwRUd.js';

function CategoriesList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="p-4 lg:ml-64">`);
      {
        $$renderer3.push("<!--[!-->");
        {
          $$renderer3.push("<!--[-->");
          Skeleton_1($$renderer3, {
            title: store_get($$store_subs ??= {}, "$t", $format)("category.table.title"),
            rows: 15
          });
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  CategoriesList($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-4VMKdD7W.js.map
