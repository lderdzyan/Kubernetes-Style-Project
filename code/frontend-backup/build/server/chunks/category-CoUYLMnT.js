import { a as apiRequest, A as API_PATHS } from './requests-D2a_9uvJ.js';

const createCategory = (data) => apiRequest(API_PATHS.categories.base, {
  method: "POST",
  body: JSON.stringify(data)
});
const updateCategory = (id, data) => apiRequest(API_PATHS.categories.byId(id), {
  method: "PATCH",
  body: JSON.stringify(data)
});
const importCategory = () => apiRequest(API_PATHS.categories.import, {
  method: "POST"
});

export { createCategory as c, importCategory as i, updateCategory as u };
//# sourceMappingURL=category-CoUYLMnT.js.map
