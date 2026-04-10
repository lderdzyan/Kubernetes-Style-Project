import { a as apiRequest, A as API_PATHS } from './requests-D2a_9uvJ.js';

const createNewProduct = (data) => apiRequest(API_PATHS.products.base, {
  method: "POST",
  body: JSON.stringify(data)
});
const editProduct = (data, id) => apiRequest(API_PATHS.products.byId(id), {
  method: "PATCH",
  body: JSON.stringify(data)
});
const deleteProduct = (id) => apiRequest(API_PATHS.products.byId(id), { method: "DELETE" });
const importProd11 = () => apiRequest(API_PATHS.products.import11, {
  method: "POST"
});
const importProd12 = () => apiRequest(API_PATHS.products.import12, {
  method: "POST"
});
const importProd20 = () => apiRequest(API_PATHS.products.import20, {
  method: "POST"
});
const importProd22 = () => apiRequest(API_PATHS.products.import22, {
  method: "POST"
});

export { importProd12 as a, importProd20 as b, importProd22 as c, deleteProduct as d, editProduct as e, createNewProduct as f, importProd11 as i };
//# sourceMappingURL=product-DwNRaUOJ.js.map
