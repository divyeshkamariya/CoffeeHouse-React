import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getProducts } from '../api/products';

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [state, setState] = useState({ products: [], loading: true, error: '' });
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setState((s) => ({ ...s, loading: true, error: '' }));
    getProducts(controller.signal)
      .then((products) => setState({ products, loading: false, error: '' }))
      .catch((err) => {
        if (err.name !== 'AbortError')
          setState({ products: [], loading: false, error: err.message });
      });
    return () => controller.abort();
  }, [attempt]);

  const reload = useCallback(() => setAttempt((n) => n + 1), []);
  return (
    <ProductsContext.Provider value={{ ...state, reload }}>{children}</ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
