import { s as store_set, a as store_get, u as unsubscribe_stores } from './index2-DOUSrPB8.js';
import { $ as $locale, a as addMessages, i as init } from './runtime-CCkVflQ7.js';
import { S as Spinner } from './Spinner-D3hQ6e33.js';
import './index-D86wc3w8.js';
import './utils2-DeZkPw4J.js';

const global$1 = { "addBtn": "Ավելացնել", "editBtn": "Պահպանել փոփոխությունները", "editIcon": "Խմբագրել", "deleteIcon": "Ջնջել", "redirectBtn": "Վերադառնալ", "statusChange": "Փոխել կարգավիճակը", "next": "Հաջորդ", "previous": "Նախորդ", "excel": "Բեռնել excel տարբերակը", "cash": "Կանխիկ", "cashless": "Փոխանցումով", "payment": "Վճարման եղանակը", "modal": { "deleteTxt": "Համոզվա՞ծ եք։", "deleteBtn": "Ջնջել", "cancelBtn": "Չեղարկել", "deleting": "Մշակվում է․․․", "confirmBtn": "Հաստատել" }, "search": { "placeholder": "Փնտրել", "searchBtn": "Մաքրել" }, "switcher": { "on": "Ակտիվ", "off": "Կասեցված" }, "errors": { "unknown": "Տեղի է ունեցել սխալ" } };
const home$1 = { "btn": "Մուտք գործել համակարգ" };
const sheet$1 = { "sheetTitle": "Ցանկ", "logoutBtn": "Դուրս գալ համակարգից", "navLink": { "order": "Պատվերներ", "user": "Օգտատերեր", "shop": "Խանութներ", "category": "Կատեգորիաներ", "product": "Ապրանքներ", "import": "Ներբեռնել" } };
const loginForm$1 = { "title": "Մուտք գործել համակարգ", "userName": "Մուտքանուն", "password": "Գաղտնաբառ", "loginBtn": "Մուտք", "loggingInBtn": "Բեռնվում է․․․", "usernamePlaceholder": "Լրացնել մուտքանունը", "passwordPlaceholder": "Լրացնել գաղտնաբառը" };
const user$1 = { "table": { "tableTitle": "Գրանցված օգտատերեր", "row": { "name": "Անուն, ազգանուն", "username": "Մուտքանուն", "role": "Դերը", "caption": "Օգտատերերի ցանկ" } }, "form": { "addTitle": "Ավելացնել Օգտատեր", "editTitle": "Խմբագրել օգտատիրոջ տվյալները", "namePlaceholder": "Լրացնել անուն, ազգանուն", "usernamePlaceholder": "Լրացնել մուտքանունը", "userPassPlaceholder": "Լրացնել գաղտնաբառը", "rolePlaceholder": "Ընտրել դերը", "label": { "name": "Անուն, ազգանուն", "username": "Մուտքանուն", "password": "Գաղտնաբառ" }, "role": { "admin": "Ադմին", "manager": "Մենեջեր" }, "saveBtn": "Պահպանել", "savingBtn": "Մշակվում է․․․" }, "error": { "notFound": "Օգտատերը չի գտնվել", "emailExists": "Այս էլ. փոստով օգտատեր արդեն գոյություն ունի", "invalidRole": "Դերն անվավեր է", "invalidStatus": "Կարգավիճակն անվավեր է", "missingFields": "Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը", "invalidId": "Օգտատիրոջ անվավեր ID", "cannotDeleteSelf": "Հնարավոր չէ ջնջել սեփական հաշիվը", "cannotModifyAdmin": "Հնարավոր չէ փոփոխել ադմինի տվյալները", "insufficientPermissions": "Չթույլատրված" } };
const shop$1 = { "table": { "title": "Խանութների ցանկ", "row": { "code": "Կոդ", "name": "Անվանում", "vat": "ՀՎՀՀ", "phone": "Հեռախոս", "address": "Հասցե", "caption": "Խանութների ցանկ" } }, "form": { "addTitle": "Ավելացնել խանութ", "editTitle": "Խմբագրել տվյալները", "namePH": "Լրացնել անվանում", "codePH": "Լրացնել կոդը", "addressPH": "Լրացնել հասցեն", "phonePH": "Լրացնել Հեռախոսը", "vatPH": "Լրացնել ՀՎՀՀ", "label": { "name": "Խանութի անվանում", "code": "Խանութի կոդ", "address": "Խանութի հասցե", "phone": "Հեռախոս", "vat": "ՀՎՀՀ", "status": "Կարգավիճակ" } }, "assignedShopTitle": "Ընտրված խանութներ", "error": { "notFound": "Խանութը չի գտնվել", "codeExists": "Կոդն արդեն գոյություն ունի", "invalidStatus": "Անվավեր կարգավիճակ", "missingFields": "Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը", "invalidId": "Անվավեր ID", "invalidVat": "Անվավեր ՀՎՀՀ", "invalidFileType": "Ֆայլի տեսակը սխալ է", "validationError": "Տվյալների սխալ", "emptyFile": "Ֆայլը դատարկ է", "fileNotFound": "Ֆայլը չի գտնվել" } };
const category$1 = { "table": { "title": "Կատեգորիաների ցանկ", "row": { "name": "Կատեգորիայի անվանումը", "caption": "Կատեգորիաների ցանկ" } }, "form": { "addTitle": "Ավելացնել կատեգորիա", "editTitle": "Խմբագրել կատեգորիաները", "namePlaceholder": "Լրացնել կատեգորիայի անվանումը", "label": "Կատեգորիայի անվանում", "categoryAll": "Բոլորը" }, "error": { "notFound": "Կատեգորիան չի գտնվել", "invalidId": "Անվավեր ID", "missingFields": "Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը", "parentNotFound": "Չի գտնվել", "circularReference": "ԱՆվավեր հղում", "cannotDeleteWithChildren": "Հնարավոր չէ ջնջել", "cannotMoveToChild": "Հնարավոր չէ տեղափոխել" } };
const product$1 = { "table": { "title": "Ապրանքների ցանկ", "row": { "name": "Ապրանքի անվանում", "code": "Կոդ", "measurement": "Չափման միավոր", "price": "Գին", "category": "Կատեգորիա" } }, "form": { "addTitle": "Ավելացնել ապրանք", "editTitle": "Խմբագրել ապրանքը", "namePH": "Լրացնել անվանումը", "codePH": "Լրացնել կոդը", "categoryPH": "Ընտրել կատեգորիան", "measureMentPH": "Ընտրել չափման միավորը", "pricePH": "Լրացնել գինը", "caption": "Ապրանքների ցանկ", "label": { "name": "Ապրանքի անվանումը", "code": "Ապրանքի կոդ", "category": "Կատեգորիան", "measurement": "Չափման միավորը", "price": "Գինը" } }, "measurement": { "piece": "Կտոր", "kg": "Կիլոգրամ", "meter": "Մետր", "liter": "Lիտր" }, "error": { "notFound": "Ապրանքը չի գտնվել", "invalidId": "Ապրանքի անվավեր ID", "missingFields": "Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը", "codeExists": "Այս կոդով ապրանք արդեն գոյություն ունի", "invalidPrice": "Գինը պետք է լինի դրական թիվ", "invalidMeasurement": "Անվավեր չափման միավոր", "categoryNotFound": "Կատեգորիան չի գտնվել", "validationError": "Ապրանքի տվյալները սխալ են մուտքագրված", "emptyFile": "Ֆայլը դատարկ է", "fileNotFound": "Ֆայլը չի գտնվել" } };
const auth$1 = { "error": { "invalidCredentials": "Սխալ մուտքային տվյալներ", "userInactive": "Ոչ ակտիվ", "missingCredentials": "Ոչ ամբողջական տվյալներ", "unauthorized": "Չթույլատրված մուտք", "tokenMissing": "Սեսիան ավարտվել է", "tokenInvalid": "Թերի տվյալներ" } };
const errors$1 = { "auth": { "missingField": "Խնդրում ենք լրացնել բոլոր դաշտերը", "passwordError": "Խնդրում ենք լրացնել դաշտը (առնվազն 8 նիշ)" }, "users": { "zod": { "name": "Անուն, ազգանուն լրացնելը պարտադիր է", "username": "Մուտքանունը պարտադիր է", "role": "Ընտրեք դերը", "status": "Կարգավիճակը պարտադիր է", "passwordRequired": "Գաղտնաբառը պարտադիր է", "passwordMin": "Գաղտնաբառը պետք է պարունակի արնվազն 8 նիշ" } }, "shops": { "zod": { "code": "Կոդը պարտադիր է", "name": "Անվանումը պարտադիր է", "address": "Հասցեն պարտադիր է", "status": "Կարգավիճակը պարտադիր է" } }, "product": { "zod": { "name": "Անվանումը պարտադիր է", "code": "Կոդը պարտադիր է", "measurement": "Ընտրել չափման միավորը", "category": "Ընտրել կատեգորիան", "price": "Գինը պարտադիր է", "positivePrice": "Գինը պետք է լինի դրական թիվ", "priceType": "Պետք է լինի թիվ" } } };
const order$1 = { "title": "Պատվերների ցանկ", "previewTitle": "Նախապատվերների ցանկ", "categoryBtn": "Ընտրել այլ կատեգորիա", "submitOrder": "Հաստատել պատվերը", "productBtn": "Ապրանքներ", "previewBtn": "Տեսնել պատվերը", "assignedShops": "Կցված խանութներ", "increaseBtn": "Ավելացնել քանակը", "decreaseBtn": "Պակասեցնել քանակը", "noOrder": "Պատվերներ առկա չեն", "table": { "name": "Խանութի անվանում", "address": "Խանութի հասցե", "caption": "Պատվերների ցանկ", "total": "Ընդհանուր արժեք", "date": "Գրանցման ամսաթիվ", "managerName": "Մենեջերի անուն", "number": "Պատվերի համար" }, "filter": "Ֆիլտրել ըստ մենեջերի", "popup": { "title": "Գրանցել պատվեր", "price": "Գին", "quantity": "Քանակ", "total": "Ընդամենը" }, "details": { "title": "Պատվերի մանրամասներ", "number": "Պատվերի համար", "code": "Ապրանքի կոդ", "deleteBtn": "Ջնջել պատվերը" }, "error": { "notFound": "Պատվերը չի գտնվել", "invalidId": "Անվավեր ID", "missingFields": "Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը", "shopNotAssigned": "Խանութը կցված չէ", "shopNotFound": "Խանութը չի գտնվել", "shopInactive": "Խանութը կասեցված է", "productNotFound": "Ապրանքը չի գտնվել", "invalidQuantity": "Անվավեր քանակ", "emptyItems": "Ապրանքների ցանկը դատարկ է", "invalidStatus": "Անվավեր կարգավիճակ", "cannotModifyStatus": "Հնարավոր չէ փոփոխել կարգավիճակը", "unauthorizedShop": "Չթույլատրված" } };
const print$1 = { "payer": "Վճարող", "createdAt": "Գրանցման ամսաթիվ", "address": "Առաքման վայրը", "vat": "ՀՎՀՀ", "measurement": "Միավոր", "preview": "Տպել" };
const hy = {
  global: global$1,
  home: home$1,
  sheet: sheet$1,
  loginForm: loginForm$1,
  user: user$1,
  shop: shop$1,
  category: category$1,
  product: product$1,
  auth: auth$1,
  errors: errors$1,
  "import": { "title": "Տվյալների ներբեռնում", "userTitle": "Օգտատերեր", "shopTitle": "Խանութներ", "categoryTitle": "Կատեգորիաներ", "productTitle": "Ապրանքներ", "importBtn": "Ներբեռնել" },
  order: order$1,
  print: print$1
};
const global = { "addBtn": "Add", "editBtn": "Save changes", "editIcon": "Edit", "deleteIcon": "Delete", "redirectBtn": "Return", "statusChange": "Change satus", "next": "Next", "previous": "Previous", "excel": "Extract excel", "cash": "Cash", "cashless": "Cashless", "payment": "Payment method", "modal": { "deleteTxt": "Are you sure?", "deleteBtn": "Delete", "cancelBtn": "Cancel", "deleting": "Deleting...", "confirmBtn": "Confirm" }, "search": { "placeholder": "Search", "searchBtn": "Clear" }, "switcher": { "on": "Active", "off": "Inactive" }, "errors": { "unknown": "Something went wrong" } };
const home = { "btn": "Sign in" };
const sheet = { "sheetTitle": "List", "logoutBtn": "Log out", "navLink": { "order": "Orders", "user": "Users", "shop": "Shops", "category": "Categories", "product": "Products", "import": "Import" } };
const loginForm = { "title": "Login to your account", "userName": "User Name", "password": "Password", "loginBtn": "Login", "loggingInBtn": "Logging in...", "usernamePlaceholder": "Enter your username", "passwordPlaceholder": "Enter your password" };
const user = { "table": { "tableTitle": "Registered Users", "row": { "name": "Name, surname", "username": "Username", "role": "Role", "caption": "List of users" } }, "form": { "addTitle": "Add New User", "editTitle": "Edit User Data", "namePlaceholder": "Name, surname", "usernamePlaceholder": "Username", "userPassPlaceholder": "Password", "rolePlaceholder": "Role", "label": { "name": "Name, Surname", "username": "Username", "password": "Password" }, "role": { "admin": "Admin", "manager": "Manager" }, "saveBtn": "Save", "savingBtn": "Saving..." }, "error": { "notFound": "User is not found", "emailExists": "Email already exists", "invalidRole": "Invalid Role", "invalidStatus": "Invalid status", "missingFields": "Please fill all required fields", "invalidId": "Invalid ID", "cannotDeleteSelf": "Impossible to delete", "cannotModifyAdmin": "Impossible to modify", "insufficientPermissions": "Permission denied" } };
const shop = { "table": { "title": "Shop List", "row": { "code": "Code", "name": "Name", "vat": "TIN", "phone": "Phone", "address": "Address", "caption": "List of your shops" } }, "form": { "addTitle": "Add New Shop", "editTitle": "Edit Shop Data", "namePH": "Shop name", "codePH": "Shop code", "addressPH": "Shop address", "phonePH": "Phone", "vatPH": "TIN", "label": { "name": "Shop Name", "code": "Shop Code", "address": "Shop Address", "phone": "Shop Phone", "vat": "Shop TIN", "status": "Shop Status" } }, "assignedShopTitle": "Assigned shops", "error": { "notFound": "Shop is not found", "codeExists": "Code exists", "invalidStatus": "Invalid status", "missingFields": "Please fill the required fileds", "invalidId": "Invalid ID", "invalidVat": "Invalid TIN", "invalidFileType": "File is not valid", "validationError": "Validation Error", "emptyFile": "File is empty", "fileNotFound": "File is not found" } };
const category = { "table": { "title": "List of Categories", "row": { "name": "Category Title", "caption": "List of categories" } }, "form": { "addTitle": "Add New Category", "editTitle": "Edit Category", "namePlaceholder": "Fill a category", "label": "Category", "categoryAll": "All" }, "error": { "notFound": "Category is not found", "invalidId": "Invalid ID", "missingFields": "Please fill all required fields", "parentNotFound": "Not found", "circularReference": "Invalid reference", "cannotDeleteWithChildren": "Unable to delete", "cannotMoveToChild": "Unable to move" } };
const product = { "table": { "title": "List of Products", "row": { "name": "Product Title", "code": "Code", "measurement": "Measurement", "price": "Price", "category": "Category" } }, "form": { "addTitle": "Add New Product", "editTitle": "Edit Product", "namePH": "Fill product title", "codePH": "Fill product code", "categoryPH": "Product category", "measureMentPH": "Fill unit of measurement", "pricePH": "Fill product price", "caption": "List of your products", "label": { "name": "Product Title", "code": "Product Code", "category": "Product Category", "measurement": "Product Measurement", "price": "Product Price" } }, "measurement": { "piece": "Piece", "kg": "Kg", "meter": "Meter", "liter": "Liter" } };
const auth = { "error": { "invalidCredentials": "Invalid Credentials", "userInactive": "Iactive User", "missingCredentials": "Missing Credentials", "unauthorized": "Unauthorized", "tokenMissing": "Session Expired", "tokenInvalid": "Invalid Token" } };
const errors = { "auth": { "missingField": "Please fill the field", "passwordError": "Please fill the field (at least 8 caracters)" }, "users": { "zod": { "name": "Name, surname are required", "username": "Username is required", "role": "Role is required", "status": "Status is required", "passwordRequired": "Password is required", "passwordMin": "Password must contain at least 8 characters" } }, "shops": { "zod": { "code": "Code is required", "name": "Name is required", "address": "Address is required", "status": "Status required" } }, "product": { "zod": { "name": "Name is required", "code": "Code is required", "measurement": "Applunit of measurement", "category": "Apply Category", "price": "Price is required", "positivePrice": "Price should be a positive number", "priceType": "Must be a number" } } };
const order = { "title": "Order List", "previewTitle": "Order Preview", "categoryBtn": "Select another category", "submitOrder": "Submit Order", "productBtn": "Products", "previewBtn": "View Order", "assignedShops": "Assigned shops", "increaseBtn": "Increase quantity", "decreaseBtn": "Decrease quantity", "noOrder": "No orders yet", "table": { "name": "Shop Name", "address": "Shop Address", "caption": "List of Orders", "total": "Total amount", "date": "Creation Date", "managerName": "Manager name", "number": "Order Nuber" }, "filter": "Filter by manager name", "popup": { "title": "Create Order", "price": "Price", "quantity": "Quantity", "total": "Total" }, "details": { "title": "Order Details", "number": "Order Nuber", "deleteBtn": "Delete Order" }, "error": { "notFound": "Order is not found", "invalidId": "Invalid ID", "missingFields": "Please fill all required fields", "shopNotAssigned": "Shop is not assigned", "shopNotFound": "Shop is no found", "shopInactive": "Shop is not active", "productNotFound": "Product is not found", "invalidQuantity": "Invalid quantity", "emptyItems": "Empty items", "invalidStatus": "Invalid status", "cannotModifyStatus": "Cannot modify status", "unauthorizedShop": "Unauthorized, access denied" } };
const print = { "payer": "Payer", "createdAt": "Order Creation Date", "address": "Addres to deliver", "vat": "VAT", "measurement": "Unit", "preview": "Print" };
const en = {
  global,
  home,
  sheet,
  loginForm,
  user,
  shop,
  category,
  product,
  auth,
  errors,
  "import": { "title": "Import Data", "userTitle": "Users", "shopTitle": "Shops", "categoryTitle": "Categories", "productTitle": "Products", "importBtn": "Import" },
  order,
  print
};
function setupI18n(lang) {
  addMessages("hy", hy);
  addMessages("en", en);
  init({
    fallbackLocale: "hy",
    initialLocale: lang
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let { children, data } = $$props;
    setupI18n(data.lang);
    store_set($locale, data.lang);
    store_set($locale, data?.lang ?? "hy");
    const ready = !!store_get($$store_subs ??= {}, "$locale", $locale);
    if (ready) {
      $$renderer2.push("<!--[-->");
      children?.($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="p-6 text-center text-gray-500">`);
      Spinner($$renderer2, {});
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}

export { _layout as default };
//# sourceMappingURL=_layout.svelte-Bu2FGB5v.js.map
