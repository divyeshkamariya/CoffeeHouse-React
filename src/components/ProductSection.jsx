import { useProducts } from '../context/ProductsContext';
import ProductGrid from './ProductGrid';

export default function ProductSection({ filter = () => true, sort = "default", limit, onAdd, onSelect }) {
  const { products, loading, error, reload } = useProducts();

  if (loading) {
    return (
      <div className="product-grid" aria-busy="true" aria-label="Loading menu">
        {Array.from({ length: limit ?? 8 }, (_, i) => (
          <div key={i} className="product-card skeleton" />
        ))}
      </div>
    );
  }
  if (error) {
    return (
      <div className="menu-status" role="alert">
        <p>{error}</p>
        <button className="btn btn-dark" onClick={reload}>
          Try again
        </button>
      </div>
    );
  }
  return (
    <ProductGrid
      items={products.filter(filter).sort((a,b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0).slice(0, limit)}
      onAdd={onAdd}
      onSelect={onSelect}
    />
  );
}
