const KEY = 'coffeeHouseOrders';
export function getOrders() {
  try { const data = JSON.parse(localStorage.getItem(KEY) || '[]'); return Array.isArray(data) ? data : []; }
  catch { return []; }
}
export function saveOrder(order) {
  const orders = [order, ...getOrders()];
  localStorage.setItem(KEY, JSON.stringify(orders));
  return order;
}
