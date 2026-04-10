import { a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { g as goto } from './client2-D3SYLe3u.js';
import './url-DBJznBgq.js';
import { S as Search } from './Search-B3oSyVKS.js';
import { P as Pagination_1 } from './Pagination-CIYodED5.js';
import { T as TableData } from './TableData-C3Qzhza7.js';
import { c as createOrder } from './orders.svelte-CrkfcYYS.js';
import { f as filterItems } from './filterShops-Dmbu1RtS.js';
import { s as shopColumns } from './shopTableCols-BlhRPcja.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { B as BackBtn } from './BackBtn-mwP9yJsh.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import './utils2-DeZkPw4J.js';
import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import 'jwt-decode';
import './shared-server-BU2DVf8Q.js';
import './utils3-CULcwRUd.js';
import './input-BEGZqDUD.js';
import './Icon-yySV564o.js';
import './create-id-BvW60KIR.js';
import './index-server-_G0R5Qhl.js';
import './get-directional-keys-C8x8L_RC.js';
import './scroll-lock-DIDEeqvf.js';
import './events-DoXlNskp.js';
import './button-D4P53Vk1.js';
import './Icon2-BWXQHaRg.js';
import './switch-DurVX8Id.js';
import './hidden-input-X0KJrKYW.js';
import './product2-CjFRccXX.js';
import './index4-BCiEosLg.js';
import './popper-layer-force-mount-CcCObC6r.js';

function AssignedShops($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let shops = [];
    let searchState = "";
    let currentPage = 1;
    let perPage = 30;
    const filteredShops = filterItems(shops, searchState);
    const paginateShopList = filteredShops.slice((currentPage - 1) * perPage, currentPage * perPage);
    const handleClick = (shop) => {
      createOrder.shopId = shop.id;
      createOrder.categoryId = null;
      createOrder.items = [];
      goto();
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="w-full p-4">`);
      {
        $$renderer3.push("<!--[!-->");
        {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<h1 class="text-center text-xl font-bold lg:text-left">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.assignedShops"))}</h1> <div class="flex justify-between gap-4 py-8">`);
          Search($$renderer3, {
            get value() {
              return searchState;
            },
            set value($$value) {
              searchState = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          BackBtn($$renderer3, { onRedirect: () => goto() });
          $$renderer3.push(`<!----></div> `);
          TableData($$renderer3, {
            columns: shopColumns,
            data: paginateShopList,
            onRowClick: handleClick
          });
          $$renderer3.push(`<!----> <div class="mt-4 flex justify-end">`);
          Pagination_1($$renderer3, {
            count: filteredShops.length,
            perPage,
            siblingCount: 1,
            get page() {
              return currentPage;
            },
            set page($$value) {
              currentPage = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div>`);
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
  AssignedShops($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D9tgS5Sd.js.map
