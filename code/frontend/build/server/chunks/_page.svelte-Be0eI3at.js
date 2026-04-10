import { a as store_get, e as bind_props, g as spread_props, p as props_id, c as attributes, l as derived, b as attr_class, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { g as goto } from './client2-D3SYLe3u.js';
import { a as apiRequest, A as API_PATHS } from './requests-D2a_9uvJ.js';
import { L as Label } from './label-CSmSN8-j.js';
import { c as cn } from './utils3-CULcwRUd.js';
import { c as createId, n as noop, b as boxWith, m as mergeProps, C as Context, a as attachRef, d as createBitsAttrs, e as END, H as HOME, F as isWritableSymbol, G as BoxSymbol, f as ARROW_DOWN, q as ARROW_RIGHT, A as ARROW_UP, r as ARROW_LEFT, y as boxFrom, I as boxFlatten, J as toReadonlyBox, K as isBox, L as isWritableBox, w as watch, S as SPACE, h as boolToEmptyStrOrUndef, j as boolToStr, p as getAriaChecked } from './create-id-BvW60KIR.js';
import { g as getElemDirection, a as getDirectionalKeys } from './get-directional-keys-C8x8L_RC.js';
import { k as isHTMLElement } from './scroll-lock-DIDEeqvf.js';
import { H as Hidden_input } from './hidden-input-X0KJrKYW.js';
import { I as Icon } from './Icon2-BWXQHaRg.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { a2 as escape_html } from './index-D86wc3w8.js';
import { S as Spinner } from './Spinner-D3hQ6e33.js';
import { T as TableRowTools } from './TableRowTools-C20xJeop.js';
import { T as TableData } from './TableData-C3Qzhza7.js';
import { B as Button } from './button-D4P53Vk1.js';
import { c as createOrder, r as resetOrder, d as decreaseQuantity, i as increaseQuantity } from './orders.svelte-CrkfcYYS.js';
import { g as getErrorMessage } from './handleError-CR-QhlYX.js';
import { M as Minus, P as Plus } from './plus-BC6L-Yt6.js';
import './utils2-DeZkPw4J.js';
import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import './url-DBJznBgq.js';
import 'jwt-decode';
import './shared-server-BU2DVf8Q.js';
import './index-server-_G0R5Qhl.js';
import './events-DoXlNskp.js';
import './index5-CqjlhqYn.js';
import './index4-BCiEosLg.js';
import './popper-layer-force-mount-CcCObC6r.js';
import './circle-x-hqj4Z3JR.js';
import './Icon-yySV564o.js';
import './switch-DurVX8Id.js';
import './product2-CjFRccXX.js';

function box(initialValue) {
  let current = initialValue;
  return {
    [BoxSymbol]: true,
    [isWritableSymbol]: true,
    get current() {
      return current;
    },
    set current(v) {
      current = v;
    }
  };
}
box.from = boxFrom;
box.with = boxWith;
box.flatten = boxFlatten;
box.readonly = toReadonlyBox;
box.isBox = isBox;
box.isWritableBox = isWritableBox;
class RovingFocusGroup {
  #opts;
  #currentTabStopId = box(null);
  constructor(opts) {
    this.#opts = opts;
  }
  getCandidateNodes() {
    return [];
  }
  focusFirstCandidate() {
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    items[0]?.focus();
  }
  handleKeydown(node, e, both = false) {
    const rootNode = this.#opts.rootNode.current;
    if (!rootNode || !node)
      return;
    const items = this.getCandidateNodes();
    if (!items.length)
      return;
    const currentIndex = items.indexOf(node);
    const dir = getElemDirection(rootNode);
    const { nextKey, prevKey } = getDirectionalKeys(dir, this.#opts.orientation.current);
    const loop = this.#opts.loop.current;
    const keyToIndex = {
      [nextKey]: currentIndex + 1,
      [prevKey]: currentIndex - 1,
      [HOME]: 0,
      [END]: items.length - 1
    };
    if (both) {
      const altNextKey = nextKey === ARROW_DOWN ? ARROW_RIGHT : ARROW_DOWN;
      const altPrevKey = prevKey === ARROW_UP ? ARROW_LEFT : ARROW_UP;
      keyToIndex[altNextKey] = currentIndex + 1;
      keyToIndex[altPrevKey] = currentIndex - 1;
    }
    let itemIndex = keyToIndex[e.key];
    if (itemIndex === void 0)
      return;
    e.preventDefault();
    if (itemIndex < 0 && loop) {
      itemIndex = items.length - 1;
    } else if (itemIndex === items.length && loop) {
      itemIndex = 0;
    }
    const itemToFocus = items[itemIndex];
    if (!itemToFocus)
      return;
    itemToFocus.focus();
    this.#currentTabStopId.current = itemToFocus.id;
    this.#opts.onCandidateFocus?.(itemToFocus);
    return itemToFocus;
  }
  getTabIndex(node) {
    const items = this.getCandidateNodes();
    const anyActive = this.#currentTabStopId.current !== null;
    if (node && !anyActive && items[0] === node) {
      this.#currentTabStopId.current = node.id;
      return 0;
    } else if (node?.id === this.#currentTabStopId.current) {
      return 0;
    }
    return -1;
  }
  setCurrentTabStopId(id) {
    this.#currentTabStopId.current = id;
  }
  focusCurrentTabStop() {
    const currentTabStopId = this.#currentTabStopId.current;
    if (!currentTabStopId)
      return;
    const currentTabStop = this.#opts.rootNode.current?.querySelector(`#${currentTabStopId}`);
    if (!currentTabStop || !isHTMLElement(currentTabStop))
      return;
    currentTabStop.focus();
  }
}
const radioGroupAttrs = createBitsAttrs({ component: "radio-group", parts: ["root", "item"] });
const RadioGroupRootContext = new Context("RadioGroup.Root");
class RadioGroupRootState {
  static create(opts) {
    return RadioGroupRootContext.set(new RadioGroupRootState(opts));
  }
  opts;
  #hasValue = derived(() => this.opts.value.current !== "");
  get hasValue() {
    return this.#hasValue();
  }
  set hasValue($$value) {
    return this.#hasValue($$value);
  }
  rovingFocusGroup;
  attachment;
  constructor(opts) {
    this.opts = opts;
    this.attachment = attachRef(this.opts.ref);
    this.rovingFocusGroup = new RovingFocusGroup({
      rootNode: this.opts.ref,
      candidateAttr: radioGroupAttrs.item,
      loop: this.opts.loop,
      orientation: this.opts.orientation
    });
  }
  isChecked(value) {
    return this.opts.value.current === value;
  }
  setValue(value) {
    this.opts.value.current = value;
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    role: "radiogroup",
    "aria-required": boolToStr(this.opts.required.current),
    "aria-disabled": boolToStr(this.opts.disabled.current),
    "aria-readonly": this.opts.readonly.current ? "true" : void 0,
    "data-disabled": boolToEmptyStrOrUndef(this.opts.disabled.current),
    "data-readonly": boolToEmptyStrOrUndef(this.opts.readonly.current),
    "data-orientation": this.opts.orientation.current,
    [radioGroupAttrs.root]: "",
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class RadioGroupItemState {
  static create(opts) {
    return new RadioGroupItemState(opts, RadioGroupRootContext.get());
  }
  opts;
  root;
  attachment;
  #checked = derived(() => this.root.opts.value.current === this.opts.value.current);
  get checked() {
    return this.#checked();
  }
  set checked($$value) {
    return this.#checked($$value);
  }
  #isDisabled = derived(() => this.opts.disabled.current || this.root.opts.disabled.current);
  #isReadonly = derived(() => this.root.opts.readonly.current);
  #isChecked = derived(() => this.root.isChecked(this.opts.value.current));
  #tabIndex = -1;
  constructor(opts, root) {
    this.opts = opts;
    this.root = root;
    this.attachment = attachRef(this.opts.ref);
    if (this.opts.value.current === this.root.opts.value.current) {
      this.root.rovingFocusGroup.setCurrentTabStopId(this.opts.id.current);
      this.#tabIndex = 0;
    } else if (!this.root.opts.value.current) {
      this.#tabIndex = 0;
    }
    watch(
      [
        () => this.opts.value.current,
        () => this.root.opts.value.current
      ],
      () => {
        if (this.opts.value.current === this.root.opts.value.current) {
          this.root.rovingFocusGroup.setCurrentTabStopId(this.opts.id.current);
          this.#tabIndex = 0;
        }
      }
    );
    this.onclick = this.onclick.bind(this);
    this.onkeydown = this.onkeydown.bind(this);
    this.onfocus = this.onfocus.bind(this);
  }
  onclick(_) {
    if (this.opts.disabled.current || this.#isReadonly()) return;
    this.root.setValue(this.opts.value.current);
  }
  onfocus(_) {
    if (!this.root.hasValue || this.#isReadonly()) return;
    this.root.setValue(this.opts.value.current);
  }
  onkeydown(e) {
    if (this.#isDisabled()) return;
    if (e.key === SPACE) {
      e.preventDefault();
      if (!this.#isReadonly()) {
        this.root.setValue(this.opts.value.current);
      }
      return;
    }
    this.root.rovingFocusGroup.handleKeydown(this.opts.ref.current, e, true);
  }
  #snippetProps = derived(() => ({ checked: this.#isChecked() }));
  get snippetProps() {
    return this.#snippetProps();
  }
  set snippetProps($$value) {
    return this.#snippetProps($$value);
  }
  #props = derived(() => ({
    id: this.opts.id.current,
    disabled: this.#isDisabled() ? true : void 0,
    "data-value": this.opts.value.current,
    "data-orientation": this.root.opts.orientation.current,
    "data-disabled": boolToEmptyStrOrUndef(this.#isDisabled()),
    "data-readonly": boolToEmptyStrOrUndef(this.#isReadonly()),
    "data-state": this.#isChecked() ? "checked" : "unchecked",
    "aria-checked": getAriaChecked(this.#isChecked()),
    [radioGroupAttrs.item]: "",
    type: "button",
    role: "radio",
    tabindex: this.#tabIndex,
    onkeydown: this.onkeydown,
    onfocus: this.onfocus,
    onclick: this.onclick,
    ...this.attachment
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
class RadioGroupInputState {
  static create() {
    return new RadioGroupInputState(RadioGroupRootContext.get());
  }
  root;
  #shouldRender = derived(() => this.root.opts.name.current !== void 0);
  get shouldRender() {
    return this.#shouldRender();
  }
  set shouldRender($$value) {
    return this.#shouldRender($$value);
  }
  constructor(root) {
    this.root = root;
    this.onfocus = this.onfocus.bind(this);
  }
  onfocus(_) {
    this.root.rovingFocusGroup.focusCurrentTabStop();
  }
  #props = derived(() => ({
    name: this.root.opts.name.current,
    value: this.root.opts.value.current,
    required: this.root.opts.required.current,
    disabled: this.root.opts.disabled.current,
    onfocus: this.onfocus
  }));
  get props() {
    return this.#props();
  }
  set props($$value) {
    return this.#props($$value);
  }
}
function Radio_group_input($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const inputState = RadioGroupInputState.create();
    if (inputState.shouldRender) {
      $$renderer2.push("<!--[-->");
      Hidden_input($$renderer2, spread_props([inputState.props]));
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Radio_group$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      disabled = false,
      children,
      child,
      value = "",
      ref = null,
      orientation = "vertical",
      loop = true,
      name = void 0,
      required = false,
      readonly = false,
      id = createId(uid),
      onValueChange = noop,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const rootState = RadioGroupRootState.create({
      orientation: boxWith(() => orientation),
      disabled: boxWith(() => disabled),
      loop: boxWith(() => loop),
      name: boxWith(() => name),
      required: boxWith(() => required),
      readonly: boxWith(() => readonly),
      id: boxWith(() => id),
      value: boxWith(() => value, (v) => {
        if (v === value) return;
        value = v;
        onValueChange?.(v);
      }),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, rootState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div${attributes({ ...mergedProps })}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--> `);
    Radio_group_input($$renderer2);
    $$renderer2.push(`<!---->`);
    bind_props($$props, { value, ref });
  });
}
function Radio_group_item$1($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const uid = props_id($$renderer2);
    let {
      id = createId(uid),
      children,
      child,
      value,
      disabled = false,
      ref = null,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const itemState = RadioGroupItemState.create({
      value: boxWith(() => value),
      disabled: boxWith(() => disabled ?? false),
      id: boxWith(() => id),
      ref: boxWith(() => ref, (v) => ref = v)
    });
    const mergedProps = mergeProps(restProps, itemState.props);
    if (child) {
      $$renderer2.push("<!--[-->");
      child($$renderer2, { props: mergedProps, ...itemState.snippetProps });
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<button${attributes({ ...mergedProps })}>`);
      children?.($$renderer2, itemState.snippetProps);
      $$renderer2.push(`<!----></button>`);
    }
    $$renderer2.push(`<!--]-->`);
    bind_props($$props, { ref });
  });
}
const createNewOrder = (data) => apiRequest(API_PATHS.orders.base, {
  method: "POST",
  body: JSON.stringify(data)
});
function Circle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { $$slots, $$events, ...props } = $$props;
    const iconNode = [["circle", { "cx": "12", "cy": "12", "r": "10" }]];
    Icon($$renderer2, spread_props([
      { name: "circle" },
      /**
       * @component @name Circle
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle
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
function Radio_group($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      value = "",
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Radio_group$1($$renderer3, spread_props([
        {
          "data-slot": "radio-group",
          class: cn("grid gap-3", className)
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
          get value() {
            return value;
          },
          set value($$value) {
            value = $$value;
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
    bind_props($$props, { ref, value });
  });
}
function Radio_group_item($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      {
        let children = function($$renderer4, { checked }) {
          $$renderer4.push(`<div data-slot="radio-group-indicator" class="relative flex items-center justify-center">`);
          if (checked) {
            $$renderer4.push("<!--[-->");
            Circle($$renderer4, {
              class: "fill-primary absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2"
            });
          } else {
            $$renderer4.push("<!--[!-->");
          }
          $$renderer4.push(`<!--]--></div>`);
        };
        Radio_group_item$1($$renderer3, spread_props([
          {
            "data-slot": "radio-group-item",
            class: cn("border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 shadow-xs aspect-square size-4 shrink-0 rounded-full border outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50", className)
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
            children,
            $$slots: { default: true }
          }
        ]));
      }
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
function RadioButtons($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { value = "cash" } = $$props;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<!---->`);
      Radio_group($$renderer3, {
        get value() {
          return value;
        },
        set value($$value) {
          value = $$value;
          $$settled = false;
        },
        children: ($$renderer4) => {
          $$renderer4.push(`<div class="flex gap-10 p-4"><div${attr_class(`flex cursor-pointer items-center space-x-2 rounded-md px-4 py-2 transition
				${value === "cash" ? "bg-gray-200" : "bg-transparent"}`)}><!---->`);
          Radio_group_item($$renderer4, {
            onclick: () => console.log(value),
            value: "cash",
            id: "cash",
            class: "cursor-pointer border-2 border-gray-600 data-[state=checked]:border-gray-800"
          });
          $$renderer4.push(`<!----> `);
          Label($$renderer4, {
            for: "cash",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.cash"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div> <div${attr_class(`flex cursor-pointer items-center space-x-2 rounded-md px-4 py-2 transition
				${value === "cashless" ? "bg-gray-200" : "bg-transparent"}`)}><!---->`);
          Radio_group_item($$renderer4, {
            onclick: () => console.log(value),
            value: "cashless",
            id: "cashless",
            class: "cursor-pointer border-2 border-gray-600 data-[state=checked]:border-gray-800"
          });
          $$renderer4.push(`<!----> `);
          Label($$renderer4, {
            for: "cashless",
            children: ($$renderer5) => {
              $$renderer5.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("global.cashless"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer4.push(`<!----></div></div>`);
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
const orderTableCols = [
  { key: "productName", label: "product.table.row.name" },
  { key: "productCode", label: "product.table.row.code" },
  { key: "quantity", label: "order.popup.quantity" },
  { key: "price", label: "order.popup.price" },
  { key: "total", label: "order.popup.total" }
];
function OrderPreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let isLoading = false;
    let errorMessage = null;
    let paymentMethod = "cash";
    const submitOrder = async () => {
      if (!createOrder.items.length) return;
      isLoading = true;
      try {
        const payload = {
          shopId: createOrder.shopId,
          items: createOrder.items.map((item) => ({ productId: item.productId, quantity: item.quantity })),
          notes: paymentMethod
        };
        console.log(createOrder);
        await createNewOrder(payload);
        console.log(createOrder);
        resetOrder();
        goto("/manager");
      } catch (err) {
        errorMessage = getErrorMessage(err, store_get($$store_subs ??= {}, "$t", $format));
        console.error("Submission failed");
      } finally {
        isLoading = false;
      }
    };
    const handleDelete = (id) => {
      createOrder.items = createOrder.items.filter((item) => item.productId !== id);
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="flex w-full flex-col">`);
      if (errorMessage) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<div class="flex items-center justify-center rounded-lg bg-destructive/90 p-3 shadow-sm"><p class="text-md text-destructive-foreground font-medium text-neutral-50">${escape_html(errorMessage)}</p></div>`);
      } else {
        $$renderer3.push("<!--[!-->");
        if (isLoading) {
          $$renderer3.push("<!--[-->");
          Spinner($$renderer3, {
            message: store_get($$store_subs ??= {}, "$t", $format)("global.modal.deleting")
          });
        } else {
          let tools = function($$renderer4, { row }) {
            TableRowTools($$renderer4, { id: row.productId, onDelete: handleDelete });
          }, renderCell = function($$renderer4, { colKey, row }) {
            if (colKey === "quantity") {
              $$renderer4.push("<!--[-->");
              $$renderer4.push(`<div class="flex items-center gap-2">`);
              Button($$renderer4, {
                onclick: () => decreaseQuantity(row.productId),
                type: "button",
                variant: "ghost",
                size: "icon",
                children: ($$renderer5) => {
                  Minus($$renderer5, { size: 12 });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----> <span class="text-sm font-medium">${escape_html(row.quantity)}</span> `);
              Button($$renderer4, {
                onclick: () => increaseQuantity(row.productId),
                type: "button",
                variant: "ghost",
                size: "icon",
                children: ($$renderer5) => {
                  Plus($$renderer5, { size: 12 });
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!----></div>`);
            } else {
              $$renderer4.push("<!--[!-->");
              $$renderer4.push(`${escape_html(row[colKey])}`);
            }
            $$renderer4.push(`<!--]-->`);
          };
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<h1 class="mb-6 text-xl font-bold">${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.previewTitle"))}</h1> <div class="flex flex-col justify-end gap-4 py-6 sm:flex-row">`);
          Button($$renderer3, {
            onclick: () => goto(),
            variant: "default",
            size: "default",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.productBtn"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----> `);
          Button($$renderer3, {
            onclick: submitOrder,
            variant: "submit",
            size: "default",
            children: ($$renderer4) => {
              $$renderer4.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)("order.submitOrder"))}`);
            },
            $$slots: { default: true }
          });
          $$renderer3.push(`<!----></div>  `);
          TableData($$renderer3, {
            columns: orderTableCols,
            data: createOrder.items,
            renderTools: tools,
            renderCell
          });
          $$renderer3.push(`<!---->`);
        }
        $$renderer3.push(`<!--]-->`);
      }
      $$renderer3.push(`<!--]--> <div>`);
      RadioButtons($$renderer3, {
        get value() {
          return paymentMethod;
        },
        set value($$value) {
          paymentMethod = $$value;
          $$settled = false;
        }
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
function _page($$renderer) {
  OrderPreview($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-Be0eI3at.js.map
