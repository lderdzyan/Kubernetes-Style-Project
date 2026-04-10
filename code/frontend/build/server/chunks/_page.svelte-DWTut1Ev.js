import { a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import './url-DBJznBgq.js';
import { B as Button } from './button-D4P53Vk1.js';
import { g as goto } from './client2-D3SYLe3u.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { T as TableData } from './TableData-C3Qzhza7.js';
import { a as orderColumns } from './orderTableCols-BEvT_kit.js';
import { formatInTimeZone } from 'date-fns-tz';
import { hy } from 'date-fns/locale';
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

function Orders($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let orders = [];
    const ordersWithFormattedDate = orders.map((order) => ({
      ...order,
      createdAt: formatInTimeZone(new Date(order.createdAt), "Asia/Yerevan", "dd MMM., yyyy, HH:mm", { locale: hy })
    }));
    const redirect = () => goto();
    const viewDetails = (order) => goto(`/manager/${order.id}`);
    $$renderer2.push(`<div class="flex w-full flex-col">`);
    {
      $$renderer2.push("<!--[!-->");
      {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="flex flex-col-reverse gap-2 sm:flex-col lg:flex-row lg:items-center lg:justify-between"><h1 class="text-center text-xl font-bold lg:text-left">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.title"))}</h1> `);
        {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> `);
        if (orders.length > 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="mt-8 mb-8 flex justify-end">`);
          Button($$renderer2, {
            variant: "submit",
            onclick: redirect,
            children: ($$renderer3) => {
              $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.addBtn"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer2.push(`<!----></div> `);
          TableData($$renderer2, {
            columns: orderColumns,
            data: ordersWithFormattedDate,
            onRowClick: viewDetails
          });
          $$renderer2.push(`<!---->`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<div class="mt-20 flex flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-muted/30 py-16 text-center"><p class="text-lg font-medium text-muted-foreground">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.noOrder"))}</p> `);
          Button($$renderer2, {
            class: "mt-6",
            variant: "submit",
            onclick: redirect,
            children: ($$renderer3) => {
              $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.addBtn"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer2.push(`<!----></div>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Orders($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DWTut1Ev.js.map
