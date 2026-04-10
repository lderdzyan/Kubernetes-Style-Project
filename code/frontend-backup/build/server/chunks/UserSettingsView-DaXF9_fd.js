import { a as store_get, e as bind_props, u as unsubscribe_stores, q as sanitize_props, g as spread_props, t as slot } from './index2-DOUSrPB8.js';
import { I as Input } from './input-BEGZqDUD.js';
import { L as Label } from './label-CSmSN8-j.js';
import { S as Switch } from './switch-DurVX8Id.js';
import { u as userSchema, U as UserRole } from './zodValidation-CrWiySST.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { S as Select_1 } from './Select-B0EmzsK4.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import { B as Button } from './button-D4P53Vk1.js';
import { T as TableData } from './TableData-C3Qzhza7.js';
import { S as ShopTableRows } from './shopTableCols-BlhRPcja.js';
import { S as Search } from './Search-B3oSyVKS.js';
import { f as filterItems } from './filterShops-Dmbu1RtS.js';
import { I as Icon } from './Icon-yySV564o.js';
import { C as Circle_x } from './circle-x-hqj4Z3JR.js';
import { u as updateUser, c as createUser, g as getUserById, a as attachShopsToUser } from './users-D0zCHUfa.js';
import { g as goto } from './client2-D3SYLe3u.js';
import './url-DBJznBgq.js';
import { B as BackBtn } from './BackBtn-mwP9yJsh.js';
import { g as getErrorMessage } from './handleError-CR-QhlYX.js';

