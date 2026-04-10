import { a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { g as goto } from './client2-D3SYLe3u.js';
import { u as updateCategory, c as createCategory } from './category-CoUYLMnT.js';
import { B as BackBtn } from './BackBtn-mwP9yJsh.js';
import { B as Button } from './button-D4P53Vk1.js';
import { I as Input } from './input-BEGZqDUD.js';
import { L as Label } from './label-CSmSN8-j.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { a2 as escape_html } from './index-D86wc3w8.js';

function CategoryAddEdit($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { id } = $$props;
    const toEdit = Boolean(id);
    let categoryForm = { name: "" };
    const handleSave = async (e) => {
      e.preventDefault();
      try {
        if (toEdit && id) {
          await updateCategory(id, categoryForm);
        } else {
          await createCategory(categoryForm);
        }
        goto("/admin/categories");
      } catch (err) {
        console.error(err, "Failed to add/edit category");
      }
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="p-4 lg:ml-64">`);
      {
        $$renderer3.push("<!--[!-->");
        {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="flex w-full flex-col gap-6 p-6"><div class="flex gap-4">`);
          BackBtn($$renderer3, { onRedirect: () => goto() });
          $$renderer3.push(`<!----> <h2 class="text-left text-xl font-bold">${escape_html(toEdit ? store_get($$store_subs ??= {}, "$t", $format)("category.form.editTitle") : store_get($$store_subs ??= {}, "$t", $format)("category.form.addTitle"))}</h2></div> <div class="flex w-full flex-col gap-4 mt-4">`);
          Label($$renderer3, {
            for: "name",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("category.form.label"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, {
            id: "name",
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("category.form.namePlaceholder"),
            class: "col-span-3",
            get value() {
              return categoryForm.name;
            },
            set value($$value) {
              categoryForm.name = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> <div class="flex justify-end gap-8 p-2">`);
          Button($$renderer3, {
            onclick: handleSave,
            variant: "submit",
            type: "submit",
            class: "p-4",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(toEdit ? store_get($$store_subs ??= {}, "$t", $format)("global.editBtn") : store_get($$store_subs ??= {}, "$t", $format)("global.addBtn"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div></div>`);
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

export { CategoryAddEdit as C };
//# sourceMappingURL=CategoryAddEdit-DVl7IheN.js.map
