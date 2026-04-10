import { c as attributes, d as clsx, e as bind_props } from './index2-DOUSrPB8.js';
import { c as cn } from './utils3-CULcwRUd.js';

function Input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      value = void 0,
      type,
      files = void 0,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    if (type === "file") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<input${attributes(
        {
          "data-slot": "input",
          class: clsx(cn("selection:bg-primary dark:bg-input/30 selection:text-primary-foreground border-input ring-offset-background placeholder:text-muted-foreground shadow-xs flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 pt-1.5 text-sm font-medium outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className)),
          type: "file",
          ...restProps
        },
        void 0,
        void 0,
        void 0,
        4
      )}/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<input${attributes(
        {
          "data-slot": "input",
          class: clsx(cn("border-input bg-background selection:bg-primary dark:bg-input/30 selection:text-primary-foreground ring-offset-background placeholder:text-muted-foreground shadow-xs flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base outline-none transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className)),
          type,
          value,
          ...restProps
        },
        void 0,
        void 0,
        void 0,
        4
      )}/>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref, value, files });
  });
}

export { Input as I };
//# sourceMappingURL=input-BEGZqDUD.js.map