function Arrow_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "m12 5 7 7-7 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function UserForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { values = void 0, showPassword = false, errors = {} } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex w-full flex-col gap-6 py-6"><div class="flex w-full flex-col gap-4">`);
      Label($$renderer3, {
        for: "name",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("user.form.label.name"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Input($$renderer3, {
        id: "name",
        placeholder: store_get($$store_subs ??= {}, "$t", $format)("user.form.namePlaceholder"),
        class: "flex-1",
        get value() {
          return values.name;
        },
        set value($$value) {
          values.name = $$value;
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
        for: "username",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("user.form.label.username"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      Input($$renderer3, {
        id: "username",
        placeholder: store_get($$store_subs ??= {}, "$t", $format)("user.form.usernamePlaceholder"),
        class: "flex-1",
        get value() {
          return values.username;
        },
        set value($$value) {
          values.username = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (errors.username) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.username)}</p>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div> `);
      if (showPassword) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="flex w-full flex-col gap-4">`);
        Label($$renderer3, {
          for: "password",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("user.form.label.password"))}`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> `);
        Input($$renderer3, {
          id: "password",
          type: "password",
          placeholder: store_get($$store_subs ??= {}, "$t", $format)("user.form.userPassPlaceholder"),
          class: "flex-1",
          get value() {
            return values.password;
          },
          set value($$value) {
            values.password = $$value;
            $$settled = false;
          }
        });
        $$renderer3.push(`<!----> `);
        if (errors.password) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.password)}</p>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> <div class="flex items-center space-x-2">`);
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
          return values.status;
        },
        set checked($$value) {
          values.status = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      Label($$renderer3, {
        for: "status",
        class: values.status ? "text-gray-900" : "text-gray-500",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->${escape_html(values.status ? store_get($$store_subs ??= {}, "$t", $format)("global.switcher.on") : store_get($$store_subs ??= {}, "$t", $format)("global.switcher.off"))}`);
        },
        $$slots: { default: true }
      });
      $$renderer3.push(`<!----> `);
      if (errors.status) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.status)}</p>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div> <div class="flex items-center gap-8">`);
      Select_1($$renderer3, {
        placeholder: store_get($$store_subs ??= {}, "$t", $format)("user.form.rolePlaceholder"),
        options: [
          {
            value: UserRole.ADMIN,
            label: store_get($$store_subs ??= {}, "$t", $format)("user.form.role.admin")
          },
          {
            value: UserRole.MANAGER,
            label: store_get($$store_subs ??= {}, "$t", $format)("user.form.role.manager")
          }
        ],
        get value() {
          return values.role;
        },
        set value($$value) {
          values.role = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> `);
      if (errors.role) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<p class="text-sm text-red-500">${escape_html(errors.role)}</p>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { values });
  });
}
function ShopListTable($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { availableShops, assignShop, searchState } = $$props;
    const filteredShops = filterItems(availableShops, searchState);
    function tools($$renderer3, { row }) {
      Button($$renderer3, {
        size: "sm",
        variant: "submit",
        onclick: () => assignShop(row),
        children: ($$renderer4) => {
          Arrow_right($$renderer4, {});
        },
        $$slots: { default: true }
      });
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="w-full"><h2 class="text-left">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("shop.table.title"))}</h2> <div class="flex py-6">`);
      Search($$renderer3, {
        get value() {
          return searchState;
        },
        set value($$value) {
          searchState = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div> <div class="max-h-64 overflow-y-auto rounded-lg border">`);
      TableData($$renderer3, {
        columns: ShopTableRows,
        data: filteredShops,
        renderTools: tools
      });
      $$renderer3.push(`<!----></div></div>`);
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
function AssigningToUserTable($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { assignedShops, unassignShop, searchState } = $$props;
    const filteredShops = filterItems(assignedShops, searchState);
    function tools($$renderer3, { row }) {
      Button($$renderer3, {
        size: "sm",
        variant: "destructive",
        onclick: () => unassignShop(row),
        children: ($$renderer4) => {
          Circle_x($$renderer4, {});
        },
        $$slots: { default: true }
      });
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="w-full"><h2 class="text-left">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("shop.assignedShopTitle"))}</h2> <div class="flex py-6">`);
      Search($$renderer3, {
        get value() {
          return searchState;
        },
        set value($$value) {
          searchState = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div> <div class="max-h-64 overflow-y-auto rounded-lg border">`);
      TableData($$renderer3, {
        columns: ShopTableRows,
        data: filteredShops,
        renderTools: tools
      });
      $$renderer3.push(`<!----></div></div>`);
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
function UserSettingsView($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { id } = $$props;
    const toEdit = Boolean(id);
    let availableShops = [];
    let assignedShops = [];
    let searchState = "";
    let saving = false;
    let errors = {};
    let globalError = null;
    let userForm = {
      name: "",
      username: "",
      password: "",
      role: "",
      status: false,
      shopIds: []
    };
    const assignShop = (shop) => {
      availableShops = availableShops.filter((s) => s.code !== shop.code);
      assignedShops = [...assignedShops, shop];
    };
    const unassignShop = (shop) => {
      assignedShops = assignedShops.filter((s) => s.code !== shop.code);
      availableShops = [...availableShops, shop];
    };
    const handleSave = async (e) => {
      e.preventDefault();
      saving = true;
      errors = {};
      globalError = null;
      let resultData = userForm;
      if (!toEdit) {
        const result = userSchema.safeParse(userForm);
        if (!result.success) {
          errors = Object.fromEntries(result.error.issues.map((issue) => [
            issue.path[0],
            store_get($$store_subs ??= {}, "$t", $format)(issue.message)
          ]));
          saving = false;
          return;
        }
        resultData = result.data;
      }
      try {
        let userId;
        if (toEdit && id) {
          await updateUser(id, resultData);
          userId = id;
        } else {
          const newUser = await createUser(resultData);
          userId = newUser.id;
        }
        const refreshed = await getUserById(userId);
        if (refreshed.role === "manager" && refreshed.status) {
          await attachShopsToUser(userId, { shopIds: assignedShops.map((shop) => shop.id) });
        }
        goto("/admin/users");
      } catch (err) {
        globalError = getErrorMessage(err, store_get($$store_subs ??= {}, "$t", $format));
      } finally {
        saving = false;
      }
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="p-4 lg:ml-64">`);
      if (globalError) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm"><p class="text-md text-destructive-foreground font-medium text-neutral-50">${escape_html(globalError)}</p></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<div class="py-4">`);
          if (globalError) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="mt-4rounded-md mx-10 border border-red-200 bg-red-50 p-3 text-sm text-red-700">${escape_html(globalError)}</div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></div> <div class="flex flex-col px-4 py-6 space-y-8"><div class="flex gap-4">`);
          BackBtn($$renderer3, { onRedirect: () => goto() });
          $$renderer3.push(`<!----> <h2 class="text-left text-xl font-bold">${escape_html(toEdit ? store_get($$store_subs ??= {}, "$t", $format)("user.form.editTitle") : store_get($$store_subs ??= {}, "$t", $format)("user.form.addTitle"))}</h2></div> `);
          UserForm($$renderer3, {
            showPassword: !toEdit,
            errors,
            get values() {
              return userForm;
            },
            set values($$value) {
              userForm = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> `);
          if (toEdit && userForm.role === "manager") {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="flex flex-col gap-10 md:flex-row"><div class="flex flex-1">`);
            ShopListTable($$renderer3, { availableShops, assignShop, searchState });
            $$renderer3.push(`<!----></div> <div class="flex flex-1">`);
            AssigningToUserTable($$renderer3, { assignedShops, unassignShop, searchState });
            $$renderer3.push(`<!----></div></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <div class="flex justify-end">`);
          Button($$renderer3, {
            onclick: handleSave,
            variant: "submit",
            type: "submit",
            disabled: saving,
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(saving ? store_get($$store_subs ??= {}, "$t", $format)("user.form.savingBtn") : store_get($$store_subs ??= {}, "$t", $format)("user.form.saveBtn"))}`);
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

export { UserSettingsView as U };
//# sourceMappingURL=UserSettingsView-DaXF9_fd.js.map
