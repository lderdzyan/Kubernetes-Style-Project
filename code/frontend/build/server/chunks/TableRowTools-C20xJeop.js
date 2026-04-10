import { a as store_get, e as bind_props, u as unsubscribe_stores, q as sanitize_props, g as spread_props, t as slot, p as props_id, c as attributes, d as clsx } from './index2-DOUSrPB8.js';
import { B as Button } from './button-D4P53Vk1.js';
import { R as Root$1, D as Dialog_content, a as DialogTriggerState, b as Dialog_header, c as Dialog_title, d as Dialog_close$1 } from './index5-CqjlhqYn.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { P as Provider, R as Root, T as Tooltip_trigger, a as Tooltip_content } from './index4-BCiEosLg.js';
import { c as createId, b as boxWith, m as mergeProps } from './create-id-BvW60KIR.js';
import { C as Circle_x } from './circle-x-hqj4Z3JR.js';
import { c as cn } from './utils3-CULcwRUd.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import { S as Switch } from './switch-DurVX8Id.js';
import { I as Icon } from './Icon-yySV564o.js';

function Dialog_trigger$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      ref = null,
      children,
      child,
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const triggerState = DialogTriggerState.create({
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, triggerState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Pencil($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
      }
    ],
    ["path", { "d": "m15 5 4 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "pencil" },
    $$sanitized_props,
    {
      /**
       * @component @name Pencil
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuMTc0IDYuODEyYTEgMSAwIDAgMC0zLjk4Ni0zLjk4N0wzLjg0MiAxNi4xNzRhMiAyIDAgMCAwLS41LjgzbC0xLjMyMSA0LjM1MmEuNS41IDAgMCAwIC42MjMuNjIybDQuMzUzLTEuMzJhMiAyIDAgMCAwIC44My0uNDk3eiIgLz4KICA8cGF0aCBkPSJtMTUgNSA0IDQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/pencil
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
function Dialog_footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "dialog-footer",
      class: clsx(cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
    bind_props($$props, { ref });
  });
}
function Dialog_trigger($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, $$slots, $$events, ...restProps } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog_trigger$1($$renderer3, spread_props([
        { "data-slot": "dialog-trigger" },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function Dialog_close($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, $$slots, $$events, ...restProps } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Dialog_close$1($$renderer3, spread_props([
        { "data-slot": "dialog-close" },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          }
        }
      ]));
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { ref });
  });
}
function DeleteModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { open = false, title, onDelete, trigger = "icon" } = $$props;
    let isDeleting = false;
    $$renderer2.push(`<!---->`);
    Root$1($$renderer2, {
      open,
      onOpenChange: (isOpen) => open = isOpen,
      children: ($$renderer3) => {
        if (trigger === "icon") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!---->`);
          Dialog_trigger($$renderer3, {
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->`);
              Provider($$renderer4, {
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Root($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Tooltip_trigger($$renderer6, {
                        children: ($$renderer7) => {
                          Button($$renderer7, {
                            variant: "destructive",
                            size: "sm",
                            class: "hover:bg-red-900",
                            children: ($$renderer8) => {
                              Circle_x($$renderer8, {});
                            },
                            $$slots: { default: true }
                          });
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!----> <!---->`);
                      Tooltip_content($$renderer6, {
                        children: ($$renderer7) => {
                          $$renderer7.push(`<p>${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.modal.deleteBtn"))}</p>`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                }
              });
              $$renderer4.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!---->`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (trigger === "button") {
            $$renderer3.push("<!--[-->");
            Button($$renderer3, {
              onclick: () => open = true,
              variant: "destructive",
              size: "default",
              children: ($$renderer4) => {
                $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.details.deleteBtn"))}`);
              },
              $$slots: { default: true }
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--> <!---->`);
        Dialog_content($$renderer3, {
          class: "sm:max-w-[400px]",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Dialog_header($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Dialog_title($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->${escape_html(title)}`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Dialog_footer($$renderer4, {
              class: "flex justify-end gap-2",
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Dialog_close($$renderer5, {
                  children: ($$renderer6) => {
                    Button($$renderer6, {
                      size: "sm",
                      variant: "outline",
                      children: ($$renderer7) => {
                        $$renderer7.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.modal.cancelBtn"))}`);
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> `);
                Button($$renderer5, {
                  size: "sm",
                  variant: "destructive",
                  disabled: isDeleting,
                  onclick: async () => {
                    isDeleting = true;
                    await onDelete();
                    isDeleting = false;
                    open = false;
                  },
                  children: ($$renderer6) => {
                    if (isDeleting) {
                      $$renderer6.push("<!--[-->");
                      $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.modal.deleting"))}`);
                    } else {
                      $$renderer6.push("<!--[!-->");
                      $$renderer6.push(`${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.modal.deleteBtn"))}`);
                    }
                    $$renderer6.push(`<!--]-->`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { open });
  });
}
function TableRowTools($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { id, status, onEdit, onDelete, onToggleStatus } = $$props;
    let currentStatus = status;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex items-center justify-end gap-2">`);
      if (onEdit) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<!---->`);
        Provider($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Root($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Tooltip_trigger($$renderer5, {
                  children: ($$renderer6) => {
                    Button($$renderer6, {
                      onclick: () => onEdit(id),
                      size: "sm",
                      variant: "default",
                      class: "bg-indigo-400",
                      children: ($$renderer7) => {
                        Pencil($$renderer7, {});
                      },
                      $$slots: { default: true }
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Tooltip_content($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<p>${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.editIcon"))}</p>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (onDelete) {
        $$renderer3.push("<!--[-->");
        DeleteModal($$renderer3, {
          title: store_get($$store_subs ??= {}, "$t", $format)("global.modal.deleteTxt"),
          onDelete: () => onDelete(id)
        });
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--> `);
      if (status !== void 0) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<!---->`);
        Provider($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Root($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Tooltip_trigger($$renderer5, {
                  children: ($$renderer6) => {
                    Switch($$renderer6, {
                      get checked() {
                        return currentStatus;
                      },
                      set checked($$value) {
                        currentStatus = $$value;
                        $$settled = false;
                      }
                    });
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!---->`);
                Tooltip_content($$renderer5, {
                  children: ($$renderer6) => {
                    $$renderer6.push(`<p>${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.statusChange"))}</p>`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!---->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          }
        });
        $$renderer3.push(`<!---->`);
      } else {
        $$renderer3.push("<!--[!-->");
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

export { TableRowTools as T };
//# sourceMappingURL=TableRowTools-C20xJeop.js.map
