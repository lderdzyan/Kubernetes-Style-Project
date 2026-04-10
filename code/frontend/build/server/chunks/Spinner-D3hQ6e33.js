import { b as attr_class } from './index2-DOUSrPB8.js';
import { a2 as escape_html } from './index-D86wc3w8.js';

function Spinner($$renderer, $$props) {
  let { size = "md", message = "Էջը բեռնվում է․․․" } = $$props;
  const _size = size;
  const sizeClasses = { sm: "h-6 w-6", md: "h-10 w-10", lg: "h-14 w-14" };
  $$renderer.push(`<div class="flex flex-col items-center justify-center gap-4 p-6 text-gray-600"><div${attr_class(`relative ${sizeClasses[_size]} rounded-full`)} role="status" aria-label="loading"><div class="absolute inset-0 rounded-full border-[4px] border-gray-200"></div> <div class="absolute inset-0 rounded-full border-[4px] border-t-gray-700 border-r-gray-400 border-b-transparent border-l-transparent animate-spin"></div></div> <p class="text-sm font-medium text-gray-500">${escape_html(message)}</p></div>`);
}

export { Spinner as S };
//# sourceMappingURL=Spinner-D3hQ6e33.js.map
