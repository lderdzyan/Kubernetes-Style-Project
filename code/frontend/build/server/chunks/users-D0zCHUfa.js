import { a as apiRequest, A as API_PATHS } from './requests-D2a_9uvJ.js';

const createUser = (data) => apiRequest(API_PATHS.users.base, {
  method: "POST",
  body: JSON.stringify(data)
});
const getUserById = (id) => apiRequest(API_PATHS.users.byId(id));
const updateUser = (id, data) => apiRequest(API_PATHS.users.byId(id), {
  method: "PATCH",
  body: JSON.stringify(data)
});
const attachShopsToUser = (id, data) => apiRequest(API_PATHS.users.shops(id), {
  method: "POST",
  body: JSON.stringify(data)
});
const importUsers = () => apiRequest(API_PATHS.users.import, {
  method: "POST"
});

export { attachShopsToUser as a, createUser as c, getUserById as g, importUsers as i, updateUser as u };
//# sourceMappingURL=users-D0zCHUfa.js.map
