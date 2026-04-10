import { c as attributes, d as clsx } from './index2-DOUSrPB8.js';
import { c as cn } from './utils3-CULcwRUd.js';
import { T } from './button-D4P53Vk1.js';

const inputGroupAddonVariants = T({
  base: "text-muted-foreground flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 text-sm font-medium group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  variants: {
    align: {
      "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]",
      "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
      "block-start": "[.border-b]:pb-3 order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5",
      "block-end": "[.border-t]:pt-3 order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5"
    }
  },
  defaultVariants: { align: "inline-start" }
});
function Input_group_addon($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      class: className,
      children,
      align = "inline-start",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div${attributes({
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      class: clsx(cn(inputGroupAddonVariants({ align }), className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
T({
  base: "flex items-center gap-2 text-sm shadow-none",
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-2 has-[>svg]:px-2 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "h-8 gap-1.5 rounded-md px-2.5 has-[>svg]:px-2.5",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: { size: "xs" }
});
const filterItems = (items, searchTerm) => {
  if (!searchTerm) return items;
  const lower = searchTerm.toLowerCase();
  return items.filter((item) => {
    const nameMatch = item.name?.toLowerCase().includes(lower);
    const codeMatch = item.code?.toString().toLowerCase().includes(lower);
    const vatMatch = item.vat?.toString().toLowerCase().includes(lower);
    return nameMatch || codeMatch || vatMatch;
  });
};

export { Input_group_addon as I, filterItems as f };
//# sourceMappingURL=filterShops-Dmbu1RtS.js.map
