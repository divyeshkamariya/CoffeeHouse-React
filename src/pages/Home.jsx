import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ProductSection from '../components/ProductSection';
export default function Home({ onAdd, onSelect }) {
  return (
    <>
      <section className="hero">
        <div className="hero-shade" />
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-kicker">
              <span /> YOUR DAILY COFFEE RITUAL
            </div>
            <h1>
              Slow mornings.
              <br />
              <em>Beautiful coffee.</em>
            </h1>
            <p>
              Thoughtfully crafted cups, freshly baked treats, and a little space to make every
              moment yours.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-gold" to="/menu">
                Explore our menu <ArrowUpRight size={17} />
              </Link>
              <Link className="text-link" to="/about">
                Our story <ArrowRight size={16} />
              </Link>
            </div>
            <div className="hero-note">HANDCRAFTED WITH LOVE · SERVED FRESH DAILY</div>
          </div>
        </div>
      </section>
      <section className="welcome-strip">
        <div className="container strip-inner">
          <span>FRESHLY BREWED</span>
          <span className="dot">✦</span>
          <span>MADE WITH CARE</span>
          <span className="dot">✦</span>
          <span>GOOD MOMENTS</span>
        </div>
      </section>
      <section className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A LITTLE SOMETHING SPECIAL</span>
            <h2>
              Favorites worth <em>savoring.</em>
            </h2>
          </div>
          <Link className="under-link" to="/menu">
            View full menu <ArrowRight size={17} />
          </Link>
        </div>
        <ProductSection limit={4} onAdd={onAdd} onSelect={onSelect} />
      </section>
      <section className="story-feature">
        <div className="story-image">
          <img src="/assets/coffeeshop.jpg" alt="A cozy coffee house" loading="lazy" />
        </div>
        <div className="story-copy">
          <span className="eyebrow">MORE THAN JUST COFFEE</span>
          <h2>
            Come for the coffee.
            <br />
            <em>Stay for the feeling.</em>
          </h2>
          <p>
            There’s something special about your favorite corner, a warm cup in your hands, and a
            moment to slow down. That’s the feeling we bring to every visit.
          </p>
          <Link className="btn btn-outline" to="/about">
            Get to know us <ArrowRight size={17} />
          </Link>
        </div>
      </section>
      <section className="visit-banner">
        <div className="container">
          <span className="eyebrow">YOUR NEXT FAVORITE PLACE</span>
          <h2>
            A good day starts
            <br />
            with good coffee.
          </h2>
          <Link to="/contact" className="btn btn-gold">
            Plan your visit <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
