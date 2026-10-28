import ProductCard from './ProductCard';
export default function ProductGrid({ items, onAdd, onSelect }) {
  return (
    <div className="product-grid">
      {items.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={onAdd} onSelect={onSelect} />
      ))}
    </div>
  );
}
