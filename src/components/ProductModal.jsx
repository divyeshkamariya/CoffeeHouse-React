import { useState } from 'react';

import { ShoppingBag, X, Plus, Minus } from 'lucide-react';
import { money } from '../utils/format';
export default function ProductModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1);
  return (
    <div
      className="overlay modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="detail-modal" role="dialog" aria-modal="true" aria-label={product.name}>
        <button className="modal-close icon-btn" onClick={onClose} aria-label="Close details">
          <X />
        </button>
        <img src={product.image} alt={product.name} />
        <div className="detail-copy">
          <span className="eyebrow">{product.category}</span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <strong className="detail-price">{money(product.price)}</strong>
          <div className="detail-actions">
            <div className="quantity">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">
                <Minus size={16} />
              </button>
              <b>{qty}</b>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase quantity">
                <Plus size={16} />
              </button>
            </div>
            <button
              className="btn btn-dark"
              onClick={() => {
                onAdd(product.id, qty);
                onClose();
              }}
            >
              Add to bag <ShoppingBag size={17} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
