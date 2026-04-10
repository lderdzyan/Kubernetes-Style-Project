import { a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { g as goto } from './client2-D3SYLe3u.js';
import { u as updateShopData, c as createShop } from './shops-K9beh3BT.js';
import { B as BackBtn } from './BackBtn-mwP9yJsh.js';
import { S as Spinner } from './Spinner-D3hQ6e33.js';
import { B as Button } from './button-D4P53Vk1.js';
import { I as Input } from './input-BEGZqDUD.js';
import { L as Label } from './label-CSmSN8-j.js';
import { S as Switch } from './switch-DurVX8Id.js';
import { g as getErrorMessage } from './handleError-CR-QhlYX.js';
import { s as shopSchema } from './zodValidation-CrWiySST.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { a2 as escape_html } from './index-D86wc3w8.js';

function ShopForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { id } = $$props;
    const toEdit = Boolean(id);
    let isLoading = false;
    let shopForm = {
      name: "",
      code: "",
      address: "",
      status: false,
      vat: "",
      phone: "",
      managerId: ""
    };
    let errors = {};
    const handleSave = async (e) => {
      e.preventDefault();
      errors = {};
      let resultData = shopForm;
      if (!toEdit) {
        const result = shopSchema.safeParse(shopForm);
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
          await updateShopData(id, resultData);
        } else {
          await createShop(resultData);
        }
        goto("/admin/shops");
      } catch (err) {
        errors.global = getErrorMessage(err, store_get($$store_subs ??= {}, "$t", $format));
        console.error(err, "Impossible to update/create shop");
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
          $$renderer3.push(`<!----> <h2 class="text-left text-xl font-bold">${escape_html(toEdit ? store_get($$store_subs ??= {}, "$t", $format)("shop.form.editTitle") : store_get($$store_subs ??= {}, "$t", $format)("shop.form.addTitle"))}</h2></div> <div class="flex w-full flex-col gap-4">`);
          Label($$renderer3, {
            for: "name",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("shop.form.label.name"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, {
            id: "name",
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("shop.form.namePH"),
            class: "col-span-3",
            get value() {
              return shopForm.name;
            },
            set value($$value) {
              shopForm.name = $$value;
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
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("shop.form.label.code"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, {
            id: "code",
            type: "text",
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("shop.form.codePH"),
            class: "col-span-3",
            get value() {
              return shopForm.code;
            },
            set value($$value) {
              shopForm.code = $$value;
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
          $$renderer3.push(`<!--]--></div> <div class="flex w-full flex-col gap-4">`);
          Label($$renderer3, {
            for: "address",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("shop.form.label.address"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, {
            id: "address",
            type: "text",
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("shop.form.addressPH"),
            class: "col-span-3",
            get value() {
              return shopForm.address;
            },
            set value($$value) {
              shopForm.address = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          if (errors.address) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.address)}</p>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex w-full flex-col gap-4">`);
          Label($$renderer3, {
            for: "phone",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("shop.form.label.phone"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, {
            id: "phone",
            type: "phone",
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("shop.form.phonePH"),
            class: "col-span-3",
            get value() {
              return shopForm.phone;
            },
            set value($$value) {
              shopForm.phone = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> <div class="flex w-full flex-col gap-4">`);
          Label($$renderer3, {
            for: "vat",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("shop.form.label.vat"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Input($$renderer3, {
            id: "vat",
            type: "text",
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("shop.form.vatPH"),
            class: "col-span-3",
            get value() {
              return shopForm.vat;
            },
            set value($$value) {
              shopForm.vat = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----></div> <div class="flex items-center space-x-2">`);
          Label($$renderer3, {
            class: "mr-8",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("shop.form.label.status"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Switch($$renderer3, {
            id: "status",
            get checked() {
              return shopForm.status;
            },
            set checked($$value) {
              shopForm.status = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          Label($$renderer3, {
            for: "status",
            class: shopForm.status ? "text-gray-900" : "text-gray-500",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(shopForm.status ? store_get($$store_subs ??= {}, "$t", $format)("global.switcher.on") : store_get($$store_subs ??= {}, "$t", $format)("global.switcher.off"))}`);
            },
            $$slots: { default: true }
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

export { ShopForm as S };
//# sourceMappingURL=ShopForm-pFaICyA8.js.map
