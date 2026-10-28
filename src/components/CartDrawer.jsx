import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';
import { money } from '../utils/format';
export default function CartDrawer({ cart, onClose, onCheckout }) {
  return (
    <div
      className="overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Shopping cart">
        <div className="drawer-head">
          <div>
            <span className="eyebrow">YOUR SELECTION</span>
            <h2>Shopping bag ({cart.count})</h2>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            <X />
          </button>
        </div>
        <div className="cart-items">
          {cart.rows.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={45} />
              <h3>Your bag is empty</h3>
              <p>A little coffee would look good in here.</p>
              <button className="btn btn-dark" onClick={onClose}>
                Browse menu
              </button>
            </div>
          ) : (
            cart.rows.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt="" />
                <div className="cart-item-info">
                  <strong>{item.name}</strong>
                  <span>{money(item.price)}</span>
                  <div className="quantity">
                    <button
                      onClick={() => cart.change(item.id, -1)}
                      aria-label={`Decrease ${item.name}`}
                    >
                      <Minus size={14} />
                    </button>
                    <b>{item.qty}</b>
                    <button
                      onClick={() => cart.change(item.id, 1)}
                      aria-label={`Increase ${item.name}`}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button
                  className="remove"
                  onClick={() => cart.remove(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))
          )}
        </div>
        {cart.rows.length > 0 && (
          <div className="cart-footer">
            <div className="total">
              <span>Subtotal</span>
              <strong>{money(cart.total)}</strong>
            </div>
            <p>Demo checkout — no online payment is collected.</p>
            <button className="btn btn-dark full" onClick={onCheckout}>
              Proceed to checkout
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
