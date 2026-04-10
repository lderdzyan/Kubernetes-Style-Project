import { a as store_get, u as unsubscribe_stores, e as bind_props } from './index2-DOUSrPB8.js';
import { g as goto } from './client2-D3SYLe3u.js';
import './url-DBJznBgq.js';
import { S as Search } from './Search-B3oSyVKS.js';
import { P as Pagination_1 } from './Pagination-CIYodED5.js';
import { T as TableData } from './TableData-C3Qzhza7.js';
import { B as Button } from './button-D4P53Vk1.js';
import { c as createOrder } from './orders.svelte-CrkfcYYS.js';
import { f as filterItems } from './filterShops-Dmbu1RtS.js';
import { p as productColumns } from './productTableCols-DkJze5GW.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { R as Root, D as Dialog_content, b as Dialog_header, c as Dialog_title } from './index5-CqjlhqYn.js';
import { I as Input } from './input-BEGZqDUD.js';
import { L as Label } from './label-CSmSN8-j.js';
import { M as Minus, P as Plus } from './plus-BC6L-Yt6.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import './utils2-DeZkPw4J.js';
import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import 'jwt-decode';
import './shared-server-BU2DVf8Q.js';
import './utils3-CULcwRUd.js';
import './Icon-yySV564o.js';
import './create-id-BvW60KIR.js';
import './index-server-_G0R5Qhl.js';
import './get-directional-keys-C8x8L_RC.js';
import './scroll-lock-DIDEeqvf.js';
import './events-DoXlNskp.js';
import './Icon2-BWXQHaRg.js';
import './switch-DurVX8Id.js';
import './hidden-input-X0KJrKYW.js';
import './product2-CjFRccXX.js';

function OrderPopup($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { open = false, title, price, onConfirm } = $$props;
    let quantity = 1;
    let total = price * quantity;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Root($$renderer3, {
        open,
        onOpenChange: (isOpen) => open = isOpen,
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Dialog_content($$renderer4, {
            class: "w-80",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Dialog_header($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Dialog_title($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<!---->${escape_html(title)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="mt-2 grid gap-2"><div class="grid grid-cols-3 items-center gap-4">`);
              Label($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.popup.quantity"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <div class="col-span-2 flex items-center gap-2 relative">`);
              Button($$renderer5, {
                type: "button",
                size: "icon",
                variant: "link",
                onclick: () => quantity = Math.max(1, quantity - 1),
                class: "absolute left-2",
                children: ($$renderer6) => {
                  Minus($$renderer6, { size: 6 });
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Input($$renderer5, {
                type: "number",
                min: "1",
                step: "1",
                class: "h-8 w-full text-center",
                get value() {
                  return quantity;
                },
                set value($$value) {
                  quantity = $$value;
                  $$settled = false;
                }
              });
              $$renderer5.push(`<!----> `);
              Button($$renderer5, {
                type: "button",
                size: "icon",
                variant: "link",
                onclick: () => quantity = quantity + 1,
                class: "absolute right-2",
                children: ($$renderer6) => {
                  Plus($$renderer6, { size: 6 });
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div></div> <div class="grid grid-cols-3 items-center gap-4">`);
              Label($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.popup.price"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Input($$renderer5, {
                readonly: true,
                value: price.toFixed(2),
                class: "col-span-2 h-8"
              });
              $$renderer5.push(`<!----></div> <div class="grid grid-cols-3 items-center gap-4">`);
              Label($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.popup.total"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Input($$renderer5, {
                readonly: true,
                value: total.toFixed(2),
                class: "col-span-2 h-8"
              });
              $$renderer5.push(`<!----></div> <div class="mt-3 grid grid-cols-2 items-center gap-4">`);
              Button($$renderer5, {
                variant: "outline",
                onclick: () => open = false,
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.modal.cancelBtn"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> `);
              Button($$renderer5, {
                variant: "default",
                onclick: () => {
                  onConfirm(quantity, total);
                  open = false;
                },
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.modal.confirmBtn"))}`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----></div></div>`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        },
        $$slots: { default: true }
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
    bind_props($$props, { open });
  });
}
function ProductByCategory($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let products = [];
    let searchState = "";
    let orderPopup = false;
    let selectedProduct = null;
    let currentPage = 1;
    let perPage = 20;
    const displayProducts = products.map((product) => ({ ...product, category: product.category?.name ?? "" }));
    const filteredProducts = filterItems(displayProducts, searchState);
    const paginateProductList = filteredProducts.slice((currentPage - 1) * perPage, currentPage * perPage);
    const handleClick = (product) => {
      selectedProduct = product;
      orderPopup = true;
    };
    const handleOrderSubmission = (quantity, total) => {
      if (!selectedProduct) return;
      createOrder.items.push({
        productId: selectedProduct.id,
        productName: selectedProduct.name,
        measurement: selectedProduct.measurement || void 0,
        productCode: selectedProduct.code,
        quantity,
        price: selectedProduct.price,
        total
      });
      console.log(createOrder);
      orderPopup = false;
      selectedProduct = null;
    };
    const redirectToCategories = () => goto();
    const redirectToPreview = () => goto();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex w-full flex-col">`);
      {
        $$renderer3.push("<!--[!-->");
        {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<h1 class="mb-6 text-xl font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("product.table.title"))}</h1> <div class="flex flex-col justify-between gap-4 py-6 sm:flex-row"><div>`);
          Search($$renderer3, {
            get value() {
              return searchState;
            },
            set value($$value) {
              searchState = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> <div class="flex flex-col gap-4 sm:flex-row sm:gap-4">`);
          Button($$renderer3, {
            variant: "default",
            onclick: redirectToCategories,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.categoryBtn"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Button($$renderer3, {
            variant: "submit",
            onclick: redirectToPreview,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.previewBtn"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div></div> `);
          TableData($$renderer3, {
            columns: productColumns,
            data: paginateProductList,
            onRowClick: handleClick
          });
          $$renderer3.push(`<!----> `);
          if (selectedProduct) {
            $$renderer3.push("<!--[-->");
            OrderPopup($$renderer3, {
              title: store_get($$store_subs ??= {}, "$t", $format)("order.popup.title"),
              onConfirm: handleOrderSubmission,
              price: selectedProduct?.price || 0,
              get open() {
                return orderPopup;
              },
              set open($$value) {
                orderPopup = $$value;
                $$settled = false;
              }
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <div class="mt-4 flex justify-end">`);
          Pagination_1($$renderer3, {
            count: filteredProducts.length,
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
  ProductByCategory($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DfvjWV5-.js.map
