import { c as attributes, d as clsx, e as bind_props, k as ensure_array_like, a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { c as cn } from './utils3-CULcwRUd.js';
import { b as $format } from './runtime-CCkVflQ7.js';
import { S as Switch } from './switch-DurVX8Id.js';
import { P as ProductMeasurement } from './product2-CjFRccXX.js';
import { a2 as escape_html } from './index-D86wc3w8.js';

function Table($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<div data-slot="table-container" class="relative w-full overflow-x-auto"><table${attributes({
      "data-slot": "table",
      class: clsx(cn("w-full caption-bottom text-sm", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></table></div>`);
    bind_props($$props, { ref });
  });
}
function Table_body($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<tbody${attributes({
      "data-slot": "table-body",
      class: clsx(cn("[&_tr:last-child]:border-0", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></tbody>`);
    bind_props($$props, { ref });
  });
}
function Table_cell($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<td${attributes({
      "data-slot": "table-cell",
      class: clsx(cn("whitespace-nowrap bg-clip-padding p-2 align-middle [&:has([role=checkbox])]:pr-0", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></td>`);
    bind_props($$props, { ref });
  });
}
function Table_head($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<th${attributes({
      "data-slot": "table-head",
      class: clsx(cn("text-foreground h-10 whitespace-nowrap bg-clip-padding px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></th>`);
    bind_props($$props, { ref });
  });
}
function Table_header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<thead${attributes({
      "data-slot": "table-header",
      class: clsx(cn("[&_tr]:border-b", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></thead>`);
    bind_props($$props, { ref });
  });
}
function Table_row($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      ref = null,
      class: className,
      children,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    $$renderer2.push(`<tr${attributes({
      "data-slot": "table-row",
      class: clsx(cn("hover:[&,&>svelte-css-wrapper]:[&>th,td]:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors", className)),
      ...restProps
    })}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></tr>`);
    bind_props($$props, { ref });
  });
}
const selectMeasurement = (measurement) => {
  switch (measurement) {
    case ProductMeasurement.PIECE:
      return "Հատ";
    case ProductMeasurement.KG:
      return "Կգ";
    case ProductMeasurement.LITER:
      return "Լիտր";
    case ProductMeasurement.METER:
      return "Մետր";
    default:
      return String(measurement);
  }
};
const selectRole = (role) => {
  return role === "admin" ? "Ադմին" : "Մենեջեր";
};
const isUser = (row) => {
  return "role" in row;
};
const isProduct = (row) => {
  return "measurement" in row;
};
const generateColumnData = (row, columnKey) => {
  if (isUser(row) && columnKey === "role") {
    return selectRole(row.role);
  }
  if (isProduct(row) && columnKey === "measurement") {
    return selectMeasurement(row.measurement);
  }
  const value = row[columnKey];
  return value != null ? String(value) : "";
};
function TableData($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { columns, data, renderTools, onRowClick, renderCell } = $$props;
    $$renderer2.push(`<div class="overflow-hidden custom-scrollbar rounded-lg border border-gray-200 shadow-sm"><!---->`);
    Table($$renderer2, {
      class: "min-w-full text-sm",
      children: ($$renderer3) => {
        $$renderer3.push(`<!---->`);
        Table_header($$renderer3, {
          class: "bg-gray-300",
          children: ($$renderer4) => {
            $$renderer4.push(`<!---->`);
            Table_row($$renderer4, {
              children: ($$renderer5) => {
                $$renderer5.push(`<!---->`);
                Table_head($$renderer5, {
                  class: "hidden print:table-cell px-4 py-2 text-left",
                  children: ($$renderer6) => {
                    $$renderer6.push(`<!---->№`);
                  },
                  $$slots: { default: true }
                });
                $$renderer5.push(`<!----> <!--[-->`);
                const each_array = ensure_array_like(columns);
                for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
                  let col = each_array[$$index];
                  $$renderer5.push(`<!---->`);
                  Table_head($$renderer5, {
                    class: "px-4 py-2 " + (col.key === "quantity" ? "text-center" : "text-left") + " " + (col.class ?? ""),
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(store_get($$store_subs ??= {}, "$t", $format)(col.label))}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!---->`);
                }
                $$renderer5.push(`<!--]--> `);
                if (renderTools) {
                  $$renderer5.push("<!--[-->");
                  $$renderer5.push(`<!---->`);
                  Table_head($$renderer5, { class: "px-4 py-2 text-left" });
                  $$renderer5.push(`<!---->`);
                } else {
                  $$renderer5.push("<!--[!-->");
                }
                $$renderer5.push(`<!--]-->`);
              },
              $$slots: { default: true }
            });
            $$renderer4.push(`<!---->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!----> <!---->`);
        Table_body($$renderer3, {
          children: ($$renderer4) => {
            $$renderer4.push(`<!--[-->`);
            const each_array_1 = ensure_array_like(data);
            for (let i = 0, $$length = each_array_1.length; i < $$length; i++) {
              let row = each_array_1[i];
              $$renderer4.push(`<!---->`);
              Table_row($$renderer4, {
                class: i % 2 === 0 ? "bg-white" : "bg-gray-50",
                onclick: () => onRowClick?.(row),
                children: ($$renderer5) => {
                  $$renderer5.push(`<!---->`);
                  Table_cell($$renderer5, {
                    class: "hidden print:table-cell px-4 py-2 font-semibold",
                    children: ($$renderer6) => {
                      $$renderer6.push(`<!---->${escape_html(i + 1)}`);
                    },
                    $$slots: { default: true }
                  });
                  $$renderer5.push(`<!----> <!--[-->`);
                  const each_array_2 = ensure_array_like(columns);
                  for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
                    let col = each_array_2[$$index_1];
                    $$renderer5.push(`<!---->`);
                    Table_cell($$renderer5, {
                      class: "cursor-pointer px-4 py-2 break-words whitespace-normal",
                      children: ($$renderer6) => {
                        if (renderCell) {
                          $$renderer6.push("<!--[-->");
                          renderCell($$renderer6, { colKey: col.key, row });
                          $$renderer6.push(`<!---->`);
                        } else {
                          $$renderer6.push("<!--[!-->");
                          if (col.key === "status" && typeof row.status === "boolean") {
                            $$renderer6.push("<!--[-->");
                            Switch($$renderer6, { checked: row.status });
                          } else {
                            $$renderer6.push("<!--[!-->");
                            $$renderer6.push(`${escape_html(generateColumnData(row, col.key))}`);
                          }
                          $$renderer6.push(`<!--]-->`);
                        }
                        $$renderer6.push(`<!--]-->`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  }
                  $$renderer5.push(`<!--]--> `);
                  if (renderTools) {
                    $$renderer5.push("<!--[-->");
                    $$renderer5.push(`<!---->`);
                    Table_cell($$renderer5, {
                      class: "px-4 py-2",
                      children: ($$renderer6) => {
                        renderTools($$renderer6, { row });
                        $$renderer6.push(`<!---->`);
                      },
                      $$slots: { default: true }
                    });
                    $$renderer5.push(`<!---->`);
                  } else {
                    $$renderer5.push("<!--[!-->");
                  }
                  $$renderer5.push(`<!--]-->`);
                },
                $$slots: { default: true }
              });
              $$renderer4.push(`<!---->`);
            }
            $$renderer4.push(`<!--]-->`);
          },
          $$slots: { default: true }
        });
        $$renderer3.push(`<!---->`);
      },
      $$slots: { default: true }
    });
    $$renderer2.push(`<!----></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { TableData as T };
//# sourceMappingURL=TableData-C3Qzhza7.js.map
