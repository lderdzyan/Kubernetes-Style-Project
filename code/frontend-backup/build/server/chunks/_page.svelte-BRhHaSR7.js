import { a2 as escape_html } from './index-D86wc3w8.js';
import './runtime-CCkVflQ7.js';
import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import './button-D4P53Vk1.js';
import './url-DBJznBgq.js';
import './zodValidation-CrWiySST.js';
import { S as Spinner } from './Spinner-D3hQ6e33.js';
import './utils2-DeZkPw4J.js';
import './index2-DOUSrPB8.js';
import './utils3-CULcwRUd.js';
import 'jwt-decode';
import './shared-server-BU2DVf8Q.js';
import './product2-CjFRccXX.js';
import 'zod';

function SignIn($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let errors = {};
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<div class="animated-bg flex min-h-screen flex-col items-center justify-center"><div class="mb-8">`);
      if (errors.global) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<p class="text-center text-sm text-red-600">${escape_html(errors.global)}</p>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></div> `);
      {
        $$renderer3.push("<!--[-->");
        Spinner($$renderer3, {});
      }
      $$renderer3.push(`<!--]--></div>`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
function _page($$renderer) {
  SignIn($$renderer);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BRhHaSR7.js.map
