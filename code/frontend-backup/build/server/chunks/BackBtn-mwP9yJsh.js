import { a as store_get, u as unsubscribe_stores, q as sanitize_props, g as spread_props, t as slot } from './index2-DOUSrPB8.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import { P as Provider, R as Root, T as Tooltip_trigger, a as Tooltip_content } from './index4-BCiEosLg.js';
import { B as Button } from './button-D4P53Vk1.js';
import { I as Icon } from './Icon-yySV564o.js';

function Arrow_left($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-left" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTktNy03IDctNyIgLz4KICA8cGF0aCBkPSJNMTkgMTJINSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left
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
function Tooltip_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      innerText: innerText2,
      onClick,
      message,
      variant = "default",
      size = "icon",
      class: classname = " "
    } = $$props;
    $$renderer2.push(`<!---->`);
    Provider($$renderer2, {
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Root($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Tooltip_trigger($$renderer4, {
              children: ($$renderer5) => {
                Button($$renderer5, {
                  class: classname,
                  variant,
                  size,
                  onclick: () => onClick(),
                  children: ($$renderer6) => {
                    innerText2($$renderer6);
                    $$renderer6.push(`<!---->`);
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!----> <!---->`);
            Tooltip_content($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<p>${escape_html(message)}</p>`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!---->`);
  });
}
function innerText($$renderer) {
  Arrow_left($$renderer, {});
}
function BackBtn($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { onRedirect } = $$props;
    Tooltip_1($$renderer2, {
      innerText,
      message: store_get($$store_subs ??= {}, "$t", $format)("global.redirectBtn"),
      onClick: onRedirect,
      size: "sm",
      variant: "outline",
      class: "border-2 border-gray-800"
    });
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { BackBtn as B };
//# sourceMappingURL=BackBtn-mwP9yJsh.js.map
