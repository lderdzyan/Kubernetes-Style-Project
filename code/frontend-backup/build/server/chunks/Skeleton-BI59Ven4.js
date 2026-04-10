import { k as ensure_array_like, c as attributes, d as clsx, e as bind_props } from './index2-DOUSrPB8.js';
import { c as cn } from './utils3-CULcwRUd.js';

function Skeleton($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      "data-slot": "skeleton",
      class: clsx(cn("bg-accent animate-pulse rounded-md", className)),
      ...restProps
    })}></div>`);
    bind_props($$props, { ref });
  });
}
function Skeleton_1($$renderer, $$props) {
  let { title = "Տվյալները բեռնվում են․․․", rows = 5 } = $$props;
  $$renderer.push(`<div class="flex flex-col gap-6 p-6"><div class="flex items-center justify-between">`);
  Skeleton($$renderer, { class: "h-6 w-48 rounded-md" });
  $$renderer.push(`<!----> `);
  Skeleton($$renderer, { class: "h-8 w-28 rounded-md" });
  $$renderer.push(`<!----></div> <div class="rounded-md border border-gray-200"><!--[-->`);
  const each_array = ensure_array_like(Array(rows));
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    each_array[$$index];
    $$renderer.push(`<div class="flex items-center justify-between border-b px-4 py-3 last:border-b-0"><div class="flex gap-4">`);
    Skeleton($$renderer, { class: "h-4 w-32 rounded-md" });
    $$renderer.push(`<!----> `);
    Skeleton($$renderer, { class: "h-4 w-24 rounded-md" });
    $$renderer.push(`<!----> `);
    Skeleton($$renderer, { class: "h-4 w-20 rounded-md" });
    $$renderer.push(`<!----></div> <div class="flex gap-2">`);
    Skeleton($$renderer, { class: "h-8 w-8 rounded-md" });
    $$renderer.push(`<!----> `);
    Skeleton($$renderer, { class: "h-8 w-8 rounded-md" });
    $$renderer.push(`<!----> `);
    Skeleton($$renderer, { class: "h-5 w-10 rounded-full" });
    $$renderer.push(`<!----></div></div>`);
  }
  $$renderer.push(`<!--]--></div></div>`);
}

export { Skeleton_1 as S };
//# sourceMappingURL=Skeleton-BI59Ven4.js.map
