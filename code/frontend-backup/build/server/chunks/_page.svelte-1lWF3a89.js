import { a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { i as importCategory } from './category-CoUYLMnT.js';
import { i as importProd11, a as importProd12, b as importProd20, c as importProd22 } from './product-DwNRaUOJ.js';
import { i as importShop } from './shops-K9beh3BT.js';
import { i as importUsers } from './users-D0zCHUfa.js';
import { B as Button } from './button-D4P53Vk1.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import './utils2-DeZkPw4J.js';
import './requests-D2a_9uvJ.js';
import './url-DBJznBgq.js';
import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import 'jwt-decode';
import './shared-server-BU2DVf8Q.js';
import './utils3-CULcwRUd.js';

function Import($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const handleImport11 = async () => {
      try {
        await importProd11();
      } catch (err) {
        console.error("Import req is not sent");
      }
    };
    const handleImport12 = async () => {
      try {
        await importProd12();
      } catch (err) {
        console.error("Import req is not sent");
      }
    };
    const handleImport20 = async () => {
      try {
        await importProd20();
      } catch (err) {
        console.error("Import req is not sent");
      }
    };
    const handleImport22 = async () => {
      try {
        await importProd22();
      } catch (err) {
        console.error("Import req is not sent");
      }
    };
    const handleShopImport = async () => {
      try {
        await importShop();
      } catch (err) {
        console.error("Import req is not sent");
      }
    };
    const handleUserImport = async () => {
      try {
        const result = await importUsers();
        console.log("Import Request has been sent", result);
      } catch (err) {
        console.error("Import req is not sent");
      }
    };
    const handleCategoryImport = async () => {
      try {
        const result = await importCategory();
        console.log("Import Request has been sent", result);
      } catch (err) {
        console.error("Import req is not sent");
      }
    };
    $$renderer2.push(`<div class="gap- 10 flex flex-col p-8 lg:ml-64">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<h1 class="mb-8 text-center text-xl font-bold lg:text-left">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("import.title"))}</h1> <div class="mb-6 flex w-full max-w-xl flex-col items-center rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm"><h2 class="mb-4 text-center text-lg font-medium text-gray-700">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("import.productTitle"))}</h2> <div class="flex flex-wrap justify-center gap-4">`);
      Button($$renderer2, {
        onclick: handleImport11,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->11`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        onclick: handleImport12,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->12`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        onclick: handleImport20,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->20`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----> `);
      Button($$renderer2, {
        onclick: handleImport22,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->22`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div> <div class="mb-6 flex w-full max-w-xl flex-col items-center rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm"><h2 class="mb-4 text-lg font-medium text-gray-700">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("import.shopTitle"))}</h2> <div>`);
      Button($$renderer2, {
        variant: "default",
        onclick: handleShopImport,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("import.importBtn"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div> <div class="mb-6 flex w-full max-w-xl flex-col items-center rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm"><h2 class="mb-4 text-lg font-medium text-gray-700">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("import.userTitle"))}</h2> <div>`);
      Button($$renderer2, {
        variant: "default",
        onclick: handleUserImport,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("import.importBtn"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div> <div class="mb-6 flex w-full max-w-xl flex-col items-center rounded-2xl border border-gray-300 bg-white p-6 text-center shadow-sm"><h2 class="mb-4 text-lg font-medium text-gray-700">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("import.categoryTitle"))}</h2> <div>`);
      Button($$renderer2, {
        variant: "default",
        onclick: handleCategoryImport,
        children: ($$renderer3) => {
          $$renderer3.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("import.importBtn"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _page($$renderer) {
  Import($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-1lWF3a89.js.map
