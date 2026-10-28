import { useEffect, useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import useCart from './hooks/useCart';
import { useProducts } from './context/ProductsContext';
import Header from './components/Header';
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();
  const { products } = useProducts();
  const cart = useCart(products);
  const [drawer, setDrawer] = useState(false);
  const [selected, setSelected] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (!drawer && !selected) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setDrawer(false);
        setSelected(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [drawer, selected]);

  const add = (id, qty) => {
    cart.add(id, qty);
    setDrawer(true);
  };

  return (
    <>
      <Header count={cart.count} onCart={() => setDrawer(true)} />
      <main>
        <Routes>
          <Route path="/" element={<Home onAdd={add} onSelect={setSelected} />} />
          <Route path="/menu" element={<MenuPage onAdd={add} onSelect={setSelected} />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="*"
            element={
              <section className="section container">
                <h1>Page not found</h1>
                <Link to="/">Back home</Link>
              </section>
            }
          />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container footer-top">
          <div>
            <Link to="/" className="brand footer-brand">
              <span className="brand-mark">✳</span>
              <span>
                coffee<span className="brand-light">house.</span>
                <small>BREWED WITH LOVE</small>
              </span>
            </Link>
            <p>
              Good coffee. Good company.
              <br />
              The little moments that matter.
            </p>
          </div>
          <div>
            <h4>EXPLORE</h4>
            <Link to="/menu">Our menu</Link>
            <Link to="/about">Our story</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
          <div>
            <h4>GET IN TOUCH</h4>
            <Link to="/contact">Contact us</Link>
            <span>Ahmedabad, India</span>
            <span>Demo cafe website</span>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Coffee House. Portfolio demo.</span>
          <span>Made with care & a lot of coffee ☕</span>
        </div>
      </footer>
      {drawer && <CartDrawer cart={cart} onClose={() => setDrawer(false)} onCheckout={() => { setDrawer(false); navigate('/checkout'); }} />}
      {selected && (
        <ProductModal
          key={selected.id}
          product={selected}
          onClose={() => setSelected(null)}
          onAdd={add}
        />
      )}
    </>
  );
}
