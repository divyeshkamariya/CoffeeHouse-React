import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { money } from '../utils/format';
import { saveOrder } from '../utils/orderStorage';
export default function Checkout({ cart }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' });
  const [error, setError] = useState('');
  function submit(e) {
    e.preventDefault();
    if (!cart.rows.length) return setError('Your cart is empty.');
    if (form.name.trim().length < 2 || !/^[0-9]{10}$/.test(form.phone.trim()) || form.address.trim().length < 8) return setError('Enter your name, a 10-digit phone number and a complete address (at least 8 characters).');
    try {
      const order = { id: `CH-${Date.now()}`, createdAt: new Date().toISOString(), customer: { ...form }, items: cart.rows.map(({ id, name, price, qty, image }) => ({ id, name, price, qty, image })), total: cart.total, status: 'Placed', paymentMethod: 'Pay at cafe / on delivery (demo)' };
      saveOrder(order); cart.clear(); navigate('/orders', { state: { placed: order.id } });
    } catch { setError('Could not save your order. Check browser storage settings.'); }
  }
  return <section className="section container checkout-page"><span className="eyebrow">ALMOST THERE</span><h1>Checkout</h1><p>This is a portfolio demo. No real order is sent to a cafe and no payment is processed.</p>
    {!cart.rows.length ? <p>Your bag is empty. <Link to="/menu">Browse menu</Link></p> : <div className="checkout-layout"><form onSubmit={submit} className="checkout-panel"><h2>Your details</h2>
      <label>Full name<input required autoComplete="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name" /></label>
      <label>Phone number<input required inputMode="numeric" maxLength="10" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="10-digit mobile number" /></label>
      <label>Delivery address<textarea required rows="3" value={form.address} onChange={e=>setForm({...form,address:e.target.value})} placeholder="House, street, city" /></label>
      <label>Order notes (optional)<textarea rows="2" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})} placeholder="Any preferences?" /></label>
      {error && <p role="alert" className="form-error">{error}</p>}
      <button className="btn btn-dark" type="submit">Place demo order</button></form>
      <aside className="checkout-panel"><h2>Order summary</h2>{cart.rows.map(x=><div className="summary-row" key={x.id}><span>{x.name} × {x.qty}</span><strong>{money(x.price*x.qty)}</strong></div>)}<div className="summary-row summary-total"><strong>Total</strong><strong>{money(cart.total)}</strong></div><small>No payment collected. Saved only in this browser.</small></aside></div>}</section>;
}
