import './exports-CgQJUv15.js';
import './state.svelte-CKcNBPmG.js';
import { jwtDecode } from 'jwt-decode';
import { p as public_env } from './shared-server-BU2DVf8Q.js';

const checkLocalStorage = () => typeof window !== "undefined" && typeof window.localStorage !== "undefined";
const getLocalStorageData = (key) => {
  if (checkLocalStorage()) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  return null;
};
const removeLocalStorageData = (key) => {
  if (checkLocalStorage()) {
    localStorage.removeItem(key);
  }
};
const auth = { user: null };
const decodeJWT = (token) => {
  try {
    return jwtDecode(token);
  } catch {
    return null;
  }
};
const isTokenExpired = (token) => {
  const payload = decodeJWT(token);
  if (!payload?.exp) return true;
  return Date.now() / 1e3 > payload.exp;
};
const saved = getLocalStorageData("authUser");
if (saved && !isTokenExpired(saved.token)) {
  auth.user = saved;
} else {
  clearAuthUser();
}
function clearAuthUser() {
  auth.user = null;
  removeLocalStorageData("authUser");
}
const BASE_URL = public_env.PUBLIC_BASE_URL;

export { BASE_URL as B, auth as a };
//# sourceMappingURL=url-DBJznBgq.js.map
