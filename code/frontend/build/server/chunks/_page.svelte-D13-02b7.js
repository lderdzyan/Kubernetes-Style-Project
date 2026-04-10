import { a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { g as goto } from './client2-D3SYLe3u.js';
import './url-DBJznBgq.js';
import { T as TableData } from './TableData-C3Qzhza7.js';
import { c as createOrder } from './orders.svelte-CrkfcYYS.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import './utils2-DeZkPw4J.js';
import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import 'jwt-decode';
import './shared-server-BU2DVf8Q.js';
import './utils3-CULcwRUd.js';
import './switch-DurVX8Id.js';
import './create-id-BvW60KIR.js';
import './index-server-_G0R5Qhl.js';
import './hidden-input-X0KJrKYW.js';
import './product2-CjFRccXX.js';

const categoryColumns = [
  { key: "name", label: "category.table.row.name" }
];
function CategoryList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let categories = [];
    const handleClick = (category) => {
      createOrder.categoryId = category.id;
      console.log(createOrder);
      goto();
    };
    $$renderer2.push(`<div class="flex w-full flex-col">`);
    {
      $$renderer2.push("<!--[!-->");
      {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<h1 class="mb-8 text-center text-xl font-bold lg:text-left">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("category.table.title"))}</h1> `);
        TableData($$renderer2, {
          columns: categoryColumns,
          data: categories,
          onRowClick: handleClick
        });
        $$renderer2.push(`<!---->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  CategoryList($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D13-02b7.js.map
