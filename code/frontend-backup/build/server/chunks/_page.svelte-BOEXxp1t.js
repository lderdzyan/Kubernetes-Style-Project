import { a as store_get, e as bind_props, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { g as goto } from './client2-D3SYLe3u.js';
import './url-DBJznBgq.js';
import { B as Button } from './button-D4P53Vk1.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { d as deleteProduct } from './product-DwNRaUOJ.js';
import { T as TableRowTools } from './TableRowTools-C20xJeop.js';
import { T as TableData } from './TableData-C3Qzhza7.js';
import { p as productColumns } from './productTableCols-DkJze5GW.js';
import { P as Pagination_1 } from './Pagination-CIYodED5.js';
import { S as Search } from './Search-B3oSyVKS.js';
import { f as filterItems } from './filterShops-Dmbu1RtS.js';
import { S as Select_1 } from './Select-B0EmzsK4.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import './utils2-DeZkPw4J.js';
import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import 'jwt-decode';
import './shared-server-BU2DVf8Q.js';
import './utils3-CULcwRUd.js';
import './requests-D2a_9uvJ.js';
import './index5-CqjlhqYn.js';
import './create-id-BvW60KIR.js';
import './index-server-_G0R5Qhl.js';
import './scroll-lock-DIDEeqvf.js';
import './events-DoXlNskp.js';
import './Icon2-BWXQHaRg.js';
import './index4-BCiEosLg.js';
import './popper-layer-force-mount-CcCObC6r.js';
import './circle-x-hqj4Z3JR.js';
import './Icon-yySV564o.js';
import './switch-DurVX8Id.js';
import './hidden-input-X0KJrKYW.js';
import './product2-CjFRccXX.js';
import './get-directional-keys-C8x8L_RC.js';
import './input-BEGZqDUD.js';

function ProductTable($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { products } = $$props;
    const displayProducts = products.map((product) => ({ ...product, category: product.category?.name ?? "" }));
    const redirectToEdit = (id) => {
      goto();
    };
    const handleDelete = (id) => {
      deleteProduct(id);
      products = products.filter((product) => product.id !== id);
    };
    function tools($$renderer3, { row }) {
      TableRowTools($$renderer3, { id: row.id, onEdit: redirectToEdit, onDelete: handleDelete });
    }
    $$renderer2.push(`<div>`);
    TableData($$renderer2, {
      columns: productColumns,
      data: displayProducts,
      renderTools: tools
    });
    $$renderer2.push(`<!----></div>`);
  });
}
function FilterByCategory($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let categories = [];
    let { value = "" } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      Select_1($$renderer3, {
        placeholder: store_get($$store_subs ??= {}, "$t", $format)("category.form.label"),
        options: categories,
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
function ProductList($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let products = [];
    let currentPage = 1;
    let searchState = "";
    let selectedCategoryId = "";
    const perPage = 50;
    const filteredProducts = filterItems(products, searchState);
    const paginateProductList = filteredProducts.slice((currentPage - 1) * perPage, currentPage * perPage);
    const redirect = () => goto();
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="p-4 lg:ml-64">`);
      {
        $$renderer3.push("<!--[!-->");
        {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<h1 class="text-center text-xl font-bold lg:text-left">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("product.table.title"))}</h1> <div class="mt-10 mb-10 flex justify-end">`);
          Button($$renderer3, {
            onclick: redirect,
            type: "submit",
            variant: "submit",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.addBtn"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div> <div class="mt-10 mb-10 flex flex-col gap-3 overflow-visible sm:flex-row sm:items-center sm:justify-between">`);
          Search($$renderer3, {
            class: "w-full sm:w-auto",
            get value() {
              return searchState;
            },
            set value($$value) {
              searchState = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          FilterByCategory($$renderer3, {
            get value() {
              return selectedCategoryId;
            },
            set value($$value) {
              selectedCategoryId = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> `);
          ProductTable($$renderer3, { products: paginateProductList });
          $$renderer3.push(`<!----> <div class="mt-4 flex justify-end">`);
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
  ProductList($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BOEXxp1t.js.map
