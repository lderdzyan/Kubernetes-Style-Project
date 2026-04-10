import { e as bind_props, g as spread_props, p as props_id, c as attributes, l as derived, d as clsx, k as ensure_array_like, a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { c as cn } from './utils3-CULcwRUd.js';
import { c as createId, n as noop, b as boxWith, m as mergeProps, C as Context, a as attachRef, d as createBitsAttrs, S as SPACE, E as ENTER, e as END, H as HOME } from './create-id-BvW60KIR.js';
import { g as getElemDirection, a as getDirectionalKeys } from './get-directional-keys-C8x8L_RC.js';
import { u as useId } from './scroll-lock-DIDEeqvf.js';
import { b as buttonVariants } from './button-D4P53Vk1.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import { I as Icon } from './Icon2-BWXQHaRg.js';
import { b as $format } from './runtime-CCkVflQ7.js';

const paginationAttrs = createBitsAttrs({
  component: "pagination",
  parts: ["root", "page", "prev", "next"]
});
const PaginationRootContext = new Context("Pagination.Root");
class PaginationRootState {
  static create(opts) {
    return PaginationRootContext.set(new PaginationRootState(opts));
  }
  opts;
  attachment;
  #totalPages = derived(() => {
    if (this.opts.count.current === 0) return 1;
    return Math.ceil(this.opts.count.current / this.opts.perPage.current);
  });
  get totalPages() {
    return this.#totalPages();
  }
  set totalPages($$value) {
    return this.#totalPages($$value);
  }
  #range = derived(() => {
    const start = (this.opts.page.current - 1) * this.opts.perPage.current;
    const end = Math.min(start + this.opts.perPage.current, this.opts.count.current);
    return { start: start + 1, end };
  });
  get range() {
    return this.#range();
  }
  set range($$value) {
    return this.#range($$value);
  }
  #pages = derived(() => getPageItems({
    page: this.opts.page.current,
    totalPages: this.totalPages,
    siblingCount: this.opts.siblingCount.current
  }));
  get pages() {
    return this.#pages();
  }
  set pages($$value) {
    return this.#pages($$value);
  }
  #hasPrevPage = derived(() => this.opts.page.current > 1);
  get hasPrevPage() {
    return this.#hasPrevPage();
  }
  set hasPrevPage($$value) {
    return this.#hasPrevPage($$value);
  }
  #hasNextPage = derived(() => this.opts.page.current < this.totalPages);
  get hasNextPage() {
    return this.#hasNextPage();
  }
  set hasNextPage($$value) {
    return this.#hasNextPage($$value);
  }
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
  }
  setPage(page) {
    this.opts.page.current = page;
  }
  getPageTriggerNodes() {
    const node = this.opts.ref.current;
    if (!node) return [];
    return Array.from(node.querySelectorAll("[data-pagination-page]"));
  }
  getButtonNode(type) {
    const node = this.opts.ref.current;
    if (!node) return;
    return node.querySelector(paginationAttrs.selector(type));
  }
  prevPage() {
    this.opts.page.current = Math.max(this.opts.page.current - 1, 1);
  }
  nextPage() {
    this.opts.page.current = Math.min(this.opts.page.current + 1, this.totalPages);
  }
  #snippetProps = derived(() => ({
    pages: this.pages,
    range: this.range,
    currentPage: this.opts.page.current
  }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "data-orientation": this.opts.orientation.current,
    [paginationAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class PaginationPageState {
  static create(opts) {
    return new PaginationPageState(opts, PaginationRootContext.get());
  }
  opts;
  root;
  attachment;
  #isSelected = derived(() => this.opts.page.current.value === this.root.opts.page.current);
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    this.root.setPage(this.opts.page.current.value);
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.root.setPage(this.opts.page.current.value);
    } else {
      handleTriggerKeydown(e, this.opts.ref.current, this.root);
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    "aria-label": `Page ${this.opts.page.current.value}`,
    "data-value": `${this.opts.page.current.value}`,
    "data-selected": this.#isSelected() ? "" : void 0,
    [paginationAttrs.page]: "",
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class PaginationButtonState {
  static create(opts) {
    return new PaginationButtonState(opts, PaginationRootContext.get());
  }
  opts;
  root;
  attachment;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
  }
  #action() {
    this.opts.type === "prev" ? this.root.prevPage() : this.root.nextPage();
  }
  #isDisabled = derived(() => {
    if (this.opts.disabled.current) return true;
    if (this.opts.type === "prev") return !this.root.hasPrevPage;
    if (this.opts.type === "next") return !this.root.hasNextPage;
    return false;
  });
  onclick(e) {
    if (this.opts.disabled.current) return;
    if (e.button !== 0) return;
    this.#action();
  }
  onkeydown(e) {
    if (e.key === SPACE || e.key === ENTER) {
      e.preventDefault();
      this.#action();
    } else {
      handleTriggerKeydown(e, this.opts.ref.current, this.root);
    }
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    [paginationAttrs[this.opts.type]]: "",
    disabled: this.#isDisabled(),
    //
    onclick: this.onclick,
    onkeydown: this.onkeydown,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function handleTriggerKeydown(e, node, root) {
  if (!node || !root.opts.ref.current) return;
  const items = root.getPageTriggerNodes();
  const nextButton = root.getButtonNode("next");
  const prevButton = root.getButtonNode("prev");
  if (prevButton) {
    items.unshift(prevButton);
  }
  if (nextButton) {
    items.push(nextButton);
  }
  const currentIndex = items.indexOf(node);
  const dir = getElemDirection(root.opts.ref.current);
  const { nextKey, prevKey } = getDirectionalKeys(dir, root.opts.orientation.current);
  const loop = root.opts.loop.current;
  const keyToIndex = {
    [nextKey]: currentIndex + 1,
    [prevKey]: currentIndex - 1,
    [HOME]: 0,
    [END]: items.length - 1
  };
  let itemIndex = keyToIndex[e.key];
  if (itemIndex === void 0) return;
  e.preventDefault();
  if (itemIndex < 0 && loop) {
    itemIndex = items.length - 1;
  } else if (itemIndex === items.length && loop) {
    itemIndex = 0;
  }
  const itemToFocus = items[itemIndex];
  if (!itemToFocus) return;
  itemToFocus.focus();
}
function getPageItems({ page = 1, totalPages, siblingCount = 1 }) {
  const pageItems = [];
  const pagesToShow = /* @__PURE__ */ new Set([1, totalPages]);
  const firstItemWithSiblings = 3 + siblingCount;
  const lastItemWithSiblings = totalPages - 2 - siblingCount;
  if (firstItemWithSiblings > lastItemWithSiblings) {
    for (let i = 2; i <= totalPages - 1; i++) {
      pagesToShow.add(i);
    }
  } else if (page < firstItemWithSiblings) {
    for (let i = 2; i <= Math.min(firstItemWithSiblings, totalPages); i++) {
      pagesToShow.add(i);
    }
  } else if (page > lastItemWithSiblings) {
    for (let i = totalPages - 1; i >= Math.max(lastItemWithSiblings, 2); i--) {
      pagesToShow.add(i);
    }
  } else {
    for (let i = Math.max(page - siblingCount, 2); i <= Math.min(page + siblingCount, totalPages); i++) {
      pagesToShow.add(i);
    }
  }
  function addPage(value) {
    pageItems.push({ type: "page", value, key: `page-${value}` });
  }
  function addEllipsis() {
    const id = useId();
    pageItems.push({ type: "ellipsis", key: `ellipsis-${id}` });
  }
  let lastNumber = 0;
  for (const p of Array.from(pagesToShow).sort((a, b) => a - b)) {
    if (p - lastNumber > 1) {
      addEllipsis();
    }
    addPage(p);
    lastNumber = p;
  }
  return pageItems;
}
function Pagination$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      count,
      perPage = 1,
      page = 1,
      ref = null,
      siblingCount = 1,
      onPageChange = noop,
      loop = false,
      orientation = "horizontal",
      child,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = PaginationRootState.create({
      id: boxWith(() => id),
      count: boxWith(() => count),
      perPage: boxWith(() => perPage),
      page: boxWith(() => page, (v) => {
        page = v;
        onPageChange?.(v);
      }),
      loop: boxWith(() => loop),
      siblingCount: boxWith(() => siblingCount),
      orientation: boxWith(() => orientation),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, rootState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps, ...rootState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2, rootState.snippetProps);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { page, ref });
  });
}
function Pagination_prev_button$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      child,
      children,
      ref = null,
      type = "button",
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const prevButtonState = PaginationButtonState.create({
      type: "prev",
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, prevButtonState.props, { type });
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
function Pagination_next_button$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      child,
      children,
      ref = null,
      type = "button",
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const nextButtonState = PaginationButtonState.create({
      type: "next",
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, nextButtonState.props, { type });
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
function Pagination_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      page,
      child,
      children,
      type = "button",
      ref = null,
      disabled = false,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const pageState = PaginationPageState.create({
      id: boxWith(() => id),
      page: boxWith(() => page),
      ref: boxWith(() => ref, (v) => ref = v),
      disabled: boxWith(() => Boolean(disabled))
    });
    const mergedProps = mergeProps(restProps, pageState.props, { type });
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps })}>`);
      if (children) {
        $$renderer2.push("<!--[-->");
        children?.($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`${escape_html(page.value)}`);
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
function Chevron_left($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
    Icon($$renderer2, spread_props([
      { name: "chevron-left" },
      /**
       * @component @name ChevronLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTUgMTgtNi02IDYtNiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/chevron-left
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Chevron_right($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
    Icon($$renderer2, spread_props([
      { name: "chevron-right" },
      /**
       * @component @name ChevronRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOSAxOCA2LTYtNi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/chevron-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Pagination($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      count = 0,
      perPage = 10,
      page = 1,
      siblingCount = 1,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Pagination$1($$renderer3, spread_props([
        {
          role: "navigation",
          "aria-label": "pagination",
          "data-slot": "pagination",
          class: cn("mx-auto flex w-full justify-center", className),
          count,
          perPage,
          siblingCount
        },
        restProps,
        {
          get ref() {
            return ref;
          },
          set ref($$value) {
            ref = $$value;
            $$settled = false;
          },
          get page() {
            return page;
          },
          set page($$value) {
            page = $$value;
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
    bind_props($$props, { ref, page });
  });
}
function Pagination_content($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<ul${attributes({
      "data-slot": "pagination-content",
      class: clsx(cn("flex flex-row items-center gap-1", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></ul>`);
    bind_props($$props, { ref });
  });
}
function Pagination_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ref = null, children, $$slots, $$events, ...restProps } = $$props;
    $$renderer2.push(`<li${attributes({ "data-slot": "pagination-item", ...restProps })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></li>`);
    bind_props($$props, { ref });
  });
}
function Pagination_link($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      size = "icon",
      isActive,
      page,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    function Fallback2($$renderer3) {
      $$renderer3.push(`<!---->${escape_html(page.value)}`);
    }
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Pagination_page($$renderer3, spread_props([
        {
          page,
          "aria-current": isActive ? "page" : void 0,
          "data-slot": "pagination-link",
          "data-active": isActive,
          class: cn(buttonVariants({ variant: isActive ? "outline" : "ghost", size }), className),
          children: children || Fallback2
        },
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
function Fallback$1($$renderer) {
  Chevron_left($$renderer, { class: "size-4" });
  $$renderer.push(`<!----> <span>Previous</span>`);
}
function Pagination_prev_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Pagination_prev_button$1($$renderer3, spread_props([
        {
          "aria-label": "Go to previous page",
          class: cn(
            buttonVariants({
              size: "default",
              variant: "ghost",
              class: "gap-1 px-2.5 sm:pl-2.5"
            }),
            className
          ),
          children: children || Fallback$1
        },
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
function Fallback($$renderer) {
  $$renderer.push(`<span>Next</span> `);
  Chevron_right($$renderer, { class: "size-4" });
  $$renderer.push(`<!---->`);
}
function Pagination_next_button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Pagination_next_button$1($$renderer3, spread_props([
        {
          "aria-label": "Go to next page",
          class: cn(
            buttonVariants({
              size: "default",
              variant: "ghost",
              class: "gap-1 px-2.5 sm:pr-2.5"
            }),
            className
          ),
          children: children || Fallback
        },
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
function Ellipsis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [
      ["circle", { "cx": "12", "cy": "12", "r": "1" }],
      ["circle", { "cx": "19", "cy": "12", "r": "1" }],
      ["circle", { "cx": "5", "cy": "12", "r": "1" }]
    ];
    Icon($$renderer2, spread_props([
      { name: "ellipsis" },
      /**
       * @component @name Ellipsis
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjE5IiBjeT0iMTIiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/ellipsis
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      props,
      {
        iconNode,
        children: ($$renderer3) => {
          props.children?.($$renderer3);
          $$renderer3.push(`<!---->`);
        },
        $$slots: { default: true }
      }
    ]));
  });
}
function Pagination_ellipsis($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<span${attributes({
      "aria-hidden": "true",
      "data-slot": "pagination-ellipsis",
      class: clsx(cn("flex size-9 items-center justify-center", className)),
      ...restProps
    })}>`);
    Ellipsis($$renderer2, { class: "size-4" });
    $$renderer2.push(`<!----> <span class="sr-only">More pages</span></span>`);
    bind_props($$props, { ref });
  });
}
function Pagination_1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { count, perPage, siblingCount = 1, page = 1 } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="mt-8"><!---->`);
      {
        let children = function($$renderer4, { pages, currentPage }) {
          $$renderer4.push(`<!---->`);
          Pagination_content($$renderer4, {
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->`);
              Pagination_item($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Pagination_prev_button($$renderer6, {
                    children: ($$renderer7) => {
                      Chevron_left($$renderer7, { class: "size-4" });
                      $$renderer7.push(`<!----> <span class="hidden sm:block">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.previous"))}</span>`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!----> <!--[-->`);
              const each_array = ensure_array_like(pages);
              for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                let page2 = each_array[$$index];
                if (page2.type === "ellipsis") {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<!---->`);
                  Pagination_item($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Pagination_ellipsis($$renderer6, {});
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                } else {
                  $$renderer5.push("<!--[!-->");
                  $$renderer5.push(`<!---->`);
                  Pagination_item($$renderer5, {
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->`);
                      Pagination_link($$renderer6, {
                        page: page2,
                        isActive: currentPage === page2.value,
                        children: ($$renderer7) => {
                          $$renderer7.push(`<!---->${escape_html(page2.value)}`);
                        },
                        $$slots: { default: true }
                      });
                      $$renderer6.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                }
                $$renderer5.push(`<!--]-->`);
              }
              $$renderer5.push(`<!--]--> <!---->`);
              Pagination_item($$renderer5, {
                children: ($$renderer6) => {
                  $$renderer6.push(`<!---->`);
                  Pagination_next_button($$renderer6, {
                    children: ($$renderer7) => {
                      $$renderer7.push(`<span class="hidden sm:block">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.next"))}</span> `);
                      Chevron_right($$renderer7, { class: "size-4" });
                      $$renderer7.push(`<!---->`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer6.push(`<!---->`);
                },
                $$slots: { default: true }
              });
              $$renderer5.push(`<!---->`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!---->`);
        };
        Pagination($$renderer3, {
          count,
          perPage,
          siblingCount,
          get page() {
            return page;
          },
          set page($$value) {
            page = $$value;
            $$settled = false;
          },
          children,
          $$slots: { default: true }
        });
      }
      $$renderer3.push(`<!----></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    if ($$store_subs) unsubscribe_stores($$store_subs);
    bind_props($$props, { page });
  });
}

export { Pagination_1 as P };
//# sourceMappingURL=Pagination-CIYodED5.js.map
