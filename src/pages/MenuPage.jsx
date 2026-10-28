import { useMemo, useState } from 'react';
import { useProducts } from '../context/ProductsContext';
import ProductSection from '../components/ProductSection';
import PageHero from '../components/PageHero';
export default function MenuPage({ onAdd, onSelect }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');
  const { products } = useProducts();
  const categories = useMemo(
    () => ['All', ...new Set(products.map((p) => p.category))],
    [products],
  );
  return (
    <>
      <PageHero
        kicker="CRAFTED FOR EVERY CRAVING"
        title="Our menu"
        subtitle="From your first espresso to your favorite sweet treat, find something to love."
      />
      <section className="section container">
        <div className="category-tabs" aria-label="Filter menu by category">
          {categories.map((c) => (
            <button
              key={c}
              className={c === category ? 'selected' : ''}
              onClick={() => setCategory(c)}
              aria-pressed={c === category}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="menu-tools"><input aria-label="Search products" placeholder="Search coffee, desserts..." value={query} onChange={e => setQuery(e.target.value)} /><select aria-label="Sort products" value={sort} onChange={e => setSort(e.target.value)}><option value="default">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></div>
        <ProductSection
          filter={(p) => (category === 'All' || p.category === category) && `${p.name} ${p.description} ${p.category}`.toLowerCase().includes(query.toLowerCase())}
          sort={sort}
          onAdd={onAdd}
          onSelect={onSelect}
        />
      </section>
    </>
  );
}
