import { useEffect, useState } from 'react';

const KEY = 'coffeeHouseCart';

const readCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) || '[]');
    if (!Array.isArray(saved)) return [];
    return saved.map((i) => ({ id: String(i.id), qty: Math.max(1, Number(i.qty) || 1) }));
  } catch {
    return [];
  }
};

export default function useCart(products) {
  const [cart, setCart] = useState(readCart);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(cart));
    } catch {
      /* storage unavailable */
    }
  }, [cart]);

  // Once the menu has loaded, drop saved items that are no longer on it.
  useEffect(() => {
    if (!products.length) return;
    setCart((old) => {
      const kept = old.filter((x) => products.some((p) => p.id === x.id));
      return kept.length === old.length ? old : kept;
    });
  }, [products]);

  const add = (id, qty = 1) =>
    setCart((old) =>
      old.some((x) => x.id === id)
        ? old.map((x) => (x.id === id ? { ...x, qty: x.qty + qty } : x))
        : [...old, { id, qty }],
    );
  const change = (id, delta) =>
    setCart((old) =>
      old.map((x) => (x.id === id ? { ...x, qty: x.qty + delta } : x)).filter((x) => x.qty > 0),
    );
  const remove = (id) => setCart((old) => old.filter((x) => x.id !== id));

  const rows = cart.flatMap((x) => {
    const p = products.find((p) => p.id === x.id);
    return p ? [{ ...p, qty: x.qty }] : [];
  });
  return {
    rows,
    clear: () => setCart([]),
    add,
    change,
    remove,
    count: rows.reduce((n, x) => n + x.qty, 0),
    total: rows.reduce((n, x) => n + x.price * x.qty, 0),
  };
}
