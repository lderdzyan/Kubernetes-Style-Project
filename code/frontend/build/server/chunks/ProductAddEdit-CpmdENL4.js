import { a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { g as goto } from './client2-D3SYLe3u.js';
import './url-DBJznBgq.js';
import { e as editProduct, f as createNewProduct } from './product-DwNRaUOJ.js';
import { B as BackBtn } from './BackBtn-mwP9yJsh.js';
import { S as Select_1 } from './Select-B0EmzsK4.js';
import { S as Spinner } from './Spinner-D3hQ6e33.js';
import { B as Button } from './button-D4P53Vk1.js';
import { I as Input } from './input-BEGZqDUD.js';
import { L as Label } from './label-CSmSN8-j.js';
import { P as ProductMeasurement } from './product2-CjFRccXX.js';
import { g as getErrorMessage } from './handleError-CR-QhlYX.js';
import { p as productSchema } from './zodValidation-CrWiySST.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { a2 as escape_html } from './index-D86wc3w8.js';

function ProductAddEdit($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { id } = $$props;
    let toEdit = Boolean(id);
    let isLoading = false;
    let categories = [];
    const measurements = Object.values(ProductMeasurement).map((measurement) => ({
      value: measurement,
      label: store_get($$store_subs ??= {}, "$t", $format)(`product.measurement.${measurement}`)
    }));
    let productForm = {
      name: "",
      code: "",
      measurement: "",
      categoryId: "",
      price: void 0
    };
    let errors = {};
    const handleSave = async (e) => {
      e.preventDefault();
      errors = {};
      let resultData = productForm;
      if (!toEdit) {
        const result = productSchema.safeParse(productForm);
        if (!result.success) {
          errors = Object.fromEntries(result.error.issues.map((issue) => [
            issue.path[0],
            store_get($$store_subs ??= {}, "$t", $format)(issue.message)
          ]));
          return;
        }
        resultData = result.data;
      }
      isLoading = true;
      try {
        if (toEdit && id) {
          await editProduct(resultData, id);
        } else {
          await createNewProduct(resultData);
        }
        goto("/admin/products");
      } catch (err) {
        errors.global = getErrorMessage(err, store_get($$store_subs ??= {}, "$t", $format));
        console.error(err, "Failed to add/edit product");
      } finally {
        isLoading = false;
      }
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="p-4 lg:ml-64">`);
      if (errors.global) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm"><p class="text-md text-destructive-foreground font-medium text-neutral-50">${escape_html(errors.global)}</p></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (isLoading) {
          $$renderer3.push("<!--[-->");
          Spinner($$renderer3, {});
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="flex w-full flex-col gap-6 p-6"><div class="flex gap-4">`);
          BackBtn($$renderer3, { onRedirect: () => goto() });
          $$renderer3.push(`<!----> <h2 class="text-left text-xl font-bold">${escape_html(toEdit ? store_get($$store_subs ??= {}, "$t", $format)("product.form.editTitle") : store_get($$store_subs ??= {}, "$t", $format)("product.form.addTitle"))}</h2></div> <div class="flex w-full flex-col gap-4">`);
          Label($$renderer3, {
            for: "name",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("product.form.label.name"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, {
            id: "name",
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("product.form.namePH"),
            class: "col-span-3",
            get value() {
              return productForm.name;
            },
            set value($$value) {
              productForm.name = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          if (errors.name) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.name)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex w-full flex-col gap-4">`);
          Label($$renderer3, {
            for: "code",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("product.form.label.code"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, {
            id: "code",
            type: "text",
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("product.form.codePH"),
            class: "col-span-3 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            get value() {
              return productForm.code;
            },
            set value($$value) {
              productForm.code = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          if (errors.code) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.code)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex flex-col gap-2">`);
          Label($$renderer3, {
            for: "measurement",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("product.form.label.measurement"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Select_1($$renderer3, {
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("product.form.measureMentPH"),
            options: measurements,
            get value() {
              return productForm.measurement;
            },
            set value($$value) {
              productForm.measurement = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          if (errors.measurement) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.measurement)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex flex-col gap-2">`);
          Label($$renderer3, {
            for: "category",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("product.form.label.category"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Select_1($$renderer3, {
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("product.form.categoryPH"),
            options: categories.map((c) => ({ label: c.name, value: c.id })),
            get value() {
              return productForm.categoryId;
            },
            set value($$value) {
              productForm.categoryId = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          if (errors.categoryId) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.categoryId)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex flex-col gap-2">`);
          Label($$renderer3, {
            for: "price",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("product.form.label.price"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, {
            id: "code",
            type: "number",
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("product.form.pricePH"),
            class: "col-span-3 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
            get value() {
              return productForm.price;
            },
            set value($$value) {
              productForm.price = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          if (errors.price) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.price)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex justify-end gap-8 p-2">`);
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

export { ProductAddEdit as P };
//# sourceMappingURL=ProductAddEdit-CpmdENL4.js.map
