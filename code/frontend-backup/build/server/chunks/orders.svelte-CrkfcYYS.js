const createOrder = { shopId: "", categoryId: null, items: [], notes: "" };
const resetOrder = () => {
  createOrder.shopId = "";
  createOrder.categoryId = null;
  createOrder.items = [];
  createOrder.notes = "";
};
const increaseQuantity = (id) => {
  const item = createOrder.items.find((item2) => item2.productId === id);
  if (!item) return;
  item.quantity += 1;
  item.total = item.quantity * (item.price ?? 0);
  console.log(createOrder);
};
const decreaseQuantity = (id) => {
  const item = createOrder.items.find((item2) => item2.productId === id);
  if (!item) return;
  if (item.quantity > 1) {
    item.quantity -= 1;
    item.total = item.quantity * (item.price ?? 0);
  }
  console.log(createOrder);
};

export { createOrder as c, decreaseQuantity as d, increaseQuantity as i, resetOrder as r };
//# sourceMappingURL=orders.svelte-CrkfcYYS.js.map
