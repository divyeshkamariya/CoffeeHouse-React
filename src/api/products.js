// Live coffee catalog: SampleAPIs. Prices are demo INR prices because the API has none.
// Dessert products remain in the bundled local JSON menu.
const HOT_URL = 'https://api.sampleapis.com/coffee/hot';
const ICED_URL = 'https://api.sampleapis.com/coffee/iced';
const DESSERT_URL = '/api/products.json';

async function fetchJson(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Menu request failed (${response.status})`);
  return response.json();
}

const demoPrice = (id, iced) => (iced ? 160 : 120) + ((Number(id) || 0) % 6) * 20;

function mapCoffee(item, iced) {
  return {
    id: `${iced ? 'iced' : 'hot'}-${item.id}`,
    name: item.title || 'Coffee',
    price: demoPrice(item.id, iced),
    image: item.image || '/assets/coffee1.jpg',
    description: item.description || (Array.isArray(item.ingredients) ? item.ingredients.join(', ') : 'Freshly prepared coffee'),
    category: iced ? 'Cold Coffee' : 'Hot Coffee',
  };
}

export async function getProducts(signal) {
  // Keep local desserts even if the live coffee service is temporarily down.
  const [hot, iced, local] = await Promise.allSettled([
    fetchJson(HOT_URL, signal),
    fetchJson(ICED_URL, signal),
    fetchJson(DESSERT_URL, signal),
  ]);
  if (signal?.aborted) throw new DOMException('Aborted', 'AbortError');
  const coffee = [
    ...(hot.status === 'fulfilled' && Array.isArray(hot.value) ? hot.value.map(x => mapCoffee(x, false)) : []),
    ...(iced.status === 'fulfilled' && Array.isArray(iced.value) ? iced.value.map(x => mapCoffee(x, true)) : []),
  ];
  const localList = local.status === 'fulfilled' ? (Array.isArray(local.value) ? local.value : local.value.products) : [];
  const desserts = (Array.isArray(localList) ? localList : [])
    .filter(x => /dessert|cake|pastry|bakery|sweet/i.test(x.category || ''))
    .map(x => ({ ...x, id: String(x.id), price: Number(x.price) || 0 }));
  if (!coffee.length && !desserts.length) throw new Error('Could not load products. Check your internet connection and try again.');
  return [...coffee, ...desserts];
}
