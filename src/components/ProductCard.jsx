import { Plus } from 'lucide-react';
import { money } from '../utils/format';
export default function ProductCard({ product, onAdd, onSelect }) {
  return (
    <article className="product-card">
      <button
        className="product-photo"
        onClick={() => onSelect(product)}
        aria-label={`View ${product.name} details`}
      >
        <img src={product.image} alt={product.name} loading="lazy" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/assets/coffee1.jpg"; }} />
      </button>
      <div className="product-body">
        <div className="eyebrow">{product.category}</div>
        <button className="product-title" onClick={() => onSelect(product)}>
          {product.name}
        </button>
        <p>{product.description}</p>
        <div className="product-bottom">
          <strong>{money(product.price)}</strong>
          <button
            className="add-button"
            onClick={() => onAdd(product.id)}
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
