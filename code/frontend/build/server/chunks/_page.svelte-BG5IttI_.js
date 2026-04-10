import { a as store_get, e as bind_props, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import './url-DBJznBgq.js';
import { T as TableData } from './TableData-C3Qzhza7.js';
import { o as orderColsForAdmin } from './orderTableCols-BEvT_kit.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { formatInTimeZone } from 'date-fns-tz';
import { hy } from 'date-fns/locale';
import { g as goto } from './client2-D3SYLe3u.js';
import { P as Pagination_1 } from './Pagination-CIYodED5.js';
import { S as Select_1 } from './Select-B0EmzsK4.js';
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
import './get-directional-keys-C8x8L_RC.js';
import './scroll-lock-DIDEeqvf.js';
import './events-DoXlNskp.js';
import './button-D4P53Vk1.js';
import './Icon2-BWXQHaRg.js';
import './popper-layer-force-mount-CcCObC6r.js';

function FilterByManagerName($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let managerList = [];
    let { value = "" } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      Select_1($$renderer3, {
        placeholder: store_get($$store_subs ??= {}, "$t", $format)("order.filter"),
        options: managerList,
        showAllOption: true,
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { value });
  });
}
function OrderList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let orders = [];
    let filtereByManager = "";
    let currentPage = 1;
    let perPage = 20;
    const filteredOrders = !filtereByManager ? orders : orders.filter((order) => order.managerId === filtereByManager);
    const formattedOrders = filteredOrders.slice((currentPage - 1) * perPage, currentPage * perPage).map((order) => ({
      ...order,
      createdAt: formatInTimeZone(new Date(order.createdAt), "Asia/Yerevan", "dd MMM yyyy, HH:mm", { locale: hy })
    }));
    const goToEdit = (order) => goto(`/admin/order-edit/${order.id}`);
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="p-4 lg:ml-64">`);
      {
        $$renderer3.push("<!--[!-->");
        {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<h2 class="mb-4 text-center text-xl font-bold lg:text-left">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.title"))}</h2> <div class="flex gap-4 py-4">`);
          FilterByManagerName($$renderer3, {
            get value() {
              return filtereByManager;
            },
            set value($$value) {
              filtereByManager = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> <div class="py-4">`);
          TableData($$renderer3, {
            data: formattedOrders,
            columns: orderColsForAdmin,
            onRowClick: goToEdit
          });
          $$renderer3.push(`<!----></div> <div class="mt-4 flex justify-end">`);
          Pagination_1($$renderer3, {
            count: formattedOrders.length,
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
  OrderList($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BG5IttI_.js.map
