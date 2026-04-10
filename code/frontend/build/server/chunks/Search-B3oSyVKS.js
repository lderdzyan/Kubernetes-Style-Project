import { e as bind_props, c as attributes, d as clsx, a as store_get, u as unsubscribe_stores, g as spread_props, q as sanitize_props, t as slot } from './index2-DOUSrPB8.js';
import { c as cn } from './utils3-CULcwRUd.js';
import { I as Input_group_addon } from './filterShops-Dmbu1RtS.js';
import { I as Input } from './input-BEGZqDUD.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { I as Icon } from './Icon-yySV564o.js';

function Search$1($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m21 21-4.34-4.34" }],
    ["circle", { "cx": "11", "cy": "11", "r": "8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "search" },
    $$sanitized_props,
    {
      /**
       * @component @name Search
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEgMjEtNC4zNC00LjM0IiAvPgogIDxjaXJjbGUgY3g9IjExIiBjeT0iMTEiIHI9IjgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/search
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
function X($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
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
function Input_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { class: className, children, $$slots, $$events, ...props } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "input-group",
      role: "group",
      class: clsx(cn(
        "group/input-group border-input dark:bg-input/30 shadow-xs relative flex w-full items-center rounded-md border outline-none transition-[color,box-shadow]",
        "h-9 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        className
      )),
      ...props
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
function Input_group_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      value = void 0,
      class: className,
      $$slots,
      $$events,
      ...props
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Input($$renderer3, spread_props([
        {
          "data-slot": "input-group-control",
          class: cn("flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent", className)
        },
        props,
        {
          get value() {
            return value;
          },
          set value($$value) {
            value = $$value;
            $$settled = false;
          }
        }
      ]));
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { value });
  });
}
function Search($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { value = "", class: className = "", delay = 400 } = $$props;
    let query = value;
    const clearSearch = () => {
      value = "";
      query = "";
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Input_group($$renderer3, {
        class: "relative w-full max-w-xs",
        children: ($$renderer4) => {
          $$renderer4.push(`<!---->`);
          Input_group_input($$renderer4, {
            placeholder: store_get($$store_subs ??= {}, "$t", $format)("global.search.placeholder"),
            get value() {
              return query;
            },
            set value($$value) {
              query = $$value;
              $$settled = false;
            }
          });
          $$renderer4.push(`<!----> <!---->`);
          Input_group_addon($$renderer4, {
            children: ($$renderer5) => {
              Search$1($$renderer5, { class: "relative z-11" });
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----> <!---->`);
          Input_group_addon($$renderer4, {
            align: "inline-end",
            children: ($$renderer5) => {
              X($$renderer5, { class: "relative z-10 cursor-pointer", onclick: clearSearch });
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
    bind_props($$props, { value });
  });
}

export { Search as S };
//# sourceMappingURL=Search-B3oSyVKS.js.map
