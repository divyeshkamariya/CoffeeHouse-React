import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';

const links = [
  ['/', 'Home'],
  ['/menu', 'Menu'],
  ['/about', 'Our story'],
  ['/gallery', 'Gallery'],
  ['/contact', 'Contact'],
  ['/orders', 'My Orders'],
];

export default function Header({ count, onCart }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link className="brand" to="/">
            <span className="brand-mark">✳</span>
            <span>
              coffee<span className="brand-light">house.</span>
              <small>BREWED WITH LOVE</small>
            </span>
          </Link>

          <nav
            id="main-nav"
            className={open ? 'nav-links open' : 'nav-links'}
            aria-label="Main navigation"
          >
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                end={path === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Link className="btn btn-gold nav-cta" to="/menu">
              See the menu
            </Link>
            <button
              className="bag-btn"
              onClick={onCart}
              aria-label={`Open cart with ${count} items`}
            >
              <ShoppingBag size={19} />
              <em className="bag-label">Bag</em>
              {count > 0 && <span>{count}</span>}
            </button>
            <button
              className="mobile-toggle"
              onClick={() => setOpen((x) => !x)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="main-nav"
            >
              {open ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
