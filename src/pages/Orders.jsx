import { useLocation, Link } from 'react-router-dom';
import { getOrders } from '../utils/orderStorage';
import { money } from '../utils/format';
export default function Orders() {
 const { state } = useLocation(); const orders = getOrders();
 return <section className="section container orders-page"><span className="eyebrow">YOUR COFFEE MOMENTS</span><h1>My Orders</h1><p>Demo orders saved in this browser only. Clearing site data will remove them.</p>
 {state?.placed && <p className="order-success" role="status">Order {state.placed} placed successfully (demo)!</p>}
 {!orders.length ? <div className="checkout-panel"><h2>No orders yet</h2><p>Your next favorite brew is waiting.</p><Link className="btn btn-dark" to="/menu">Explore menu</Link></div> : <div className="orders-list">{orders.map(o=><article className="checkout-panel" key={o.id}><div className="summary-row"><h2>{o.id}</h2><strong className="order-status">{o.status}</strong></div><p>{new Date(o.createdAt).toLocaleString('en-IN')} · {o.customer.name}</p>{o.items.map((item,i)=><div className="summary-row" key={i}><span>{item.name} × {item.qty}</span><strong>{money(item.price*item.qty)}</strong></div>)}<div className="summary-row summary-total"><strong>Total</strong><strong>{money(o.total)}</strong></div><small>Demo status — not connected to a real cafe.</small></article>)}</div>}
 </section>;
}
