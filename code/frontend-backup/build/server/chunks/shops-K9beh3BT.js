import { a as apiRequest, A as API_PATHS } from './requests-D2a_9uvJ.js';

const createShop = (data) => apiRequest(API_PATHS.shops.base, {
  method: "POST",
  body: JSON.stringify(data)
});
const updateShopData = (id, data) => apiRequest(API_PATHS.shops.byId(id), {
  method: "PATCH",
  body: JSON.stringify(data)
});
const importShop = () => apiRequest(API_PATHS.shops.import, {
  method: "POST"
});

export { createShop as c, importShop as i, updateShopData as u };
//# sourceMappingURL=shops-K9beh3BT.js.map
